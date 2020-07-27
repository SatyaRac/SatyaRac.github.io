function showLikedClub(data) {
  var clubHTML = "";
  data.forEach((club) => {
    clubHTML += `<div class="col s12 m4">
        <div class="card small" style="margin: 50px auto">
          <div class="card-image">
            <img src="${club.crestUrl.replace(/^http:\/\//i, "https://")}" alt="Image Club Not Found">
          </div>
          <div class="card-content center">
            <h5>${club.name}</h5>
          </div>
          <div class="card-action indigo lighten-1 ">
            <a href="./fav.html?id=${
              club.id
            }" class="white-text">Detail Club</a>
          </div>
        </div>
      </div>`;
  });

  if (data.length === 0)
    clubHTML +=
      '<div class="chip center-align">You haven`t added a favorite team </div>';
  document.getElementById("progress").style.display = "none";
  document.getElementById("loved").innerHTML = clubHTML;
}

function showFavClubById(data) {
  var clubsHTML = "";
  data.squad.forEach((player) => {
    clubsHTML += `<tr>
        <td>${player.name}</td>
        <td>${player.position}</td>
        
        <td>${player.nationality}</td>
        <td>${player.shirtNumber}</td>
    </tr>`;
  });
  var squadHTML = `<div class="section">
    <h3 class="header center grey-text">Club Info of La Liga España</h3>
    <hr class="solid"></hr>
    <div class="row">
    <div class ="col s1 m2"></div>
             <div class="col s10 m8">
             <div class="card" style="margin-top: 30px;">
                 <div class="card-image" style="padding: 50px;">
                     <img class="responsive-img" src="${data.crestUrl.replace(
                       /^http:\/\//i,
                       "https://"
                     )}" alt="club">
                 </div>
                 <div class="card-content">
                     <h5 class="purple-text center-align">${data.name}</h5>
                     <hr class="solid"></hr>
                     <h6 class="center-align">Stadium : ${data.venue}</h6>
                     <hr class="solid"></hr>
                     <h6 class="center-align">Founded : ${data.founded}</h6>
                     <hr class="solid"></hr>
                     <h6 class="center-align">Address : ${data.address}</h6>
                     <hr class="solid"></hr>
                     <h6 class="center-align">Email : ${data.email}</h6>
                     <hr class="solid"></hr>
                     <h6 class="center-align">Website : <a href =" ${
                       data.website
                     }">${data.website}</a></h6>
                 </div>
             </div>
             </div>
             <div class ="col s1 m2"></div>
         </div>
         <h3 class="grey-text center-align">Players</h3>
         <div class="divider"></div>
         <div class="row">
             <div class="card">
             <table class="striped centered responsive-table" style="margin-top: 30px;">
                 <thead class="purple darken-4 white-text">
                     <tr>
                         <th>Name</th>
                         <th>Position</th>
                         <th>Nationality</th>
                         <th>Shirt Number</th>
                     </tr>
                 </thead>
                 <tbody>
                     ${clubsHTML}
                 </tbody>
             </table>
    </div>
    </div>`;

  document.getElementById("progress").style.display = "none";
  document.getElementById("body-content").innerHTML = squadHTML;
}
export { showLikedClub, showFavClubById };
