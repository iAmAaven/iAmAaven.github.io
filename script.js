let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function flipAlbum(albumNumber) {
  var album = document.getElementById("album" + albumNumber);

  if (album.style.transform === "rotateY(180deg)") {
    album.style.transform = "rotateY(0deg)";
  } else {
    album.style.transform = "rotateY(180deg)";
  }
}

/*

ALBUM DATA

*/
const albums = [
  {
    id: 1,
    title: "Take Me Back To Eden",
    artist: "Sleep Token",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/48/SleepTokenTMBTE.jpg",
    rating: [true, true, true, true, true],
    favoriteSong: "Take Me Back To Eden",
    songRating: [true, true, true, true, true],
  },
  {
    id: 2,
    title: "Sundowning",
    artist: "Sleep Token",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/SleepTokenSundowning.jpg",
    rating: [true, true, true, true, true],
    favoriteSong: "Higher",
    songRating: [true, true, true, true, true],
  },
  {
    id: 3,
    title: "This Place Will Become Your Tomb",
    artist: "Sleep Token",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg",
    rating: [true, true, true, true, false],
    favoriteSong: "Telomeres",
    songRating: [true, true, true, true, true],
  },
  {
    id: 4,
    title: "The Death Of Peace Of Mind",
    artist: "Bad Omens",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/a/af/TheDeathOfPeaceOfMind.jpg",
    rating: [true, true, true, true, false],
    favoriteSong: "TBA",
    songRating: [false, false, false, false, false],
  },
  {
    id: 5,
    title: "Pain Remains",
    artist: "Lorna Shore",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/LornaShorePainRemains.jpg",
    rating: [true, true, true, true, true],
    favoriteSong: "Pain Remains I: Dancing Like flames",
    songRating: [true, true, true, true, true],
  },
  {
    id: 6,
    title: "Immortal",
    artist: "Lorna Shore",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/0/06/Lorna_Shore_-_Immortal.png",
    rating: [true, true, true, true, false],
    favoriteSong: "Darkest Spawn",
    songRating: [true, true, true, true, true],
  },
  {
    id: 7,
    title: "POST HUMAN: NeX GEn",
    artist: "Bring Me The Horizon",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Post_Human_NeX_GEn.png",
    rating: [true, true, true, true, true],
    favoriteSong: "DiE4u",
    songRating: [true, true, true, true, true],
  },
  {
    id: 8,
    title: "EXCESSIVE GUILT",
    artist: "thrown",
    cover:
      "https://images.genius.com/039342449e384f5be61679bee99e724b.1000x1000x1.png",
    rating: [true, true, true, true, false],
    favoriteSong: "backfire",
    songRating: [true, true, true, true, true],
  },
];

function createAlbumHTML(album) {
  const ratingStars = album.rating
    .map(
      (full) => `<img src="images/${full ? "kokoPerho" : "tyhjaPerho"}.png">`
    )
    .join("");
  const songRatingStars = album.songRating
    .map(
      (full) => `<img src="images/${full ? "kokoPerho" : "tyhjaPerho"}.png">`
    )
    .join("");

  return `
      <div class="album-box" onclick="flipAlbum(${album.id})">
          <div class="album-inner" id="album${album.id}">
              <div class="album-box-front">
                  <img src="${album.cover}" class="album-cover">
                  <strong class="album-title">${album.title}</strong>
                  <strong class="artist">${album.artist}</strong>
              </div>
              <div class="album-box-back">
                  <strong>ALBUM RATING:</strong>
                  <div class="rating-box">${ratingStars}</div>
                  <strong><br><br>FAVORITE SONG:</strong>
                  <strong><br>${album.favoriteSong}</strong>
                  <div class="rating-box">${songRatingStars}</div>
              </div>
          </div>
      </div>
  `;
}

const albumContainer = document.getElementById("album-list");
albumContainer.innerHTML = albums.map(createAlbumHTML).join("");

/*

ALBUM SORTING

*/

// Function to sort the albums alphabetically
document.getElementById("sort-by-title").addEventListener("click", () => {
  const albumList = document.getElementById("album-list");
  const albumBoxes = Array.from(albumList.getElementsByClassName("album-box"));

  // Sorts album-boxes by the text inside the .album-title element
  albumBoxes.sort((a, b) => {
    const titleA = a
      .querySelector(".album-title")
      .textContent.trim()
      .toUpperCase();
    const titleB = b
      .querySelector(".album-title")
      .textContent.trim()
      .toUpperCase();
    return titleA.localeCompare(titleB);
  });

  // Clears the current album list
  albumList.innerHTML = "";

  // Re-appends the sorted album boxes to the album-list container
  albumBoxes.forEach((box) => {
    albumList.appendChild(box);
  });
});

/*

SORT ALBUMS BY ARTIST

*/

// Function to sort the albums alphabetically by artist
document.getElementById("sort-by-artist").addEventListener("click", () => {
  const albumList = document.getElementById("album-list");
  const albumBoxes = Array.from(albumList.getElementsByClassName("album-box"));

  albumBoxes.sort((a, b) => {
    const artistA = a.querySelector(".artist").textContent.trim().toUpperCase();
    const artistB = b.querySelector(".artist").textContent.trim().toUpperCase();
    return artistA.localeCompare(artistB);
  });

  albumList.innerHTML = "";

  albumBoxes.forEach((box) => {
    albumList.appendChild(box);
  });
});
