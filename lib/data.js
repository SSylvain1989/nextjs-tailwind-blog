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
