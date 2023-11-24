import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { randomUUID } from 'crypto';

/** @type {import('./$types').RequestHandler} */
export async function POST({cookies, request}) {\
	const data = await request.json();

	const response = await fetch(`${env.DB_HOST}/accounts/${data.account}`);
	if (!response.ok ) {
		return json({ message: 'Authorization Failed' });
	}
	
	const token = randomUUID();
	const expire = new Date('+1 day');
	
	const storeToken = await fetch(`${env.DB_HOST}/tokens/${data.account}`, {
		method: 'PUT',
		body: JSON.stringify({ token })
	});

	if (!storeToken.ok) {
		return json({ message: 'Internal Error' });
	}
	
	return json({token, expire});
}