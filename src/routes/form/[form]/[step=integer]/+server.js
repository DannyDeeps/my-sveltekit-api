import { json } from '@sveltejs/kit';
import { env } from "$env/dynamic/private";

import Step from '$lib/form/Step.svelte';

/** @type {import("./$types").RequestHandler} */
export async function GET({ params }) {
  const response = await fetch(`${env.DB_HOST}/forms/${params.form}`);
  if (!response.ok) {
    return json({ error: response.statusText });
  }

  const form = await response.json();

  const step = form.steps.find(step => {
    return step.id === parseInt(params.step);
  });

  let component = Step.render({ step });

  return json(component);
}