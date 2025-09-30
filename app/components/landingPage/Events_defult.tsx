// "use client";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import prisma from "@/lib/prisma";
// import { notFound } from "next/navigation";
// import { useState } from "react";

// async function getData(eventTypeId: string) {
//   const data = await prisma.eventType.findMany({
//     include: {
//       user: {
//         select: {
//           username: true
//         }
//       }
//     }
//   });
//   if (!data) return notFound();
//   return data;
// }

// export async function Events() {
//   const [baseUrl, setBaseUrl] = useState("http://localhost:3000");
//   const data = await getData('896e7e5f-9b2c-4525-a2c3-93f7454abf39');

//   return (
//     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//       {data.map((item, i) => (
//         <div className="  overflow-hidden shadow rounded-lg border relative" key={i}>
//           <Link href={`${baseUrl}/${item.user.username}/${item.url}`} target="_blank">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   {/* <Users2 className="h-6 w-6" aria-hidden="true" /> */}
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium truncate ">
//                       {item.description} Minutes Meeting
//                     </dt>
//                     <dd>
//                       <div className="text-lg font-medium ">
//                         {item.title}
//                       </div>
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </Link>
//           <div className="bg-muted dark:bg-gray-900 px-5 py-3 flex justify-center items-center">
//             <Link href={`${baseUrl}/${item.user.username}/${item.url}`} target="_blank">
//               <Button className="">احجز وقت مقابلتك</Button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
