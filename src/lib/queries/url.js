export default function getQueryUrl(gql, slug) {
    return gql`
    query Novi {
    abouts {
      aboutInfo
    }
  }
  `;
}
