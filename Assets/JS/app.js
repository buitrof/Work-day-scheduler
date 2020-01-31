$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'))

let currentHour = parseInt(moment().format('h'))
let workHour = parseInt($('.hour').text())

console.log(currentHour)
console.log(workHour)

if (workHour === currentHour) {
  $('.workItems').addClass('present')
} else if (workHour < currentHour) {
  $('.workItems').addClass('past')
} else {
  $('.workItems').addClass('future')
}

$(document).on('click', event => {
  if (event.target.classList.contains('workItems')) {
    document.getElementsByClassName('workContainer').innerHTML = `
      <textarea type="text" name="fname" class="chatInput"></textarea>
      <div class="printChatBox"></div>
      `
      console.log('ping')
  }
})

$('.chatinput').keyup(function () {
  var newText = $('.chatinput').val()
  $('.printchatbox').text(newText)
})