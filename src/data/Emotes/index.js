export const emotes = [
  {
    name: 'ack',
    undirected: {
      theirmsg: '<name> acks',
      mymsg: 'You ack',
    },
  },
  {
    name: 'accuse',
    prepositions: 'of',
    noargs: {
      theirmsg: '<name> looks around the room accusingly',
      mymsg: 'You look around the room accusingly',
    },
    undirected: {
      theirmsg: '<name> accuses <adverb>',
      mymsg: 'You accuse <adverb>',
    },
    directed: {
      theirmsg: '<name> accuses <target> of <adverb>',
      mymsg: 'You accuse <target> of <adverb>',
    },
  },
  {
    name: 'apologize',
    prepositions: 'to',
    // adverbs:
    // 'profusely, happily, sadly, reservedly, carefully, slowly, perfunctorily, curtly, visciously, sulkily, drunkenly, unhappily, professionally, pompously, wholeheartedly, partially, wearily, fishily, facetiously, unnecessarily, spontaneously, twice, thoroughly, humbly',
    undirected: {
      theirmsg: '<name> apologizes <adverb>',
      mymsg: 'You apologize <adverb>',
    },
    directed: {
      theirmsg: '<name> apologizes <adverb> to <target>',
      mymsg: 'You apologize <adverb> to <target>',
    },
  },
  {
    name: 'applaud',
    // adverbs: 'wholeheartedly, loudly, softly, vaguely, briefly',
    undirected: {
      theirmsg: '<name> applauds <adverb>',
      mymsg: 'You applaud <adverb>',
    },
    directed: {
      theirmsg: '<name> applauds <target> <adverb>',
      mymsg: 'You applaud <target> <adverb>',
    },
  },
  {
    name: 'agree',
    noargs: {
      theirmsg: '<name> agrees wholeheartedly',
      mymsg: 'You agree wholeheartedly',
    },
    directed: {
      theirmsg: '<name> agrees with <target> wholeheartedly',
      mymsg: 'You agree with <target> wholeheartedly',
    },
  },
  {
    name: 'arghh',
    undirected: {
      theirmsg: '<name> ARGHHs at everyone like an old swashbuckler',
      mymsg: "You ARGHH like an ol' swashbuckler",
    },
  },
  {
    name: 'assimilate',
    adverbs: 'cheerfully, reluctantly',
    undirected: {
      theirmsg: '<name> assimilates species <adverb> like a Borg',
      mymsg: 'You assimilate species <adverb> like a Borg',
    },
    directed: {
      theirmsg: '<name> assimilates <target> <adverb>',
      mymsg: 'You assimilate <target> <adverb>',
    },
  },
  {
    name: 'bark',
    prepositions: 'at',
    adverbs: 'happily',
    undirected: {
      theirmsg: '<name> <adverb> barks like a dog',
      mymsg: 'You <adverb> bark like a dog',
    },
    directed: {
      theirmsg: '<name> barks <adverb> at <target>',
      mymsg: 'You bark <adverb> at <target>',
    },
  },
  {
    name: 'bat',
    prepositions: 'at',
    adverbs: 'innocently',
    undirected: {
      theirmsg: '<name> bats <pronoun> eyelashes innocently',
      mymsg: 'You bat your eyelashes innocently',
    },
    directed: {
      theirmsg: '<name> bats <pronoun> eyelashes at <target>',
      mymsg: 'You bat your eyelashes at <target>',
    },
  },
  {
    name: 'beam',
    prepositions: 'at',
    // adverbs: 'brightly, admiringly, strangely, hapilly, ecstatically, fishily, like a train',
    undirected: {
      theirmsg: '<name> beams <adverb>',
      mymsg: 'You beam <adverb>',
    },
    directed: {
      theirmsg: '<name> beams <adverb> at <target>',
      mymsg: 'You beam <adverb> at <target>',
    },
  },
  {
    name: 'beep',
    prepositions: 'at',
    adverbs: 'impatiently',
    undirected: {
      theirmsg: '<name> <adverb> goes BEEP, BEEP!!!',
      mymsg: 'You <adverb> go BEEP, BEEP!!!',
    },
    directed: {
      theirmsg: '<name> <adverb> goes BEEP, BEEPS!!! at <target>',
      mymsg: 'You <adverb> go BEEP, BEEP!!! at <target>',
    },
  },
  {
    name: 'beg',
    prepositions: 'like a',
    nouns:
      'dog, cat, chicken, cow, large bear, poodle, chihuahua, train, beggar, noble man, lassie, labrador, german shepard, cannibal, chimpanzee, librarian, fish, dolphin, tokzic, banshi, bloodhound, husky, wolf, dingo, alsation',
    noargs: {
      theirmsg: '<name> gets down and begs',
      mymsg: 'You beg',
    },
    undirected: {
      theirmsg: '<name> begs like a <noun> puppy',
      mymsg: 'You beg like a <noun> puppy',
    },
    directed: {
      theirmsg: '<name> begs <target> like a puppy',
      mymsg: 'You beg <target> like a puppy',
    },
  },
  {
    name: 'bing',
    prepositions: 'at',
    adverbs:
      'happily, sadly, joyfully, sagely, knowingly, quickly, loudly, carefully, balefully, excitedly, nervously, brightly, uncertainly',
    undirected: {
      theirmsg: '<name> bings <adverb>',
      mymsg: 'You bing <adverb>',
    },
    directed: {
      theirmsg: '<name> bings <adverb> at <target>',
      mymsg: 'You bing <adverb> at <target>',
    },
  },
  {
    name: 'bird',
    directed: {
      theirmsg: '<name> raises <pronoun> middle finger and gives <target> the bird',
      mymsg: 'You raise your middle finger and give <target> the bird',
    },
  },
  // {
  //   name: 'bite',
  //   undirected: {
  //     theirmsg: '<name> bites $OB_FOO',
  //     mymsg: 'You bite yourself',
  //   },
  //   directed: {
  //     adverbs:
  //       'hard, nastily, carefuly, politely, fishily, lovingly, refreshingly, happily, like a train, pointlessly, objectively, sulkily, gently, brightly, excitedly, uncertainly, like a dog, wolfishly, mercilessly, ruthlessly, softly, sweetly, profesionally, hungrily, mischeviously, ankles, arm, leg, casually, nose, ear, toe, finger',
  //     theirmsg: '<name> bites <target> <adverb>',
  //     mymsg: 'You bite <target> <adverb>',
  //   },
  // },
  {
    name: 'bleed',
    noargs: {
      theirmsg: '<name> bleeds',
      mymsg: 'You bleed',
    },
    undirected: {
      adverbs: 'heart, leg, arm, head, ear, nose',
      theirmsg: '<name> <adverb> bleeds',
      mymsg: 'Your <adverb> bleeds',
    },
  },
  {
    name: 'blink',
    prepositions: 'at',
    undirected: {
      theirmsg: '<name> <adverb> blinks in disbelief',
      mymsg: 'You <adverb> blink in disbelief',
    },
    directed: {
      theirmsg: '<name> <adverb> blinks at <target> in disbelief',
      mymsg: 'You <adverb> blink at <target> in disbelief',
    },
  },
  {
    name: 'blush',
    // adverbs: 'in embarassment, redly, slightly, worriedly',
    undirected: {
      theirmsg: '<name> blushes <adverb>',
      mymsg: 'You blush <adverb>',
    },
  },
  {
    name: 'boggle',
    prepositions: 'at',
    noargs: {
      theirmsg: '<name> boggles at the concept',
      mymsg: 'You boggle at the concept',
    },
    undirected: {
      theirmsg: '<name> boggles at <noun>',
      mymsg: 'You boggle at <noun>',
    },
  },
  {
    name: 'bonk',
    undirected: {
      theirmsg: '<name> bonks <target>',
      mymsg: 'You bonk yourself on the head',
    },
    directed: {
      theirmsg: '<name> bonks <target> on the head',
      mymsg: 'You bonk <target> on the head',
    },
  },
  {
    name: 'booger',
    prepositions: 'at',
    undirected: {
      theirmsg: '<name> has a booger hanging from <pronoun> nose',
      mymsg: 'You have a booger hanging from your nose',
    },
    directed: {
      theirmsg: '<name> picks a booger and flicks it at <target>',
      mymsg: 'You flick your boogers at <target>',
    },
  },
  {
    name: 'boogie',
    noargs: {
      mymsg: 'You boogie with your bad self',
      theirmsg: '<name> boogies with <pronoun> bad self',
    },
    directed: {
      mymsg: 'You get down and boogie with <target>',
      theirmsg: '<name> gets down and boogies with <target>',
    },
  },
  {
    name: 'bop',
    undirected: {
      theirmsg: '<name> bops about happily',
      mymsg: 'You bop about happily',
    },
    directed: {
      theirmsg: '<name> bops <target> happily',
      mymsg: 'You bop <target> happily',
    },
  },
  {
    name: 'bounce',
    noargs: {
      mymsg: 'You bounce up and down',
      theirmsg: '<name> bounces',
    },
    directed: {
      mymsg: 'You bounce on top of <target>',
      theirmsg: '<name> bounces on top of <target>',
    },
  },
  {
    name: 'breathe',
    undirected: {
      // adverbs: 'quickly, seductively, painfully, nastily, slowly, once, heavily, carefully, heatedly',
      theirmsg: '<name> breathes <adverb>',
      mymsg: 'You breathe <adverb>',
    },
  },
  {
    name: 'burp',
    undirected: {
      // adverbs: 'disgustingly, faintly, loudly, rudely',
      theirmsg: '<name> burps <adverb>',
      mymsg: 'You burp <adverb>',
    },
  },
  {
    name: 'bow',
    prepositions: 'before',
    adverbs: 'solemnly, deeply, formally',
    noargs: {
      mymsg: 'You bow respectfully',
      theirmsg: '<name> bows respectfully',
    },
    undirected: {
      mymsg: 'You bow <adverb>',
      theirmsg: '<name> bow <adverb>',
    },
    directed: {
      mymsg: 'You bow <adverb> before <target> ',
      theirmsg: '<name> bows <adverb> before <target>',
    },
  },
  {
    name: 'burnp',
    nouns:
      'hair, leg, arm, nose, teeth, frog, carpet, net lag, fish, invis, bed, ego, eyes, house, furniture, tongue, keyboard, brain, code, ideas, hopes, dreams, cat, personality, desires, beliefs',
    noargs: {
      theirmsg: '<name> sets fire to <target>',
      mymsg: 'You set fire to yourself',
    },
    directed: {
      theirmsg: '<name> sets fire to <target> <noun>',
      mymsg: 'You set fire to <target> <noun>',
    },
  },
  {
    name: 'brag',
    noargs: {
      mymsg: 'You brag proudly about your various accomplishments. Everyone seems to believe you',
      theirmsg: '<name> brags about <pronoun> various accomplishments. There is nooooooooo way',
    },
    directed: {
      mymsg: 'You brag to <target> about your various accomplishments',
      theirmsg: '<name> brags to <target> about <pronoun> various accomplishments',
    },
  },
  {
    name: 'cackle',
    noargs: {
      theirmsg: '<name> cackles demonically',
      mymsg: 'You cackle demonically',
    },
    undirected: {
      adverbs: 'with glee, maniacaly, mischeviously, nastily, depairingly, womblely, backwards',
      theirmsg: '<name> cackles <adverb>',
      mymsg: 'You cackle <adverb>',
    },
  },
  {
    name: 'calm',
    prepositions: 'down',
    undirected: {
      theirmsg: '<name> calms down',
      mymsg: 'You calm down',
    },
    directed: {
      theirmsg: '<name> calms <target> down',
      mymsg: 'You calm <target> down',
    },
  },
  {
    name: 'caper',
    prepositions: 'around',
    nouns:
      'fool, chicken, womble, jester, bimbo, blonde, sulam, seductress, eager person, vivacious person, madman, madwoman, madperson, frog on the run, happy chap, polite gentleperson, woman, cheery',
    noargs: {
      theirmsg: '<name> capers around madly',
      mymsg: 'You caper around madly',
    },
    undirected: {
      theirmsg: '<name> capers around like a <noun>',
      mymsg: 'You caper around like a <noun>',
    },
  },
  {
    name: 'caress',
    adverbs:
      'gently, strangely, violently, firmly, seductively, suggestively, slightly, sensually, reluctantly, politely, lovingly, vigorously, eagerly, vivaciously',
    directed: {
      theirmsg: '<name> caresses <target> <adverb>',
      mymsg: 'You caress <target> <adverb>',
    },
  },
  {
    name: 'cartwheel',
    adverbs: 'excitedly, happily, carefully, slowly, joyfully, unsteadily, sideways, absentmindedly',
    directed: {
      mymsg: 'You cartwheel <adverb> around <target>',
      theirmsg: '<name> cartwheel <adverb> around <target>',
    },
    undirected: {
      mymsg: 'You do a cartwheel <adverb>',
      theirmsg: '<name> does a cartwheel <adverb>',
    },
  },
  {
    name: 'caw',
    prepositions: 'at',
    adverbs: 'happily, hysterically, in anger, anxiously, annoyingly, while pecking for food',
    undirected: {
      theirmsg: '<name> caws <adverb>',
      mymsg: 'You caw <adverb>',
    },
    directed: {
      theirmsg: '<name> CAWS CAWS CAWS at <target> <adverb>',
      mymsg: 'You CAWS CAWS CAWS at <target> <adverb>',
    },
  },
  {
    name: 'cheer',
    adverbs:
      'enthusiastically, excitedly, quietly, calmly, carefully, politely, wildly, oddly, unconvincingly, happily, slightly, up',
    undirected: {
      theirmsg: '<name> cheers <adverb>',
      mymsg: 'You cheer <adverb>',
    },
    directed: {
      theirmsg: '<name> cheers <adverb> for <target>',
      mymsg: 'You cheer <adverb> for <target>',
    },
  },
  {
    name: 'chirp',
    prepositions: 'at',
    adverbs: 'happily, in anger, anxiously, annoyingly, while pecking for food',
    undirected: {
      theirmsg: '<name> chirps <adverb>',
      mymsg: 'You chirp <adverb>',
    },
    directed: {
      theirmsg: '<name> chirps chirps chirps at <target> <adverb>',
      mymsg: 'You chirp chirp chirp at <target> <adverb>',
    },
  },
  {
    name: 'choke',
    noargs: {
      theirmsg: '<name> chokes',
      mymsg: 'You choke',
    },
    directed: {
      theirmsg: '<name> chokes <target>',
      mymsg: 'You choke <target>',
    },
  },
  {
    name: 'chortle',
    noargs: {
      mymsg: 'You chortle merrily',
      theirmsg: '<name> chortles merrily',
    },
    directed: {
      mymsg: 'You chortle merrily at <target>',
      theirmsg: '<name> <adverb> chortles merrily at <target>',
    },
  },
  {
    name: 'chuckle',
    undirected: {
      adverbs: 'politely, nastily, demonically',
      theirmsg: '<name> chuckles <adverb>',
      mymsg: 'You chuckle <adverb>',
    },
  },
  {
    name: 'clap',
    adverbs: 'briefly, enthusiastically, excitedly, wildly, happily, slightly',
    undirected: {
      theirmsg: '<name> claps <adverb>',
      mymsg: 'You clap <adverb>',
    },
    directed: {
      theirmsg: '<name> claps <adverb> for <target>',
      mymsg: 'You clap <adverb> for <target>',
    },
  },
  {
    name: 'comb',
    noargs: {
      mymsg: 'You comb your hair',
      theirmsg: '<name> combs <pronoun> hair',
    },
    directed: {
      mymsg: 'You comb <target> hair',
      theirmsg: '<name> combs <target> hair',
    },
  },
  {
    name: 'comfort',
    directed: {
      adverbs:
        'sincerely, wholeheartly, mischeviously, halfheartedly, vaguely, eagerly, completely, lovingly, gently, tenderly, sadly, in earnest, twice, anxiously, carefully, delicately',
      theirmsg: '<name> comforts <target> <adverb>',
      mymsg: 'You comfort <target> <adverb>',
    },
  },
  {
    name: 'confess',
    noargs: {
      theirmsg: '<name> confesses <pronoun> sins',
      mymsg: 'You confess your sins',
    },
    directed: {
      theirmsg: '<name> confesses <pronoun> sins to <target>',
      mymsg: 'You confess your sins to <target>',
    },
  },
  {
    name: 'congratulate',
    directed: {
      adverbs: 'heartily, warmly',
      theirmsg: '<name> congratulates <target> <adverb>',
      mymsg: 'You congratulate <target> <adverb>',
    },
    noargs: {
      theirmsg: '<name> congratulates everyone',
      mymsg: 'You congratulate everyone',
    },
  },
  {
    name: 'cootie',
    noargs: {
      mymsg: 'You announce you have cooties',
      theirmsg: '<name> announces <pronoun> has cooties',
    },
    directed: {
      mymsg: 'You give <target> the cooties',
      theirmsg: '<name> gives <target> cooties',
    },
  },
  {
    name: 'cough',
    undirected: {
      adverbs: 'happily, loudly, quietly, excitedly, disgustingly, sadly, pinkly',
      theirmsg: '<name> coughs <adverb>',
      mymsg: 'You cough <adverb>',
    },
  },
  {
    name: 'cower',
    undirected: {
      adverbs: 'in a corner, fearfully, slyly, shyly, in shame, nastily',
      theirmsg: '<name> cowers <adverb>',
      mymsg: 'You cower <adverb>',
    },
  },
  {
    name: 'crack',
    undirected: {
      theirmsg: '<name> cracks <pronoun> knuckles',
      mymsg: 'You crack your knuckles',
    },
    directed: {
      theirmsg: '<name> finally cracks and confesses all <pronoun> feelings for <target>',
      mymsg: 'You finally crack and confess all your feelings for <target>',
    },
  },
  {
    name: 'cringe',
    adverbs: 'terror, embarassment',
    undirected: {
      theirmsg: '<name> cringes in <adverb>',
      mymsg: 'You cringe in <adverb>',
    },
  },
  {
    name: 'croak',
    noargs: {
      theirmsg: '<name> croaks loudly',
      mymsg: 'You croak loudly',
    },
  },
  {
    name: 'cross',
    nouns: 'fingers, legs, eyes, nose',
    undirected: {
      theirmsg: '<name> crosses <pronoun> <noun>',
      mymsg: 'You cross your <noun>',
    },
  },
  {
    name: 'cry',
    noargs: {
      theirmsg: '<name> cries mournfully',
      mymsg: 'You cry mournfully',
    },
  },
  {
    name: 'cuddle',
    directed: {
      theirmsg: '<name> cuddles <target>',
      mymsg: 'You cuddle <target>',
    },
  },
  {
    name: 'cursep',
    noargs: {
      mymsg: 'You mumble bad words to yourself',
      theirmsg: '<name> mumbles some bad words',
    },
    directed: {
      mymsg: 'You mumble bad words about <target>',
      theirmsg: '<name> mumbles bad words about <target>',
    },
  },
  {
    name: 'curtsey',
    undirected: {
      theirmsg: '<name> curtseys gracefully',
      mymsg: 'You curtsey gracefully',
    },
    directed: {
      theirmsg: '<name> curtseys gracefully to <target>',
      mymsg: 'You curtsey gracefully to <target>',
    },
  },
  {
    name: 'dance',
    noargs: {
      mymsg: 'You sweep yourself across the dance floor',
      theirmsg: '<name> sweeps <target> across the dance floor',
    },
    directed: {
      theirmsg: '<name> sweeps <target> across the dance floor',
      mymsg: 'You sweep <target> across the dance floor',
    },
  },
  {
    name: 'dart',
    noargs: {
      theirmsg: '<name> darts back and forth',
      mymsg: 'You dart back and forth',
    },
  },
  {
    name: 'daydream',
    noargs: {
      theirmsg: '<name> daydreams',
      mymsg: 'You daydream',
    },
    // undirected: {
    //   theirmsg: '<name> daydreams <adverb>',
    //   mymsg: 'You daydream <adverb>',
    // },
  },
  {
    name: 'dip',
    prepositions: 'at',
    undirected: {
      theirmsg: '<name> dips <pronoun> invisible friend',
      mymsg: 'You dip your invisable friend',
    },
    directed: {
      theirmsg: '<name> dips <target>',
      mymsg: 'You dip <target>',
    },
  },
  {
    name: 'doh',
    noargs: {
      theirmsg: '<name> says: doh!',
      mymsg: 'You say: doh!',
    },
  },
  {
    name: 'drool',
    noargs: {
      theirmsg: '<name> messily drools all over the place',
      mymsg: 'You start to drool',
    },
    directed: {
      theirmsg: '<name> drools all over <target>',
      mymsg: 'You drool all over <target>',
    },
  },
  {
    name: 'drum',
    undirected: {
      theirmsg: '<name> drums <pronoun> chest like King-Kong',
      mymsg: 'You drum your chest like King-Kong',
    },
    directed: {
      theirmsg: '<name> drums on top of <target> head',
      mymsg: 'You drum on top of <target> head',
    },
  },
  {
    name: 'duck',
    noargs: {
      theirmsg: '<name> ducks out of the way',
      mymsg: 'You duck out of the way',
    },
    directed: {
      theirmsg: '<name> ducks behind <target>',
      mymsg: 'You duck behind <target>',
    },
  },
  {
    name: 'duh',
    noargs: {
      theirmsg: '<name> duhs',
      mymsg: 'You duh',
    },
  },
  {
    name: 'eek',
    prepositions: 'at',
    undirected: {
      theirmsg: '<name> eeks!',
      mymsg: 'You eek!',
    },
    directed: {
      theirmsg: '<name> eeks! at <target>',
      mymsg: 'You eek! at <target>',
    },
  },
  {
    name: 'eep',
    undirected: {
      theirmsg: '<name> eeps',
      mymsg: 'You eep',
    },
  },
  {
    name: 'eye',
    directed: {
      theirmsg: '<name> eyes <target> over',
      mymsg: 'You eye <target> over',
    },
  },
  {
    name: 'expect',
    directed: {
      theirmsg: '<name> looks expectantly at <target>',
      mymsg: 'You look expectantly at <target>',
    },
  },
  {
    name: 'explode',
    noargs: {
      theirmsg: '<name> explodes into thousands of tiny pieces',
      mymsg: 'You explode into thousands of tiny pieces',
    },
  },
  {
    name: 'faint',
    undirected: {
      adverbs: 'tiredly, out of boredom, for the heck of it',
      theirmsg: '<name> faints <adverb>',
      mymsg: 'You faint <adverb>',
    },
    directed: {
      theirmsg: '<name> faints on <target>',
      mymsg: 'You faint on <target>',
    },
  },
  {
    name: 'fart',
    noargs: {
      theirmsg: '<name> farts',
      mymsg: 'You fart',
    },
  },
  {
    name: 'fiddle',
    noargs: {
      theirmsg: '<name> fiddles around',
      mymsg: 'You fiddle around',
    },
  },
  {
    name: 'fidget',
    undirected: {
      theirmsg: '<name> fidgets anxiously',
      mymsg: 'You fidget anxiously',
    },
  },
  {
    name: 'flap',
    nouns: 'ears, arms, wings, eyelashes',
    undirected: {
      theirmsg: '<name> flaps <pronoun> <noun>',
      mymsg: 'You flap your <noun>',
    },
  },
  {
    name: 'flex',
    nouns: 'muscles, bisceps, triceps, legs, brain, nose, ears',
    undirected: {
      theirmsg: '<name> flexes <pronoun> <noun>',
      mymsg: 'You flex your <noun>',
    },
  },
  {
    name: 'flick',
    noargs: {
      mymsg: 'You flick your boogers into the air',
      theirmsg: '<name> flicks <pronoun> boogers into the air',
    },
    directed: {
      mymsg: 'You flick <target> on the ear really hard',
      theirmsg: '<name> flicks <target> on the ear really hard',
    },
  },
  {
    name: 'flip',
    adverbs: 'head over heels, off, into the garbage bin, dangerously, spectacularly',
    undirected: {
      theirmsg: '<name> flips <adverb>',
      mymsg: 'You flip <adverb>',
    },
    directed: {
      theirmsg: '<name> flips <target> <adverb>',
      mymsg: 'You flip <target> <adverb>',
    },
  },
  {
    name: 'flirt',
    prepositions: 'with',
    directed: {
      theirmsg: '<name> teasingly flirts with <target>',
      mymsg: 'You teasingly flirt with <target>',
    },
  },
  {
    name: 'flop',
    adverbs:
      'helplessly, like a fish out of water, badly, carefully, rudely, a bit, once, wonderfully, impressively, suggestively, lazily, happily, pensively',
    undirected: {
      theirmsg: '<name> flops about <adverb>',
      mymsg: 'You flop about <adverb>',
    },
  },
  {
    name: 'flourish',
    noargs: {
      mymsg: 'You gallantly flourish your cloak, and bow gracefully',
      theirmsg: '<name> gallantly flourishes <pronoun> cloak, and bows gracefully',
    },
    directed: {
      mymsg: 'You gallantly flourish your cloak, and bow gracefully before <target>',
      theirmsg: '<name> gallantly flourishes <pronoun> cloak and bows gracefully before <target>',
    },
  },
  {
    name: 'flustered',
    noargs: {
      theirmsg: '<name> looks flustered',
      mymsg: 'You look flustered',
    },
  },
  {
    name: 'fondle',
    directed: {
      theirmsg: '<name> fondles <target>',
      mymsg: 'You fondle <target>',
    },
  },
  {
    name: 'foo',
    undirected: {
      adverbs: 'vaguely, carefully, slowly, dangerously',
      theirmsg: '<name> foos <adverb>',
      mymsg: 'You foo <adverb>',
    },
  },
  {
    name: 'forgivep',
    directed: {
      theirmsg: '<name> forgives <target>',
      mymsg: 'You forgive <target>',
    },
  },
  {
    name: 'french',
    directed: {
      theirmsg: '<name> frenches <target> deeply',
      mymsg: 'You french <target> deeply',
    },
  },
  {
    name: 'frolic',
    noargs: {
      theirmsg: '<name> frolics around',
      mymsg: 'You frolic around',
    },
  },
  {
    name: 'froth',
    noargs: {
      theirmsg: '<name> froths at the mouth',
      mymsg: 'You froth at the mouth',
    },
  },
  {
    name: 'frown',
    // adverbs: 'in concentration, in thought, in anger, in depression, happily',
    noargs: {
      theirmsg: '<name> frowns',
      mymsg: 'You frown',
    },
    undirected: {
      theirmsg: '<name> frowns <adverb>',
      mymsg: 'You frown <adverb>',
    },
    directed: {
      theirmsg: '<name> frowns <adverb> at <target>',
      mymsg: 'You frown <adverb> at <target>',
    },
  },
  {
    name: 'fumble',
    undirected: {
      theirmsg: '<name> fumbles around all embarassed like',
      mymsg: 'You fumble around all embarassed like',
    },
  },
  {
    name: 'fume',
    // adverbs: 'quietly, insultingly, despairingly',
    undirected: {
      theirmsg: '<name> fumes <adverb>',
      mymsg: 'You fume <adverb>',
    },
  },
  {
    name: 'gasp',
    noargs: {
      theirmsg: '<name> gasps in shock',
      mymsg: 'You gasp in shock',
    },
  },
  {
    name: 'gesticulate',
    noargs: {
      mymsg: 'You gesticulate wildly',
      theirmsg: '<name> gesticulates wildly',
    },
  },
  {
    name: 'gibber',
    noargs: {
      mymsg: 'You gibber madly',
      theirmsg: '<name> gibbers madly',
    },
  },
  {
    name: 'giggle',
    // adverbs: 'inanely, loudly, stupidly, quietly, idiotically, fiendishly',
    undirected: {
      mymsg: 'You giggle <adverb>',
      theirmsg: '<name> giggles <adverb>',
    },
  },
  {
    name: 'glance',
    noargs: {
      mymsg: 'You glance at nothing in particular',
      theirmsg: '<name> glances at nothing in particular',
    },
    directed: {
      mymsg: 'You casually glance at <target>',
      theirmsg: '<name> casually glances at <target>',
    },
  },
  {
    name: 'glare',
    prepositions: 'at',
    adverbs: 'stonily, sternly, hotly, intently, solemnly, idiotically, evanly, evilly',
    noargs: {
      mymsg: 'You glare at the world in general',
      theirmsg: '<name> glares at the world in general',
    },
    undirected: {
      mymsg: 'You glare <adverb>',
      theirmsg: '<name> glares <adverb>',
    },
    directed: {
      mymsg: 'You glare at <target> <adverb>',
      theirmsg: '<name> glares at <target> <adverb>',
    },
  },
  {
    name: 'goose',
    noargs: {
      mymsg: 'You goose yourself on the tushie',
      theirmsg: '<name> gooses <target> on the tushie',
    },
    directed: {
      mymsg: 'You goose <target> on the tushie',
      theirmsg: '<name> gooses <target> on the tushie',
    },
  },
  {
    name: 'greet',
    adverbs:
      'happily, sadly, with open arms, ecstatically, carefully, courteously, hysterically, reservedly, warmly, coldly, insolently, curtly, absentmindedly',
    directed: {
      mymsg: 'You greet <target> <adverb>',
      theirmsg: '<name> greets <target> <adverb>',
    },
  },
  {
    name: 'grimace',
    undirected: {
      theirmsg: '<name> grimaces',
      mymsg: 'You grimace',
    },
  },
  {
    name: 'grin',
    noargs: {
      theirmsg: '<name> grins evilly',
      mymsg: 'You grin evilly',
    },
    directed: {
      theirmsg: '<name> grins evilly at <target>',
      mymsg: 'You grin evilly at <target>',
    },
  },
  {
    name: 'grincat',
    noargs: {
      theirmsg: '<name> grins like a cheshire cat',
      mymsg: 'You grin like a cheshire cat',
    },
    directed: {
      theirmsg: '<name> grins like a cheshire cat at <target>',
      mymsg: 'You grin like a cheshire cat at <target>',
    },
  },
  {
    name: 'grinf',
    noargs: {
      theirmsg: '<name> grins foolishly',
      mymsg: 'You grin foolishly',
    },
    directed: {
      theirmsg: '<name> grins foolishly at <target>',
      mymsg: 'You grin foolishly at <target>',
    },
  },
  {
    name: 'grinhap',
    noargs: {
      theirmsg: '<name> grins happily',
      mymsg: 'You grin happily',
    },
    directed: {
      theirmsg: '<name> grins happily at <target>',
      mymsg: 'You grin happily at <target>',
    },
  },
  {
    name: 'grinhid',
    noargs: {
      theirmsg: '<name> grins hideously',
      mymsg: 'You grin hideously',
    },
    directed: {
      theirmsg: '<name> grins hideously at <target>',
      mymsg: 'You grin hideously at <target>',
    },
  },
  {
    name: 'grinm',
    noargs: {
      theirmsg: '<name> grins mischievously',
      mymsg: 'You grin mischievously',
    },
    directed: {
      theirmsg: '<name> grins mischievously at <target>',
      mymsg: 'You grin mischievously at <target>',
    },
  },
  {
    name: 'grind',
    adverbs: 'loudly, resignedly, together',
    undirected: {
      mymsg: 'You grind your teeth <adverb>',
      theirmsg: '<name> grinds <pronoun> teeth <adverb>',
    },
  },
  {
    name: 'groan',
    // adverbs: 'loudly, resignedly, tiredly',
    undirected: {
      mymsg: 'You groan <adverb>',
      theirmsg: '<name> groans <adverb>',
    },
  },
  {
    name: 'grope',
    undirected: {
      mymsg: 'You grope <adverb>',
      theirmsg: '<name> gropes <adverb>',
    },
    directed: {
      mymsg: 'You grope <target> body',
      theirmsg: '<name> gropes <target> body',
    },
  },
  {
    name: 'grovel',
    prepositions: 'at',
    adverbs: 'shamelessly, violently, unashamedly, respectfully, like bastian, like a dog, sarcastically',
    directed: {
      mymsg: 'You grovel <adverb> at <target> feet',
      theirmsg: '<name> grovels <adverb> at <target> feet',
    },
  },
  {
    name: 'growl',
    prepositions: 'at',
    adverbs: 'menacingly, nastily, loudly, playfully',
    undirected: {
      mymsg: 'You growl <adverb>',
      theirmsg: '<name> growls <adverb>',
    },
    directed: {
      mymsg: 'You growl <adverb> at <target>',
      theirmsg: '<name> growls <adverb> at <target>',
    },
  },
  {
    name: 'grumble',
    prepositions: 'at',
    adverbs:
      'quietly, bitterly, menacingly, halfheartedly, seductively, suggestively, loudly, annoyingly, devastatingly, carefully, wildly, more or less, jealously',
    undirected: {
      mymsg: 'You grumble <adverb>',
      theirmsg: '<name> grumbles <adverb>',
    },
    directed: {
      mymsg: 'You grumble <adverb> at <target>',
      theirmsg: '<name> grumbles <adverb> at <target>',
    },
  },
  {
    name: 'grunt',
    // adverbs: 'in ignitation, carefully, rudely',
    undirected: {
      mymsg: 'You grunt <adverb>',
      theirmsg: '<name> grunts <adverb>',
    },
  },
  {
    name: 'gurgle',
    prepositions: 'at',
    adverbs:
      'noisily, rudely, loudly, mischievously, happily, carefully, disgustingly, in surprise, like a train, quickly, slowly',
    undirected: {
      mymsg: 'You gurgle <adverb>',
      theirmsg: '<name> gurgles <adverb>',
    },
    directed: {
      mymsg: 'You gurgle <adverb> at <target>',
      theirmsg: '<name> gurgles <adverb> at <target>',
    },
  },
  {
    name: 'gwert',
    noargs: {
      theirmsg: '<name> does the gwert',
      mymsg: 'You do the gwert',
    },
    directed: {
      theirmsg: '<name> does the gwert with <target>',
      mymsg: 'You do the gwert with <target>',
    },
  },
  {
    name: 'grab',
    noargs: {
      mymsg: 'You grab about at things',
      theirmsg: '<name> grabs about at things',
    },
    directed: {
      mymsg: 'You grab <target> from behind',
      theirmsg: '<name> grabs <target> from behind',
    },
  },
  {
    name: 'hang',
    noargs: {
      mymsg: 'You hang your head in shame',
      theirmsg: '<name> hangs <pronoun> head in shame',
    },
  },
  {
    name: 'headbutt',
    directed: {
      mymsg: 'You headbutt <target>',
      theirmsg: '<name> headbutts <target>',
    },
  },
  {
    name: 'headstand',
    prepositions: 'on',
    undirected: {
      mymsg: 'You stand on your head',
      theirmsg: '<name> stands on <name> head',
    },
    directed: {
      mymsg: 'You stand on <target> head',
      theirmsg: '<name> stands on <target> head',
    },
  },
  {
    name: 'hiccup',
    noargs: {
      mymsg: 'You hiccup',
      theirmsg: '<name> hiccups',
    },
  },
  {
    name: 'holdb',
    prepositions: 'on, onto',
    adverbs: 'close, down, tightly, warmly, gently, lovingly, back, up',
    noargs: {
      mymsg: 'You hold back',
      theirmsg: '<name> holds back',
    },
    directed: {
      mymsg: 'You hold <target> <adverb>',
      theirmsg: '<name> holds <target> <adverb>',
    },
  },
  {
    name: 'hop',
    noargs: {
      mymsg: 'You hop around like a bunny rabbit',
      theirmsg: '<name> hops around like a bunny rabbit',
    },
  },
  {
    name: 'hoot',
    prepositions: 'at',
    adverbs:
      'like an owl, hysterically, in warning, anxiously, annoyingly, to signal another probably hiding somewhere near',
    undirected: {
      theirmsg: '<name> hoots <adverb>',
      mymsg: 'You hoot <adverb>',
    },
    directed: {
      theirmsg: '<name> HOOTS HOOTS HOOTS at <target> <adverb>',
      mymsg: 'You HOOT HOOT HOOT at <target> <adverb>',
    },
  },
  {
    name: 'howlp',
    adverbs:
      'at the sky, tunelessly, annoyingly, aguely, absentmindedly, while you work, distractedly, pointlessly, silently, loudly, rudely',
    undirected: {
      mymsg: 'You howl pathetically',
      theirmsg: '<name> howl <adverb>',
    },
  },
  {
    name: 'hug',
    adverbs: 'tightly, warmly, gently, close',
    directed: {
      mymsg: 'You hug <target> <adverb>',
      theirmsg: '<name> hugs <target> <adverb>',
    },
  },
  {
    name: 'hiss',
    noargs: {
      mymsg: 'You hiss in disgust',
      theirmsg: '<name> hisses in disgust',
    },
    directed: {
      mymsg: 'You hiss in disgust at <target>',
      theirmsg: '<name> hisses in disgust at <target>',
    },
  },
  {
    name: 'huggle',
    noargs: {
      mymsg: 'You huggle yourself in self pity',
      theirmsg: '<name> huggles <target>',
    },
    directed: {
      mymsg: 'You huggle <target> affectionately',
      theirmsg: '<name> huggles <target> affectionately',
    },
  },
  {
    name: 'hum',
    adverbs:
      'a merry tune, tunelessly, annoyingly, aguely, absentmindedly, while you work, distractedly, pointlessly, silently, loudly, rudely',
    undirected: {
      mymsg: 'You hum <adverb> a merry little tune',
      theirmsg: '<name> hums <adverb> a merry little tune',
    },
  },
  {
    name: 'hurlp',
    undirected: {
      theirmsg: '<name> hurls chunks',
      mymsg: 'You hurl chunks',
    },
    directed: {
      theirmsg: '<name> hurls chunks all over <target>',
      mymsg: 'You hurl chunks all over <target>',
    },
  },
  {
    name: 'ignorep',
    undirected: {
      mymsg: 'You ignore the world',
      theirmsg: '<name> ignores the world',
    },
    directed: {
      mymsg: 'You ignore <target>',
      theirmsg: '<name> ignores <target>',
    },
  },
  {
    name: 'juggle',
    nouns:
      'balls, sticks, battons, cats, dogs, frogs, chickens, swords, knives, arms, legs, balls, trees, chain saws, bottles, torches, bings, tree stumps, logs, wine glasses, water, people, fire',
    undirected: {
      mymsg: 'You juggle ineptly',
      theirmsg: '<name> juggles <noun> ineptly',
    },
  },
  {
    name: 'jump',
    adverbs: 'excitedly, happily, carefully, slowly, joyfully, unsteadily, sideways, absentmindedly',
    directed: {
      mymsg: 'You jump <adverb> up and down on <target>',
      theirmsg: '<name> jumps up and down <adverb> on <target>',
    },
    undirected: {
      mymsg: 'You jump up and down <adverb>',
      theirmsg: '<name> jumps up and down <adverb>',
    },
  },
  {
    name: 'kick',
    noargs: {
      mymsg: 'You kick yourself',
      theirmsg: '<name> kicks <target>',
    },
    directed: {
      mymsg: 'You kick <target>',
      theirmsg: '<name> kicks <target>',
    },
  },
  {
    name: 'kiss',
    adverbs: 'passionately, deeply, tenderly, gently, lovingly, lengthily, fishily, carefully, demandingly, sensuously',
    directed: {
      mymsg: 'You kiss <target> <adverb>',
      theirmsg: '<name> kisses <target> <adverb>',
    },
  },
  {
    name: 'kissb',
    adverbs: 'passionately, deeply, tenderly, gently, lovingly, lengthily, fishily, carefully, demandingly, sensuously',
    directed: {
      mymsg: 'You blow a kiss to <target>',
      theirmsg: '<name> blows kisses at <target>',
    },
  },
  {
    name: 'kissc',
    adverbs: 'passionately, deeply, tenderly, gently, lovingly, lengthily, fishily, carefully, demandingly, sensuously',
    directed: {
      mymsg: 'You kiss <target> sweetly on the cheek',
      theirmsg: '<name> kisses <target> sweetly on the cheek',
    },
  },
  {
    name: 'kisshand',
    adverbs: 'demurely, passionately, tenderly, gently, lovingly, sensuously',
    directed: {
      mymsg: 'You kiss <target> <adverb> upon the hand',
      theirmsg: '<name> kisses <target> upon the hand <adverb>',
    },
  },
  {
    name: 'kissp',
    adverbs: 'passionately, deeply, tenderly, gently, lovingly, lengthily, fishily, carefully, demandingly, sensuously',
    directed: {
      mymsg: 'You kiss <target> passionately',
      theirmsg: '<name> kisses <target> passionately',
    },
  },
  {
    name: 'kisss',
    adverbs: 'passionately, deeply, tenderly, gently, lovingly, lengthily, fishily, carefully, demandingly, sensuously',
    directed: {
      mymsg: 'You kiss <target> seductively',
      theirmsg: '<name> kisses <target> seductively',
    },
  },
  {
    name: 'knee',
    noargs: {
      mymsg: 'You knee yourself',
      theirmsg: '<name> knees <target>',
    },
    directed: {
      mymsg: 'You knee <target>',
      theirmsg: '<name> knees <target>',
    },
  },
  {
    name: 'kneel',
    prepositions: 'before',
    undirected: {
      mymsg: 'You kneel down upon your knees',
      theirmsg: '<name> kneels',
    },
    directed: {
      mymsg: 'You kneel before <target> ',
      theirmsg: '<name> kneels before <target> ',
    },
  },
  {
    name: 'laugh',
    adverbs: 'nastily, nicely, quietly, uncontrollably, politely, happily, manically, estaticly, demonically',
    noargs: {
      mymsg: 'You roll around on the floor laughing',
      theirmsg: '<name> rolls around on the floor laughing',
    },
    directed: {
      mymsg: 'You laugh <adverb> at <target>',
      theirmsg: '<name> laughs <adverb> at <target>',
    },
    undirected: {
      mymsg: 'You laugh <adverb>',
      theirmsg: '<name> laughs <adverb>',
    },
  },
  {
    name: 'leap',
    adverbs: 'longingly, excitedly, quickly, slowly, awkwardly, politlely, quietly, noisily',
    directed: {
      mymsg: 'You leap <adverb> into <target> arms',
      theirmsg: '<name> leaps <adverb> into <target> arms',
    },
    undirected: {
      mymsg: 'You leap <adverb> into the air',
      theirmsg: '<name> leaps <adverb> into the air',
    },
  },
  {
    name: 'leaps',
    adverbs: 'longingly, excitedly, quickly, slowly, awkwardly, politlely, quietly, noisily',
    directed: {
      mymsg: 'You leap <adverb> into <target> arms',
      theirmsg: '<name> leaps <adverb> into <pronoun> arms',
    },
    undirected: {
      mymsg: 'You leap <adverb> into the air',
      theirmsg: '<name> leaps <adverb> into the air',
    },
  },
  {
    name: 'leer',
    noargs: {
      mymsg: 'You leer at yourself',
      theirmsg: '<name> leers at <target>',
    },
    directed: {
      mymsg: 'You leer at <target>',
      theirmsg: '<name> leers at <target>',
    },
  },
  {
    name: 'lick',
    noargs: {
      mymsg: 'You lick your lips',
      theirmsg: '<name> licks <pronoun> lips',
    },
    directed: {
      mymsg: 'You lick <target>',
      theirmsg: '<name> licks <target>',
    },
  },
  {
    name: 'lickle',
    directed: {
      mymsg: 'You give <target> a long, slow, seductive lick with your tongue',
      theirmsg: '<name> gives <target> a long, slow, seductive lick',
    },
  },
  {
    name: 'loom',
    directed: {
      mymsg: 'You loom over <target>',
      theirmsg: '<name> looms over <target>',
    },
  },
  {
    name: 'love',
    directed: {
      mymsg: 'You whisper sweet nothings to <target>',
      theirmsg: '<name> whispers sweet nothings to <target>',
    },
  },
  {
    name: 'lower',
    adverbs:
      'quickly, slowly, quizicaly, silently, loudly, with a pitch fork, backwards, sideways, cleverly, surprisingly, playfully, sternly, unnoticeably, macarbly, scepticaly',
    undirected: {
      mymsg: 'You lower your eyebrows <adverb>',
      theirmsg: '<name> lowers <pronoun> eyebrows <adverb>',
    },
  },
  {
    name: 'madness',
    adverbs: 'wholeheartedly, loudly, softly, vaguely, briefly',
    undirected: {
      theirmsg: '<name> rubs <pronoun> hands together evilly and laughs like a madman ',
      mymsg: 'You rub your hands together evilly and laugh like a madman',
    },
    directed: {
      theirmsg: '<name> rubs <pronoun> hands together evilly and laughs like a madman at <target>',
      mymsg: 'You rub your hands together evilly and laugh like a madman at <target>',
    },
  },
  {
    name: 'massage',
    adverbs:
      'good, bad, ugly, long, refreshing, pink, full body, seductive, sensuous, strange, painful, deep, meaningful, ergonomic, economic, painless, memorable, different, unwanted, unwarranted, unprovoked, unknown, sneaky, unnoticed, unwieldly, back, professional, unprofessional, happy, sad, trained, untrained, train, compact, quick, foot, leg, arm, head, ear, neck, shoulder, nose',
    directed: {
      mymsg: 'You give <target> a <adverb> massage',
      theirmsg: '<name> gives <target> a <adverb> massage',
    },
  },
  {
    name: 'meep',
    undirected: {
      theirmsg: '<name> meeps meekly',
      mymsg: 'You meep meekly',
    },
  },
  {
    name: 'melt',
    undirected: {
      theirmsg: '<name> melts',
      mymsg: 'You melt',
    },
  },
  {
    name: 'meow',
    noargs: {
      theirmsg: '<name> meows',
      mymsg: 'You meow',
    },
  },
  {
    name: 'moan',
    adverbs: 'gently, deeply, sensually, agonisingly, in terror, seductively',
    undirected: {
      mymsg: 'You moan <adverb>',
      theirmsg: '<name> moans <adverb>',
    },
  },
  {
    name: 'moo',
    // adverbs: 'like a cow, gently, deeply, sensually, agonisingly, in terror, seductively',
    undirected: {
      mymsg: 'You moo <adverb>',
      theirmsg: '<name> moos <adverb>',
    },
  },
  {
    name: 'moon',
    directed: {
      mymsg: 'You drop your pants and moon <target>',
      theirmsg: '<name> drops <pronoun> pants and moons <target>',
    },
  },
  {
    name: 'mosh',
    adverbs: 'violently, angrily, carefully, thoughtfully, wonderingly, vigously, insanely, loudly',
    undirected: {
      theirmsg: '<name> moshes <adverb> around the room',
      mymsg: 'You mosh <adverb> around the room',
    },
  },
  {
    name: 'mutter',
    undirected: {
      theirmsg: '<name> mutters <adverb> under <pronoun> breath',
      mymsg: 'You mutter <adverb> under your breath',
    },
  },
  {
    name: 'nestle',
    adverbs: 'affectionately, lovingly, curiously',
    directed: {
      mymsg: 'You nestle up to <target> <adverb>',
      theirmsg: '<name> nestle up to <target> <adverb>',
    },
  },
  {
    name: 'nibble',
    nouns: 'ear, finger, lip, arm, leg, toe, neck, nose',
    directed: {
      mymsg: 'You nibble on <target> <noun>',
      theirmsg: '<name> nibbles on <target> <noun>',
    },
  },
  {
    name: 'nip',
    noargs: {
      mymsg: 'You nip at an itchy spot, you may have fleas again',
      theirmsg: '<name> nips at an itchy spot. Looks like <pronoun> might have fleas again',
    },
    directed: {
      mymsg: 'You playfully nip <target>',
      theirmsg: '<name> playfully nips <target>',
    },
  },
  {
    name: 'nod',
    adverbs: 'solemnly, happily, brightly, curtly, patiently, slowly, knowingly, vigorously, tentatively',
    undirected: {
      mymsg: 'You nod <adverb> ',
      theirmsg: '<name> nods <adverb>',
    },
    directed: {
      mymsg: 'You nod <adverb> at <target>',
      theirmsg: '<name> nods <adverb> at <target>',
    },
  },
  {
    name: 'noise',
    adverbs:
      'bungle, flurgle, zongle-wop, wop, whirr, burble, frog, moo, train, hairy, twisted, wap, pop, rat, mouse, chicken, womble, guppy, cow, rabbit, kangaroo, gumby',
    undirected: {
      theirmsg: '<name> makes a <adverb> noise',
      mymsg: 'You make a <adverb> noise',
    },
    noargs: {
      theirmsg: '<name> makes a funny noise',
      mymsg: 'You make a funny noise',
    },
  },
  {
    name: 'noogie',
    noargs: {
      mymsg: 'You noogie yourself like an idiot',
      theirmsg: '<name> noogies <target>',
    },
    directed: {
      mymsg: 'You give <target> a noogie',
      theirmsg: '<name> gives <target> a noogie',
    },
  },
  {
    name: 'nudge',
    directed: {
      theirmsg: '<name> nudges <target>',
      mymsg: 'You nudge <target>',
    },
  },
  {
    name: 'nuzzle',
    directed: {
      theirmsg: '<name> nuzzles <target> affectionately',
      mymsg: 'You nuzzle <target> affectionately',
    },
  },
  {
    name: 'nyuck',
    noargs: {
      mymsg: 'You Nyuck, Nyuck, Nyuck',
      theirmsg: '<name> Nyuck, Nyuck, Nyucks',
    },
    directed: {
      mymsg: 'You Nyuck, Nyuck, Nyuck at <target>',
      theirmsg: '<name> Nyuck, Nyuck, Nyucks at <target>',
    },
  },
  {
    name: 'ok',
    noargs: {
      mymsg: 'You give the Okay sign and say: Okie dokie',
      theirmsg: '<name> gives the Okay sign and says: Okie dokie',
    },
    directed: {
      mymsg: 'You give the Okay sign and say: Okie dokie! to <target>',
      theirmsg: '<name> gives the Okay sign and says: Okie dokie! to <target>',
    },
  },
  {
    name: 'oogle',
    undirected: {
      // adverbs:
      // 'enthusiastically, excitedly, quietly, calmly, carefully, politely, wildly, oddly, unconvincingly, happily, slightly, up',
      theirmsg: '<name> oogles like a fool',
      mymsg: 'You oogle like a fool',
    },
    directed: {
      // adverbs:
      // 'enthusiastically, excitedly, quietly, calmly, carefully, politely, wildly, oddly, unconvincingly, happily, slightly, up',
      theirmsg: '<name> oogles over <target>',
      mymsg: 'You oogle over  <target>',
    },
  },
  {
    name: 'panic',
    noargs: {
      theirmsg: '<name> panics',
      mymsg: 'You panic',
    },
  },
  {
    name: 'pant',
    noargs: {
      theirmsg: '<name> pants like a dog',
      mymsg: 'You pant like a dog',
    },
  },
  {
    name: 'pat',
    directed: {
      theirmsg: '<name> pats <target> on the head',
      mymsg: 'You pat <target> on the head',
    },
  },
  {
    name: 'pet',
    directed: {
      theirmsg: '<name> pets <target>',
      mymsg: 'You pet <target>',
    },
  },
  {
    name: 'peer',
    // adverbs:
    // 'suspiciously, quizically, anoxiously, stupidly, warningly, expectantly, happily, sadly, desperately, worriedly, strangely, uncertainly, lazily, rudely, disappointedly, fearfully, like a train, curiously, tentatively, warily, nervously, carefully, warningly, owlishly, dazedly',
    undirected: {
      theirmsg: '<name> peers around the room',
      mymsg: 'You peer around the room',
    },
    directed: {
      theirmsg: '<name> peers at <target>',
      mymsg: 'You peer at <target>',
    },
  },
  {
    name: 'pinch',
    noargs: {
      theirmsg: '<name> pinches <target>',
      mymsg: 'You pinch yourself',
    },
    directed: {
      theirmsg: '<name> pinches <target> on the tushie',
      mymsg: 'You pinch <target> on the tushie',
    },
  },
  {
    name: 'ping',
    directed: {
      theirmsg: '<name> pings at <target>',
      mymsg: 'You ping at <target>',
    },
  },
  {
    name: 'plead',
    undirected: {
      theirmsg: '<name> pleads desperately',
      mymsg: 'You plead desperately',
    },
  },
  {
    name: 'point',
    prepositions: 'at',
    // adverbs: 'innocently, accusingly, straight',
    undirected: {
      theirmsg: '<name> points',
      mymsg: 'You point',
    },
    directed: {
      theirmsg: '<name> points directly at <target>',
      mymsg: 'You point directly at <target>',
    },
  },
  {
    name: 'poke',
    nouns: 'ribs, nose, leg, frog, arm',
    directed: {
      theirmsg: '<name> pokes <target> in the <noun>',
      mymsg: 'You poke <target> in the <noun>',
    },
  },
  {
    name: 'ponder',
    // adverbs: 'the situation',
    undirected: {
      theirmsg: '<name> ponders <adverb>',
      mymsg: 'You ponder <adverb>',
    },
  },
  {
    name: 'pontificate',
    noargs: {
      mymsg: 'You pontificate profusely',
      theirmsg: '<name> pontificates profusley',
    },
  },
  {
    name: 'pose',
    prepositions: 'at',
    // adverbs: 'innocently',
    undirected: {
      theirmsg: '<name> poses',
      mymsg: 'You strike a pose',
    },
    directed: {
      theirmsg: '<name> poses for <target>',
      mymsg: 'You pose for <target>',
    },
  },
  {
    name: 'pounce',
    noargs: {
      theirmsg: '<name> looks around in an odd manner',
      mymsg: 'You browse around for a pouncing target',
    },
    directed: {
      theirmsg: '<name> POUNCES on <target>',
      mymsg: 'You POUNCE on <target>',
    },
  },
  {
    name: 'pout',
    undirected: {
      theirmsg: '<name> pouts',
      mymsg: 'You pout',
    },
  },
  {
    name: 'preen',
    prepositions: 'at',
    adverbs: 'like a bird, visciously, slightly, wombely, happily, joyfully, angrily',
    undirected: {
      adverbs: 'like a bird, under the arms, and fluffs all matted feathers',
      mymsg: 'You preen yourself <adverb>',
      theirmsg: '<name> preens <target> <adverb>',
    },
    directed: {
      adverbs: 'attentively',
      mymsg: 'You preem <target> <adverb>',
      theirmsg: '<name> preens <target> <adverb>',
    },
  },
  {
    name: 'primp',
    adverbs: 'playfully, affectionately',
    directed: {
      theirmsg: '<name> primps <target> makeup <adverb>',
      mymsg: 'You primp <target> makeup <adverb>',
    },
  },
  {
    name: 'puke',
    directed: {
      theirmsg: '<name> pukes on <target>',
      mymsg: 'You puke on <target>',
    },
  },
  {
    name: 'punch',
    directed: {
      theirmsg: '<name> punches <target>',
      mymsg: 'You punch <target>',
    },
  },
  {
    name: 'purr',
    // adverbs: 'contentedly, loudly, happily, sensuously',
    undirected: {
      theirmsg: '<name> purrs <adverb>',
      mymsg: 'You purr <adverb>',
    },
  },
  {
    name: 'push',
    noargs: {
      theirmsg: '<name> pushes <target> over',
      mymsg: 'You push yourself over',
    },
    directed: {
      theirmsg: '<name> pushes <target> over',
      mymsg: 'You push <target> over',
    },
  },
  {
    name: 'puzzle',
    noargs: {
      theirmsg: '<name> looks puzzled',
      mymsg: 'You look puzzled',
    },
    undirected: {
      theirmsg: '<name> puzzles over <noun>',
      mymsg: 'You puzzle over <noun>',
    },
  },
  {
    name: 'quirk',
    noargs: {
      theirmsg: '<name> quirks an eyebrow',
      mymsg: 'You quirk an eyebrow',
    },
  },
  {
    name: 'quiver',
    noargs: {
      theirmsg: '<name> quivers',
      mymsg: 'You quiver',
    },
  },
  {
    name: 'raise',
    // adverbs:
    // "quickly, slowly, quizicaly, silently, loudly, with a pitch fork, backwards, sideways, cleverly, surprisingly, playfully, like someone I can't think of, unnoticeably, macarbly, scepticaly, your hopes and a family",
    undirected: {
      mymsg: 'You raise an eyebrow',
      theirmsg: '<name> raises <pronoun> eyebrows',
    },
  },
  {
    name: 'raspberry',
    noargs: {
      mymsg: 'You blow raspberries',
      theirmsg: '<name> blows raspberries',
    },
    directed: {
      mymsg: 'You blow raspberries at <target>',
      theirmsg: '<name> blows raspberries at <target>',
    },
  },
  {
    name: 'ribbit',
    noargs: {
      mymsg: 'You ribbit musically',
      theirmsg: '<name> ribbits musically',
    },
    directed: {
      mymsg: 'You ribbit musically at <target>',
      theirmsg: '<name> ribbits musically at <target>',
    },
  },
  {
    name: 'rub',
    nouns: 'hands together, eyes, tummy, nose, leg, arm, eyebrows, head',
    undirected: {
      mymsg: 'You rub your <noun>',
      theirmsg: '<name> rubs <pronoun> <noun>',
    },
    directed: {
      mymsg: 'You rub <target> the wrong way',
      theirmsg: '<name> rubs <target> up the wrong way',
    },
  },
  {
    name: 'roarp',
    adverbs: 'menacingly, ferociously, perilously, precariously, dangerously, lovingly, like a pussy cat',
    noargs: {
      mymsg: 'You roar like a mouse',
      theirmsg: '<name> roars like a mouse',
    },
    // undirected: {
    //   adverbs:
    //     'and bounces in excitement, so hard a hairball is coughed up, mouselike, annoyingly, disgustingly, a warning, painfully, fearfully, in disgust, tightly, slowly',
    //   theirmsg: '<name> roars <adverb>',
    //   mymsg: 'You roar <adverb>',
    // },
    directed: {
      theirmsg: '<name> roars <adverb> at <target>',
      mymsg: 'You roar <adverb> at <target>',
    },
  },
  {
    name: 'rock',
    noargs: {
      mymsg: 'You rock back and forth crooning a little melody',
      theirmsg: '<name> rocks back and forth crooning a little melody',
    },
    directed: {
      mymsg: 'You pick up a rock and throw it at <target>',
      theirmsg: '<name> picks up a rock and throws it at <target>',
    },
  },
  {
    name: 'roll',
    adverbs: 'quickly, slowly, painfully, excitededly, lovingly, carefully',
    noargs: {
      mymsg: 'You roll your eyes',
      theirmsg: '<name> rolls <pronoun> eyes',
    },
    undirected: {
      adverbs:
        'your eyes, around on the floor laughing, over and play dead, up into a ball, your own cigarette, sideways, backwards, painfully, like a spy through an imaginary door, fearfully, tightly, slowly',
      theirmsg: '<name> rolls <adverb>',
      mymsg: 'You roll <adverb>',
    },
    directed: {
      theirmsg: '<name> rolls <adverb> over <target>',
      mymsg: 'You roll <adverb> over <target>',
    },
  },
  {
    name: 'ruffle',
    adverbs: 'playfully, affectionately',
    directed: {
      theirmsg: '<name> ruffles <target> hair <adverb>',
      mymsg: 'You ruffle <target> hair <adverb>',
    },
  },
  {
    name: 'salt',
    noargs: {
      theirmsg: '<name> thows a pinch of salt over <pronoun> shoulder',
      mymsg: 'You throw a pinch of salt over your shoulder for good luck',
    },
    directed: {
      theirmsg: '<name> throws a pinch of salt at <target>',
      mymsg: 'You throw a pinch of salt at <target>',
    },
  },
  {
    name: 'salute',
    noargs: {
      mymsg: 'You salute',
      theirmsg: '<name> salutes',
    },
    directed: {
      mymsg: 'You salute <target>',
      theirmsg: '<name> salutes <target>',
    },
  },
  {
    name: 'scowl',
    abverbs: 'tiredly',
    undirected: {
      theirmsg: '<name> scowls darkly',
      mymsg: 'You scowl darkly',
    },
  },
  {
    name: 'scratch',
    prepositions: 'at',
    adverbs: 'visciously, slightly, wombely, happily, joyfully, angrily',
    undirected: {
      adverbs: 'on the head',
      mymsg: 'You scratch yourself <adverb>',
      theirmsg: '<name> scratches <target> <adverb>',
    },
    directed: {
      adverbs: 'attentively',
      mymsg: 'You scratch <target> <adverb>',
      theirmsg: '<name> scratches <target> <adverb>',
    },
  },
  {
    name: 'scream',
    prepositions: 'at',
    noargs: {
      mymsg: 'You scream loudly',
      theirmsg: '<name> screams loudly',
    },
    undirected: {
      mymsg: 'You scream <adverb>',
      theirmsg: '<name> screams <adverb>',
    },
    directed: {
      mymsg: 'You scream at <target>',
      theirmsg: '<name> scream at <target>',
    },
  },
  {
    name: 'screech',
    prepositions: 'at',
    adverbs:
      'like an eagle, hysterically, in warning, anxiously, annoyingly, to signal another probably hiding somewhere near',
    undirected: {
      theirmsg: '<name> screeches <adverb>',
      mymsg: 'You screech <adverb>',
    },
    directed: {
      theirmsg: '<name> screeches screeches screeches at <target> <adverb>',
      mymsg: 'You screech screech SCREECH at <target> <adverb>',
    },
  },
  {
    name: 'seduce',
    prepositions: 'with',
    directed: {
      theirmsg: '<name> charmingly seduces <target>',
      mymsg: 'You charmingly seduce <target>',
    },
  },
  {
    name: 'shake',
    prepositions: 'with at',
    adverbs:
      'sorrowfully, carefully, slowly, once, quickly, curtly, pinkly, vigorously, completely, fishily, tentatively, in agreement, in disbelief',
    nouns: 'hands with, fins with, fingers with, legs with, pinkys with, tentacles with, your fist at',
    undirected: {
      mymsg: 'You shake your head <adverb>',
      theirmsg: '<name> shakes <pronoun> head <adverb>',
    },
    directed: {
      mymsg: 'You shake <noun> <target>',
      theirmsg: '<name> shakes <noun> <target>',
    },
  },
  {
    name: 'shiver',
    // adverbs: 'in fear, with cold, slightly',
    undirected: {
      mymsg: 'You shiver <adverb>',
      theirmsg: '<name> shivers <adverb>',
    },
  },
  {
    name: 'shrug',
    // adverbs: 'helplessly, slightly, evanly, rhythmicly, around in circles, with your legs',
    undirected: {
      theirmsg: '<name> shrugs <adverb>',
      mymsg: 'You shrug <adverb>',
    },
  },
  {
    name: 'shudder',
    adverbs: 'fear, revulsion, disapointment, ecstasy',
    undirected: {
      mymsg: 'You shudder in <adverb>',
      theirmsg: '<name> shudders in <adverb>',
    },
  },
  {
    name: 'sigh',
    // adverbs:
    // 'deeply, silently, desperately, tiredly, sadly, slowly, dreamily, happily, heavily, suggestively, sarcasticly, in relief, with relief',
    undirected: {
      mymsg: 'You sigh <adverb>',
      theirmsg: '<name> sighs <adverb>',
    },
  },
  // {
  //   name: 'sing',
  //   prepositions: 'to',
  //   undirected: {
  //     mymsg: 'You sing <adverb>',
  //     theirmsg: '<name> sing <adverb>',
  //   },
  //   directed: {
  //     mymsg: 'You sing <adverb> to <target>',
  //     theirmsg: '<name> sings <adverb> to <target>',
  //   },
  // },
  // {
  //   name: 'sit',
  //   prepositions: 'on',
  //   undirected: {
  //     mymsg: 'You sit down wearily',
  //     theirmsg: '<name> sits down wearily',
  //   },
  //   directed: {
  //     mymsg: 'You sit on <target> !',
  //     theirmsg: '<name> sits on <target> !',
  //   },
  // },
  {
    name: 'slap',
    noargs: {
      mymsg: 'You slap your forehead',
      theirmsg: '<name> slaps <pronoun> forehead',
    },
    directed: {
      mymsg: 'You slap <target>',
      theirmsg: '<name> slaps <target>',
    },
  },
  // {
  //   name: 'sleep',
  //   noargs: {
  //     mymsg: 'You fall fast asleep',
  //     theirmsg: '<name> falls fast asleep',
  //   },
  //   directed: {
  //     mymsg: 'You go to sleep in <target> arms',
  //     theirmsg: '<name> goes to sleep in <target> arms',
  //   },
  // },
  {
    name: 'slobber',
    noargs: {
      mymsg: 'You start to slobber all over yourself',
      theirmsg: '<name> slobbers and drools a puddle of spit',
    },
    directed: {
      mymsg: 'You slobber all over <target>',
      theirmsg: '<name> slobbers all over <target>',
    },
  },
  {
    name: 'smack',
    prepositions: 'at',
    adverbs: 'lightly, angrily',
    undirected: {
      adverbs: 'silly',
      mymsg: 'You smack yourself <adverb>',
      theirmsg: '<name> smacks <target> <adverb>',
    },
    directed: {
      adverbs: 'penetratingly',
      mymsg: 'You smack some sense into <target>',
      theirmsg: '<name> smacks some sense into <target>',
    },
  },
  {
    name: 'smirk',
    noargs: {
      mymsg: 'You smirk',
      theirmsg: '<name> smirks',
    },
  },
  {
    name: 'smile',
    prepositions: 'at',
    adverbs:
      'happily, sadly, nervously, wryly, broadly, crookedly, stupidly, idiotically, condesendingly, ironically, patiently, brightly, slightly, nastily, excitedly, strangely, plasticly, carefully, sadisticly, lopsidedly, fishily, catishly, faintly, like a train, angrily, paranoicaly, innocently, frogily, slyly, weakly, humbly, sarcasticly, vicously, garishly, sweetly, innocently, lovingly, dreamily, radiantly, enthusiasticly, insolently, quirkily, completely, unconsciously, drunkenly, insanely, cutely, maliciously, absentmindedly, curtly, disturbingly, unbeliveably, quietly, loudly, differently, winningly, in triumph, seductively, tightly, softly, lividly, demonicaly, manically, warily, sardonically, lazily, serenely, disappointedly, secretly, penetratingly',
    undirected: {
      mymsg: 'You smile happily',
      theirmsg: '<name> smiles happily',
    },
    directed: {
      mymsg: 'You smile <adverb> at <target>',
      theirmsg: '<name> smiles <adverb> at <target>',
    },
  },
  {
    name: 'smooch',
    prepositions: 'at',
    adverbs: 'visciously, slightly, wombely, happily, joyfully, angrily, joyfully, passionately, playfully',
    undirected: {
      // adverbs: 'on the head',
      mymsg: 'You smooch yourself happily',
      theirmsg: '<name> smooches <target> happily',
    },
    directed: {
      // adverbs: 'joyfully, passionately, playfully',
      mymsg: 'You smooch <target> <adverb>',
      theirmsg: '<name> smooches <target> <adverb>',
    },
  },
  {
    name: 'snap',
    noargs: {
      mymsg: 'You snap your fingers',
      theirmsg: '<name> snaps <pronoun> fingers',
    },
    directed: {
      mymsg: 'You snap your fingers at <target>',
      theirmsg: '<name> snaps <pronoun> fingers at <target>',
    },
  },
  {
    name: 'snarl',
    prepositions: 'at',
    adverbs: 'visiously, nastily, demonicaly, happily, sadly, unexpectedly, suddenly',
    undirected: {
      mymsg: 'You snarl <adverb>',
      theirmsg: '<name> snarls <adverb>',
    },
    directed: {
      mymsg: 'You snarl <adverb> at <target>',
      theirmsg: '<name> snarls <adverb> at <target>',
    },
  },
  {
    name: 'sneer',
    prepositions: 'at',
    undirected: {
      mymsg: 'You sneer',
      theirmsg: '<name> sneers',
    },
    directed: {
      mymsg: 'You sneer at <target>',
      theirmsg: '<name> sneers at <target>',
    },
  },
  {
    name: 'sneeze',
    prepositions: 'on',
    adverbs: 'violently, loudly, silently, quietly, suddenly, unexpectedly',
    undirected: {
      mymsg: 'You sneeze <adverb>',
      theirmsg: '<name> sneezes <adverb>',
    },
    directed: {
      mymsg: 'You sneeze <adverb> on <target>',
      theirmsg: '<name> sneezes <adverb> on <target>',
    },
  },
  {
    name: 'snicker',
    // adverbs: 'mischeviously, nastily, a bit, like skippy',
    undirected: {
      mymsg: 'You snicker <adverb>',
      theirmsg: '<name> snickers <adverb>',
    },
  },
  {
    name: 'sniff',
    // adverbs: 'dejectedly, noisily, silently, loudly, in disdain',
    undirected: {
      mymsg: 'You sniff <adverb>',
      theirmsg: '<name> sniffs <adverb>',
    },
  },
  {
    name: 'snookie',
    prepositions: 'with',
    directed: {
      theirmsg: '<name> snookies up to <target> warmly',
      mymsg: 'You snookies up to <target> warmly',
    },
  },
  {
    name: 'snore',
    // adverbs:
    // 'loudly, quitely, sypatheticly, strangely, carefully, backwards, like bastian, like a train, over a keyboard with bastian',
    undirected: {
      mymsg: 'You snore <adverb>',
      theirmsg: '<name> snores <adverb>',
    },
  },
  {
    name: 'snort',
    noargs: {
      mymsg: 'You snort',
      theirmsg: '<name> snorts',
    },
    directed: {
      mymsg: 'You snort at <target>',
      theirmsg: '<name> snorts at <target>',
    },
  },
  {
    name: 'snuggle',
    directed: {
      theirmsg: '<name> snuggles up to <target> affectionately',
      mymsg: 'You snuggle up to <target> affectionately',
    },
  },
  {
    name: 'snurgle',
    noargs: {
      mymsg: 'You start to drool and gurgle, snurgle, like a gnoll in heat',
      theirmsg: '<name> drools and gurgles, snurgles, like a gnoll in heat',
    },
    directed: {
      mymsg: 'You snurgle <target> by drooling and gurgling all over them like a gnoll in heat',
      theirmsg: '<name> snurgles <target> by drooling and gurgling all over them like a gnoll in heat',
    },
  },
  {
    name: 'sob',
    adverbs:
      'uncontrollablely, happily, carefully, slightly, quietly, loudly, helplessly, completely, unexpectedly, silently, forlornly, cheekily',
    undirected: {
      theirmsg: '<name> sobs <adverb>',
      mymsg: 'You sob <adverb>',
    },
    directed: {
      theirmsg: '<name> sobs <adverb> on <target> shoulder',
      mymsg: 'You sob <adverb> on <target> shoulder',
    },
  },
  // {
  //   name: 'sorry',
  //   adverbs: 'profusely, reservedly, profunctily, carefully, insultingly, insolently',
  //   undirected: {
  //     mymsg: 'You apologise <adverb>',
  //     theirmsg: '<name> apologises <adverb>',
  //   },
  //   directed: {
  //     mymsg: 'You apologise <adverb> to <target>',
  //     theirmsg: '<name> apologises <adverb> to <target>',
  //   },
  // },
  {
    name: 'spank',
    prepositions: 'like a',
    // adverbs:
    // 'seductively, carefully, gently, uncontrollably, politely, sensuously, selectively, unexpectedly, with an evil smirk, painfully, sneakily, unprovoked, professionally, vigorously, reflexively, with a cat, like a train',
    undirected: {
      theirmsg: '<name> spanks their own butt',
      mymsg: 'You spank your own butt',
    },
    directed: {
      theirmsg: '<name> spanks <target>',
      mymsg: 'You spank <target>',
    },
  },
  {
    name: 'spew',
    undirected: {
      theirmsg: '<name> spews chunks',
      mymsg: 'You spew chunks',
    },
    directed: {
      theirmsg: '<name> spews chunks all over <target>',
      mymsg: 'You spew chunks all over <target>',
    },
  },
  {
    name: 'spin',
    noargs: {
      mymsg: 'You spin around in delight',
      theirmsg: '<name> spins around in delight',
    },
    directed: {
      mymsg: 'You spin around <target> playfully',
      theirmsg: '<name> spins around <target> playfully',
    },
  },
  {
    name: 'spit',
    prepositions: 'on',
    noargs: {
      mymsg: 'You spit',
      theirmsg: '<name> spits',
    },
    directed: {
      mymsg: 'You spit in <target> face',
      theirmsg: '<name> spits in <target> face',
    },
  },
  {
    name: 'spock',
    noargs: {
      mymsg: 'You raise one eyebrow',
      theirmsg: '<name> raises one eyebrow',
    },
  },
  {
    name: 'squawk',
    undirected: {
      theirmsg: '<name> squawks in annoyance',
      mymsg: 'You squawk in annoyance',
    },
  },
  {
    name: 'squeeze',
    adverbs: 'fondly, gently, tightly',
    directed: {
      mymsg: 'You squeeze <target> <adverb>',
      theirmsg: '<name> squeezes <target> <adverb>',
    },
  },
  {
    name: 'squirm',
    undirected: {
      theirmsg: '<name> squirms uncomfortably',
      mymsg: 'You squirm uncomfortably',
    },
  },
  {
    name: 'stagger',
    noargs: {
      mymsg: 'You stagger around',
      theirmsg: '<name> staggers around',
    },
    undirected: {
      mymsg: 'You stagger <adverb>',
      theirmsg: '<name> staggers <adverb>',
    },
  },
  {
    name: 'stamp',
    adverbs: 'angrily, impatiently, warningly, fighteningly',
    undirected: {
      mymsg: 'You stamp your foot <adverb>',
      theirmsg: '<name> stamps <pronoun> foot <adverb>',
    },
  },
  // {
  //   name: 'stand',
  //   adverbs: 'in uffish thought, about, patiently',
  //   undirected: {
  //     mymsg: 'You stand <adverb>',
  //     theirmsg: '<name> stands <adverb>',
  //   },
  // },
  {
    name: 'stare',
    prepositions: 'at',
    adverbs:
      'happily, sadly, woriedly, lazily, rudely, dazedly, hungrily, macabrely, absent-mindedly, fanaticaly, lovingly, respectfully, womblely, frogily, desperately, sternly, tentatively, politely, listlessly, dreamily, intently, mindlessly, expectantly, longingly',
    undirected: {
      mymsg: 'You stare <adverb> into space',
      theirmsg: '<name> stares <adverb> into space',
    },
    directed: {
      adverbs: 'romantically, continuously, annoyingly',
      mymsg: 'You stare <adverb> at <target>',
      theirmsg: '<name> stares <adverb> at <target>',
    },
  },
  {
    name: 'stifle',
    noargs: {
      mymsg: 'You stifle a giggle',
      theirmsg: '<name> stifles a giggle',
    },
  },
  {
    name: 'stomp',
    undirected: {
      theirmsg: '<name> stomps <pronoun> feet like a spoiled brat',
      mymsg: 'You stomp your feet like a spoiled brat',
    },
  },
  {
    name: 'strangle',
    noargs: {
      mymsg: 'You strangle yourself',
      theirmsg: '<name> strangles <target>',
    },
    directed: {
      mymsg: 'You strangle <target> <adverb>',
      theirmsg: '<name> strangle <target> <adverb>',
    },
  },
  {
    name: 'streak',
    prepositions: 'at',
    adverbs: 'quickly, nakedly, joyfully, pervertedly',
    undirected: {
      adverbs: 'pervertedly',
      mymsg: 'You rip off all your clothes and streak the mud',
      theirmsg: '<name> rips off all <pronoun> clothing and streaks the mud. You point and laugh hysterically',
    },
    directed: {
      adverbs: 'attentively',
      mymsg: 'You rip off all your clothing and streak around <target>',
      theirmsg: '<name> rips off all <pronoun> clothing and streaks around <target>',
    },
  },
  {
    name: 'stroke',
    directed: {
      mymsg: 'You stroke <target>',
      theirmsg: '<name> strokes <target>',
    },
  },
  {
    name: 'strut',
    noargs: {
      mymsg: 'You strut your stuff',
      theirmsg: '<name> struts proudly around the room',
    },
  },
  {
    name: 'stumble',
    noargs: {
      mymsg: 'You stumble around the room',
      theirmsg: '<name> stumbles around the room',
    },
    undirected: {
      mymsg: 'You stumble <adverb>',
      theirmsg: '<name> stumbles <adverb>',
    },
    // directed: {
    //   mymsg: 'You stumble over <target> <adverb>',
    //   theirmsg: '<name> stumbles over <target> <adverb>',
    // },
  },
  {
    name: 'sulk',
    noargs: {
      mymsg: 'You sulk in the corner',
      theirmsg: '<name> sulks in the corner',
    },
  },
  {
    name: 'sunshine',
    noargs: {
      mymsg: 'You brighten the room with rays of sunshine',
      theirmsg: '<name> brightens the room with rays of sunshine',
    },
  },
  {
    name: 'swear',
    noargs: {
      mymsg: 'You swear on your mudders life',
      theirmsg: '<name> swears on <pronoun> mudders life',
    },
    directed: {
      mymsg: 'You swear to <target> upon your mudders life',
      theirmsg: '<name> swears to <target> upon <pronoun> mudders life',
    },
  },
  {
    name: 'sweep',
    directed: {
      mymsg: 'You sweep <target> into your arms and dance romantically',
      theirmsg: '<name> sweeps <target> into <pronoun> arms and dances romantically',
    },
    undirected: {
      mymsg: 'You sweep yourself across the dance floor',
      theirmsg: '<name> sweeps <target> across the dance floor',
    },
  },
  {
    name: 'swim',
    noargs: {
      mymsg: 'You give a good imitation of swimming',
      theirmsg: '<name> swims around',
    },
  },
  {
    name: 'swoon',
    noargs: {
      mymsg: 'You swoon in a romantic daze',
      theirmsg: '<name> swoons in a romantic daze',
    },
    directed: {
      mymsg: 'You swoon romantically over <target>',
      theirmsg: '<name> swoons romantically over <target>',
    },
  },
  {
    name: 'serenade',
    noargs: {
      mymsg: 'You serenade the voices in your head with your singing',
      theirmsg: '<name> serenades the voices in <pronoun> head',
    },
    directed: {
      mymsg: 'You serenade <target> with a loving ballad',
      theirmsg: '<name>  serenades <target> with a loving ballad',
    },
  },
  {
    name: 'squeal',
    noargs: {
      mymsg: 'You squeal with delight!',
      theirmsg: '<name> lets out a sudden squeal of delight!',
    },
    directed: {
      mymsg: 'You look towards <target> and squeal with delight!',
      theirmsg: '<name> looks at <target> and squeals with delight!',
    },
  },
  {
    name: 'tackle',
    noargs: {
      theirmsg: '<name> tackles <target> to the ground',
      mymsg: 'You tackle yourself to the ground',
    },
    directed: {
      theirmsg: '<name> tackles <target> to the ground',
      mymsg: 'You tackle <target> to the ground',
    },
  },
  {
    name: 'tango',
    prepositions: 'at',
    adverbs: 'innocently',
    undirected: {
      theirmsg: '<name> starts dancing around looking for a tango partner',
      mymsg: 'You gyrate your hips in hopes of finding a tango partner',
    },
    directed: {
      theirmsg: '<name> grabs <target> and starts to romantically tango',
      mymsg: 'You grab <target> and start to romantically tango',
    },
  },
  {
    name: 'tap',
    prepositions: 'on the',
    nouns: 'head, left leg, right leg, fingers, nose, shoulder, teeth, arm',
    undirected: {
      adverbs: 'foot',
      mymsg: 'You tap your <adverb> impatiently',
      theirmsg: '<name> taps <pronoun> <noun> impatiently',
    },
    directed: {
      adverbs: 'shoulder',
      mymsg: 'You tap <target> on the <adverb>',
      theirmsg: '<name> taps <target> on the <noun>',
    },
  },
  {
    name: 'taunt',
    noargs: {
      theirmsg: '<name> taunts <target>',
      mymsg: 'You taunt yourself',
    },
    directed: {
      theirmsg: '<name> taunts <target>',
      mymsg: 'You taunt <target>',
    },
  },
  {
    name: 'tease',
    noargs: {
      theirmsg: '<name> teases <target>',
      mymsg: 'You tease yourself',
    },
    directed: {
      adverbs:
        'mercilessly, insistantly, annoyingly, lovingly, mischeviously, rudely, carefully, quickly, slowly, halfheartedly, idlely, obnoxiously',
      theirmsg: '<name> teases <target> <adverb>',
      mymsg: 'You tease <target> <adverb>',
    },
  },
  {
    name: 'thank',
    adverbs: 'profusely, gratuitously, lots, slightly, reservedly',
    directed: {
      theirmsg: '<name> thanks <target> <adverb>',
      mymsg: 'You thank <target> <adverb>',
    },
  },
  {
    name: 'think',
    noargs: {
      theirmsg: '<name> thinks carefully',
      mymsg: 'You think carefully',
    },
    undirected: {
      theirmsg: '<name> thinks <adverb>',
      mymsg: 'You think <adverb>',
    },
  },
  {
    name: 'thumbs',
    noargs: {
      mymsg: 'You give the thumbs up and say: Ayeeee',
      theirmsg: '<name> gives the thumbs up and says: Ayeeee',
    },
    directed: {
      mymsg: 'You give the thumbs up and say: Ayeeee...  to <target>',
      theirmsg: '<name> give the thumbs up and says: Ayeeee... to <target>',
    },
  },
  {
    name: 'thwap',
    noargs: {
      mymsg: 'You THWAP yourself on the head',
      theirmsg: '<name> THWAPS <pronoun> own head',
    },
    directed: {
      mymsg: 'You THWAP <target> over the head',
      theirmsg: '<name> THWAPS <target> over the head',
    },
  },
  {
    name: 'tip',
    prepositions: 'at to',
    adverbs: 'happily, pathetically, hopefully',
    undirected: {
      theirmsg: '<name> tips <pronoun> head <adverb>',
      mymsg: 'You tip your head <adverb>',
    },
    directed: {
      theirmsg: '<name> tips <pronoun> head <adverb> to <target>',
      mymsg: 'You tip your head <adverb> to <target>',
    },
  },
  {
    name: 'tickle',
    adverbs:
      'mercilessly, ruthlessly, fearlessly, quickly, sneakily, weakly, carefully, gently, harshly, inconcievablely, slowly',
    directed: {
      theirmsg: '<name> tickles <target> <adverb>',
      mymsg: 'You tickle <target> <adverb>',
    },
  },
  {
    name: 'tongue',
    directed: {
      theirmsg: '<name> sticks <pronoun> tongue out at <target>',
      mymsg: 'You stick your tongue out at <target>',
    },
  },
  {
    name: 'tremble',
    adverbs: 'in fear, in nervousness, in pain, slightly, violently, insistantly, carefully, in a pink fit',
    undirected: {
      theirmsg: '<name> trembles <adverb>',
      mymsg: 'You tremble <adverb>',
    },
  },
  {
    name: 'trip',
    noargs: {
      theirmsg: '<name> trips over <target>',
      mymsg: 'You trip over yourself',
    },
    directed: {
      theirmsg: '<name> trips over <target>',
      mymsg: 'You trip over <target>',
    },
  },
  {
    name: 'tsk',
    noargs: {
      theirmsg: '<name> makes tsking motions',
      mymsg: 'You make tsking motions',
    },
    directed: {
      theirmsg: '<name> makes tsking motions at <target>',
      mymsg: 'You make tsking motions at <target>',
    },
  },
  {
    name: 'tumble',
    noargs: {
      mymsg: 'You tumble forward',
      theirmsg: '<name> tumbles forward',
    },
    directed: {
      mymsg: 'You tackle and tumble around with <target>',
      theirmsg: '<name> tackles and tumbles around with <target>',
    },
  },
  {
    name: 'tweak',
    nouns: 'bottom, ear, arm, leg, nose, bits',
    directed: {
      theirmsg: '<name> tweaks <target> <noun>',
      mymsg: 'You tweak <target> <noun>',
    },
  },
  {
    name: 'twiddle',
    adverbs: 'thumbs, fingers, hair, nose',
    undirected: {
      theirmsg: '<name> twiddles <pronoun> <noun>',
      mymsg: 'You twiddle your <noun>',
    },
  },
  {
    name: 'twirl',
    noargs: {
      mymsg: 'You twirl around in delight',
      theirmsg: '<name> twirls around in delight',
    },
    directed: {
      mymsg: 'You twirl around <target> playfully',
      theirmsg: '<name> twirls around <target> playfully',
    },
  },
  {
    name: 'twitch',
    adverbs: 'nose, arm, body, finger, igloo',
    undirected: {
      theirmsg: '<name> twitches <pronoun> <noun>',
      mymsg: 'You twitch your <noun>',
    },
  },
  {
    name: 'twerk',
    prepositions: 'in front of',
    adverbs:
      'awkwardly, bravely, cheerfully, deeply, energetically, fiercly, grotesquely, hopelessly, innocently, jubilantly, lovingly, miserably, nervously, obnoxiously, quickly, roughly, slowly, tenderly, upwardly, vigorously, wildly, zealously',
    undirected: {
      mymsg: 'You bend over and twerk',
      theirmsg: '<name> bends over and twerks',
    },
    directed: {
      theirmsg: '<name> bends over in front of <target> and twerks <adverb>',
      mymsg: 'You bend over in front of <target> and twerk <adverb>',
    },
  },
  {
    name: 'undress',
    noargs: {
      mymsg: "You start removing all your clothes. Brrr, it's chilly!",
      theirmsg: '<name> begins removing all <pronoun> clothes',
    },
    directed: {
      mymsg: 'You gaze at <target> and slowly undress <pronoun> with your eyes',
      theirmsg: '<name>  undresses <target> with <pronoun> eyes',
    },
  },
  {
    name: 'waltz',
    prepositions: 'with, along with, with',
    directed: {
      theirmsg: '<name> waltzs around the room with <target>',
      mymsg: 'You waltz around the room with <target>',
    },
  },
  {
    name: 'wait',
    noargs: {
      mymsg: 'You wait patiently',
      theirmsg: '<name> waits patiently',
    },
    directed: {
      mymsg: 'You tap your foot waiting for <target>',
      theirmsg: '<name> tap your foot waiting for <target>',
    },
  },
  {
    name: 'wave',
    prepositions: 'at',
    adverbs:
      'tiredly, sleepily, lazily, sadly, happily, redundantly, forlornly, excitedly, longingly, pointlessly, passionately',
    noargs: {
      theirmsg: '<name> waves',
      mymsg: 'You wave',
    },
    undirected: {
      theirmsg: '<name> waves <adverb>',
      mymsg: 'You wave <adverb>',
    },
    directed: {
      theirmsg: '<name> waves <adverb> to <target>',
      mymsg: 'You wave <adverb> to <target>',
    },
  },
  {
    name: 'wedgie',
    noargs: {
      mymsg: 'You try to fix your undergarments and give yourself a wedgie',
      theirmsg: 'It appears that <name> is suddenly ashamed and uncomfortable.',
    },
    directed: {
      mymsg: 'You sneak up behind <target> and give them a wedgie',
      theirmsg: '<name> gives <target> a wedgie',
    },
  },
  {
    name: 'wheeze',
    prepositions: 'at',
    undirected: {
      theirmsg: '<name> wheezes and coughs as <pronoun> catches <pronoun> breath',
      mymsg: 'You wheeze and cough as you catch your breath',
    },
    directed: {
      theirmsg: '<name> wheezes and coughs all over <target>',
      mymsg: 'You wheeze and cough all over <target>',
    },
  },
  {
    name: 'whimper',
    // adverbs: 'painfully, fearfully, carefully, dimuatively, happily, winningly',
    undirected: {
      theirmsg: '<name> whimpers <adverb>',
      mymsg: 'You whimper <adverb>',
    },
  },
  // {
  //   name: 'whistle',
  //   prepositions: 'at',
  //   adverbs: 'innocently, appreciatively, loudly, musically, pleasantly, discordantly',
  //   undirected: {
  //     theirmsg: '<name> whistles <adverb>',
  //     mymsg: 'You whistle <adverb>',
  //   },
  //   directed: {
  //     theirmsg: '<name> whistles <adverb> at <target>',
  //     mymsg: 'You whistle <adverb> at <target>',
  //   },
  // },
  {
    name: 'wince',
    noargs: {
      theirmsg: '<name> winces',
      mymsg: 'You wince',
    },
  },
  {
    name: 'wiggle',
    prepositions: 'at',
    adverbs: 'enticingly, suggestively, vigourously, arrogantly, nonchalantly, quickly',
    undirected: {
      theirmsg: '<name> wiggles <pronoun> bottom <adverb>',
      mymsg: 'You wiggle your bottom <adverb>',
    },
    directed: {
      theirmsg: '<name> wiggles <pronoun> bottom at <target> <adverb>',
      mymsg: 'You wiggle your bottom at <target> <adverb>',
    },
  },
  {
    name: 'wink',
    prepositions: 'at',
    adverbs:
      'suggestively, slowly, loudly, grumpily, despairingly, coyly, desperately, insolently, curtly, lovingly, patiently, sadisticly, warily, seductively, lazily',
    undirected: {
      theirmsg: '<name> winks <adverb>',
      mymsg: 'You wink <adverb>',
    },
    directed: {
      theirmsg: '<name> winks <adverb> at <target>',
      mymsg: 'You wink <adverb> at <target>',
    },
  },
  {
    name: 'wipep',
    adverbs: 'in relief, briefly, enthusiastically, excitedly, wildly, happily, slightly',
    undirected: {
      theirmsg: '<name> wipes the sweat from <pronoun> brow',
      mymsg: 'You wipe the sweat from your brow <adverb>',
    },
    directed: {
      theirmsg: '<name> wipes <pronoun> <adverb> on <target>',
      mymsg: 'You wipe your <adverb> on <target>',
    },
  },
  {
    name: 'wobble',
    // adverbs: 'around a bit, like jelly, unsteadily, happily, carefully, sideways, steadily',
    undirected: {
      theirmsg: '<name> wobbles <adverb>',
      mymsg: 'You wobble <adverb>',
    },
  },
  {
    name: 'womble',
    undirected: {
      theirmsg: '<name> wombles around <adverb>',
      mymsg: 'You womble around <adverb>',
    },
  },
  {
    name: 'wonder',
    undirected: {
      theirmsg: '<name> wonders <adverb>',
      mymsg: 'You wonder <adverb>',
    },
  },
  {
    name: 'worship',
    noargs: {
      theirmsg: '<name> worships <target>',
      mymsg: 'You worship yourself',
    },
    directed: {
      theirmsg: '<name> worships <target>',
      mymsg: 'You worship <target>',
    },
  },
  {
    name: 'wrinkle',
    prepositions: 'at',
    adverbs: 'disgustingly',
    undirected: {
      theirmsg: '<name> wrinkles <pronoun> nose in disgust',
      mymsg: 'You wrinkle your nose in disgust',
    },
    directed: {
      theirmsg: '<name> wrinkles <pronoun> nose at <target> in total disgust',
      mymsg: 'You wrinkle your nose at <target> in total disgust',
    },
  },
  {
    name: 'wrist',
    noargs: {
      mymsg: 'You hold out your wrist for a slap',
      theirmsg: '<name> holds out <pronoun> wrist for a slap',
    },
    directed: {
      mymsg: 'You slap <target> on the wrist',
      theirmsg: '<name> slaps <target> on the wrist',
    },
  },
  {
    name: 'yawn',
    // abverbs: 'tiredly, boredly, sleepily',
    undirected: {
      theirmsg: '<name> yawns <adverb>',
      mymsg: 'You yawn <adverb>',
    },
  },
  {
    name: 'yip',
    undirected: {
      theirmsg: '<name> hoots Yippy kai-yah mother lover',
      mymsg: 'You hoot  Yippy kai-yah mother lover',
    },
  },
  {
    name: 'yodle',
    undirected: {
      theirmsg: '<name> thumbs <pronoun> lederhosen and hollers Yooodle-Yoodle-lai-heee-hooo like a good Hiemelian',
      mymsg: 'You thumb your lederhosen and holler Yooodle-Yoodle-lai-heee-hooo like a good Hiemelian',
    },
  },
  {
    name: 'zip',
    prepositons: 'around',
    undirected: {
      theirmsg: '<name> zips around the room',
      mymsg: 'You zip around the room',
    },
    directed: {
      theirmsg: '<name> zips around <target>',
      mymsg: 'You zip around <target>',
    },
  },
];
