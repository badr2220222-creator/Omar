"use server";

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function setCookie(lang: string) {
  cookies().set('locale', lang, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
  revalidatePath('/');
}


export async function getCookie(name: string): Promise<string | null> {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get(name)?.value;
  return cookieValue || null;
}