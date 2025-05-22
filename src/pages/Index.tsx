
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MessageCircle, Calendar, Info } from 'lucide-react';
import NewsCard from '@/components/NewsCard';
import QuickLink from '@/components/QuickLink';

const Index = () => {
  const latestNews = [
    {
      date: '20 мая 2025',
      title: 'Результаты общего собрания',
      content: 'На собрании были приняты решения по вопросам благоустройства территории и утвержден бюджет на следующий год. Протокол размещен в разделе "Документы".'
    },
    {
      date: '15 мая 2025',
      title: 'Плановые работы по обслуживанию лифтов',
      content: 'Сообщаем вам, что 25 мая будут проводиться плановые работы по техническому обслуживанию лифтов. Время проведения: с 10:00 до 15:00.'
    },
    {
      date: '10 мая 2025',
      title: 'Благоустройство придомовой территории',
      content: 'Приглашаем всех жителей принять участие в озеленении придомовой территории в эту субботу. Начало в 11:00 у центрального входа.'
    }
  ];

  const quickLinks = [
    {
      icon: <MessageCircle size={24} />,
      title: 'Чаты жильцов',
      description: 'Присоединяйтесь к нашим чатам в Telegram и Viber для общения с соседями.',
      to: '/communication',
    },
    {
      icon: <FileText size={24} />,
      title: 'Документы',
      description: 'Шаблоны заявлений и важные документы товарищества собственников.',
      to: '/documents',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Расписание',
      description: 'График встреч правления, собраний и других важных событий.',
      to: '/',
    },
    {
      icon: <Info size={24} />,
      title: 'О доме',
      description: 'Полезная информация о товариществе собственников и структуре управления.',
      to: '/about',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">ТС дома по адресу Нарочанская 4</h1>
            <p className="text-xl opacity-90">Информационный портал для жильцов нашего дома. Здесь вы найдете последние новости, документы и полезную информацию.</p>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
              <p>Сайт в активной разработке и может сожержать ошибки и не актуальные сведения, имейте это ввиду.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Последние новости</h2>
            <div className="space-y-6">
              {latestNews.map((news, index) => (
                <NewsCard key={index} date={news.date} title={news.title} content={news.content} />
              ))}
            </div>
            <div className="mt-8">
              <Link to="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Посмотреть все новости
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Быстрые ссылки</h2>
            <div className="grid grid-cols-1 gap-4">
              {quickLinks.map((link, index) => (
                <QuickLink 
                  key={index} 
                  icon={link.icon} 
                  title={link.title} 
                  description={link.description}
                  to={link.to} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
