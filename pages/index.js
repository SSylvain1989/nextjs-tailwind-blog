import Head from 'next/head';
import {blogPosts} from '../lib/data';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <ListBlogPost key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

// need to do a component here *****
function ListBlogPost({slug, content, date, title}) {
  return (
    <div className="border border-black-400 shadow hover:shadow-md rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      {/* parse the date as a string and decide the format of the date */}
      <div className="text-gray-600 text-xs">{format(parseISO(date), 'MMMM do, uuu')}</div>
      <div>{content}</div>
    </div>
  );
}