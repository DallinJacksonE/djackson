import React, { useState } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const modules = import.meta.glob('./posts/*.md?raw', { eager: true });
  console.log(modules);
  const posts = Object.entries(modules)
    .map(([path, rawContent]) => {
      const { content, data } = matter(rawContent);
      const fileName = path.split('/').pop().split('?')[0].replace('.md', '');
      const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
      return {
        slug: fileName,
        title: data.title || fileName.replace(dateMatch?.[0] || '', '').trim(),
        date: dateMatch?.[1] || '0000-00-00',
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  if (selectedPost) {
    return (
      <div>
        <button onClick={() => setSelectedPost(null)} style={{ marginBottom: '20px' }}>← Back</button>
        <h1>{selectedPost.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPost.content}</ReactMarkdown>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.slug}
          onClick={() => setSelectedPost(post)}
          style={{
            border: '1px solid #ccc',
            margin: '10px 0',
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
};

