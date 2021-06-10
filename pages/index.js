import Head from 'next/head';
import { getAllPosts } from '../../lib/data';
// import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {/* {blogPosts.map((post) => (
          <ListBlogPost key={post.slug} {...post} />
        ))} */}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  // we import all the post with getAllPosts fonction now we can't and we won't import them from the server 
  const allPosts = getAllPosts();
  // const {data, content} = allPosts.find(post => post.slug === params.slug)
  return {
    props: {
      posts : allPosts.map(({data, content }) => ({
        ...data, // we must stringify ( put in string ) this one because content.data contain title AND date and date not a string
        date: data.date.toISOString(),
        content,
      })),
    },
  };


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
      <div>{content}</div>
    </div>
  );
}
