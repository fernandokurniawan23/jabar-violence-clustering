fetch("distribusi_wilayah.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("tabel-distribusi").innerHTML = data;
  });

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Ubah teks tombol
  const btn = document.querySelector(".dark-mode-toggle");
  if (body.classList.contains("dark-mode")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}

// Show button when scrolled down
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Load tabel distribusi
fetch("distribusi_wilayah.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("tabel-distribusi").innerHTML = data;
    initTableSearch();
  });

// FUNGSI SEARCH TABLE
function initTableSearch() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#tabel-distribusi table tbody tr");

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");

      let rowMatch = false;

      cells.forEach((cell) => {
        const text = cell.innerText.trim().toLowerCase();

        if (text.length === 0) return;

        if (text.includes(filter)) {
          rowMatch = true;
        }
      });

      row.style.display = rowMatch ? "" : "none";
    });
  });
}

// zoom image
document.querySelectorAll(".img").forEach((img) => {
  img.addEventListener("click", function () {
    const overlay = document.getElementById("imageZoomOverlay");
    const zoomed = document.getElementById("zoomedImage");

    zoomed.src = this.src;
    overlay.classList.add("active");
  });
});

document
  .getElementById("imageZoomOverlay")
  .addEventListener("click", function () {
    this.classList.remove("active");
  });
