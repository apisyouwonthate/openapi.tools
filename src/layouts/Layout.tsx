import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Navigation, type NavigationItems } from '../components/Navigation';

export function Layout({
  categories,
  children,
  isHomePage = false,
}: {
  categories: NavigationItems;
  children: React.ReactNode;
  isHomePage?: boolean;
}) {
  const { pathname } = { pathname: 'wom' };

  return (
    <div className="flex w-full flex-col">
      <Header />

      {isHomePage && <Hero />}

      <div className="max-w-8xl relative mx-auto flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
          <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
          <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation categories={categories} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
