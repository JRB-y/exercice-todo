
// On peut recuperer la valeur de TODO avec 'todo.value'
var todo = document.getElementById('todo');

// Bouton enregistrer
var save = document.getElementById('save');
// Ajout du listener à l'evenet click sur le bouton save
save.addEventListener('click', submit);

// List pour afficher les TODOs
var list = document.getElementById('list');

// fonction enregistrer un todo
function submit() {
  // on crée un element <li>
  var li = document.createElement("li");
  // on ecrit la valeur de todo dans le li 'innerHTML'
  li.innerHTML = todo.value;
  // on append (ajoute) le li dans la liste
  list.appendChild(li);
  // On vide le todo
  todo.value = "";

  // On ajout un evenement click au todo (pour supprimer) 
  li.addEventListener('click', remove);
}

// fonction remove elle s'execute quand on click sur le todo
function remove() {
  // le 'this' est toujours l'element sur lequel on a clicker
  list.removeChild(this)
}
