document.addEventListener('DOMContentLoaded',() => {
    const form  = document.getElementById('infoLogin');
    
    form.addEventListener('submit', (event) => {

        event.preventDefault();

        const Username = document.getElementById('Username').value;
        const password = document.getElementById('password').value;

        alert(
        `informasi login anda:\n\n` +
        `Nama : ${Username}\n` +
        `Password : ${password}`
        );
    });
});
