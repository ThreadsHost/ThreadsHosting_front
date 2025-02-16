import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  scrollY: number;
}

const Hero = ({ scrollY }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 section-bg">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("https://media.discordapp.net/attachments/1329622574627291260/1340521554433282118/nn.png?ex=67b2a97c&is=67b157fc&hm=74343f61f27dfe246fb2434a5d0acf67d1391ca8b9a26f8f8d0a5d0c28debca3&=&format=webp&quality=lossless&width=1004&height=671")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-0" />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff3333] to-[#3366ff] gradient-animate">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#ff3333] hover:bg-[#cc0000] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('hero.startTrial')}
            </button>
            <button className="border border-[#3366ff] hover:bg-[#3366ff]/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              {t('hero.viewPlans')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;