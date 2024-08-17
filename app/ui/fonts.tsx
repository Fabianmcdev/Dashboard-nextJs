import { Poppins, Rationale, Lusitana } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
});

export const rationale = Rationale({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap',
});

