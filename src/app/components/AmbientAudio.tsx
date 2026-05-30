"use client";

import { useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientAudio() {
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const startAudio = useCallback(() => {
    if (started) return;
    setStarted(true);
    setMuted(false);
  }, [started]);

  useEffect(() => {
    // Wait for first user interaction to satisfy browser autoplay policies
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
    if (!started || muted) return;

    // Create a subtle ambient drone using Web Audio API
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AC) return;

    const ctx = new AC();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Low drone ~80Hz + ~120Hz for a subtle hum
    osc1.type = "sine";
    osc1.frequency.value = 80;
    osc2.type = "sine";
    osc2.frequency.value = 120;

    // Very low volume — barely perceptible
    gain.gain.value = 0.03;

    filter.type = "lowpass";
    filter.frequency.value = 200;

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();

    return () => {
      osc1.stop();
      osc2.stop();
      ctx.close();
    };
  }, [started, muted]);

  return (
    <button
      onClick={() => {
        if (!started) setStarted(true);
        setMuted((m) => !m);
      }}
      aria-label={muted ? "Unmute ambient sound" : "Mute ambient sound"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full bg-surface border border-border shadow-sm text-[11px] text-muted hover:text-foreground transition-colors"
    >
      {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      <span className="hidden sm:inline">{muted ? "Sound off" : "Sound on"}</span>
    </button>
  );
}
