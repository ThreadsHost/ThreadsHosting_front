import React from 'react';
import { useTranslation } from 'react-i18next';
import { Server } from 'lucide-react';
import Twitter from './Twitter'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Discord from './Discord'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#111] py-12 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img className="w-12 h-12 text-[#ff3333]" src="https://cdn.discordapp.com/attachments/1329622574627291260/1341174986437820457/Icono-oficial-logo-Threads-c-D.png?ex=67b50a0a&is=67b3b88a&hm=8e93db14738f6ccf83b9d522b77fcbf73cf8e30b3ee53871f19b8c120e72822e&" />
              <span className="text-lg font-bold">ThreadsHost</span>
            </div>
            <p className="text-gray-400">
Premium game server solutions for the most demanding players.
            </p>
            <div className="flex flex-row gap-x-4 p-4 justify-left items-left">
              <Twitter className="text-3xl"/>
              <Facebook className="text-3xl"/>
              <Instagram className="text-3xl"/>
              <Discord className="text-3xl"/>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.partner')}</a></li>
              <li><a href="https://www.trustpilot.com/review/threadshost.com" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.trust')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.privacy')}</a></li>
              
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://discord.gg/QnnwNKaV" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.community')}</a></li>
              <li><a href="https://client.threadshost.com/submitticket.php?step=2&deptid=1" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.report')}</a></li>
              <li><a href="https://status.threadshost.com/es" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.status')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.service')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">Game Hosting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t('footer.account')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.my')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.renew')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.login')}</a></li>
              <li><a href="#" className="hover:text-[#3366ff] transition-colors duration-300">{t('footer.register')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
