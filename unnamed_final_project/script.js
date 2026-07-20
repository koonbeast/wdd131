// input entries will be saved values and assigned to a new row entry respectively when the save song button is pressed

const songEntry = document.querySelector("#songInput form");
const songList = document.querySelector("#list");
const songs = []; // collecting to filter

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
		applyFilters();
	});
    activeFilters.append(newFilter)

	// filter needs to show only relevent search info and ordered alphebetically by artists

	const filteredSongs = songs.filter(song => {

		let fieldValue = ""; // makes it so I don't have to do || for all values and checks to see if the filter is all first
		if (selectedField === "all") {
			fieldValue = (song.artist + " " + song.name + " " + song.featured + " " + song.coverArtist + " " + song.notesOther + " " + song.tags).toLowerCase();
		}
		else {
			fieldValue = (song[selectedField]).toLowerCase();
		}

		return fieldValue.includes(searchText);
	});
	filteredSongs.sort(sortSongsByArtist); // should sort the list by using the function

	// const allRows = songList.querySelectorAll(".row"); // fixed code block, supposed to check which rows the match the filter
	// 	allRows.forEach(row => {
	// 		const rowText = row.textContent.toLowerCase();
	// 		const matches = rowText.includes(searchText);
			
	// 		row.style.display = matches ? "flex" : "none";
	// 	});
// Replaced with below
	
// AI rewrote this block to handle filter selection, too difficult for me to comprehend to make alone, but I understand what the code is doing specifically
	const allRows = songList.querySelectorAll(".row");
	allRows.forEach(row => {
		let fieldValue = row.textContent.toLowerCase(); // default whole row
		
		// Respect selected field when possible
		if (selectedField !== "all") {
			// Try to find the right <p> based on order (artist, name, featured, etc.)
			const dataPs = row.querySelectorAll(".dataEntry p");
			if (dataPs.length > 0) {
				const fieldIndex = getFieldIndex(selectedField);
				if (fieldIndex !== -1 && dataPs[fieldIndex]) {
					fieldValue = dataPs[fieldIndex].textContent.toLowerCase();
				}
			}
		}
		
		const matches = fieldValue.includes(searchText);
		row.style.display = matches ? "flex" : "none";
	});
// AI end
});

function sortSongsByArtist(a, b) {
	if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
		return -1
	}
	else if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
		return 1
	}
	else {
		return 0
	}
}
function getFieldIndex(field) { // AI added helper function
    const mapping = {
        "artist": 0,
        "name": 1,
        "featured": 2,
        "coverArtist": 3,
        "notesOther": 4,
        "tags": 5
    };
    return mapping[field] !== undefined ? mapping[field] : -1;
}
function applyFilters() { // helped with reapplying filters when removing a filter
	const activeFiltersButtons = activeFilters.querySelectorAll("button");
	const allRows = songList.querySelectorAll(".row");

    if (activeFiltersButtons.length === 0) { // if no filters left, show all rows
        const allRows = songList.querySelectorAll(".row");
        allRows.forEach(row => row.style.display = "flex");
        return;
	}
    // allRows.forEach(row => row.style.display = "none"); // Otherwise hide everything
	// pure AI for improvement due to not knowing how to let filters stack and keeping them stacked when removing one
	allRows.forEach(row => {
        let rowMatchesAllFilters = true;

        activeFiltersButtons.forEach(filterBtn => {
            const fullText = filterBtn.textContent.toLowerCase();
            const searchTerm = fullText.split(": ")[1] || "";

            const rowText = row.textContent.toLowerCase();

            if (searchTerm && !rowText.includes(searchTerm.trim())) {
                rowMatchesAllFilters = false;
            }
        });

        row.style.display = rowMatchesAllFilters ? "flex" : "none";
	});
	// pure AI end
}

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