// input entries will be saved values and assigned to a new row entry respectively when the save song button is pressed

const songEntry = document.querySelector("#songInput form");
const songList = document.querySelector("#list");
const songs = [];

songEntry.addEventListener("submit", (event) => {
	event.preventDefault();

	const newSong = {
		imageUpload: songEntry.elements.imageUpload.files[0] ?? null,
        // ^ learned this means will use the code on the left if not null, or uses the right side if null, this case returning null anyway
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
	songs.push(newSong);
	songEntry.reset();


});

// with a selected field from the dropdown, filter the list by the text in the input and show what's being filtered

const filterField = document.querySelector("#filterField");
const filterText = document.querySelector("#filterText input");
const filterButton = document.querySelector("#filterText button");
const activeFilters = document.querySelector("#activeFiltersDisplayed")

filterButton.addEventListener("click", (event) => {
	event.preventDefault();

	const selectedField = filterField.value;
	const searchText = filterText.value.trim().toLowerCase();

    const newFilter = document.createElement("button")
    newFilter.innerHTML = `${selectedField}: ${searchText}`
	newFilter.addEventListener("click", () => {
		newFilter.remove();
	});
    activeFilters.append(newFilter)
});

// only allow song delete buttons to work when the toggle is on, make button background darkred when toggled on

const deleteButtonToggler = document.querySelector("#toggleDelete")
const deleteButtons = document.querySelectorAll(".delete");

let deleteMode = false; // default off
deleteButtonToggler.addEventListener("click", () => {
    deleteMode = !deleteMode; // false becomes true and vice versa
    songList.classList.toggle("deleteMode");
});
songList.addEventListener("click", (event) => {
    if (!deleteMode) return; // off means nothing happens

    if (event.target.matches(".delete")) { // on - removes the row (big help with this block)
        const row = event.target.closest(".row");
        if (row) row.remove();
    }
});