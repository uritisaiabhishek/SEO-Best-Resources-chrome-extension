document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-button');
    const cards = document.querySelectorAll('.card');
  
    // Toggle accordion items
    accordions.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.accordion-content').forEach(x=>{
          x.style.display = 'none';
        });
        
        const content = button.nextElementSibling;
  
        button.classList.toggle('active');
  
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  
    // Open card links in new tab
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if(url){
          chrome.tabs.create({ url });
        }
      });
    });
  });
  