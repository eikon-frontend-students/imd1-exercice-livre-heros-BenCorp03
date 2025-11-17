const scenes = {
  teaser: {
    title: "Une nuit à Whitechapel",
    image: "images/Jumpscare.png",
    text: `
    Entrez dans la peau d'un jeune inspecteur, fraîchement arrivé à Londres
        et à qui est confiée l'affaire dont personne ne veut : un tueur en série
        multiplie les victimes et la piste, comme les corps, tout est froid.
        Saurez-vous éviter les pièges et rester sur vos gardes pour stopper ce
        terrible tueur ? Mais surtout, surviverez-vous à cette première nuit ?
    `,
    choices: [{ text: "Commencer", go: "introduction" }],
  },

  introduction: {
    title: "Une nuit à Whitechapel",
    image: "images/Introduction.png",
    text: `
La pluie tombe sans relâche sur Londres, comme si le ciel lui-même
      cherchait à laver les pavés des horreurs qui s’y sont imprimées. L’air est
      saturé d’humidité, d’odeurs de charbon brûlé et de misère. Dans les
      ruelles de Whitechapel, les becs de gaz peinent à percer le voile de
      brouillard, et chaque ombre semble dissimuler une menace.\n\n Vous êtes un·e
      jeune inspecteur·trice tout juste arrivé·e de la campagne. On vous a
      transféré·e dans la capitale pour renforcer une équipe épuisée, débordée,
      et surtout terrorisée par une série de meurtres qui ébranle la ville. Les
      journaux crient à l’incompétence, les foules grondent, et la police marche
      sur une corde raide. Les cadavres mutilés de femmes se succèdent, chacun
      laissant la même signature macabre : une cruauté chirurgicale, une rage
      méthodique. Dans les tavernes enfumées, on murmure le nom de l’assassin :
      Jack l’Éventreur.\n\n Ce soir, vous franchissez pour la première fois les
      portes du commissariat de Leman Street, vos bottes détrempées laissant des
      traces sombres sur le plancher. Le sergent de garde, un homme au visage
      buriné et au regard méfiant, vous jauge longuement avant de vous indiquer,
      d’un geste du menton, la direction du bureau du surintendant. Vous sentez
      déjà peser sur vos épaules la lourde responsabilité : pénétrer dans les
      entrailles de Londres, là où la peur est devenue une seconde peau.    `,
    choices: [
      { text: "Aller directement voir le surintendant", go: "surintendant" },
      { text: "Vous attarder dans la salle commune", go: "salle_commune" },
    ],
  },

  surintendant: {
    title: "Dans le bureau du surintendant",
    image: "images/surintendant.png",
    text: `
Vous franchissez la porte du bureau du surintendant. L’air est lourd,
      chargé de poussière et de tabac. Derrière un bureau massif, l’homme vous
      dévisage, ses yeux durs comme du fer.\n
      — Ah… vous voilà enfin. Sans piston, vous n’auriez jamais mis les pieds
      dans ce service, alors essayez au moins d’être ponctuel ! marmonne-t-il
      d’un ton sec. \n
      Il pousse un dossier vers vous, ses doigts frappant le bois du bureau avec
      impatience : \n
      — Écoutez-moi bien. Il y a deux directions à suivre. L’une vous mènera
      chez le médecin que nous avons déjà interrogé — un type qui a vu plus de
      cadavres que vous n’en verrez jamais – j’ai l’impression que nous avons
      manqué quelque chose. Ou alors, allez voir le Sergent Ronald Reap, il
      connaît chaque recoin de Whitechapel et il pourra vous éclairer sur les
      indices que vous ne trouverez pas seul·e. \n
      Il vous fixe quelques secondes, son regard perçant pesant sur vous :\n
      — Choisissez. Faites vite. La nuit tombe sur Whitechapel, et certaines
      vérités sont mieux cachées que découvertes.    `,
    choices: [
      { text: "Aller voir le médecin", go: "medecin" },
      { text: "Aller voir le vieux sergent", go: "sergent1" },
    ],
  },

  salle_commune: {
    title: "Salle commune du commissariat",
    image: "images/salle_commune.png",
    text: `
      L’odeur de tabac froid et de cuir humide emplit la pièce. Quelques
      policiers, fatigués et nerveux, discutent à voix basse autour d’une table
      jonchée de tasses de thé tiède et de journaux maculés d’encre. Quand vous
      entrez, les conversations s’interrompent brièvement — l’ombre d’un nouveau
      venu attire toujours la méfiance.\n\n
    
      En tendant l’oreille, vous percevez deux choses :\n
    
        Des rires amers : un vieux sergent raille la campagne, insinuant qu’un
        “bleu” comme vous ne tiendra pas une semaine dans Whitechapel. Ses
        paroles déclenchent quelques ricanements, mais derrière la moquerie se
        cache la peur.\n

        Un ton plus grave : deux jeunes constables discutent d’une découverte
        récente — une rumeur selon laquelle un médecin des quartiers pauvres
        aurait été interrogé, puis relâché faute de preuves. Certains pensent
        qu’il sait plus qu’il ne veut bien l’avouer.    `,
    choices: [
      { text: "Aller voir le surintendant", go: "sergent1" },
      { text: "Écouter les jeunes constables", go: "constables" },
    ],
  },

  constables: {
    title: "Écoute discrète",
    image: "images/constables.png",
    text: `
      L’un tape nerveusement du pied, l’autre froisse un journal entre ses
      mains. En tendant l’oreille, vous saisissez des bribes :\n
      — … un docteur de Whitechapel, Creep, interrogé puis relâché.\n 
      — Oui, mais certains disent qu’il garde des instruments qui pourraient…
      enfin, tu vois.\n\n 
      Ils vous remarquent, s’interrompent, puis finissent par hausser les
      épaules. L’un d’eux murmure, assez fort pour que vous l’entendiez :\n 
      — Si tu veux vraiment bosser, inspecteur, cherche donc du côté de
      Commercial Road. C’est là que ce médecin reçoit ses patients.    `,
    choices: [
      { text: "Creuser la piste du médecin", go: "medecin" },
      { text: "Aller voir le surintendant", go: "surintendant" },
    ],
  },

  sergent1: {
    title: "Sergent Reap",
    image: "images/Sergent1.png",
    text: `
    Un vieux sergent, moustache épaisse et pipe au coin des lèvres, vous
      interpelle le premier. Sa voix râpeuse perce le brouhaha :\n 
      — Tiens, voilà l’bleu. Espérons que t’aies l’estomac solide. On nous
      envoie de la chair fraîche comme on envoie un agneau à l’abattoir. Et en
      chair fraîche, je m’y connais.\n
      Il ricane, déclenchant quelques rires complices, puis se penche vers vous,
      plus grave :\n 
      — Tu veux des infos utiles ? File du côté de Hanbury Street. C’est là
      qu’on retrouve les filles, éventrées comme du gibier. Peut-être que tu y
      sentiras encore l’odeur du sang. Mais fais gaffe… Jack rôde toujours.
    `,
    choices: [
      { text: "Vous rendre à Hanbury Street", go: "hanbury_street" },
      { text: "Aller vers les jeunes constables", go: "constables" },
    ],
  },

  hanbury_street: {
    title: "Hanbury Street",
    image: "images/Hanbury_street.png",
    text: `
La pluie tombe en rideaux fins, trempant vos vêtements et transformant les
      pavés en miroirs noirs. Vous avancez dans Hanbury Street, cœur battant,
      chaque pas résonnant dans le silence oppressant des ruelles étroites. Les
      lampes à gaz projettent des halos tremblants et les silhouettes des
      passants disparaissent rapidement dans l’ombre.\n
 
      Vous interrogez quelques habitants : des visages fatigués, des regards
      fuyants, des murmures à peine audibles. Jack Creep, le nom du médecin
      revient dans de nombreuses bouches. Un nom qui sonne comme coupable pour
      les habitants. D’autres mentionnent la morgue où les corps sont déposés,
      un lieu réputé hanté, que personne n’ose approcher la nuit, ni même le
      jour d’ailleurs. Certains disent même y entendre régulièrement des cris.\n

      Le brouillard de Hanbury Street vous enveloppe, et chaque ruelle semble
      cacher un secret que vous êtes seul·e à vouloir percer.
  `,
    choices: [
      { text: "Se rendre à la morgue", go: "morgue" },
      { text: "Creuser la piste du médecin", go: "medecin" },
    ],
  },

  medecin: {
    title: "Commercial Road — Le cabinet du médecin",
    image: "images/medecin.png",
    text: `
La pluie a repris en claques régulières quand vous débouchez sur
      Commercial Road. Les réverbères jettent des auréoles tremblantes sur les
      pavés noirs. Le cabinet que vous cherchez est niché au-dessus d’une
      pharmacie — une petite plaque en laiton fatiguée : Dr Jack Creep, Médecin
      praticien. La vitrine est embuée ; à l’intérieur, une lampe à huile
      grésille et une silhouette s’affaire derrière un guéridon encombré
      d’instruments.\n

      En passant la porte, vous êtes frappé·e par deux impressions : l’odeur
      camphrée des remèdes et, plus discret, un relent métallique mêlé à celui
      du carbolic — comme si quelqu’un nettoyait des lames. Le Dr Creep est un
      homme long, pâle, aux cheveux collés par la pluie. Il a les mains tachées
      d’encre et de quelque chose qui pourrait être… séchée, mais il masque bien
      cela par des gestes assurés.\n

      Il vous accueille avec une politesse froide. Sa réputation est ambivalente
      : on le dit compétent mais étrange, homme de bien pour les pauvres ;
      d’autres chuchotent qu’il se déplace trop la nuit pour un médecin
      généraliste et qu’il a des instruments qu’on trouve rarement hors d’un
      bloc opératoire.\n

      Sur le bureau : un carnet chiffonné, des fiches de patients, une boîte
      fermée contenant des scalpels polis. Une photo déchirée d’une femme
      inconnue est coincée entre les pages d’un registre. Un nom revient,
      griffonné avec hésitation : Lodging House — 7 Hanbury.\n

      Le Dr Crowe vous regarde droit dans les yeux, l’air de jauger si vous êtes
      un enquêteur ou… un client. Il se racle la gorge avant de parler.\n
  
      — Je ne sais pas qui terrorise Whitechapel, inspecteur. Je fais ce que je
      peux pour soigner les pauvres. Si vous avez une accusation, parlez
      maintenant.\n
   
      Il y a quelque chose dans sa voix — ni tout à fait peur, ni tout à fait
      défi — et vous sentez que la partie ne fait que commencer. Mais vous avez
      deux approches possibles : foncer dans l’interrogatoire et le prendre au
      dépourvu, ou jouer la discrétion avec quelques questions basiques et le
      suivre une fois qu’il ferme boutique.    `,
    choices: [
      {
        text: "Confronter un discours incohérent",
        go: "confrontation_medecin",
      },
      { text: "Le suivre discrètement après son travail", go: "filature" },
    ],
  },

  confrontation_medecin: {
    title: "La confrontation",
    image: "images/Confrontation_medecin.png",
    text: `
Vous refermez la porte sans hésiter, et vous installez face au médecin. Le
      ton est direct, ferme, sans politesse superflue. Vous déroulez les faits :
      vos interrogations précédentes, sa présence nocturne, les instruments
      tranchants sur son bureau, la photo déchirée retrouvée, et la fiche
      portant le nom d’Hanbury Street.\n
 
      Le Dr Creep blêmit, puis se raidit. Son masque de convivialité se fissure,
      laissant poindre une nervosité malsaine.\n
 
      — Vous voulez des preuves ? dit-il d’une voix rauque. Regardez donc ce
      carnet. Oui, j’ai des patientes à Hanbury, des femmes sans-logis, des
      filles de la rue. Je leur offre des soins, parfois la nuit… parce qu’elles
      n’osent pas se montrer le jour. Si vous cherchez un coupable, cherchez
      parmi ceux qui les battent, pas parmi ceux qui tentent de les sauver.\n

      Sous la pression, il accepte à contre-cœur de vous montrer son registre.
      Les noms sont authentiques : adresses, symptômes, notes rapides. Mais un
      détail vous glace : une heure récurrente, toujours la même, notée à la
      hâte — et un nom qui revient plusieurs fois : Mr. Reed, employé à la
      morgue. Plus troublant encore : une adresse griffonnée, près de
      Spitalfields.\n
 
      En feuilletant plus loin, vous découvrez une page arrachée, et juste
      avant, un nom barré à la hâte. La photo déchirée correspond précisément à
      cette entrée. Le médecin tremble, s’embrouille, et un mensonge perce : il
      n’a pas dit la vérité sur l’endroit où il se trouvait la nuit dernière.\n
 
      Vous repartez avec une piste concrète : Mr. Reed, la morgue, et l’adresse
      de Spitalfields. Mais vous n’avez aucune certitude : Creep jure qu’il
      n’est qu’un témoin terrifié, et que l’accuser publiquement signerait sa
      mort. Est-il un allié fragile… ou un complice qui dissimule encore quelque
      chose ?    `,
    choices: [
      { text: "Creuser la piste de la morgue", go: "morgue" },
      { text: "S'informer sur l'adresse de Spitalfields", go: "adresse" },
    ],
  },

  filature: {
    title: "La filature",
    image: "images/Filature.png",
    text: `
Vous décidez de ne pas alerter le médecin. Vous attendez qu’il ferme la
      porte, le regardez quitter la boutique sous la pluie, et vous glissez à
      distance, enveloppé·e par la nuit et les capuches. Il descend Commercial
      Road à un pas rapide, passant devant des tavernes où les clients le
      reconnaissent et baissent les yeux.\n
 
      La filature est un art de patience et d’angles ; vous vous accrochez à son
      ombre, gardant les distances, vous faufilant de ruelle en ruelle. Mais
      Londres n’est qu’un labyrinthe humide : les passages, détours et
      embranchements s’ouvrent comme des pièges. À la croisée d’une ruelle
      étroite — une chicane d’ordures et de sacs d’égout — le Dr Crowe tourne
      brutalement à gauche. Vous suivez, prudent·e, en collant au mur.\n
   
      Puis, soudain, il n’y a plus personne en face. Le pavé mouillé renvoie
      l’écho de vos propres pas. Vous vous arrêtez, penchez la tête pour mieux
      entendre, et réalisez avec horreur que le médecin a disparu. Vous tournez
      l’angle suivant, le coeur battant, l’œil prêt à capter la moindre
      silhouette.    `,
    choices: [
      { text: "Suivre la ruelle sombre sur votre droite", go: "egorge" },
      {
        text: "Tenter de rejoindre la rue principale par la gauche",
        go: "accident",
      },
    ],
  },

  egorge: {
    title: "Une lame dans la nuit",
    image: "images/Egorgee.png",
    text: `
Il y a une odeur de fer, une lueur mouvante : un chiffonnier traîne un
      chariot. À l’entrée d’une impasse sombre — une venelle où les lanternes ne
      daignent pas briller — un mouvement. Trop tard. Une ombre surgit à votre
      gauche, un sifflement, une lame qui tranche l’air.\n
    
      Vous sentez une brûlure instantanée au niveau de la gorge. Le bruit des
      pas s’éloigne ; quelqu’un crie, puis tout devient sourd. Le monde se
      déroule en images brèves : la pluie qui dilue les gouttes de sang, la
      lanterne qui vacille, l’éclat d’un manteau qui s’éloigne. Vous vous
      affaissez sur les pavés froids, en comprenant que votre curiosité vous a
      coûté cher. Dans ces ruelles, la nuit se nourrit des imprudents.    `,
    choices: [{ text: "Recommencer", go: "introduction" }],
    isEnding: true,
  },

  accident: {
    title: "Le cocher",
    image: "images/Accident.png",
    text: `
Tu t’aventures dans le dédale des ruelles de Londres, persuadé qu’elles
      recèlent un raccourci vers la rue principale.\n
   
      Mais la ville semble conspirer contre toi. Les pavés suintent sous la
      pluie battante, le brouillard s’épaissit, s’enroule autour de tes jambes
      comme une brume vivante. À chaque pas, les murs se resserrent, les façades
      se déforment, noircies par des siècles de suie et de misère.\n
  
      Une odeur de charbon et de sang flotte dans l’air, lourde, suffocante. Tu
      crois entendre des murmures, étouffés dans la brume, comme les échos de
      ceux qui se sont perdus ici avant toi. Tes pas résonnent trop fort, comme
      si la ruelle elle-même amplifiait ton errance.\n

      Puis, dans un fracas d’acier et de sabots, la mort surgit. Une calèche
      lancée à toute vitesse fend le brouillard, tirée par deux chevaux aux yeux
      luisants, rouges comme des braises. Le cocher, silhouette sans visage, ne
      tente même pas de freiner.\n

      Tu n’as pas le temps de comprendre. Le choc te brise, ton corps s’écrase
      contre les pierres froides.\n

      Ton dernier souffle se perd dans la brume. Et dans ce silence, il te
      semble entendre un rire ancien, satisfait, comme si Londres elle-même
      avait réclamé ton âme.    `,
    choices: [{ text: "Recommencer", go: "introduction" }],
    isEnding: true,
  },

  adresse: {
    title: "La chambre de Spitalfields",
    image: "images/Adresse.png",
    text: `
 Le carnet du Dr Creep vous conduit dans une ruelle sordide, derrière un
      alignement de bâtisses humides où l’air empeste le charbon et la crasse.
      La chambre en question se trouve dans une pension décrépie, fréquentée par
      des journaliers, des vagabonds et quelques silhouettes que l’on devine
      compromises.\n
  
      Le propriétaire, un vieil homme à la barbe filasse, se montre méfiant à la
      vue de votre insigne. Après quelques mots fermes, il consent à vous ouvrir
      le registre des locataires. Les pages, jaunies par l’humidité, tremblent
      entre ses doigts.\n
  
      Vous découvrez une suite de noms anonymes… jusqu’à ce que l’un d’eux vous
      arrête net. \n
      « R. Reap ». \n
      La signature est maladroite, griffonnée.\n
   
      — Il paye en retard, marmonne le logeur, mal à l’aise. Toujours à venir et
      repartir à des heures étranges… Souvent couvert de boue… mais ici, on ne
      pose pas de questions.\n
   
      Vous inspectez la chambre : un matelas à même le sol, un coffre
      poussiéreux, quelques vêtements grossiers. Rien de probant — sauf une
      odeur métallique, persistante, comme si le sang lui-même avait imprégné
      les murs.\n
   
      L’ombre de Ronald Reap, votre vieux sergent, plane sur chaque détail.
      Était-ce sa chambre ? Un alias ? Ou un piège savamment orchestré ?\n
 
      En sortant de la pension, le brouillard semble plus épais encore, et un
      frisson vous parcourt l’échine. Si le nom du sergent est mêlé à ces lieux,
      alors l’affaire prend un tour plus personnel et plus dangereux que jamais.    `,
    choices: [
      { text: "Retourner voir le sergent Reap", go: "sergent2" },
      { text: "Tenter de recouper l'information à la morgue", go: "morgue" },
    ],
  },

  sergent2: {
    title: "Reap",
    image: "images/Sergent2.png",
    text: `
Vous poussez la porte du commissariat. L’air est humide, chargé de tabac
      et de pluie. Le vieux sergent est assis derrière son bureau, les rapports
      étalés devant lui. Il lève la tête, souriant d’un air bourru :\n
  
      — Ah, vous revoilà ! Alors, le médecin vous a parlé, hm ? Ces praticiens…
      toujours à étaler leur savoir. Pas vrai ?\n
 
      Vous prenez place, attentif·ve à chaque mot, chaque mouvement. Il tapote
      nerveusement du doigt sur un carnet, un tic que vous n’aviez pas remarqué
      la première fois. Puis il dit, presque en se corrigeant :\n
 
      — Vous savez… parfois, je me demande pourquoi ces affaires s’éternisent.
      Toutes ces filles… qui finissent mal. Si seulement on pouvait… euh… les
      empêcher… avant que ça n’arrive.\n
 
      Le ton est rapide, hésitant. L’air de rien, ses mots laissent une
      impression étrange. Quelque chose cloche : sa phrase semble trop…
      personnelle, trop concernée. Vous ne pouvez pas mettre le doigt dessus,
      mais votre intuition se crispe.\n
 
      Il repose ses mains sur le bureau, l’air de chercher vos yeux :\n
      — Enfin… je suppose que je m’inquiète trop. Vous avez entendu parler de la
      peur dans les rues, hein ? À Whitechapel, on ne sait jamais à qui faire
      confiance.\n

      Un frisson vous parcourt. Cette maladresse, ce petit lapsus… ce n’était
      pas juste un trait de caractère bourru.    `,
    choices: [
      { text: "Creuser cette intuition", go: "intuition" },
      { text: "Oublier et se diriger vers la morgue", go: "morgue" },
    ],
  },

  intuition: {
    title: "R. Reap",
    image: "images/Intuition.png",
    text: `
Vous décidez de rester, de ne pas vous contenter de sa première phrase.
      Vous vous penchez légèrement vers lui, adoptant un ton neutre mais curieux
      :\n
    
      — Sergent… vous avez parlé des filles… vous vouliez dire « empêcher avant
      que ça n’arrive » ?\n
  
      Son rire rauque couvre un instant la gravité de ses mots. Mais il rougit
      légèrement, tape du poing sur le bureau comme pour chasser l’embarras.\n
 
      — Oh, vous savez… je parle beaucoup quand je suis fatigué. Ces affaires…
      elles nous rongent tous. Parfois, on se surprend à rêver de… de justice
      plus rapide. Mais vous êtes nouveau ici, n’y prêtez pas trop attention.\n
 
      Vous sentez que quelque chose cloche. Son regard se détourne brièvement
      vers le carnet sur son bureau — un carnet qu’il ne consulte jamais
      normalement — avant de revenir vers vous. Ce simple geste vous intrigue :
      pourquoi vérifier un registre vide, en pleine conversation ?\n

      Le sergent reprend, d’un ton plus bas, presque complice :\n
      — Whitechapel… c’est un endroit où la nuit cache bien des secrets. Et
      certains d’entre nous ont appris à faire attention… à tout. Vous
      comprendrez vite.\n
 
      La maladresse de ses phrases, ses gestes furtifs, et ce ton presque
      suggestif réveillent en vous une intuition : il en sait plus qu’il ne dit,
      peut-être même trop.    `,
    choices: [
      { text: "L'accuser, c'est le tueur", go: "accusation" },
      { text: "Prendre le temps de le surveiller", go: "resolution" },
    ],
  },

  accusation: {
    title: '"Reap R. vous êtes coupable !"',
    image: "images/Accusation.png",
    text: `
Vous vous redressez, le cœur battant, et décidez d’aller droit au but :\n
    
      — Sergent, assez joué ! Je sais que quelque chose cloche. Une chambre à
      votre nom près de Spitalfields, des propos incorhérents, qui êtes vous
      vraiment dans cette affaire ?\n
 
      Le sergent se fige, ses yeux se durcissent. Il esquisse un sourire, un
      rictus ambigu qui vous glace le sang.\n
  
      — Oh… vous vous faites bien des idées, marmot… Vous croyez comprendre ce
      monde, mais vous êtes encore naïf.\n
  
      Vous avancez d’un pas, le défiant du regard. Il recule légèrement, les
      mains levées comme pour se protéger.\n
   — Je… je ne veux pas de problème, moi ! marmonne-t-il, hésitant.\n
      Mais votre provocation et son instinct de défense provoquent une réaction
      brutale, involontaire : il trébuche sur la chaise derrière lui. Le
      mouvement crée un choc contre la table, qui bascule en vous percutant
      violemment. Vous perdez l’équilibre, votre tête heurte le coin d’un
      meuble.\n

      Tout devient confus : douleur, goût métallique dans la bouche, vertiges.
      Le sergent s’immobilise, choqué par l’accident qu’il n’a jamais voulu
      provoquer.\n

      Vous tentez de parler, de crier… mais le monde se voile, vos sens
      s’éteignent peu à peu.    `,
    choices: [{ text: "Recommencer", go: "introduction" }],
    isEnding: true,
  },

  resolution: {
    title: "Est-ce bien Reap R. ?",
    image: "images/Resolution.png",
    text: `
    Vous décidez de ne pas révéler vos soupçons. Le vieux sergent semble
      toujours aussi bourru, mais certaines phrases, certains gestes vous
      restent en tête. Vous quittez le bureau, le cœur lourd mais silencieux.\n

      Dans les jours suivants, vous le suivez discrètement, guettant ses allées
      et venues dans les ruelles de Whitechapel, notant tout ce qui vous semble
      étrange. Parfois, il disparaît dans des coins sombres, comme pour
      rencontrer quelqu’un ; parfois, il s’éloigne simplement pour boire un
      verre ou écrire des rapports. Rien n’est jamais clair.\n

      Les indices sont contradictoires : un tic, un geste, une phrase
      maladroite, puis rien. Vous vous rendez compte que tout peut être
      interprété, et que le moindre mouvement de sa part pourrait être innocent
      ou coupable.\n
 
      Une nuit, alors que la pluie tombe drue et que le brouillard enveloppe les
      pavés, vous décidez de rentrer chez vous. Le sergent reste dans l’ombre
      derrière vous, indéchiffrable, et vous sentez que certaines vérités ne
      sont peut-être pas destinées à être découvertes.\n
 
      Vous survivez, mais le doute reste : le sergent est-il réellement Jack
      l’Éventreur, ou n’était-ce que votre imagination qui jouait avec vos
      soupçons ? Whitechapel continue de cracher sa peur, et vous savez
      seulement que la nuit et ses secrets sont encore intacts.
    `,
    choices: [{ text: "Recommencer", go: "introduction" }],
    isEnding: true,
  },

  morgue: {
    title: "Sur le chemin de la morgue",
    image: "images/Aller_morgue.png",
    text: `
 La nuit est lourde, le brouillard s’épaissit. À chaque pas, l’écho de vos
      bottes semble étouffé par le voile humide qui avale les réverbères. Vous
      croyez entendre derrière vous un bruit feutré… puis plus rien.\n
      Un raccourci s’offre à vous par une ruelle plus sombre mais plus rapide.     `,
    choices: [
      { text: "Emprunter le raccourci", go: "egorge" },
      { text: "Continuer par la rue principale", go: "grande_rue" },
    ],
  },

  grande_rue: {
    title: "La morgue",
    image: "images/Grande_rue.png",
    text: `
    Vous arrivez devant la morgue, un vieux bâtiment décrépi aux vitres
      embuées. L’air sent l’humidité, le métal et le désinfectant. La porte
      grince sinistrement lorsque vous l’ouvrez.\n
  
      À l’intérieur, le silence est oppressant. Les lampes vacillent et
      projettent des ombres inquiétantes sur les tables métalliques. Des corps
      étendus, recouverts de draps grisâtres, semblent vous observer dans la
      pénombre. L’odeur de la mort vous noue la gorge.\n
  
      Vous avancez entre les tables, essayant de repérer Mr. Reed ou des indices
      sur les cadavres. Vos pas résonnent, chaque bruit semblant exagéré dans
      cet espace clos. Vous sentez votre cœur battre plus fort, votre
      respiration s’accélère.\n
   
      Soudain, quelque chose surgit de l’ombre. Une main se tend, une lame
      brille sous la lumière tremblante. Vous tentez de reculer, mais le sol
      glissant trahit vos mouvements. Un coup brutal, un choc violent contre le
      métal… et tout s’éteint.\n
  
      Vous êtes tombé·e, la gorge tranchée, englouti·e par le silence macabre de
      la morgue.
    `,
    choices: [{ text: "Recommencer", go: "introduction" }],
    isEnding: true,
  },
};
