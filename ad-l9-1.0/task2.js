const form = document.getElementById('form1');

function getFormvalue() {
    const firstName = document.getElementsByName('fname')[0].value;
    const lastName = document.getElementsByName('lname')[0].value;

    console.log(`Nombre: ${firstName}\nApellido: ${lastName}`);
}
