"use client";

import Link from "next/link";

const EVENTS = [
  {
    id: "01",
    date: "13",
    month: "Oct. 2023",
    type: "Ceremony",
    title: "Cultural Festival",
    description: "Explore the Diverse Tapestry of Tradition That Flourishes Within Our Beautiful Grounds.",
    status: "Save my spot"
  },
  {
    id: "02",
    date: "23",
    month: "Oct. 2023",
    type: "Workshop",
    title: "Memorial Service",
    description: "Join Us As We Take The Path For A New And Personalized Service To Honor Our Loved Ones.",
    status: "Not Available",
    disabled: true
  },
  {
    id: "03",
    date: "05",
    month: "Nov. 2023",
    type: "Community Event",
    title: "Grief Support Group",
    description: "A compassionate space for those navigating loss to share stories and find healing together.",
    status: "Save my spot"
  }
];

export default function Events() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-primary/5">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
              Community Calendar
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight text-primary">Upcoming Events</h2>
            <p className="text-primary/50 text-xl font-light max-w-xl">
              Join Us For Our Upcoming Events That Celebrate Life, Community, And Remembrance.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {["View All", "Ceremony", "Workshop", "Memorial Day", "Community Event"].map((filter, i) => (
              <button 
                key={i}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  i === 0 
                    ? "bg-secondary text-white shadow-lg" 
                    : "bg-white text-primary border border-primary/10 hover:bg-primary/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              className="bg-white p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 shadow-sm hover:shadow-xl transition-all border border-primary/5 group"
            >
              <div className="flex items-center gap-10 md:w-56">
                <span className="text-primary/10 text-2xl font-serif italic">{event.id}</span>
                <div className="bg-background text-primary p-6 rounded-3xl text-center min-w-[100px] shadow-lg group-hover:scale-105 transition-transform border border-primary/5">
                  <span className="block text-3xl font-bold leading-none">{event.date}</span>
                  <span className="text-[10px] uppercase tracking-tighter opacity-60">{event.month}</span>
                </div>
              </div>

              <div className="flex-1 space-y-3 text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold">
                  {event.type}
                </span>
                <h3 className="text-3xl font-serif text-primary group-hover:text-secondary transition-colors">{event.title}</h3>
                <p className="text-primary/50 font-light text-lg max-w-2xl leading-relaxed">{event.description}</p>
              </div>

              <div className="md:w-48 text-right">
                <button 
                  disabled={event.disabled}
                  className={`w-full px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                    event.disabled 
                      ? "bg-primary/5 text-primary/20 cursor-not-allowed" 
                      : "bg-primary text-white hover:bg-secondary hover:scale-105 shadow-md"
                  }`}
                >
                  {event.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
