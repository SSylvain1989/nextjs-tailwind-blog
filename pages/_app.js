// this file is like root in react
import '../styles/globals.css'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-9/12 my-8">
      <header>
          <h1 className="text-6xl font-bold text-center">My blog</h1>
        <nav className="my-14">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
