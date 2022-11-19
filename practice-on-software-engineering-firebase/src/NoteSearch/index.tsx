import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Result from './Result';
import SearchForm from './SearchForm';

const NoteSearch: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return searchParams.toString().length > 0 ? (
		<Result {...{ searchParams }} />
	) : (
		<SearchForm setSearchParams={setSearchParams} />
	);
};

export default NoteSearch;
