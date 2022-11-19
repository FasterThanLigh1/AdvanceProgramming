import './quill.css';
import 'react-quill/dist/quill.snow.css';

import {
	addDoc,
	collection,
	doc,
	getDoc,
	serverTimestamp,
} from 'firebase/firestore';
import React, { FormEventHandler, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';

import Tags from '../components/Tags';
import { db } from '../services/firestore';

const NoteEditor: React.FC = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const navigate = useNavigate();
	const { noteId } = useParams();

	const handleSubmit: FormEventHandler = async (event) => {
		event.preventDefault();
		const token = localStorage.getItem('token');
		if (token != null) {
			const timestamp = serverTimestamp();
			const note = { title, body, tags, timestamp };
			const colRef = collection(db, 'users', token, 'notes');
			await addDoc(colRef, note);
			navigate('/');
		}
	};

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate('/login');
		} else if (noteId !== undefined) {
			const noteRef = doc(db, 'users', token, 'notes', noteId);
			getDoc(noteRef).then((note) => {
				setTitle(note.get('title'));
				setBody(note.get('body'));
				setTags(note.get('tags'));
			});
		}
	}, [noteId]);

	return (
		<Container
			className="vstack justify-content-center align-items-center"
			fluid="lg"
		>
			<Form className="gap-3" onSubmit={handleSubmit}>
				<Form.Control
					className="my-3"
					as="input"
					placeholder="Title"
					style={{ maxWidth: '300px' }}
					onChange={(event) => setTitle(event.target.value)}
					value={title}
				/>

				<ReactQuill
					className="my-3"
					theme="snow"
					placeholder={'Body'}
					value={body}
					onChange={setBody}
					style={{ minWidth: '800px' }}
				/>

				<Tags tags={tags} onChange={setTags} />
				<Button className="my-3" type="submit">
					Save
				</Button>
			</Form>
		</Container>
	);
};

export default NoteEditor;
