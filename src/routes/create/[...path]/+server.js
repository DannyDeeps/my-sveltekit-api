import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/** @type {import("./$types").RequestHandler} */
export async function GET({ params }) {
	let newForm = {
		name: 'newform',
		steps: []
	};

	console.log(`${env.DB_HOST}/${params.path}`);

	const response = await fetch(`${env.DB_HOST}/${params.path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newForm)
	});

	let data = {};

	if (response.ok) {
		data = await response.json();
	}

	return json(data);
}
