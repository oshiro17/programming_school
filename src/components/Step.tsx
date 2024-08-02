import React from 'react';
import Image from 'next/image';
import { Book, Lightbulb, Calendar, Rocket } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Step {
  title: string;
  icon: React.ReactElement<LucideIcon>;
  content: string[];
}

const StepCard: React.FC<{ step: Step; index: number }> = ({ step, index }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-visible mt-16 ml-16">
    <div className="absolute -top-16 -left-16 w-48 h-32">
      <Image
        src="/hukidasi.png"
        alt="Speech bubble"
        layout="fill"
        objectFit="contain"
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white whitespace-nowrap">
        ステップ{index + 1}
      </span>
    </div>
    <div className="flex items-center mt-14 mb-4">
      {step.icon}
      <h3 className="text-2xl font-semibold text-blue-700 ml-4">{step.title}</h3>
    </div>
    <ul className="list-disc pl-6 space-y-2">
      {step.content.map((item, i) => (
        <li key={i} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

export default function LearningSteps() {
  const steps: Step[] = [
    {
      title: '基礎知識の習得',
      icon: <Book className="w-12 h-12 text-green-600" />,
      content: [
        'タイピングゲーム',
        '使う教材：大人向け教材、プロゲート、公式チュートリアル、スクラッチなど',
        'サポート：子供には難しい内容も、隣でわかりやすく解説します。'
      ]
    },
    {
      title: 'アプリケーション制作の意欲',
      icon: <Lightbulb className="w-12 h-12 text-green-500" />,
      content: [
        '成長の瞬間：基礎ができたら、自分でアプリを作れることに気づく瞬間がやってきます。',
        '自発的な学習：子供自身が「作りたい！」と思うようになります。'
      ]
    },
    {
      title: 'アプリ制作に向けての計画',
      icon: <Calendar className="w-12 h-12 text-green-600" />,
      content: [
        'ある程度の知識とつくりたいアイディアが出てきたら、それに向けて、計画を立てます。'
      ]
    },
    {
      title: 'プロジェクト完成',
      icon: <Rocket className="w-12 h-12 text-green-500" />,
      content: [
        '例：夏休みの宿題でウェブサイトを制作し、学校にQRコードを提出するなど',
        'プロジェクトを通じて、問題解決能力や技術を身につけます。',
        '改善点などを考え、新しいプロジェクトを考えます'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-16">学習の4ステップ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">夢を実現するエンジニアへ</h3>
          <p className="text-xl text-gray-700">最終目標：どんなものでも作れるエンジニアに成長します。</p>
        </div>
        <div className="mt-12">
          <Image
            src="/boy.png"
            alt="School"
            width={800}
            height={400}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}