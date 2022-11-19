import { Timestamp } from 'firebase/firestore';

export interface Note {
	id: string;
	title: string;
	body: string;
	timestamp: Timestamp;
	tags: string[];
}
