import Link from "next/link"
const Header = () => {
  return (
    <header>
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-red-500 p-4">
      <h1 className="text-white text-xl font-bold">Logo</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
             Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
             Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default Header