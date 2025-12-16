// Validación del formulario de inicio de sesión
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const msg = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');

  function showError(text) {
    if (!msg) return;
    msg.textContent = text;
    msg.className = 'msg error';
    msg.style.display = 'block';
  }

  function hideMessage() {
    if (!msg) return;
    msg.textContent = '';
    msg.className = 'msg';
    msg.style.display = 'none';
  }

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideMessage();
    if (submitBtn) submitBtn.disabled = true;

    const user = (document.getElementById('username') || { value: '' }).value.trim();
    const pass = (document.getElementById('password') || { value: '' }).value.trim();

    // Validación solicitada: si usuario o contraseña están vacíos mostrar
    // exactamente 'por favor complete todos los campos' en color rojo.
    if (!user || !pass) {
      showError('por favor complete todos los campos');
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    // Si quieres, aquí iría la verificación de credenciales en el servidor.
    // Para demo local podemos aceptar 'admin' / '1234' opcionalmente.
    const VALID = { username: 'admin', password: '1234' };
    setTimeout(() => {
      if (user === VALID.username && pass === VALID.password) {
        if (msg) {
          msg.textContent = 'Inicio de sesión correcto. Bienvenido ' + user + '!';
          msg.className = 'msg success';
          msg.style.display = 'block';
        }
        // aquí podríamos redirigir o mostrar contenido
      } else {
        showError('Usuario o contraseña incorrectos.');
        if (submitBtn) submitBtn.disabled = false;
      }
    }, 300);
  });
});
