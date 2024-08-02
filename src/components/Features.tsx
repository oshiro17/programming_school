import React from 'react';

export default function Features() {
  const features = [
    { title: "現役情報学生が指導", description: "現役情報学生の女性講師が楽しく丁寧に指導します" },
    { title: "実践的な制作体験", description: "実際に何かを作り上げる体験を通じて、楽しみながら学びましょう" },
    { title: "未経験でも大丈夫", description: "プログラミングが初めてでも大歓迎" },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-full text-center">
          <div className="bg-indigo-100 bg-opacity-65 w-full p-4 rounded-t-lg mb-4">
  <h3 className="font-bold text-xl text-indigo-800">{feature.title}</h3>
</div>

              <div className="flex-grow flex flex-col justify-center">
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}