import Head from 'next/head';
import {blogPosts} from '../lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome
        </h1>
      </main>

      <div>
        {blogPosts.map((post) => (
          <div key={post.slug}>
            <div>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </div>
            <div>{post.date.toString()}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
