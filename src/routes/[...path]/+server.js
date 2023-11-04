import { json } from '@sveltejs/kit';
import { env } from "$env/dynamic/private";

/** @type {import("./$types").RequestHandler} */
export async function GET({ params }) {
  let data = {};

  const response = await fetch(`${env.DB_HOST}/${params.path}`);
  if (response.ok) {
    data = await response.json();
  }

  return json(data);
}