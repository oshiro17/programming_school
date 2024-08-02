"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Monitor, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggleOpen: () => void }> = ({ question, answer, icon, isOpen, toggleOpen }) => (
  <div className="mb-6 border-b border-purple-200 pb-6">
    <button
      className="flex justify-between items-center w-full text-left font-semibold text-lg text-purple-800 hover:text-purple-600 transition-colors duration-300"
      onClick={toggleOpen}
    >
      <span className="flex items-center">
        {icon}
        <span className="ml-3">{question}</span>
      </span>
      {isOpen ? <ChevronUp className="w-6 h-6 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 flex-shrink-0" />}
    </button>
    {isOpen && (
      <div className="mt-4 text-gray-600 animate-fadeIn">
        {answer}
      </div>
    )}
  </div>
);

export default function Question() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "学習の進捗はどのように確認できますか？",
      answer: (
        <>
          <p>定期的な学習成果の確認とフィードバックを通して、お子さまの学習過程を親御さまにお伝えいたします。具体的には以下のような方法で行います：</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>毎回のレッスン後の簡単な進捗報告</li>
            <li>月1回の詳細なレポート提供</li>
            <li>3ヶ月ごとの総合評価と今後の学習計画の提案</li>
            <li>作成したプロジェクトの共有と説明</li>
          </ul>
          <p className="mt-2">これらを通じて、お子さまの成長を可視化し、学習意欲の向上にも繋げていきます。</p>
        </>
      ),
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />
    },
    {
      question: "パソコンは必要ですか？",
      answer: "はい、必要です。授業時間外もいつでもパソコンが触れる環境を用意してください。",
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />
    },
    {
      question: "必要なパソコンのスペックは何ですか？",
      answer: (
        <>
          <p>Scratch、HTML、CSS、JavaScript、Pythonの学習には、特別な高性能パソコンは必要ありません。以下の基本的なスペックを推奨しています：</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>OS: Windows 10以降、macOS 10.15以降</li>
            <li>CPU: Intel Core i3以上</li>
            <li>メモリ: 4GB以上</li>
            <li>ストレージ: 128GB以上のSSD</li>
            <li>インターネット接続: 安定したブロードバンド接続</li>
            <li>ブラウザ: 最新のGoogle Chrome、Firefox、Safari</li>
          </ul>
          <p className="mt-2">これらのスペックがあれば、スムーズに学習ができます。必要なソフトウェアやツールはすべてウェブ上で利用できるため、追加のインストールは基本的に不要です。</p>
        </>
      ),
      icon: <Monitor className="w-6 h-6 text-purple-500" />
    },
    {
      question: "適正テストはどのようなものですか？",
      answer: "論理テストです。簡単なパズルのようなものです。",
      icon: <Monitor className="w-6 h-6 text-purple-500" />
    },
    // {
    //   question: "",
    //   answer: "はい、30分の無料体験レッスンをご用意しています。この体験レッスンでは、実際のレッスンの雰囲気や教え方を体験していただけます。また、お子さまの現在のプログラミングスキルや興味を確認し、最適な学習プランをご提案いたします。体験レッスン後には、保護者の方々とのカウンセリングの時間も設けており、ご質問やご要望をお聞きしています。",
    //   icon: <MessageCircle className="w-6 h-6 text-purple-500" />
    // }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">よくある質問</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              icon={item.icon}
              isOpen={openIndex === index}
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-300 rounded-full"></div>
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-indigo-300 rounded-full"></div>
      </div>
    </section>
  );
}