import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getMessaging, getToken } from "firebase/messaging";

import Header from './Header';
import Login from './Login';
import Exchange from './ExchangePage';
import NoteEditor from './NoteEditor';
import NoteListing from './NoteListing';
import NoteSearch from './NoteSearch';
import Register from './Register';


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Container className="vstack min-vh-100 gap-3" fluid>
				<Header />
				<Routes>
					<Route path="/" element={<NoteListing />} />
					<Route path="/edit" element={<NoteEditor />} />
					<Route path="/edit/:noteId" element={<NoteEditor />} />
					<Route path="/search" element={<NoteSearch />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/exchange-page" element={<Exchange />} />
				</Routes>
			</Container>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

const messaging = getMessaging();
getToken(messaging, { vapidKey: '_jC6bj4u0N2_jQs7T66Fq6Z9GFsntVoX-Y0bFXwpk14' }).then((currentToken) => {
	if (currentToken) {
		// Send the token to your server and update the UI if necessary
		// ...
	} else {
		// Show permission request UI
		console.log('No registration token available. Request permission to generate one.');
		// ...
	}
}).catch((err) => {
	console.log('An error occurred while retrieving token. ', err);
	// ...
});
