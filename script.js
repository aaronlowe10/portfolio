(function() {

  var projects = document.querySelectorAll('.project');
  var allDetails = document.querySelectorAll('.details');
  var detailsLength = allDetails.length;
  var length = projects.length;

  for (var i = 0; i < length; i++) {
    (function() {
      var details = projects[i].querySelector('.details');
      var closeButton = details.querySelector('.close');

      // Open the details popup when the project is clicked
      projects[i].addEventListener('click', function(event) {
        event.stopPropagation();
        details.classList.remove('hidden');
        document.body.classList.add('modal-open');
      });

      // Close the popup when the close button is clicked
      closeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        details.classList.add('hidden');
        document.body.classList.remove('modal-open');
      });

      // Also close the popup when clicking outside the text
      details.addEventListener('click', function(event) {
        if (details === event.target) {
          event.stopPropagation();
          details.classList.add('hidden');
          document.body.classList.remove('modal-open');
        }
      });
    })();
  }

})();
