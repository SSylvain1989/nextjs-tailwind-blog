import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';
import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {posts.map((post) => (
          <ListBlogPost key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}

// 
export async function getStaticProps() {
  // we import all the post with getAllPosts fonction now we can't and we won't import them from the client 
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data, // we must stringify ( put in string ) this one because content.data contain title AND date and date not a string
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}


// need to do a component here *****
function ListBlogPost({ slug, content, date, title }) {

  return (
    <div className="border border-black-400 shadow hover:shadow-md rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      {/* parse the date as a string and decide the format of the date */}
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div className="prose">{content.substr(0, 230)}</div>
    </div>
  )
};
