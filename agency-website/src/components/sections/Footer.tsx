"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-foreground/10">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-6">
              Ready to accelerate?
            </h2>
            <p className="text-lg text-foreground/70 font-medium font-sans max-w-md mb-12">
              Book a technical consultation to discuss how we can engineer your next unfair advantage.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-foreground/10 bg-white flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-base font-bold font-sans text-foreground/80 group-hover:text-foreground transition-colors">hello@pragathisolutions.com</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-foreground/10 bg-white flex items-center justify-center group-hover:border-primary transition-colors">
                  <MapPin className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-base font-bold font-sans text-foreground/80 group-hover:text-foreground transition-colors">Global Operations (Remote)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-foreground/5 shadow-sm">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <label className="text-xs font-bold font-sans text-foreground/60 uppercase tracking-widest mb-2 block">Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe" 
                  className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg font-medium font-sans text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors rounded-none"
                />
              </div>
              
              <div className="group relative">
                <label className="text-xs font-bold font-sans text-foreground/60 uppercase tracking-widest mb-2 block">Company / Project</label>
                <input 
                  type="text" 
                  placeholder="Acme Corp" 
                  className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg font-medium font-sans text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors rounded-none"
                />
              </div>

              <div className="group relative">
                <label className="text-xs font-bold font-sans text-foreground/60 uppercase tracking-widest mb-2 block">How can we help?</label>
                <textarea 
                  placeholder="Tell us about your technical bottlenecks..." 
                  rows={3}
                  className="w-full bg-transparent border-b border-foreground/20 pb-3 text-lg font-medium font-sans text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
                />
              </div>

              <button className="group relative w-full inline-flex items-center justify-center px-8 py-4 mt-4 font-bold text-white bg-primary rounded-lg overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-md">
                <span className="relative flex items-center gap-2 text-base">
                  Initiate Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-foreground/10">
          <p className="text-foreground/50 text-sm font-sans font-medium">
            © {new Date().getFullYear()} Pragathi Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <a href="#" className="text-foreground/50 hover:text-foreground font-sans font-bold text-xs transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-foreground/50 hover:text-foreground font-sans font-bold text-xs transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
