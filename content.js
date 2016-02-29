$(document).ready(function(){
    
    $('h1').text("");
    var allWork = "all work and no play makes jack a dull boy.";
    var i=0;
    window.setInterval(function(){
    $('h1').text($('h1').text() + allWork[i]);
    if (i<allWork.length-1){
    i++;
   }else{
      $('h1').text($('h1').text() + "\n");
      i=0;
   }
}, 200);
    
})