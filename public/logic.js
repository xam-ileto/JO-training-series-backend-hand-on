$(document).ready(() => {
  console.log('page loaded');

  //   function to change ✔ and ✖
  $('.list-item').click((event) => {
    clickedItem = event.target;
    var text = $(clickedItem).text();

    if (text === '✔') {
      $(clickedItem).text('✖');
    } else {
      $(clickedItem).text('✔');
    }
  });
});
