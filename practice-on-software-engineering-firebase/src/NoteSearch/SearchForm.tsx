import React, { FormEventHandler, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

import Tags from '../components/Tags';

const inputStyle = {
	maxWidth: '300px',
};

const SearchForm: React.FC<{ setSearchParams: any }> = ({
	setSearchParams,
}) => {
	const [tags, setTags] = useState<string[]>([]);
	const [query, setQuery] = useState('');
	const [before, setBefore] = useState<string | undefined>();
	const [after, setAfter] = useState<string | undefined>();
	const handleSubmit: FormEventHandler = async (event) => {
		event.preventDefault();
		const searchParams = new URLSearchParams({ query });
		if (after !== undefined) searchParams.set('after', after);
		if (before !== undefined) searchParams.set('before', before);
		for (const tag of tags) {
			searchParams.append('tags', tag);
		}
		setSearchParams(searchParams);
	};
	return (
		<Container
			as={Stack}
			fluid="md"
			className="justify-content-center align-items-center flex-fill"
			gap={3}
		>
			<h1>Advanced Search</h1>
			<Form onSubmit={handleSubmit} style={{ minWidth: '700px' }}>
				<Form.Group as={Row} className="py-3">
					<Form.Label column sm={4}>
						Title or body contain:
					</Form.Label>
					<Col sm={8}>
						<Form.Control
							onChange={(event) => setQuery(event.target.value)}
							style={inputStyle}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="py-3" controlId="formHorizontalEmail">
					<Form.Label column sm={4}>
						After date:
					</Form.Label>
					<Col sm={8}>
						<Form.Control
							type="date"
							onChange={(event) => setAfter(event.target.value)}
							style={inputStyle}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="py-3">
					<Form.Label column sm={4}>
						Before date:
					</Form.Label>
					<Col sm={8}>
						<Form.Control
							onChange={(event) => setBefore(event.target.value)}
							type="date"
							style={inputStyle}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="py-3">
					<Col sm={4}>
						<Form.Label>Contain tags:</Form.Label>
					</Col>
					<Col sm={8}>
						<Tags tags={tags} onChange={setTags} />
					</Col>
				</Form.Group>
				<Row className="py-3">
					<Col sm={{ span: 8, offset: 4 }}>
						<Button type="submit">Search</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default SearchForm;
