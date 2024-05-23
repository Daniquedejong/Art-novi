<script>
	import Contactform from '../../lib/molecules/contactform.svelte';

	export let data;

	console.log(data);
</script>

<section>
<Contactform />
</section>

<style>
    section {
        margin-top: 4em;
    }
</style>