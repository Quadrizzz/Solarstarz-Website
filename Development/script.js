document.addEventListener('DOMContentLoaded', ()=>{
    const accordion = document.getElementsByClassName('question');
    for (i=0; i<accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
          this.classList.toggle('active')
        })
    }

    document.getElementsByClassName('menu')[0].style.height = window.innerHeight + "px";

    var menu = document.getElementsByClassName("menu_icon");
    for(i=0; i<menu.length; i++){
      if(i === 1){
        menu[i].addEventListener('click', function(){
          document.getElementsByClassName('menu')[0].classList.toggle('menu_show');
          document.getElementsByTagName('body')[0].classList.toggle('body_fix')
          setTimeout(()=>{
            document.getElementsByClassName('menu')[0].style.display = 'none';
          },500)
        })
      }
      else{
        menu[i].addEventListener('click', function(){
          document.getElementsByClassName('menu')[0].style.display = 'flex';
          setTimeout(()=>{
            document.getElementsByClassName('menu')[0].classList.toggle('menu_show');
            document.getElementsByTagName('body')[0].classList.toggle('body_fix')
          },50)
        })
      }
    }
})