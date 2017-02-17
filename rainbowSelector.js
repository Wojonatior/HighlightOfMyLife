//Insert and get a reference to the new stylesheet
var sheet = (function() {
  console.log("Creating a sheet")
  // Create the <style> tag
  var style = document.createElement("style");

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();

get_color = function(selection) {
  selection.replace(/[^a-f]/g , "0");
  selection = pad_nearest_three(selection);
  return "352e7e";
}

pad_nearest_three = function(str){
  //Rounds up to the nearest 3, with a minimum of 6
  var intendedLength = Math.max( Math.ceil(str.length/3)*3, 6);
  var paddingString = "000000";
  return (str + paddingString).substring(0, intendedLength);
}

$( "body" ).bind( "mouseup", function() {
  var selection = window.getSelection();
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
