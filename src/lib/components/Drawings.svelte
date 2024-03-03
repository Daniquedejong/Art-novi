<script>
</script>

<body>
	<h1 class="h1-2018">2018</h1>
	<img class="img1" src="src/assets/Drawings1.jpg" alt="drawing1" />
	<img class="img2" src="src/assets/Drawings2.jpg" alt="drawing2" />
	<img class="img3" src="src/assets/Drawings3.jpg" alt="drawing3" />
	<img class="img4" src="src/assets/Drawings4.jpg" alt="drawing4" />

	<h1 class="h1-2019">2019</h1>
	<img class="img5" src="src/assets/Drawings5.jpg" alt="drawing5" />
	<img class="img6" src="src/assets/Drawings6.jpg" alt="drawing6" />
	<img class="img7" src="src/assets/Drawings7.jpg" alt="drawing7" />
	<img class="img8" src="src/assets/Drawings8.jpg" alt="drawing8" />
</body>

<style>
	body {
		display: grid;
		row-gap: 1em;
		column-gap: 1em;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 0.5fr 1fr 0.5fr 1fr;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.h1-2018 {
		grid-column-start: 1;
		grid-column-end: 5;
	}

	.img1 {
		max-width: 10em;
		grid-row-start: 2/3;
		grid-column: 1/2;
	}

	.img2 {
		max-width: 10em;
		height: 15em;
		grid-row-start: 2/3;
		grid-column: 2/3;
	}

	.img3 {
		max-width: 10em;
		grid-row-start: 2/3;
		grid-column: 3/4;
	}

	.img4 {
		max-width: 10em;
		grid-row-start: 2/3;
		grid-column: 4/5;
	}

	.h1-2019 {
		grid-column-start: 1;
		grid-column-end: 5;
		grid-row: 3/4;
	}

	.img5 {
		max-width: 10em;
		grid-row-start: 4/5;
		grid-column: 1/2;
	}

	.img6 {
		max-width: 10em;
		grid-row-start: 4/5;
		grid-column: 2/3;
	}

	.img7 {
		max-width: 10em;
		grid-row-start: 4/5;
		grid-column: 3/4;
	}

	.img8 {
		max-width: 10em;
		grid-row-start: 4/5;
		grid-column: 4/5;
	}
</style>
