const bouton1 = document.getElementById("btn1");
 
const bouton2 = document.getElementById("btn2");

const bouton3 = document.getElementById("btn3");


const chapterObj = {
  startObj: {
    subtitle: "Utlime mission",
    text: "Une journée comme les autres, alors que vous aviez seulement 6 ans, un incident est venu marquer votre vie à tous jamais. Votre père était l’un des meilleurs pilotes de chasse de l’armée des États-Unis et aussi votre héros. Il avait accepté une dernière mission en tant que chef d’escadron. Alors qu’il acheva sa mission, un f18 invisibles sur les radars fut son apparition et abattu son avion. À ce jour, votre but est de lui faire hommage en devenant le meilleur pilote de cette époque. Vous avez passé l’académie d’aviation avec brio. Après plusieurs années de tests et de petites missions de ravitaillements, vous êtes prêt à faire votre première mission d’ordre supérieur. Celle-ci risque d’être des plus dangereuses, puisqu’elle évoque d’aller détruire un laboratoire d’armes chimiques hautement surveiller. Plusieurs mois de préparations se sont découlés et le grand jour est arrivé. Êtes-vous prêt à faire cette mission de vie ou de mort?",
    img: "image/jet.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "COMMENCER",
        action: "btn.addEventListner("click", function(){ goToChapter(firstChapterObj)",
      
        
      },
      {
        text: "",
        action: "",
      }
    ],
  },

  firstChapterObj: {
    subtitle: "Cowboy en détresse",
    text: "Vous décollez du porte-avions en compagnie de votre meilleur ami Cowboy et deux autres pilotes d’expériences.  Tout à coup, deux jets ennemis font leur apparition et poursuivre Cowboy. Vous devez agir vite et faire un choix. Attendre que votre équipe vienne vous aider, agir seul et l’aider à les combattre où l’abonner et continuer la mission coûte que coûte. ",
    img: "image/jet2.jpg",
    options: [
      {
        text: "ATTENDRE",
        action: "goToChapter('firstDeathObj')",
      },
      {
        text: "AIDER",
        action: "goToChapter('secondChapterObj') function keyIsFound()",
      },
      {
        text: "ABANDONNER",
        action: "goToChapter('secondChapterObj')",
      },
    ],
  },

  firstDeathObj: {
    subtitle: "Attendre la fin",
    text: " Votre escadron de support n’est pas arrivé à temps et vous vous êtes également fait embusquer par l’ennemi ce qui vous a conduit à une mort certaine. ",
    img: "image/jet3.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: "",
      }
    ],
  },

  secondChapterObj: {
    subtitle: "Surprise explosive",
    text: "Arriver proche de l’objectif, vous apercevez des lance-missiles à têtes chercheuse positionnés en haut des montagnes risquant de vous anéantir en un clin d’œil. Vous n’avez plus beaucoup de temps et devez prendre une décision afin d’éviter le pire qu’elle vous traque. Prendre de la vitesse et tenter de les semer, passer en dessous de leur vision où aller le plus haut possible.",
    img: "image/jet4.jpg",
    options: [
      {
        text: "VITESSE",
        action: "goToChapter('secondDeathObj')",
      },
      {
        text: "BAS",
        action: "goToChapter'('thirdChapterObj')",
      },
      {
        text: "HAUT",
        action: "goToChapter('thirdDeathObj')",
      },
    ],
  },

  secondDeathObj: {
    subtitle: "Vitesse infernale",
    text: " Vous avez tenté de semer les missiles en prenant plus de vitesse, mais en vain. Les missiles sont conçus pour aller à une vitesse bien supérieure de celle d’un jet et vous en êtes mort instantanément.",
    img: "image/jet5.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: "",
      }
    ],
  },

  thirdDeathObj: {
    subtitle: "Vers le paradis",
    text: " Vous avez pris la décision de prendre le plus d’altitude possible afin d’éviter le radar, mais il parvient quand même à vous détecter et à mener à votre fin.",
    img: "image/jet6.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: "",
      }
    ],
  },

  thirdChapterObj: {
    subtitle: "Fini ou pas",
    text: "Le laboratoire est maintenant dans votre ligne de mire et vous larguer la bombe directement dessus mettant fin à la mission. Maintenant, le plus difficile reste de revenir sain et sauf. Malheureusement, cela tombe pour le pire quand un débris d’explosion vient vous heurter et vous donc force à vous éjecter. Arrivé sur terre ennemie, vous devez faire vite et trouver une solution afin de ne pas être repéré par les troupes déjà à votre recherche. Vous pouvez vous cacher dans la forêt en espérant qu’il ne vous retrouve pas où tenter d’atteindre le hangar plus loin appeler les renforts.",
    img: "image/jet7.jpg",
    options: [
      {
        text: "CACHER",
        action: "goToChapter('fourthDeathObj')",
      },
      {
        text: "",
        action: "",
      },
      {
        text: "HANGAR",
        action: "goToChapter('fourthChapterObj')",
      },
    ],
  },

  fourthDeathObj: {
    subtitle: "Cherche et trouve",
    text: " Vous décidez de vous cacher dans la forêt et d’attendre le bon moment pour envoler tirer un flaire gun et signaler votre présence à votre équipe. Malheureusement en tenter de signaler votre équipe de votre localisation, vous l’avez également donné à l’ennemi qui va à trouver en premier.",
    img: "image/jet8.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: "",
      }
    ],
  },

  fourthChapterObj: {
    subtitle: "Pile ou face",
    text: "Vous parvenez de justesse à passer la sécurité et à arriver au hangar. En revanche, l’explosion a endommagé le circuit électrique et la radio vous est inutile. En vous désespérant de votre situation, vous apercevez une sorte de couverture au fond de la pièce ressemblant à celle d’un jet. Vous enlevez la toile et découvrez un f16 de première génération. Elle est de piètre état et semble avoir volé pour la dernière fois il y a plus d’une vingtaine d’années. Sachant que vous êtes toujours recherché et que les chances de réussir à décoller avec l’engin sont minimums. Que feriez-vous? ",
    img: "image/jet9.jpg",
    options: [
      {
        text: "RESTER",
        action: "goToChapter('fifthDeathObj')",
      },
      {
        text: "VOLER",
        action: "function cowboyIsAlive()",
      },
      {
        text: "VOLER(Cowboy)",
        action: "goToChapter('sixthDeathObj')",
      },
    ],
  },

  fifthDeathObj: {
    subtitle: "Bon chien",
    text: " Vous ne prenez pas de chance de mourir au décollage vu l’état de l’avion et décider de rester dans le hangar et prier que vos alliés envoient des renforts. Peu de temps après, vous attendez des voix s'approcher du hangar. Leurs chiens renifleurs sentent votre présence et vous vous faites repérer. Ils vous tirent sur-le-champ et sans pitié.",
    img: "image/jet10.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: "",
      }
    ],
  },

  fifthChapterObj: {
    subtitle: "Mission Accomplie",
    text: "Bien que la piste était endommagée de l’explosion vous êtes parvenue à décoller. L’engin semblait toujours fonctionnel et vous vous diriger vers le QG. Passant être en sécurité, un jet ennemi réalisa que le f-16 n’était pas inscrit à l’un de leurs pilotes partis à sa trousse. Vois tenté de faire une manœuvre et vous vous retrouver en arrière de lui. Vous tentez de l’abattre, mais en appuyant sur le bouton de feu, rien n’y sort. Il est probablement brisé. Alors que le repris le dessus avait le feu vert pour tirer, un autre jet apparu. C’était Cowboy, il est revenu vous chercher. Il tira sur l’autre jet et le mit or nuire. Retourner à la base, vous vous êtes serré là et il dit avec un sourire ricaneur, maintenant on est Kit Maverick. ",
    img: "image/jet11.jpg",
    options: [
      {
        text: "",
        action: ".setVisible(false)",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: ".setVisible('false')",
      }
    ],
  },

  sixthDeathObj: {
    subtitle: "Regret",
    text: " Bien la piste était endommagée de l’explosion vous êtes parvenue à décoller. L’engin semblait toujours fonctionnel et vous vous diriger vers le QG. Passant être en sécurité, un jet ennemi réalisa que le f-16 n’était pas inscrit à l’un de leurs pilotes partis à sa trousse. Vois tenté de faire une manœuvre et vous vous retrouver en arrière de lui. Vous tentez de l’abattre, mais en appuyant sur le bouton de feu, rien n’y sort. Il est probablement brisé. Il pouvait se fier que sur lui-même, puisqu’il avait laissé sacrifier son ami Cowboy pour le bien de la mission. En pensant à un autre plan d’approche, le jet adverse réussit à traquer son avion avec la console et enclencha le bouton de rouge mettant fin à votre rêve ainsi qu’à votre vie.",
    img: "image/jet12.jpg",
    options: [
      {
        text: "",
        action: "",
      },
      {
        text: "RECOMMENCER",
        action: "goToChapter('startObj')",
      },
      {
        text: "",
        action: "",
      }
    ],
  },
};

function goToChapter(chapterName) {
  document.getElementById("sub").innerHTML = chapterObj[chapterName].subtitle;
  document.getElementById("txt").innerHTML = chapterObj[chapterName].text;
  document.getElementById("image").src = chapterObj[chapterName].img;
  document.getElementById("btn1").innerHTML = chapterObj[chapterName].options[1].text;
  document.getElementById("btn2").innerHTML = chapterObj[chapterName].options[1].text;
  document.getElementById("btn3").innerHTML = chapterObj[chapterName].options[2].text;
  console.log(`${chapterObj[chapterName].subtitle}`);
  console.log(`${chapterObj[chapterName].text}`);
  for (let index = 0; index < 3; index++) {
    const tab = chapterObj[chapterName].options[index];
    console.log(tab);
  }
  for (let index = 0; index < 3; index++) {
    const tab = chapterObj[chapterName].options[index].text;
    console.log(tab);
  }
  for (let index = 0; index < 3; index++) {
    const tab1 = chapterObj[chapterName].options[index].action;
    console.log(tab1);
  }
     
  bouton1.onclick = function() { goToChapter(chapterName)}
   //console.log(`${chapterObj[chapterName].options[0].text}`);
   //console.log(`${chapterObj[chapterName].options[0].action}`);
   //console.log(`${chapterObj[chapterName].options[1].text}`);
   //console.log(`${chapterObj[chapterName].options[1].action}`);
   //console.log(`${chapterObj[chapterName].options[2].text}`);
   //console.log(`${chapterObj[chapterName].options[2].action}`);
   };  
    
let keyFounded = false;

let changeStateKeyFounded = function() {
  keyFounded = true;

}

let isKeyFounded = function() {
  if (keyFounded) {
    goToChapter("fifthChapterObj");
  } else {
    goToChapter("sixthDeathObj");
  }
}





