import React from 'react';
import { Phone, UserPlus } from 'lucide-react';

export default function Hero() {
  return (　
    <div className="py-12 px-4  opacity-90 sm:px-6  bg-gradient-to-br from-blue-100 via-blue-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="space-y-4 mb-8">
            <p className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
              現役情報学生がサポートいたします！
            </p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
              できるを実感、
            </h1>
          </div>
          <div>
            <h1 className="text-indigo-600 mt-6 sm:mt-10 font-extrabold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              プログラミング家庭教師<br className="sm:hidden"/>生徒募集中！
            </h1>
          </div>
          
          <div className="mt-8 flex flex-row justify-center items-center space-x-6">
            <button className=" sm:w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300 flex items-center justify-center">
              <UserPlus className="mr-2" size={24} />
              <span>公式ライン</span>
            </button>
            <a href="tel:123-456-7890" className="sm:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
          <Phone className="mr-2" size={24} />
          <span>電話する</span>
        </a>
            {/* <button className=" sm:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
              <Phone className="mr-2" size={24} />
              <span>電話する</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
