import React, { useState } from 'react';
import { Server, Cpu, HardDrive, Network, Check } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';

const MinecraftPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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
      name: "Cobre",
      icon: <Server className="w-12 h-12 text-[#cd7f32]" />,
      monthlyPrice: 7.99,
      annualPrice: 76.70,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "4GB RAM DDR4",
        storage: "32GB NVMe",
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
      name: "Oro",
      icon: <Server className="w-12 h-12 text-[#ffd700]" />,
      monthlyPrice: 31.99,
      annualPrice: 307.10,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "16GB RAM DDR4",
        storage: "128GB NVMe",
      },
      features: [
        "IP dedicada incluida",
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
    {
      name: "Diamante",
      icon: <Server className="w-12 h-12 text-[#3366ff]" />,
      monthlyPrice: 127.99 ,
      annualPrice:  1228.70,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "64GB RAM DDR4",
        storage: "512GB NVMe",
      },
      features: [
        "IP dedicada incluida",
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7"
      ]
    }
  ];

  return (
  <>
    <div className="min-h-screen bg-black text-white">
    <Navbar/>
    
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden ">
        <div 
        
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://media.discordapp.net/attachments/1342672300495081524/1343313322841342014/image.png?ex=67bcd185&is=67bb8005&hm=00d5e0fcd04a3de8670aa1dbc3b0863fb5077ac7586c4d756417d63d74313701&=&format=webp&quality=lossless&width=1440&height=332")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff3333] to-white gradient-animate mt-9 p-4">
              Minecraft Hosting
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experimenta el mejor rendimiento para tu servidor Minecraft con nuestra infraestructura optimizada.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="relative py-20 mb-14">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://cdn.discordapp.com/attachments/1342672300495081524/1343300976315994112/joshua-hoehne-p4NcAwtZj8c-unsplash.jpg?ex=67bcc606&is=67bb7486&hm=d70ff0ca6445e1715329c1971b32c77076b8a242ec83f55cfefe19332f5744d4&")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-4 bg-[#111] p-2 rounded-full">
              <span 
                className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${!isAnnual ? 'bg-[#ff3333] text-white' : 'text-gray-400'}`}
                onClick={() => setIsAnnual(false)}
              >
                Mensual
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
                Anual
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 slide-up hover:transform hover:scale-105`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#ff3333] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400">/mes</span>
                    </div>
                  </div>
                  {plan.icon}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Cpu className="w-5 h-5 text-[#ff3333]" />
                    <span>{plan.specs.cpu}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HardDrive className="w-5 h-5 text-[#ff3333]" />
                    <span>{plan.specs.ram}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Network className="w-5 h-5 text-[#ff3333]" />
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

                <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-[#ff3333] hover:bg-[#cc0000] text-white transform hover:scale-105">
                  Seleccionar Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
      </>
  );
};

export default MinecraftPlans;