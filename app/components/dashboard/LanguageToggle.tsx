"use client";

import * as React from "react";
// import {cookies} from 'next/headers';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Breakpoint } from "@/app/hooks/Breakpoint";
import { getCookie, setCookie } from "@/src/i18n/localeCookie";
// import { Loader2 } from "lucide-react";
// import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const breakpoint = Breakpoint();
  const [lang, setLang] = React.useState<string>('');

  React.useEffect(() => {
    const loadLang = async () => {
      const cookieLang = await getCookie('locale') || 'ar' // getCookie returns Promise
      if (cookieLang) setLang(cookieLang);
    };
    loadLang();
  }, []);

  const languages = [
    { value: "ar", name: "العربية", icon: "AR" },
    { value: "en", name: "English", icon: "EN" },
    { value: "es", name: "Español", icon: "ES" },
  ];

  const changeLang = async (newLang: string) => {
    await setCookie(newLang);
    setLang(newLang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {
          lang != '' ?
            <Button variant="outline" size={['sm', 'xs'].includes(breakpoint) ? "icon" : "default"}>
              <span className="text-lg hidden sm:inline">{languages.find(l => l.value === lang)?.name || "🌐"}</span>
              <span className="text-lg sm:hidden">{languages.find(l => l.value === lang)?.icon || "🌐"}</span>
              <span className="sr-only">Toggle language</span>
            </Button>
            :
            <Button disabled variant="outline" className='w-24'>
              {/* <Loader2 className="size-5 mr-2 animate-spin" /> */}
            </Button>
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {
          languages.map((item) => (
            <DropdownMenuItem key={item.value} onClick={() => changeLang(item.value)} className="justify-center">
              {item.name}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
