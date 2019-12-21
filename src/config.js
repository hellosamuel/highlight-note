module.exports = {
  preReg: /(<.+?:{2}.+?>)/g,
  afterReg: /<(.+?):{2}(.+?)>/g,
  data: [
    {
      id: 1,
      text: `The <European::important> languages are members of the same family. Their separate existence is a myth.
             For science, music, sport, etc, <Europe::important> uses the same vocabulary.
             The languages only differ in their grammar, their pronunciation and their most common words.
             <Everyone::love> realizes why a new common language would be desirable: one could refuse to pay expensive translators.
             To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.
             If several <languages::like> coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
             The new common <language::like> will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.
             To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
             The European languages are members of the same family. Their separate existence is a myth. For <science::hate>, <music::love>, sport, etc, Europe uses the same vocabulary.
             The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators. `
    }
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