

var yourName = "Angelina";
var friendsName = "Lucas";
var messages = 1;
$(".sent").show();

$(".ang").click(function() {
    var angi=$(".your-input").val();
    $(".sent").append("<p>" + angi + "</p>") ;
});

$(".luc").click(function() {
    var luca=$(".friend-input").val();
    $(".received").append("<p>" + luca + "</p>") ;
      $(".received").css("color", "blue");
    messages++;
    $("h4").text("Number of messages recieved:" + messages);
});





//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}