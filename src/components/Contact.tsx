
import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sai Neel",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://www.github.com/saineelofficial",
      label: "GitHub",
      color: "#333 dark:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sai-neel",
      label: "LinkedIn",
      color: "#0077B5",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "emailsforsai.work@gmail.com",
      href: "mailto:emailsforsai.work@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (240) 375-0200",
      href: "tel:+12403750200",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Washington, D.C.",
      href: "https://maps.app.goo.gl/QmrJn2JmFeYrsAVU6",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-500/5 rounded-full"
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              position: "absolute",
              left: `${(i % 3) * 33}%`,
              top: `${Math.floor(i / 3) * 33}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Let's Create Something
            <motion.span
              className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Amazing Together
            </motion.span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your ideas to life? I'm always excited to work on new
            projects and collaborate with innovative teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center gap-3">
                Send me a message
                <motion.div
                  animate={{ rotate: [0, 14, -8, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  👋
                </motion.div>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none group-hover:border-blue-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none group-hover:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none group-hover:border-blue-400"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right side - Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12 w-full"
          >
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="p-2 sm:p-3 bg-blue-500/10 rounded-lg sm:rounded-xl text-blue-500 flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-words">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Connect with Me
              </h3>
              <div className="flex justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    style={{ color: social.color }}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
