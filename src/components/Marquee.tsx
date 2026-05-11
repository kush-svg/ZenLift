export default function Marquee() {
  const items = [
    "Web Development",
    "Business Automation",
    "Social Media",
    "WhatsApp Bots",
    "Landing Pages",
    "SEO",
  ];

  const fullList = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-zen-navy text-white py-6 overflow-hidden flex whitespace-nowrap border-y border-white/10 relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="flex animate-scroll hover:pause min-w-max">
        {fullList.map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-xl md:text-2xl font-heading font-medium tracking-wide uppercase opacity-80">{item}</span>
            <span className="text-zen-orange mx-8 text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
