import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');

	console.log(query);
	return json({
		message: 'Hello, world!'
	});
};
