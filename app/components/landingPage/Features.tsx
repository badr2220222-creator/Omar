import React from "react";
import { CloudRain } from "lucide-react";
import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations('features');
const services = t.raw("services") as { name: string; description: string }[];

  const features = services.map(service => ({
    ...service,
    icon: CloudRain,
  }));

  return (
    <div className="py-24 ">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">{t('scheduleFaster')}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {t('scheduleMeetingsInMinutes')}
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          {t('withOmarelgendy')}
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature, i) => (
            i + 1 < features.length && <div key={feature.name} className="relative pl-16">
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:gap-y-16 mt-12">
          <div key={'feature.name'} className="relative pl-16">
            <div className="text-base font-semibold leading-7">
              <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                {React.createElement(features[features.length - 1].icon, { className: "w-6 h-6 text-white" })}
              </div>
              {features[features.length - 1].name}
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-snug">
              {features[features.length - 1].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
