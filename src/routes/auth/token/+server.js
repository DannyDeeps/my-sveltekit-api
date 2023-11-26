import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { randomUUID } from 'crypto';

/** @type {import('./$types').RequestHandler} */
export async function POST({cookies, request}) {

	const data = await request.json();

	const response = await fetch(`${env.DB_HOST}/accounts/${data.account}`);
	if (!response.ok) {
		return json({ message: 'Authorization Failed' });
	}

  const token = {
    account: data.account,
    uuid: randomUUID(),
    expire: new Date()
  };

	const storeToken = await fetch(`${env.DB_HOST}/tokens`, {
		method: 'POST',
		body: JSON.stringify(token)
	});

  return storeToken;
}