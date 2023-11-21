
$(function () {
  var saveButton = $('.saveBtn');
  
  saveButton.on("click", function () {
    var timeId = $(this).parent().attr("id");
    var userTextInput = $(this).siblings(".description").val();
    localStorage.setItem(timeId, userTextInput);
    $(this).siblings(".description").text(userTextInput)
  })

  function hourBlocks() {
    var currentHour = dayjs().hour(); //found under the Get + Set Hour section of Day.js.org
    $(".time-block").each(function () {
      var hourKey = parseInt($(this).attr('id').split('-')[1]);//using .split('-')[1] to get the number on the id in the div for the time blocks
      console.log(hourKey, currentHour)
      $(this).removeClass("past present future");//we need to remove each class to allow it to dynamically add classes based on the following code.
      if (hourKey < currentHour) {
        $(this).addClass("past");
      } else if (hourKey === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
      var hour = $(this).attr("id")//initially had this section outside the hourBlocks function scope. Tutor said to keep it within. May need to work on scoping going forward
      console.log(hour)
      var textDiv = $(this).children(".description")[0]
      textDiv.textContent = localStorage.getItem(hour)
      console.log(textDiv)
    })
  }
hourBlocks()

  var today = dayjs()
  $("#currentDay").text(today.format('dddd, MMMM, DD'));
});


