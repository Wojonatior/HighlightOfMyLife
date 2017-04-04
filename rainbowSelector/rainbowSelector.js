//Insert and get a reference to the new stylesheet
var sheet = (function() {
  console.log("Creating a sheet")
  var style = document.createElement("style");
  // WebKit hack :(
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
})();

//Returns a hex color code based on weird rules from a string
get_color = function(coloredString) {
  coloredString = coloredString.replace(/[^0-9A-Fa-f]/g , "0");
  coloredString = pad_nearest_three(coloredString);
  coloredString = get_two_from_thirds(coloredString);
  return coloredString;
}

//get the first two characters from each third of the string
//assumed to be passed a string where % 3 === 0
get_two_from_thirds = function(str){
  thirdLength = str.length / 3;
  var result = str[0] + str[1];
  result += str[thirdLength] + str[thirdLength + 1]
  result += str[2 * thirdLength] + str[2 * thirdLength + 1]
  return result;
}

//Pads the string on the right with 0s up to the nearest 3 with 6 as a minimum length
pad_nearest_three = function(str){
  var intendedLength = Math.max( Math.ceil(str.length/3)*3, 6);
  var paddingString = "000000";
  return (str + paddingString).substring(0, intendedLength);
}

//Binds the highlighing rule changes to releasing the mouse
$( "body" ).bind( "mouseup", function() {
  var selection = window.getSelection().toString();
  if(selection.length === 0){return;}
  var newHighlight = get_color(selection);
  var selectors = ["::selection"]//, "::-mos-selection", "::-o-selection", "::-ms-selection", "::-webkit-selection"]

  //Clean out old rules
  while(sheet.rules.length > 0){
    sheet.deleteRule(0);
  }

  //Write new rules
  for(i = 0; i < selectors.length; i++){
    sheet.insertRule(selectors[i] + "{ background-color: #" + newHighlight + "; color: #fff; }", 0 );
  }

});
