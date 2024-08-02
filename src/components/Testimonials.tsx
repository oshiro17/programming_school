import React from 'react';

export default function InfoSection() {
  const infoItems = [
    { 
      title: "対象", 
      content: "小学校高学年〜高校生",
      note: "※入会前に適性テストを受けて頂きます。   合格者のみ、ご入会が可能です。"
    },
    { 
      title: "授業料", 
      content: "１コマ50分あたり\n5000円",
      note: "※入会金はいただいておりません"
    },
    { title: "定員", content: "５名" },
    { title: "授業可能時間", content: "13:00 ~ 21:00" ,note:""},
  ];

  return (
    <section id="info" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div 
                className={`w-72 h-72 rounded-full shadow-lg flex flex-col items-center justify-center p-6 text-center relative ${item.note ? 'pb-10' : ''}`}
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 40%, rgba(59, 130, 246, 0.4) 70%, rgba(59, 130, 246, 0.6) 100%)',
                }}
              >
                <h3 className="font-bold text-2xl text-blue-900">{item.title}</h3>
                <p className="text-gray-900 whitespace-pre-line">{item.content}</p>
                {item.note && (
                  <p className="text-xs text-blue-700 absolute bottom-14 left-6 right-6">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}