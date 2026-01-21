import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Add these
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import style from './fileDisplayStyles.module.css';
import { Footer } from '../footer/footer';

export function FileDisplay({ directoryName, mdDirectoryName }) { // Props optional now (URL overrides)
  const params = useParams(); // Grabs :directory, :mdDirectory, :slug from URL
  const navigate = useNavigate();
  const directory = params.directory || directoryName;
  const mdDirectory = params.mdDirectory || mdDirectoryName;
  const slug = params.slug; // If present, we're in detail mode

  const modules = import.meta.glob('/src/pages/**/*.md', { query: '?raw', import: 'default', eager: true });
  console.log(modules);
  const posts = Object.entries(modules)
    .filter(([path]) => path.startsWith(`/src/pages/${directory}/${mdDirectory}/`))
    .map(([path, content]) => {
      if (!content || typeof content !== 'string') {
        console.error(`Invalid content for ${path}:`, content);
        return null;
      }
      try {
        const { content: markdownContent, data } = matter(content);
        const fileName = path.split('/').pop().replace('.md', '');
        const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
        console.log(`Parsed ${fileName}`);
        return {
          slug: fileName,
          title: data.title || fileName.replace(dateMatch?.[0] || '', '').trim(),
          date: dateMatch?.[1] || '0000-00-00',
          content: markdownContent,
        };
      } catch (error) {
        console.error(`Error parsing ${path}:`, error);
        return null;
      }
    })
    .filter(post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));

  // Find selected post by slug (if in detail mode)
  const selectedPost = slug ? posts.find(post => post.slug === slug) : null;

  if (selectedPost) {
    return (
      <div id={'postContainer'}>
        {/* <div id={'buttonContainer'}> */}
        {/*   <Link */}
        {/*     to=".." // Relative: goes up to /directory/mdDirectory (list) */}
        {/*     style={{ */}
        {/*       marginBottom: '20px', */}
        {/*       cursor: 'pointer', */}
        {/*       border: '1px solid #ccc', */}
        {/*       borderRadius: '6px', */}
        {/*       padding: '3px', */}
        {/*       textDecoration: 'none', // Style as button */}
        {/*     }} */}
        {/*     id={'backPostButton'} */}
        {/*   > */}
        {/*     ← Back */}
        {/*   </Link> */}
        {/*   {/* Or use navigate: <button onClick={() => navigate(-1)}>← Back</button> for true browser back */}
        {/* </div> */}
        <div id={'postContent'} className={style.markdown}>
          <h1>{selectedPost.title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPost.content}</ReactMarkdown>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div>
        {posts.length === 0 && <p>No posts found.</p>}
        {posts.map((post) => (
          <Link // Wrap div in Link for navigation
            key={post.slug}
            to={`./${post.slug}`} // Relative: /directory/mdDirectory/my-slug
            style={{ textDecoration: 'none' }} // Prevent underline
          >
            <div
              style={{
                border: '1px solid #ccc',
                margin: '10px',
                padding: '15px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              <h2 style={{ margin: '0 0 5px 0' }}>{post.title}</h2>
              <p style={{ margin: 0, color: '#666' }}>{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
