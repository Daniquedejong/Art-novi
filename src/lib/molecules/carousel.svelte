<script>
	// -------------Export hygraph data--------------
	export let data;

	// ---------------Imports----------------
	// Importeer de onMount functie uit Svelte
	import { onMount } from 'svelte';

	// Importeer de gsap animatiebibliotheek en de ScrollTrigger plugin
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	// -------------Carousel animatie--------------
	// Registreer de ScrollTrigger plugin bij GSAP
	gsap.registerPlugin(ScrollTrigger);

	// Gebruik de onMount functie om code uit te voeren wanneer de component is geladen
	onMount(() => {

		// Hierdoor wordt de container standaard verborgen door CSS (gaat weer aan met JS)
		document.querySelector('.container').style.display = 'flex';

		// Functie om de GSAP animatie aan te maken
		function createGsapAnimation() {
			// Selecteer alle elementen met de klasse 'panel' en zet ze om in een array
			let sections = gsap.utils.toArray('.panel');

			// Maak een GSAP animatie aan voor de geselecteerde sections
			gsap.to(sections, {
				// Verplaats de secties horizontaal, waarbij elke sectie 100% van zijn breedte naar links verschuift
				xPercent: -100 * (sections.length - 1),
				// Geen easing, dus lineaire beweging
				ease: 'none',
				// Configureer de ScrollTrigger plugin
				scrollTrigger: {
					// Gebruik '.container' als het element dat de scroll-trigger activeert
					trigger: '.container',
					// Zet de '.container' vast tijdens het scrollen
					pin: true,
					// Koppel de animatie aan de scrollpositie, waarbij '1' betekent dat de animatie gelijkmatig verloopt
					scrub: 1,
					// Laat de animatie "klikken" naar de dichtstbijzijnde sectie
					snap: 1 / (sections.length - 1),
					// Bepaal het einde van de scroll-trigger als een extra waarde gelijk aan de breedte van de '.container'
					end: () => '+=' + document.querySelector('.container').offsetWidth
				}
			});
		}

		// Maak de GSAP animatie aan bij het laden van de pagina
		createGsapAnimation();

		// -------------Filteren--------------

		// Hierdoor wordt de container standaard verborgen door CSS (gaat weer aan met JS)
		document.querySelector('.main-filter-container').style.display = 'flex';

		// Selecteer alle categorie titels en alle posts
		const categoryTitle = document.querySelectorAll('.category-title');
		const allCategoryPosts = document.querySelectorAll('.all');

		// Voeg een klik event toe aan elke categorie titel
		for (let i = 0; i < categoryTitle.length; i++) {
			categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
		}

		// Functie om de posts te filteren
		function filterPosts(item) {
			const isActive = item.classList.contains('active');
			if (isActive) {
				// Toon alle posts als de filter al actief is
				for (let i = 0; i < allCategoryPosts.length; i++) {
					allCategoryPosts[i].style.display = 'block';
				}

				// Verwijder de actieve klasse
				item.classList.remove('active');
			} else {
				// Verander de actieve positie
				changeActivePosition(item);
				// Filter de posts
				for (let i = 0; i < allCategoryPosts.length; i++) {
					if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
						allCategoryPosts[i].style.display = 'block';
					} else {
						allCategoryPosts[i].style.display = 'none';
					}
				}
			}

			// Reset de scrollpositie naar het begin
			document.querySelector('.container').scrollLeft = 0;

			// Herinitialiseer de GSAP animatie
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			createGsapAnimation();
		}

		// Functie om de actieve positie te veranderen
		function changeActivePosition(activeItem) {
			for (let i = 0; i < categoryTitle.length; i++) {
				categoryTitle[i].classList.remove('active');
			}
			activeItem.classList.add('active');
		}

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
	});
</script>

<body>
	<section>
		<div class="main-filter-container">
			<!-- Filter categorieën -->
			<ul>
				<!-- Categorie: All -->
				<div class="category-title active" id="all">
					<li>All</li>
					<span><i class="fas fa-border-all" aria-hidden="true"></i></span>
				</div>
				<!-- Categorie: Happiness -->
				<div class="category-title" id="happiness">
					<li>Happiness</li>
					<span><i aria-hidden="true"></i></span>
				</div>
				<!-- Categorie: Confusion -->
				<div class="category-title" id="confusion">
					<li>Confusion</li>
					<span><i aria-hidden="true"></i></span>
				</div>
				<!-- Categorie: Frustration -->
				<div class="category-title" id="frustration">
					<li>Frustration</li>
					<span><i aria-hidden="true"></i></span>
				</div>
				<!-- Categorie: Sadness -->
				<div class="category-title" id="sadness">
					<li>Sadness</li>
					<span><i aria-hidden="true"></i></span>
				</div>
			</ul>
		</div>

		<div class="container">
			<h1><span class="title">{data.page.title}</span></h1>

			<img
				src="/assets/Drawing15-removebg-preview.png"
				alt="drawing-example"
				class="drawing-example"
				width="700"
				height="600"
			/>

			<!-- Sectie voor afbeeldingen uit frustration -->
			{#each data.page.artImage.slice(0, 4) as image, i}
				<section class="panel">
					<div class="all frustration">
						<img
							src={image.url}
							loading="lazy"
							decoding="async"
							alt="Artwork related to frustration"
							width="350"
							height="500"
						/>
						<h2>{data.page.artTitle[i]}</h2>
						<p>{data.page.artText[i].text}</p>
					</div>
				</section>
			{/each}

			<!-- Sectie voor afbeeldingen uit sadness -->
			{#each data.page.artImage.slice(4, 10) as image, i}
				<section class="panel">
					<div class="all sadness">
						<img
							src={image.url}
							loading="lazy"
							decoding="async"
							alt="Artwork related to sadness"
							width="350"
							height="500"
						/>
						<h2>{data.page.artTitle[i + 10]}</h2>
						<p>{data.page.artText[i + 10].text}</p>
					</div>
				</section>
			{/each}

			<!-- Sectie voor afbeeldingen uit confusion -->
			{#each data.page.artImage.slice(10, 15) as image, i}
				<section class="panel">
					<div class="all confusion">
						<img
							src={image.url}
							loading="lazy"
							decoding="async"
							alt="Artwork related to confusion"
							width="350"
							height="500"
						/>
						<h2>{data.page.artTitle[i + 10]}</h2>
						<p>{data.page.artText[i + 10].text}</p>
					</div>
				</section>
			{/each}

			<!-- Sectie voor afbeeldingen uit happiness -->
			{#each data.page.artImage.slice(15, 21) as image, i}
				<section class="panel">
					<div class="all happiness">
						<img
							src={image.url}
							loading="lazy"
							decoding="async"
							alt="Artwork related to happiness"
							width="350"
							height="500"
						/>
						<h2>{data.page.artTitle[i + 10]}</h2>
						<p>{data.page.artText[i + 10].text}</p>
					</div>
				</section>
			{/each}
		</div>

		<noscript>
			<!-- Sectie voor afbeeldingen uit happiness -->
			{#each data.page.artImage.slice(0, 21) as image, i}
				<section class="panel">
					<div class="all happiness">
						<img
							src={image.url}
							loading="lazy"
							decoding="async"
							alt="Artwork related to happiness"
							width="350"
							height="500"
						/>
						<h2>{data.page.artTitle[i]}</h2>
						<p>{data.page.artText[i].text}</p>
					</div>
				</section>
			{/each}
		</noscript>
	</section>
</body>

<style>
	noscript {
		display: grid;
		gap: 1em;
		grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
	}

	body {
		overflow: hidden;
		overflow-y: scroll;
		height: 100%;
		margin: 0;
	}

	section {
		overflow-y: hidden;
		position: relative;
		height: 100%;
		overflow-x: hidden;
	}

	.drawing-example {
		margin-top: 5em;
		margin-left: -60em;
	}

	.main-filter-container {
		display: flex;
		justify-content: center;
		height: fit-content;
		display: none;
	}

	ul {
		display: flex;
		justify-content: center;
		cursor: pointer;
		margin-top: 1em;
	}

	li {
		margin: 1em;
		background-color: var(--Novi-Mediumgrey);
		font-family: var(--Novi-Secondfont);
		list-style: none;
		padding: 0.2em 1em;
		border-radius: 0.2em;
	}

	li:hover {
		color: var(--Novi-White);
	}

	.container {
		width: 400%;
		height: 100vh;
		display: flex;
		flex-wrap: nowrap;
		display: none;
	}

	::-webkit-scrollbar {
		display: none;
	}

	.panel {
		margin-top: 5em;
		padding: 2em 0em 0em 0.5em;
		background-color: var(--Novi-Darkgrey);
		flex-shrink: 0;
		box-sizing: border-box;
	}

	.title {
		position: absolute;
		margin-left: -0.5em;
	}

	h1,
	h2,
	p {
		color: var(--Novi-White);
	}

	h1 {
		font-size: 6em;
		margin: 1.8em 11em 0em 0.5em;
		font-family: var(--Novi-Mainfont);
		padding-left: 0.5em;
	}

	h2 {
		margin-top: 0.2em;
		font-family: var(--Novi-Secondfont);
		font-weight: 250;
		font-size: 1.2em;
		display: flex;
		justify-content: center;
	}

	p {
		margin-top: -0.5em;
		font-family: var(--Novi-Thirdfont);
		font-size: 0.9em;
		display: flex;
		justify-content: center;
	}
</style>
