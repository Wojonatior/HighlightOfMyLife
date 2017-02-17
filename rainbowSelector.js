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

get_color = function() {
  return "352e7e";
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
