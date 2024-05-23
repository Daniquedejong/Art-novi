import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
    query MyQuery {
        page(where: {id: "clwhqg8we0b3807midzz02p1y"}) {
          artImage {
            url
          }
          artTitle
          artText {
            text
          }
          title
        }
      }
         
	`;



	const data = await hygraph.request(query);

	return data;
}
