import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/** @type {import("./$types").RequestHandler} */
export async function GET({ params }) {
	console.log(`${env.DB_HOST}/${params.path}/${params.id}`);

	const response = await fetch(`${env.DB_HOST}/${params.path}/${params.id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	console.log(response);

	return json({});
}
