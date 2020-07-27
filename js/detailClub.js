import { getItemClubById, getLikeClubs } from "./data/api.js";
import { dbInsertClub } from "../js/db.js";

document.addEventListener("DOMContentLoaded", () => {
  var club = getItemClubById();
  var btnLove = document.getElementById("btnLove");

  btnLove.addEventListener("click", () => {
    club.then((team) => {
      dbInsertClub(team);
      console.log(team.id);
      setTimeout(() => {
        window.location.href = "index.html#clubs";
      }, 1000);
    });
  });
});
