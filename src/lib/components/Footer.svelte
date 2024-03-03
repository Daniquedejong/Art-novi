<script>
</script>

<body>
	<footer>
		<h3 class="email">Email</h3>
		<h3 class="facebook">Facebook</h3>
		<h3 class="phone">Phone</h3>
	</footer>
</body>

<style>
	footer {
		display: grid;
		grid-template-areas:
			'email'
			'facebook'
			'Phone';
		background-color: rgb(255, 252, 249);
		font-size: 0.8em;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		padding: 1em;
	}

	@media (width>35em) {
		footer {
			display: grid;
			grid-template-areas: 'email facebook phone';
			margin-left: 8em;
		}
	}
</style>
