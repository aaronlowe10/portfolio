(function() {

  var projects = document.querySelectorAll('.project');
  var length = projects.length;

  for (var i = 0; i < length; i++) {
    (function() {
      // Open the details popup when the project is clicked
      var details = projects[i].querySelector('.details');
      projects[i].addEventListener('click', function() {
        details.classList.remove('hidden');
        document.body.classList.add('modal-open');
      });

      // Close the popup when the close button is clicked
      var closeButton = details.querySelector('.close');
      closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        details.classList.add('hidden');
        document.body.classList.remove('modal-open');
      });
    })();
  }

})();
