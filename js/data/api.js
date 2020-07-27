import showStandings from "../standings.js";
import showMatches from "../match.js";
import { showClubs, showClubById } from "../clubs.js";
import showTopScores from "../topscores.js";
import { dbGetAllClub, getById } from "../db.js";
import { showLikedClub, showFavClubById } from "../favClub.js";

const API_KEY = "a8e2b2830bba43b5866adbb47a20a453";
const BASE_URL = "https://api.football-data.org/v2/";
const LEAGUE_ID = 2014;
const STANDINGS = `${BASE_URL}competitions/${LEAGUE_ID}/standings`;
const MATCHES = `${BASE_URL}competitions/${LEAGUE_ID}/matches?status=SCHEDULED`;
const CLUBS = `${BASE_URL}competitions/${LEAGUE_ID}/teams`;
const PLAYER = `${BASE_URL}competitions/PD/scorers`;

const fetchAPI = (url) => {
  return fetch(url, {
    headers: {
      "X-Auth-Token": API_KEY,
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        console.log("Error: " + res.status);
        return Promise.reject(new Error(res.statusText));
      } else {
        return Promise.resolve(res);
      }
    })
    .then((res) => res.json())
    .catch((error) => {
      console.log("Error :" + error);
    });
};

function getStandings() {
  if ("caches" in window) {
    caches.match(STANDINGS).then((response) => {
      if (response) {
        response.json().then((data) => {
          console.log("Standings Data: " + data);
          showStandings(data);
        });
      }
    });
  }
  fetchAPI(STANDINGS)
    .then((data) => {
      showStandings(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getMatches() {
  if ("caches" in window) {
    caches.match(MATCHES).then((response) => {
      if (response) {
        response.json().then((data) => {
          console.log("Matchs Data: " + data);
          showMatches(data);
        });
      }
    });
  }
  fetchAPI(MATCHES)
    .then((data) => {
      showMatches(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getClubs() {
  if ("caches" in window) {
    caches.match(CLUBS).then((response) => {
      if (response) {
        response.json().then((data) => {
          console.log("Club Data: " + data);
          showClubs(data);
        });
      }
    });
  }
  fetchAPI(CLUBS)
    .then((data) => {
      showClubs(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getTopScores() {
  if ("caches" in window) {
    caches.match(PLAYER).then((response) => {
      if (response) {
        response.json().then((data) => {
          console.log("TOP Data: " + data);
          showTopScores(data);
        });
      }
    });
  }
  fetchAPI(PLAYER)
    .then((data) => {
      showTopScores(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getItemClubById() {
  return new Promise(function (resolve, reject) {
    var urlParams = new URLSearchParams(window.location.search);
    var idParams = urlParams.get("id");

    if ("caches" in window) {
      caches.match(BASE_URL + "teams/" + idParams).then((response) => {
        if (response) {
          response.json().then((data) => {
            console.log("Club Fav Data: " + data);
            showClubById(data);
          });
        }
      });
    }
    fetchAPI(BASE_URL + "teams/" + idParams)
      .then((data) => {
        showClubById(data);
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

function getLikeClubs() {
  dbGetAllClub().then((data) => {
    showLikedClub(data);
  });
}

function getLikeClubById() {
  var urlParams = new URLSearchParams(window.location.search);
  var idParams = urlParams.get("id");
  var id = parseInt(idParams);

  getById(id).then((data) => {
    showFavClubById(data);
  });
}

export {
  getStandings,
  getMatches,
  getClubs,
  getTopScores,
  getItemClubById,
  getLikeClubs,
  getLikeClubById,
};
