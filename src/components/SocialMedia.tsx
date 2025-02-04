import React from 'react';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/pnmaz",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADg85qsB4X_belxy9l0tocxK6wmbE1I2-yg&keywords=priyanka%20nath%20mazumdar&origin=RICH_QUERY_SUGGESTION&position=1&searchId=3a96d16f-db53-42c4-a535-de84f6788475&sid=cN2&spellCorrectionEnabled=false",
    label: "LinkedIn"
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/psyche_eos/",
    label: "Instagram"
  },
  {
    icon: Facebook,
    url: "",
    label: "Facebook"
  }
];

export default function SocialMedia() {
  return (
    <section className="py-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}