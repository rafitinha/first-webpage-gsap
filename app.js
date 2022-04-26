const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

const tl = gsap.timeline({default: {duration: 0.75, ease: "power1.out"},reversed: true})
tl.to('.cover',{duration:1,ease:'power2.easeOut',width:'60%'})
tl.to('nav',{duration:1,ease:'power2.easeOut',height: '100%'},'-=0.5')
tl.fromTo('.nav-open',
          {opacity:0,x:50,ease:'power2.easeOut',duration:0.5},
          {opacity:1,x:0,onComplete: function(){
              navOpen.style.pointerEvents = 'auto';
              console.log('Done!');
          }},'-=0.5')
tl.pause();

navButton.addEventListener("click", (e)=>{
   // tl.play();
   
   if(tl.isActive()){
     e.preventDefault();
     e.stopImmediatePropagation();
     return false;
   }

   toggleTween(tl);
});


function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}
