$(function() {
  $('#open').on('click', function() {
    var effectToShow = $('#effectsToShow').val();
    var effectToHide = $('#effectsToHide').val();
    $('#dialog').dialog({
      show: effectToShow,
      hide: effectToHide
    });
  });
});