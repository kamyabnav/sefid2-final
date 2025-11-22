interface HeaderProps {
  onGetStartedClick: () => void;
}

export default function Header({ onGetStartedClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/Screen Shot 2025-11-21 at 5.12.54 PM.png" alt="Sefid" className="h-12 w-auto" />
          </div>

          <button onClick={onGetStartedClick} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Try it For Free For 30 Days
          </button>
        </div>
      </div>
    </header>
  );
}
