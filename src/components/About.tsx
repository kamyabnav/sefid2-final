import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Why This Exists
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 border border-slate-200">
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            We built this after seeing how many clinics lose patients simply because no one could pick up the
phone fast enough. Our goal isn't to replace receptionists, it's to free them from repetitive, stressful
calls so they can focus on what matters: patient care.
          </p>
          <p className="text-xl text-slate-700 leading-relaxed">
            Our goal isn't to replace staff, it's to <span className="font-semibold text-blue-600">free them from repetitive calls</span> so they can focus on patients.
          </p>
        </div>
      </div>
    </section>
  );
}
