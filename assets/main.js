const pages = document.querySelectorAll('.page');
let toPage = null;
const perrmits = ['home'];

document.addEventListener('click', (event) => {
    const eTarget = event.target;
    if (eTarget.classList.contains('home-btn')) {
        toPage = null;
        openPage();
    }
    if (eTarget.classList.contains('modal-home-btn')) {
        closeModal();
        toPage = null;
        openPage();
    }
    if (eTarget.classList.contains('modal-shadow')) {
        closeModal();
        toPage = null;
    }
    if (eTarget.classList.contains('go-to-page')) {
        if (validPassword()) {
            openPage();
            perrmits.push(toPage);
            closeModal();
        } else {
            showError();
        }
    }
    if (eTarget.getAttribute('data-to-page') != null) {
        toPage = eTarget.getAttribute('data-to-page');
        if (perrmits.includes(toPage)) {
            openPage();
        } else {
            openModal();
        }
    }
});

function openPage() {
    for (const page of pages) {
        page.classList.remove('show');
    }
    toPage = toPage == null ? 'home' : toPage;
    console.log(toPage);
    document.querySelector(`[data-page="${toPage}"]`).classList.add('show');
    window.scrollTo(0, 0);
    clearError();
}

function openModal() {
    document.querySelector('.modal-shadow').classList.add('show');
    document.querySelector('.modal').classList.add('show');
    document.querySelector('.modal input[type="password"]').focus();
}

function closeModal() {
    document.querySelector('.modal-shadow').classList.remove('show');
    document.querySelector('.modal').classList.remove('show');
    document.querySelector('.modal input[type="password"]').value = "";
    clearError();
}

function showError() {
    document.querySelector('.modal-error').classList.add('show');
}

function clearError() {
    document.querySelector('.modal-error').classList.remove('show');
}

function validPassword() {
    if (document.querySelector('.modal input[type="password"]').value == '0904') {
        return true;
    } else {
        return false;
    }
}