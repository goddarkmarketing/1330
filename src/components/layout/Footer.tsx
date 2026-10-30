import { Logo } from "@/components/ui/Logo";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { siteConfig } from "@/config/site";

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M19.365 9.86c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.49h1.796c.5 0 .906.41.906.91s-.405.91-.906.91H16.66a.91.91 0 0 1-.906-.91V7.91c0-.5.406-.91.906-.91h2.705c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.04h1.796zm-4.17 3.32a.908.908 0 0 1-.877-.68l-2.14-6.54a.91.91 0 0 1 1.73-.567l1.287 3.93 1.287-3.93a.91.91 0 1 1 1.73.567l-2.14 6.54a.908.908 0 0 1-.877.68zm-4.7 0a.91.91 0 0 1-.91-.91V7.91c0-.5.41-.91.91-.91s.91.41.91.91v4.36a.91.91 0 0 1-.91.91zm-2.73-.02a.91.91 0 0 1-.644-.263L5.04 10.82v2.33a.91.91 0 1 1-1.82 0V7.91a.91.91 0 0 1 1.554-.643l2.08 2.08V7.91a.91.91 0 1 1 1.82 0v4.36a.91.91 0 0 1-.91.89z" />
      <path d="M12 2C6.48 2 2 6.02 2 10.96c0 4.43 3.93 8.13 9.23 8.82.36.08.85.24 1 .47.12.2.08.52.04.73l-.17.99c-.05.3-.24 1.17 1.03.64 1.27-.53 6.85-4.03 9.35-6.9C23.56 13.45 24 12.26 24 10.96 24 6.02 19.52 2 12 2z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M14 13.5h2.5l.5-3H14V8.75c0-.87.24-1.46 1.49-1.46H17V4.5C16.67 4.46 15.6 4.35 14.4 4.35 11.9 4.35 10.2 5.82 10.2 8.48V10.5H7.5v3h2.7V19.5h3.8V13.5z" />
    </svg>
  );
}

function YoutubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M23.5 6.2a3.03 3.03 0 0 0-2.13-2.15C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.37.45A3.03 3.03 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3.03 3.03 0 0 0 2.13 2.15c1.87.45 9.37.45 9.37.45s7.5 0 9.37-.45a3.03 3.03 0 0 0 2.13-2.15A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.75 15.57V8.43L15.84 12l-6.09 3.57z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 isolate overflow-hidden bg-[var(--charcoal)] text-white">
      <div className="container-site grid gap-8 py-10 pb-24 sm:grid-cols-2 sm:pb-10 lg:grid-cols-[1.5fr_0.9fr_1fr_1.1fr] lg:gap-8 lg:py-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">เมนู</h3>
          <ul className="m-0 space-y-2.5 list-none p-0">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/65 no-underline transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">บริการของเรา</h3>
          <ul className="m-0 space-y-2.5 list-none p-0">
            {siteConfig.services.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-sm text-white/65 no-underline transition-colors hover:text-white"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">ช่องทางติดต่อ</h3>
          <ul className="m-0 space-y-2.5 list-none p-0 text-sm text-white/65">
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-inherit no-underline transition-colors hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline transition-colors hover:text-white"
              >
                LINE {siteConfig.lineId}
              </a>
            </li>
            <li>{siteConfig.workingHours}</li>
            <li className="leading-relaxed">{siteConfig.address}</li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C755] text-white"
            >
              <LineIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30">
        <p className="container-site py-4 text-center text-xs text-white/45">
          © <CopyrightYear /> {siteConfig.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
