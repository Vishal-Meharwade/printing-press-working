import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        {/* Branding and Intro */}
        <div className="space-y-4">
          <div className="text-2xl font-bold">
            <span className="text-yellow-300">Printing</span>Press
          </div>
          <p className="text-sm opacity-80">
            Professional printing solutions tailored to your needs. Delivering
            quality and creativity in every print.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg border-b pb-2 border-white/30">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/printing", label: "Printing Services" },
              { to: "/multicolor", label: "Multicolor Print" },
              { to: "/admin", label: "Admin Panel" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm hover:text-yellow-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact and Social */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg border-b pb-2 border-white/30">
            Connect With Me
          </h3>
          <div className="flex space-x-4 items-center">
            {[
              {
                Icon: Github,
                href: "https://github.com/Vishal-Meharwade",
                ariaLabel: "GitHub Profile",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/vishalmeharwade",
                ariaLabel: "LinkedIn Profile",
              },
              {
                Icon: Twitter,
                href: "https://twitter.com/vishal_s_m",
                ariaLabel: "Twitter Profile",
              },
              {
                Icon: Mail,
                href: "mailto:vishalmeharwade1@gmail.com",
                ariaLabel: "Send Email",
              },
            ].map(({ Icon, href, ariaLabel }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Developer Attribution */}
          <div className="text-sm opacity-75 mt-4">
             {currentYear} Developed by Vishal S. Meharwade
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;