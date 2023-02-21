const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені');
    } 

        const formData = new FormData(event.currentTarget);
        console.log(formData);
        event.currentTarget.reset();
    
        formData.forEach((value, name) => {
        console.log('name', name);
        console.log('value', value);
        });
}