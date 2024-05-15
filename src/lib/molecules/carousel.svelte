<script>
	// -------------Export hygraph data--------------
	export let drawingsTitle;
	
	
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

		// -------------Filteren--------------
		const categoryTitle = document.querySelectorAll('.category-title');
		const allCategoryPosts = document.querySelectorAll('.all');

		for (let i = 0; i < categoryTitle.length; i++) {
			categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
		}

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
		}

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
		<div class="container">

			<div class="main-filter-container">
				<h2>Filteren</h2>

				<ul>
					<div class="category-title" id="all">
						<li>All</li>
						<span><i class="fas fa-border-all"></i></span>
					</div>
					<div class="category-title" id="2017">
						<li>2017</li>
						<span><i class="fas fa-border-all"></i></span>
					</div>
					<div class="category-title" id="2018">
						<li>2018</li>
						<span><i class="fas fa-border-all"></i></span>
					</div>
					<div class="category-title" id="2019">
						<li>2019</li>
						<span><i class="fas fa-border-all"></i></span>
					</div>
					<div class="category-title" id="2020">
						<li>2020</li>
						<span><i class="fas fa-border-all"></i></span>
					</div>
				</ul>
			</div>

			<h1><span class="title">{drawingsTitle}</span></h1>


			<img
				src="/assets/Drawing15-removebg-preview.png"
				alt="drawing-example"
				class="drawing-example"
				width="700"
				height="600"
			/>

			<!--Moet nog dynamisch en in een each loop-->
			<section class="panel">
				<div class="all 2020">
					<img src="/assets/Drawings1.jpg" alt="img" width="350" height="500" />
				</div>
				<h2>Frustratie mannetje</h2>
				<p>Hierbij is het ontwerp gekozen door.....</p>
			</section>

			<section class="panel">
				<div class="all 2020">
					<img src="/assets/Drawings2.jpg" alt="img" width="350" height="500" />
				</div>
				<h2>Frustratie mannetje</h2>
				<p>Hierbij is het ontwerp gekozen door.....</p>
			</section>

			<section class="panel">
				<div class="all 2020">
					<img src="/assets/Drawings3.jpg" alt="img" width="350" height="500" />
				</div>
				<h2>Frustratie mannetje</h2>
				<p>Hierbij is het ontwerp gekozen door.....</p>
			</section>

			<section class="panel">
				<div class="all 2020">
					<img src="/assets/Drawings4.jpg" alt="img" width="350" height="500" />
				</div>
				<h2>Frustratie mannetje</h2>
				<p>Hierbij is het ontwerp gekozen door.....</p>
			</section>
		</div>
	</section>
</body>

<style>
	body {
		overflow: hidden;
		overflow-y: scroll;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
	}

	section {
		overflow-y: hidden;
		position: relative;
		height: unset;
		height: 100%;
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
	}

	body,
	section {
		overflow-x: hidden;
		margin: 0;
	}

	.drawing-example {
		margin-top: 5em;
		margin-left: -65em;
	}

	.main-filter-container {
		display: flex;
		justify-content: center;
	}

	ul {
		display: flex;
		justify-content: center;
		cursor: pointer;
	}

	li {
		margin: 1em;
		background-color: var(--Novi-Beigegrey);
		list-style: none;
		padding: 1em;
		border-radius: 0.3em;
	}

	li:hover {
		background-color: var(--Novi-Mediumgrey);
	}

	li:active {
		background-color: var(--Lightgrey);
	}

	.container {
		width: 400%;
		height: 100vh;
		display: flex;
		flex-wrap: nowrap;
	}

	.panel {
		margin-top: 8em;
		margin-left: 1em;
		border-radius: 8em 8em 0em 0em;
	}

	.title {
		position: absolute;
		margin-left: -6.5em;
	}

	h1,
	h2,
	p {
		color: var(--Novi-White);
	}

	h1 {
		font-size: 6em;
		margin: 5.5em 6em 0em 0.5em;
		font-family: var(--Novi-Mainfont);
		padding-left: 0.5em;
	}

	h2 {
		margin-top: 0.2em;
		font-family: var(--Novi-Secondfont);
		font-weight: 300;
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
