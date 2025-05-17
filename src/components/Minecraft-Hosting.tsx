import React, { useState } from 'react';
import { Server, Cpu, HardDrive, Network, Check } from 'lucide-react';
import Footer from './Footer';
import Navbar from './Navbar';
import { href } from 'react-router-dom';

const MinecraftPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Carbon",
      icon: <Server className="w-12 h-12 text-gray-400" />,
      monthlyPrice: 3.99,
      annualPrice: 42.99,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "2v Cores",
        ram: "2GB RAM DDR4",
        storage: "16GB NVMe",
      },
      features: [
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7",
        "Anti DDoS"
      ],
      href: "https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-carbon"
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
        "Soporte al cliente 24/7",
        "Anti DDoS"
      ],
      href: "https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-cobre"
    },
    {
      name: "Hierro",
      icon: <Server className="w-12 h-12 text-[#b8b8b8]" />,
      monthlyPrice: 15.99,
      annualPrice: 171.99,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "8GB RAM DDR4",
        storage: "64GB NVMe",
      },
      features: [
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7",
        "Anti DDoS"
      ],
      href: "https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-hierro"
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
        "Soporte al cliente 24/7",
        "Anti DDoS"
      ],
      href: "https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-oro"
    },
    {
      name: "Esmeralda",
      icon: <Server className="w-12 h-12 text-[#50c878]" />,
      monthlyPrice: 63.99,
      annualPrice: 689.99,
      popular: true,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "32GB RAM DDR4",
        storage: "256GB NVMe",
      },
      features: [
        "IP dedicada incluida",
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7",
        "Anti DDoS"
      ],
      href: "https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-esmeralda"
    },
    {
      name: "Diamante",
      icon: <Server className="w-12 h-12 text-[#3366ff]" />,
      monthlyPrice: 127.99 ,
      annualPrice:  1381.99,
      specs: {
        cpu: "AMD Ryzen 5600X",
        cores: "Uso de CPU ilimitado",
        ram: "64GB RAM DDR4",
        storage: "512GB NVMe",
      },
      features: [
        "IP dedicada incluida",
        "Acceso a FTP/SFTP",
        "Soporte al cliente 24/7",
        "Anti DDoS"
      ],
      href: "https://client.threadshost.com/index.php?rp=/store/game-servers/minecraft-diamante"
    }
  ];

  return (
    <>
      <div className=" bg-black text-white">
        <Navbar/>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20  ">
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: 'url("mc2.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 z-0" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#b2071d] to-white gradient-animate mt-9 p-4">
                Minecraft Hosting
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experimenta el mejor rendimiento para tu servidor Minecraft con nuestra infraestructura optimizada.
              </p>
            </div>
          </div>

          {/* Degradado al final del título */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent z-10" />
        </section>

        {/* Plans Section */}
        <section className="relative py-20 mb-14">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/mc1.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />

          <div className="container mx-auto px-6 relative z-10 pt-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-4 bg-[#111] p-2 rounded-full">
                <span 
                  className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${!isAnnual ? 'bg-[#b2071d] text-white' : 'text-gray-400'}`}
                  onClick={() => setIsAnnual(false)}
                >
                  Mensual
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className="relative w-16 h-8 bg-black rounded-full p-1 transition-colors duration-300"
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-[#b2071d] rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}
                  />
                </button>
                <span 
                  className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${isAnnual ? 'bg-[#b2071d] text-white' : 'text-gray-400'}`}
                  onClick={() => setIsAnnual(true)}
                >
                  Anual (Ahorra 10%)
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`hover:border-[#b2071d] hover:border relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 slide-up hover:transform hover:scale-105`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                 

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
                      <Cpu className="w-5 h-5 text-[#b2071d]" />
                      <span>{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HardDrive className="w-5 h-5 text-[#b2071d]" />
                      <span>{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Network className="w-5 h-5 text-[#b2071d]" />
                      <span>{plan.specs.storage}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-gray-300">
                        <Check className="w-5 h-5 text-[#b2071d]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
  onClick={() => window.location.href = plan.href}
  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-[#b2071d] text-white"
>
  Comprar
</button>
                </div>
              ))}
            </div>
          </div>

          {/* Degradado al inicio de la sección de planes */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black to-transparent z-10" />
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default MinecraftPlans;
