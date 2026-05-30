"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Generative ambient pad — no external audio files needed
// Built with Web Audio API oscillators forming slow chords
function createAmbientPad(ctx: AudioContext) {
  const masterGain = ctx.createGain();
  masterGain.gain.value = 0.04; // very quiet

  const masterFilter = ctx.createBiquadFilter();
  masterFilter.type = "lowpass";
  masterFilter.frequency.value = 800;

  masterGain.connect(masterFilter);
  masterFilter.connect(ctx.destination);

  // Chord progression: A minor → F major → C major → E minor
  // Frequencies for each chord (root, fifth, octave)
  const chords = [
    [110.0, 164.81, 220.0],   // A2, E3, A3
    [174.61, 261.63, 349.23], // F3, C4, F4
    [130.81, 196.0, 261.63],  // C3, G3, C4
    [82.41, 123.47, 164.81],  // E2, B2, E3
  ];

  const oscillators: OscillatorNode[] = [];
  const gains: GainNode[] = [];
  let chordIndex = 0;
  let intervalId: ReturnType<typeof setInterval>;

  function playChord(index: number) {
    // fade out old oscillators
    gains.forEach((g) => {
      try {
        g.gain.setTargetAtTime(0, ctx.currentTime, 2);
      } catch { /* ignore */ }
    });

    // create new oscillators for this chord
    const freqs = chords[index];
    const newOscs: OscillatorNode[] = [];
    const newGains: GainNode[] = [];

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();

      // mix of sine and triangle for a soft pad texture
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;

      // slight detune for width
      osc.detune.value = (i - 1) * 4;

      g.gain.value = 0;
      g.gain.setTargetAtTime(1, ctx.currentTime, 3); // 3 second attack

      osc.connect(g);
      g.connect(masterGain);
      osc.start();

      newOscs.push(osc);
      newGains.push(g);
    });

    oscillators.push(...newOscs);
    gains.push(...newGains);

    // cleanup old oscillators after fade
    setTimeout(() => {
      oscillators.splice(0, oscillators.length - newOscs.length);
      gains.splice(0, gains.length - newGains.length);
    }, 4000);
  }

  // start first chord immediately
  playChord(0);

  // cycle chords every 12 seconds
  intervalId = setInterval(() => {
    chordIndex = (chordIndex + 1) % chords.length;
    playChord(chordIndex);
  }, 12000);

  return () => {
    clearInterval(intervalId);
    oscillators.forEach((o) => {
      try { o.stop(); } catch { /* ignore */ }
    });
    masterGain.disconnect();
    masterFilter.disconnect();
  };
}

export default function AmbientAudio() {
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);

  const startAudio = useCallback(() => {
    if (started) return;
    setStarted(true);
    setMuted(false);
  }, [started]);

  useEffect(() => {
    const handleFirstInteraction = () => {
      startAudio();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [startAudio]);

  useEffect(() => {
    if (!started || muted) {
      if (stopRef.current) {
        stopRef.current();
        stopRef.current = null;
      }
      return;
    }

    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AC) return;

    const ctx = new AC();
    stopRef.current = createAmbientPad(ctx);

    return () => {
      if (stopRef.current) {
        stopRef.current();
        stopRef.current = null;
      }
      ctx.close();
    };
  }, [started, muted]);

  return (
    <button
      onClick={() => {
        if (!started) setStarted(true);
        setMuted((m) => !m);
      }}
      aria-label={muted ? "Unmute ambient music" : "Mute ambient music"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-surface border border-border shadow-sm text-[11px] text-muted hover:text-foreground transition-colors"
    >
      {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      <span className="hidden sm:inline">{muted ? "Music off" : "Music on"}</span>
    </button>
  );
}
