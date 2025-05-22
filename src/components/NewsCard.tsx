
import React from 'react';

interface NewsCardProps {
  date: string;
  title: string;
  content: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default NewsCard;
