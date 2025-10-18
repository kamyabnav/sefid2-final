import { Shield, Video, Lock, Users } from 'lucide-react';

export default function Trust() {
  const trustPoints = [
    {
      icon: Shield,
      title: "You control what the AI says",
      description: "Customize responses and scripts to match your clinic's voice",
    },
    {
      icon: Video,
      title: "Every call is recorded and reviewable",
      description: "Full transparency with access to all call recordings",
    },
    {
      icon: Lock,
      title: "HIPAA-compliant and privacy-secure",
      description: "Enterprise-grade security for patient information",
    },
    {
      icon: Users,
      title: "Works alongside your staff, not instead of them",
      description: "Enhances your team's capabilities without replacement",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Why It's Safe to Try
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-600">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
