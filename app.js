const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

// color randomizer
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const textColor = Math.floor(Math.random()*16888216).toString(16);
  var galleries  = document.getElementsByClassName("left")
  var len =  galleries.length;

  for(var i=0 ; i<len; i++){
    galleries[i].style.backgroundColor="#" + randomColor;
  }
  for(var i=0 ; i<len; i++){
    galleries[i].style.color="#" + textColor;
  }
  console.log(document.getElementsByClassName("venue").backgroundColor = "#" + randomColor)
  // items.color.innerHTML = "#" + randomColor;
}
setBg();