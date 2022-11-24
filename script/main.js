$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>0){
            // console.log(this.scrollY)
            $('header').css({
                'box-shadow':'1px 4px 10px rgba(58, 58, 58, 0.379)',
                'border-bottom':'none'
            }).delay(200);
        }else{
            $('header').css({
                'box-shadow':'none',
                'border-bottom':'1px solid #ccc'
            }).delay(200);
        }
    
    });

    $('.search_btn').click(function(){
        if($('#glass').width()==0){
            $('#glass').animate({'opacity':'1'},100).animate({'width':'150px'},300);
        }else{
            $('#glass').animate({'width':'0px'},300).animate({'opacity':'0'},100);
        };
    });


    const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function (spyEl) {

    new ScrollMagic
    .Scene({ //감시할 장면을 추가
        triggerElement: spyEl,
        triggerHook: .8 //화면의 80% 지점에서 동작
    })
    .setClassToggle(spyEl, 'show') //show클래스를 적용하거나 해제하기
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다
});

const topBtnEl=document.querySelector('.top_btn');

topBtnEl.addEventListener('click',function(){
    gsap.to(window, .6,{ //브라우저를 선택하여 0.6초만에
        scrollTo: 0 //스크롤 꼭대기 0까지 올라간다.
    });
}); 

window.addEventListener('scroll', function(){
    console.log(window.scrollY); //스크롤값 확인하기
    if(660<window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(topBtnEl,0.2,{
            opacity:1,
            // x:0
        });
    }else{
        // badgeEl.style.display='block';
        gsap.to(topBtnEl,0.2,{
            opacity:0,
            // x:0
        });
    }
});
});
