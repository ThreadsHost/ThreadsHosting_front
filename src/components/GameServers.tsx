import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gamepad2, Hammer, Car, Users2 } from 'lucide-react';

const GameServers = () => {
  const { t } = useTranslation();

  const gameServers = [
    {
      name: "Minecraft",
      image: "https://cdn.discordapp.com/attachments/1329622574627291260/1340536425371799623/traveling_by_rudyttt_dghn0t8-300w-2x.jpg?ex=67b2b755&is=67b165d5&hm=628f19047fc8a5060bc53ba0dbb764533a0b74a58d711b16da78018b871a6980&",
      price: 14.99,
      icon: <Gamepad2 className="w-8 h-8" />
    },
    {
      name: "Rust",
      image: "https://cdn.discordapp.com/attachments/1329622574627291260/1340537439642452119/75acbd1acf85.png?ex=67b2b847&is=67b166c7&hm=a6a378c827c25765ac25f0a44bab26544ae587184b8c803999c8709501c35a76&",
      price: 24.99,
      icon: <Hammer className="w-8 h-8" />
    },
    {
      name: "MTA",
      image: "https://media.discordapp.net/attachments/1329622574627291260/1340796611109847141/gg.png?ex=67b3a9a6&is=67b25826&hm=1e3c001cb7e393820d71efcbee5d2c39edd3177bd2b1522c64c0b49e76b1fbdf&=&format=webp&quality=lossless&width=503&height=671",
      price: 19.99,
      icon: <Car className="w-8 h-8" />
    },
    {
      name: "SA:MP",
      image: "https://cdn.discordapp.com/attachments/1329622574627291260/1340796969907650650/0e68de59b4040da71ee088c3718a1a27.jpg?ex=67b3a9fc&is=67b2587c&hm=2cf70a868e1d8e005a2eb41418d50bad52b6f9555b56a1fd76173e10bac6dcfc&",
      price: 16.99,
      icon: <Users2 className="w-8 h-8" />
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/1329622574627291260/1340533007580139540/joshua-hoehne-p4NcAwtZj8c-unsplash.jpg?ex=67b2b426&is=67b162a6&hm=b06415b2af36344a395edf4b4be5ca872b3a8231fe5e2c91802537f1445280f8&")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: '0.1'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">{t('gameServers.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gameServers.map((server, index) => (
            <div key={index} className="group relative aspect-[4/5] rounded-xl overflow-hidden">
              <img 
                src={server.image}
                alt={server.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Default View */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-[#ff3333]">
                  {server.icon}
                </div>
                <h3 className="text-2xl font-bold">{server.name}</h3>
              </div>

              {/* Hover View */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="w-full max-w-[200px] py-3 bg-[#ff3333] hover:bg-[#cc0000] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  {t('gameServers.orderNow')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameServers;
