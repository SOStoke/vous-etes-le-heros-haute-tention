const chapterObj = {
  
  start: {
    subtitle: "Utlime mission",
    text: "Vous parter en jet pour une mission",
    img: "laniel_kevin_PS2__582-324MOimagejet.jpg",
    options: [
      {
        text: "Vous vous êtes fait enroler par l'armée de l'air et on vous donne votre première mission",
        action: "goToChapter(firstChapterObj)",
      },
    ],
  },

  firstChapterObj: {
    subtitle: "Cowboy en détresse",
    text: "Cowboy est poursuivi par deux chasseurs ennemis",

    options: [
      {
        text: "attendre",
        action: "goToChapter(start)",
      },
      {
        text: "aider",
        action: "goToChapter(secondChapterObj)",
      },
      {
        text: "abandonner",
        action: "goToChapter(secondChapterObj)",
      },
    ],
  },

  secondChapterObj: {
    subtitle: "Missiles chercheurs",
    text: "On voie des lance-missiles au dessus des montagnes",
    options: [
      {
        text: "vitesse",
        action: "goToChapter(start)",
      },
      {
        text: "bas",
        action: "goToChapter(thirdChapterObj)",
      },
      {
        text: "haut",
        action: "goToChapter(start)",
      },
    ],
  },

  thirdChapterObj: {
    subtitle: "À découvert",
    text: "Des chasseurs partent à vos trousses",
    options: [
      {
        text: "enfuir",
        action: "goToChapter(start)",
      },
      {
        text: "combattre",
        action: "goToChapter(fourthChapterObj)",
      },
    ],
  },

  fourthChapterObj: {
    subtitle: "Territoire ennemi",
    text: "L'ennemi vous cherchent et veulent votre peau",
    options: [
      {
        text: "cacher",
        action: "goToChapter(start)",
      },
      {
        text: "hangar",
        action: "goToChapter(fifthChapterObj)",
      },
    ],
  },

  fifthChapterObj: {
    subtitle: "Espoir de survie",
    text: "Vous trouver un vieux jet possiblement fonctionelle",
    options: [
      {
        text: "rester",
        action: "goToChapter(start)",
      },
      {
        text: "voler",
        action: "goToChapter(sixthChapterObj)",
      },
    ],
  },

  sixthChapterObj: {
    subtitle: "Dernier soucie",
    text: "Alors que vous avez réussi avec justesse de décollé de la base, un dernier jet vous surprend",
    options: [
      {
        text: "regret",
        action: "goToChapter(start)",
      },
      {
        text: "fin",
        action: "goToChapter(start)",
      },
    ],
  },
};

function goToChapter(chapterName, chap) {
  console.log(`${chapterObj[chapterName].subtitle}`);
  console.log(`${chapterObj[chapterName].text}`);
}
