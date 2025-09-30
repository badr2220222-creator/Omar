import Image from "next/image";
import { AuthModal } from "./AuthModal";
import { useTranslations } from 'next-intl';
import me from "@/public/me.jpeg";

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative flex items-center justify-center py-12 lg:py-20 overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/30 -z-10"></div>
      
      {/* عناصر زخرفية */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col items-center">
          {/* البادئة */}
          <span className="text-sm text-blue-600 font-medium tracking-tight bg-blue-100 px-4 py-2 rounded-full mb-8 dark:bg-blue-900/30 dark:text-blue-300">
            {t('number')}
          </span>

          {/* الصورة الشخصية */}
          <div className="relative mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-800">
              <Image 
                src={me} 
                alt="عمر - مستشار مالي" 
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-4 border border-blue-200 rounded-full -z-10 dark:border-blue-800/50"></div>
          </div>

          {/* العنوان */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center dark:text-white">
            عمر<span className="text-blue-600">.</span> مستشار مالي محترف
          </h1>

          {/* الوصف */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8 dark:text-gray-300">
              مستشار مالي يتمتع بخبرة تزيد عن 14 عامًا في المحاسبة، الإدارة المالية، وصنع القرار الاستراتيجي. حاصل على شهادات دراسات عليا وماجستير في المحاسبة ودعم اتخاذ القرار، ويقدم خدماته الاستشارية لمجموعة متنوعة من الشركات القابضة ومؤسسات الأعمال متعددة النشاطات.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8 dark:text-gray-300">
              يمتلك خبرة عملية عميقة في أسواق السعودية، الإمارات، وإسبانيا، مما يمنحه رؤية دولية متعددة الأبعاد لتقديم حلول مالية مبتكرة تتماشى مع التشريعات والفرص في كل منطقة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify mb-10 dark:text-gray-300">
              يتّسم بأسلوب تحليلي دقيق وقدرة عالية على تصميم استراتيجيات مالية مخصصة، مع التركيز على تحسين الأداء المالي، إدارة المخاطر، وتعزيز صنع القرار المبني على البيانات. يساهم في تحقيق النمو المستدام من خلال تطوير الأنظمة، قيادة الفرق المالية، وتمكين صُنّاع القرار بالمعرفة والرؤية الشمولية.
            </p>
          </div>

          {/* زر الاتصال */}
          <div className="mb-16">
            <AuthModal />
          </div>

          {/* قسم الإنجازات */}
          <div className="relative w-full max-w-4xl bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12 dark:bg-gray-900/80 dark:border-gray-700 overflow-hidden">
            {/* خلفية زخرفية */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/5 rounded-full -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">14+</div>
                <div className="text-gray-600 dark:text-gray-400">سنوات خبرة</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">مشروع ناجح</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3</div>
                <div className="text-gray-600 dark:text-gray-400">دول مختلفة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}