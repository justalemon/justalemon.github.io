function updateYears() {
    let element = document.getElementById("years");

    if (element === null) {
        console.error("Element containing years was not found.");
        return;
    } 

    let now = Date.now();
    let birthday = Date.parse("2001-08-04");
    let difference = now - birthday;
    let years = difference / 3.154e+10;  // Thanks Google!
    element.innerText = Math.trunc(years).toString();
}

function main() {
    updateYears();
}

main();
