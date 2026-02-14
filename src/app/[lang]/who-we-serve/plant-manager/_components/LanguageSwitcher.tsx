'use client';

import {useRouter, usePathname} from '@/i18n/routing';

type Lang = 'en' | 'pt' | 'es';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'Português (Brasil)' },
  { code: 'en', label: 'English (United States)' },
  { code: 'es', label: 'Español (México)' }
];

export default function LanguageSwitcher({
  lang,
  onSelect,
  className = ''
}: {
  lang: string;
  onSelect?: () => void;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const current: Lang = lang === 'pt' || lang === 'en' || lang === 'es' ? lang : 'en';

  const handleSelect = (next: Lang) => {
    if (next === current) return;

    router.push(pathname, {locale: next});
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
              'w-full px-3 py-2 text-left text-sm font-medium transition-colors',
              active ? 'bg-slate-300 text-slate-500' : 'text-slate-500 hover:bg-slate-200'
            ].join(' ')}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
