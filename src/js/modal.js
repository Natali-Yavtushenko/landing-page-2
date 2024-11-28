import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showModalIzi() {
  document.body.style.overflow = 'hidden';
  return iziToast.show({
    class: 'toastStyle',
    theme: 'dark',
    class: 'toastStyle',
    title: 'Thank you for your interest in cooperation!',
    titleColor: '#00b068',
    message:
      'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
    messageColor: '#292929',
    position: 'center',
    timeout: 0,
    close: true,
    backgroundColor: '#f0f0f0',
    overlay: true,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    progressBar: false,
    closeOnEscape: true,
    closeOnClick: false,
    overlayClose: true,
    onClosed: closeModalIzi,
  });
}

function showEroorIzi(error) {
  document.body.style.overflow = 'hidden';
  return iziToast.show({
    class: 'toastStyle',
    message: `${error}`,
    messageColor: '#292929',
    backgroundColor: '#f0f0f0',
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    position: 'center',
    timeout: 0,
    close: true,
    backgroundColor: '#f0f0f0',
    overlay: true,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    progressBar: false,
    closeOnEscape: true,
    closeOnClick: false,
    overlayClose: true,
    onClosed: closeModalIzi,
  });
}

export { showModalIzi, showEroorIzi };

function closeModalIzi() {
  document.body.style.overflow = '';
}
