import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/1329622574627291260/1340533007580139540/joshua-hoehne-p4NcAwtZj8c-unsplash.jpg?ex=67b2b426&is=67b162a6&hm=b06415b2af36344a395edf4b4be5ca872b3a8231fe5e2c91802537f1445280f8&")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('newsletter.title')}</h2>
          <p className="text-gray-400 mb-8">
            {t('newsletter.subtitle')}
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-3 rounded-lg bg-black/50 backdrop-blur-sm border border-[#1a1a1a] focus:outline-none focus:border-[#3366ff]"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#ff3333] hover:bg-[#cc0000] rounded-lg font-semibold transition-all duration-300"
            >
              {t('newsletter.subscribe')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;