(function() {

  var projects = document.querySelectorAll('.project');
  var length = projects.length;

  for (var i = 0; i < length; i++) {
    (function() {
      var details = projects[i].querySelector('.details');
      projects[i].addEventListener('click', function() {
        details.classList.toggle('hidden');
        document.body.classList.toggle('modal-open');
      });
    })();
  }

})();
