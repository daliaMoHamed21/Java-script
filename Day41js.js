document.getElementById('loginBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'admin' && password === '123') {
      showMessage('Welcome');
    } else {
      showMessage('Not registered');
    }
  });
  
  function showMessage(message) {
    document.getElementById('message').textContent = message;
  }
  