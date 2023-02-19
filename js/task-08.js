const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені');
    } 

    if (email !== '' && password !== '') {
        const formData = new FormData(event.currentTarget);
        console.log(formData);
        event.currentTarget.reset();
    
        formData.forEach((value, name) => {
        console.log('name', name);
        console.log('value', value);
        });
    }
}