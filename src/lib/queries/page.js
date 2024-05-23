export default function pageQuery(gql) {
	return gql`
		query Pages {
			page(where: { id: "clve9wa0l0sit07lax4rfve8s" }) {
				title
				artImage {
					url
				}
				artText {
					text
				}
				artTitle
			}
		}
	`;
}
