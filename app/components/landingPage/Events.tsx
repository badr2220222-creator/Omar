// "use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
// import { useState } from "react";
import { BookMarked, CalendarX2, Clock, User } from "lucide-react";
import Image from "next/image";

async function getData() {
  const data = await prisma.eventType.findMany({
    include: {
      user: {
        select: {
          name: true,
          username: true,
          image:true
        }
      }
    }
  });
  if (!data) return notFound();
  return data;
}

export async function Events() {
  const baseUrl = "https://omarelgendy.com";
  const data = await getData();

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden py-12 rounded-3xl">
      {/* الموجات الخلفية */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V150H0V90.83C36.67,84.41,75.85,77,112.92,68.21Z"
            className="fill-blue-200/50 dark:fill-blue-900/30"></path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V150H0V90.83C36.67,84.41,75.85,77,112.92,68.21Z"
            className="fill-blue-200/50 dark:fill-blue-900/30"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            حدد موعد مقابلتك
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            اختر نوع الجلسة المناسبة واحجز وقتك بسهولة
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {data.map((item) => {
              const formattedDate = new Date().toLocaleDateString('ar-SA', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              });

              return (
                <div
                  key={item.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
                >
                  {/* تأثير خلفي عند hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* تأثير إشعاعي */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-6 flex flex-col flex-grow">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-4">
                        <div className="absolute -inset-2 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {item.user.image ? (
                          <Image
                            src={item.user.image}
                            alt={`${item.user.name}'s profile picture`}
                            className="relative size-16 rounded-full object-cover"
                            width={64}
                            height={64}
                          />
                        ) : (
                          <div className="relative size-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <User className="size-8 text-gray-500 dark:text-gray-400" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.user.name}
                      </p>
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="mb-6 space-y-4 flex-grow">
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                        <CalendarX2 className="size-5 text-blue-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {formattedDate}
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                        <Clock className="size-5 text-blue-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.duration} دقيقة
                        </span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                        <BookMarked className="size-5 text-blue-500 mr-3" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Google Meet
                        </span>
                      </div>
                    </div>

                    <div className="px-2 pb-2 mt-auto">
                      <Link href={`${baseUrl}/${item.user.username}/${item.url}`} target="_blank">
                        <Button
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                          size="lg"
                        >
                          احجز وقت مقابلتك
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

}
