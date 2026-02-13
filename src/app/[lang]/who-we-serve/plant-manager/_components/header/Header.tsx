'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SolutionsMegaMenu from './mega/SolutionsMegaMenu';
import WhoWeServeMegaMenu from './mega/WhoWeServeMegaMenu';
import ResourcesMegaMenu from './mega/ResourcesMegaMenu';
import CompanyMegaMenu from './mega/CompanyMegaMenu';
import PricingMegaMenu from './mega/PricingMegaMenu';

import LanguageSwitcher from '@/app/[lang]/who-we-serve/plant-manager/_components/LanguageSwitcher';

type NavKey = 'solutions' | 'who' | 'resources' | 'company' | 'pricing';

type NavItem = {
  key: NavKey;
  label: string;
  href: string;
  hasDropdown?: boolean;
};

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Globe({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 2c3 2.7 5 6.7 5 10s-2 7.3-5 10c-3-2.7-5-6.7-5-10S9 4.7 12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function TractianLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="135"
      height="25"
      viewBox="0 0 177 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M62.458 0.843088L72.7058 23.9849H65.8867L64.0604 19.4754L62.16 14.6309L59.1789 7.21453L56.1977 14.6309L54.2973 19.4754L52.471 23.9849H45.7631L56.011 0.843088H62.458ZM42.4099 13.8112C43.1926 12.5437 43.6018 11.0909 43.6018 9.41432C43.6018 7.7377 43.1541 6.1723 42.3344 4.8678C41.4775 3.56331 40.2842 2.59523 38.7573 1.88669C37.1919 1.17814 35.3656 0.843088 33.3169 0.843088H22.734V5.98555H32.9077C34.2122 5.98555 35.2558 6.28353 35.9629 6.87948C36.6344 7.47543 37.0065 8.33227 37.0065 9.37587C37.0065 10.4195 36.6344 11.2763 35.9629 11.8723C35.2544 12.4682 34.2492 12.7291 32.9077 12.7291H22.734V23.9464H29.2921V17.7974H32.8692L37.0807 23.9464H44.0865L39.0566 16.7181C40.4724 16.0096 41.5901 15.0786 42.4099 13.8112ZM176.492 0.843088H170.082L170.045 7.4768L176.455 15.2283L176.492 0.843088ZM81.3869 6.54443C82.3934 6.02263 83.5112 5.72465 84.7786 5.72465C86.9029 5.72465 88.7292 6.65565 90.219 8.44487L94.3934 4.68106C93.2757 3.30241 91.8599 2.18466 90.1449 1.43904C88.4312 0.693414 86.5307 0.321289 84.4065 0.321289C81.9471 0.321289 79.7858 0.843088 77.8483 1.88669C75.9478 2.93028 74.4195 4.34601 73.3018 6.13523C72.184 7.9986 71.6622 10.0487 71.6622 12.3584C71.6622 14.668 72.184 16.7552 73.3018 18.5815C74.4195 20.3707 75.9478 21.7864 77.8483 22.793C79.7487 23.8366 81.9471 24.3213 84.4065 24.3213C86.5307 24.3213 88.3941 23.9492 90.1449 23.2035C91.8215 22.4579 93.2386 21.3772 94.3934 19.9615L90.219 16.1977C88.6907 18.024 86.8644 18.9179 84.7786 18.9179C83.5112 18.9179 82.3934 18.657 81.3869 18.0982C80.3804 17.5764 79.6348 16.7937 79.1143 15.7871C78.5939 14.7806 78.3316 13.6258 78.3316 12.3213C78.3316 11.0168 78.5925 9.86197 79.1143 8.89252C79.6361 7.886 80.4188 7.1033 81.3869 6.54443ZM0 6.02263H7.11844V23.9849H13.6766V6.02263H20.7566V0.843088H0V6.02263ZM154.505 23.9849H160.915L160.952 17.0532L154.542 8.89252L154.505 23.9849ZM136.356 0.843088L126.145 23.9849H132.816L134.642 19.4754L136.542 14.6309L139.524 7.21453L142.505 14.6309L144.405 19.4754L146.231 23.9849H153.05L142.803 0.843088H136.356ZM170.082 13.1781L159.871 0.843088H154.468V3.93543L160.877 11.6869L171.088 24.0219H176.492V21.3388L170.082 13.1781ZM118.133 23.9849H124.691V0.843088H118.133V23.9849ZM95.437 6.02263H102.518V23.9849H109.077V6.02263H116.157V0.843088H95.437V6.02263Z"
        fill="currentColor"
      />
    </svg>
  );
}


export default function Header({ lang }: { lang: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<NavKey | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const [overlayTop, setOverlayTop] = useState(0);

  const nav: NavItem[] = useMemo(
    () => [
      { key: 'solutions', label: 'Solutions', href: `/${lang}/solutions`, hasDropdown: true },
      { key: 'who', label: 'Who We Serve', href: `/${lang}/who-we-serve`, hasDropdown: true },
      { key: 'resources', label: 'Resources', href: `/${lang}/resources`, hasDropdown: true },
      { key: 'company', label: 'Company', href: `/${lang}/company`, hasDropdown: true },
      { key: 'pricing', label: 'Pricing', href: `/${lang}/pricing`, hasDropdown: true },
    ],
    [lang]
  );

  const closeAll = () => {
    setMobileOpen(false);
    setMegaOpen(null);
    setLangOpen(false);
  };

  const closeDesktopOverlays = () => {
    setMegaOpen(null);
    setLangOpen(false);
  };

  const toggleMega = (key: NavKey) => {
    setLangOpen(false);
    setMegaOpen((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const renderMega = () => {
    if (!megaOpen) return null;

    const common = { lang, onNavigate: closeAll };

    switch (megaOpen) {
      case 'solutions':
        return <SolutionsMegaMenu {...common} />;
      case 'who':
        return <WhoWeServeMegaMenu {...common} />;
      case 'resources':
        return <ResourcesMegaMenu {...common} />;
      case 'company':
        return <CompanyMegaMenu {...common} />;
      case 'pricing':
        return <PricingMegaMenu {...common} />;
      default:
        return null;
    }
  };

  const desktopOverlayOpen = !!megaOpen || langOpen;

  useEffect(() => {
    const measure = () => {
      if (!headerRef.current) return;
      setOverlayTop(headerRef.current.getBoundingClientRect().height);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);

    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      ro.disconnect();
    };
  }, [lang]);

  useEffect(() => {
    if (!desktopOverlayOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [desktopOverlayOpen]);

  const isFullWidthMega = megaOpen === 'solutions' || megaOpen === 'who';

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-40 hidden lg:block',
          desktopOverlayOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          'transition-opacity duration-200',
        ].join(' ')}
        style={{ top: overlayTop }}
        onClick={closeDesktopOverlays}
        aria-hidden={!desktopOverlayOpen}
      >
        <div className="h-full w-full bg-black/60" />
      </div>
      <div className="sticky top-0 z-50 w-full">
        <header ref={headerRef} className="w-full border-b border-slate-200/70 bg-[#F6F8FB]">
          <div className="mx-auto flex h-16 max-w-310 items-center justify-between px-4 md:px-6">
            <Link href={`/${lang}`} className="flex items-center" onClick={closeAll}>
  <TractianLogo className="h-6 w-auto text-blue-600" />
</Link>
            <nav className="hidden items-center gap-8 lg:flex">
              {nav.map((item) => {
                const active = megaOpen === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleMega(item.key)}
                    className={[
                      'group inline-flex items-center gap-1 text-sm font-medium transition-colors',
                      active ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600',
                    ].join(' ')}
                    aria-expanded={active}
                    aria-controls={`mega-${item.key}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={[
                        'mt-px transition-transform',
                        active ? 'rotate-180 text-blue-600' : 'text-slate-500 group-hover:text-blue-600',
                      ].join(' ')}
                    />
                  </button>
                );
              })}
            </nav>
            <div className="hidden items-center gap-5 lg:flex">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setMegaOpen(null);
                    setLangOpen((v) => !v);
                  }}
                  className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:text-blue-600"
                  aria-label="Change language"
                  aria-expanded={langOpen}
                >
                  <Globe className="text-slate-600" />
                  <ChevronDown className={['text-slate-500 transition-transform', langOpen ? 'rotate-180' : ''].join(' ')} />
                </button>
                <div
                  className={[
                    'absolute right-0 mt-2 w-48 border border-slate-300 bg-slate-100 text-slate-500 shadow-lg',
                    'origin-top-right transition-all duration-150',
                    langOpen ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-95',
                  ].join(' ')}
                >
                  <div className="p-2">
                    <LanguageSwitcher lang={lang} onSelect={() => setLangOpen(false)} />
                  </div>
                </div>
              </div>
              <Link href={`/${lang}/login`} onClick={closeAll} className="text-sm font-medium text-slate-700 hover:text-blue-600">
                Login
              </Link>
              <Link
                href={`/${lang}/get-demo`}
                onClick={closeAll}
                className="rounded-md border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Get Demo
              </Link>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen(true);
                setMegaOpen(null);
                setLangOpen(false);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/70 lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-slate-900" />
                <span className="absolute left-0 top-1.75 h-0.5 w-5 rounded bg-slate-900" />
                <span className="absolute left-0 bottom-0 h-0.5 w-5 rounded bg-slate-900" />
              </span>
            </button>
          </div>
        </header>
      </div>
      <div
        className={[
          'fixed z-50 hidden lg:block',
          'transition-[transform,opacity] duration-200',
          megaOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none',
          isFullWidthMega ? 'left-0 right-0' : 'left-1/2 -translate-x-1/2',
        ].join(' ')}
        style={{ top: overlayTop }}
        aria-hidden={!megaOpen}
      >
        <div
          className={[
            'border-b border-slate-200/70 bg-slate-50 shadow-sm',
            isFullWidthMega ? 'w-screen' : 'w-230 max-w-[calc(100vw-48px)]',
          ].join(' ')}
          id={megaOpen ? `mega-${megaOpen}` : undefined}
        >
          {renderMega()}
        </div>
      </div>
      <div className={['fixed inset-0 z-60 lg:hidden', mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'].join(' ')}>
        <div
          onClick={() => setMobileOpen(false)}
          className={['absolute inset-0 bg-black/30 transition-opacity', mobileOpen ? 'opacity-100' : 'opacity-0'].join(' ')}
        />
        <aside
          className={[
            'absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl transition-transform',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between px-5 py-5">
            <Link href={`/${lang}`} className="flex items-center" onClick={closeAll}>
              <Image src="/tractian-logo.svg" alt="Tractian" width={120} height={24} />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
          </div>
          <div className="px-5 pb-6">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={closeAll}
                  className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <LanguageSwitcher lang={lang} />
              <Link
                href="https://app.tractian.com/login"
                onClick={closeAll}
                className="rounded-md border border-slate-200 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
              >
                Login
              </Link>
              <Link
                href={`/${lang}/get-demo`}
                onClick={closeAll}
                className="rounded-md bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Get Demo
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
