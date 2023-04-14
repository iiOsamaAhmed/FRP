// the code for Date Calculator

let dcsubmit = document.getElementById("dc-submit");
let dcoutput = document.getElementById("dc-output");

dcsubmit.addEventListener("click", () => {
    let dcfdate = new Date (document.getElementById("dc-fdate").value);
    let dctdate = new Date (document.getElementById("dc-tdate").value);
    // console.log(dcfdate, dctdate);

    if (dcfdate.getTime() && dctdate.getTime()) {
        let dcTimeDiffrence = dctdate.getTime() - dcfdate.getTime();
        let dayDiffrence = dcTimeDiffrence / (1000 * 3600 * 24);  // here there must have been a Math.abs() function so dates don't show with a - but I wanted the - to be shown
        dcoutput.innerHTML = `The Diffrence betweem the two dates is <sapn>${dayDiffrence}</span> days` 
    } else {
        dcoutput.innerHTML = `please select valid dates`
    };

});



// the code for Time Until



let tusubmit = document.getElementById("tu-submit");
// let tuoutput = document.getElementById("tu-output");
// let nowTime = document.getElementById("hiddinH").innerHTML;
// let hiddinH = document.getElementById("tu-now").innerHTML;
// // let nowSec = document.getElementById("hideenSec").innerHTML;
// // let nowTimeNoS = nowTime - nowSec 


// //this function is to make a live clock
// function clock() {
//     const date = new Date ();
//     hiddinH = document.getElementById("tu-now").innerHTML = date.toLocaleTimeString(`it-IT`); // this i will use for showing it
//     nowTime = document.getElementById("hiddinH").innerHTML = date.toLocaleTimeString(`it-IT`, {hour: '2-digit', minute: '2-digit'}); // this i will use for calculation
// //    `it-IT`
//     setTimeout(function(){clock()}, );
// }
// // this function to get the seconds live
// //function sec() {
// //    const sdate = new Date ();
// //    nowSec = document.getElementById("hideenSec").innerHTML = sdate.getSeconds();
// //    setTimeout(function(){sec()}, );
// //}

tusubmit.addEventListener("click", () => {

    var endDate = document.getElementById("tu-input")
    var countDownDate = new Date(endDate).getTime();

    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("tu-output").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("tu-output").innerHTML = "EXPIRED"; }
    }, 1000);


    // let tutdate = document.getElementById("tu-input").value;

    // console.log(nowTime);
    // console.log(tutdate);
    // console.log(hiddinH);

    // if (nowTime && tutdate) {
    //     let tuTimeDiffrecne = tutdate - nowTime;
    //     console.log(tuTimeDiffrecne);
    // }
});







// to onload all at one time
// function onload() {
//     clock();
//     //sec();
// };



// script for calender section

const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector('.calendar');
  const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month_picker = document.querySelector('#month-picker');
  const dayTextFormate = document.querySelector('.day-text-formate');
  const timeFormate = document.querySelector('.time-formate');
  const dateFormate = document.querySelector('.date-formate');
  
  month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
  };
  
  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    
    let currentDate = new Date();
    
    month_picker.innerHTML = month_names[month];
    
    calendar_header_year.innerHTML = year;
    
    let first_day = new Date(year, month);
  
  
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
  
      let day = document.createElement('div');
  
      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendar_days.appendChild(day);
    }
  };
  
  let month_list = calendar.querySelector('.month-list');
  month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
  
    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
    };
  });
  
  (function () {
    month_list.classList.add('hideonce');
  })();
  document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  
  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector('.time-formate');
  const todayShowDate = document.querySelector('.date-formate');
  
  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);