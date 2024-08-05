import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Code, Award } from 'lucide-react';

export default function InstructorProfile() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-1000 mb-16">講師紹介</h2>
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">プログラミング講師</div>
                  <h3 className="text-2xl font-bold text-gray-900">大城 ののか</h3>
                </div>
              </div>
              <p className="mt-2 text-gray-600">
  N高校を卒業後、完全無料のプログラミングスクール
  <a href="https://42tokyo.jp/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
    42tokyo
  </a>
  へでコンピューターサイエンスを学ぶ。幅広いプログラミング経験を活かし、生徒一人ひとりに合わせた丁寧な指導を心がけています。
</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Code className="w-5 h-5 text-indigo-500 mr-2 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">スキル</h4>
                    <p className="text-gray-600">Python, JavaScript, HTML/CSS, React, C, C++</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-indigo-500 mr-2 mt-1" />
                  <div>
  <h4 className="text-lg font-semibold text-gray-700">資格・実績</h4>
  <ul className="text-gray-600 list-disc list-inside space-y-1">
    <li>
        42Tokyo
    </li>
    <li>N高校 卒業</li>
  </ul>
</div>


                </div>
              </div>
              <div className="mt-8">
                <Link href="https://oshiro17.github.io/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                  詳細プロフィールへ
                  <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 relative">
              <Image
                src="/meishi.png"
                alt="大城ののか先生の名刺"
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}