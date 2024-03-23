import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	return (
		<JoditEditor className="border rounded-2xl"
			ref={editor}
			value={content}
			onChange={newContent => {setContent(newContent);}}
		/>
	);
};

export default TextEditor