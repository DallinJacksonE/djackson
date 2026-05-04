import { useParams, Link } from 'react-router-dom'; // Add these
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import style from './fileDisplayStyles.module.css';
import { Footer } from '../footer/footer';

export function FileDisplay({ directoryName, mdDirectoryName }) { // Props optional now (URL overrides)
  const params = useParams(); // Grabs :directory, :mdDirectory, :slug from URL
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
        <div id={'postContent'} className={style.markdown}>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 pb-6 border-b border-slate-200">{selectedPost.title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPost.content}</ReactMarkdown>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-50">
      <div className="flex-grow max-w-4xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8">
        {posts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-lg text-slate-500 font-medium">No posts found.</p>
          </div>
        )}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link // Wrap div in Link for navigation
              key={post.slug}
              to={`./${post.slug}`} // Relative: /directory/mdDirectory/my-slug
              className="block group" // Prevent underline
            >
              <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm group-hover:shadow-md group-hover:border-blue-300 group-hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <div className="flex items-center text-sm font-medium text-slate-500">
                  <svg className="mr-2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
