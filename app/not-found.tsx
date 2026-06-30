import { Metadata } from 'next';
import Image from 'next/image';
import logo_icon from '../public/logo_icon.svg';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className="flex flex-1 w-full min-h-[calc(100vh-var(--nextra-navbar-height,4rem))] flex-col items-center justify-center gap-2">
      <div className="max-w-4xl z-10 relative px-6 mt-8 sm:mt-0 text-center">
        <Image src={logo_icon} alt="Apex Pathing Logo" width={256} height={256} className="w-64 h-64 mb-4 sm:mb-6 mx-auto" />
        <h1 className="text-5xl tracking-tight font-bold mb-3 sm:mb-5">
          404 - Not Found
        </h1>
        <p className="text-xl text-accent-text mb-6 sm:mb-9 leading-relaxed">
          The page you are looking for does not exist. Please let us know how you got here!
        </p>
        <a href="/" className="px-8 py-3 rounded-full bg-brand-primary text-foreground font-medium hover:bg-brand-primary-hover transition-all">
          Go Home
        </a>
      </div>
    </div>
  );
}