import React, { useState } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './fileDisplayStyles.css';

export function FileDisplay({ directoryName, mdDirectoryName }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const modules = import.meta.glob('/src/pages/**/*.md', { query: '?raw', import: 'default', eager: true });
  const posts = Object.entries(modules)
    .filter(([path]) => path.startsWith(`/src/pages/${directoryName}/${mdDirectoryName}/`))
    .map(([path, content]) => {
      if (!content || typeof content !== 'string') {
        console.error(`Invalid content for ${path}:`, content);
        return null;
      }
      try {
        const { content: markdownContent, data } = matter(content);
        const fileName = path.split('/').pop().replace('.md', '');
        const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
        //console.log(markdownContent);
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

  if (selectedPost) {
    return (
      <div id={'postContainer'}>
        <div id={'buttonContainer'}>
          <button onClick={() => setSelectedPost(null)} style={{
            marginBottom: '20px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            borderRadius: '6px',
            padding: '3px',
          }}
            id={'backPostButton'}>
            ← Back
          </button>
        </div>
        <div id={'postContent'}>
          <h1>{selectedPost.title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPost.content}</ReactMarkdown>

        </div>
      </div>
    );
  }

  return (
    <div>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <div
          key={post.slug}
          onClick={() => setSelectedPost(post)}
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
      ))}
    </div>
  );
}
