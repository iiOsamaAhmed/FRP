let submit = document.getElementById("dc-submit");
let output = document.getElementById("dc-output");

submit.addEventListener("click", () => {
    let dcfdate = new Date (document.getElementById("dc-fdate").value);
    let dctdate = new Date (document.getElementById("dc-tdate").value);
    // console.log(dcfdate, dctdate);

    if (dcfdate.getTime() && dctdate.getTime()) {
        let timeDiffrence = dctdate.getTime() - dcfdate.getTime();
        let dayDiffrence = timeDiffrence / (1000 * 3600 * 24);  // here there must have been a Math.abs() function so dates don't show with a - but I wanted the - to be shown
        output.innerHTML = `The Diffrence betweem the two dates is <sapn>${dayDiffrence}</span> days` 
    } else {
        output.innerHTML = `please select valid dates`
    };

});