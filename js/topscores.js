function showTopScores(data) {
  var topScoresHTML = "";
  const topScoreElemen = document.getElementById("topScores");
  var x = "1";
  data.scorers.forEach((score) => {
    topScoresHTML += `<tr>
        <td>${x++}</td>
        <td>${score.player.name}</td>
        <td>${score.player.position}</td>
        <td>${score.player.nationality}</td>
        <td>${score.team.name}</td>
        <td>${score.numberOfGoals}</td>
        </tr>`;
  });

  document.getElementById("progress").style.display = "none";
  topScoreElemen.innerHTML = `<div class="card"">
    <table class="striped centered responsive-table">
        <thead class="indigo lighten-1 white-text">
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Position</th>
            <th>Nationality</th>
            <th>Team</th>
            <th>Number Of Goals</th>
            </tr>
            </thead>
            <tbody id="topScores">
            ${topScoresHTML}
            </tbody>
            </table>
            </div>`;
}
export default showTopScores;
