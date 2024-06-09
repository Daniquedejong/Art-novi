<script>
    import { enhance } from '$app/forms'
   
    export let form

    let loading = false

    // Custom enhancement function
    function handleForm(){
        loading = true

        return async ({ result, update }) => {
            // fake 400ms delay voor user feedback
            await setTimeout(() => {
                update()

                loading = false  
            }, 400);
        }
    }
</script>

<section>

    <h1>Contact</h1>
    <h2>Contact opnemen met mij? Stuur me een bericht!</h2>

    <!-- Enhanced form -->
    <form action="/contact" method="POST" use:enhance={handleForm}> 
        
        {#if form?.error}
            <p class="message fail">{form.message}</p>
        {/if}

        <fieldset>
            <!-- <legend>Gegevens</legend> -->
            <label><span>Naam</span> <input type="text" name="name" minlength="2" required value="{form?.name ?? ''}"  placeholder="Jan Jansen"/></label>
        </fieldset>

        <fieldset>
            <!-- <legend>Ervaring</legend> -->
            <label class="label-email"><span>E-mail</span> <input type="email" name="email" required value="{form?.email ?? ''}" placeholder="Janjansen@hotmail.com"/></label>
        </fieldset>

        <fieldset>
            <!-- <legend>Ervaring</legend> -->
            <label class="label-comment"><span>Bericht</span> <textarea name="comment" rows="10" required value="{form?.comment ?? ''}" placeholder="Type hier"></textarea></label>
        </fieldset>

            <button>Send</button>
            {#if loading }
                <!-- Aninamtie voor custom enhancement -->
                <svg class="loader" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        .spinner_qM83{animation:spinner_8HQG .5s infinite; fill:#66e5bf}
                        .spinner_oXPr{animation-delay:.1s}.spinner_ZTLf{animation-delay:.2s}
                        @keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)}100%{transform:translate(0)}}
                    </style>
                    <circle class="spinner_qM83" cx="4" cy="12" r="3"/>
                    <circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
                    <circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
                </svg>
            {/if}
            
            <!-- Melding voor user feedback -->
            {#if form?.success}
                <p class:active={form?.success}>Bedankt voor het delen van jouw ervaring!</p>
            {/if}
    </form>

</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
    }

    h1, h2, p, span {
        color: var(--Novi-White);
    }

    form{
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
    }

    fieldset{
        border-style: none;
    }

    label{
        display: flex;
        flex-direction: column;
        width: 20rem;
        padding: 0 1rem 1rem 1rem;
    }
    textarea{
        resize: none;
        overflow-y: scroll;
        max-height: 10rem;
        padding: .25rem;
    }    
    

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {


    }
</style>