$(document).ready(function(){
    $("#animateBtn").click(function(){
        // $("#animate").animate({
        //     "margin-left":"200px",
        //     "width":"300px",
        //     "height":"300px",
        //     "opacity":0.5
        // },4000);

        $("#animate").animate({
            "margin-left":"300px",
            "opacity":0.5
        },2000);
        $("#animate").animate({
            "margin-top":"300px",
            "opacity":1
        },1000);
        $("#animate").animate({
            "margin-left":0,
            "opacity":0.5
        },2000);
        $("#animate").animate({
            "margin-top":"70px",
            "opacity":1
        },1000);
    });

    $("#stopAnimate").click(function(){
        $("#animate").stop();
    });

    $("#hideBtn").click(function(){
        $("#animate").hide("slow", function(){
            alert("The Box is now hidden");
        });
    });
});