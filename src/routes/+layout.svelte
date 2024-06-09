<script>
	import { Header } from '$lib/index.js';

	// Importeer de onNavigate functie vanuit '$app/navigation'
	import { onNavigate } from '$app/navigation';

	// Luister naar navigatiegebeurtenissen
	onNavigate((navigation) => {
		// Controleer of de 'startViewTransition' methode beschikbaar is in het document
		if (!document.startViewTransition) {
			// Als de methode niet beschikbaar is, verlaat de functie vroegtijdig
			return;
		}

		// Start een nieuwe overgang tussen de weergaven
		// Creëer een nieuwe promise om de overgang tussen weergaven te controleren
		return new Promise((resolve) => {
			// Roep de 'startViewTransition' methode aan en geef een callback functie door
			document.startViewTransition(async () => {
				// Los de belofte op zodra de overgang is gestart
				resolve();

				// Wacht tot de navigatie compleet is voordat de belofte wordt vervuld
				await navigation.complete;
			});
		});
	});
</script>

<Header />

<main>
	<slot />
</main>
