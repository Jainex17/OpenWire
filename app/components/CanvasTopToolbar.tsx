"use client";

import { Button } from "@/components/ui/button";

interface CanvasTopToolbarProps {
  onExport: () => void;
}

export default function CanvasTopToolbar() {
  return (
    <div className="fixed top-3 right-3 flex items-center gap-2 z-50">
      <Button
        variant={"ghost"}
        className="bg-secondary text-secondary-foreground cursor-pointer"
        onClick={() => { }}
      >
        Export
      </Button>
    </div>
  );
}
