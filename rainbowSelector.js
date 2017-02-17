$( "body" ).bind( "mouseup", function() {
  var selection = window.getSelection();
  console.log(selection.toString());
});
