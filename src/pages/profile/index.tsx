import { useTranslation } from 'react-i18next';

export function Profile() {
  const { t } = useTranslation();

  return (
    <section className='flex w-full flex-col items-center'>
      <h1 className='text-lg text-slate-800'>{t('profile.pageTitle')}</h1>
    </section>
  );
}
