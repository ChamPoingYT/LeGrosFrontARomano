// Utilisateurs fictifs stockés en mémoire pour l'exemple
let users = [
    { username: 'admin', password: 'admin123' }
];

// Gestion de la soumission du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    let user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert('Connexion réussie');
        // Rediriger ou effectuer une action après une connexion réussie
    } else {
        document.getElementById('error-message').innerText = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
});

// Gestion de la soumission du formulaire d'inscription
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    
    let userExists = users.find(user => user.username === newUsername);
    
    if (userExists) {
        document.getElementById('signup-error-message').innerText = 'Nom d\'utilisateur déjà pris';
    } else {
        users.push({ username: newUsername, password: newPassword });
        alert('Inscription réussie');
        window.location.href = 'index.html'; // Rediriger vers la page de connexion après inscription
    }
});

