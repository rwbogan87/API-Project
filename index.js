$('#clearButton').click(() => {
    $('#tableBody').empty()
    $('#citySearch')[0].reset();
})

let teamData
$(document).ready(function(){
    $.ajax({
        url: 'http://nflarrest.com/api/v1/team/',
        type: 'GET'
    }).done( (data) => {
        teamData = data;
        console.log(data);
    }).fail( () => {
        alert('AJAX call failed');
    })
})
let input
$('#citySearch').submit((e) => {
    e.preventDefault()
    
    input = $('#inputCity').val()
    console.log(input)
    createMyCity(input)
    $('#citySearch')[0].reset();
})
  function createMyCity(search) {
      console.log('team data', teamData)
      for (let i of teamData) {
          if (input.toLowerCase() == i.Team.toLowerCase()) {
              console.log('i', i.Team)
            let row = $(`<tr></tr>`)
            let teamname= $(`<td>${i.Team_preffered_name}</td>`)
            let division = $(`<td>${i.Team_Conference_Division}</td>`)
            let arrests = $(`<td>${i.arrest_count}</td>`)
            
            row.append(teamname, division, arrests)
            $("#tableBody").append(row)
            break
          }

      }
    }