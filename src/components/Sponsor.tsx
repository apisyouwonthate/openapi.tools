import clsx from 'clsx';

const SponsoredSection = () => (
  <section
    className={clsx(
      'z-20 flex w-full flex-row items-center justify-center gap-2 text-white',
      'bg-gradient-to-r from-teal-400/30 via-teal-400 to-teal-400/30 p-px font-medium text-slate-100/90'
    )}
    id="sponsor"
  >
    <a
      href="https://zuplo.link/rmao-open-api-tools"
      target="_blank"
      className={clsx('roundex-xl flex h-16 w-full')}
    >
      <div
        className={clsx(
          'flex w-full flex-row items-center justify-center gap-2 px-2 py-3',
          'bg-slate-800'
        )}
      >
        Sponsored by ratemyopenapi.com - Rate and fix your OpenAPI spec
        <span className="inline-block break-inside-avoid whitespace-pre rounded-full bg-pink-600 px-4 py-2 text-white hover:bg-pink-600/80 active:bg-pink-600/90">
          Rate your OpenAPI
        </span>
      </div>
    </a>
  </section>
);

export default SponsoredSection;
