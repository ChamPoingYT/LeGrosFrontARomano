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

// Gestion du bouton S'enregistrer
document.getElementById('registerButton').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Vérifier si le nom d'utilisateur est déjà pris
    let userExists = users.find(user => user.username === username);
    
    if (userExists) {
        document.getElementById('error-message').innerText = 'Nom d\'utilisateur déjà pris';
    } else {
        // Ajouter le nouvel utilisateur à la liste des utilisateurs
        users.push({ username: username, password: password });
        alert('Inscription réussie');
        window.location.href = 'index.html'; // Rediriger vers la page de connexion après inscription
    }
});


