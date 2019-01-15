// Jquery

// $('#btn'); // document.getElementById('btn');
// $('.btn'); 

// .ready(); == domcontentloaded event

$(document).ready(()=>{
  $('list-item:first').hover(()=>{
    $(this).toggleClass('active');
  });

  $('list-item:eq(2)').on('click', ()=>{
    $('image:even').fadeToggle('slow');
  });

  $('list-item:eq(4)').on('click', ()=>{
    $('image:odd').animate(
      {
        opacity : 'toggle',
        height: 'toggle'
      }, 3000
    );
  });

}); 

// $ajax == fetch
// element.animate() == $().animate()