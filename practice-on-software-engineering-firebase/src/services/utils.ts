const apiBaseUrl = 'http://localhost:8000/';

export async function request(endpoint: string, options?: RequestInit) {
	const response = await fetch(apiBaseUrl + endpoint, options);
	if (!response.ok) {
		return;
	}
	return response.json();
}

export function groupBy<K, V>(
	list: V[],
	keyGetter: (val: V) => K
): Map<K, V[]> {
	const map = new Map();
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}
