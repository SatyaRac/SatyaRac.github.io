import { getLikeClubById, getItemClubById } from "./data/api.js";
import { dbDeleteClub } from "../js/db.js";

document.addEventListener("DOMContentLoaded", () => {
  const item = getItemClubById();
  const btnDelete = document.getElementById("btnDel");

  btnDelete.addEventListener("click", () => {
    item.then((teamId) => {
      const confirma = confirm("Delete?");
      if (confirma == true) {
        dbDeleteClub(teamId);
        setTimeout(() => {
          window.location.href = "index.html#favorite";
        }, 1000);
      }
    });
  });
  getLikeClubById();
});
