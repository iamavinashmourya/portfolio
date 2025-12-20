import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            // Using FormSubmit.co with AJAX for seamless background submission
            const response = await fetch("https://formsubmit.co/ajax/avinashgoweb@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Optional: Auto-close after success
                setTimeout(() => {
                    if (isOpen) {
                        setStatus("idle");
                        onClose();
                    }
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form Error:", error);
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-none overflow-hidden relative group"
                    >
                        {/* Corner Brackets (Cyber Style) */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white/30 group-hover:border-primary transition-colors z-20" />

                        {/* Clean Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <h2 className="text-xl font-semibold text-white">Contact Me</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        <div className="p-6 md:p-8 space-y-8">
                            {/* Contact Details */}
                            <div className="flex flex-col gap-4 text-sm text-gray-300">
                                <a href="mailto:avinashgoweb@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                                    <div className="p-2 bg-white/5 rounded-full text-primary">
                                        <FaEnvelope size={14} />
                                    </div>
                                    <span>avinashgoweb@gmail.com</span>
                                </a>
                                <a href="tel:+919313437008" className="flex items-center gap-3 hover:text-primary transition-colors">
                                    <div className="p-2 bg-white/5 rounded-full text-primary">
                                        <FaPhone size={14} />
                                    </div>
                                    <span>+91 9313437008</span>
                                </a>
                            </div>

                            {/* Separator */}
                            <div className="h-px bg-white/5" />

                            {/* Form Logic */}
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                                >
                                    <div className="text-green-500 text-5xl mb-2">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                                    <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your name"
                                            required
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors placeholder:text-gray-700"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors placeholder:text-gray-700"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Message</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Type your message..."
                                            required
                                            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors placeholder:text-gray-700 resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "submitting" ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <FaPaperPlane size={14} />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                    {status === "error" && (
                                        <p className="text-red-500 text-xs text-center mt-2">Failed to send. Please check your connection.</p>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
