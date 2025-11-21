// data/Fireworks/index.js

const FireworkValues = [
  {
    range: '<1400',
    messages: ['A small fireball shoots into the sky then fizzles away.'],
  },
  {
    range: '<2100',
    messages: ['A small fireball shoots through the sky.'],
  },
  {
    range: '<2800',
    messages: ['A large fireball erupts in the sky lighting the world for a moment.'],
  },
  {
    range: '<3500',
    messages: ['A massive fireball explodes raining sparks over the lands.'],
  },
  {
    range: '<4200',
    messages: ['A massive fireball explodes, shaking the ground from its blast.'],
  },
  {
    range: '<4900',
    messages: [
      'A massive fireball explodes high in the air in a flurry of colours. Sparks burn through the air like falling stars.',
    ],
  },
  {
    range: '<6300',
    messages: [
      '<b>Night:</b> A huge fireball launches up and across the sky. It shrinks into the night sky...then becomes a streak against the stars as a bright shooting star!',
      "<b>Day:</b> A huge fireball launches up and across the sky. It shrinks into the day's sky...then becomes a blemish beyond the clouds as a dim shooting star!",
    ],
  },
  {
    range: '<7700',
    messages: [
      '<b>Night:</b> A massively large fireball swells on the surface of Merentha. A mad cackling fills the air, and &lt;name&gt; launches the fireball. It shrinks into the sky...then sticks in the firmament as a new star!',
      '<b>Day:</b> A massively large fireball swells on the surface of Merentha. A mad cackling fills the air, and &lt;name&gt; launches the fireball. It streaks toward the sun...and smashes into it! Solar flares fill the sky with the Northern Lights.',
    ],
  },
  {
    range: '>7700',
    messages: [
      'An unbelievably enormous ball of light grows in the sky above &lt;name&gt; which silently explodes, bathing the world in magical flashing light!',
    ],
    ascii: `
               *         '       *       .  *   '     .           * *
                                                                             '
                   *                *'          *          *        '
               .           *               |               /
                           '.         |    |      '       |   '     *
                             \\*        \\   \\             /
                   '          \\     '* |    |  *        |*                *  *
                        *      \`.       \\   |     *     /    *      '
              .                  \\      |   \\          /               *
                 *'  *     '      \\      \\   '.       |
                    -._            \`                  /         *
              ' '      \`\`._   *                           '          .      '
               *           *\\*          * .   .      *
            *  '        *    \`-._                       .         _..:='        *
                         .  '      *       *    *   .       _.:--'
                      *           .     .     *         .-'         *
               .               '             . '   *           *         .
              *       ___.-=--..-._     *                '               '
                                              *       *
                            *        _.'  .'       \`.        '  *             *
                 *              *_.-'   .'            \`.               *
                               .'                       \`._             *  '
               '       '                        .       .  \`.     .
                   .                      *                  \`
            `,
  },
];

export default FireworkValues;
