
// ROTATE HEADERS

(function($) {
$( document ).ready(function() {
    $('h1').each(function( index ) {
        // rotation degree between -5 and 5
        var a = Math.random() * 10 - 5;
        $(this).css('transform', 'rotate(' + a + 'deg)');})
    });
})(jQuery);



// MOBILE WINDOW SIZE RESET

function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();






$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();


});



function sectionJump(value){
  // var top = document.getElementById(value).offsetTop + 200;
  // window.scrollTo(0, top);
	document.getElementById(value).scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
}


$(window).on("load", function() {


});

$(document).ready(function() {

  let mobileBrowser = checkMobile()
  if(mobileBrowser){
  }



  var poeticcomputation = [
         "Poetic computation is a relational practice organized around communal study."
       , "Poetic computation is an act of resistance against utilitarian notions of progress and efficiency."
       , "Poetic computation begins with the interfacing between two or more beings."
       , "Poetic computation engages the computer as a medium for critical and artistic expression."
       , "Poetic computation is both an aesthetic and affective experience of code."
       , "Poetic computation can’t be separated from its historical, political and social impact."
       , "Poetic computation is when technology is used for critical thinking and aesthetic inquiry."
       , "Poetic computation is a colorful theory of culpability."
  ];

  randDef = poeticcomputation[Math.floor( Math.random() * poeticcomputation.length )];
  $('#definition').text(randDef);
  $('#marquee-definition').text(randDef);

  $(".testimonials").click(function() {
      $(".participate-img").addClass('hide').removeClass('show').addClass('hide-test').removeClass('show-test');
      $(".test").addClass('show-test').removeClass('hide-test');
      $("#test-text").addClass('hide-text');
      $("#photos-text").removeClass('hide-text');
      slider.scrollLeft = 0;
      slider2.scrollLeft = 0;
      slider3.scrollLeft = 0;

      document.getElementById('participate-archive').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });

  });

  $(".participate-photos").click(function() {
      $(".participate-img").addClass('show').removeClass('hide').addClass('show-test').removeClass('hide-test');
      $(".test").addClass('hide-test').removeClass('show-test');
      $("#test-text").removeClass('hide-text');
      $("#photos-text").addClass('hide-text');
      slider.scrollLeft = 0;
      slider2.scrollLeft = 0;
      slider3.scrollLeft = 0;

      document.getElementById('participate-archive').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
  });


  // $('.testimonials').on('touchstart', function(){
  //   $(".participate-img").addClass('hide').removeClass('show').addClass('hide-test').removeClass('show-test');
  //   $(".test").addClass('show-test').removeClass('hide-test');
  //   $(".test-text").addClass('hide-test').removeClass('show-test');
  //   $(".photos-text").addClass('show-test').removeClass('hide-test');
  //   slider.scrollLeft = 0;
  //   slide2.scrollLeft = 0;
  // });
  //
  // $('.participate-photos').on('touchstart', function(){
  //     $(".participate-img").addClass('show').removeClass('hide').addClass('show-test').removeClass('hide-test');
  //     $(".test").addClass('hide-test').removeClass('show-test');
  //     $(".test-text").addClass('show-test').removeClass('hide-test');
  //     $(".photos-text").addClass('hide-test').removeClass('show-test');
  //     slider.scrollLeft = 0;
  //     slide2.scrollLeft = 0;
  // });






//
// if $("h4.breadcrumb a").innerHTML.indexOf("about") {
//   $('a#link-about').addClass('underline');
// } else {
//   themeToggle.innerText = 'you are in cathode-ray mode. switch to liquid crystal mode.'
//   $('#current-mode').html('cathode-ray')
// }



  if (modeStyles.href.includes('lcd')) {
    themeToggle.innerText = 'you are in liquid crystal mode. switch to cathode-ray mode.'
    $('#current-mode').html('liquid crystal')
  } else {
    themeToggle.innerText = 'you are in cathode-ray mode. switch to liquid crystal mode.'
    $('#current-mode').html('cathode-ray')
  }


    $(".featured").click(function() {
    window.location = $(this).find("a").attr("href");
    // return false;
    });


    $(window).scroll(function() {


    let mobileBrowser = checkMobile()
    if(mobileBrowser){
          // $('.logo').addClass("hide");
    }
    else{

    }


    });

});



$(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");

    return false;
});



function checkMobile(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}




// SIDE MODES

const modeStyles = document.getElementById('mode');
const storedTheme = localStorage.getItem('mode');
  if(storedTheme){
      modeStyles.href = storedTheme;
}
const themeToggle = document.getElementById('mode-toggle');
const currentMode = document.getElementById('current-mode');

document.addEventListener('DOMContentLoaded', () => {

  themeToggle.addEventListener('click', () => {
    if (modeStyles.href.includes('lcd')) {
      modeStyles.href = 'crt.css'
      themeToggle.innerText = 'you are in cathode-ray mode. switch to liquid crystal mode.'
    } else {
      modeStyles.href = 'lcd.css'
      themeToggle.innerText = 'you are in liquid crystal mode. switch to cathode-ray mode.'
    }
    localStorage.setItem('mode',modeStyles.href)
  })
});
