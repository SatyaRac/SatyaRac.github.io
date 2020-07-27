function showMatches(data) {
  const matchesHTML = "";
  const matchElemen = document.getElementById("matches");
  data.matches.forEach((match) => {
    let m = moment();
    m = moment(match.utcDate);

    matchesHTML += `<tr>
    <td>${m.toString()}</td>
    <td>${match.homeTeam.name}</td>    
    <td>${match.awayTeam.name}</td>
    </tr>`;
  });

  document.getElementById("progresM").style.display = "none";
  matchElemen.innerHTML = `<div class="card" style="margin-top: 30px;">
  <table class="striped centered responsive-table">
      <thead class="indigo lighten-1 white-text">
          <tr>
          <th>Match Date</th>
          <th>Home Team</th>
          <th>Away Team</th>
          </tr>
          </thead>
          <tbody id="matches">
          ${matchesHTML}
          </tbody>
          </table>
          </div>`;
}
export default showMatches;
