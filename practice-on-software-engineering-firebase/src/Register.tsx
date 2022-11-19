import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Formik, FormikErrors, FormikProps } from 'formik';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';

import { db } from './services/firestore';

interface FormSchema {
	email: string;
	password: string;
	passwordRepeat: string;
}

async function validate({ email, password, passwordRepeat }: FormSchema) {
	const errors: FormikErrors<FormSchema> = {};

	if (password !== passwordRepeat) {
		const message = 'Two password must the the same';
		errors.password = message;
		errors.passwordRepeat = message;
	}
	if (password.length < 8) {
		errors.password = 'Password must have at least 8 characters';
	}

	const userRef = query(collection(db, 'users'), where('email', '==', email));
	const userSnapshot = await getDocs(userRef);
	if (!userSnapshot.empty) {
		errors.email = 'Email already exists';
	}
	return errors;
}

const RegisterForm: React.FC<FormikProps<FormSchema>> = ({
	handleSubmit,
	handleChange,
	values,
	touched,
	errors,
}) => (
	<Form onSubmit={handleSubmit} style={{ minWidth: '700px' }}>
		<Form.Group as={Row} className="my-3" controlId="formHorizontalEmail">
			<Form.Label column sm={3}>
				Email
			</Form.Label>
			<Col sm={9}>
				<Form.Control
					name="email"
					type="email"
					placeholder="Email"
					onChange={handleChange}
					value={values.email}
					required
				/>
			</Col>
		</Form.Group>

		<Form.Group as={Row} className="my-3" controlId="formHorizontalPassword">
			<Form.Label column sm={3}>
				Password
			</Form.Label>
			<Col sm={9}>
				<Form.Control
					name="password"
					type="password"
					placeholder="Password"
					onChange={handleChange}
					value={values.password}
					isInvalid={touched.password && !!errors.password}
					// isValid={touched.password && !touched.password}
					required
				/>
				<Form.Control.Feedback type="invalid">
					{errors.password}
				</Form.Control.Feedback>
			</Col>
		</Form.Group>

		<Form.Group as={Row} className="my-3">
			<Form.Label column sm={3}>
				Repeat password
			</Form.Label>
			<Col sm={9}>
				<Form.Control
					name="passwordRepeat"
					type="password"
					placeholder="Password"
					onChange={handleChange}
					value={values.passwordRepeat}
					isInvalid={touched.passwordRepeat && !!errors.passwordRepeat}
					required
				/>
				<Form.Control.Feedback type="invalid">
					{errors.passwordRepeat}
				</Form.Control.Feedback>
			</Col>
		</Form.Group>

		<Form.Group as={Row}>
			<Col className="mt-3" sm={{ span: 9, offset: 3 }}>
				<Button type="submit">Register</Button>
			</Col>
		</Form.Group>
	</Form>
);

function Register() {
	const navigate = useNavigate();
	const handleSubmit = async ({ email, password }: FormSchema) => {
		const usersRef = collection(db, 'users');
		await addDoc(usersRef, { email, password });
		navigate('/login');
	};

	return (
		<Container
			as={Stack}
			fluid="md"
			className="justify-content-center align-items-center flex-fill"
			gap={3}
		>
			<h1>Register</h1>
			<Formik
				validate={validate}
				initialValues={{
					email: '',
					password: '',
					passwordRepeat: '',
				}}
				onSubmit={handleSubmit}
			>
				{RegisterForm}
			</Formik>
		</Container>
	);
}

export default Register;
