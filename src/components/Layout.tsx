
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Нарочанская 4</h3>
          <p className="text-gray-300">
            Товарищество собственников "Нарочанская 4"<br />
            Управление и обслуживание жилого комплекса
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Контакты</h3>
          <p className="text-gray-300">ул. Нарочанская, 4</p>
          <p className="text-gray-300">info@example.com</p>
          <p className="text-gray-300">+375 29 681 15 21</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Часы работы</h3>
          <p className="text-gray-300">
            Пн-Пт: 9:00 - 17:30<br />
            Приемные часы: Среда 17:00 - 20:00<br />
            Сб-Вс: Выходной
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Товарищество собственников "Нарочанская 4". Все права защищены.</p>
      </div>
    </div>
  </footer>
);

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
