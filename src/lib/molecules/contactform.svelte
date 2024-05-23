<div class="container">
	<form action="https://api.web3forms.com/submit" method="POST">
		<!-- Replace with your Access Key -->
		<input type="hidden" name="access_key" value="aa151dab-1c37-47d8-b44e-7a87847343c5" />

		<!-- Form Inputs. Each input must have a name="" attribute -->
		<label for="fullname">Full name</label>
		<input type="text" name="name" placeholder="Your full name..." required />
		<label for="lastname">E-mail</label>
		<input type="email" name="email" placeholder="Your e-mail..." required />
		<label for="message">Message</label>
		<textarea name="message" placeholder="Your message..." style="height:100px" required></textarea>

		<!-- hCaptcha Spam Protection -->
		<div class="h-captcha" data-captcha="true"></div>

		<button type="submit">Send</button>
	</form>
	<!-- Required for hCaptcha -->
	<script src="https://web3forms.com/client/script.js" async defer></script>
</div>

<style>
input[type=text], [type=email], [name=message] {
  width: 100%; 
  padding: 12px;
  border: 1px solid var(--Novi-Lightgrey); 
  border-radius: 4px; 
  box-sizing: border-box; 
  margin-top: 6px; 
  margin-bottom: 40px; 
  cursor: pointer;
  resize: vertical; 
  font-family: var(--Novi-Thirdfont);
}

input:hover {
  background-color: var(--Novi-Lightlightgrey);
}

textarea:hover {
  background-color: var(--Novi-Lightlightgrey);
}

.container {
  border-radius: 5px;
  background-color: var(--Novi-White);
  padding: 40px;
  max-width: 50%;
  margin: 0 auto;
}

button {
background-color: var(--Novi-Lightgrey);
color: var(--Novi-White);
padding: 0.5em 1em 0.5em 1em;
border-radius: 4px;
border: none;
}

button:hover {
    background-color: var(--Novi-Lightlightgrey);
}

label {
    font-family: var(--Novi-Thirdfont);
}
</style>