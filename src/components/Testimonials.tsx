import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: t('testimonials.roles.proGamer'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "GameServe's VPS has transformed my streaming setup. The performance is unmatched!"
    },
    {
      name: "Marcus Rodriguez",
      role: t('testimonials.roles.esportsManager'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "We host all our tournament servers on GameServe. Reliability when it matters most."
    },
    {
      name: "Emily Watson",
      role: t('testimonials.roles.gameDev'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The perfect platform for testing and deploying our game servers. Simply outstanding!"
    },
    {
      name: "David Park",
      role: t('testimonials.roles.contentCreator'),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "Since switching to GameServe, my stream quality has improved dramatically. Zero lag, zero issues!"
    },
    {
      name: "Lisa Thompson",
      role: t('testimonials.roles.communityManager'),
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      quote: "The best gaming infrastructure I've ever used. Customer support is phenomenal!"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.discordapp.com/attachments/1329622574627291260/1340533006577827880/mark-chan-2rhsI6_B8cA-unsplash.jpg?ex=67b2b426&is=67b162a6&hm=144c6b179aaeffe7b1978ea1c663bdc3bffd7cc35af2a8a71d5b4570c2b2dc2a&")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: '0.1'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 flex-grow">{testimonial.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;