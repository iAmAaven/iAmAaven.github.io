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

function toggleMenu() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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
