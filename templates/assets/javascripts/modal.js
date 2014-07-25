var ModalEffect = (function(){
    function init(){

    var overlay = document.querySelector('.modal-overlay');
    [].slice.call(document.querySelectorAll('.modal-trigger')).forEach( function(el,i) {

      var modal = document.querySelector('#' + el.getAttribute('data-modal')),
      close = modal.querySelector('.modal-close');
      
      function removeModal(){
      classie.remove(modal, 'show');
      }

      el.addEventListener('click', function(ev){
        classie.add(modal, 'show');
        overlay.removeEventListener('click', removeModal);
        overlay.addEventListener('click', removeModal);
        });

      close.addEventListener('click', function(ev){
        ev.stopPropagation();
        removeModal();
        });
      });
    }
    init();
})();
