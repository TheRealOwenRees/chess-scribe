import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from "next-intl";

import bgImage from '@/public/images/header-bg.jpg' // TODO consider background image inside tailwind.config.ts

export default function Home() {
  const t = useTranslations("Home")

  return (
      <header className="relative mb-20 items-center justify-center">

      <Image src={bgImage} alt="Person playing chess" fill={true} style={{ objectFit: 'cover' }} />

      <div className="z-10 py-4 text-center text-white">
          <h1 className="p-5 font-title text-5xl">
              {t('title')}
          </h1>
          <h2>{t('subTitle')}</h2>
          <h3>{t('description')}</h3>
      </div>

      </header>
  )
}
