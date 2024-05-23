<script>
	// -------------Export hygraph data--------------
	export let data;

	// Importeer de gsap animatiebibliotheek en de ScrollTrigger plugin
	import { gsap } from 'gsap';

	// -------------Title animatie--------------
	// Maak een nieuwe timeline
	let tl = gsap.timeline();

	// Gebruik `from` met een stagger optie om animaties met een vertraging uit te voeren
	tl.from(
		'h1', // De elementen die je wilt animeren
		{
			duration: 1.5, // De duur van de animatie voor elk element
			y: '100%', // De animatie-eigenschap
			ease: 'power4.out', // De easing functie
			stagger: 0.15 // De vertraging tussen de animaties van de elementen
		}
	);
</script>

<section class="container">
	<h1><span class="title">{data.page.title}</span></h1>

	<!-- Sectie voor afbeeldingen uit frustration -->
	<div class="grid">
		{#each data.page.artImage.slice(0, 3) as image, i}
			<div class="panel panel-{i}">
				<img src={image.url} loading="lazy" alt="img" class="img" />
				<div class="text">
					<h2>{data.page.artTitle[i]}</h2>
					<p>{data.page.artText[i].text}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.container {
		width: 100%;
		position: relative;
		padding: 2em;
	}

	.title {
		text-align: center;
		margin-bottom: 2em;
	}

	.grid {
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 2em; /* Add some gap between panels */
	}

	.panel {
		display: flex;
		align-items: center;
	}

	.panel img {
		width: 40%;
		height: auto;
		border-radius: 1em 1em 0em 0em;
	}

	.panel .text {
		margin-left: 2em;
	}

	h1, h2, p {
		color: var(--Novi-White);
	}

	h1 {
		font-size: 2.5em;
		font-family: var(--Novi-Mainfont);
		margin-bottom: 1em;
	}

	h2 {
		font-family: var(--Novi-Secondfont);
		font-weight: 250;
		font-size: 1.2em;
	}

	p {
		font-family: var(--Novi-Thirdfont);
		font-size: 0.9em;
	}
</style>
