'use client';

import { usePathname, useRouter } from 'next/navigation';

type Lang = 'en' | 'pt' | 'es';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'Português (Brasil)' },
  { code: 'en', label: 'English (United States)' },
  { code: 'es', label: 'Español (México)' },
];

function replaceLangInPath(pathname: string, nextLang: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${nextLang}`;
  parts[0] = nextLang;
  return `/${parts.join('/')}`;
}

export default function LanguageSwitcher({
  lang,
  onSelect,
  className = '',
}: {
  lang: string;
  onSelect?: () => void;
  className?: string;
}) {
  const current = (lang?.toLowerCase() as Lang) || 'en';
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (next: Lang) => {
    const nextPath = replaceLangInPath(pathname || `/${current}`, next);
    router.push(nextPath);
    onSelect?.();
  };

  return (
    <div className={['flex flex-col gap-1', className].join(' ')}>
      {LANGS.map((l) => {
        const active = l.code === current;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => handleSelect(l.code)}
            className={[
              'w-full  px-3 py-2 text-left text-sm font-medium transition-colors',
              active
                ? 'bg-slate-300 text-slate-500'
                : 'text-slate-500 hover:bg-slate-200',
            ].join(' ')}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
