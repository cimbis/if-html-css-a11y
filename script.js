const editButton = document.querySelector('#edit-insurance');
const cancelButton = document.querySelector('.secondary');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal .title');
const body = document.querySelector('body');

const OPEN_CLASSNAME = 'is-open';
const PREVENT_SCROLL = 'prevent-scroll';

let previouslyFocusedElement = null;

const modalFocusTrap = focusTrap.createFocusTrap('.modal');

const editButtonClicked = (evt) => {
    previouslyFocusedElement = document.activeElement;

    body.classList.add(PREVENT_SCROLL);

    modal.classList.add(OPEN_CLASSNAME);
    modalTitle.setAttribute('tabindex', '0');
    modalTitle.focus();

    modalFocusTrap.activate();
}

const cancelButtonClicked = (evt) => {
    body.classList.remove(PREVENT_SCROLL);
    modal.classList.remove(OPEN_CLASSNAME);
    modalFocusTrap.deactivate();
    previouslyFocusedElement.focus();
}

const modalTitleBlur = (evt) => {
    modalTitle.removeAttribute('tabindex');
}

editButton.addEventListener('click', editButtonClicked);
cancelButton.addEventListener('click', cancelButtonClicked);
modalTitle.addEventListener('blur', modalTitleBlur);