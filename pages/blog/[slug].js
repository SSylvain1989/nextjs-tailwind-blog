import Head from 'next/head';
import { blogPosts } from '../../lib/data';
import { format, parseISO } from 'date-fns';

// here we have the return object 'props' of 'getStaticProps' fonction .
// Two solution , declare this props like (props) or destructure ({ title, content, date })
// to make it easier to use , we destrure the props object directly
export default function BlogPage({ title, content, date }) {
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
  console.log('hi', context);
  const { params } = context;
  return {
    // i will find the post that match with the slug , with the find methode and will return all props of the post ( title, slug, date , content ...)
    props: blogPosts.find((post) => post.slug === params.slug), // will be passed to the page component as props
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  return {
    paths: blogPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 10, // In seconds
//   }
// }


// ***** 
  // const foo = {
  //   paths: blogPosts.map((post) => ({
  //     params: {
  //       slug: post.slug,
  //     },
  //   })),
  //   fallback: false,
  // };
  // console.log(JSON.stringify(foo, null, ' ')); // it will return { paths:
  //   [ { params: [Object] },
  //     { params: [Object] },
  //     { params: [Object] } ],
  //  fallback: false }
  // because the object is to long / to deeply nested the console log will return this [object].
  // solution :   console.log(JSON.stringify(foo)); or for a " pretty render "   console.log(JSON.stringify(foo, null, ' '));
  // output : {"paths":[{"params":{"slug":"first"}},{"params":{"slug":"second"}},{"params":{"slug":"thirds"}}],"fallback":false}
  // return foo;
// }
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  // const paths = posts.map((post) => ({
  //   params: {
  //     slug: post.slug,
  //   },
  // }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.