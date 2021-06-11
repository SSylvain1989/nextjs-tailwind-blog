import Head from 'next/head';
import { getAllPosts } from '../../lib/data';
import { format, parseISO } from 'date-fns';

// here we have the return object 'props' of 'getStaticProps' fonction .
// Two solution , declare this props like (props) or destructure ({ title, content, date })
// to make it easier to use , we destrure the props object directly
export default function BlogPage(props) {
  const { title, content, date } = props
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="border-b-2 border-gray-200 mb-6">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-xs">{format(parseISO(date), 'MMMM do, uuu')}</div>
        </div>
        <p>{content}</p>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  // we import all the post with getAllPosts fonction now we can't and we won't import them from the server 
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find(post => post.slug === params.slug)
  return {
    props: {
      ...data, // we must stringify ( put in string ) this one because content.data contain title AND date and date not a string
      date: data.date.toISOString(),
      content,
    }
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {

  // Get the paths we want to pre-render based on posts
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
