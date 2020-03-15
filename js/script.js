$(document).ready(function() {
  // moment.js utilized to get today's date and current hour
  let today = moment().format("dddd MMMM Do YYYY, h:mm:ss a");
  // declaring the variables utilizing the IDs and classes
  let saveBtn = $(".saveBtn");
  let currentDay = $("#currentDay");
  //Gets or sets the hour.
  let currentHour = moment().hour();
  console.log(currentHour);
  let description = $(".description");

  //console.log(currentHour);

  // sets today's date
  currentDay.text(today);

  function hourColor() {
    // for each element with .description class
    description.each(function() {
      // rowHour = the id of each element, which is the element's hour #
      let rowHour = $(this).attr("id");

      // attach all classes back to the element
      if (rowHour < currentHour) {
        $(this).attr("class", "past col-md-10 description");
      } else if (rowHour > currentHour) {
        $(this).attr("class", "future col-md-10 description");
      } else {
        $(this).attr("class", "present col-md-10 description");
      }
    });
  }
  // calls function to check rowtime + change color based on that
  hourColor();

  // adding event handler to the saveBtn

  saveBtn.on("click", function() {
    // userInput = any sibling of this button w .description's value, which = user input
    let userInput = $(this)
      .siblings(".description")
      .val();
    // time = any sibling of this button w .description's id, which is the hour
    let time = $(this)
      .siblings(".description")
      .attr("id");
    console.log(userInput);

    localStorage.setItem(time, userInput);
  });

  // gets task from local storage + sets it to text of its appropriate hour
  $("#9").text(localStorage.getItem("9"));
  $("#10").text(localStorage.getItem("10"));
  $("#11").text(localStorage.getItem("11"));
  $("#12").text(localStorage.getItem("12"));
  $("#13").text(localStorage.getItem("13"));
  $("#14").text(localStorage.getItem("14"));
  $("#15").text(localStorage.getItem("15"));
  $("#16").text(localStorage.getItem("16"));
  $("#17").text(localStorage.getItem("17"));
});
