import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, HardDrive, Network, BarChart, Check, Server } from 'lucide-react';

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { t } = useTranslation();

  const plans = [
    {
      name: "Carbon",
      icon: <Server className="w-12 h-12 text-gray-400" />,
      monthlyPrice: 3.99,
      annualPrice: 38.30,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "2v Cores",
        ram: "2GB RAM DDR4",
        storage: "16GB NVMe",
      },
      features: [
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7"
      ]
    },
    {
      name: "Hierro",
      icon: <Server className="w-12 h-12 text-[#b8b8b8]" />,
      monthlyPrice: 15.99,
      annualPrice: 153.50,
      popular: true,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "8GB RAM DDR4",
        storage: "64GB NVMe",
      },
      features: [
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7"
      ]
    },
    {
      name: "Esmeralda",
      icon: <Server className="w-12 h-12 text-[#50c878]" />,
      monthlyPrice: 63.99,
      annualPrice: 614.30,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "32GB RAM DDR4",
        storage: "256GB NVMe",
      },
      features: [
        "IP dedicada incluida",
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7"
      ]
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/three.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.8' // Ajusta la opacidad de la imagen
        }}
      />
      
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 z-0" /> {/* Fondo negro semitransparente */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Contenido principal */}
      <div className="container mx-auto px-6 relative z-10 pb-20">
        <div className="text-center mb-12">
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
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#ff3333]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => window.location.href = "https://www.threadshost.com/minecraft-hosting"} className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
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