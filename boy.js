// right tab
const currentDate = new Date();
document.getElementById("date1").innerHTML = currentDate.toDateString();

$(document).bind("contextmenu",function(e){
    return false;
      });