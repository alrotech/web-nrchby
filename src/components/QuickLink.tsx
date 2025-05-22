
import React from 'react';
import { Link } from 'react-router-dom';

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  external?: boolean;
}

const QuickLink: React.FC<QuickLinkProps> = ({ icon, title, description, to, external = false }) => {
  const LinkComponent = external ? 
    ({ children }: { children: React.ReactNode }) => (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block h-full">
        {children}
      </a>
    ) : 
    ({ children }: { children: React.ReactNode }) => (
      <Link to={to} className="block h-full">
        {children}
      </Link>
    );

  return (
    <LinkComponent>
      <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border-l-4 border-green-500">
        <div className="flex items-center mb-3">
          <div className="text-green-500 mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </LinkComponent>
  );
};

export default QuickLink;
