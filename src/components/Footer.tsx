import Link from "next/link";
import { Camera, Briefcase, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zen-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 bg-zen-orange rounded flex items-center justify-center text-white font-heading font-bold text-xl">
                Z
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                ZenLift
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg">
              We build high-converting websites and systems that help Indian SMEs and startups grow digitally.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Work', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-zen-orange transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zen-orange transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zen-orange transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="https://wa.me/919079144245" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ZenLift. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Made in Faridabad, Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}
