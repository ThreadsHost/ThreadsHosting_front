import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, HardDrive, Network, BarChart, Check } from 'lucide-react';

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useTranslation();

  const plans = [
    {
      name: t('plans.starter.name'),
      monthlyPrice: 29.99,
      annualPrice: 24.99,
      specs: {
        cpu: "4 vCPU",
        ram: "8GB RAM",
        storage: "100GB NVMe SSD",
        bandwidth: "2TB"
      },
      features: t('plans.starter.features', { returnObjects: true })
    },
    {
      name: t('plans.proGamer.name'),
      monthlyPrice: 49.99,
      annualPrice: 44.99,
      popular: true,
      specs: {
        cpu: "8 vCPU",
        ram: "16GB RAM",
        storage: "250GB NVMe SSD",
        bandwidth: "5TB"
      },
      features: t('plans.proGamer.features', { returnObjects: true })
    },
    {
      name: t('plans.elite.name'),
      monthlyPrice: 89.99,
      annualPrice: 79.99,
      specs: {
        cpu: "12 vCPU",
        ram: "32GB RAM",
        storage: "500GB NVMe SSD",
        bandwidth: "10TB"
      },
      features: t('plans.elite.features', { returnObjects: true })
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://media.discordapp.net/attachments/1329622574627291260/1340523191810129980/AA.png?ex=67b2ab02&is=67b15982&hm=880f5fbdc80148a17b522f1a7190dd2b8c8efd16d120be832818d19e5ab9fac9&=&format=webp&quality=lossless&width=1055&height=671")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl font-bold mb-6">{t('plans.title')}</h2>
          <div className="inline-flex items-center justify-center space-x-4 bg-[#111] p-2 rounded-full">
            <span 
              className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${!isAnnual ? 'bg-[#ff3333] text-white' : 'text-gray-400'}`}
              onClick={() => setIsAnnual(false)}
            >
              {t('plans.monthly')}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-black rounded-full p-1 transition-colors duration-300"
            >
             <div
                className={`absolute top-1 w-6 h-6 bg-[#ff3333] rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span 
              className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${isAnnual ? 'bg-[#ff3333] text-white' : 'text-gray-400'}`}
              onClick={() => setIsAnnual(true)}
            >
              {t('plans.annual')}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-black/50 backdrop-blur-sm rounded-xl p-8 slide-up ${
                plan.popular ? 'border-2 border-[#ff3333]' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#ff3333] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('plans.mostPopular')}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-400">{t('plans.perMonth')}</span>
          
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Cpu className="w-5 h-5 text-[#3366ff]" />
                  <span>{plan.specs.cpu}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive className="w-5 h-5 text-[#3366ff]" />
                  <span>{plan.specs.ram}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Network className="w-5 h-5 text-[#3366ff]" />
                  <span>{plan.specs.storage}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart className="w-5 h-5 text-[#3366ff]" />
                  <span>{plan.specs.bandwidth}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#ff3333]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#ff3333] text-white hover:bg-[#cc0000]'
                  : 'bg-black hover:bg-[#222] border-white border'
              } hover:shadow-lg hover:shadow-[#ff3333]/25 transform hover:scale-105`}>
                {t('plans.selectPlan')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
