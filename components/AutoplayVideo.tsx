'use client';

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

export default function AutoplayVideo({ src, className = '' }: AutoplayVideoProps) {
  return (
    <div className={`video-wrapper ${className}`}>
      <video
        src={src}
        autoPlay
        muted
        loop
        controls
        controlsList="nodownload"
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
