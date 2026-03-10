import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-12 text-sm text-text-muted">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          {personalInfo.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              {link.platform}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
