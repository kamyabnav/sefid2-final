import { Cable, Bot, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Cable,
      number: "1",
      title: "We connect to your existing phone number.",
      description: "No new hardware needed. Keep your current setup.",
    },
    {
      icon: Bot,
      number: "2",
      title: "Al answers calls, books directly into your calendar or CRM.",
      description: "Seamless scheduling with your existing system.",
    },
    {
      icon: BarChart3,
      number: "3",
      title: "You monitor results on a dashboard",
      description: "No hidden data, no tricks. Full transparency.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            Get started in three simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl p-8 shadow-md border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-slate-700">
              <span className="font-semibold text-blue-700">Works with major dental and medical platforms</span>
              <br />
              <span className="text-sm text-slate-600 mt-2 block">Cleardent, Tracker, CareCru, Google Calendar, and more</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
