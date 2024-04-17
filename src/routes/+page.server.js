import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
 
export async function load({url}) {
  let selectedCategoryId = url.searchParams.get('selectedCategoryId') || null;
    let where = ''
    if(selectedCategoryId !== null){
        where = `, where: {categories_some: {id: "${selectedCategoryId}"}}`
    }

    let query = gql`
    query Novi {
        abouts {
          aboutInfo
        }
      }
    `;
 
    
}

