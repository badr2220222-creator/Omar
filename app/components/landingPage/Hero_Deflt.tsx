import Image from "next/image";
import { AuthModal } from "./AuthModal";
// import { useTranslations } from 'next-intl';
import me from "@/public/me.jpeg";


export function Hero() {
  // const t = useTranslations('hero');

  return (
    <section className="relative flex items-center justify-center">
      <div className="relative items-center w-full py-12 lg:py-20">
        <div className="text-center">
          <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
            عدد الاستشارات +200 استشارة
          </span>

          <Image src={me} alt="" className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:invert" />

          <p className="max-w-xl mx-auto mt-4 lg:text-lg text-primary ">
            مستشار مالي يتمتع بخبرة تزيد عن 14 عامًا في المحاسبة، الإدارة المالية، وصنع القرار الاستراتيجي. حاصل على شهادات دراسات عليا وماجستير في المحاسبة ودعم اتخاذ القرار، ويقدم خدماته الاستشارية لمجموعة متنوعة من الشركات القابضة ومؤسسات الأعمال متعددة النشاطات. يمتلك خبرة عملية عميقة في أسواق السعودية، الإمارات، وإسبانيا، مما يمنحه رؤية دولية متعددة الأبعاد لتقديم حلول مالية مبتكرة تتماشى مع التشريعات والفرص في كل منطقة.\nيتّسم بأسلوب تحليلي دقيق وقدرة عالية على تصميم استراتيجيات مالية مخصصة، مع التركيز على تحسين الأداء المالي، إدارة المخاطر، وتعزيز صنع القرار المبني على البيانات. يساهم في تحقيق النمو المستدام من خلال تطوير الأنظمة، قيادة الفرق المالية، وتمكين صُنّاع القرار بالمعرفة والرؤية الشمولية.
          </p>

          <div className=" mt-5 mb-12">
            <AuthModal />
          </div>
        </div>

        <div className="relative items-center py-12 mx-auto mt-12 object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl">
          <svg
            className="absolute inset-0 -mt-24 blur-3xl"
            style={{ zIndex: -1 }}
            fill="none"
            viewBox="0 0 400 400"
            height="100%"
            width="100%"
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
        </div>
      </div>
    </section>
  );
}
