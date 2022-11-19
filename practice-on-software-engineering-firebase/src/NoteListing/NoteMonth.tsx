import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import NoteCard from '../components/NoteCard';
import { Note } from '../models/Note';

const NoteMonth: React.FC<{
	month: string;
	notes: Note[];
	onDelete: (noteId: string) => any;
}> = ({ month, notes, onDelete }) => (
	<>
		<Stack className="mt-4 mb-2" direction="horizontal" gap={3}>
			<h4>{month}</h4>
			<hr className="flex-fill" />
		</Stack>
		<Row className="g-3" md={2}>
			{notes.map((note) => (
				<Col>
					<NoteCard {...note} key={note.id} onDelete={onDelete} />
				</Col>
			))}
		</Row>
	</>
);

export default NoteMonth;
