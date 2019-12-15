module.exports = {
  preReg: /(<.+?:{2}.+?>)/g,
  afterReg: /<(.+?):{2}(.+?)>/g,
  data: [
    {
      id: 1,
      text: 'The <European::important> languages are members of the same family. Their separate existence is a myth.',
    },
    {
      id: 2,
      text: 'For science, music, sport, etc, Europe uses the same vocabulary.',
    },
    {
      id: 3,
      text: 'The languages only differ in their grammar, their pronunciation and their most common words.',
    },
    {
      id: 4,
      text: 'Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',
    },
    {
      id: 5,
      text: 'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
    },
    {
      id: 6,
      text: 'If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.',
    },
    {
      id: 7,
      text: 'The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.',
    },
    {
      id: 8,
      text: 'To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.',
    },
    {
      id: 9,
      text: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.',
    },
    {
      id: 10,
      text: 'The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To',
    },
  ],
  category: [
    {
      id: 0,
      name: 'important',
    },
    {
      id: 1,
      name: 'useless',
    },

    {
      id: 2,
      name: 'like',
    },
    {
      id: 3,
      name: 'unlike',
    },
    {
      id: 4,
      name: 'love',
    },
    {
      id: 5,
      name: 'hate',
    },
  ],
}