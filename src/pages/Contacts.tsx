
import React from 'react';
import { Phone, Clock, Calendar, MapPin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactCard = ({ 
  title, 
  phone, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  phone: string; 
  description: string; 
  icon: React.ElementType 
}) => (
  <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start">
      <div className="rounded-full p-3 bg-primary/10 mr-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <Phone className="h-4 w-4 text-gray-500 mr-2" />
          <span className="text-gray-700 font-medium">{phone}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </Card>
);

const Contacts = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Контакты</h1>
        
        <div className="mb-10">
          <div className="bg-white p-6 rounded-md shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Товарищество собственников "Нарочанская 4"</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Адрес</h3>
                  <p className="text-gray-600">ул. Нарочанская, 4</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Электронная почта</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Часы работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 17:30</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Приемное время председателя</h3>
                  <p className="text-gray-600">Среда: 17:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Контактные телефоны</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactCard 
            title="Единая диспетчерская служба" 
            phone="115" 
            description="Прием заявок (можно также через председателя, если заявка не аварийная). Также доступен портал 115.бел" 
            icon={Phone} 
          />
          
          <ContactCard 
            title="Аварийная служба" 
            phone="+375 29 395 07 97" 
            description="В вечернее и ночное время (заявки будут передаваться со 115)" 
            icon={Phone} 
          />
          
          <ContactCard 
            title="Обслуживание противопожарной сигнализации" 
            phone="+375 29 644 47 55" 
            description="Обслуживающая организация (заявки на предмет сработки пожарной сигнализации)" 
            icon={Phone} 
          />
          
          <ContactCard 
            title="Обслуживание лифтов" 
            phone="+375 29 122 16 23" 
            description="Обслуживающая организация (на предмет остановки лифтов, шума и работы)" 
            icon={Phone} 
          />
          
          <ContactCard 
            title="Председатель правления" 
            phone="+375 29 681 15 21" 
            description="Рабочее время: Пн-Пт с 9:00 до 17:30, приемное время: Среда с 17:00 до 20:00" 
            icon={Phone} 
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
