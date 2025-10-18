import { PhoneOff, Clock, DollarSign, Users } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Users,
      text: "Receptionists get swamped with repetitive calls",
    },
    {
      icon: PhoneOff,
      text: "Missed calls = missed patients",
    },
    {
      icon: Clock,
      text: "Calls after hours never get answered",
    },
    {
      icon: DollarSign,
      text: "Hiring and training new staff costs thousands",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What Every Clinic Struggles With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-lg text-slate-700 pt-2">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl text-slate-600 font-medium">
            We built a system that takes care of all that — <span className="text-blue-600 font-semibold">instantly</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
