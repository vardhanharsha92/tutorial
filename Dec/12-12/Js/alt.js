$(document).ready(function(){
    $("#testBtn").click(function(){
        //parent
        // $("#demo").parent().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //parents
        // $("#demo").parents().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //paentsuntil
        // $("#demo").parentsUntil("#parent").css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //children
        // $("#parent").children().css({
        //   "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //find
        // $("#parent").find("p").css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        //   });

        //siblings
        // $("#parent").siblings().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        //   });

        //next
        // $("#parent").next().css({
        //   "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        // //nextAll
        // $("#parent").nextAll().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //nextUntil
        // $(".container").nextUntil("#demo").css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //prev
        // $("#demo").prev().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //prevAll
        // $("#demo").prevAll().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //prevUntil
        // $("#demo").prevUntil("#parent").css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //first
        // $("#parent").first().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //last
        // $("#parent").last().css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //eq
        // $("#parent").eq(0).css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        //filter
        // $("p").filter("#parent").css({
        //     "background-color":"red","color":"yellow","width":"100%","border":"2px solid black"
        // });

        // $("#dimentions").width();
        console.log($("#dimentions").outerWidth(true));
    });
});
