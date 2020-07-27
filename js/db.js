import { pushNotification } from "./notif.js";

const idbPromised = idb.open("laliga-db", 1, (upgradeDb) => {
  if (!upgradeDb.objectStoreNames.contains("teams")) {
    const teamsObjectStore = upgradeDb.createObjectStore("teams", {
      keyPath: "id",
    });
    teamsObjectStore.createIndex("name", "name", {
      unique: false,
    });
  }
});

const dbGetAllClub = () => {
  return new Promise((resolve, reject) => {
    idbPromised
      .then((db) => {
        const transaction = db.transaction("teams", `readonly`);
        return transaction.objectStore("teams").getAll();
      })
      .then((teams) => {
        if (teams !== undefined) {
          resolve(teams);
        } else {
          reject(new Error("Not Found"));
        }
      });
  });
};

const dbInsertClub = (team) => {
  return new Promise((resolve, reject) => {
    idbPromised
      .then((db) => {
        const transaction = db.transaction("teams", `readwrite`);
        transaction.objectStore("teams").put(team);
        return transaction;
      })
      .then((transaction) => {
        if (transaction.complete) {
          resolve(true);
          M.toast({
            html: `<i class="material-icons">check_circle</i> You like ${team.name} and you can see on Favorite menu `,
          });
        } else {
          reject(new Error(transaction.onerror));
        }
      })
      .catch(() => {
        console.log(Error);
      });
  });
};

const dbDeleteClub = (team) => {
  return new Promise((resolve, reject) => {
    idbPromised
      .then((db) => {
        const transaction = db.transaction("teams", `readwrite`);
        transaction.objectStore("teams").delete(team.id);
        return transaction;
      })
      .then((transaction) => {
        if (transaction.complete) {
          resolve(true);
          M.toast({
            html: `<i class="material-icons">check_circle</i> Club ${team.name} has been delete`,
          });
          pushNotification(`You has delete ${team.name} from list favourite`);
        } else {
          reject(new Error(transaction.onerror));
        }
      });
  });
};

function getById(id) {
  return new Promise((resolve, reject) => {
    idbPromised
      .then((db) => {
        const ts = db.transaction("teams", "readonly");
        const store = ts.objectStore("teams");
        return store.get(id);
      })
      .then((team) => {
        resolve(team);
      });
  });
}

export { dbInsertClub, dbGetAllClub, dbDeleteClub, getById };
