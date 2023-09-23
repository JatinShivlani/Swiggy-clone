const Scrolling = () => {
  const nextBtn = document.querySelectorAll(".right-arrow");
  const prevBtn = document.querySelectorAll(".left-arrow");
  const scroller = document.querySelectorAll(".scroller");
const shift=document.querySelector('.redPart')
const scrollBar=document.querySelector('.scrollBar')
  for (let i = 0; i < nextBtn.length; i++) {
    function redScroller(value){
scrollBar.classList.add('shift')

  shift.style.transform=`TranslateX(${value*0.0080+0.1}px)`

    }
    function disabled(num) {
      let currentPosition = scroller[i].scrollLeft;
      redScroller(currentPosition+num)
      if (currentPosition + num <= 0) {
        prevBtn[i].setAttribute("disabled", "true");
      } else {
        prevBtn[i].removeAttribute("disabled");
      }
    }
    disabled(0);
    
    scroller[i].addEventListener("scroll", () => {
      disabled(0);
    });
    nextBtn[i].addEventListener("click", () => {
      scroller[i].scrollLeft += 610;
      disabled(+610);
    });
    prevBtn[i].addEventListener("click", () => {
      scroller[i].scrollLeft -= 610;
      disabled(-610);
    });
  }
};
export default Scrolling;
