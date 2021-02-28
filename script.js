// генерим карточки клубов
clubs.forEach(el => {
  if (el.show == true) {
    document.querySelector(".club_cards_section").insertAdjacentHTML('beforeend', `<div class="club-logo-card card text-center">
      <img src="images/${el.logo}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${el.name}</h5>
        <a onclick="ShowGames(this)" id="${el.name}" href="#club_cards" class="btn btn-outline-primary">Все выезда</a>
      </div>
			</div>
        `);
  }
});



function FormatDateDots(date) {
  let a = date[8] + date[9] + "." + date[5] + date[6] + "." + date[0] + date[1] + date[2] + date[3];
  return a
}

var elements = document.querySelectorAll(".calendar_day");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = selectFlightDay;
}

let departDelay = 1;
let arriveDelay = 1;

function selectFlightDay() {
    if (this.classList[0] === "calendar_day_1"){
      document.querySelector(".selected_departure_day").setAttribute("style", "left:0; border-radius: .25rem 0 0 .25rem;");
      departDelay = 3;
    }
    else if (this.classList[0] === "calendar_day_2"){
      document.querySelector(".selected_departure_day").setAttribute("style", "left:50px;");
      departDelay = 2;
    }
    else if (this.classList[0] === "calendar_day_3"){
      document.querySelector(".selected_departure_day").setAttribute("style", "left:100px;");
      departDelay = 1;
    }
    else if (this.classList[0] === "calendar_day_4_left"){
      document.querySelector('.selected_departure_day').setAttribute("style", "left:150px; width:40px; padding-right:9px; border-right:none;");
      departDelay = 0;
    }
    else if (this.classList[0] === "calendar_day_4_right"){
      document.querySelector('.selected_arrival_day').setAttribute("style", "left:190px; width:40px; padding-left:8px;");
      arriveDelay = 0;
    }
    else if (this.classList[0] === "calendar_day_5"){
      document.querySelector('.selected_arrival_day').setAttribute("style", "left:230px;");
      arriveDelay = 1;
    }
    else if (this.classList[0] === "calendar_day_6"){
      document.querySelector('.selected_arrival_day').setAttribute("style", "left:280px;");
      arriveDelay = 2;
    }
    else if (this.classList[0] === "calendar_day_7"){
      document.querySelector('.selected_arrival_day').setAttribute("style", "left:330px; border-right:none; border-radius: 0 .25rem .25rem 0;");
      arriveDelay = 3;
    }
}

// Выводим игры клуба
function ShowGames(my_team) {

  document.getElementById('games-table-container').style.display = "block";
  document.getElementById('games-table').innerHTML = '';
  for (var i = 0; i < games.length; i++) {
    if (games[i].team2 == my_team.id) {
      let h = new Date(games[i].date);
      let e = daysOfWeek[h.getDay()];
      let b = games[i].date;
      let c = b[8] + b[9] + "." + b[5] + b[6] + "." + b[0] + b[1] + b[2] + b[3];

      let example_price = Math.random() * 20000
      example_price = Math.round(example_price)
      example_price = (example_price).toLocaleString('ru')
      // прибавляем 1 день к дате
      let f = new Date(games[i].date);
      f.setDate(f.getDate());
      let f2 = f;
      f = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
      // отнимаем 1 день от даты
      let g = new Date(games[i].date);
      g.setDate(g.getDate());
      let g2 = g;
      g = g.getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate();

      let formatter = new Intl.DateTimeFormat("ru");
      // выводим кнопки покупки билета на матч
      function GetTicketLink(team) {
        for (var i = 0; i < clubs.length; i++) {
          if (team == clubs[i].name) {
            return clubs[i].ticket_shop;
            break
          }
        }
      }

      // проверяем есть ли онлайн-касса у клуба
      let ticket_button = "Нет кассы";
      if (GetTicketLink(games[i].team1) != undefined) {
        ticket_button = '<a href="' + GetTicketLink(games[i].team1) + '" target="_blank" class="btn btn-outline-primary"> Онлайн-касса<br>ФК ' + games[i].team1 + '</a>'
      };

      if (f2 >= new Date()) {
        document.querySelector(".games-table").insertAdjacentHTML('beforeend', `
            <tr>
            <th class="align-middle"><img height=50 src="images/${games[i].img}.png" class="" alt="" /></th>
            <td class="align-middle">${games[i].team1}</br>г. ${games[i].city}</br>${c} </br><b>${games[i].time}</b></td>

            <td class="align-middle text-center">

            <small style="color:green; display:none;">*при перелёте в день матча, убедитесь, что успеваете по времени</small>
            </td>
            <td class="align-middle text-center"><a style="margin-bottom:5px;" href="https://www.aviasales.ru/search?origin_iata=${games[i].iata2}&destination_iata=${games[i].iata1}&adults=1&children=0&infants=0&trip_class=0&depart_date=${g}&return_date=${f}&with_request=true&marker=311551.site" target="_blank" class="btn btn-primary">
            <i class="fas fa-plane"></i>&nbsp;&nbsp;  ${example_price} р.</a>
            </td>
            <td class="align-middle text-center">
            <a href="" target="_blank" class="btn btn-link">Booking.com</a><br>
            <a href="https://sutochno.ru/front/searchapp/search?guests_adults=1&occupied=${g}%3B${f}&id=397366&type=city&term=${games[i].city}" target="_blank" class="btn btn-link">Суточно.ру</a>
            </td>
            <td class="align-middle text-center">
            ${ticket_button}
            </td>
          </tr>
          `);
      };
    }
  }
}

// [].forEach.call(document.querySelectorAll('.calendar_day > div'), function(a){
//     a.onclick=function(){
//         document.div.style.backgroundColor=this.dataset.c;
//     }
// })



// <td class="align-middle">${c}</br>${games[i].time} <bt>${e}</bt></td>

// var mydata = JSON.parse(data);
// alert(mydata[0].name);
// alert(mydata[0].age);
// alert(mydata[1].name);
// alert(mydata[1].age);
//
//
// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//     if (rawFile.readyState === 4 && rawFile.status == "200") {
//       callback(rawFile.responseText);
//     }
//   }
//   rawFile.send(null);
// }
//
// //usage:
// readTextFile("data.json", function(text) {
//   var data = JSON.parse(data);
// });


// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-subway"></i> Автобус</a>
// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-bus"></i> Поезд</a>
