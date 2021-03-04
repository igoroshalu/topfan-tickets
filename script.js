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
function hidePlaceholderTable(){
  placeholder_table.style.display = "none";
  games_table_section.style.display = "block";
}

function FormatDateDots(date) {
  let a = date[8] + date[9] + "." + date[5] + date[6] + "." + date[0] + date[1] + date[2] + date[3];
  return a
}

// работаем с JSON
function load() {
  const json = getData()
}
async function getData() {
  let res = await fetch('http://api.travelpayouts.com/v2/prices/week-matrix?currency=rub&origin=LED&destination=ROV&show_to_affiliates=true&depart_date=2021-03-11&return_date=2021-03-18&token=7ce5cb7674bf98afc6f68c8eb4f47336')
  res = await res.json()
  return res.data
}



// Выводим игры клуба
function ShowGames(my_team) {
  hidePlaceholderTable();
  document.getElementById('games-table-container').style.display = "block";
  document.getElementById('games-table').innerHTML = '';
  // создаём массив дат вылета и прилёта
  var departArray = [];
  var ariveArray = [];
  for (let i = 0; i < games.length; i++) {
    departArray.push(2);
    ariveArray.push(4);
    if (games[i].team2 == my_team.id) {
      let dottedMatchTime = games[i].date[8] + games[i].date[9] + "." + games[i].date[5] + games[i].date[6] + "." + games[i].date[0] + games[i].date[1] + games[i].date[2] + games[i].date[3];
      // генерим рандомную цену
      function getExamplePrice() {
      g = Math.random() * 20000;
      g = Math.round(g);
      g = (g).toLocaleString('ru');
      return g
    }

    function addZero(number) {
      if (number < 10) {
        number = "0" + number
        return number
      }
      return number
    }


      // прибавляем 1 день к дате
      let matchDate = new Date(games[i].date);
      matchDate.setDate(matchDate.getDate());
      matchDateForAviasalesLink = matchDate.getFullYear() + "-" + addZero((matchDate.getMonth() + 1)) + "-" + addZero(matchDate.getDate());
      //считаем соседние дни с матчем
      function getNeighborsDates(date) {
        let dates = []
        for (let w = -3; w <= 3; w++) {
          dates[w + 3] = new Date(+date + w * 24 * 60 * 60 * 1000).getDate()
        }
        return dates
      }

      function getNeighborsDays(date) {
        let days = []
        let weekDays = ['вc', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        for (let w = -3; w <= 3; w++) {
          days[w + 3] = weekDays[new Date(+date + w * 24 * 60 * 60 * 1000).getDay()]
        }
        return days
      }

      function getNeighborsDateLink(date) {
        let dates = []
        for (let w = -3; w <= 3; w++) {
          // dates[w+3] = new Date(+date + w * 24 * 60 * 60 * 1000).getDate();
          dates[w + 3] = "" + date.getFullYear() + "-" + addZero((date.getMonth() + 1)) + "-" + addZero((new Date(+date + w * 24 * 60 * 60 * 1000).getDate()))
        }
        return dates
      }

      // выводим кнопки покупки билета на матч
      function GetTicketLink(team) {
        for (let i = 0; i < clubs.length; i++) {
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
        ticket_button = '<a href="https://www.google.com/search?q=Купить билеты на матч ' + games[i].team1 + ' ' + games[i].team2 + ' ' + dottedMatchTime + '" target="_blank" class="btn btn-outline-secondary">Искать в Google</a>'
      }


        document.querySelector(".games-table").insertAdjacentHTML('beforeend', `
            <tr id="tableRowId${[i]}">
            <th class="align-middle"><img height=50 src="images/${games[i].img}.png" class="" alt="" /></th>
            <td class="align-middle">${games[i].team1}</br><b>${games[i].city}</b></br>${dottedMatchTime} </br>${games[i].time}</td>
            <td class="align-middle text-center">
            <div class="week-buttons" id="weekButtons${[i]}">
              <div class="calendar_day_1 calendar_day"><p>${getNeighborsDates(matchDate)[0]} <small>${getNeighborsDays(matchDate)[0]}</small></p></div>
              <div class="calendar_day_2 calendar_day"><p>${getNeighborsDates(matchDate)[1]} <small>${getNeighborsDays(matchDate)[1]}</small></p></div>
              <div class="calendar_day_3 calendar_day"><p>${getNeighborsDates(matchDate)[2]} <small>${getNeighborsDays(matchDate)[2]}</small></p></div>
              <div class="calendar_day_4 calendar_day week_buttons_match_day"><p>${getNeighborsDates(matchDate)[3]} <small>${getNeighborsDays(matchDate)[3]}</small></p>
                <div class="match_day_icon"><i class="fas fa-futbol"></i>&nbsp;&nbsp;&nbsp;</div>
                <div class="calendar_day_4_left calendar_day"></div>
                <div class="calendar_day_4_right calendar_day"></div>
              </div>
              <div class="calendar_day_5 calendar_day"><p>${getNeighborsDates(matchDate)[4]} <small>${getNeighborsDays(matchDate)[4]}</small></p></div>
              <div class="calendar_day_6 calendar_day"><p>${getNeighborsDates(matchDate)[5]} <small>${getNeighborsDays(matchDate)[5]}</small></p></div>
              <div class="selected_departure_day"><i class="fas fa-plane-departure"></i></div>
              <div class="selected_arrival_day"><i class="fas fa-plane-arrival"></i></div>
              <div class="calendar_day_7 calendar_day"><p>${getNeighborsDates(matchDate)[6]} <small>${getNeighborsDays(matchDate)[6]}</small></p></div>
            </div>
            <small style="color:green; display:none;">*при перелёте в день матча, убедитесь, что успеваете по времени</small>
            </td>
            <td class="align-middle text-center"><a href="https://www.aviasales.ru/search?origin_iata=`
            + games[i].iata2 + `&destination_iata=` + games[i].iata1 + `&adults=1&children=0&infants=0&trip_class=0&depart_date=`
            + getNeighborsDateLink(matchDate)[2] + `&return_date=` + getNeighborsDateLink(matchDate)[4]
            + `&with_request=true&marker=311551.site" style="margin-bottom:5px;" target="_blank" class="aviasalesLink btn btn-primary">
            <i class="fas fa-plane"></i>&nbsp;&nbsp;  <span class="ticketPrice">${getExamplePrice()}</span> р.</a>
            </td>
            <td class="align-middle text-center">
            <a href="" target="_blank" class="btn btn-link">Booking.com</a><br>
            <a href="https://sutochno.ru/front/searchapp/search?guests_adults=1&occupied=${"300"}%3B${matchDateForAviasalesLink}&id=397366&type=city&term=${games[i].city}" target="_blank" class="btn btn-link">Суточно.ру</a>
            </td>
            <td class="align-middle text-center">
            ${ticket_button}
            </td>
          </tr>
          `);
          if (matchDate <= new Date()) {
            // document.querySelector(".games-table").style.display = "none";
          };
      // задаём id каждому блоку выбора дат
      let weekButtonsBlockId = "weekButtons" + i
      // навешиваем onclick на кнопки выбора дат
      let elements = document.getElementById(weekButtonsBlockId).querySelectorAll(".calendar_day");
      for (let p = 0; p < elements.length; p++) {
        elements[p].onclick = selectFlightDay;
      }

      function selectFlightDay() {
        if (this.classList[0] === "calendar_day_1") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:0; border-radius: .25rem 0 0 .25rem;");
          departArray[i] = 0;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_2") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:50px;");
          departArray[i] = 1;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_3") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:100px;");
          departArray[i] = 2;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_4_left") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_departure_day').setAttribute("style", "left:150px; width:40px; padding-right:9px; border-right:none;");
          departArray[i] = 3;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_4_right") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:190px; width:40px; padding-left:8px;");
          ariveArray[i] = 3;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_5") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:230px;");
          ariveArray[i] = 4;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_6") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:280px;");
          ariveArray[i] = 5;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_7") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:330px; border-right:none; border-radius: 0 .25rem .25rem 0;");
          ariveArray[i] = 6;
          changeAviasalesLink()
        }
      }

      function changeAviasalesLink() {
        document.getElementById("tableRowId"+i).querySelector('.aviasalesLink').href = `https://www.aviasales.ru/search?origin_iata=`
        + games[i].iata2 + `&destination_iata=` + games[i].iata1 + `&adults=1&children=0&infants=0&trip_class=0&depart_date=`
        + getNeighborsDateLink(matchDate)[departArray[i]] + `&return_date=` + getNeighborsDateLink(matchDate)[ariveArray[i]]
        + `&with_request=true&marker=311551.site"`;
        document.getElementById("tableRowId"+i).querySelector('.ticketPrice').innerHTML = getExamplePrice()
      }
    }
  }
}

// function findBestPrice(date1,date2) {
// forEach((item, i) => {
//   if ()
// });
// }
