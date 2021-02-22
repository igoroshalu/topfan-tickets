let clubs = [
  {
    id: 1,
    name: "Ростов",
    logo: "rostov.png",
    ticket_shop: "https://tickets.fc-rostov.ru/",
    show: 1,
  },
  {
    id: 2,
    name: "ЦСКА",
    logo: "cska.png",
    ticket_shop: "https://events.pfc-cska.com/calendar",
    show: 1,
  },
  {
    id: 3,
    name: "Зенит",
    logo: "zenit.png",
    ticket_shop: "https://tickets.fc-zenit.ru/football/tickets/",
    show: 1,
  },
  {
    id: 4,
    name: "Спартак",
    logo: "spartak.png",
    ticket_shop: "https://tickets.spartak.com/",
    show: 1,

  },
  {
    id: 5,
    name: "Динамо",
    logo: "dynamo.png",
    ticket_shop: "https://fcdynamo.ru/shop/tickets/",
    show: 1,
  },
  {
    id: 6,
    name: "Локомотив",
    logo: "lokomotiv.png",
    ticket_shop: "https://tickets.fclm.ru/ru/",
    show: 1,
  },
  {
    id: 7,
    name: "Краснодар",
    logo: "krasnodar.png",
    ticket_shop: "https://www.fckrasnodar.ru/stadium/tickets",
    show: 1,
  },
  {
    id: 8,
    name: "Сборная",
    logo: "disabled.png",
    ticket_shop: "",
    show: 1,
  },
  {
    id: 9,
    name: "Химки",
    logo: "khimki.png",
    ticket_shop: "https://tickets.fckhimki.com/",
  },
  {
    id: 10,
    name: "Ротор",
    logo: "rotor.png",
    ticket_shop: "https://vlg.kassir.ru/bilety-na-sportivnye-meropriyatiya",
  },
  {
    id: 11,
    name: "Урал",
    logo: "ural.png",
    ticket_shop: "http://ticket.fc-ural.ru/",
  },
  {
    id: 12,
    name: "Сочи",
    logo: "sochi.png",
    ticket_shop: "https://tickets.pfcsochi.ru/",
  }, {
    id: 13,
    name: "Уфа",
    logo: "ufa.png",
    ticket_shop: "https://tickets.fcufa.pro/",
  }, {
    id: 14,
    name: "Ахмат",
    logo: "akhmat.png",
    ticket_shop: "https://www.ticketland.ru/persons/fk-terek/",
  }, {
    id: 15,
    name: "Тамбов",
    logo: "tambov.png",
    ticket_shop: "http://fc-tambov.ru/modules/content/page.php?id=4125",
  }, {
    id: 16,
    name: "Рубин",
    logo: "rubin.png",
    ticket_shop: "https://tickets.rubin-kazan.ru/",
  }, {
    id: 17,
    name: "Арсенал",
    logo: "arsenal.png",
    ticket_shop: "https://arsenaltula.ru/tickets/bilety_onlain/",
  },
];
let games = [
  {
    "round": "Round 20",
    "city": "Санкт-Петербург",
    "date": "2021-02-27",
    "time": "16:30",
    "team1": "Зенит",
    "team2": "Ростов",
    "iata1": "LED",
    "iata2": "ROV",
    "img": "zenit",
  },
  {
    "round": "Round 20",
    "city": "Грозный",
    "date": "2021-02-28",
    "time": "16:30",
    "team1": "Ахмат",
    "team2": "Динамо",
    "iata1": "GRV",
    "iata2": "MOW",
    "img": "akhmat",
  },
  {
    "round": "Round 21",
    "city": "Тула",
    "date": "2021-03-08",
    "time": "14:00",
    "team1": "Арсенал",
    "team2": "Локомотив",
    "iata1": "",
    "iata2": "MOW",
    "img": "arsenal",
  },
  {
    "round": "Round 21",
    "city": "Казань",
    "date": "2021-03-06",
    "time": "",
    "team1": "Рубин",
    "team2": "Зенит",
    "iata1": "KZN",
    "iata2": "LED",
    "img": "rubin",
  },
  {
    "round": "Round 21",
    "city": "Москва",
    "date": "2021-03-06",
    "time": "",
    "team1": "Спартак",
    "team2": "Краснодар",
    "iata1": "MOW",
    "iata2": "KRR",
    "img": "spartak",
  },
  {
    "round": "Round 22",
    "city": "Тула",
    "date": "2021-03-13",
    "time": "",
    "team1": "Арсенал",
    "team2": "ЦСКА",
    "iata1": "",
    "iata2": "MOW",
    "img": "arsenal",
  },
  {
    "round": "Round 22",
    "city": "Саранск",
    "date": "2021-03-13",
    "time": "",
    "team1": "Тамбов",
    "team2": "Краснодар",
    "iata1": "SKX",
    "iata2": "KRR",
    "img": "tambov",
  },
  {
    "round": "Round 22",
    "city": "Москва",
    "date": "2021-03-12",
    "time": "19:00",
    "team1": "Химки",
    "team2": "Ростов",
    "iata1": "MOW",
    "iata2": "ROV",
    "img": "khimki",
  },
  {
    "round": "Round 23",
    "city": "Краснодар",
    "date": "2021-03-20",
    "time": "",
    "team1": "Краснодар",
    "team2": "Динамо",
    "iata1": "KRR",
    "iata2": "MOW",
    "img": "krasnodar",
  },
  {
    "round": "Round 23",
    "city": "Уфа",
    "date": "2021-03-20",
    "time": "",
    "team1": "Уфа",
    "team2": "Локомотив",
    "iata1": "UFA",
    "iata2": "MOW",
    "img": "ufa",
  },
  {
    "round": "Round 23",
    "city": "Волгоград",
    "date": "2021-03-17",
    "time": "18:00",
    "team1": "Ротор",
    "team2": "Ростов",
    "iata1": "VOG",
    "iata2": "ROV",
    "img": "rotor",
  },
  {
    "round": "Round 23",
    "city": "Москва",
    "date": "2021-03-20",
    "time": "",
    "team1": "ЦСКА",
    "team2": "Зенит",
    "iata1": "MOW",
    "iata2": "LED",
    "img": "cska",
  },
  {
    "round": "Round 24",
    "city": "Ростов на Дону",
    "date": "2021-04-03",
    "time": "",
    "team1": "Ростов",
    "team2": "Спартак",
    "iata1": "ROV",
    "iata2": "MOW",
    "img": "rostov",

  },
  {
    "round": "Round 24",
    "city": "Саранск",
    "date": "2021-04-03",
    "time": "",
    "team1": "Тамбов",
    "team2": "ЦСКА",
    "iata1": "SKX",
    "iata2": "MOW",
    "img": "tambov",
  },
  {
    "round": "Round 24",
    "city": "Волгоград",
    "date": "2021-04-03",
    "time": "",
    "team1": "Ротор",
    "team2": "Локомотив",
    "iata1": "VOG",
    "iata2": "MOW",
    "img": "rotor",
  },
  {
    "round": "Round 25",
    "city": "Тула",
    "date": "2021-04-10",
    "time": "",
    "team1": "Арсенал",
    "team2": "Краснодар",
    "iata1": "",
    "iata2": "KRR",
    "img": "arsenal",
  },
  {
    "round": "Round 25",
    "city": "Сочи",
    "date": "2021-04-10",
    "time": "",
    "team1": "Сочи",
    "team2": "Зенит",
    "iata1": "AER",
    "iata2": "LED",
    "img": "sochi",
  },
  {
    "round": "Round 26",
    "city": "Краснодар",
    "date": "2021-04-17",
    "time": "",
    "team1": "Краснодар",
    "team2": "Зенит",
    "iata1": "KRR",
    "iata2": "LED",
    "img": "krasnodar",
  },
  {
    "round": "Round 26",
    "city": "Москва",
    "date": "2021-04-17",
    "time": "18:01",
    "team1": "Локомотив",
    "team2": "Ростов",
    "iata1": "MOW",
    "iata2": "ROV",
    "img": "lokomotiv",
  },
  {
    "round": "Round 26",
    "city": "Волгоград",
    "date": "2021-04-17",
    "time": "",
    "team1": "Ротор",
    "team2": "Динамо",
    "iata1": "VOG",
    "iata2": "MOW",
    "img": "rotor",
  },
  {
    "round": "Round 26",
    "city": "Сочи",
    "date": "2021-04-17",
    "time": "",
    "team1": "Сочи",
    "team2": "ЦСКА",
    "iata1": "AER",
    "iata2": "MOW",
    "img": "sochi",
  },
  {
    "round": "Round 27",
    "city": "Саранск",
    "date": "2021-04-24",
    "time": "",
    "team1": "Тамбов",
    "team2": "Локомотив",
    "iata1": "SKX",
    "iata2": "MOW",
    "img": "tambov",
  },
  {
    "round": "Round 27",
    "city": "Казань",
    "date": "2021-04-24",
    "time": "",
    "team1": "Рубин",
    "team2": "Краснодар",
    "iata1": "KZN",
    "iata2": "KRR",
    "img": "rubin",
  },
  {
    "round": "Round 28",
    "city": "Тула",
    "date": "2021-05-01",
    "time": "",
    "team1": "Арсенал",
    "team2": "Спартак",
    "iata1": "",
    "iata2": "MOW",
    "img": "arsenal",
  },
  {
    "round": "Round 28",
    "city": "Казань",
    "date": "2021-05-01",
    "time": "",
    "team1": "Рубин",
    "team2": "Динамо",
    "iata1": "KZN",
    "iata2": "MOW",
    "img": "rubin",
  },
  {
    "round": "Round 28",
    "city": "Санкт-Петербург",
    "date": "2021-05-01",
    "time": "",
    "team1": "Зенит",
    "team2": "Локомотив",
    "iata1": "LED",
    "iata2": "MOW",
    "img": "zenit",
  },
  {
    "round": "Round 29",
    "city": "Уфа",
    "date": "2021-05-08",
    "time": "",
    "team1": "Уфа",
    "team2": "Зенит",
    "iata1": "UFA",
    "iata2": "LED",
    "img": "ufa",
  },
  {
    "round": "Round 29",
    "city": "Екатеринбург",
    "date": "2021-05-08",
    "time": "18:01",
    "team1": "Урал",
    "team2": "Ростов",
    "iata1": "SVX",
    "iata2": "ROV",
    "img": "ural",
  },
  {
    "round": "Round 29",
    "date": "2021-05-08",
    "time": "",
    "city": "Москва",
    "team1": "ЦСКА",
    "team2": "Краснодар",
    "iata1": "MOW",
    "iata2": "KRR",
    "img": "cska",
  },
  {
    "round": "Round 30",
    "city": "Ростов на Дону",
    "date": "2021-05-16",
    "time": "",
    "team1": "Ростов",
    "team2": "Краснодар",
    "iata1": "ROV",
    "iata2": "KRR",
    "img": "rostov",
  },
  {
    "round": "Round 30",
    "city": "Саранск",
    "date": "2021-05-16",
    "time": "",
    "team1": "Тамбов",
    "team2": "Зенит",
    "iata1": "SKX",
    "iata2": "LED",
    "img": "tambov",
  },
  {
    "round": "Round 30",
    "city": "Грозный",
    "date": "2021-05-16",
    "time": "",
    "team1": "Ахмат",
    "team2": "Спартак",
    "iata1": "GRV",
    "iata2": "MOW",
    "img": "akhmat",
  },
];
let daysOfWeek = ['Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

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
function ShowGames(e) {
  document.getElementById('games-table-container').style.display = "block";
  document.getElementById('games-table').innerHTML = '';
  for (var i = 0; i < games.length; i++) {
    if (games[i].team2 == e.id) {
      let h = new Date(games[i].date);
      let e = daysOfWeek[h.getDay()];
      let b = games[i].date;
      let c = b[8] + b[9] + "." + b[5] + b[6] + "." + b[0] + b[1] + b[2] + b[3];

      let example_price = Math.random() * 20000
      example_price = Math.round(example_price)
      example_price = (example_price).toLocaleString('ru')

      // прибавляем 1 день к дате
      let f = new Date(games[i].date);
      f.setDate(f.getDate() + 1);
      let f2 = f;
      f = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();

      // отнимаем 1 день от даты
      let g = new Date(games[i].date);
      g.setDate(g.getDate() - 1);
      let g2 = g
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
      if(GetTicketLink(games[i].team1) != undefined){
        ticket_button = '<a href="' + GetTicketLink(games[i].team1) + '" target="_blank" class="btn btn-outline-primary"> Онлайн-касса<br>ФК ' + games[i].team1 + '</a>'
      };

      document.querySelector(".games-table").insertAdjacentHTML('beforeend', `
            <tr>
            <th class="align-middle"><img height=50 src="images/${games[i].img}.png" class="" alt="" /></th>
            <td class="align-middle">${games[i].team1}</br>(${games[i].city})</td>
            <td class="align-middle">${c}</br>${games[i].time} <bt>${e}</bt></td>
            <td class="align-middle text-center"><a style="margin-bottom:0px;" href="https://www.aviasales.ru/search?origin_iata=
            ${games[i].iata2}&destination_iata=${games[i].iata1}&adults=1&children=0&infants=0&trip_class=0&depart_date=${g}&return_date=${f}&with_request=true&marker=311551.site" target="_blank" class="btn btn-outline-primary">
            <i class="fas fa-plane"></i>&nbsp;&nbsp;  ${example_price} р.</a>
            <br><small><small><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">${formatter.format(g2)} &mdash; ${formatter.format(f2)}</small></small></a>
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
    }
  }
}


// <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">${formatter.format(g2)} &mdash; ${formatter.format(f2)}</a>
// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-subway"></i> Автобус</a>
// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-bus"></i> Поезд</a>
