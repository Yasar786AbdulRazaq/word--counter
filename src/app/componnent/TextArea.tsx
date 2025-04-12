'use client';

import { useState } from 'react';

export default function TextArea() {
  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="bg-blue-100 p-6 rounded-xl shadow-lg max-w-2xl mx-auto w-full">
      <textarea
        className="w-full h-48 p-4 rounded-xl border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 text-blue-900"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />
      <div className="mt-4 flex justify-between text-blue-800 font-semibold text-lg">
        <p>Words: {wordCount}</p>
        <p>Characters: {charCount}</p>
      </div>
    </div>
  );
}
