document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Logique de validation simplifiée pour l'exemple
    if (username === 'admin' && password === 'admin123') {
        alert('Connexion réussie');
        // Rediriger ou effectuer une action après une connexion réussie
    } else {
        document.getElementById('error-message').innerText = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
});
