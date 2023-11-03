/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const url = 'http://localhost:3000/forms';

	const data = await fetch(url).then(r => r.text());

	return new Response(data,	{
		headers: { 'Content-Type': 'application/json' }
	});
}