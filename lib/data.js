import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts() {
  const allPosts = fs.readdirSync(contentDirectory);
  // return an array with all file name but we want juste want the slug so we remove '.md'
  return allPosts.map(fileName => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(path.join(contentDirectory, fileName), 'utf8'); // we parse the file in utf8
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    }

  })

}

export const blogPosts = [
  {
    title: 'My firs post!',
    slug: 'first',
    // to parse / convert the date in plain text for md file we need to do : 
    //  node -e 'console.log(new Date().toISOString())'
    date: new Date().toISOString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cupiditate pariatur delectus animi voluptatibus adipisci perspiciatis explicabo eum quis placeat officia, at soluta officiis ex, iure sequi! Ipsam, adipisci neque?'
  },
  {
    title: 'Second post!',
    slug: 'second',
    date: new Date().toISOString(),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cupiditate pariatur delectus animi voluptatibus adipisci perspiciatis explicabo eum quis placeat officia, at soluta officiis ex, iure sequi! Ipsam, adipisci neque?'
  },
  {
    title: 'Thirds post',
    slug: 'thirds',
    date: new Date().toISOString(),
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