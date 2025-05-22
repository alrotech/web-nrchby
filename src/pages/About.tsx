
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, User, CreditCard } from 'lucide-react';

const About = () => {
  const managementMembers = [
    { name: 'Иванов Иван Иванович', position: 'Председатель', email: 'ivanov@example.com', phone: '+123 456 7890' },
    { name: 'Петров Петр Петрович', position: 'Член правления', responsibilities: 'Технические вопросы' },
    { name: 'Сидорова Анна Сергеевна', position: 'Член правления', responsibilities: 'Финансы' },
    { name: 'Кузнецов Алексей Николаевич', position: 'Член правления', responsibilities: 'Благоустройство' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">О товариществе</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <User size={20} className="mr-2 text-green-600" />
              О нас
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Товарищество собственников "Дом" было создано в 2020 году с целью эффективного управления общим имуществом.
              Наш дом расположен в живописном районе города и представляет собой современный жилой комплекс, состоящий
              из 4 секций и 240 квартир.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileText size={20} className="mr-2 text-green-600" />
              Устав
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Устав товарищества собственников содержит основные правила и принципы работы ТС, права и обязанности его
              членов, а также порядок принятия решений.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              Скачать PDF
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"></path>
              </svg>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <CreditCard size={20} className="mr-2 text-green-600" />
              Реквизиты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">УНП</p>
                <p className="font-medium">123456789</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Расчётный счёт</p>
                <p className="font-medium">BY00 ABCD 0000 0000 0000 0000 0000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Банк</p>
                <p className="font-medium">ОАО "Банк"</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Юридический адрес</p>
                <p className="font-medium">ул. Примерная, 123, г. Минск</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Правление</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Председатель</h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <p className="text-lg font-medium text-gray-700">{managementMembers[0].name}</p>
              <p className="text-gray-600">{managementMembers[0].position}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600">Email: {managementMembers[0].email}</p>
              <p className="text-gray-600">Телефон: {managementMembers[0].phone}</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Состав правления</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {managementMembers.slice(1).map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <p className="font-medium text-gray-800">{member.name}</p>
              <p className="text-gray-600 text-sm">{member.position}</p>
              {member.responsibilities && (
                <p className="text-gray-500 text-sm mt-1">Отвечает за: {member.responsibilities}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
