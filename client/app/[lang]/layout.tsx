import { Inter } from "next/font/google";
import { useLocale, NextIntlClientProvider } from "next-intl";
import { getTranslator } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import "@/css/globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const title = Inter({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-title",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale?: string };
}) {
  const t = await getTranslator(locale ?? "en", "Metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale?: string };
}) {
  const locale = useLocale();

  if (params.locale !== undefined && params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable} ${title.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="grid bg-white font-sans leading-normal tracking-normal">
            <Navbar />
            <div className="relative min-h-screen">{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
