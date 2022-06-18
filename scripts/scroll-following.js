const area = document.getElementById("scroll-out50");
const head = document.getElementById("scroll-head50");
const areaClass = document.getElementsByClassName("recommendations-area");

const scroll_border = 100;

window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){

        if (window.scrollY > scroll_border){
            if (!area.classList.contains("scroll50")){
                area.classList.add("scroll50");
            }
            if (!head.classList.contains("scroll50")){
                head.classList.add("scroll50");
            }
        }else {
            if (area.classList.contains("scroll50")){
                area.classList.remove("scroll50");
            }
            if (head.classList.contains("scroll50")){
                head.classList.remove("scroll50");
            }
            areaClass[0].style.transform = "translateY(" + -window.scrollY + "px)";
        }
    });

});