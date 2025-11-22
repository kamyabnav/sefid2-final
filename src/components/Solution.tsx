import { Phone, Calendar, MessageSquare, Sparkles } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Meet Your 24/7 Receptionist
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
         Your Al receptionist will be trained specifically for your clinic - it knows your hours, services,
insurance policies, and how you like things handled. It can collect key patient information like name, healthcare
number, and insurance details, and store them neatly in your dashboard or CRM.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-blue-600 animate-pulse" />
                </div>
                <p className="text-lg font-semibold text-slate-900">Phone Rings</p>
                <p className="text-sm text-slate-500 mt-1">Incoming patient call</p>
              </div>

              <div className="hidden md:block">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </div>

              <div className="flex-1 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-semibold text-slate-900">AI Answers</p>
                <p className="text-sm text-slate-500 mt-1">Natural conversation</p>
              </div>

              <div className="hidden md:block">
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full" />
              </div>

              <div className="flex-1 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-green-600" />
                </div>
                <p className="text-lg font-semibold text-slate-900">Info captured + Appointment booked</p>
                <p className="text-sm text-slate-500 mt-1">Calendar updated instantly</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Phone, label: "Answers calls 24/7" },
              { icon: MessageSquare, label: "Natural conversations" },
              { icon: Calendar, label: "Books & reschedules" },
              { icon: Sparkles, label: "Always learning" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200 text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-slate-700 font-medium">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
