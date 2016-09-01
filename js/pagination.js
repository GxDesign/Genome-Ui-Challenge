
// FLAVORS LIST PAGINATION:
// custom pagination code for splitting paragraph by sentences and listing the sentences in groups of 10.
// by Giancarlo Martinez




// function to group flavors in sets of 10
var groupedFlavors = function(allFlavors) {

  var sets = [],
    offset = 0,
    $set;

  while (($set = allFlavors.slice(offset, (10 + offset))).length) {
    sets.push($set);
    offset += 10;
  }

  return sets;
};

// function to populate list with flavor text, pass in set of 10 flavors and set number
var populate = function(flavors, set) {
  var count = 0;
  var set = set;
  $("#flavor-list li").each(function(index) {
    var num = index + 1;
    var flavor = (set * 10 + num) + '.   ' + flavors[count];
    if(flavors[count] == undefined) {
      $(this).text(" ");
    } else {
      $(this).text(flavor);
    };
    count++;
  });
}




// Ready? Lets do this!
$(document).ready(function() {

  var allFlavors = $("#flavors-text").text().split(".");

  allFlavors.pop(); // remove last from array, empty due to period.

  // array containing flavors in sets of 10. Used to paginate.
  var sets = groupedFlavors(allFlavors);

  // announce total flavors
  var countTXT = '(' + allFlavors.length + ' flavors)';
  $("#count").text(countTXT);

  // populate first set of 10
  populate(sets[1], 0);

  // create pagination controls
  for (var i = 1; i < sets.length + 1; i++) {
    // $("#pagination").append('<label>' + i + '<input type="radio" data-index='+ (i - 1) + '>');
    $("#pagination").append('<li data-index=' + (i - 1) + '>' + i + '</li>');
  }

  // populate list on pagination control click
  $("#pagination li").click(function() {
    // empty current list
    $("#flavor-list li").empty; 
    var flavorSet = $(this).data('index');
    populate(sets[flavorSet], flavorSet);
    // make clicked button active, clear other active buttons
    $(this).addClass("active").siblings().removeClass("active");
  })

})