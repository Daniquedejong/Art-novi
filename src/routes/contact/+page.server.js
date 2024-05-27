import { fail } from '@sveltejs/kit';
import { request as graphqlRequest } from 'graphql-request';

export const prerender = false;

// Sending data to Hygraph
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		let name = formData.get('name');
		let email = formData.get('email');
		let comment = formData.get('comment');

		// Check if the name has at least 2 characters
		if (name.length < 2) {
			return fail(400, {
				error: true,
				message: 'Naam moet minstens 2 karakters bevatten',
				name,
				email,
				comment
			});
		}

		// Define the GraphQL mutation with variables
		const mutation = ` 
      mutation {
        createComment(data: { name: "${name}", email: "${email}", comment: "${comment}" }) {
          id
          name
          email
          comment
        }
      }
    `;

		// Hygraph endpoint and authorization token
		const endpoint = 'https://api-eu-west-2.hygraph.com/v2/clvdmuc690gbw07w5wkv7d0re/master';
		const HYGRAPH_TOKEN = import.meta.env.VITE_HYGRAPH_KEY;
		const headers = {
			Authorization: `Bearer ${HYGRAPH_TOKEN}`
		};

		// Voer de mutatie uit
		const postData = await graphqlRequest
        (endpoint, mutation, undefined, headers);
		return { success: true, postData };
	}
};
