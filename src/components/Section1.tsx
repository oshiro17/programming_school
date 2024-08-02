import React from 'react';
import { BookOpen, Compass, Lightbulb, LucideIcon } from 'lucide-react';

interface ApproachCardProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-100">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold text-center text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default function Section1() {
  const approaches: ApproachCardProps[] = [
    // {
    //   icon: <BookOpen className="w-8 h-8 text-pink-500" />,
    //   title: "実践を重視",
    //   description: "作りたいものを作るために学び、実践的なスキルを身につけます。"
    // },
    {
      icon: <Compass className="w-8 h-8 text-pink-500" />,
      title: "体験を通じた学習",
      description: "実際のプロジェクトに参加することで、自然と知識が身につきます。"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-pink-500" />,
      title: "総合力の向上",
      description: "問題解決能力や創造力が、楽しみながら自然と身につきます。"
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-br from-purple-100 via-green-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-12">
指導方針
        </h2> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {approaches.map((approach, index) => (
            <ApproachCard key={index} {...approach} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
      </div>
    </section>
  );
}