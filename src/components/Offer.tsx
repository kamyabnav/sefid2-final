import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Offer() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold">Limited Time Offer</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Try it 100% Free for One Month
        </h2>

        <p className="text-2xl mb-8 text-blue-100">
          Just cover call costs (usually under $30)
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              "No setup fee",
              "No changes to your system",
              "No commitment",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="px-12 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 mb-6">
          Start Your Free Trial
        </button>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          You'll see the difference within a week — or don't continue. Simple.
        </p>
      </div>
    </section>
  );
}
