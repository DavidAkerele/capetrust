"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-white/95 p-10 rounded-2xl border border-[var(--color-primary)]/5 shadow-xl text-center">
        <div className="w-20 h-20 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-secondary)]">
          <Send className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-[var(--color-primary)] mb-4">Message Received</h3>
        <p className="text-gray-600 font-light leading-relaxed">
          Thank you for reaching out. An advisor will contact you within the next 24 hours to assist with your inquiries.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 rounded-full border-[var(--color-primary)] text-[var(--color-primary)]"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 md:p-16 shadow-2xl rounded-[3rem] border border-[var(--color-primary)]/5">
      <h3 className="font-serif text-4xl font-bold text-[var(--color-primary)] mb-10 italic">Inquiry Form</h3>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-[var(--color-primary)]/40 uppercase tracking-[0.25em]">First Name</label>
            <Input placeholder="John" required className="bg-transparent border-0 border-b border-[var(--color-primary)]/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--color-secondary)] transition-all h-14 text-lg placeholder:text-gray-300" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-bold text-[var(--color-primary)]/40 uppercase tracking-[0.25em]">Last Name</label>
            <Input placeholder="Doe" required className="bg-transparent border-0 border-b border-[var(--color-primary)]/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--color-secondary)] transition-all h-14 text-lg placeholder:text-gray-300" />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold text-[var(--color-primary)]/40 uppercase tracking-[0.25em]">Email Address</label>
          <Input type="email" placeholder="john@example.com" required className="bg-transparent border-0 border-b border-[var(--color-primary)]/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--color-secondary)] transition-all h-14 text-lg placeholder:text-gray-300" />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold text-[var(--color-primary)]/40 uppercase tracking-[0.25em]">Service Interest</label>
          <div className="relative">
            <select className="w-full bg-transparent border-0 border-b border-[var(--color-primary)]/10 py-4 text-lg focus:outline-none focus:border-[var(--color-secondary)] transition-all appearance-none cursor-pointer text-[var(--color-primary)]">
              <option value="funeral">Traditional Funeral</option>
              <option value="cremation">Cremation Services</option>
              <option value="cemetery">Cemetery & Burial</option>
              <option value="investment">Pre-planning Investment</option>
              <option value="other">Other Inquiry</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-2 h-2 border-r border-b border-[var(--color-primary)]/30 rotate-45 mr-1"></div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold text-[var(--color-primary)]/40 uppercase tracking-[0.25em]">Message</label>
          <textarea 
            placeholder="How can we assist you?" 
            required 
            className="w-full bg-transparent border-0 border-b border-[var(--color-primary)]/10 py-4 text-lg focus:outline-none focus:border-[var(--color-secondary)] transition-all resize-none h-40 placeholder:text-gray-300"
          ></textarea>
        </div>

        <Button 
          type="submit" 
          disabled={status === "sending"}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-full py-8 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:scale-[1.02] active:scale-100"
        >
          {status === "sending" ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
}
