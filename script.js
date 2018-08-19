let totalItems = 0;
let labelCounter = 0;

$(function() {
  $("#buttonTodo").click(function() {
    var newTODO = $("#newTODO").val();
    $(".container ul").append('<li><input name="chk[]" type="checkbox" class="checkbox" id="checkbox' + labelCounter +'"/><label for="checkbox' + labelCounter +'">' + newTODO + '</label></li>');
    totalItems++;
    labelCounter++;
    $("#item-count").text(totalItems);
    $("#newTODO").val('');
    // $("#newTODO").focus();
    var checkedNum = $('input[name="chk[]"]:checked').length;
    $("#unchecked-count").text(totalItems - checkedNum);
  });
});

$(document).on('change', ':checkbox', function() {
    var checkedNum = $('input[name="chk[]"]:checked').length;
    $("#unchecked-count").text(totalItems - checkedNum);
});