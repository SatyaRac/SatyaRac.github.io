function showStandings(data) {
  var standingsHTML = "";
  const standingElemen = document.getElementById("standings");
  var x = '1';
  data.standings[0].table.forEach((standing) => {
    standingsHTML += `<tr>
        <td>${x++}</td>
        <td><img src="${standing.team.crestUrl.replace(
          /^http:\/\//i,
          "https://"
        )}" alt="badge" width="30px"/></td>
        <td class="hide-on-med-and-down">${standing.team.name}</td>
        <td>${standing.won}</td>
        <td>${standing.draw}</td>
        <td>${standing.lost}</td>
        <td>${standing.points}</td>
        <td>${standing.goalsFor}</td>
        <td>${standing.goalsAgainst}</td>
        <td>${standing.goalDifference}</td>
        </tr>`;
  });

  document.getElementById("progress").style.display = "none";
  standingElemen.innerHTML = `<div class="card" style="margin-top: 30px;">
  <table class="striped centered responsive-table">
      <thead class="indigo lighten-1 white-text">
          <tr class="z-depth-2">
              <th>Position</th>
              <th>Club</th>
              <th class="hide-on-med-and-down">Club Name</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>P</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
          </tr>
       </thead>
      <body id="standings">
          ${standingsHTML}
      </body>
  </table>
  
  </div>`;
}
export default showStandings;
