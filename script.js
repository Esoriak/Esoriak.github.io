
const btn1 = document.getElementById('navi1')
const btn2 = document.getElementById('navi2')
const btn3 = document.getElementById('navi3')


btn1.onclick = function() {
  document.getElementById('title').innerHTML = "Site de Photographe";
  document.getElementById('explain_project').innerHTML = " 1er projet (/3 semaines)<br/>Créer un site statique (HTML/CSS) / découvrir Git / Comprendre l'utilité de fonctionner en agile / Découvrir Bootstrap.<br/> Voici le résultat de notre Dream Team : "
  document.getElementById('link_repo').innerHTML =' <a href="https://github.com/tictac-co/Photographer-Website">Photographer-Website tictac-co</a>'
  document.getElementById('item1').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/P1Home.png" alt="Page Home">'
  document.getElementById('item2').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/P1modal1.png" alt="Modal Evenement Home">'
  document.getElementById('item3').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/P1Gallery2.png" alt="Gallery Photo Home">'
  document.getElementById('item4').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/P1B&Wmodal1.png" alt="Gallery Noir et Blanc">'
  document.getElementById('item5').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/P1TravelPage and Quotesfooter.png" alt="Footer">'
  document.getElementById('item6').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/Timeline1.png" alt="Timeline">'
  document.getElementById('item7').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/Timeline2.png" alt="timeline2">'
  document.getElementById('item8').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/Timeline3.png" alt="timeline3">'
  document.getElementById('item9').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/Timeline4.png" alt="timeline4">'
  document.getElementById('item10').innerHTML ='<img class="d-block w-100" src="assets/PhotographeAbdelKarim/ContactHim.png" alt="Contact Page">'
}

btn2.onclick = function() {
  document.getElementById('title').innerHTML = "Site fan de Chuck Norris";
  document.getElementById('explain_project').innerHTML = "2eme projet (/5 semaines) : <br/> Créer un site dynamique (CSS/JAVASCRIPT) / découvrir et utiliser REACT / Consommation d'une ou plusieurs API / Découpes des tâches plus précises / Utilisation d'un Backlog/Trello <br/><br/> Voici le résultat de ma Chuck-Team !"
  document.getElementById('link_repo').innerHTML =' <a href="https://github.com/Esoriak/Chuck-Norris-Will-Win">Un Chuck pour les gouverner tous</a>'
  document.getElementById('item1').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/ChuckHome.png" alt="page home">'
  document.getElementById('item2').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/pagehome2.png" alt="page home 2">'
  document.getElementById('item3').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/Page ChuckHome2.png" alt="page home 3">'
  document.getElementById('item4').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/PageChuckCarousel1.png" alt="carousel chuck">'
  document.getElementById('item5').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/Top5 ChuckFact.png" alt="top 5 chuck">'
  document.getElementById('item6').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/Page ShopChuck.png" alt="shop chuck">'
  document.getElementById('item7').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/pagefilmography.png" alt="filmography">'
  document.getElementById('item8').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/QuizzHome.png" alt="quizz Home">'
  document.getElementById('item9').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/ChuckQuizz1.png" alt="quizz2">'
  document.getElementById('item10').innerHTML ='<img class="d-block w-100" src="assets/ChuckNorris/ChuckQuizz2.png" alt="quizz3">'
}

btn3.onclick = function() {
  document.getElementById('title').innerHTML ="Projet Client - AGENDA EVENEMENTIEL pour Revus et Corrigés"
  document.getElementById('explain_project').innerHTML = "3eme projet (/8 semaines) :<br/> Une base de données / une partie Back-office / une authentification sécurisée / des formulaires pour être autonome sur le rajout d'évenement / un calendrier vue mensuelle + une vue hebdomadaire traitant les datas des formulaires.<br/> Méthode SCRUM / Backlog / Hackatons / découverte de Mysql et Node.Js(express)<br/><br/> Créer un agenda numérique évenementiel pour une société distribuant une revue papier sur le cinéma de patrimoine. Une plateforme était déjà existante sur wordpress mais il manquait la fonctionnalité de l'agenda à notre cliente dont le travail est principalement la création d'évènement autour du cinéma ( projection, sortie dvd, rétrospective, festivals etc ).<br/> Voici le résultat de la Chodar Team :"
  document.getElementById('link_repo').innerHTML =' <a href="#">Agenda Pour Revus et Corrigés</a>'
  document.getElementById('item1').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/VueHebdo.png" alt="vue calendrier hebdomadaire">'
  document.getElementById('item2').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/VueMonthly.png" alt="vue calendrier mensuel">'
  document.getElementById('item3').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/ConnexionBackOffice.png" alt="page de connexion">'
  document.getElementById('item4').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/BackofficeEvents.png" alt="page d\'accueil Evenement">'
  document.getElementById('item5').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/FormEvent.png" alt="Formulaire d\évenement">'
  document.getElementById('item6').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/ModeDeleteEvents.png" alt="Suppression d\'un évenement">'
  document.getElementById('item7').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/PageVideo.png" alt="page video">'
  document.getElementById('item8').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/PageFormCineRC.png" alt="Formulaire cinéma>'
  document.getElementById('item9').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/AddContactinMovie.png" alt="Formulaire contact de films">'
  document.getElementById('item10').innerHTML ='<img class="d-block w-100" src="assets/RevusetCorriges/SettingsMode.png" alt="Modal de réglages du calendrier">'

}

