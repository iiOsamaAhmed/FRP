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