import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = (props) => {
	const editor = useRef(null);

	return (
		<JoditEditor className="border rounded-2xl"
			ref={editor}
			value={props.content}
			onChange={newContent => {props.onSet(newContent);}}
		/>
	);
};

export default TextEditor