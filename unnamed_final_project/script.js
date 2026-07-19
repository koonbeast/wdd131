// input entries will be saved values and assigned to a new row entry respectively when the save song button is pressed

const songEntry = document.querySelector("#songInput form");
const songList = document.querySelector("#list");

songEntry.addEventListener("submit", (event) => {
	event.preventDefault();

	const newSong = {
		imageUpload: songEntry.elements.imageUpload.files[0] ?? null,
		artist: songEntry.elements.artist.value.trim(),
		name: songEntry.elements.name.value.trim(),
		featured: songEntry.elements.featured.value.trim(),
		coverArtist: songEntry.elements.coverArtist.value.trim(),
		notesOther: songEntry.elements.notesOther.value.trim(),
		tags: songEntry.elements.tags.value.trim(),
	};

	const newRow = document.createElement("div");
	newRow.className = "row";

	newRow.innerHTML = `
		<section class="visual">
			<img src="" alt="song-represented or album image">
		</section>
		<section class="dataEntry">
			<p>${newSong.artist}</p>
			<p>${newSong.name}</p>
			<p>${newSong.featured}</p>
			<p>${newSong.coverArtist}</p>
			<p>${newSong.notesOther}</p>
			<p>${newSong.tags}</p>
		</section>
		<section class="permanentDelete">
			<button class="delete">x</button>
		</section>
	`;
	songList.append(newRow);
	songEntry.reset();


});

// with a selected field from the dropdown, filter the list by the text in the input and show what's being filtered

// only allow song delete buttons to work when the toggle is on, make button background darkred when toggled on

const deleteButtonToggler = document.querySelector("#toggleDelete")