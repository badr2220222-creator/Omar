import Image from "next/image";
import { AuthModal } from "./AuthModal";
import { useTranslations } from 'next-intl';
import me from "@/public/me.jpeg";

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative flex items-center justify-center py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
            {t('number')}
          </span>
        </div>

        {/* Content with image and text side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 animate-float">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-3 border-primary shadow-2xl">
              <Image
                src={me}
                alt="عمر - مستشار مالي"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-right">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-primary leading-relaxed mb-6">
              {t('description')}
            </p>
            <p className="text-lg text-primary leading-relaxed mb-8">
              {t('experience')}
            </p>
            
            <div className="mt-8">
              <AuthModal />
            </div>
          </div>
        </div>

        {/* Decorative section at bottom */}
        <div className="relative mt-16 lg:mt-24 w-full h-64 border rounded-2xl shadow-2xl overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full blur-3xl opacity-70"
            style={{ zIndex: -1 }}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path
                  d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                  fill="#03FFE0"
                ></path>
                <path
                  d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                  fill="#7C87F8"
                ></path>
                <path
                  d="M320 400H400V78.75L106.2 134.75L320 400Z"
                  fill="#4C65E4"
                ></path>
                <path
                  d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                  fill="#043AFF"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_10_20"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_10_20"
                  stdDeviation="80.1666"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-semibold text-primary bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm">
              خبرة دولية في الأسواق المالية
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}