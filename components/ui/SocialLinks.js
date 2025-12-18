'use client';

import { Github, Linkedin, Facebook, Instagram, Envelope } from 'react-bootstrap-icons';
import { socialLinks } from '@/data/content';

export default function SocialLinks({ className = '', iconSize = 24 }) {
  const links = [
    { name: 'GitHub', icon: Github, url: socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, url: socialLinks.linkedin },
    { name: 'Facebook', icon: Facebook, url: socialLinks.facebook },
    { name: 'Instagram', icon: Instagram, url: socialLinks.instagram },
    { name: 'Email', icon: Envelope, url: `mailto:${socialLinks.email}` },
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            aria-label={link.name}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
