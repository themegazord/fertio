const form = document.getElementById('form');
const btn_navbar = document.getElementById('btn-navbar');
const clientName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('msg');

btn_navbar.addEventListener('click', e => {
  e.preventDefault();
  console.log(clientName.innerText + email.innerText + phone.innerText + msg.innerText)
  window.open("https://api.whatsapp.com/send?phone=5541996267118");
})

form.addEventListener('submit', e => {
  e.preventDefault();

  const fullMessage = encodeURI("Olá 😊.$Meu nome é *" + clientName.value + "* e fiquei interessado no seu produto.$✉️ = *" + email.value + "*.$📱 = *" + phone.value + "*.$💬 = *" + msg.value + "*");

  window.open("https://api.whatsapp.com/send?phone=5541996267118&text=" + fullMessage.replaceAll('$', '%0D'));
})