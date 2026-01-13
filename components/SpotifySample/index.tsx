import React, { useRef } from "react";
import { Howl, Howler } from "howler";

export const SpotifySample = ({
  src,
  children,
}: {
  src: string;
  children: React.ReactElement;
}) => {
  const soundRef = useRef<Howl | null>(null);

  Howler.volume(0.1);

  const handlePlaySound = () => {
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [src], // Update with the actual path to your audio file
        html5: true,
        onend: () => {
          soundRef.current?.unload();
          soundRef.current = null;
        },
      });
    }

    Howler.unload();
    soundRef.current.play();
  };

  const handleStopSound = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
  };

  return (
    <div onMouseDown={handlePlaySound} onMouseUp={handleStopSound}>
      {children}
    </div>
  );
};
