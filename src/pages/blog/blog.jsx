import React, { useState } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileDisplay } from '../fileDisplay/fileDisplay';
export function Blog() {

  return (
    <>
      <FileDisplay directoryName={"blog"} mdDirectoryName={"posts"} />
    </>

  );
};

