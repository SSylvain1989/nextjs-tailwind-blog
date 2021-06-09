export const blogPosts = [
  {
    title: 'My firs post!',
    slug: 'first',
    date: new Date().toString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cupiditate pariatur delectus animi voluptatibus adipisci perspiciatis explicabo eum quis placeat officia, at soluta officiis ex, iure sequi! Ipsam, adipisci neque?'
  },
  {
    title: 'Second post!',
    slug: 'second',
    date: new Date().toString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cupiditate pariatur delectus animi voluptatibus adipisci perspiciatis explicabo eum quis placeat officia, at soluta officiis ex, iure sequi! Ipsam, adipisci neque?'
  },
  {
    title: 'Thirds post',
    slug: 'thirds',
    date: new Date().toString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cupiditate pariatur delectus animi voluptatibus adipisci perspiciatis explicabo eum quis placeat officia, at soluta officiis ex, iure sequi! Ipsam, adipisci neque?'
  },
]

//***
// For my understanding
// if we leave the date like date: new Date() , we will have an error : 
// Error: Error serializing `.date` returned from `getStaticProps` in "/blog/[slug]".
// Reason: `object` ("[object Date]") cannot be serialized as JSON. Please only return JSON serializable data types.
// solution : apply toString for serialized as JSON.