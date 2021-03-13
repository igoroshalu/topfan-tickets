// генерим карточки клубов
clubs.forEach(el => {
  if (el.show == true) {
    document.querySelector("#club_buttons_section").insertAdjacentHTML('beforeend', `
    <button type="button" onclick="getMyClubName(this)" id="${el.name}"
    class="btn btn-light br-100 button_clubs_mobile"><img src="images/${el.logo}" style="height: 25px;" alt=""> ${el.name}</button>
        `);
  }
});

function hidePlaceholderTable(){
  finger_club.style.display = "none";
}

function FormatDateDots(date) {
  let a = date[8] + date[9] + "." + date[5] + date[6] + "." + date[0] + date[1] + date[2] + date[3];
  return a
}

// работаем с JSON
// function load() {
//   const json = getData()
// }
// async function getData() {
//   let res = await fetch('http://api.travelpayouts.com/v2/prices/week-matrix?currency=rub&origin=LED&destination=ROV&show_to_affiliates=true&depart_date=2021-03-11&return_date=2021-03-18&token=7ce5cb7674bf98afc6f68c8eb4f47336')
//   res = await res.json()
//   return res.data
// }

function getCookie(name) {
	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
let myTeamName;
let myTeamImage;

let yyy = getCookie("club");
console.log(yyy);
myTeamName = yyy;
if(yyy == "Зенит") {
  yyy.click();
}

// Выводим игры клуба


function getMyClubName(my_team_div){
  clubs.forEach(el => {
    if (el.name == my_team_div.id) {
      myTeamName = el.name
      myTeamImage = el.logo
    }
  });
  ShowGames();
}

function ShowGames() {
  // попап обновления страницы
  setTimeout(function(){
     update_page_button.click();
     modal_update_page.show()
  }, 600000);



  document.cookie = "club=" + myTeamName ;


  hidePlaceholderTable();
  document.getElementById('games-table-container').style.display = "block";
  document.getElementById('games-table').innerHTML = '';
  document.getElementById('game-cards').innerHTML = '';
  // создаём массив дат вылета и прилёта
  var departArray = [];
  var ariveArray = [];
  for (let i = 0; i < games.length; i++) {
    departArray.push(2);
    ariveArray.push(4);
    if (new Date(games[i].date).getTime() + 15*60*60*1000 < new Date().getTime()) continue; //проверяем чтобы матч был не в прошлом
    if (games[i].team2 == myTeamName) {
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

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector("#game-cards").insertAdjacentHTML('beforeend', `
        <div class="col-md-3 bg-white game-card-mob pb-4" id="game_card_${[i]}">
          <div class="row pt-3">
            <div class="col-2">
              <img src="images/${games[i].img}.png" class="img-fluid" alt="" />
            </div>
            <div class="col-8 text-center">
              <p style="margin-bottom:0;"><small>${games[i].team1} &mdash; ${myTeamName}</br>
                  ${dottedMatchTime}
                  ${games[i].city}</br>${games[i].time}</small></p>
            </div>
            <div class="col-2">
              <img src="images/${myTeamImage}" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
            <div class="week-buttons" id="weekButtons${[i]}">
              <div class="calendar_day_1 calendar_day"><p><small>${getNeighborsDates(matchDate)[0]} ${getNeighborsDays(matchDate)[0]}</small></p></div>
              <div class="calendar_day_2 calendar_day"><p><small>${getNeighborsDates(matchDate)[1]} ${getNeighborsDays(matchDate)[1]}</small></p></div>
              <div class="calendar_day_3 calendar_day"><p><small>${getNeighborsDates(matchDate)[2]} ${getNeighborsDays(matchDate)[2]}</small></p></div>
              <div class="calendar_day_4 calendar_day week_buttons_match_day">
                <p><small>${getNeighborsDates(matchDate)[3]} ${getNeighborsDays(matchDate)[3]}</small></p>
                <div class="match_day_icon"><i class="fas fa-futbol"></i></div>
                <div class="calendar_day_4_left calendar_day"></div>
                <div class="calendar_day_4_right calendar_day"></div>
              </div>
              <div class="calendar_day_5 calendar_day"><p><small>${getNeighborsDates(matchDate)[4]} ${getNeighborsDays(matchDate)[4]}</small></p></div>
              <div class="calendar_day_6 calendar_day"><p><small>${getNeighborsDates(matchDate)[5]} ${getNeighborsDays(matchDate)[5]}</small></p></div>
              <div class="selected_departure_day"><i class="fas fa-plane-departure"></i></div>
              <div class="selected_arrival_day"><i class="fas fa-plane-arrival"></i></div>
              <div class="calendar_day_7 calendar_day"><p><small>${getNeighborsDates(matchDate)[6]} ${getNeighborsDays(matchDate)[6]}</small></p></div>
            </div>
              <div class="d-grid gap-2 pt-2 pb-2">
              <a href="https://www.aviasales.ru/search?origin_iata=`
              + games[i].iata2 + `&destination_iata=` + games[i].iata1 + `&adults=1&children=0&infants=0&trip_class=0&depart_date=`
              + getNeighborsDateLink(matchDate)[2] + `&return_date=` + getNeighborsDateLink(matchDate)[4]
              + `&with_request=true&marker=311551.site" style="margin-bottom:5px;" target="_blank" class="aviasalesLink btn btn-primary">
              <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2206 6.5625L7.0625 1.5625H5.8125L7.39125 6.5625L4.04125 6.5625L3 4.6875H2.0625L2.6875 7.5L2.0625 10.3125H3L4.04187 8.4375H7.39187L5.8125 13.4375H7.0625L10.2206 8.4375H13.625C13.8736 8.4375 14.1121 8.33873 14.2879 8.16291C14.4637 7.9871 14.5625 7.74864 14.5625 7.5C14.5625 7.25136 14.4637 7.0129 14.2879 6.83709C14.1121 6.66127 13.8736 6.5625 13.625 6.5625H10.2206Z" fill="white"/>
              <path d="M5.77938 21.5625L8.9375 16.5625H10.1875L8.60875 21.5625H11.9588L13 19.6875H13.9375L13.3125 22.5L13.9375 25.3125H13L11.9581 23.4375H8.60813L10.1875 28.4375H8.9375L5.77938 23.4375H2.375C2.12636 23.4375 1.8879 23.3387 1.71209 23.1629C1.53627 22.9871 1.4375 22.7486 1.4375 22.5C1.4375 22.2514 1.53627 22.0129 1.71209 21.8371C1.8879 21.6613 2.12636 21.5625 2.375 21.5625H5.77938Z" fill="white"/>
              </svg>&nbsp;&nbsp;  <span class="ticketPrice">${getExamplePrice()}</span> ₽</a>
              </div>
            </div>
          </div>
        </div>
          `);
      } else {
        document.querySelector(".games-table").insertAdjacentHTML('beforeend', `
            <tr id="tableRowId${[i]}">
            <th class="align-middle"><img height=50 src="images/${games[i].img}.png" class="" alt="" /></th>
            <td class="align-middle">${games[i].team1}</br><b>${games[i].city}</b></br>${dottedMatchTime} </br>${games[i].time}</td>
            <td class="align-middle text-center">
            <div class="week-buttons" id="weekButtons${[i]}">
              <div class="calendar_day_1 calendar_day"><p>${getNeighborsDates(matchDate)[0]} <small>${getNeighborsDays(matchDate)[0]}</small></p></div>
              <div class="calendar_day_2 calendar_day"><p>${getNeighborsDates(matchDate)[1]} <small>${getNeighborsDays(matchDate)[1]}</small></p></div>
              <div class="calendar_day_3 calendar_day"><p>${getNeighborsDates(matchDate)[2]} <small>${getNeighborsDays(matchDate)[2]}</small></p></div>
              <div class="calendar_day_4 calendar_day week_buttons_match_day">
                <p>${getNeighborsDates(matchDate)[3]} <small>${getNeighborsDays(matchDate)[3]}</small></p>
                <div class="match_day_icon"><i class="fas fa-futbol"></i></div>
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
            <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2206 6.5625L7.0625 1.5625H5.8125L7.39125 6.5625L4.04125 6.5625L3 4.6875H2.0625L2.6875 7.5L2.0625 10.3125H3L4.04187 8.4375H7.39187L5.8125 13.4375H7.0625L10.2206 8.4375H13.625C13.8736 8.4375 14.1121 8.33873 14.2879 8.16291C14.4637 7.9871 14.5625 7.74864 14.5625 7.5C14.5625 7.25136 14.4637 7.0129 14.2879 6.83709C14.1121 6.66127 13.8736 6.5625 13.625 6.5625H10.2206Z" fill="white"/>
            <path d="M5.77938 21.5625L8.9375 16.5625H10.1875L8.60875 21.5625H11.9588L13 19.6875H13.9375L13.3125 22.5L13.9375 25.3125H13L11.9581 23.4375H8.60813L10.1875 28.4375H8.9375L5.77938 23.4375H2.375C2.12636 23.4375 1.8879 23.3387 1.71209 23.1629C1.53627 22.9871 1.4375 22.7486 1.4375 22.5C1.4375 22.2514 1.53627 22.0129 1.71209 21.8371C1.8879 21.6613 2.12636 21.5625 2.375 21.5625H5.77938Z" fill="white"/>
            </svg>&nbsp;&nbsp;  <span class="ticketPrice">${getExamplePrice()}</span> ₽</a>
            </td>
            <td class="align-middle text-center">
            <a href="" target="_blank" class="btn btn-link">Booking.com</a><br>
            <a href="https://sutochno.ru/front/searchapp/search?guests_adults=1&occupied=${"111"}%3B${matchDateForAviasalesLink}&id=397366&type=city&term=${games[i].city}" target="_blank" class="btn btn-link">Суточно.ру</a>
            </td>
            <td class="align-middle text-center">
            ${ticket_button}
            </td>
          </tr>
          `);
          }
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
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:0;");
          departArray[i] = 0;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_2") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:12.5%;");
          departArray[i] = 1;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_3") {
          document.getElementById(weekButtonsBlockId).querySelector(".selected_departure_day").setAttribute("style", "left:25%;");
          departArray[i] = 2;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_4_left") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_departure_day').setAttribute("style", "left:37.5%; width:12.5%; padding-right:9px; border-right:none;");
          departArray[i] = 3;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_4_right") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:50%; width:12.5%; padding-left:8px;");
          ariveArray[i] = 3;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_5") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:62.5%;");
          ariveArray[i] = 4;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_6") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:75%;");
          ariveArray[i] = 5;
          changeAviasalesLink()
        } else if (this.classList[0] === "calendar_day_7") {
          document.getElementById(weekButtonsBlockId).querySelector('.selected_arrival_day').setAttribute("style", "left:87.5%; border-right:none;");
          ariveArray[i] = 6;
          changeAviasalesLink()
        }
      }

      function changeAviasalesLink() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
          document.getElementById("game_card_"+i).querySelector('.aviasalesLink').href = `https://www.aviasales.ru/search?origin_iata=`
          + games[i].iata2 + `&destination_iata=` + games[i].iata1 + `&adults=1&children=0&infants=0&trip_class=0&depart_date=`
          + getNeighborsDateLink(matchDate)[departArray[i]] + `&return_date=` + getNeighborsDateLink(matchDate)[ariveArray[i]]
          + `&with_request=true&marker=311551.site"`;
          document.getElementById("game_card_"+i).querySelector('.ticketPrice').innerHTML = getExamplePrice()
        }
        else {
          document.getElementById("tableRowId"+i).querySelector('.aviasalesLink').href = `https://www.aviasales.ru/search?origin_iata=`
          + games[i].iata2 + `&destination_iata=` + games[i].iata1 + `&adults=1&children=0&infants=0&trip_class=0&depart_date=`
          + getNeighborsDateLink(matchDate)[departArray[i]] + `&return_date=` + getNeighborsDateLink(matchDate)[ariveArray[i]]
          + `&with_request=true&marker=311551.site"`;
          document.getElementById("tableRowId"+i).querySelector('.ticketPrice').innerHTML = getExamplePrice();
        }
      }
    }
  }
}

// function findBestPrice(date1,date2) {
// forEach((item, i) => {
//   if ()
// });
// }
