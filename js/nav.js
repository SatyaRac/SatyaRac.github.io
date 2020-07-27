import {
  getStandings,
  getMatches,
  getClubs,
  getTopScores,
  getLikeClubs,
} from "../js/data/api.js";

var page = window.location.hash.substr(1);
if (page == "") page = "standings";
loadPage(page);

function loadPage(page) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    var content = document.querySelector("#body-content");
    if (this.readyState == 4) {
      if (page === "standings") {
        getStandings();
        getMatches();
      } else if (page === "clubs") {
        getClubs();
      } else if (page === "topScores") {
        getTopScores();
      } else if (page === "favorite") {
        getLikeClubs();
      }

      if (this.status == 200) {
        content.innerHTML = xhttp.responseText;
      } else if (this.status == 404) {
        content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
      } else {
        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
      }
    }
  };
  xhttp.open("GET", "pages/" + page + ".html", true);
  xhttp.send();
}

export { loadPage };
