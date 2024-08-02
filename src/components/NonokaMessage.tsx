import React from 'react';

export default function NonokaMessageSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-10 md:mb-0 relative">
            <img 
              src="/nonoka.png" 
              alt="ののか先生" 
              className="w-full max-w-sm object-cover mx-auto shadow-lg"
            />
            <div className="font-bold absolute bottom-0 left-0 right-0 bg-green-300 bg-opacity-85 text-white py-2 px-4 text-center">
              ののか先生
            </div>
          </div>
          <div className="md:w-2/3 relative md:ml-8">
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              {/* モバイル用の下向き三角形 */}
              <div className="absolute left-1/2 top-0 md:hidden transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-white border-r-[15px] border-r-transparent"></div>
              
              {/* デスクトップ用の左向き三角形 */}
              <div className="absolute -left-3 top-1/2 hidden md:block transform -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-r-[15px] border-r-white border-b-[15px] border-b-transparent"></div>
              
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">ののか先生からのメッセージ</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
              こんにちは、ののか先生です！
<br/>
<br/>
これからの時代、大規模言語モデルAIとともに仕事をする、自分を表現することが求められています。そこで、教師からの指導の中ではプログラミングの基礎知識だけでなく、プログラミングを大規模言語モデルAIと伴走する力なども育めたらと考えています。これにより、独学力や時代にあった力をつけられると思っています。
<br/>
<br/>
私のレッスンでは、皆さんが作りたいものを作れるようになることを目指しています。

ひとり
ひとりに合わせた学習計画を立て、一緒にプロジェクトを進めながら学びます。例えば、夏休みの宿題でWebサイトを作成し、そのQRコードを学校に持っていくといった実践的なアプローチです。

私は「作りたいものを作るために学ぶ」ことがまずは大切だと思っています。これは、英語を教科書で学ぶよりも英語圏に住むことで自然に習得する方法に似ています。実際のプロジェクトに参加することで、自然にプログラミングのスキルや問題解決能力を身につけましょう。

一緒に楽しく学びながら、自分だけの素敵な作品を作り上げましょう！皆さんと一緒に学べるのを楽しみにしています。
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 opacity-30"></div> */}
    </section>
  );
}