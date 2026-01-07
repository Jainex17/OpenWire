"use client";

interface CanvasToolbarProps {
  zoom: number;
  onZoomChange: (zoom: number) => void;
  activeDevice: "desktop" | "tablet" | "mobile";
  onDeviceChange: (device: "desktop" | "tablet" | "mobile") => void;
  onReset: () => void;
}

export default function CanvasToolbar({
  zoom,
  onZoomChange,
  activeDevice,
  onDeviceChange,
  onReset,
}: CanvasToolbarProps) {
  const zoomLevels = [5, 10, 25, 50, 75, 100, 125, 150, 200];

  const handleZoomIn = () => {
    const currentIndex = zoomLevels.findIndex((level) => level > zoom);
    if (currentIndex !== -1) {
      onZoomChange(zoomLevels[currentIndex]);
    } else {
      onZoomChange(zoomLevels[zoomLevels.length - 1]);
    }
  };

  const handleZoomOut = () => {
    const currentIndex = zoomLevels.findIndex((level) => level >= zoom);
    if (currentIndex > 0) {
      onZoomChange(zoomLevels[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 bg-secondary rounded-[var(--radius)] border border-border p-1">
      <div className="flex items-center gap-1">
        <button
          onClick={() => onDeviceChange("desktop")}
          className={`p-2 rounded transition-all ${activeDevice === "desktop"
            ? "bg-background text-foreground shadow-md"
            : "text-foreground hover:bg-accent hover:text-foreground"
            }`}
          title="Desktop view"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
            <line x1="8" y1="21" x2="16" y2="21" strokeWidth={1.5} strokeLinecap="round" />
            <line x1="12" y1="17" x2="12" y2="21" strokeWidth={1.5} />
          </svg>
        </button>
        <button
          onClick={() => onDeviceChange("tablet")}
          className={`p-2 rounded transition-all ${activeDevice === "tablet"
            ? "bg-background text-foreground shadow-md"
            : "text-foreground hover:bg-accent hover:text-foreground cursor-pointer"
            }`}
          title="Tablet view"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={1.5} />
            <line x1="12" y1="18" x2="12" y2="18" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </button>
        <button
          onClick={() => onDeviceChange("mobile")}
          className={`p-2 rounded transition-all ${activeDevice === "mobile"
            ? "bg-background text-foreground shadow-md"
            : "text-foreground hover:bg-accent hover:text-foreground cursor-pointer"
            }`}
          title="Mobile view"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth={1.5} />
            <line x1="12" y1="18" x2="12" y2="18" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="w-px h-6 bg-[#e0d9ce]" />

      <div className="flex items-center gap-1 px-2">
        <button
          onClick={handleZoomOut}
          disabled={zoom <= zoomLevels[0]}
          className="p-1.5 text-foreground hover:text-foreground hover:bg-accent rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          title="Zoom out"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>

        <button
          onClick={onReset}
          className="min-w-[52px] px-2 py-1 text-sm font-medium text-foreground hover:text-foreground hover:bg-accent rounded transition-colors text-center"
          title="Reset zoom"
        >
          {Math.round(zoom)}%
        </button>

        <button
          onClick={handleZoomIn}
          disabled={zoom >= zoomLevels[zoomLevels.length - 1]}
          className="p-1.5 text-foreground hover:text-foreground hover:bg-accent rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          title="Zoom in"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
