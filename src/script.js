function displayTimezone(event) {
  const selectedTimezone = event.target.value;
  if (selectedTimezone.length > 0) {
    if (selectedTimezone === "rome") {
      let romeTime = moment()
        .tz("Europe/Rome")
        .format(`[It is] dddd, MMMM D, YYYY HH:mm A [in Rome,Italy]`);
      alert(`${romeTime}`);
    }
    if (selectedTimezone === "auckland") {
      let aucklandTime = moment()
        .tz("Pacific/Auckland")
        .format(
          `[It is] dddd, MMMM D, YYYY HH:mm A [in Auckland, New Zealand]`
        );
      alert(`${aucklandTime}`);
    }
    if (selectedTimezone === "madrid") {
      let madridTime = moment()
        .tz("Europe/Madrid")
        .format(`[It is] dddd, MMMM D, YYYY HH:mm A [in Madrid, Spain]`);
      alert(`${madridTime}`);
    }
  }
}
let citySelection = document.querySelector(`#timezone-cities`);
citySelection.addEventListener("change", displayTimezone);
