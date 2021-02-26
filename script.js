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

let departureDelay = 1;
let arrivalDelay = 1;
function StepanFunction() {
    document.getElementById("s").setAttribute("style", "left:0; border-radius: .25rem 0 0 .25rem;");
    let departureDelay = 3;
    g = g.getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate();
    console.log(this);
}
function StepanFunction1() {
    document.getElementById('s').setAttribute("style", "left:60px;");
    let departureDelay = 2;
}
function StepanFunction2() {
    document.getElementById('s').setAttribute("style", "left:120px;");
    let departureDelay = 1;
}
function StepanFunction3() {
    document.getElementById('s').setAttribute("style", "left:180px;");
    s.style.borderRight = "none"
    let departureDelay = 0;
}
function StepanFunction4() {
    document.getElementById('s2').setAttribute("style", "left:240px;");
    let arrivalDelay = 0;
}
function StepanFunction5() {
    document.getElementById('s2').setAttribute("style", "left:300px;");
    let arrivalDelay = 1;
}
function StepanFunction6() {
    document.getElementById('s2').setAttribute("style", "left:360px;");
    let arrivalDelay = 2;
}
function StepanFunction7() {
    document.getElementById('s2').setAttribute("style", "left:420px; border-radius: 0 .25rem .25rem 0;");
    let arrivalDelay = 3;
}
calendar_day_1.onclick = StepanFunction;
calendar_day_2.onclick = StepanFunction1;
calendar_day_3.onclick = StepanFunction2;
match_day_left.onclick = StepanFunction3;
match_day_right.onclick = StepanFunction4;
calendar_day_5.onclick = StepanFunction5;
calendar_day_6.onclick = StepanFunction6;
calendar_day_7.onclick = StepanFunction7;

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
      f.setDate(f.getDate() + arrivalDelay);
      let f2 = f;
      f = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
      // отнимаем 1 день от даты
      let g = new Date(games[i].date);
      g.setDate(g.getDate() - departureDelay);
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
            <div class="week-buttons">
              <div id="calendar_day_1" class="calendar_day"><p><i class="fas fa-d"></i><p>${g2.getDate()-2} <small>Ср</small></p></div>
              <div id="calendar_day_2" class="calendar_day"><p><i class="fas fa-d"></i></p><p>${g2.getDate()-1} <small>Чт</small></p></div>
              <div id="calendar_day_3" class="calendar_day active_calendar_day"><p><i class="fas fa-plane-departure"></i></p><p>${g2.getDate()} <small> Пт</small></p></div>
              <div id="calendar_day_4" class="calendar_day week_buttons_match_day 111active_calendar_day"><p><i class="fas 111fa-plane-departure"></i>&nbsp; <i id="ball" class="fas fa-futbol"> &nbsp;</i><i class="fas 111fa-plane-arrival"></i></p>
              <p>${g2.getDate()+1} <small>Сб</small></p></div>
              <div id="calendar_day_2" class="calendar_day active_calendar_day"><p><i class="fas fa-plane-arrival"></i></p><p>${g2.getDate()+2} <small>Чт</small></p></div>
              <div id="calendar_day_3" class="calendar_day"><p><i class="fas fa-d"></i><p>${g2.getDate()+3} <small> Пт</small></p></div>
              <div id="calendar_day_4" class="calendar_day"><p><i class="fas fa-d"></i><p>${g2.getDate()+4} <small>Сб</small></p></div>
            </div>
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
//
//
//
// function changeColor(colorValue) {
//     document.body.style.background =  document.getElementById(colorValue).dataset.color;
// }

// document.addEventListener('click', function(e) {
//   if (e.target.idName === 'stepan') {
//     var el = document.querySelector('.active_calendar_day')
//     el && el.classList.remove('active_calendar_day')
//     e.target.classList.add('active_calendar_day')
//   }
// })

// document.addEventListener('click', function(e) {
//   if (e.target.idName === 'calendar_day_1') {
//     var el = document.querySelector('.active_calendar_day')
//     el && el.classList.remove('active_calendar_day')
//     e.target.classList.add('active_calendar_day')
//   }
// })








// <td class="align-middle">${c}</br>${games[i].time} <bt>${e}</bt></td>


// var mydata = JSON.parse(data);
// alert(mydata[0].name);
// alert(mydata[0].age);
// alert(mydata[1].name);
// alert(mydata[1].age);
//
// console.log(mydata[0].name)
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
//   console.log(data);
// });


// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-subway"></i> Автобус</a>
// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-bus"></i> Поезд</a>
