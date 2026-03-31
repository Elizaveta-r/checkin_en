"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CirclePlay } from "lucide-react";
import Button from "@/ui/Button";

export default function ModalVideo({ buttonStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // Block background scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <Button
        title={"WATCH DEMO"}
        icon={<CirclePlay />}
        iconPosition={"left"}
        onClick={() => setIsOpen(true)}
        className={buttonStyle}
      />

      {/* Modal via portal */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative w-[90vw] max-w-225 aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/video/video.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                muted
              />
              <button
                onClick={() => setIsOpen(false)}
                className="
                    absolute top-3 right-4
                    flex items-center justify-center
                    w-10 h-10
                    rounded-full
                    text-2xl font-light
                    bg-black/60 text-white
                    backdrop-blur-sm
                    hover:bg-black/80
                    transition
                "
                aria-label="Close video"
              >
                &times;
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
