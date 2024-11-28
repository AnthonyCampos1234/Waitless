import { GlassyBackground } from "@/components/ui/glassy-background";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { BenefitsSection } from "@/components/benefits-section";
import { InterestForm } from "@/components/interest-form";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <GlassyBackground />
      <Navbar />
      
      {/* Hero with Form Section */}
      <section className="min-h-screen relative pt-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-100/20 via-transparent to-transparent" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-20">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="relative z-10">
              <HeroSection />
              {/* Premium decorative line */}
              <div className="absolute -bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-50" />
            </div>
            
            {/* Right side - Form */}
            <div className="lg:sticky lg:top-8 relative z-20" id="interest-form">
              <div className="relative bg-white/80 backdrop-blur-2xl border border-sky-100/50 rounded-3xl p-8 shadow-2xl shadow-sky-100/20 overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-blue-500/5 to-indigo-500/5 rounded-3xl" />
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-sky-200/20 to-transparent rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-sky-200/20 to-transparent rounded-br-3xl" />
                
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                    Get Ready
                  </h3>
                  <InterestForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced styling */}
      <div id="features" className="relative z-10 border-t border-sky-100/20">
        <div className="bg-gradient-to-b from-white/50 to-sky-50/50 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-100/10 via-transparent to-transparent" />
          <FeaturesSection />
        </div>
      </div>

      {/* Benefits Section with enhanced styling */}
      <div id="benefits" className="relative z-10 border-t border-sky-100/20">
        <div className="bg-gradient-to-b from-sky-50/50 to-white/50 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-100/10 via-transparent to-transparent" />
          <BenefitsSection />
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-sky-100/20">
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/50 backdrop-blur-xl" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 text-transparent bg-clip-text">
                Waitless
              </span>
            </div>
            <p className="text-gray-600">
              © 2024 Waitless. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
