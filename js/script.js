$(document).ready(()=>{
    $(window).scroll(()=>{
        var scrollWindows =  $(window).scrollTop();
        console.log(scrollWindows)
        if (scrollWindows > 31){
            $(".navBarContainer").addClass("fixed");
        }else{
            $(".navBarContainer").removeClass("fixed");
        }
    })
})