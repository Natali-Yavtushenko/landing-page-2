import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion', {
    duration: 300,
    showMultiple: false,
    collapse: true,
  });


  const faqItems = document.querySelectorAll('.faq-item');

  const firstItem = faqItems[0];
  const firstAnswer = faqItems[0].querySelector('.faq-answer');
  const firstArrow = faqItems[0].querySelector('.faq-arrow');
  const firstQuestion = firstItem.querySelector('.faq-question');

  firstItem.classList.add('open');
  firstAnswer.classList.add('show');
  firstArrow.classList.add('open');
  firstQuestion.classList.add('active');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.faq-arrow');

    const toggleItem = () => {
      const isExpanded = answer.classList.contains('show');

      if (!isExpanded) {
        item.classList.add('open');
        answer.classList.add('show');
        arrow.classList.add('open');
        questionButton.classList.add('active');
      } else {
        item.classList.remove('open');
        answer.classList.remove('show');
        arrow.classList.remove('open');
        questionButton.classList.remove('active');
      }
    };

    const toggleOnClick = () => {
      faqItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('open');
          i.querySelector('.faq-answer').classList.remove('show');
          i.querySelector('.faq-arrow').classList.remove('open');
          i.querySelector('.faq-question').classList.remove('active');
        }
      });

      toggleItem();
    };

    questionButton.addEventListener('click', toggleOnClick);
    arrow.addEventListener('click', (e) => {
      e.stopPropagation(); 

      if (answer.classList.contains('show')) {
        item.classList.remove('open');
        answer.classList.remove('show');
        arrow.classList.remove('open');
        questionButton.classList.remove('active');
      } else {
        toggleOnClick();
      }
    });
  });
});