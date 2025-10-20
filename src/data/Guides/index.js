const monarchs = {
  Jewel: 'unknown',
  Lanerell: 'unknown',
  Xenora: 'unknown',
  Hiemelia: 'unknown',
  Artrell: 'Nunya-Bizness',
  Drow: 'Nunya-Bizness',
};

const message = (message) => {
  return { message: `${message}` };
};

export const areas = [
  {
    name: 'Summary',
    data: [
      message('Click on the area to the left to see the guide for the selected area.'),
      message('Content is approved by Admin but be sure to check out the MUD Rules.'),
      message('Check General > Areas for level specific areas.'),
      message('Check General > Maps for area related maps.'),
    ],
  },
  {
    name: 'Cabeiri',
    data: [message("Cabeiri is the newbie area. It's intended for players below ~level 10.")],
  },
  {
    name: 'Whitestorm',
    data: [message('Whitestorm is the second area new exporers should check out.')],
  },
  {
    name: 'Fenris',
    data: [
      message('Fenris includes the Forest of Deceoption, Marrdan, Trogrelin, Oz, and other areas.'),
      message('High Mortals and some Elites like to AOE in the Oz farms. Keep an eye out for other players.'),
    ],
  },
  {
    name: 'Wolvesdale',
    data: [
      message('Wolvesdale is a very small area.'),
      message('WARNING: If you go in to the crypt and fight Velomuzst, he has the potential to hit for > 1000 hp.'),
    ],
  },
  {
    name: 'Lanerell',
    data: [message('This is a Kingdom area.'), message(`Current Monarch is ${monarchs.Lanerell}`)],
  },
  {
    name: 'Jewel',
    data: [message('This is a Queendom area.'), message(`Current Monarch is ${monarchs.Jewel}`)],
  },
  {
    name: 'Hiemelia',
    data: [message('This is a Kingdom area.'), message(`Current Monarch is ${monarchs.Hiemelia}`)],
  },
  {
    name: 'Xenora',
    data: [
      message('This is a Kingdom area.'),
      message(`Current Monarch is ${monarchs.Xenora}`),
      message('The walls are a great place to get some coin. Prepare with multiple bags'),
    ],
  },
  {
    name: 'Drow',
    data: [message('This is a Queendom area.'), message('Stay out!'), message(`Current Monarch is ${monarchs.Drow}`)],
  },
  {
    name: 'Artrell',
    data: [message('This is a Queendom area.'), message(`Current Monarch is ${monarchs.Artrell}`)],
  },
];

/**
 * 
  {
    name: 'placeholder',
    data: [
        message(""),
    ]
  },
 */
