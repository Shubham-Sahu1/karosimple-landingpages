"use client";

import React, { useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

/**
 * VideoModal — accessible video lightbox using Radix Dialog
 * Props:
 *   - open: boolean
 *   - onOpenChange: (open: boolean) => void
 *   - videoUrl: string (YouTube embed URL or direct video URL)
 *   - title: string (for accessibility)
 */
export function VideoModal({
  open,
  onOpenChange,
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title = "Karo Simple Demo Video",
}) {
  // When dialog closes, stop video by removing and re-adding the src
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!open && iframeRef.current) {
      const src = iframeRef.current.src;
      iframeRef.current.src = "";
      iframeRef.current.src = src;
    }
  }, [open]);

  // Build YouTube embed URL with autoplay
  const embedUrl = videoUrl.includes("youtube.com/embed")
    ? `${videoUrl}?autoplay=1&rel=0&modestbranding=1`
    : videoUrl;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Backdrop */}
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-ks-navy/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Modal Content */}
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[101] -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>

          {/* Video Wrapper — 16:9 aspect ratio */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-pricing bg-ks-navy border border-ks-navy-light" style={{ paddingBottom: "56.25%" }}>
            <iframe
              ref={iframeRef}
              src={open ? embedUrl : ""}
              title={title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Close Button */}
          <Dialog.Close asChild>
            <button
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-ks-white flex items-center justify-center shadow-card hover:bg-ks-off-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ks-green"
              aria-label="Close video"
            >
              <X className="w-5 h-5 text-ks-navy" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
export default VideoModal;
