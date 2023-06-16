document.addEventListener('DOMContentLoaded', function() {
    var openWebsiteButton = document.getElementById('openWebsiteButton');
  
    openWebsiteButton.addEventListener('click', function() {
      chrome.tabs.create({url: 'https://example.com'});
    });
  });
  