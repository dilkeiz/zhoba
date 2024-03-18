function toggleContainers() {
    var containers = document.querySelectorAll('.hidden-container');
    containers.forEach(function(container) {
      container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
    });
  }