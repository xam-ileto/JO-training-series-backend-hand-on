$(document).ready(() => {
  console.log('page loaded');

  //   function to change ✔ and ✖
  $('.list-item').click((event) => {
    clickedItem = event.target;
    var text = $(clickedItem).text();
    var id = $(clickedItem).attr('id');
    console.log(id);
    if (text === '✔') {
      $.post(`/activity-done/${id}`, { done: false });
      $(clickedItem).text('✖');
    } else {
      $.post(`/activity-done/${id}`, { done: true });
      $(clickedItem).text('✔');
    }
  });
});
