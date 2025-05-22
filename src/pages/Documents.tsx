
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Info, FileCheck } from 'lucide-react';

const Documents = () => {
  const documentCategories = [
    {
      title: 'Получение справок',
      icon: <Info size={20} className="text-green-600" />,
      content: (
        <div className="space-y-4">
          <p>
            Для получения справок необходимо обратиться в правление товарищества собственников. При себе необходимо иметь паспорт.
          </p>
          <div>
            <h4 className="font-medium mb-2">Виды справок:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>О составе семьи</li>
              <li>Справка о задолженности</li>
              <li>Выписка из лицевого счета</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Время выдачи справок:</h4>
            <p>Вторник, Четверг: 17:00 - 19:00</p>
          </div>
        </div>
      )
    },
    {
      title: 'Заявления',
      icon: <FileCheck size={20} className="text-green-600" />,
      content: (
        <div className="space-y-4">
          <p>
            Здесь вы можете скачать шаблоны заявлений для различных ситуаций. 
            Заполненные заявления можно подать в правление в часы приема или опустить в почтовый ящик правления.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Заявление на перепланировку', format: 'PDF' },
              { name: 'Заявление на установку кондиционера', format: 'DOC' },
              { name: 'Заявление о смене собственника', format: 'DOC' },
              { name: 'Заявление на замену окон/дверей', format: 'PDF' },
              { name: 'Жалоба на шум/нарушение правил', format: 'DOC' },
              { name: 'Заявление в правление (общее)', format: 'DOC' }
            ].map((doc, index) => (
              <div key={index} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                <FileText size={16} className="text-gray-500 mr-2" />
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-700">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.format}</p>
                </div>
                <button className="text-green-600 hover:text-green-800">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Документы</h1>
      <p className="text-lg text-gray-600 mb-8">
        В данном разделе вы можете найти информацию о получении справок, а также скачать шаблоны заявлений
        для различных ситуаций.
      </p>
      
      <div className="space-y-8">
        {documentCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {category.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Documents;
