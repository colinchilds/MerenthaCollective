export const emotes = [
  { ack: { undirected: { theirmsg: '<name> acks', mymsg: 'You ack' } } },
  {
    accuse: {
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
  },
  {
    apologize: {
      prepositions: 'to',
      adverbs:
        'profusely,happily,sadly,reservedly,carefully,slowly,perfunctorily, curtly,visciously,sulkily,drunkenly,unhappily,professionally, pompously,wholeheartedly,partially,wearily,fishily,facetiously, unnecessarily,spontaneously,twice,thoroughly,humbly',
      undirected: {
        theirmsg: '<name> apologizes <adverb>',
        mymsg: 'You apologize <adverb>',
      },
      directed: {
        theirmsg: '<name> apologizes <adverb> to <target>',
        mymsg: 'You apologize <adverb> to <target>',
      },
    },
  },
  {
    applaud: {
      adverbs: 'wholeheartedly,loudly,softly,vaguely,briefly',
      undirected: {
        theirmsg: '<name> applauds <adverb>',
        mymsg: 'You applaud <adverb>',
      },
      directed: {
        theirmsg: '<name> applauds <target> <adverb>',
        mymsg: 'You applaud <target> <adverb>',
      },
    },
  },
  {
    agree: {
      noargs: {
        theirmsg: '<name> agrees wholeheartedly',
        mymsg: 'You agree wholeheartedly',
      },
      directed: {
        theirmsg: '<name> agrees with <target> wholeheartedly',
        mymsg: 'You agree with <target> wholeheartedly',
      },
    },
  },
  {
    arghh: {
      undirected: {
        theirmsg: '<name> ARGHHs at everyone like an old swashbuckler',
        mymsg: "You ARGHH like an ol' swashbuckler",
      },
    },
  },
  {
    assimilate: {
      adverbs: 'cheerfully,reluctantly',
      undirected: {
        theirmsg: '<name> assimilates species <adverb> like a Borg',
        mymsg: 'You assimilate species <adverb> like a Borg',
      },
      directed: {
        theirmsg: '<name> assimilates <target> <adverb>',
        mymsg: 'You assimilate <target> <adverb>',
      },
    },
  },
  {
    bark: {
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
  },
  {
    bat: {
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
  },
  {
    beam: {
      prepositions: 'at',
      adverbs: 'brightly,admiringly,strangely,hapilly,ecstatically,fishily, like a train',
      undirected: {
        theirmsg: '<name> beams <adverb>',
        mymsg: 'You beam <adverb>',
      },
      directed: {
        theirmsg: '<name> beams <adverb> at <target>',
        mymsg: 'You beam <adverb> at <target>',
      },
    },
  },
  {
    beep: {
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
  },
  {
    beg: {
      prepositions: 'like a',
      adverbs:
        'dog,cat,chicken,cow,large bear,poodle,chihuahua, train,beggar,noble man,lassie,labrador,german shepard,cannibal, chimpanzee,librarian,fish,dolphin,tokzic,banshi, bloodhound,husky,wolf,dingo,alsation',
      noargs: { theirmsg: '<name> gets down and begs', mymsg: 'You beg' },
      undirected: {
        theirmsg: '<name> begs like a <adverb> puppy',
        mymsg: 'You beg like a <adverb> puppy',
      },
      directed: {
        theirmsg: '<name> begs <target> like a puppy',
        mymsg: 'You beg <target> like a puppy',
      },
    },
  },
  {
    bing: {
      prepositions: 'at',
      adverbs:
        'happily,sadly,joyfully,sagely,knowingly,quickly,loudly,carefully, balefully,excitedly,nervously,brightly,uncertainly',
      undirected: {
        theirmsg: '<name> bings <adverb>',
        mymsg: 'You bing <adverb>',
      },
      directed: {
        theirmsg: '<name> bings <adverb> at <target>',
        mymsg: 'You bing <adverb> at <target>',
      },
    },
  },
  {
    bird: {
      directed: {
        theirmsg: '<name> raises <pronoun> middle finger and gives <target> the bird',
        mymsg: 'You raise your middle finger and give <target> the bird',
      },
    },
  },
  {
    bite: {
      undirected: {
        theirmsg: '<name> bites $OB_FOO',
        mymsg: 'You bite yourself',
      },
      directed: {
        adverbs:
          'hard,nastily,carefuly,politely,fishily,lovingly,refreshingly, happily,like a train,pointlessly,objectively,sulkily,gently, brightly,excitedly,uncertainly,like a dog,wolfishly, mercilessly,ruthlessly,softly,sweetly,profesionally,hungrily, mischeviously,ankles,arm,leg,casually,nose,ear,toe,finger',
        theirmsg: '<name> bites <target> <adverb>',
        mymsg: 'You bite <target> <adverb>',
      },
    },
  },
  {
    bleed: {
      noargs: { theirmsg: '<name> bleeds', mymsg: 'You bleed' },
      undirected: {
        adverbs: 'heart,leg,arm,head,ear,nose',
        theirmsg: '<name> <adverb> bleeds',
        mymsg: 'Your <adverb> bleeds',
      },
    },
  },
  {
    blink: {
      prepositions: 'at',
      adverbs: 'none',
      undirected: {
        theirmsg: '<name> <adverb> blinks in disbelief',
        mymsg: 'You <adverb> blink in disbelief',
      },
      directed: {
        theirmsg: '<name> <adverb> blinks at <target> in disbelief',
        mymsg: 'You <adverb> blink at <target> in disbelief',
      },
    },
  },
  {
    blush: {
      adverbs: 'in embarassment,redly,slightly,worriedly',
      undirected: {
        theirmsg: '<name> blushes <adverb>',
        mymsg: 'You blush <adverb>',
      },
    },
  },
  {
    boggle: {
      prepositions: 'at',
      noargs: {
        theirmsg: '<name> boggles at the concept',
        mymsg: 'You boggle at the concept',
      },
      undirected: {
        theirmsg: '<name> boggles at <adverb>',
        mymsg: 'You boggle at <adverb>',
      },
    },
  },
  {
    bonk: {
      undirected: {
        theirmsg: '<name> bonks <target>',
        mymsg: 'You bonk yourself on the head',
      },
      directed: {
        theirmsg: '<name> bonks <target> on the head',
        mymsg: 'You bonk <target> on the head',
      },
    },
  },
  {
    booger: {
      prepositions: 'at',
      adverbs: 'none',
      undirected: {
        theirmsg: '<name> has a booger hanging from <pronoun> nose',
        mymsg: 'You <adverb> have a booger hanging from your nose',
      },
      directed: {
        theirmsg: '<name> picks a booger and flicks it at <target>',
        mymsg: 'You flick your boogers at <target>',
      },
    },
  },
  {
    boogie: {
      noargs: {
        mymsg: 'You boogie with your bad self',
        theirmsg: '<name> boogies with <pronoun> bad self',
      },
      directed: {
        mymsg: 'You get down and boogie with <target>',
        theirmsg: '<name> gets down and boogies with <target>',
      },
    },
  },
  {
    bop: {
      undirected: {
        theirmsg: '<name> bops about happily',
        mymsg: 'You bop about happily',
      },
      directed: {
        theirmsg: '<name> bops <target> happily',
        mymsg: 'You bop <target> happily',
      },
    },
  },
  {
    bounce: {
      noargs: { mymsg: 'You bounce up and down', theirmsg: '<name> bounces' },
      directed: {
        mymsg: 'You bounce on top of <target>',
        theirmsg: '<name> bounces on top of <target>',
      },
    },
  },
  {
    breathe: {
      undirected: {
        adverbs: 'quickly,seductively,painfully,nastily,slowly,once, heavily,carefully,heatedly',
        theirmsg: '<name> breathes <adverb>',
        mymsg: 'You breathe <adverb>',
      },
    },
  },
  {
    burp: {
      undirected: {
        adverbs: 'disgustingly,faintly,loudly,rudely',
        theirmsg: '<name> burps <adverb>',
        mymsg: 'You burp <adverb>',
      },
    },
  },
  {
    bow: {
      prepositions: 'before',
      adverbs: 'solemnly,deeply,formally',
      noargs: {
        mymsg: 'You bow respectfully',
        theirmsg: '<name> bows respectfully',
      },
      undirected: { mymsg: 'You bow <adverb>', theirmsg: '<name> bow <adverb>' },
      directed: {
        mymsg: 'You bow <adverb> before <target> ',
        theirmsg: '<name> bows <adverb> before <target>',
      },
    },
  },
  {
    burnp: {
      noargs: {
        theirmsg: '<name> sets fire to <target>',
        mymsg: 'You set fire to yourself',
      },
      directed: {
        adverbs:
          'hair,leg,arm,nose,teeth,frog,carpet,net lag, fish,invis,bed,ego,eyes,house,furniture,tongue,keyboard,brain,code, ideas,hopes,dreams,cat,personality,desires,beliefs',
        theirmsg: '<name> sets fire to <target> <adverb>',
        mymsg: 'You set fire to <target> <adverb>',
      },
    },
  },
  {
    brag: {
      noargs: {
        mymsg: 'You brag proudly about your various accomplishments. Everyone seems to believe you',
        theirmsg: '<name> brags about <pronoun> various accomplishments. There is nooooooooo way',
      },
      directed: {
        mymsg: 'You brag to <target> about your various accomplishments',
        theirmsg: '<name> brags to <target> about  <pronoun> various accomplishments',
      },
    },
  },
  {
    cackle: {
      noargs: {
        theirmsg: '<name> cackles demonically',
        mymsg: 'You cackle demonically',
      },
      undirected: {
        adverbs: 'with glee,maniacaly,mischeviously,nastily, depairingly,womblely,backwards',
        theirmsg: '<name> cackles <adverb>',
        mymsg: 'You cackle <adverb>',
      },
    },
  },
  {
    calm: {
      prepositions: 'down',
      undirected: { theirmsg: '<name> calms down', mymsg: 'You calm down' },
      directed: {
        theirmsg: '<name> calms <target> down',
        mymsg: 'You calm <target> down',
      },
    },
  },
  {
    caper: {
      prepositions: 'around',
      noargs: {
        theirmsg: '<name> capers around madly',
        mymsg: 'You caper around madly',
      },
      undirected: {
        adverbs:
          'fool,chicken,womble,jester,bimbo,blonde,sulam,seductress, eager person,vivacious person,madman,madwoman,madperson, frog on the run,happy chap,polite gentleperson,woman, cheery',
        theirmsg: '<name> capers around like a <adverb>',
        mymsg: 'You caper around like a <adverb>',
      },
    },
  },
  {
    caress: {
      directed: {
        adverbs:
          'gently,strangely,violently,firmly,seductively,suggestively, slightly,sensually,reluctantly,politely,lovingly,vigorously, eagerly,vivaciously',
        theirmsg: '<name> caresses <target> <adverb>',
        mymsg: 'You caress <target> <adverb>',
      },
    },
  },
  {
    cartwheel: {
      adverbs: 'excitedly,happily,carefully,slowly,joyfully,unsteadily, sideways,absentmindedly',
      directed: {
        mymsg: 'You cartwheel <adverb> around <target>',
        theirmsg: '<name> cartwheel <adverb> around <target>',
      },
      undirected: {
        mymsg: 'You do a cartwheel <adverb>',
        theirmsg: '<name> does a cartwheel <adverb>',
      },
    },
  },
  {
    caw: {
      prepositions: 'at',
      adverbs: 'happily,hysterically,in anger,anxiously,annoyingly,while pecking for food',
      undirected: { theirmsg: '<name> caws <adverb>', mymsg: 'You caw <adverb>' },
      directed: {
        theirmsg: '<name> CAWS CAWS CAWS at <target> <adverb>',
        mymsg: 'You CAWS CAWS CAWS at <target> <adverb>',
      },
    },
  },
  {
    cheer: {
      undirected: {
        adverbs:
          'enthusiastically,excitedly,quietly,calmly,carefully,politely, wildly,oddly,unconvincingly,happily,slightly,up',
        theirmsg: '<name> cheers <adverb>',
        mymsg: 'You cheer <adverb>',
      },
      directed: {
        adverbs:
          'enthusiastically,excitedly,quietly,calmly,carefully,politely, wildly,oddly,unconvincingly,happily,slightly,up',
        theirmsg: '<name> cheers <adverb> for <target>',
        mymsg: 'You cheer <adverb> for <target>',
      },
    },
  },
  {
    chirp: {
      prepositions: 'at',
      adverbs: 'happily,in anger,anxiously,annoyingly,while pecking for food',
      undirected: {
        theirmsg: '<name> chirps <adverb>',
        mymsg: 'You chirp <adverb>',
      },
      directed: {
        theirmsg: '<name> chirps chirps chirps at <target> <adverb>',
        mymsg: 'You chirp chirp chirp at <target> <adverb>',
      },
    },
  },
  {
    choke: {
      noargs: { theirmsg: '<name> chokes', mymsg: 'You choke' },
      directed: {
        theirmsg: '<name> chokes <target>',
        mymsg: 'You choke <target>',
      },
    },
  },
  {
    chortle: {
      noargs: {
        mymsg: 'You chortle merrily',
        theirmsg: '<name> chortles merrily',
      },
      directed: {
        mymsg: 'You chortle merrily at <target>',
        theirmsg: '<name> <adverb> chortles merrily at <target>',
      },
    },
  },
  {
    chuckle: {
      undirected: {
        adverbs: 'politely,nastily,demonically',
        theirmsg: '<name> chuckles <adverb>',
        mymsg: 'You chuckle <adverb>',
      },
    },
  },
  {
    clap: {
      undirected: {
        adverbs: 'briefly,enthusiastically,excitedly,wildly,happily,slightly',
        theirmsg: '<name> claps <adverb>',
        mymsg: 'You clap <adverb>',
      },
      directed: {
        adverbs: 'briefly,enthusiastically,excitedly,wildly,happily,slightly',
        theirmsg: '<name> claps <adverb> for <target>',
        mymsg: 'You clap <adverb> for <target>',
      },
    },
  },
  {
    comb: {
      noargs: {
        mymsg: 'You comb your hair',
        theirmsg: '<name> combs <pronoun> hair',
      },
      directed: {
        mymsg: 'You comb <target> hair',
        theirmsg: '<name> combs <target> hair',
      },
    },
  },
  {
    comfort: {
      directed: {
        adverbs:
          'sincerely,wholeheartly,mischeviously,halfheartedly,vaguely, eagerly,completely,lovingly,gently,tenderly,sadly, in earnest,twice,anxiously,carefully,delicately',
        theirmsg: '<name> comforts <target> <adverb>',
        mymsg: 'You comfort <target> <adverb>',
      },
    },
  },
  {
    confess: {
      noargs: {
        theirmsg: '<name> confesses <pronoun> sins',
        mymsg: 'You confess your sins',
      },
      directed: {
        theirmsg: '<name> confesses <pronoun> sins to <target>',
        mymsg: 'You confess your sins to <target>',
      },
    },
  },
  {
    congratulate: {
      directed: {
        adverbs: 'heartily,warmly',
        theirmsg: '<name> congratulates <target> <adverb>',
        mymsg: 'You congratulate <target> <adverb>',
      },
      noargs: {
        theirmsg: '<name> congratulates everyone',
        mymsg: 'You congratulate everyone',
      },
    },
  },
  {
    cootie: {
      noargs: {
        mymsg: 'You announce you have cooties',
        theirmsg: '<name> announces <pronoun> has cooties',
      },
      directed: {
        mymsg: 'You give <target> the cooties',
        theirmsg: '<name> gives <target> cooties',
      },
    },
  },
  {
    cough: {
      undirected: {
        adverbs: 'happily,loudly,quietly,excitedly,disgustingly, sadly,pinkly',
        theirmsg: '<name> coughs <adverb>',
        mymsg: 'You cough <adverb>',
      },
    },
  },
  {
    cower: {
      undirected: {
        adverbs: 'in a corner,fearfully,slyly,shyly,in shame,nastily',
        theirmsg: '<name> cowers <adverb>',
        mymsg: 'You cower <adverb>',
      },
    },
  },
  {
    crack: {
      undirected: {
        theirmsg: '<name> cracks <pronoun> knuckles',
        mymsg: 'You crack your knuckles',
      },
      directed: {
        theirmsg: '<name> finally cracks and confesses all <pronoun> feelings for <target>',
        mymsg: 'You finally crack and confess all your feelings for <target>',
      },
    },
  },
  {
    cringe: {
      undirected: {
        adverbs: 'terror,embarassment',
        theirmsg: '<name> cringes in <adverb>',
        mymsg: 'You cringe in <adverb>',
      },
    },
  },
  {
    croak: {
      noargs: { theirmsg: '<name> croaks loudly', mymsg: 'You croak loudly' },
    },
  },
  {
    cross: {
      undirected: {
        adverbs: 'fingers,legs,eyes,nose',
        theirmsg: '<name> crosses <pronoun> <adverb>',
        mymsg: 'You cross your <adverb>',
      },
    },
  },
  {
    cry: {
      noargs: { theirmsg: '<name> cries mournfully', mymsg: 'You cry mournfully' },
    },
  },
  {
    cuddle: {
      directed: {
        theirmsg: '<name> cuddles <target>',
        mymsg: 'You cuddle <target>',
      },
    },
  },
  {
    cursep: {
      noargs: {
        mymsg: 'You mumble bad words to yourself',
        theirmsg: '<name> mumbles some bad words',
      },
      directed: {
        mymsg: 'You mumble bad words about <target>',
        theirmsg: '<name> mumbles bad words about <target>',
      },
    },
  },
  {
    curtsey: {
      undirected: {
        theirmsg: '<name> curtseys gracefully',
        mymsg: 'You curtsey gracefully',
      },
      directed: {
        theirmsg: '<name> curtseys gracefully to <target>',
        mymsg: 'You curtsey gracefully to <target>',
      },
    },
  },
  {
    dance: {
      noargs: {
        mymsg: 'You sweep yourself across the dance floor',
        theirmsg: '<name> sweeps <target> across the dance floor',
      },
      directed: {
        theirmsg: '<name> sweeps <target> across the dance floor',
        mymsg: 'You sweep <target> across the dance floor',
      },
    },
  },
  {
    dart: {
      noargs: {
        theirmsg: '<name> darts back and forth',
        mymsg: 'You dart back and forth',
      },
    },
  },
  {
    daydream: {
      noargs: { theirmsg: '<name> daydreams', mymsg: 'You daydream' },
      undirected: {
        theirmsg: '<name> daydreams <adverb>',
        mymsg: 'You daydream <adverb>',
      },
    },
  },
  {
    dip: {
      prepositions: 'at',
      adverbs: 'innocently',
      undirected: {
        theirmsg: '<name> dips <pronoun> invisible friend',
        mymsg: 'You dip your invisable friend',
      },
      directed: { theirmsg: '<name> dips <target>', mymsg: 'You dip <target>' },
    },
  },
  { doh: { noargs: { theirmsg: ' <name> says: doh!', mymsg: 'You say: doh!' } } },
  {
    drool: {
      noargs: {
        theirmsg: '<name> messily drools all over the place',
        mymsg: 'You start to drool',
      },
      directed: {
        theirmsg: '<name> drools all over <target>',
        mymsg: 'You drool all over <target>',
      },
    },
  },
  {
    drum: {
      undirected: {
        theirmsg: '<name> drums <pronoun> chest like King-Kong',
        mymsg: 'You drum your chest like King-Kong',
      },
      directed: {
        theirmsg: '<name> drums on top of <target> head',
        mymsg: 'You drum on top of <target> head',
      },
    },
  },
  {
    duck: {
      noargs: {
        theirmsg: '<name> ducks out of the way',
        mymsg: 'You duck out of the way',
      },
      directed: {
        theirmsg: '<name> ducks behind <target>',
        mymsg: 'You duck behind <target>',
      },
    },
  },
  { duh: { noargs: { theirmsg: '<name> duhs', mymsg: 'You duh' } } },
  {
    eek: {
      prepositions: 'at',
      adverbs: 'none',
      undirected: { theirmsg: '<name> eeks!', mymsg: 'You eek!' },
      directed: {
        theirmsg: '<name> eeks! at <target>',
        mymsg: 'You eek! at <target>',
      },
    },
  },
  { eep: { undirected: { theirmsg: '<name> eeps', mymsg: 'You eep' } } },
  {
    eye: {
      directed: {
        theirmsg: '<name> eyes <target> over',
        mymsg: 'You eye <target> over',
      },
    },
  },
  {
    expect: {
      directed: {
        theirmsg: '<name> looks expectantly at <target>',
        mymsg: 'You look expectantly at <target>',
      },
    },
  },
  {
    explode: {
      noargs: {
        theirmsg: '<name> explodes into thousands of tiny pieces',
        mymsg: 'You explode into thousands of tiny pieces',
      },
    },
  },
  {
    faint: {
      undirected: {
        adverbs: 'tiredly,out of boredom,for the heck of it',
        theirmsg: '<name> faints <adverb>',
        mymsg: 'You faint <adverb>',
      },
      directed: {
        theirmsg: '<name> faints on <target>',
        mymsg: 'You faint on <target>',
      },
    },
  },
  { fart: { noargs: { theirmsg: '<name> farts', mymsg: 'You fart' } } },
  {
    fiddle: {
      noargs: { theirmsg: '<name> fiddles around', mymsg: 'You fiddle around' },
    },
  },
  {
    fidget: {
      undirected: {
        theirmsg: '<name> fidgets anxiously',
        mymsg: 'You fidget anxiously',
      },
    },
  },
  {
    flap: {
      undirected: {
        adverbs: 'ears,arms,wings,eyelashes',
        theirmsg: '<name> flaps <pronoun> <adverb>',
        mymsg: 'You flap your <adverb>',
      },
    },
  },
  {
    flex: {
      undirected: {
        adverbs: 'muscles,bisceps,triceps,legs,brain,nose,ears',
        theirmsg: '<name> flexes <pronoun> <adverb>',
        mymsg: 'You flex your <adverb>',
      },
    },
  },
  {
    flick: {
      noargs: {
        mymsg: 'You flick your boogers into the air',
        theirmsg: '<name> flicks <pronoun> boogers into the air',
      },
      directed: {
        mymsg: 'You flick <target> on the ear really hard',
        theirmsg: '<name> flicks <target> on the ear really hard',
      },
    },
  },
  {
    flip: {
      undirected: {
        adverbs:
          'head over heels,backwards,forwards,sideways,around, carefully,slowly,twice,awkwardly,disturbingly, digustingly,quickly,slowly,gracefully,over the moon, around in a really complicated double back roll flip',
        theirmsg: '<name> flips <adverb>',
        mymsg: 'You flip <adverb>',
      },
      directed: {
        adverbs: 'head over heels,off,into the garbage bin, dangerously,spectacularly',
        theirmsg: '<name> flips <target> <adverb>',
        mymsg: 'You flip <target> <adverb>',
      },
    },
  },
  {
    flirt: {
      prepositions: 'with',
      directed: {
        theirmsg: '<name> teasingly flirts with <target>',
        mymsg: 'You teasingly flirt with <target>',
      },
    },
  },
  {
    flop: {
      undirected: {
        adverbs:
          'helplessly,like a fish out of water,badly, carefully,rudely,a bit,once,wonderfully, impressively,suggestively,lazily,happily,pensively',
        theirmsg: '<name> flops about <adverb>',
        mymsg: 'You flop about <adverb>',
      },
    },
  },
  {
    flourish: {
      noargs: {
        mymsg: 'You gallantly flourish your cloak, and bow gracefully',
        theirmsg: '<name> gallantly flourishes <pronoun> cloak, and bows gracefully',
      },
      directed: {
        mymsg: 'You gallantly flourish your cloak, and bow gracefully before <target>',
        theirmsg: '<name> gallantly flourishes <pronoun> cloak and bows gracefully before <target>',
      },
    },
  },
  {
    flustered: {
      noargs: { theirmsg: '<name> looks flustered', mymsg: 'You look flustered' },
    },
  },
  {
    fondle: {
      directed: {
        theirmsg: '<name> fondles <target>',
        mymsg: 'You fondle <target>',
      },
    },
  },
  {
    foo: {
      undirected: {
        adverbs: 'vaguely,carefully,slowly,dangerously',
        theirmsg: '<name> foos <adverb>',
        mymsg: 'You foo <adverb>',
      },
    },
  },
  {
    forgivep: {
      directed: {
        theirmsg: '<name> forgives <target>',
        mymsg: 'You forgive <target>',
      },
    },
  },
  {
    french: {
      directed: {
        theirmsg: '<name> frenches <target> deeply',
        mymsg: 'You french <target> deeply',
      },
    },
  },
  {
    frolic: {
      noargs: { theirmsg: '<name> frolics around', mymsg: 'You frolic around' },
    },
  },
  {
    froth: {
      noargs: {
        theirmsg: '<name> froths at the mouth',
        mymsg: 'You froth at the mouth',
      },
    },
  },
  {
    frown: {
      adverbs: 'in concentration,in thought,in anger,in depression, happily',
      noargs: { theirmsg: '<name> frowns', mymsg: 'You frown' },
      undirected: {
        theirmsg: '<name> frowns <adverb>',
        mymsg: 'You frown <adverb>',
      },
      directed: {
        theirmsg: '<name> frowns <adverb> at <target>',
        mymsg: 'You frown <adverb> at <target>',
      },
    },
  },
  {
    fumble: {
      undirected: {
        theirmsg: '<name> fumbles around all embarassed like',
        mymsg: 'You fumble around all embarassed like',
      },
    },
  },
  {
    fume: {
      adverbs: 'quietly,insultingly,despairingly',
      undirected: {
        theirmsg: '<name> fumes <adverb>',
        mymsg: 'You fume <adverb>',
      },
    },
  },
  {
    gasp: {
      noargs: { theirmsg: '<name> gasps in shock', mymsg: 'You gasp in shock' },
    },
  },
  {
    gesticulate: {
      noargs: {
        mymsg: 'You gesticulate wildly',
        theirmsg: '<name> gesticulates wildly',
      },
    },
  },
  {
    gibber: {
      noargs: { mymsg: 'You gibber madly', theirmsg: '<name> gibbers madly' },
    },
  },
  {
    giggle: {
      adverbs: 'inanely,loudly,stupidly,quietly,idiotically,fiendishly',
      undirected: {
        mymsg: 'You giggle <adverb>',
        theirmsg: '<name> giggles <adverb>',
      },
    },
  },
  {
    glance: {
      noargs: {
        mymsg: 'You glance at nothing in particular',
        theirmsg: '<name> glances at nothing in particular',
      },
      directed: {
        mymsg: 'You casually glance at <target>',
        theirmsg: '<name> casually glances at <target>',
      },
    },
  },
  {
    glare: {
      prepositions: 'at',
      adverbs: 'stonily,sternly,hotly,intently,solemnly,idiotically, evanly,evilly',
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
  },
  {
    goose: {
      noargs: {
        mymsg: 'You goose yourself on the tushie',
        theirmsg: '<name> gooses <target> on the tushie',
      },
      directed: {
        mymsg: 'You goose <target> on the tushie',
        theirmsg: '<name> gooses <target> on the tushie',
      },
    },
  },
  {
    greet: {
      adverbs:
        'happily,sadly,with open arms,ecstatically, carefully, courteously,hysterically,reservedly,warmly,coldly, insolently,curtly,absentmindedly',
      directed: {
        mymsg: 'You greet <target> <adverb>',
        theirmsg: '<name> greets <target> <adverb>',
      },
    },
  },
  { grimace: { undirected: { theirmsg: '<name> grimaces', mymsg: 'You grimace' } } },
  {
    grin: {
      noargs: { theirmsg: '<name> grins evilly', mymsg: 'You grin evilly' },
      directed: {
        theirmsg: '<name> grins evilly at <target>',
        mymsg: 'You grin evilly at <target>',
      },
    },
  },
  {
    grincat: {
      noargs: {
        theirmsg: '<name> grins like a cheshire cat',
        mymsg: 'You grin like a cheshire cat',
      },
      directed: {
        theirmsg: '<name> grins like a cheshire cat at <target>',
        mymsg: 'You grin like a cheshire cat at <target>',
      },
    },
  },
  {
    grinf: {
      noargs: { theirmsg: '<name> grins foolishly', mymsg: 'You grin foolishly' },
      directed: {
        theirmsg: '<name> grins foolishly at <target>',
        mymsg: 'You grin foolishly at <target>',
      },
    },
  },
  {
    grinhap: {
      noargs: { theirmsg: '<name> grins happily', mymsg: 'You grin happily' },
      directed: {
        theirmsg: '<name> grins happily at <target>',
        mymsg: 'You grin happily at <target>',
      },
    },
  },
  {
    grinhid: {
      noargs: { theirmsg: '<name> grins hideously', mymsg: 'You grin hideously' },
      directed: {
        theirmsg: '<name> grins hideously at <target>',
        mymsg: 'You grin hideously at <target>',
      },
    },
  },
  {
    grinm: {
      noargs: {
        theirmsg: '<name> grins mischievously',
        mymsg: 'You grin mischievously',
      },
      directed: {
        theirmsg: '<name> grins mischievously at <target>',
        mymsg: 'You grin mischievously at <target>',
      },
    },
  },
  {
    grind: {
      adverbs: 'loudly,resignedly,together',
      undirected: {
        mymsg: 'You grind your teeth <adverb>',
        theirmsg: '<name> grinds <pronoun> teeth <adverb>',
      },
    },
  },
  {
    groan: {
      adverbs: 'loudly,resignedly,tiredly',
      undirected: {
        mymsg: 'You groan <adverb>',
        theirmsg: '<name> groans <adverb>',
      },
    },
  },
  {
    grope: {
      adverbs: ',#',
      undirected: {
        mymsg: 'You grope <adverb>',
        theirmsg: '<name> gropes <adverb>',
      },
      directed: {
        mymsg: 'You grope <target> body <adverb>',
        theirmsg: '<name> gropes <target> body <adverb>',
      },
    },
  },
  {
    grovel: {
      prepositions: 'at',
      adverbs: 'shamelessly,violently,unashamedly,respectfully, like bastian,like a dog,sarcastically',
      directed: {
        mymsg: 'You grovel <adverb> at <target> feet',
        theirmsg: '<name> grovels <adverb> at <target> feet',
      },
    },
  },
  {
    growl: {
      prepositions: 'at',
      adverbs: 'menacingly,nastily,loudly,playfully',
      undirected: {
        mymsg: 'You growl <adverb>',
        theirmsg: '<name> growls <adverb>',
      },
      directed: {
        mymsg: 'You growl <adverb> at <target>',
        theirmsg: '<name> growls <adverb> at <target>',
      },
    },
  },
  {
    grumble: {
      prepositions: 'at',
      adverbs:
        'quietly,bitterly,menacingly,halfheartedly,seductively, suggestively,loudly,annoyingly,devastatingly,carefully, wildly,more or less,jealously',
      undirected: {
        mymsg: 'You grumble <adverb>',
        theirmsg: '<name> grumbles <adverb>',
      },
      directed: {
        mymsg: 'You grumble <adverb> at <target>',
        theirmsg: '<name> grumbles <adverb> at <target>',
      },
    },
  },
  {
    grunt: {
      adverbs: 'in ignitation,carefully,rudely',
      undirected: {
        mymsg: 'You grunt <adverb>',
        theirmsg: '<name> grunts <adverb>',
      },
    },
  },
  {
    gurgle: {
      prepositions: 'at',
      adverbs: 'noisily,rudely,loudly,mischievously,happily,carefully, disgustingly,in surprise,like a train,quickly,slowly',
      undirected: {
        mymsg: 'You gurgle <adverb>',
        theirmsg: '<name> gurgles <adverb>',
      },
      directed: {
        mymsg: 'You gurgle <adverb> at <target>',
        theirmsg: '<name> gurgles <adverb> at <target>',
      },
    },
  },
  {
    gwert: {
      noargs: { theirmsg: '<name> does the gwert', mymsg: 'You do the gwert' },
      directed: {
        theirmsg: '<name> does the gwert with <target>',
        mymsg: 'You do the gwert with <target>',
      },
    },
  },
  {
    grab: {
      noargs: {
        mymsg: 'You grab about at things',
        theirmsg: '<name> grabs about at things',
      },
      directed: {
        mymsg: 'You grab <target> from behind',
        theirmsg: '<name> grabs <target> from behind',
      },
    },
  },
  {
    hang: {
      noargs: {
        mymsg: 'You hang your head in shame',
        theirmsg: '<name> hangs <pronoun> head in shame',
      },
    },
  },
  {
    headbutt: {
      directed: {
        mymsg: 'You headbutt <target>',
        theirmsg: '<name> headbutts <target>',
      },
    },
  },
  {
    headstand: {
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
  },
  { hiccup: { noargs: { mymsg: 'You hiccup', theirmsg: '<name> hiccups' } } },
  {
    holdb: {
      prepositions: 'on,onto',
      adverbs: 'close,down,tightly,warmly,gently,lovingly,back,up',
      noargs: { mymsg: 'You hold back', theirmsg: '<name> holds back' },
      directed: {
        mymsg: 'You hold <target> <adverb>',
        theirmsg: '<name> holds <target> <adverb>',
      },
    },
  },
  {
    hop: {
      noargs: {
        mymsg: 'You hop around like a bunny rabbit',
        theirmsg: '<name> hops around like a bunny rabbit',
      },
    },
  },
  {
    hoot: {
      prepositions: 'at',
      adverbs: 'like an owl,hysterically,in warning,anxiously,annoyingly,to signal another probably hiding somewhere near',
      undirected: {
        theirmsg: '<name> hoots <adverb>',
        mymsg: 'You hoot <adverb>',
      },
      directed: {
        theirmsg: '<name> HOOTS HOOTS HOOTS at <target> <adverb>',
        mymsg: 'You HOOT HOOT HOOT at <target> <adverb>',
      },
    },
  },
  {
    howlp: {
      adverbs:
        'at the sky,tunelessly,annoyingly,aguely,absentmindedly, while you work,distractedly,pointlessly,silently,loudly, rudely',
      undirected: {
        mymsg: 'You howl pathetically',
        theirmsg: '<name> howl <adverb>',
      },
    },
  },
  {
    hug: {
      adverbs: 'tightly,warmly,gently,close',
      directed: {
        mymsg: 'You hug <target> <adverb>',
        theirmsg: '<name> hugs <target> <adverb>',
      },
    },
  },
  {
    hiss: {
      noargs: {
        mymsg: 'You hiss in disgust',
        theirmsg: '<name> hisses in disgust',
      },
      directed: {
        mymsg: 'You hiss in disgust at <target>',
        theirmsg: '<name> hisses in disgust at <target>',
      },
    },
  },
  {
    huggle: {
      noargs: {
        mymsg: 'You huggle yourself in self pity',
        theirmsg: '<name> huggles <target>',
      },
      directed: {
        mymsg: 'You huggle <target> affectionately',
        theirmsg: '<name> huggles <target> affectionately',
      },
    },
  },
  {
    hum: {
      adverbs:
        'a merry tune,tunelessly,annoyingly,aguely,absentmindedly, while you work,distractedly,pointlessly,silently,loudly, rudely',
      undirected: {
        mymsg: 'You hum <adverb> a merry little tune',
        theirmsg: '<name> hums <adverb> a merry little tune',
      },
    },
  },
  {
    hurlp: {
      prepositions: 'like a',
      adverbs: 'dog,cat,chicken,cow,large bear,poodle,chihuahua',
      noargs: { theirmsg: '<name> hurls chunks', mymsg: 'You hurl chunks' },
      undirected: { theirmsg: '<name> hurls chunks', mymsg: 'You hurl chunks' },
      directed: {
        theirmsg: '<name> hurls chunks all over <target>',
        mymsg: 'You hurl chunks all over <target>',
      },
    },
  },
  {
    ignorep: {
      undirected: {
        mymsg: 'You ignore the world',
        theirmsg: '<name> ignores the world',
      },
      directed: {
        mymsg: 'You ignore <target>',
        theirmsg: '<name> ignores <target>',
      },
    },
  },
  {
    juggle: {
      adverbs:
        'balls,sticks,battons,cats,dogs,frogs,chickens,swords,knives, arms,legs,balls,trees,chain saws,bottles,torches,bings, tree stumps,logs,wine glasses,water,people,fire',
      undirected: {
        mymsg: 'You juggle ineptly',
        theirmsg: '<name> juggles <adverb> ineptly',
      },
    },
  },
  {
    jump: {
      adverbs: 'excitedly,happily,carefully,slowly,joyfully,unsteadily, sideways,absentmindedly',
      directed: {
        mymsg: 'You jump <adverb> up and down on <target>',
        theirmsg: '<name> jumps up and down <adverb> on <target>',
      },
      undirected: {
        mymsg: 'You jump up and down <adverb>',
        theirmsg: '<name> jumps up and down <adverb>',
      },
    },
  },
  {
    kick: {
      noargs: { mymsg: 'You kick yourself', theirmsg: '<name> kicks <target>' },
      directed: { mymsg: 'You kick <target>', theirmsg: '<name> kicks <target>' },
    },
  },
  {
    kiss: {
      adverbs: 'passionately,deeply,tenderly,gently,lovingly,lengthily, fishily,carefully,demandingly,sensuously',
      directed: {
        mymsg: 'You kiss <target> <adverb>',
        theirmsg: '<name> kisses <target> <adverb>',
      },
    },
  },
  {
    kissb: {
      adverbs: 'passionately,deeply,tenderly,gently,lovingly,lengthily, fishily,carefully,demandingly,sensuously',
      directed: {
        mymsg: 'You blow a kiss to <target>',
        theirmsg: '<name> blows kisses at <target>',
      },
    },
  },
  {
    kissc: {
      adverbs: 'passionately,deeply,tenderly,gently,lovingly,lengthily, fishily,carefully,demandingly,sensuously',
      directed: {
        mymsg: 'You kiss <target> sweetly on the cheek',
        theirmsg: '<name> kisses <target> sweetly on the cheek',
      },
    },
  },
  {
    kisshand: {
      adverbs: 'demurely,passionately,tenderly,gently,lovingly,sensuously',
      directed: {
        mymsg: 'You kiss <target> <adverb> upon the hand',
        theirmsg: '<name> kisses <target> upon the hand <adverb>',
      },
    },
  },
  {
    kissp: {
      adverbs: 'passionately,deeply,tenderly,gently,lovingly,lengthily, fishily,carefully,demandingly,sensuously',
      directed: {
        mymsg: 'You kiss <target> passionately',
        theirmsg: '<name> kisses <target> passionately',
      },
    },
  },
  {
    kisss: {
      adverbs: 'passionately,deeply,tenderly,gently,lovingly,lengthily, fishily,carefully,demandingly,sensuously',
      directed: {
        mymsg: 'You kiss <target> seductively',
        theirmsg: '<name> kisses <target> seductively',
      },
    },
  },
  {
    knee: {
      noargs: { mymsg: 'You knee yourself', theirmsg: '<name> knees <target>' },
      directed: { mymsg: 'You knee <target>', theirmsg: '<name> knees <target>' },
    },
  },
  {
    kneel: {
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
  },
  {
    laugh: {
      adverbs: 'nastily,nicely,quietly,uncontrollably,politely,happily, manically,estaticly,demonically',
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
  },
  {
    leap: {
      adverbs: 'longingly,excitedly,quickly,slowly,awkwardly,politlely, quietly,noisily',
      directed: {
        mymsg: 'You leap <adverb> into <target> arms',
        theirmsg: '<name> leaps <adverb> into <target> arms',
      },
      undirected: {
        mymsg: 'You leap <adverb> into the air',
        theirmsg: '<name> leaps <adverb> into the air',
      },
    },
  },
  {
    leaps: {
      adverbs: 'longingly,excitedly,quickly,slowly,awkwardly,politlely, quietly,noisily',
      directed: {
        mymsg: 'You leap <adverb> into <target> arms',
        theirmsg: '<name> leaps <adverb> into <pronoun> arms',
      },
      undirected: {
        mymsg: 'You leap <adverb> into the air',
        theirmsg: '<name> leaps <adverb> into the air',
      },
    },
  },
  {
    leer: {
      noargs: {
        mymsg: 'You leer at yourself',
        theirmsg: '<name> leers at <target>',
      },
      directed: {
        mymsg: 'You leer at <target>',
        theirmsg: '<name> leers at <target>',
      },
    },
  },
  {
    lick: {
      noargs: {
        mymsg: 'You lick your lips',
        theirmsg: '<name> licks <pronoun> lips',
      },
      directed: { mymsg: 'You lick <target>', theirmsg: '<name> licks <target>' },
    },
  },
  {
    lickle: {
      directed: {
        mymsg: 'You give <target> a long, slow, seductive lick with your tongue',
        theirmsg: '<name> gives <target> a long, slow, seductive lick',
      },
    },
  },
  {
    loom: {
      directed: {
        mymsg: 'You loom over <target>',
        theirmsg: '<name> looms over <target>',
      },
    },
  },
  {
    love: {
      directed: {
        mymsg: 'You whisper sweet nothings to <target>',
        theirmsg: '<name> whispers sweet nothings to <target>',
      },
    },
  },
  {
    lower: {
      adverbs:
        'quickly,slowly,quizicaly,silently,loudly,with a pitch fork, backwards,sideways,cleverly,surprisingly,playfully, sternly,unnoticeably,macarbly, scepticaly',
      undirected: {
        mymsg: 'You lower your eyebrows <adverb>',
        theirmsg: '<name> lowers <pronoun> eyebrows <adverb>',
      },
    },
  },
  {
    madness: {
      adverbs: 'wholeheartedly,loudly,softly,vaguely,briefly',
      undirected: {
        theirmsg: '<name> rubs <pronoun> hands together evilly and laughs like a madman ',
        mymsg: 'You rub your hands together evilly and laugh like a madman',
      },
      directed: {
        theirmsg: '<name> rubs <pronoun> hands together evilly and laughs like a madman at <target>',
        mymsg: 'You rub your hands together evilly and laugh like a madman at <target>',
      },
    },
  },
  {
    massage: {
      adverbs:
        'good,bad,ugly,long,refreshing,pink,full body,seductive, sensuous,strange,painful,deep,meaningful,ergonomic,economic, painless,memorable,different,unwanted,unwarranted, unprovoked,unknown,sneaky,unnoticed,unwieldly,back, professional,unprofessional,happy,sad,trained,untrained, train,compact,quick,foot,leg,arm,head, ear,neck,shoulder,nose',
      directed: {
        mymsg: 'You give <target> a <adverb> massage',
        theirmsg: '<name> gives <target> a <adverb> massage',
      },
    },
  },
  {
    meep: {
      undirected: { theirmsg: '<name> meeps meekly', mymsg: 'You meep meekly' },
    },
  },
  { melt: { undirected: { theirmsg: '<name> melts', mymsg: 'You melt' } } },
  { meow: { noargs: { theirmsg: '<name> meows', mymsg: 'You meow' } } },
  {
    moan: {
      adverbs: 'gently,deeply,sensually,agonisingly,in terror,seductively',
      undirected: {
        mymsg: 'You moan <adverb>',
        theirmsg: '<name> moans <adverb>',
      },
    },
  },
  {
    moo: {
      adverbs: 'like a cow,gently,deeply,sensually,agonisingly,in terror,seductively',
      undirected: { mymsg: 'You moo <adverb>', theirmsg: '<name> moos <adverb>' },
    },
  },
  {
    moon: {
      directed: {
        mymsg: 'You drop your pants and moon <target>',
        theirmsg: '<name> drops <pronoun> pants and moons <target>',
      },
    },
  },
  {
    mosh: {
      undirected: {
        adverbs: 'violently,angrily,carefully,thoughtfully,wonderingly, vigously,insanely,loudly',
        theirmsg: '<name> moshes <adverb> around the room',
        mymsg: 'You mosh <adverb> around the room',
      },
    },
  },
  {
    mutter: {
      undirected: {
        theirmsg: '<name> mutters <adverb> under <pronoun> breath',
        mymsg: 'You mutter <adverb> under your breath',
      },
    },
  },
  {
    nestle: {
      adverbs: 'affectionately,lovingly,curiously',
      directed: {
        mymsg: 'You nestle up to <target> <adverb>',
        theirmsg: '<name> nestle up to  <target> <adverb>',
      },
    },
  },
  {
    nibble: {
      adverbs: 'ear,finger,lip,arm,leg,toe,neck,nose',
      directed: {
        mymsg: 'You nibble on <target> <adverb>',
        theirmsg: '<name> nibbles on <target> <adverb>',
      },
    },
  },
  {
    nip: {
      noargs: {
        mymsg: 'You nip at an itchy spot, you may have fleas again',
        theirmsg: '<name> nips at an itchy spot. Looks like <pronoun> might have fleas again',
      },
      directed: {
        mymsg: 'You playfully nip <target>',
        theirmsg: '<name> playfully nips <target>',
      },
    },
  },
  {
    nod: {
      adverbs: 'solemnly,happily,brightly,curtly,patiently,slowly,knowingly, vigorously,tentatively',
      undirected: {
        mymsg: 'You nod <adverb> ',
        theirmsg: '<name> nods <adverb>',
      },
      directed: {
        mymsg: 'You nod <adverb> at <target>',
        theirmsg: '<name> nods <adverb> at <target>',
      },
    },
  },
  {
    noise: {
      undirected: {
        adverbs:
          'bungle,flurgle,zongle-wop,wop,whirr,burble,frog,moo,train, hairy,twisted,wap,pop,rat,mouse,chicken,womble,guppy, cow,rabbit,kangaroo,gumby',
        theirmsg: '<name> makes a <adverb> noise',
        mymsg: 'You make a <adverb> noise',
      },
      noargs: {
        theirmsg: '<name> makes a funny noise',
        mymsg: 'You make a funny noise',
      },
    },
  },
  {
    noogie: {
      noargs: {
        mymsg: 'You noogie yourself like an idiot',
        theirmsg: '<name> noogies <target>',
      },
      directed: {
        mymsg: 'You give <target> a noogie',
        theirmsg: '<name> gives <target> a noogie',
      },
    },
  },
  {
    nudge: {
      directed: {
        theirmsg: '<name> nudges <target>',
        mymsg: 'You nudge <target>',
      },
    },
  },
  {
    nuzzle: {
      directed: {
        theirmsg: '<name> nuzzles <target> affectionately',
        mymsg: 'You nuzzle <target> affectionately',
      },
    },
  },
  {
    nyuck: {
      noargs: {
        mymsg: 'You Nyuck, Nyuck, Nyuck',
        theirmsg: '<name> Nyuck, Nyuck, Nyucks',
      },
      directed: {
        mymsg: 'You Nyuck, Nyuck, Nyuck at <target>',
        theirmsg: '<name> Nyuck, Nyuck, Nyucks at <target>',
      },
    },
  },
  {
    ok: {
      noargs: {
        mymsg: 'You give the Okay sign and say: Okie dokie',
        theirmsg: '<name> gives the Okay sign and says: Okie dokie',
      },
      directed: {
        mymsg: 'You give the Okay sign and say: Okie dokie! to <target>',
        theirmsg: '<name> gives the Okay sign and says: Okie dokie! to <target>',
      },
    },
  },
  {
    oogle: {
      undirected: {
        adverbs:
          'enthusiastically,excitedly,quietly,calmly,carefully,politely, wildly,oddly,unconvincingly,happily,slightly,up',
        theirmsg: '<name> oogles like a fool',
        mymsg: 'You oogle like a fool',
      },
      directed: {
        adverbs:
          'enthusiastically,excitedly,quietly,calmly,carefully,politely, wildly,oddly,unconvincingly,happily,slightly,up',
        theirmsg: '<name> oogles over <target>',
        mymsg: 'You oogle over  <target>',
      },
    },
  },
  { panic: { noargs: { theirmsg: '<name> panics', mymsg: 'You panic' } } },
  {
    pant: {
      noargs: {
        theirmsg: '<name> pants like a dog',
        mymsg: 'You pant like a dog',
      },
    },
  },
  {
    pat: {
      directed: {
        theirmsg: '<name> pats <target> on the head',
        mymsg: 'You pat <target> on the head',
      },
    },
  },
  {
    pet: {
      directed: { theirmsg: '<name> pets <target>', mymsg: 'You pet <target>' },
    },
  },
  {
    peer: {
      adverbs:
        'suspiciously,quizically,anoxiously,stupidly,warningly, expectantly,happily,sadly,desperately,worriedly,strangely, uncertainly,lazily,rudely,disappointedly, fearfully,like a train,curiously,tentatively, warily,nervously,carefully,warningly,owlishly,dazedly',
      undirected: {
        theirmsg: '<name> peers <adverb> around the room',
        mymsg: 'You peer <adverb> around the room',
      },
      directed: {
        theirmsg: '<name> peers <adverb> at <target>',
        mymsg: 'You peer <adverb> at <target>',
      },
    },
  },
  {
    pinch: {
      noargs: {
        theirmsg: '<name> pinches <target>',
        mymsg: 'You pinch yourself',
      },
      directed: {
        theirmsg: '<name> pinches <target> on the tushie',
        mymsg: 'You pinch <target> on the tushie',
      },
    },
  },
  {
    ping: {
      directed: {
        theirmsg: '<name> pings at <target>',
        mymsg: 'You ping at <target>',
      },
    },
  },
  {
    plead: {
      undirected: {
        theirmsg: '<name> pleads desperately',
        mymsg: 'You plead desperately',
      },
    },
  },
  {
    point: {
      prepositions: 'at',
      adverbs: 'innocently,accusingly,straight',
      undirected: { theirmsg: '<name> points', mymsg: 'You point' },
      directed: {
        theirmsg: '<name> points directly at <target>',
        mymsg: 'You point directly at <target>',
      },
    },
  },
  {
    poke: {
      directed: {
        adverbs: 'ribs,nose,leg,frog,arm',
        theirmsg: '<name> pokes <target> in the <adverb>',
        mymsg: 'You poke <target> in the <adverb>',
      },
    },
  },
  {
    ponder: {
      adverbs: 'the situation',
      undirected: {
        theirmsg: '<name> ponders <adverb>',
        mymsg: 'You ponder <adverb>',
      },
    },
  },
  {
    pontificate: {
      noargs: {
        mymsg: 'You pontificate profusely',
        theirmsg: '<name> pontificates profusley',
      },
    },
  },
  {
    pose: {
      prepositions: 'at',
      adverbs: 'innocently',
      undirected: { theirmsg: '<name> poses', mymsg: 'You strike a pose' },
      directed: {
        theirmsg: '<name> poses for <target>',
        mymsg: 'You pose for <target>',
      },
    },
  },
  {
    pounce: {
      noargs: {
        theirmsg: '<name> looks around in an odd manner',
        mymsg: 'You browse around for a pouncing target',
      },
      directed: {
        theirmsg: '<name> POUNCES on <target>',
        mymsg: 'You POUNCE on <target>',
      },
    },
  },
  { pout: { undirected: { theirmsg: '<name> pouts', mymsg: 'You pout' } } },
  {
    preen: {
      prepositions: 'at',
      adverbs: 'like a bird,visciously,slightly,wombely,happily,joyfully,angrily',
      undirected: {
        adverbs: 'like a bird,under the arms,and fluffs all matted feathers',
        mymsg: 'You preen yourself <adverb>',
        theirmsg: '<name> preens <target> <adverb>',
      },
      directed: {
        adverbs: 'attentively',
        mymsg: 'You preem <target> <adverb>',
        theirmsg: '<name> preens <target> <adverb>',
      },
    },
  },
  {
    primp: {
      adverbs: 'playfully,affectionately',
      directed: {
        theirmsg: '<name> primps <target> makeup <adverb>',
        mymsg: 'You primp <target> makeup <adverb>',
      },
    },
  },
  {
    puke: {
      directed: {
        theirmsg: '<name> pukes on <target>',
        mymsg: 'You puke on <target>',
      },
    },
  },
  {
    punch: {
      directed: {
        theirmsg: '<name> punches <target>',
        mymsg: 'You punch <target>',
      },
    },
  },
  {
    purr: {
      adverbs: 'contentedly,loudly,happily,sensuously',
      undirected: {
        theirmsg: '<name> purrs <adverb>',
        mymsg: 'You purr <adverb>',
      },
    },
  },
  {
    push: {
      noargs: {
        theirmsg: '<name> pushes <target> over',
        mymsg: 'You push yourself over',
      },
      directed: {
        theirmsg: '<name> pushes <target> over',
        mymsg: 'You push <target> over',
      },
    },
  },
  {
    puzzle: {
      noargs: { theirmsg: '<name> looks puzzled', mymsg: 'You look puzzled' },
      undirected: {
        theirmsg: '<name> puzzles over <adverb>',
        mymsg: 'You puzzle over <adverb>',
      },
    },
  },
  {
    quirk: {
      noargs: {
        theirmsg: '<name> quirks an eyebrow',
        mymsg: 'You quirk an eyebrow',
      },
    },
  },
  { quiver: { noargs: { theirmsg: '<name> quivers', mymsg: 'You quiver' } } },
  {
    raise: {
      adverbs:
        "quickly,slowly,quizicaly,silently,loudly,with a pitch fork, backwards,sideways,cleverly,surprisingly,playfully, like someone I can't think of,unnoticeably,macarbly, scepticaly,your hopes and a family",
      undirected: {
        mymsg: 'You raise your eyebrows <adverb>',
        theirmsg: '<name> raises <pronoun> eyebrows <adverb>',
      },
    },
  },
  {
    raspberry: {
      noargs: {
        mymsg: 'You blow raspberries',
        theirmsg: '<name> blows raspberries',
      },
      directed: {
        mymsg: 'You blow raspberries at <target>',
        theirmsg: '<name> blows raspberries at <target>',
      },
    },
  },
  {
    ribbit: {
      noargs: {
        mymsg: 'You ribbit musically',
        theirmsg: '<name> ribbits musically',
      },
      directed: {
        mymsg: 'You ribbit musically at <target>',
        theirmsg: '<name> ribbits musically at <target>',
      },
    },
  },
  {
    rub: {
      undirected: {
        adverbs: 'hands together,eyes,tummy,nose,leg,arm,eyebrows,head',
        mymsg: 'You rub your <adverb>',
        theirmsg: '<name> rubs <pronoun> <adverb>',
      },
      directed: {
        mymsg: 'You rub <target> the wrong way',
        theirmsg: '<name> rubs <target> up the wrong way',
      },
    },
  },
  {
    roarp: {
      noargs: {
        mymsg: 'You roar like a mouse',
        theirmsg: '<name> roars like a mouse',
      },
      undirected: {
        adverbs:
          'and bounces in excitement,so hard a hairball is coughed up,mouselike,annoyingly, disgustingly,a warning,painfully,fearfully,in disgust, tightly,slowly',
        theirmsg: '<name> roars <adverb>',
        mymsg: 'You roar <adverb>',
      },
      directed: {
        adverbs: 'menacingly,ferociously,perilously,precariously,dangerously,lovingly,like a pussy cat',
        theirmsg: '<name> roars <adverb> at <target>',
        mymsg: 'You roar <adverb> at <target>',
      },
    },
  },
  {
    rock: {
      noargs: {
        mymsg: 'You rock back and forth crooning a little melody',
        theirmsg: '<name> rocks back and forth crooning a little melody',
      },
      directed: {
        mymsg: 'You pick up a rock and throw it at <target>',
        theirmsg: '<name> picks up a rock and throws it at <target>',
      },
    },
  },
  {
    roll: {
      noargs: {
        mymsg: 'You roll your eyes',
        theirmsg: '<name> rolls <pronoun> eyes',
      },
      undirected: {
        adverbs:
          'your eyes,around on the floor laughing,over and play dead, up into a ball,your own cigarette,sideways,backwards, painfully,like a spy through an imaginary door,fearfully, tightly,slowly',
        theirmsg: '<name> rolls <adverb>',
        mymsg: 'You roll <adverb>',
      },
      directed: {
        adverbs: 'quickly,slowly,painfully,excitededly,lovingly,carefully',
        theirmsg: '<name> rolls <adverb> over <target>',
        mymsg: 'You roll <adverb> over <target>',
      },
    },
  },
  {
    ruffle: {
      adverbs: 'playfully,affectionately',
      directed: {
        theirmsg: '<name> ruffles <target> hair <adverb>',
        mymsg: 'You ruffle <target> hair <adverb>',
      },
    },
  },
  {
    salt: {
      noargs: {
        theirmsg: '<name> thows a pinch of salt over <pronoun> shoulder',
        mymsg: 'You throw a pinch of salt over your shoulder for good luck',
      },
      directed: {
        theirmsg: '<name> throws a pinch of salt at <target>',
        mymsg: 'You throw a pinch of salt at <target>',
      },
    },
  },
  {
    salute: {
      noargs: { mymsg: 'You salute', theirmsg: '<name> salutes' },
      directed: {
        mymsg: 'You salute <target>',
        theirmsg: '<name> salutes <target>',
      },
    },
  },
  {
    scowl: {
      abverbs: 'tiredly',
      undirected: { theirmsg: '<name> scowls darkly', mymsg: 'You scowl darkly' },
    },
  },
  {
    scratch: {
      prepositions: 'at',
      adverbs: 'visciously,slightly,wombely,happily,joyfully,angrily',
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
  },
  {
    scream: {
      prepositions: 'at',
      adverbs: 'terror,fright,fear,pain,surprise,frustration,despair,anger',
      noargs: { mymsg: 'You scream loudly', theirmsg: '<name> screams loudly' },
      undirected: {
        mymsg: 'You scream <adverb>',
        theirmsg: '<name> screams <adverb>',
      },
      directed: {
        mymsg: 'You scream <adverb> at <target>',
        theirmsg: '<name> scream <adverb> at <target>',
      },
    },
  },
  {
    screech: {
      prepositions: 'at',
      adverbs: 'like an eagle,hysterically,in warning,anxiously,annoyingly,to signal another probably hiding somewhere near',
      undirected: {
        theirmsg: '<name> screeches <adverb>',
        mymsg: 'You screech <adverb>',
      },
      directed: {
        theirmsg: '<name> screeches screeches screeches at <target> <adverb>',
        mymsg: 'You screech screech SCREECH at <target> <adverb>',
      },
    },
  },
  {
    seduce: {
      prepositions: 'with',
      directed: {
        theirmsg: '<name> charmingly seduces <target>',
        mymsg: 'You charmingly seduce <target>',
      },
    },
  },
  {
    shake: {
      prepositions: 'with at',
      undirected: {
        adverbs:
          'sorrowfully,carefully,slowly,once,quickly,curtly,pinkly, vigorously,completely,fishily,tentatively,in agreement, in disbelief',
        mymsg: 'You shake your head <adverb>',
        theirmsg: '<name> shakes <pronoun> head <adverb>',
      },
      directed: {
        adverbs: 'hands with,fins with,fingers with,legs with, pinkys with,tentacles with,your fist at',
        mymsg: 'You shake <adverb> <target>',
        theirmsg: '<name> shakes <adverb> <target>',
      },
    },
  },
  {
    shiver: {
      adverbs: 'in fear,with cold,slightly,#',
      undirected: {
        mymsg: 'You shiver <adverb>',
        theirmsg: '<name> shivers <adverb>',
      },
    },
  },
  {
    shrug: {
      adverbs: 'helplessly,slightly,evanly,rhythmicly,around in circles, with your legs',
      undirected: {
        theirmsg: '<name> shrugs <adverb>',
        mymsg: 'You shrug <adverb>',
      },
    },
  },
  {
    shudder: {
      adverbs: 'happily,joyfully,angrily',
      undirected: {
        adverbs: 'fear,revulsion,disapointment,ecstasy',
        mymsg: 'You shudder in <adverb>',
        theirmsg: '<name> shudders in <adverb>',
      },
    },
  },
  {
    sigh: {
      adverbs:
        'deeply,silently,desperately,tiredly,sadly,slowly,dreamily, happily,heavily,suggestively,sarcasticly,in relief,with relief',
      undirected: {
        mymsg: 'You sigh <adverb>',
        theirmsg: '<name> sighs <adverb>',
      },
    },
  },
  {
    sing: {
      prepositions: 'to',
      undirected: {
        mymsg: 'You sing <adverb>',
        theirmsg: '<name> sing <adverb>',
      },
      directed: {
        mymsg: 'You sing <adverb> to <target>',
        theirmsg: '<name> sings <adverb> to <target>',
      },
    },
  },
  {
    sit: {
      prepositions: 'on',
      undirected: {
        mymsg: 'You sit down wearily',
        theirmsg: '<name> sits down wearily',
      },
      directed: {
        mymsg: 'You sit on <target> !',
        theirmsg: '<name> sits on <target> !',
      },
    },
  },
  {
    slap: {
      noargs: {
        mymsg: 'You slap your forehead',
        theirmsg: '<name> slaps <pronoun> forehead',
      },
      directed: { mymsg: 'You slap <target>', theirmsg: '<name> slaps <target>' },
    },
  },
  {
    sleep: {
      noargs: {
        mymsg: 'You fall fast asleep',
        theirmsg: '<name> falls fast asleep',
      },
      directed: {
        mymsg: 'You go to sleep in <target> arms',
        theirmsg: '<name> goes to sleep in <target> arms',
      },
    },
  },
  {
    slobber: {
      noargs: {
        mymsg: 'You start to slobber all over yourself',
        theirmsg: '<name> slobbers and drools a puddle of spit',
      },
      directed: {
        mymsg: 'You slobber all over <target>',
        theirmsg: '<name> slobbers all over <target>',
      },
    },
  },
  {
    smack: {
      prepositions: 'at',
      adverbs: 'lightly,angrily',
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
  },
  { smirk: { noargs: { mymsg: 'You smirk', theirmsg: '<name> smirks' } } },
  {
    smile: {
      prepositions: 'at',
      adverbs:
        'happily,sadly,nervously,wryly,broadly,crookedly,stupidly, idiotically,condesendingly,ironically,patiently,brightly, slightly,nastily,excitedly,strangely, plasticly,carefully,sadisticly,lopsidedly,fishily,catishly, faintly,like a train,angrily,paranoicaly,innocently,frogily, slyly,weakly,humbly,sarcasticly,vicously, garishly,sweetly,innocently,lovingly,dreamily,radiantly, enthusiasticly,insolently,quirkily,completely,unconsciously, drunkenly,insanely,cutely,maliciously,absentmindedly, curtly,disturbingly,unbeliveably,quietly,loudly,differently, winningly,in triumph,seductively,tightly, softly,lividly,demonicaly, manically,warily,sardonically,lazily,serenely,disappointedly, secretly,penetratingly',
      undirected: {
        mymsg: 'You smile happily',
        theirmsg: '<name> smiles happily',
      },
      directed: {
        mymsg: 'You smile <adverb> at <target>',
        theirmsg: '<name> smiles <adverb> at <target>',
      },
    },
  },
  {
    smooch: {
      prepositions: 'at',
      adverbs: 'visciously,slightly,wombely,happily,joyfully,angrily',
      undirected: {
        adverbs: 'on the head',
        mymsg: 'You smooch yourself happily',
        theirmsg: '<name> smooches <target> happily',
      },
      directed: {
        adverbs: 'joyfully,passionately,playfully',
        mymsg: 'You smooch <target> <adverb>',
        theirmsg: '<name> smooches <target> <adverb>',
      },
    },
  },
  {
    snap: {
      noargs: {
        mymsg: 'You snap your fingers',
        theirmsg: '<name> snaps <pronoun> fingers',
      },
      directed: {
        mymsg: 'You snap your fingers at <target>',
        theirmsg: '<name> snaps <pronoun> fingers at <target>',
      },
    },
  },
  {
    snarl: {
      prepositions: 'at',
      adverbs: 'visiously,nastily,demonicaly,happily,sadly, unexpectedly,suddenly',
      undirected: {
        mymsg: 'You snarl <adverb>',
        theirmsg: '<name> snarls <adverb>',
      },
      directed: {
        mymsg: 'You snarl <adverb> at <target>',
        theirmsg: '<name> snarls <adverb> at <target>',
      },
    },
  },
  {
    sneer: {
      prepositions: 'at',
      undirected: { mymsg: 'You sneer', theirmsg: '<name> sneers' },
      directed: {
        mymsg: 'You sneer at <target>',
        theirmsg: '<name> sneers at <target>',
      },
    },
  },
  {
    sneeze: {
      prepositions: 'on',
      adverbs: 'violently,loudly,silently,quietly,suddenly,unexpectedly',
      undirected: {
        mymsg: 'You sneeze <adverb>',
        theirmsg: '<name> sneezes <adverb>',
      },
      directed: {
        mymsg: 'You sneeze <adverb> on <target>',
        theirmsg: '<name> sneezes <adverb> on <target>',
      },
    },
  },
  {
    snicker: {
      adverbs: 'mischeviously,nastily,a bit,like skippy',
      undirected: {
        mymsg: 'You snicker <adverb>',
        theirmsg: '<name> snickers <adverb>',
      },
    },
  },
  {
    sniff: {
      adverbs: 'dejectedly,noisily,silently,loudly,in disdain',
      undirected: {
        mymsg: 'You sniff <adverb>',
        theirmsg: '<name> sniffs <adverb>',
      },
    },
  },
  {
    snookie: {
      prepositions: 'with',
      directed: {
        theirmsg: '<name> snookies up to <target> warmly',
        mymsg: 'You snookies up to <target> warmly',
      },
    },
  },
  {
    snore: {
      adverbs:
        'loudly,quitely,sypatheticly,strangely,carefully,backwards, like bastian,like a train,over a keyboard with bastian',
      undirected: {
        mymsg: 'You snore <adverb>',
        theirmsg: '<name> snores <adverb>',
      },
    },
  },
  {
    snort: {
      noargs: { mymsg: 'You snort', theirmsg: '<name> snorts' },
      directed: {
        mymsg: 'You snort at <target>',
        theirmsg: '<name> snorts at <target>',
      },
    },
  },
  {
    snuggle: {
      directed: {
        theirmsg: '<name> snuggles up to <target> affectionately',
        mymsg: 'You snuggle up to <target> affectionately',
      },
    },
  },
  {
    snurgle: {
      noargs: {
        mymsg: 'You start to drool and gurgle, snurgle, like a gnoll in heat',
        theirmsg: '<name> drools and gurgles, snurgles, like a gnoll in heat',
      },
      directed: {
        mymsg: 'You snurgle <target> by drooling and gurgling all over them like a gnoll in heat',
        theirmsg: '<name> snurgles <target> by drooling and gurgling all over them like a gnoll in heat',
      },
    },
  },
  {
    sob: {
      adverbs:
        'uncontrollablely,happily,carefully,slightly, quietly,loudly,helplessly,completely,unexpectedly, silently,forlornly,cheekily',
      undirected: { theirmsg: '<name> sobs <adverb>', mymsg: 'You sob <adverb>' },
      directed: {
        theirmsg: '<name> sobs <adverb> on <target> shoulder',
        mymsg: 'You sob <adverb> on <target> shoulder',
      },
    },
  },
  {
    sorry: {
      adverbs: 'profusely,reservedly,profunctily,carefully,insultingly, insolently',
      undirected: {
        mymsg: 'You apologise <adverb>',
        theirmsg: '<name> apologises <adverb>',
      },
      undirected: {
        mymsg: 'You apologise <adverb> to <target>',
        theirmsg: '<name> apologises <adverb> to <target>',
      },
    },
  },
  {
    spank: {
      prepositions: 'like a',
      adverbs:
        'seductively,carefully,gently,uncontrollably,politely, sensuously,selectively,unexpectedly,with an evil smirk, painfully,sneakily,unprovoked,professionally,vigorously, reflexively,with a cat,like a train',
      noargs: {
        theirmsg: '<name> spanks their own butt',
        mymsg: 'You spank your own butt',
      },
      undirected: {
        theirmsg: '<name> spanks their own butt',
        mymsg: 'You spank your own butt',
      },
      directed: {
        theirmsg: '<name> spanks <target>',
        mymsg: 'You spank <target>',
      },
    },
  },
  {
    spew: {
      prepositions: 'like a',
      adverbs: 'dog,cat,chicken,cow,large bear,poodle,chihuahua',
      noargs: { theirmsg: '<name> spews chunks', mymsg: 'You spew chunks' },
      undirected: { theirmsg: '<name> spews chunks', mymsg: 'You spew chunks' },
      directed: {
        theirmsg: '<name> spews chunks all over <target>',
        mymsg: 'You spew chunks all over <target>',
      },
    },
  },
  {
    spin: {
      noargs: {
        mymsg: 'You spin around in delight',
        theirmsg: '<name> spins around in delight',
      },
      directed: {
        mymsg: 'You spin around <target> playfully',
        theirmsg: '<name> spins around <target> playfully',
      },
    },
  },
  {
    spit: {
      prepositions: 'on',
      noargs: { mymsg: 'You spit', theirmsg: '<name> spits' },
      directed: {
        mymsg: 'You spit in <target> face',
        theirmsg: '<name> spits in <target> face',
      },
    },
  },
  {
    spock: {
      noargs: {
        mymsg: 'You raise one eyebrow',
        theirmsg: '<name> raises one eyebrow',
      },
    },
  },
  {
    squawk: {
      undirected: {
        theirmsg: '<name> squawks in annoyance',
        mymsg: 'You squawk in annoyance',
      },
    },
  },
  {
    squeeze: {
      adverbs: 'fondly,gently,tightly',
      directed: {
        mymsg: 'You squeeze <target> <adverb>',
        theirmsg: '<name> squeezes <target> <adverb>',
      },
    },
  },
  {
    squirm: {
      undirected: {
        theirmsg: '<name> squirms uncomfortably',
        mymsg: 'You squirm uncomfortably',
      },
    },
  },
  {
    stagger: {
      noargs: { mymsg: 'You stagger around', theirmsg: '<name> staggers around' },
      undirected: {
        mymsg: 'You stagger <adverb>',
        theirmsg: '<name> staggers <adverb>',
      },
    },
  },
  {
    stamp: {
      adverbs: 'angrily,impatiently,warningly,fighteningly',
      undirected: {
        mymsg: 'You stamp your foot <adverb>',
        theirmsg: '<name> stamps <pronoun> foot <adverb>',
      },
    },
  },
  {
    stand: {
      adverbs: 'in uffish thought,about,patiently',
      undirected: {
        mymsg: 'You stand <adverb>',
        theirmsg: '<name> stands <adverb>',
      },
    },
  },
  {
    stare: {
      prepositions: 'at',
      adverbs:
        'happily,sadly,woriedly,lazily,rudely,dazedly,hungrily, macabrely,absent-mindedly,fanaticaly,lovingly,respectfully, womblely,frogily,desperately,sternly,tentatively,politely, listlessly,dreamily,intently,mindlessly,expectantly,longingly',
      undirected: {
        mymsg: 'You stare <adverb> into space',
        theirmsg: '<name> stares <adverb> into space',
      },
      directed: {
        adverbs: 'romantically,continuously,annoyingly',
        mymsg: 'You stare <adverb> at <target>',
        theirmsg: '<name> stares <adverb> at <target>',
      },
    },
  },
  {
    stifle: {
      noargs: {
        mymsg: 'You stifle a giggle',
        theirmsg: '<name> stifles a giggle',
      },
    },
  },
  {
    stomp: {
      undirected: {
        theirmsg: '<name> stomps <pronoun> feet like a spoiled brat',
        mymsg: 'You stomp your feet like a spoiled brat',
      },
    },
  },
  {
    strangle: {
      noargs: {
        mymsg: 'You strangle yourself',
        theirmsg: '<name> strangles <target>',
      },
      directed: {
        mymsg: 'You strangle <target> <adverb>',
        theirmsg: '<name> strangle <target> <adverb>',
      },
    },
  },
  {
    streak: {
      prepositions: 'at',
      adverbs: 'quickly,nakedly,joyfully,pervertedly',
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
  },
  {
    stroke: {
      directed: {
        mymsg: 'You stroke <target>',
        theirmsg: '<name> strokes <target>',
      },
    },
  },
  {
    strut: {
      noargs: {
        mymsg: 'You strut your stuff',
        theirmsg: '<name> struts proudly around the room',
      },
    },
  },
  {
    stumble: {
      noargs: {
        mymsg: 'You stumble around the room',
        theirmsg: '<name> stumbles around the room',
      },
      undirected: {
        mymsg: 'You stumble <adverb>',
        theirmsg: '<name> stumbles <adverb>',
      },
      noargs: {
        mymsg: 'You stumble over <target> <adverb>',
        theirmsg: '<name> stumbles over <target> <adverb>',
      },
    },
  },
  {
    sulk: {
      noargs: {
        mymsg: 'You sulk in the corner',
        theirmsg: '<name> sulks in the corner',
      },
    },
  },
  {
    sunshine: {
      noargs: {
        mymsg: 'You brighten the room with rays of sunshine',
        theirmsg: '<name> brightens the room with rays of sunshine',
      },
    },
  },
  {
    swear: {
      noargs: {
        mymsg: 'You swear on your mudders life',
        theirmsg: '<name> swears on <pronoun> mudders life',
      },
      directed: {
        mymsg: 'You swear to <target> upon your mudders life',
        theirmsg: '<name> swears to <target> upon <pronoun> mudders life',
      },
    },
  },
  {
    sweep: {
      adverbs: 'excitedly,happily,carefully,slowly,joyfully,unsteadily, sideways,absentmindedly',
      directed: {
        mymsg: 'You sweep <target> into your arms and dance romantically',
        theirmsg: '<name> sweeps <target> into <pronoun> arms and dances romantically',
      },
      undirected: {
        mymsg: 'You sweep yourself across the dance floor',
        theirmsg: '<name> sweeps <target> across the dance floor',
      },
    },
  },
  {
    swim: {
      noargs: {
        mymsg: 'You give a good imitation of swimming',
        theirmsg: '<name> swims around',
      },
    },
  },
  {
    swoon: {
      noargs: {
        mymsg: 'You swoon in a romantic daze',
        theirmsg: '<name> swoons in a romantic daze',
      },
      directed: {
        mymsg: 'You swoon romantically over <target>',
        theirmsg: '<name> swoons romantically over <target>',
      },
    },
  },
  {
    serenade: {
      noargs: {
        mymsg: 'You serenade the voices in your head with your singing',
        theirmsg: '<name> serenades the voices in <pronoun> head',
      },
      directed: {
        mymsg: 'You serenade <target> with a loving ballad',
        theirmsg: '<name>  serenades <target> with a loving ballad',
      },
    },
  },
  {
    squeal: {
      noargs: {
        mymsg: 'You squeal with delight!',
        theirmsg: '<name> lets out a sudden squeal of delight!',
      },
      directed: {
        mymsg: 'You look towards <target> and squeal with delight!',
        theirmsg: '<name> looks at <target> and squeals with delight!',
      },
    },
  },
  {
    tackle: {
      noargs: {
        theirmsg: '<name> tackles <target> to the ground',
        mymsg: 'You tackle yourself to the ground',
      },
      directed: {
        theirmsg: '<name> tackles <target> to the ground',
        mymsg: 'You tackle <target> to the ground',
      },
    },
  },
  {
    tango: {
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
  },
  {
    tap: {
      prepositions: 'on the',
      adverbs: 'head,left leg,right leg,fingers,nose,shoulder,teeth,arm',
      undirected: {
        adverbs: 'foot',
        mymsg: 'You tap your <adverb> impatiently',
        theirmsg: '<name> taps <pronoun> <adverb> impatiently',
      },
      directed: {
        adverbs: 'shoulder',
        mymsg: 'You tap <target> on the <adverb>',
        theirmsg: '<name> taps <target> on the <adverb>',
      },
    },
  },
  {
    taunt: {
      noargs: { theirmsg: '<name> taunts <target>', mymsg: 'You taunt yourself' },
      directed: {
        theirmsg: '<name> taunts <target>',
        mymsg: 'You taunt <target>',
      },
    },
  },
  {
    tease: {
      noargs: { theirmsg: '<name> teases <target>', mymsg: 'You tease yourself' },
      directed: {
        adverbs:
          'mercilessly,insistantly,annoyingly,lovingly,mischeviously, rudely,carefully,quickly,slowly,halfheartedly,idlely, obnoxiously',
        theirmsg: '<name> teases <target> <adverb>',
        mymsg: 'You tease <target> <adverb>',
      },
    },
  },
  {
    thank: {
      adverbs: 'profusely,gratuitously,lots,slightly,reservedly',
      directed: {
        theirmsg: '<name> thanks <target> <adverb>',
        mymsg: 'You thank <target> <adverb>',
      },
    },
  },
  {
    think: {
      noargs: {
        theirmsg: '<name> thinks carefully',
        mymsg: 'You think carefully',
      },
      undirected: {
        theirmsg: '<name> thinks <adverb>',
        mymsg: 'You think <adverb>',
      },
    },
  },
  {
    thumbs: {
      noargs: {
        mymsg: 'You give the thumbs up and say: Ayeeee',
        theirmsg: '<name> gives the thumbs up and says: Ayeeee',
      },
      directed: {
        mymsg: 'You give the thumbs up and say: Ayeeee...  to <target>',
        theirmsg: '<name> give the thumbs up and says: Ayeeee... to <target>',
      },
    },
  },
  {
    thwap: {
      noargs: {
        mymsg: 'You THWAP yourself on the head',
        theirmsg: '<name> THWAPS <pronoun> own head',
      },
      directed: {
        mymsg: 'You THWAP <target> over the head',
        theirmsg: '<name> THWAPS <target> over the head',
      },
    },
  },
  {
    tip: {
      prepositions: 'at to',
      adverbs: 'happily,pathetically,hopefully',
      undirected: {
        theirmsg: '<name> tips <pronoun> head <adverb>',
        mymsg: 'You tip your head <adverb>',
      },
      directed: {
        theirmsg: '<name> tips <pronoun> head <adverb> to <target>',
        mymsg: 'You tip your head <adverb> to <target>',
      },
    },
  },
  {
    tickle: {
      adverbs: 'mercilessly,ruthlessly,fearlessly,quickly,sneakily,weakly, carefully,gently,harshly,inconcievablely,slowly',
      directed: {
        theirmsg: '<name> tickles <target> <adverb>',
        mymsg: 'You tickle <target> <adverb>',
      },
    },
  },
  {
    tongue: {
      directed: {
        theirmsg: '<name> sticks <pronoun> tongue out at <target>',
        mymsg: 'You stick your tongue out at <target>',
      },
    },
  },
  {
    tremble: {
      adverbs: 'in fear,in nervousness,in pain,slightly,violently,insistantly, carefully,in a pink fit',
      undirected: {
        theirmsg: '<name> trembles <adverb>',
        mymsg: 'You tremble <adverb>',
      },
    },
  },
  {
    trip: {
      noargs: {
        theirmsg: '<name> trips over <target>',
        mymsg: 'You trip over yourself',
      },
      directed: {
        theirmsg: '<name> trips over <target>',
        mymsg: 'You trip over <target>',
      },
    },
  },
  {
    tsk: {
      noargs: {
        theirmsg: '<name> makes tsking motions',
        mymsg: 'You make tsking motions',
      },
      directed: {
        theirmsg: '<name> makes tsking motions at <target>',
        mymsg: 'You make tsking motions at <target>',
      },
    },
  },
  {
    tumble: {
      noargs: { mymsg: 'You tumble forward', theirmsg: '<name> tumbles forward' },
      directed: {
        mymsg: 'You tackle and tumble around with <target>',
        theirmsg: '<name> tackles and tumbles around with <target>',
      },
    },
  },
  {
    tweak: {
      adverbs: 'bottom,ear,arm,leg,nose,bits',
      directed: {
        theirmsg: '<name> tweaks <target> <adverb>',
        mymsg: 'You tweak <target> <adverb>',
      },
    },
  },
  {
    twiddle: {
      adverbs: 'thumbs,fingers,hair,nose',
      undirected: {
        theirmsg: '<name> twiddles <pronoun> <adverb>',
        mymsg: 'You twiddle your <adverb>',
      },
    },
  },
  {
    twirl: {
      noargs: {
        mymsg: 'You twirl around in delight',
        theirmsg: '<name> twirls around in delight',
      },
      directed: {
        mymsg: 'You twirl around <target> playfully',
        theirmsg: '<name> twirls around <target> playfully',
      },
    },
  },
  {
    twitch: {
      adverbs: 'nose,arm,body,finger,igloo',
      undirected: {
        theirmsg: '<name> twitches <pronoun> <adverb>',
        mymsg: 'You twitch your <adverb>',
      },
    },
  },
  {
    twerk: {
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
  },
  {
    undress: {
      noargs: {
        mymsg: "You start removing all your clothes. Brrr, it's chilly! ",
        theirmsg: '<name> begins removing all <pronoun> clothes',
      },
      directed: {
        mymsg: 'You gaze at <target> and slowly undress <pronoun> with your eyes',
        theirmsg: '<name>  undresses <target> with <pronoun> eyes',
      },
    },
  },
  {
    waltz: {
      prepositions: 'with,along with,with',
      directed: {
        theirmsg: '<name> waltzs around the room with <target>',
        mymsg: 'You waltz around the room with <target>',
      },
    },
  },
  {
    wait: {
      noargs: { mymsg: 'You wait patiently', theirmsg: '<name> waits patiently' },
      directed: {
        mymsg: 'You tap your foot waiting for <target>',
        theirmsg: '<name> tap your foot waiting for <target>',
      },
    },
  },
  {
    wave: {
      prepositions: 'at',
      adverbs: 'tiredly,sleepily,lazily,sadly,happily,redundantly, forlornly,excitedly,longingly,pointlessly,passionately',
      noargs: { theirmsg: '<name> waves', mymsg: 'You wave' },
      undirected: {
        theirmsg: '<name> waves <adverb>',
        mymsg: 'You wave <adverb>',
      },
      directed: {
        theirmsg: '<name> waves <adverb> to <target>',
        mymsg: 'You wave <adverb> to <target>',
      },
    },
  },
  {
    wedgie: {
      noargs: {
        mymsg: 'You try to fix your undergarments and give yourself a wedgie',
        theirmsg: 'It appears that <name> is suddenly ashamed and uncomfortable.',
      },
      directed: {
        mymsg: 'You sneak up behind <target> and give them a wedgie',
        theirmsg: '<name> gives <target> a wedgie',
      },
    },
  },
  {
    wheeze: {
      prepositions: 'at',
      adverbs: 'none',
      undirected: {
        theirmsg: '<name> wheezes and coughs as <pronoun> catches <pronoun> breath',
        mymsg: 'You wheeze and cough as you catch your breath',
      },
      directed: {
        theirmsg: '<name> wheezes and coughs all over <target>',
        mymsg: 'You wheeze and cough all over <target>',
      },
    },
  },
  {
    whimper: {
      adverbs: 'painfully,fearfully,carefully,dimuatively,happily,winningly',
      undirected: {
        theirmsg: '<name> whimpers <adverb>',
        mymsg: 'You whimper <adverb>',
      },
    },
  },
  {
    whistle: {
      prepositions: 'at',
      adverbs: 'innocently,appreciatively,loudly,musically,pleasantly, discordantly',
      undirected: {
        theirmsg: '<name> whistles <adverb>',
        mymsg: 'You whistle <adverb>',
      },
      directed: {
        theirmsg: '<name> whistles <adverb> at <target>',
        mymsg: 'You whistle <adverb> at <target>',
      },
    },
  },
  { wince: { noargs: { theirmsg: '<name> winces', mymsg: 'You wince' } } },
  {
    wiggle: {
      prepositions: 'at',
      adverbs: 'enticingly,suggestively,vigourously,arrogantly,nonchalantly, quickly',
      undirected: {
        theirmsg: '<name> wiggles <pronoun> bottom <adverb>',
        mymsg: 'You wiggle your bottom <adverb>',
      },
      directed: {
        theirmsg: '<name> wiggles <pronoun> bottom at <target> <adverb>',
        mymsg: 'You wiggle your bottom at <target> <adverb>',
      },
    },
  },
  {
    wink: {
      prepositions: 'at',
      adverbs:
        'suggestively,slowly,loudly,grumpily,despairingly,coyly, desperately,insolently,curtly,lovingly,patiently,sadisticly, warily,seductively,lazily',
      undirected: {
        theirmsg: '<name> winks <adverb>',
        mymsg: 'You wink <adverb>',
      },
      directed: {
        theirmsg: '<name> winks <adverb> at <target>',
        mymsg: 'You wink <adverb> at <target>',
      },
    },
  },
  {
    wipep: {
      undirected: {
        adverbs: 'in relief,enthusiastically,excitedly,wildly,happily,slightly',
        theirmsg: '<name> wipes the sweat from <pronoun> brow',
        mymsg: 'You wipe the sweat from your brow <adverb>',
      },
      directed: {
        adverbs: 'briefly,enthusiastically,excitedly,wildly,happily,slightly',
        theirmsg: '<name> wipes <pronoun> <adverb> on <target>',
        mymsg: 'You wipe your <adverb> on <target>',
      },
    },
  },
  {
    wobble: {
      adverbs: 'around a bit,like jelly,unsteadily,happily,carefully, sideways,steadily',
      undirected: {
        theirmsg: '<name> wobbles <adverb>',
        mymsg: 'You wobble <adverb>',
      },
    },
  },
  {
    womble: {
      undirected: {
        theirmsg: '<name> wombles around <adverb>',
        mymsg: 'You womble around <adverb>',
      },
    },
  },
  {
    wonder: {
      adverbs: 'about reality and how boring it can be',
      undirected: {
        theirmsg: '<name> wonders <adverb>',
        mymsg: 'You wonder <adverb>',
      },
    },
  },
  {
    worship: {
      noargs: {
        theirmsg: '<name> worships <target>',
        mymsg: 'You worship yourself',
      },
      directed: {
        theirmsg: '<name> worships <target>',
        mymsg: 'You worship <target>',
      },
    },
  },
  {
    wrinkle: {
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
  },
  {
    wrist: {
      noargs: {
        mymsg: 'You hold out your wrist for a slap',
        theirmsg: '<name> holds out <pronoun> wrist for a slap',
      },
      directed: {
        mymsg: 'You slap <target> on the wrist',
        theirmsg: '<name> slaps <target> on the wrist',
      },
    },
  },
  {
    yawn: {
      abverbs: 'tiredly,boredly,sleepily',
      undirected: {
        theirmsg: '<name> yawns <adverb>',
        mymsg: 'You yawn <adverb>',
      },
    },
  },
  {
    yip: {
      abverbs: 'tiredly',
      undirected: {
        theirmsg: '<name> hoots Yippy kai-yah mother lover',
        mymsg: 'You hoot  Yippy kai-yah mother lover',
      },
    },
  },
  {
    yodle: {
      abverbs: 'tiredly',
      undirected: {
        theirmsg: '<name> thumbs <pronoun> lederhosen and hollers Yooodle-Yoodle-lai-heee-hooo like a good Hiemelian',
        mymsg: 'You thumb your lederhosen and holler Yooodle-Yoodle-lai-heee-hooo like a good Hiemelian',
      },
    },
  },
  {
    zip: {
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
  },
];
