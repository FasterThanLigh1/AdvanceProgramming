import {
	collection,
	CollectionReference,
	getDocs,
	orderBy,
	query,
	where,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';

import NoteCard from '../components/NoteCard';
import { Note } from '../models/Note';
import { db } from '../services/firestore';

const Result: React.FC<{ searchParams: URLSearchParams }> = ({
	searchParams,
}) => {
	const navigate = useNavigate();
	const [notes, setNotes] = useState<Note[] | undefined>();
	const onDelete = (noteId: string) =>
		setNotes(notes?.filter((note) => note.id !== noteId));

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate('/login');
		} else {
			const queries = [orderBy('timestamp', 'desc')];
			if (searchParams.get('after'))
				queries.push(
					where(
						'timestamp',
						'>=',
						new Date(searchParams.get('after') + 'T00:00:00')
					)
				);
			if (searchParams.has('before'))
				queries.push(
					where(
						'timestamp',
						'<=',
						new Date(searchParams.get('before') + 'T00:00:00')
					)
				);
			if (searchParams.has('tags'))
				queries.push(
					where('tags', 'array-contains-any', searchParams.getAll('tags'))
				);
			const notesRef = query(
				collection(db, 'users', token, 'notes') as CollectionReference<Note>,
				...queries
			);
			getDocs(notesRef).then((querySnapshot) => {
				const query = searchParams.get('query') ?? '';
				const notes: Note[] = [];
				for (const noteSnapshot of querySnapshot.docs) {
					const note = { ...noteSnapshot.data(), id: noteSnapshot.id };
					if (note.title.includes(query) || note.body.includes(query))
						notes.push(note);
				}
				setNotes(notes);
			});
		}
	}, [navigate, searchParams]);

	return notes !== undefined ? (
		notes.length > 0 ? (
			<Container fluid="lg">
				<Row className="g-3" md={2}>
					{notes.map((note) => (
						<Col key={note.id}>
							<NoteCard {...note} onDelete={onDelete} />
						</Col>
					))}
				</Row>
			</Container>
		) : (
			<Stack className="justify-content-center align-items-center flex-fill">
				<h1>No note found</h1>
			</Stack>
		)
	) : (
		<></>
	);
};

export default Result;
