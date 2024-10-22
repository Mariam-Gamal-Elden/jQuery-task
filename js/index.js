// ^ sidebar section

$(".bars").on("click", function() {
    $(".sidebar").removeClass("d-none").addClass("d-flex");
    $(".sidebar").css("left", "0");  // Slide the sidebar in
});

$(".exit").on("click", function() {
    $(".sidebar").css("left", "-250px");  // Slide the sidebar out
});


// ^ Singers Section

$(".singers h2").on("click", function(){
    $(this).next().slideToggle();
    $(".singers p").not($(this).next()).slideUp();  
})



// ^ CountDown Section

$(document).ready(function() {
    
    var countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    var countdownInterval = setInterval(function() {

        
        var now = new Date().getTime();
        var timeDifference = countdownDate - now;
 
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


        $(".days").text(days);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".seconds").text(seconds);


        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            $(".days").text("0");
            $(".hours").text("0");
            $(".minutes").text("0");
            $(".seconds").text("0");
        }

    }, 1000); 
});


// ^ Contact Section

$(".contact textarea").on("input", function(){
    var textLength= $(this).val().length;
    if(textLength >= 0){
        $(".count").text(100-textLength)
    }
    if(textLength >= 100) {
        $(".max").text("You have reached the limit of characters").css("color", "#D62E33").removeClass("fs-6").addClass("fs-5")
    }
})