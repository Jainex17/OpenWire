interface SidebarProps {
  onAddPage: () => void;
}

export default function Sidebar({ onAddPage }: SidebarProps) {
  return (
    <div className="fixed left-4 top-4 flex flex-col gap-2">
      <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary text-foreground cursor-pointer transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <button
        onClick={onAddPage}
        className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer bg-secondary text-foreground"
        title="Add new page"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
