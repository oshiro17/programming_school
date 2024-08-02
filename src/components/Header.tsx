import Link from 'next/link'

export default function Header() {
  return (
    <header className=" bg-indigo-600">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="font-bold text-xl text-white">FYBE プログラミング家庭教師</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#features"><span className="text-white hover:text-indigo-600">特徴</span></Link>
            <Link href="/#testimonials"><span className="text-white hover:text-indigo-600">受講生の声</span></Link>
            <Link href="/#contact"><span className="text-white hover:text-indigo-600">お問い合わせ</span></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
