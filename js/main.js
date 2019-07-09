(() => {
	// structure
	console.log("My JS issa Working!")

	// variable stack -> get the shields/sigils first
	const sigils = document.querySelectorAll('.sigilContainer'),
		  lightBox = document.querySelector('.lightbox'),
		  closeButton = document.querySelector('.close-lightbox'),
		  houseVideo = document.querySelector('.house-stark');

	function popLightBox() {
		// make the lightbox show up
		lightBox.classList.add('show-lightbox');

		houseVideo.play();
	}

	function closeLightBox(event) {
		event.preventDefault(); // e and event mean the same thing. they are event handlers

		// make the LightBox show up
		lightBox.classList.remove('show-lightbox');
		houseVideo.currentTime = 0; // rewind the video
		houseVideo.pause();

	}

	sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
	closeButton.addEventListener("click", closeLightBox);

	houseVideo.addEventListener('ended', closeLightBox);
})();