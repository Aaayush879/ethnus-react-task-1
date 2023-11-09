import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const words = text.split(/\s+/).filter((word) => word !== '');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your text here"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p>Word Count: {words.length}</p>
    </div>
  );
};

export default WordCounter;
