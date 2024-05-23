import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query Pages {
			page(where: { id: "clw99lps72zfs07l66k8946pn" }) {
				artImage {
					url
				}
				title
			}
		}
	`;

	const data = await hygraph.request(query);
	return data;
}
