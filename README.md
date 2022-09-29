# Haute tention

[Dévoleoppement web - Projet vous êtes le héros](https://smnarnold.com/projets/vous-etes-le-heros)

**Genre**: Action, Réaliste, Militaire

**Inspiration**: [Top Gun](https://www.imdb.com/title/tt0092099/)

**Palette de couleurs**: [coolors.co](https://coolors.co/082b3d-fcf7ff-a663cc-ff331f-f4e04d)

## Diagramme
<img src="https://github.com/SOStoke/vous-etes-le-heros-haute-tention/blob/main/assets/Diagramme.jpg" />


const chapterObj = {
 
    start: {
     options: [
     {firstChapter: {text: "Vous vous êtes fait enroler par l'armée de l'air et on vous donne votre première mission", action: "goToChapter(firstChapterObj)"},},
     ], 
     subtitle: "Utlime mission",
     text: "Vous parter en jet pour une mission",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
   },
     
    firstChapterObj: {
     options: [
     {attendre: {text: "Il n'arrive pas à temps, donc Cowboy et vous mourez", action: "goToChapter(start)"},},
     {aider: {text: "Vous parvenez à repousser l'ennemi", action: "goToChapter(secondChapterObj)"},},
     {abandonner: {text: "Cowboy se fait éliminer", action: "goToChapter(secondChapterObj)"},},
     ],
     subtitle: "Cowboy en détresse",
     text: "Cowboy est poursuivi par deux chasseurs ennemis",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
   },
   
   
    secondChapterObj: {
     options: [
     {vitesse: {text: "Les missiles vous rattrapent sans efforts et vous mourez", action: "goToChapter(start)"},},
     {bas: {text: "Ils ne vous détectent pas et vous parvenez à détruire leur laboratoire", action: "goToChapter(thirdChapterObj)"},},
     {haut: {text: "Les missiles vous détectent toujours et vous mourez", action: "goToChapter(start)"},},
     ],
     subtitle: "Missiles chercheurs",
     text: "On voie des lance-missiles au dessus des montagnes",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
   },
   
    
   thirdChapterObj: {
     options: [
     {enfuir: {text: "Ils vont rattrapent et vous explosent", action: "goToChapter(start)"},},
     {combattre: {text: "Ils ne vous détectent pas et vous parvenez à détruire leur laboratoire", action: "goToChapter(fourthChapterObj)"},},
     ],
     subtitle: "À découvert",
     text: "Des chasseurs partent à vos trousses",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
   },
   
     
   fourthChapterObj: {
     options: [
     {cacher: {text: "Les chiens vous trouvent avant les renforts", action: "goToChapter(start)"},},
     {hangar: {text: "Dans la confusion vous parvenez à atteindre le hangar", action: "goToChapter(fifthChapterObj)"},},
     ],
     subtitle: "Territoire ennemi",
     text: "L'ennemi vous cherchent et veulent votre peau",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
   },
   
     
   fifthChapterObj: {
     options: [
     {rester: {text: "Vous hésitez et ils vous trouvent", action: "goToChapter(start)"},},
     {voler: {text: "Vous parvenez à le faire fonctionner, puis décollé", action: "goToChapter(sixthChapterObj)"},},
     ],
     subtitle: "Espoir de survie",
     text: "Vous trouver un vieux jet possiblement fonctionelle",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
   },
   
     
   sixthChapterObj: {
     options: [
     {regret: {text: "Vous n'avez pas sauver Cowboy, donc vous vous faites exploser", action: "goToChapter(start)"},},
     {fin: {text: "Vous avez sauvé Cowboy ,donc il vous sauve en retour. Mission réussi", action: "goToChapter(start)"},},
     ],
     subtitle: "Dernier soucie",
     text: "Alors que vous avez réussi avec justesse de décollé de la base, un dernier jet vous surprend",
     status: function(){
     return `${this.subtitle} : ${this.text}`
     },
    },
   }
   
   
    function goToChapter(chapterName) {
     console.log(`${chapterObj[chapterName].subtitle}`);
     console.log(`${chapterObj[chapterName].text}`);
     
   }
   
