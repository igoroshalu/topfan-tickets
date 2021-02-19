let clubs = [
  {
    id: 1,
    name: "Ростов",
    logo: "images/rostov.png"
  },
  {
    id: 2,
    name: "ЦСКА",
    logo: "images/cska.png"
  },
  {
    id: 3,
    name: "Зенит",
    logo: "images/zenit.png"
  },
  {
    id: 4,
    name: "Спартак",
    logo: "images/spartak.png"
  },
  {
    id: 5,
    name: "Динамо",
    logo: "images/dynamo.png"
  },
  {
    id: 6,
    name: "Локомотив",
    logo: "images/lokomotiv.png"
  },
  {
    id: 7,
    name: "Краснодар",
    logo: "images/krasnodar.png"
  },
  {
    id: 8,
    name: "Сборная",
    logo: "images/disabled.png"
  },
];
// генерим карточки клубов
clubs.forEach(el => {
  document.querySelector(".club_cards_section").insertAdjacentHTML('beforeend', `<div class="club-logo-card card text-center">
      <img src="${el.logo}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${el.name}</h5>
        <a onclick="show_games(this)" id="${el.name}" href="#club_cards" class="btn btn-outline-primary">Все выезда</a>
      </div>
			</div>
        `);
});
// let clubs = [
//   {
//     "id":"",
//     "name":"",
//     "name_eng":"",
//     "city":"",
//     "gps":"",
//     "timezone":"",
//     "tickets":"",
//   },
//   {
//     "id":"",
//     "name":"Зенит",
//     "name_eng":"Zenit",
//     "city":"Cанкт-Петербург",
//     "gps":"",
//     "timezone":"",
//     "tickets":"",
//   },
// ]
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
]
// Дни недели
let daysOfWeek = ['Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
// Выводим игры клуба
function show_games(e) {
  document.getElementById('games-table-container').style.display = "block";
  document.getElementById('games-table').innerHTML = '';
  for (var i = 0; i < games.length; i++) {
    if (games[i].team2 == e.id) {
      let h = new Date(games[i].date);
      let e = daysOfWeek[h.getDay()];
      let b = games[i].date;
      let c = b[8] + b[9] + "." + b[5] + b[6] + "." + b[0] + b[1] + b[2] + b[3];
      // прибавляем 1 день к дате
      let f = new Date(games[i].date);
      f.setDate(f.getDate() + 1);
      let m = f.getMonth() + 1;
      f = f.getFullYear() + "-" + m + "-" + f.getDate();

      document.querySelector(".games-table").insertAdjacentHTML('beforeend', `  <tr>
            <th class="align-middle"><img height=50 src="images/` + games[i].img + `.png" class="" alt="" /></th>
            <td class="align-middle">` + games[i].team1 + `</br>(` + games[i].city + `)</td>
            <td class="align-middle">` + c + `</br>` + games[i].time + ` <bt>` + e + `</bt></td>
            <td class="align-middle text-center"><a href="https://www.aviasales.ru/search?origin_iata=` + games[i].iata2 + `&destination_iata=` + games[i].iata1 + `&adults=1&children=0&infants=0&trip_class=0&depart_date=` + games[i].date + `&return_date=${f}&with_request=true&marker=311551.site" target="_blank" class="btn btn-outline-primary"><i class="fas fa-plane"></i> Авиабилеты</a>
              <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-futbol"></i> Билеты на матч</a>
            </td>
          </tr>
          `);
    }
  }
}
let response = fetch("https://api.travelpayouts.com/v2/prices/week-matrix?currency=rub&origin=MOW&destination=ROV&show_to_affiliates=true&depart_date=2021-03-13&return_date=2021-03-14&token=7ce5cb7674bf98afc6f68c8eb4f47336");

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = response.json();
  console.log(json);
} else {
  alert("Ошибка HTTP: " + response.status);
}

// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-subway"></i> Автобус</a>
// <a href="" target="_blank" class="btn btn-outline-primary"><i class="fas fa-bus"></i> Поезд</a>
