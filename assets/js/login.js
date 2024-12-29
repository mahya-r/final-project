const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
// .......................



(function app() {
    const USERS_LIST = [
        { id: 1, userName: 'sample 1', pass: '12345' },
        { id: 2, userName: 'sample 2', pass: '12345' },
        { id: 3, userName: 'sample 3', pass: '12345' },
        { id: 4, userName: 'sample 4', pass: '12345' },
    ];


    const showModal = (message, redirectUrl) => {
        const modalMessage = document.getElementById('modal-message');
        if (modalMessage) {
            modalMessage.textContent = message;


            const modal = new bootstrap.Modal(document.getElementById('myModal'));


            document.getElementById('myModal').addEventListener('hidden.bs.modal', () => {

                setTimeout(() => {
                    window.location.href = redirectUrl;
                }, 2000);
            });

            modal.show();
        } else {
            console.error('modal-message element not found!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const user = USERS_LIST.filter(item => item.userName.toLowerCase() === username.value.toLowerCase().trim());

        if (user.length && password.value === user[0].pass) {
            console.log('login success');
            showModal("Hello, Welcome You were registered", './index.html');
            localStorage.setItem('user-name', JSON.stringify(user[0].userName));
        } else {
            console.log('invalid credentials');
            showModal("The password or email is incorrect", '');
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', handleSubmit);
        }
    });

})();

const showUserName = () => {
    const userName = JSON.parse(localStorage.getItem("user-name"));
    const userBtn = document.getElementById("user");
    if (userName) {
        userBtn.innerHTML = userName;
        userBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("user-name");
            window.location.reload();
        });
    }
};

(async function render() {
    showUserName();
})();


