import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section className='flex w-full flex-col items-center'>
      <h1 className='text-lg text-slate-800'>{t('about.pageTitle')}</h1>
    </section>
  );
}
