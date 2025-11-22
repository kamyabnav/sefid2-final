import { Play, MessageSquare } from 'lucide-react';
import { VapiWidget } from "@vapi-ai/client-sdk-react";

interface FinalCTAProps {
  onGetStartedClick: () => void;
}

export default function FinalCTA({ onGetStartedClick }: FinalCTAProps) {

    const handleOpenWidget = () => {
    // VapiWidget renders this structure:
    // .vapi-widget-wrapper > div (fixed) > div (the clickable CTA)
    const cta = document.querySelector(
      ".vapi-widget-wrapper > div > div"
    ) as HTMLElement | null;

    if (!cta) {
      console.warn("Vapi widget CTA not found");
      return;
    }

    cta.click(); // simulate click on the floating button
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to see it in action?
        </h2>

        <p className="text-xl sm:text-2xl text-slate-300 mb-12">
          Watch a 40-second demo or book your free trial.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          <button onClick={handleOpenWidget} className="group px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-200 shadow-2xl hover:shadow-3xl flex items-center gap-3 w-full sm:w-auto justify-center">
            <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Talk to Sefid
          </button>
          <button onClick={onGetStartedClick} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-2xl hover:shadow-3xl flex items-center gap-3 w-full sm:w-auto justify-center">
            <MessageSquare className="w-6 h-6" />
            Book Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
