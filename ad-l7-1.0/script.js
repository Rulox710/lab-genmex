const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
function appendAlert(message, type) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');
  alertPlaceholder.append(wrapper);
}

const alertTrigger = document.getElementById('liveAlertBtn');
if(alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Esta es una alerta, ¡pero una buena!', 'success');
  });
}


const alertForm = document.getElementById('liveAlertForm');
function appendAlertForm(email, text, type) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>Email: ${email}</div>`,
    `   <div>Texto: ${text}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');
  alertForm.append(wrapper);
}

const formTrigger = document.getElementById('basicForm');
if(formTrigger) {
  formTrigger.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('exampleInputEmail').value;
    const text = document.getElementById('exampleInputTextarea').value;

    if(email !== '' && text !== '') appendAlertForm(email, text, 'success');
  });
}
