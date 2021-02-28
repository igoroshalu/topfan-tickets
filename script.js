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

      // генерим рандомную цену
      let example_price = Math.random() * 20000
      example_price = Math.round(example_price)
      example_price = (example_price).toLocaleString('ru')

      // прибавляем 1 день к дате
      let matchDate = new Date(games[i].date);
      matchDate.setDate(matchDate.getDate());
      matchDateForAviasalesLink = matchDate.getFullYear() + "-" + (matchDate.getMonth() + 1) + "-" + matchDate.getDate();

      function getNeighbourDays(date) {
        let date1 = new Date(date - 3 * 24 * 60 * 60 * 1000).getDate();
        let date2 = new Date(date - 2 * 24 * 60 * 60 * 1000).getDate();
        let date3 = new Date(date - 1 * 24 * 60 * 60 * 1000).getDate();
        let date4 = new Date(date).getDate();
        let date5 = new Date(date - -1 * 24 * 60 * 60 * 1000).getDate();
        let date6 = new Date(date - -2 * 24 * 60 * 60 * 1000).getDate();
        let date7 = new Date(date - -3 * 24 * 60 * 60 * 1000).getDate();
        let day1 = new Date(date - 3 * 24 * 60 * 60 * 1000).getDay();
        let day2 = new Date(date - 2 * 24 * 60 * 60 * 1000).getDay();
        let day3 = new Date(date - 1 * 24 * 60 * 60 * 1000).getDay();
        let day4 = new Date(date).getDay();
        let day5 = new Date(date - -1 * 24 * 60 * 60 * 1000).getDay();
        let day6 = new Date(date - -2 * 24 * 60 * 60 * 1000).getDay();
        let day7 = new Date(date - -3 * 24 * 60 * 60 * 1000).getDay();
        let days = ['вc', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        return [date1, date2, date3, date4, date5, date6, date7,
          days[day1], days[day2], days[day3], days[day4], days[day5], days[day6], days[day7]]
      }

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
      let ticket_button;
      if (GetTicketLink(games[i].team1) != undefined) {
        ticket_button = '<a href="' + GetTicketLink(games[i].team1) + '" target="_blank" class="btn btn-outline-primary">ФК ' + games[i].team1 + '<br>онлайн-касса</a>'
      } else {
        ticket_button = "Нет кассы"
      }

      if (matchDate >= new Date()) {
        document.querySelector(".games-table").insertAdjacentHTML('beforeend', `
            <tr>
            <th class="align-middle"><img height=50 src="images/${games[i].img}.png" class="" alt="" /></th>
            <td class="align-middle">${games[i].team1}</br><b>${games[i].city}</b></br>${c} </br>${games[i].time}</td>
            <td class="align-middle text-center">
            <div class="week-buttons" id="week-buttons-${[i]}">
              <div class="calendar_day_1 calendar_day"><p>${getNeighbourDays(matchDate)[0]} <small>${getNeighbourDays(matchDate)[7]}</small></p></div>
              <div class="calendar_day_2 calendar_day"><p>${getNeighbourDays(matchDate)[1]} <small>${getNeighbourDays(matchDate)[8]}</small></p></div>
              <div class="calendar_day_3 calendar_day"><p>${getNeighbourDays(matchDate)[2]} <small>${getNeighbourDays(matchDate)[9]}</small></p></div>
              <div class="calendar_day_4 calendar_day week_buttons_match_day"><p>${getNeighbourDays(matchDate)[3]} <small>${getNeighbourDays(matchDate)[10]}</small></p>
                <div class="match_day_icon"><i class="fas fa-futbol"></i>&nbsp;&nbsp;&nbsp;</div>
                <div class="calendar_day_4_left calendar_day"></div>
                <div class="calendar_day_4_right calendar_day"></div>
              </div>
              <div class="calendar_day_5 calendar_day"><p>${getNeighbourDays(matchDate)[4]} <small>${getNeighbourDays(matchDate)[11]}</small></p></div>
              <div class="calendar_day_6 calendar_day"><p>${getNeighbourDays(matchDate)[5]} <small>${getNeighbourDays(matchDate)[12]}</small></p></div>
              <div class="selected_departure_day"><i class="fas fa-plane-departure"></i></div>
              <div class="selected_arrival_day"><i class="fas fa-plane-arrival"></i></div>
              <div class="calendar_day_7 calendar_day"><p>${getNeighbourDays(matchDate)[6]} <small>${getNeighbourDays(matchDate)[13]}</small></p></div>
            </div>
            <small style="color:green; display:none;">*при перелёте в день матча, убедитесь, что успеваете по времени</small>
            </td>
            <td class="align-middle text-center"><a style="margin-bottom:5px;" href="https://www.aviasales.ru/search?origin_iata=${games[i].iata2}&destination_iata=${games[i].iata1}&adults=1&children=0&infants=0&trip_class=0&depart_date=${matchDateForAviasalesLink}&return_date=${matchDateForAviasalesLink}&with_request=true&marker=311551.site" target="_blank" class="btn btn-primary">
            <i class="fas fa-plane"></i>&nbsp;&nbsp;  ${example_price} р.</a>
            </td>
            <td class="align-middle text-center">
            <a href="" target="_blank" class="btn btn-link">Booking.com</a><br>
            <a href="https://sutochno.ru/front/searchapp/search?guests_adults=1&occupied=${g}%3B${matchDateForAviasalesLink}&id=397366&type=city&term=${games[i].city}" target="_blank" class="btn btn-link">Суточно.ру</a>
            </td>
            <td class="align-middle text-center">
            ${ticket_button}
            </td>
          </tr>
          `);
      };
      let weekButtonsBlockId = "week-buttons-" + i

      var elements = document.getElementById(weekButtonsBlockId).querySelectorAll(".calendar_day");
      for (var p = 0; p < elements.length; p++) {
        elements[p].onclick = selectFlightDay;
      }

      function selectFlightDay() {

        if (this.classList[0] === "calendar_day_1") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:0; border-radius: .25rem 0 0 .25rem;");
        } else if (this.classList[0] === "calendar_day_2") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:50px;");
        } else if (this.classList[0] === "calendar_day_3") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:100px;");
        } else if (this.classList[0] === "calendar_day_4_left") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_departure_day').setAttribute("style", "left:150px; width:40px; padding-right:9px; border-right:none;");
        } else if (this.classList[0] === "calendar_day_4_right") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:190px; width:40px; padding-left:8px;");
        } else if (this.classList[0] === "calendar_day_5") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:230px;");
        } else if (this.classList[0] === "calendar_day_6") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:280px;");
        } else if (this.classList[0] === "calendar_day_7") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:330px; border-right:none; border-radius: 0 .25rem .25rem 0;");
        }
      }
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
