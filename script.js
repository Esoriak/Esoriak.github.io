
const btn1 = document.getElementById('navi1')
const btn2 = document.getElementById('navi2')
const btn3 = document.getElementById('navi3')


btn1.onclick = function() {
  document.getElementById('title').innerHTML = "Site de Photographe";
  document.getElementById('explain_project').innerHTML = " 1er projet (/3 semaines)<br/>Créer un site statique (HTML/CSS) / découvrir Git / Comprendre l'utilité de fonctionner en agile / Découvrir Bootstrap.<br/> Voici le résultat de notre Dream Team : "
  document.getElementById('link_repo').innerHTML =' <a href="https://github.com/tictac-co/Photographer-Website">Photographer-Website tictac-co</a>'
  document.getElementById('item1').innerHTML ='<img class="d-block w-100" src="assets/PageHome1.png" alt="Page Home">'
  document.getElementById('item2').innerHTML ='<img class="d-block w-100" src="assets/PageHomeModal1.png" alt="Modal Evenement Home">'
  document.getElementById('item3').innerHTML ='<img class="d-block w-100" src="assets/PageHomeGallery.png" alt="Gallery Photo Home">'
  document.getElementById('item4').innerHTML ='<img class="d-block w-100" src="assets/PageNoiretBlanc.png" alt="Gallery Noir et Blanc">'
  document.getElementById('item5').innerHTML ='<img class="d-block w-100" src="assets/PageVoyage + footer.png" alt="Footer">'
  document.getElementById('item6').innerHTML ='<img class="d-block w-100" src="assets/Timeline.png" alt="Timeline">'
  document.getElementById('item7').innerHTML ='<img class="d-block w-100" src="assets/Contactme.png" alt="Contact Page">'
}

btn2.onclick = function() {
  document.getElementById('title').innerHTML = "Site fan de Chuck Norris";
  document.getElementById('explain_project').innerHTML = "2eme projet (/5 semaines) : <br/> Créer un site dynamique (CSS/JAVASCRIPT) / découvrir et utiliser REACT / Consommation d'une ou plusieurs API / Découpes des tâches plus précises / Utilisation d'un Backlog/Trello <br/><br/> Voici le résultat de ma Chuck-Team !"
  document.getElementById('link_repo').innerHTML =' <a href="https://github.com/Esoriak/Chuck-Norris-Will-Win">Un Chuck pour les gouverner tous</a>'
}

btn3.onclick = function() {
  document.getElementById('title').innerHTML ="Projet Client - AGENDA EVENEMENTIEL pour Revus et Corrigés"
  document.getElementById('explain_project').innerHTML = "3eme projet (/8 semaines) :<br/> Une base de données / une partie Back-office / une authentification sécurisée / des formulaires pour être autonome sur le rajout d'évenement / un calendrier vue mensuelle + une vue hebdomadaire traitant les datas des formulaires.<br/> Méthode SCRUM / Backlog / Hackatons / découverte de Mysql et Node.Js(express)<br/><br/> Créer un agenda numérique évenementiel pour une société distribuant une revue papier sur le cinéma de patrimoine. Une plateforme était déjà existante sur wordpress mais il manquait la fonctionnalité de l'agenda à notre cliente dont le travail est principalement la création d'évènement autour du cinéma ( projection, sortie dvd, rétrospective, festivals etc ).<br/> Voici le résultat de la Chodar Team :"
  document.getElementById('link_repo').innerHTML =' <a href="#">Agenda Pour Revus et Corrigés</a>'
}

