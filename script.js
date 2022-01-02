document.querySelectorAll('.accordion_head').forEach(item => {
    item.addEventListener('click', event => {
        var accCollapse = item.nextElementSibling;

if(!item.classList.contains('transition')){ //cheking this first so the animation doesn't get interrupted on click

        if(!item.classList.contains('open')){
            
          //getting the height from the display:none element and setting it before the animation
          accCollapse.style.display = 'block';
          var height = accCollapse.clientHeight;

          setTimeout(() => { //delaying for the transition to work
            accCollapse.style.height = height + 'px';
            accCollapse.style.display = '';
          }, 300);
        

          accCollapse.classList = 'accordion_collapse transition';

            setTimeout(() =>{
                accCollapse.classList = 'accordion_collapse open';
            }, 300);
         

        } else {
            accCollapse.classList = 'accordion_collapse transition';

            setTimeout(() =>{
                accCollapse.style.height = '0px';
            }, 1);

            setTimeout(() =>{
                accCollapse.classList = 'accordion_collapse collapse';
                accCollapse.style.height = '';
            }, 300);
        }

        item.classList.toggle('open');}
    })
})
