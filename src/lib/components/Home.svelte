<script>
export let data;
(console.log(data));
</script>

<body>
	<img class="novi-pic" src="src/assets/Novi.jpg" alt="novi-pic" />

    <!-- <h2>{@html data.abouts.aboutInfo.html}</h2> -->

	<h2>
		i get nervous.<br /><br />
		when confronted with many different kinds of spoons.<br /><br />
		tablespoon, teaspoon, earspoon, boullion spoon,<br /><br />
		parfait spoon, m1926 spoon, love spoon and so on!<br /><br />
		i wonder…<br /><br />
		does it make me feel happy if i use the right spoon?<br /><br />
		there was a time when you could be happy with just your hands.<br /><br />
		now i wonder if i can get that feeling back.<br /><br />
		that’s why i like to draw things that i remember when i was a kid.<br /><br />
		i make a trolley out of wood and play with it,<br /><br />
		and work with a large plastic that i can fly with.
	</h2>
</body>

<style>
	body {
		background-color: rgb(255, 252, 249);
		display: grid;
		padding: 0.8em;
		margin: 0;

		grid-template-areas:
			'novi-pic'
			'h2';
	}

	.novi-pic {
		grid-area: novi-pic;
		margin-left: 1em;
		margin-top: 3em;
		width: 80vw;
		border-radius: 0.2em;
		box-shadow: rgb(204, 204, 204) 0px 0px 20px 0px;
	}

	h2 {
		grid-area: h2;
		font-size: 0.8em;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		padding: 1em;
    font-weight: 400;
	}

	@media (width>35em) {
		body {
			grid-template-areas: 'novi-pic  h2';
		}

		.novi-pic {
			margin-top: 7em;
			max-width: 50vw;
		}

		h2 {
			font-size: 1em;
			max-width: 50vw;
      font-weight: 400;
		}
	}
</style>
