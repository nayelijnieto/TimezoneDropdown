function displayTimezone(event) {
  if (event.target.value.length > 0) {
    let currentTimezone = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY hh:mm A");

    alert(`It is ${currentTimezone} in ${event.target.value}`);
  }
}
let citySelection = document.querySelector(`#timezone-cities`);
citySelection.addEventListener("change", displayTimezone);
