const OPEN = 'is-open';
const BACKDROP = 'backdrop';
const MODAL = 'modal';
const MODAL_TITLE = 'title';
const PREVENT_SCROLL = 'prevent-scroll';

const editButton = document.getElementById('insurance-edit');
const submitButton = document.getElementById('submit');
const cancelButton = document.getElementById('cancel');

const body = document.querySelector('body');
const backdrop = document.querySelector(`.${ BACKDROP }`);
const modal = document.querySelector(`.${ MODAL }`);
const modalTitle = document.querySelector(`.${ MODAL_TITLE }`);

const modalFocusTrap = focusTrap.createFocusTrap(`.${ MODAL }`);
let focusBeforeModal = null;

const openModal = (evt) => {
    focusBeforeModal = document.activeElement;

    // make modal visible
    backdrop.classList.add(OPEN);
    modal.classList.add(OPEN);
    body.classList.add(PREVENT_SCROLL);

    // focus modal title
    modalTitle.setAttribute('tabindex', '0');
    modalTitle.focus();

    modalFocusTrap.activate();
}

const closeModal = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    backdrop.classList.remove(OPEN);
    modal.classList.remove(OPEN);
    body.classList.remove(PREVENT_SCROLL);

    modalFocusTrap.deactivate();
    focusBeforeModal?.focus();
}

const modalTitleOnBlur = () => {
    modalTitle.removeAttribute(`tabindex`);
}

editButton.addEventListener('click', openModal)
submitButton.addEventListener('click', closeModal);
cancelButton.addEventListener('click', closeModal);
modalTitle.addEventListener(`blur`, modalTitleOnBlur)
