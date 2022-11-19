import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const Tags: React.FC<{ tags: string[]; onChange: (tags: string[]) => any }> = ({
	tags,
	onChange,
}) => {
	const [inputTag, setInputTag] = useState('');
	const handleClick = () => {
		setInputTag('');
		if (inputTag.length > 0 && !tags.includes(inputTag)) {
			onChange(tags.concat([inputTag]));
		}
	};

	return (
		<>
			<Stack direction="horizontal" gap={3}>
				<Form.Control
					as="input"
					placeholder="Tag"
					onChange={(event) => setInputTag(event.target.value)}
					style={{ maxWidth: '200px' }}
					value={inputTag}
				/>
				<Button onClick={handleClick}>Add new tag</Button>
			</Stack>
			<Stack className="my-2" direction="horizontal" gap={3}>
				{tags.map((tag) => (
					<div
						className="btn btn-info"
						key={tag}
						style={{ pointerEvents: 'none' }}
					>
						{tag}
					</div>
				))}
			</Stack>
		</>
	);
};

export default Tags;
