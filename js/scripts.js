var countToBy = function(countTo, countBy) {
  if (((isNaN(countTo) === false) && (isNaN(countBy) === false))) {
    //enter loop here
    var numbers = []
    var counter = 0
    do  {
      if(countTo >= countBy){
      numbers.push(counter += countBy);
    } else {
      return "Nice try, smarty pants!";
    }
    }
    while ((countTo - counter) >= countBy);
    return numbers.toString();
  } else {
    return "Please enter a valid number.";
  }
};

$(document).ready(function() {
  $("form#countToBy").submit(function(event){
      var countTo = parseInt($("input#countTo").val());
      var countBy = parseInt($("input#countBy").val());
      var result = countToBy(countTo, countBy);

      $(".numbers-result").text(result);

      $("#result").show();
      event.preventDefault();
  });
});
