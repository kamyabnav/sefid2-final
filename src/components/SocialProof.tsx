import { Clock, Phone, TrendingUp, Heart } from 'lucide-react';

export default function SocialProof() {
  const metrics = [
    {
      icon: Clock,
      stat: "2–3 hours per day",
      label: "Saves receptionists",
    },
    {
      icon: Phone,
      stat: "100+ patient calls",
      label: "Handled per week",
    },
    {
      icon: TrendingUp,
      stat: "Up to 30%",
      label: "Boosts bookings",
    },
    {
      icon: Heart,
      stat: "Feels natural",
      label: "Patients love it",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Why Clinics Love It
          </h2>
          <p className="text-lg text-slate-600 mb-2">
            Currently being tested in local clinics — results so far:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-2">{metric.stat}</p>
              <p className="text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="text-lg text-slate-700">
              <span className="font-semibold text-green-700">"Feels like talking to a real person"</span>
              <br />
              <span className="text-sm text-slate-600 mt-2 block">— Feedback from actual patients</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
