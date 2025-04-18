document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to add 'visible' class to elements in viewport
    function showVisibleTimelineCards() {
      const timelineCards = document.querySelectorAll('.timeline-card');
      timelineCards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add('visible');
        }
      });
    }
  
    // Initially show visible cards
    showVisibleTimelineCards();
  
    // Add event listener for scrolling
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
      timelineContainer.addEventListener('scroll', showVisibleTimelineCards);
    }
  
    // Add parallax effect to timeline
    const timeline = document.querySelector('.timeline');
    if (timeline) {
      timelineContainer.addEventListener('scroll', function() {
        const scrollPosition = timelineContainer.scrollTop;
        timeline.style.transform = `translateY(${scrollPosition * 0.05}px)`;
      });
    }
  
    // Add hover effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const dot = this.querySelector('::before');
        if (dot) {
          dot.style.transform = 'scale(1.5)';
        }
      });
  
      item.addEventListener('mouseleave', function() {
        const dot = this.querySelector('::before');
        if (dot) {
          dot.style.transform = 'scale(1)';
        }
      });
    });
  }); 