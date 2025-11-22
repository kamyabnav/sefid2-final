import { Phone, Play } from "lucide-react";
import { VapiWidget } from "@vapi-ai/client-sdk-react";

interface HeroProps {
  onGetStartedClick: () => void;
}

export default function Hero({ onGetStartedClick }: HeroProps) {
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
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Phone className="w-4 h-4" />
            AI-Powered Phone Assistant
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Never Miss Another
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Patient Call
            </span>
            <br />
            Even After Hours
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Patients call with the same repetitive questions every day. Our AI receptionist
            answers them instantly, books and reschedules appointments, and
            connects to your existing phone number, no new hardware, no setup
            stress.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button onClick={onGetStartedClick} className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Try It Free For 30 Days
            </button>

            <button
              onClick={handleOpenWidget}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Hear Sefid Answer a Real Call
            </button>
          </div>

          <p className="text-sm text-slate-500 max-w-md mx-auto">
            No Commitment, Cancel Anytime.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent h-32 bottom-0 z-10" />
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-sm text-slate-600 font-medium">
                AI Call in Progress...
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-slate-700">
                      "Hi, I'd like to schedule a cleaning appointment for next
                      week."
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-lg">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3">
                    <p>
                      "Of course! I have availability on Tuesday at 2 PM or
                      Wednesday at 10 AM. Which works better for you?"
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vapi widget (React version) */}
      <VapiWidget
        publicKey="0f230ff6-8bb2-435a-bce1-9c2979788a83"
        assistantId="e14476a7-2ac3-4ac5-9bad-aa947947fbc7"
        mode="voice"
        title="Talk with Sefid"
      />
    </section>
  );
}