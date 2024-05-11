<script>
	import Logo from '../atoms/logo.svelte';

	// export let data;

	function toggleMenu(event) {
		// Dit is leeg, aangezien we alleen de stijlen veranderen op basis van de checkbox-status
	}
</script>

<header>
	<a href="/"><li><Logo /></li></a>
	<nav class="nav-main">
		<ul class="ul-main">
			<!-- Moet nog dynamisch -->
			<li><a href="src/routes/drawings/+page.svelte">Drawings</a></li>
			<li><a href="src/routes/video's/+page.svelte">Video's</a></li>
			<li><a href="src/routes/exhibitions/+page.svelte">Exhibitions</a></li>
			<li><a href="src/routes/installations/+page.svelte">Installations</a></li>
		</ul>
	</nav>

	<div class="nav">
		<input class="nav-toggle" type="checkbox" id="#nav-toggle" on:change={toggleMenu} />
		<label class="nav-button" for="#nav-toggle">
			<span class="nav-button-part"></span>
			<span class="nav-button-part"></span>
			<span class="nav-button-part"></span>
		</label>
		<nav class="nav-items-container" role="navigation">
			<ul class="nav-list">
				<li class="nav-item"><a class="nav-link" href="/">Home</a></li>
				<li class="nav-item"><a class="nav-link" href="src\routes\about\+page.svelte">About</a></li>
				<li class="nav-item"><a class="nav-link" href="src\routes\contact\+page.svelte">Contact</a>
				</li>
			</ul>
		</nav>
	</div>

	<span class="nav-underline"></span>
</header>

<style>
	header {
		margin: 0;
		padding: 0;
	}

	.ul-main {
		display: flex;
		gap: 1em;
	}

	li {
		color: var(--Novi-White);
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--Novi-White);
        transform: 5s;
	}

	.nav-item a:hover {
		color: var(--Novi-Lightgrey);
        transform: scale(1.2);
        margin-left: 0.5em;
	}

    .ul-main li a:hover {
        color: var(--Novi-Lightgrey);
    }

    .ul-main li:hover {
        color: var(--Novi-Lightgrey);
        transform: scale(1.2);
    }

	.nav-main {
		justify-content: center;
		display: flex;
		margin-top: -3.5em;
		padding-bottom: 3.5em;
	}

	.nav {
		display: block;
		pointer-events: none;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 1;
	}

	.nav-toggle {
		opacity: 0;
		position: absolute;
		right: 2rem;
		top: 2rem;
		z-index: 1;
	}

	.nav-button {
		cursor: pointer;
		display: block;
		height: 1.5rem;
		padding: 2px 0;
		pointer-events: auto;
		position: absolute;
		right: 2rem;
		top: 2rem;
		width: 1.5rem;
		z-index: 3;
	}

	.nav-button-part {
		background-color: var(--Novi-White);
		display: block;
		height: 0.25rem;
		position: relative;
		transform-origin: 0;
		transition:
			transform 0.2s ease-in-out 0.2s,
			opacity 0.2s ease-in-out 0.2s,
			background-color 0.2s ease-in-out 0.2s;
		width: 1.5rem;
		will-change: transform, opacity, background-color;

		& + & {
			margin-top: 0.25rem;
		}

		&:first-child {
			transform-origin: 0 0;
		}

		&:last-child {
			transform-origin: 0 100%;
		}
	}

	.nav-toggle:checked ~ .nav-button & {
		background-color: var(--Novi-Darkgrey);
		opacity: 1;
		transform: rotate(45deg);

		&:nth-child(2) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}

		&:nth-child(3) {
			opacity: 1;
			transform: rotate(-45deg);
		}
	}

	.nav-toggle:checked + .nav-button .nav-button-part:nth-child(1) {
		transform: rotate(45deg) translateY(0);
		background-color: var(--Novi-Darkgrey);
	}

	.nav-toggle:checked + .nav-button .nav-button-part:nth-child(2) {
		opacity: 0;
	}

	.nav-toggle:checked + .nav-button .nav-button-part:nth-child(3) {
		transform: rotate(-45deg) translateY(0);
		background-color: var(--Novi-Darkgrey);
	}

	.nav-toggle:checked ~ .nav-items-container {
		transform: translateX(0);
	}

	.nav-items-container {
		max-width: 15rem;
		padding: 1rem;
		pointer-events: auto;
		transform: translateX(100%);
		transform-origin: 0;
		transition: transform 0.4s cubic-bezier(0.75, 0.2, 0.1, 1);
		width: 100vw;
		will-change: transform;
	}

	.nav-toggle:checked ~ .nav-items-container {
		transform: translateX(0); /* Verplaats het menu naar rechts wanneer ingeschakeld */
	}

	.nav-toggle:checked ~ & {
		transform: translateY(0);
	}

	.nav-list {
		background: var(--Novi-White);
		border-radius: 0.3rem;
		display: flex;
		flex-direction: column;
		-webkit-font-smoothing: antialiased;
		list-style-type: none;
		margin: 0;
		padding: 3.5rem 0 2rem;
	}

	.nav-link {
		align-items: center;
		color: var(--Novi-Darkgrey);
		display: flex;
		height: 3.5rem;
		padding: 0 2rem;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
		will-change: color;
	}

	.nav-underline {
		background-color: var(--Novi-Lightgrey);
		margin: 0 -0.5rem;
		margin-top: -2em;
		padding-bottom: 0.05rem;
		width: 100vw;
		display: flex;
	}

	@media (max-width: 35em) {
		.nav-main {
			margin-top: -0.2em;
			padding-bottom: 3.5em;
		}
	}

    @media (max-width: 26.5em) {
		.ul-main {
			margin-left: -2.2em;
		}
	}
</style>
