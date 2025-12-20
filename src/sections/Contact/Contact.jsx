import SectionHeader from "../../components/ui/SectionHeader";
import CyberCard from "../../components/ui/CyberCard";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 max-w-4xl mx-auto">
      <SectionHeader title="COMM_LINK" subtitle="[ESTABLISH_CONNECTION]" />

      <CyberCard className="p-8 md:p-12 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <form action="https://formspree.io/f/mldgodbw" method="post" className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono text-primary ml-1">USER_ID // NAME</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono text-primary ml-1">COMM_CHANNEL // EMAIL</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-mono text-primary ml-1">TRANSMISSION // MESSAGE</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Type your message here..."
              required
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="group w-full md:w-auto flex items-center justify-center gap-3 bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary px-8 py-3 rounded-lg font-mono tracking-wider transition-all"
          >
            <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            SEND_TRANSMISSION
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <a href="mailto:avinashmourya1533@gmail.com" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <FaEnvelope />
            <span>avinashmourya1533@gmail.com</span>
          </a>
        </div>
      </CyberCard>
    </section>
  );
};

export default Contact;
