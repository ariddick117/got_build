(() => {
	// structure
	console.log("My JS issa Working!")

	// variable stack -> get the shields/sigils first
	const sigils = document.querySelectorAll('.sigilContainer'),
		  lightBox = document.querySelector('.lightbox'),
		  closeButton = document.querySelector('.close-lightbox'),
		  houseVideo = document.querySelector('.house-stark'),
		  bannerImages = document.querySelector('#houseImages'),
		  houseName = document.querySelector('#house-name'),
		  houseInfo = document.querySelector('.house-info'),
		  pauseButton = document.querySelector(".fa-pause");
		  rewindButton = document.querySelector(".fa-backward");
		  playButton = document.querySelector(".fa-play");


		  // houseData is a multidimensional array (arrays within arrays) Data containers can hold anything - in this case, eahc index or entry holds another, smaller container with 2 indexes - 1 with the house name, one with the house data
		  // whne you click on a chield, the dataset.offset property is a 0 through 4 thats pointing at the min index of the houseData array (stark, baratheon, lannister etc.) So the syntax becomes houseData[0][0] for the house name and houseData[0][1] for the house data. Each gets assigned to the h1 and the paragraph tag

	// const houseData = ["stark", "baratheon", "lannister", "tully", "greyjoy", "arryn"]; // index 0, 1, 2 etc. // original
	   const houseData = [ // houseData[0][0] is "stark", houseData[0][1]
	   ["stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
// houseData[1][0] is "baratheon", houseData[1][1]
	   ["baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`], 

// houseData[2][0] is "lannister", houseData[2][1]
	   ["lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

// houseData[3][0] is "lannister", houseData[3][1]
	   ["tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],

// houseData[4][0] is "lannister", houseData[4][1]
	   ["greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],

// houseData[5][0] is "arryn", houseData[5][1]
	   ["arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority. `]
	   ];

	   // pause video on a click
	   function pauseVideo() {
	   	houseVideo.pause();
	   	console.log("STOP! (in the name of love)");
	   }

	   // write the other functions for custom video controls (play, volume, time counter, progress bar scrubber etc.)
	   function playVideo() {
	   	houseVideo.play();

	   	console.log("Play ball!");
	   }

	   function rewindVideo() {
	   	houseVideo.currentTime = 0;

	   	console.log("Restart?");
	   }

	   

	function popLightBox() {
		// make the lightbox show up
		lightBox.classList.add('show-lightbox');


		// grab a reference to the current video via the className object on the shield
		// debugger; // allows you to see what happens when you CLICK

		// get the className property, split it into seperate words (aka an ARRAY) via an empty character
		// then get the second word [1] that will be the house name
		let houseName = this.className.split(" ")[1];

		// capitalize the first letter using Javascript String Methods
		houseName = houseName.charAt(0).toUpperCase() + houseName.slice(1); // () means that it is a method
		// the slice is there to add the rest of the word back after taking the first letter off to capitalize

		// use Javascript string interpolation to build a path to the target video
		let videoPath = `video/House-${houseName}.mp4`;

		// load this new video videoPath
		houseVideo.src = videoPath;

		houseVideo.load();

		houseVideo.play();
	}

	function closeLightBox(event) {
		event.preventDefault(); // e and event mean the same thing. they are event handlers

		// make the LightBox show up
		lightBox.classList.remove('show-lightbox');
		houseVideo.currentTime = 0; // rewind the video
		houseVideo.pause();

	}

	function animateBanners() {
		// we need an offset that we can multiply by 
		// to animate our banners to the left and make the active one show up

		let offset = 600,
			multiplier = this.dataset.offset; 
			// this is the data-offset customer data attribute (class) on each of the sigils
			console.log((offset * multiplier) + "px");

		// move the banners to the right using our math from above
		bannerImages.style.right = `${offset * multiplier + "px"}`;


		// change the house name on the page at the same time as above
		// houseName.textContent = "House " + houseData[multiplier];

		// the multiplier is the outer array index (and also the data-offset custom attributes custom attributes on the html elment -> the shield you are clicking on)
		// the second [] is the INNER array reference (see waaaaayyy up at the top) -> 0 is the house name, 1 is the house data
		houseName.textContent = `House ${houseData[multiplier][0]}`;
		houseInfo.textContent = houseData[multiplier][1];

	}

	sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
	// sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));


	closeButton.addEventListener("click", closeLightBox);

	houseVideo.addEventListener('ended', closeLightBox);

	pauseButton.addEventListener('click', pauseVideo);
	playButton.addEventListener('click', playVideo);
	rewindButton.addEventListener('click', rewindVideo);
})();