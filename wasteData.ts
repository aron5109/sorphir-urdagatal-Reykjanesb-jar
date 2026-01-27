export interface WasteData {
  streets: string[];
  gray_dates: Date[];
  blue_dates: Date[];
}

export type NeighborhoodData = Record<string, WasteData>;

const parseDates = (dates: Date[]) => dates; 

// Helper to fix encoding issues if any remain, though we are statically fixing them below.
// Source data had encoding errors (e.g. "Ã¡" -> "á"). Fixed manually below.

export const wasteData: NeighborhoodData = {
  hverfi_1: {
    streets: [
      "álfholt", "brattholt", "bæjarholt", "dvergholt", "eyrarholt", "háholt", "hörgsholt", "klapparholt", "miðholt", "næfurholt", "suðurholt", "vesturholt",
      "háabarð", "lyngbarð", "mosabarð", "móabarð", "smárabarð", "svalbarð", "vallarbarð", "þúfubarð",
      "ásbúðartröð", "grandatröð", "hamrabyggð", "holtabyggð", "hólabraut", "klettabyggð", "skipalón", "suðurbraut", "teigabyggð", "vallarbraut", "vallarbyggð", "brekkuhvammur", "kelduhvammur", "lindarhvammur"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 2), new Date(2024, 11, 3), new Date(2024, 11, 4),
      new Date(2024, 11, 16), new Date(2024, 11, 17), new Date(2024, 11, 18),
      new Date(2024, 11, 30), new Date(2024, 11, 31),
      //janúar
      new Date(2025, 0, 2), new Date(2025, 0, 3),
      new Date(2025, 0, 13), new Date(2025, 0, 14), new Date(2025, 0, 15),
      new Date(2025, 0, 27), new Date(2025, 0, 28), new Date(2025, 0, 29),
      //febrúar
      new Date(2025, 1, 10), new Date(2025, 1, 11), new Date(2025, 1, 12),
      new Date(2025, 1, 24), new Date(2025, 1, 25), new Date(2025, 1, 26),
      //mars
      new Date(2025, 2, 10), new Date(2025, 2, 11), new Date(2025, 2, 12),
      new Date(2025, 2, 24), new Date(2025, 2, 25), new Date(2025, 2, 26),
      //apríl
      new Date(2025, 3, 7), new Date(2025, 3, 8), new Date(2025, 3, 9),
      new Date(2025, 3, 22), new Date(2025, 3, 23),
      //maí
      new Date(2025, 4, 5), new Date(2025, 4, 6), new Date(2025, 4, 7),
      new Date(2025, 4, 19), new Date(2025, 4, 20), new Date(2025, 4, 21),
      //júní
      new Date(2025, 5, 2), new Date(2025, 5, 3), new Date(2025, 5, 4),
      new Date(2025, 5, 16), new Date(2025, 5, 18),
      new Date(2025, 5, 30),
      //júlí
      new Date(2025, 6, 1), new Date(2025, 6, 2),
      new Date(2025, 6, 14), new Date(2025, 6, 15), new Date(2025, 6, 16),
      new Date(2025, 6, 28), new Date(2025, 6, 29), new Date(2025, 6, 30),
      //ágúst
      new Date(2025, 7, 11), new Date(2025, 7, 12), new Date(2025, 7, 13),
      new Date(2025, 7, 25), new Date(2025, 7, 26), new Date(2025, 7, 27),
      //september
      new Date(2025, 8, 8), new Date(2025, 8, 9), new Date(2025, 8, 10),
      new Date(2025, 8, 22), new Date(2025, 8, 23), new Date(2025, 8, 24),
      //október
      new Date(2025, 9, 6), new Date(2025, 9, 7), new Date(2025, 9, 8),
      new Date(2025, 9, 20), new Date(2025, 9, 21), new Date(2025, 9, 22),
      //nóvember
      new Date(2025, 10, 3), new Date(2025, 10, 4), new Date(2025, 10, 5),
      new Date(2025, 10, 17), new Date(2025, 10, 18), new Date(2025, 10, 19),
      //desember
      new Date(2025, 11, 1), new Date(2025, 11, 2), new Date(2025, 11, 3),
      new Date(2025, 11, 15), new Date(2025, 11, 16), new Date(2025, 11, 17),
      new Date(2025, 11, 29), new Date(2025, 11, 30),
      //janúar 2026
      new Date(2026, 0, 2),
      new Date(2026, 0, 12), new Date(2026, 0, 13), new Date(2026, 0, 14),
      new Date(2026, 0, 26), new Date(2026, 0, 27), new Date(2026, 0, 28),
    ],
    blue_dates: [
      new Date(2024, 11, 26), new Date(2024, 11, 27),
      new Date(2025, 0, 23), new Date(2025, 0, 24),
      new Date(2025, 1, 20), new Date(2025, 1, 21),
      new Date(2025, 2, 20), new Date(2025, 2, 21),
      new Date(2025, 3, 15), new Date(2025, 3, 16),
      new Date(2025, 4, 15), new Date(2025, 4, 16),
      new Date(2025, 5, 12), new Date(2025, 5, 13),
      new Date(2025, 6, 10), new Date(2025, 6, 11),
      new Date(2025, 7, 7), new Date(2025, 7, 8),
      new Date(2025, 8, 4), new Date(2025, 8, 5),
      new Date(2025, 9, 2), new Date(2025, 9, 3), new Date(2025, 9, 30), new Date(2025, 9, 31),
      new Date(2025, 10, 27), new Date(2025, 10, 28),
      new Date(2025, 11, 22), new Date(2025, 11, 23),
      new Date(2026, 0, 22), new Date(2026, 0, 23),
    ]
  },
  hverfi_2: {
    streets: [
      "akurvellir", "berjavellir", "bjarkavellir", "blómvellir", "burknavellir", "daggarvellir", "drekavellir", "einivellir", "engjavellir", "eskivellir", "fífuvellir", "fjóluvellir", "fléttuvellir", "furuvellir",
      "glitvellir", "hafravellir", "hnoðravellir", "hvannavellir", "hörðuvellir", "kirkjuvellir", "klukkuvellir", "kvistavellir",
      "apalskarð", "bergsskarð", "bjargsskarð", "brenniskarð", "drangsskarð", "geislaskarð", "glimmerskarð", "hádegisskarð", "hraunskarð", "malarskarð", "móbergsskarð", "stuðlaskarð", "tinnuskarð", "vikurskarð", "völuskarð", "nónhamar", "hringhamar", "baughamar", "áshamar"
    ],
    gray_dates: [
      new Date(2023, 11, 1), new Date(2023, 11, 11), new Date(2023, 11, 12), new Date(2023, 11, 13), new Date(2023, 11, 25), new Date(2023, 11, 26), new Date(2023, 11, 27),
      //desember 2024
      new Date(2024, 11, 9), new Date(2024, 11, 10), new Date(2024, 11, 11),
      new Date(2024, 11, 23), new Date(2024, 11, 24), new Date(2024, 11, 25),
      //janúar
      new Date(2025, 0, 6), new Date(2025, 0, 7), new Date(2025, 0, 8),
      new Date(2025, 0, 20), new Date(2025, 0, 21), new Date(2025, 0, 22),
      //febrúar
      new Date(2025, 1, 3), new Date(2025, 1, 4), new Date(2025, 1, 5),
      new Date(2025, 1, 17), new Date(2025, 1, 18), new Date(2025, 1, 19),
      //mars
      new Date(2025, 2, 3), new Date(2025, 2, 4), new Date(2025, 2, 5),
      new Date(2025, 2, 17), new Date(2025, 2, 18), new Date(2025, 2, 19),
      //apríl
      new Date(2025, 3, 1), new Date(2025, 3, 2),
      new Date(2025, 3, 14), new Date(2025, 3, 15), new Date(2025, 3, 16),
      new Date(2025, 3, 28), new Date(2025, 3, 29), new Date(2025, 3, 30),
      //maí
      new Date(2025, 4, 12), new Date(2025, 4, 13), new Date(2025, 4, 14),
      new Date(2025, 4, 26), new Date(2025, 4, 27), new Date(2025, 4, 28),
      //júní
      new Date(2025, 5, 10), new Date(2025, 5, 11),
      new Date(2025, 5, 23), new Date(2025, 5, 24), new Date(2025, 5, 25),
      //júlí
      new Date(2025, 6, 7), new Date(2025, 6, 8), new Date(2025, 6, 9),
      new Date(2025, 6, 21), new Date(2025, 6, 22), new Date(2025, 6, 23),
      //ágúst
      new Date(2025, 7, 5), new Date(2025, 7, 6),
      new Date(2025, 7, 18), new Date(2025, 7, 19), new Date(2025, 7, 20),
      //september
      new Date(2025, 8, 1), new Date(2025, 8, 2), new Date(2025, 8, 3),
      new Date(2025, 8, 15), new Date(2025, 8, 16), new Date(2025, 8, 17),
      new Date(2025, 8, 29), new Date(2025, 8, 30),
      //október
      new Date(2025, 9, 1),
      new Date(2025, 9, 13), new Date(2025, 9, 14), new Date(2025, 9, 15),
      new Date(2025, 9, 27), new Date(2025, 9, 28), new Date(2025, 9, 29),
      //nóvember
      new Date(2025, 10, 10), new Date(2025, 10, 11), new Date(2025, 10, 12),
      new Date(2025, 10, 24), new Date(2025, 10, 25), new Date(2025, 10, 26),
      //desember
      new Date(2025, 11, 8), new Date(2025, 11, 9), new Date(2025, 11, 10),
      new Date(2025, 11, 22), new Date(2025, 11, 23),
      //janúar 2026
      new Date(2026, 0, 5), new Date(2026, 0, 6), new Date(2026, 0, 7),
      new Date(2026, 0, 19), new Date(2026, 0, 20), new Date(2026, 0, 21),
    ],
    blue_dates: [
      new Date(2024, 11, 26), new Date(2024, 11, 27),
      new Date(2025, 0, 23), new Date(2025, 0, 24),
      new Date(2025, 1, 20), new Date(2025, 1, 21),
      new Date(2025, 2, 20), new Date(2025, 2, 21),
      new Date(2025, 3, 15), new Date(2025, 3, 16),
      new Date(2025, 4, 15), new Date(2025, 4, 16),
      new Date(2025, 5, 12), new Date(2025, 5, 13),
      new Date(2025, 6, 10), new Date(2025, 6, 11),
      new Date(2025, 7, 7), new Date(2025, 7, 8),
      new Date(2025, 8, 4), new Date(2025, 8, 5),
      new Date(2025, 9, 2), new Date(2025, 9, 3), new Date(2025, 9, 30), new Date(2025, 9, 31),
      new Date(2025, 10, 27), new Date(2025, 10, 28),
      new Date(2025, 11, 22), new Date(2025, 11, 23),
      new Date(2026, 0, 22), new Date(2026, 0, 23),
    ]
  },
  hverfi_3: {
    streets: [
      "blikaás", "brekkuás", "dalsás", "erluás", "fjóluás", "furuás", "gauksás", "hlíðarás", "kríuás", "lóuás", "skógarás", "spóaás", "svöluás", "þrastarás"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 2), new Date(2024, 11, 3), new Date(2024, 11, 4),
      new Date(2024, 11, 16), new Date(2024, 11, 17), new Date(2024, 11, 18),
      new Date(2024, 11, 30), new Date(2024, 11, 31),
      //janúar
      new Date(2025, 0, 2), new Date(2025, 0, 3),
      new Date(2025, 0, 13), new Date(2025, 0, 14), new Date(2025, 0, 15),
      new Date(2025, 0, 27), new Date(2025, 0, 28), new Date(2025, 0, 29),
      //febrúar
      new Date(2025, 1, 10), new Date(2025, 1, 11), new Date(2025, 1, 12),
      new Date(2025, 1, 24), new Date(2025, 1, 25), new Date(2025, 1, 26),
      //mars
      new Date(2025, 2, 10), new Date(2025, 2, 11), new Date(2025, 2, 12),
      new Date(2025, 2, 24), new Date(2025, 2, 25), new Date(2025, 2, 26),
      //apríl
      new Date(2025, 3, 7), new Date(2025, 3, 8), new Date(2025, 3, 9),
      new Date(2025, 3, 22), new Date(2025, 3, 23),
      //maí
      new Date(2025, 4, 5), new Date(2025, 4, 6), new Date(2025, 4, 7),
      new Date(2025, 4, 19), new Date(2025, 4, 20), new Date(2025, 4, 21),
      //júní
      new Date(2025, 5, 2), new Date(2025, 5, 3), new Date(2025, 5, 4),
      new Date(2025, 5, 16), new Date(2025, 5, 18),
      new Date(2025, 5, 30),
      //júlí
      new Date(2025, 6, 1), new Date(2025, 6, 2),
      new Date(2025, 6, 14), new Date(2025, 6, 15), new Date(2025, 6, 16),
      new Date(2025, 6, 28), new Date(2025, 6, 29), new Date(2025, 6, 30),
      //ágúst
      new Date(2025, 7, 11), new Date(2025, 7, 12), new Date(2025, 7, 13),
      new Date(2025, 7, 25), new Date(2025, 7, 26), new Date(2025, 7, 27),
      //september
      new Date(2025, 8, 8), new Date(2025, 8, 9), new Date(2025, 8, 10),
      new Date(2025, 8, 22), new Date(2025, 8, 23), new Date(2025, 8, 24),
      //október
      new Date(2025, 9, 6), new Date(2025, 9, 7), new Date(2025, 9, 8),
      new Date(2025, 9, 20), new Date(2025, 9, 21), new Date(2025, 9, 22),
      //nóvember
      new Date(2025, 10, 3), new Date(2025, 10, 4), new Date(2025, 10, 5),
      new Date(2025, 10, 17), new Date(2025, 10, 18), new Date(2025, 10, 19),
      //desember
      new Date(2025, 11, 1), new Date(2025, 11, 2), new Date(2025, 11, 3),
      new Date(2025, 11, 15), new Date(2025, 11, 16), new Date(2025, 11, 17),
      new Date(2025, 11, 29), new Date(2025, 11, 30),
      //janúar 2026
      new Date(2026, 0, 2),
      new Date(2026, 0, 12), new Date(2026, 0, 13), new Date(2026, 0, 14),
      new Date(2026, 0, 26), new Date(2026, 0, 27), new Date(2026, 0, 28),
    ],
    blue_dates: [
      new Date(2024, 11, 5), new Date(2024, 11, 6),
      new Date(2025, 0, 2), new Date(2025, 0, 3), new Date(2025, 0, 30), new Date(2025, 0, 31),
      new Date(2025, 1, 27), new Date(2025, 1, 28),
      new Date(2025, 2, 27), new Date(2025, 2, 28),
      new Date(2025, 3, 23), new Date(2025, 3, 25),
      new Date(2025, 4, 22), new Date(2025, 4, 23),
      new Date(2025, 5, 19), new Date(2025, 5, 20),
      new Date(2025, 6, 17), new Date(2025, 6, 18),
      new Date(2025, 7, 14), new Date(2025, 7, 15),
      new Date(2025, 8, 11), new Date(2025, 8, 12),
      new Date(2025, 9, 9), new Date(2025, 9, 10),
      new Date(2025, 10, 6), new Date(2025, 10, 7),
      new Date(2025, 11, 4), new Date(2025, 11, 5),
      new Date(2026, 0, 3), new Date(2026, 0, 29), new Date(2026, 0, 30),
    ]
  },
  hverfi_4: {
    streets: [
      "álfaberg", "birkiberg", "burknaberg", "dofraberg", "einiberg", "fagraberg", "furuberg", "glitberg", "greniberg", "háaberg", "hnotuberg", "hólsberg", "hvassaberg", "kjarrberg", "klettaberg", "kléberg",
      "klukkuberg", "kvistaberg", "lindarberg", "ljósaberg", "lyngberg", "lækjarberg", "móberg", "reyniberg", "skálaberg", "sólberg", "staðarberg", "stekkjarberg", "stuðlaberg", "tinnuberg", "traðarberg", "víðiberg",
      "vörðuberg", "þórsberg", "brattakinn", "fagrakinn", "grænakinn", "háakinn", "kaldakinn", "lækjarkinn", "stekkjarkinn", "kvíholt", "melholt", "ölduslóð", "öldutún", "jófríðarstaðarvegur", "berjahlíð", "birkihlíð", "bjarmahlíð", "brekkuhlíð", "efstahlíð", "einihlíð", "engjahlíð", "fagrahlíð", "fjóluhlíð", "furuhlíð", "skógarhlíð", "sóleyjarhlíð", "steinahlíð", "úthlíð"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 9), new Date(2024, 11, 10), new Date(2024, 11, 11),
      new Date(2024, 11, 23), new Date(2024, 11, 24), new Date(2024, 11, 25),
      //janúar
      new Date(2025, 0, 6), new Date(2025, 0, 7), new Date(2025, 0, 8),
      new Date(2025, 0, 20), new Date(2025, 0, 21), new Date(2025, 0, 22),
      //febrúar
      new Date(2025, 1, 3), new Date(2025, 1, 4), new Date(2025, 1, 5),
      new Date(2025, 1, 17), new Date(2025, 1, 18), new Date(2025, 1, 19),
      //mars
      new Date(2025, 2, 3), new Date(2025, 2, 4), new Date(2025, 2, 5),
      new Date(2025, 2, 17), new Date(2025, 2, 18), new Date(2025, 2, 19),
      //apríl
      new Date(2025, 3, 1), new Date(2025, 3, 2),
      new Date(2025, 3, 14), new Date(2025, 3, 15), new Date(2025, 3, 16),
      new Date(2025, 3, 28), new Date(2025, 3, 29), new Date(2025, 3, 30),
      //maí
      new Date(2025, 4, 12), new Date(2025, 4, 13), new Date(2025, 4, 14),
      new Date(2025, 4, 26), new Date(2025, 4, 27), new Date(2025, 4, 28),
      //júní
      new Date(2025, 5, 10), new Date(2025, 5, 11),
      new Date(2025, 5, 23), new Date(2025, 5, 24), new Date(2025, 5, 25),
      //júlí
      new Date(2025, 6, 7), new Date(2025, 6, 8), new Date(2025, 6, 9),
      new Date(2025, 6, 21), new Date(2025, 6, 22), new Date(2025, 6, 23),
      //ágúst
      new Date(2025, 7, 5), new Date(2025, 7, 6),
      new Date(2025, 7, 18), new Date(2025, 7, 19), new Date(2025, 7, 20),
      //september
      new Date(2025, 8, 1), new Date(2025, 8, 2), new Date(2025, 8, 3),
      new Date(2025, 8, 15), new Date(2025, 8, 16), new Date(2025, 8, 17),
      new Date(2025, 8, 29), new Date(2025, 8, 30),
      //október
      new Date(2025, 9, 1),
      new Date(2025, 9, 13), new Date(2025, 9, 14), new Date(2025, 9, 15),
      new Date(2025, 9, 27), new Date(2025, 9, 28), new Date(2025, 9, 29),
      //nóvember
      new Date(2025, 10, 10), new Date(2025, 10, 11), new Date(2025, 10, 12),
      new Date(2025, 10, 24), new Date(2025, 10, 25), new Date(2025, 10, 26),
      //desember
      new Date(2025, 11, 8), new Date(2025, 11, 9), new Date(2025, 11, 10),
      new Date(2025, 11, 22), new Date(2025, 11, 23),
      //janúar 2026
      new Date(2026, 0, 5), new Date(2026, 0, 6), new Date(2026, 0, 7),
      new Date(2026, 0, 19), new Date(2026, 0, 20), new Date(2026, 0, 21),

    ],
    blue_dates: [
      new Date(2024, 11, 5), new Date(2024, 11, 6),
      new Date(2025, 0, 2), new Date(2025, 0, 3), new Date(2025, 0, 30), new Date(2025, 0, 31),
      new Date(2025, 1, 27), new Date(2025, 1, 28),
      new Date(2025, 2, 27), new Date(2025, 2, 28),
      new Date(2025, 3, 23), new Date(2025, 3, 25),
      new Date(2025, 4, 22), new Date(2025, 4, 23),
      new Date(2025, 5, 19), new Date(2025, 5, 20),
      new Date(2025, 6, 17), new Date(2025, 6, 18),
      new Date(2025, 7, 14), new Date(2025, 7, 15),
      new Date(2025, 8, 11), new Date(2025, 8, 12),
      new Date(2025, 9, 9), new Date(2025, 9, 10),
      new Date(2025, 10, 6), new Date(2025, 10, 7),
      new Date(2025, 11, 4), new Date(2025, 11, 5),
      new Date(2026, 0, 3), new Date(2026, 0, 29), new Date(2026, 0, 30),
    ]
  },
  hverfi_5: {
    streets: [
      "blómvangur", "breiðvangur", "brúsastaðir", "glitvangur", "heiðvangur", "hjallabraut", "hraunvangur", "laufvangur",
      "miðvangur", "norðurvangur", "skjólvangur", "suðurvangur", "sævangur", "vesturvangur", "víðivangur", "þrúðvangur", "klifið", "dalbær"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 2), new Date(2024, 11, 3), new Date(2024, 11, 4),
      new Date(2024, 11, 16), new Date(2024, 11, 17), new Date(2024, 11, 18),
      new Date(2024, 11, 30), new Date(2024, 11, 31),
      //janúar
      new Date(2025, 0, 2), new Date(2025, 0, 3),
      new Date(2025, 0, 13), new Date(2025, 0, 14), new Date(2025, 0, 15),
      new Date(2025, 0, 27), new Date(2025, 0, 28), new Date(2025, 0, 29),
      //febrúar
      new Date(2025, 1, 10), new Date(2025, 1, 11), new Date(2025, 1, 12),
      new Date(2025, 1, 24), new Date(2025, 1, 25), new Date(2025, 1, 26),
      //mars
      new Date(2025, 2, 10), new Date(2025, 2, 11), new Date(2025, 2, 12),
      new Date(2025, 2, 24), new Date(2025, 2, 25), new Date(2025, 2, 26),
      //apríl
      new Date(2025, 3, 7), new Date(2025, 3, 8), new Date(2025, 3, 9),
      new Date(2025, 3, 22), new Date(2025, 3, 23),
      //maí
      new Date(2025, 4, 5), new Date(2025, 4, 6), new Date(2025, 4, 7),
      new Date(2025, 4, 19), new Date(2025, 4, 20), new Date(2025, 4, 21),
      //júní
      new Date(2025, 5, 2), new Date(2025, 5, 3), new Date(2025, 5, 4),
      new Date(2025, 5, 16), new Date(2025, 5, 18),
      new Date(2025, 5, 30),
      //júlí
      new Date(2025, 6, 1), new Date(2025, 6, 2),
      new Date(2025, 6, 14), new Date(2025, 6, 15), new Date(2025, 6, 16),
      new Date(2025, 6, 28), new Date(2025, 6, 29), new Date(2025, 6, 30),
      //ágúst
      new Date(2025, 7, 11), new Date(2025, 7, 12), new Date(2025, 7, 13),
      new Date(2025, 7, 25), new Date(2025, 7, 26), new Date(2025, 7, 27),
      //september
      new Date(2025, 8, 8), new Date(2025, 8, 9), new Date(2025, 8, 10),
      new Date(2025, 8, 22), new Date(2025, 8, 23), new Date(2025, 8, 24),
      //október
      new Date(2025, 9, 6), new Date(2025, 9, 7), new Date(2025, 9, 8),
      new Date(2025, 9, 20), new Date(2025, 9, 21), new Date(2025, 9, 22),
      //nóvember
      new Date(2025, 10, 3), new Date(2025, 10, 4), new Date(2025, 10, 5),
      new Date(2025, 10, 17), new Date(2025, 10, 18), new Date(2025, 10, 19),
      //desember
      new Date(2025, 11, 1), new Date(2025, 11, 2), new Date(2025, 11, 3),
      new Date(2025, 11, 15), new Date(2025, 11, 16), new Date(2025, 11, 17),
      new Date(2025, 11, 29), new Date(2025, 11, 30),
      //janúar 2026
      new Date(2026, 0, 2),
      new Date(2026, 0, 12), new Date(2026, 0, 13), new Date(2026, 0, 14),
      new Date(2026, 0, 26), new Date(2026, 0, 27), new Date(2026, 0, 28),

    ],
    blue_dates: [
      new Date(2024, 11, 12), new Date(2024, 11, 13),
      new Date(2025, 0, 9), new Date(2025, 0, 10),
      new Date(2025, 1, 6), new Date(2025, 1, 7),
      new Date(2025, 2, 6), new Date(2025, 2, 7),
      new Date(2025, 3, 3), new Date(2025, 3, 4),
      new Date(2025, 4, 2), new Date(2025, 4, 30),
      new Date(2025, 5, 26), new Date(2025, 5, 27),
      new Date(2025, 6, 24), new Date(2025, 6, 25),
      new Date(2025, 7, 21), new Date(2025, 7, 22),
      new Date(2025, 8, 18), new Date(2025, 8, 19),
      new Date(2025, 9, 16), new Date(2025, 9, 17),
      new Date(2025, 10, 13), new Date(2025, 10, 14),
      new Date(2025, 11, 11), new Date(2025, 11, 12),
      new Date(2026, 0, 8), new Date(2026, 0, 9),
    ]
  },
  hverfi_6: {
    streets: [
      "arnarhraun", "álfaskeið", "bæjarhraun", "dalshraun", "erluhraun", "fálkahraun", "flatahraun", "kaplahraun", "kjóahraun", "klettahraun", "krókahraun", "lóuhraun",
      "mánastígur", "mávahraun", "norðurbakki", "skútahraun", "sléttahraun", "smyrlahraun", "stapahraun", "svöluhraun", "trönuhraun", "vitastígur", "þrastahraun", "sólvangsvegur"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 2), new Date(2024, 11, 3), new Date(2024, 11, 4),
      new Date(2024, 11, 16), new Date(2024, 11, 17), new Date(2024, 11, 18),
      new Date(2024, 11, 30), new Date(2024, 11, 31),
      //janúar
      new Date(2025, 0, 2), new Date(2025, 0, 3),
      new Date(2025, 0, 13), new Date(2025, 0, 14), new Date(2025, 0, 15),
      new Date(2025, 0, 27), new Date(2025, 0, 28), new Date(2025, 0, 29),
      //febrúar
      new Date(2025, 1, 10), new Date(2025, 1, 11), new Date(2025, 1, 12),
      new Date(2025, 1, 24), new Date(2025, 1, 25), new Date(2025, 1, 26),
      //mars
      new Date(2025, 2, 10), new Date(2025, 2, 11), new Date(2025, 2, 12),
      new Date(2025, 2, 24), new Date(2025, 2, 25), new Date(2025, 2, 26),
      //apríl
      new Date(2025, 3, 7), new Date(2025, 3, 8), new Date(2025, 3, 9),
      new Date(2025, 3, 22), new Date(2025, 3, 23),
      //maí
      new Date(2025, 4, 5), new Date(2025, 4, 6), new Date(2025, 4, 7),
      new Date(2025, 4, 19), new Date(2025, 4, 20), new Date(2025, 4, 21),
      //júní
      new Date(2025, 5, 2), new Date(2025, 5, 3), new Date(2025, 5, 4),
      new Date(2025, 5, 16), new Date(2025, 5, 18),
      new Date(2025, 5, 30),
      //júlí
      new Date(2025, 6, 1), new Date(2025, 6, 2),
      new Date(2025, 6, 14), new Date(2025, 6, 15), new Date(2025, 6, 16),
      new Date(2025, 6, 28), new Date(2025, 6, 29), new Date(2025, 6, 30),
      //ágúst
      new Date(2025, 7, 11), new Date(2025, 7, 12), new Date(2025, 7, 13),
      new Date(2025, 7, 25), new Date(2025, 7, 26), new Date(2025, 7, 27),
      //september
      new Date(2025, 8, 8), new Date(2025, 8, 9), new Date(2025, 8, 10),
      new Date(2025, 8, 22), new Date(2025, 8, 23), new Date(2025, 8, 24),
      //október
      new Date(2025, 9, 6), new Date(2025, 9, 7), new Date(2025, 9, 8),
      new Date(2025, 9, 20), new Date(2025, 9, 21), new Date(2025, 9, 22),
      //nóvember
      new Date(2025, 10, 3), new Date(2025, 10, 4), new Date(2025, 10, 5),
      new Date(2025, 10, 17), new Date(2025, 10, 18), new Date(2025, 10, 19),
      //desember
      new Date(2025, 11, 1), new Date(2025, 11, 2), new Date(2025, 11, 3),
      new Date(2025, 11, 15), new Date(2025, 11, 16), new Date(2025, 11, 17),
      new Date(2025, 11, 29), new Date(2025, 11, 30),
      //janúar 2026
      new Date(2026, 0, 2),
      new Date(2026, 0, 12), new Date(2026, 0, 13), new Date(2026, 0, 14),
      new Date(2026, 0, 26), new Date(2026, 0, 27), new Date(2026, 0, 28),
    ],
    blue_dates: [
      new Date(2024, 11, 12), new Date(2024, 11, 13),
      new Date(2025, 0, 9), new Date(2025, 0, 10),
      new Date(2025, 1, 6), new Date(2025, 1, 7),
      new Date(2025, 2, 6), new Date(2025, 2, 7),
      new Date(2025, 3, 3), new Date(2025, 3, 4),
      new Date(2025, 4, 2), new Date(2025, 4, 30),
      new Date(2025, 5, 26), new Date(2025, 5, 27),
      new Date(2025, 6, 24), new Date(2025, 6, 25),
      new Date(2025, 7, 21), new Date(2025, 7, 22),
      new Date(2025, 8, 18), new Date(2025, 8, 19),
      new Date(2025, 9, 16), new Date(2025, 9, 17),
      new Date(2025, 10, 13), new Date(2025, 10, 14),
      new Date(2025, 11, 11), new Date(2025, 11, 12),
      new Date(2026, 0, 8), new Date(2026, 0, 9),
    ]
  },
  hverfi_7: {
    streets: [
      "birkihvammur", "bæjarhvammur", "fagrihvammur", "fjóluhvammur", "háihvammur", "hraunkambur", "klausturhvammur", "hvammabraut", "lynghvammur", "lækjarhvammur",
      "reynihvammur", "smárahvammur", "staðarhvammur", "stekkjarhvammur", "suðurhvammur", "túnhvammur", "víðihvammur",
      "brekkugata", "hamarsbraut", "hellubraut", "hlíðarbraut", "holtsgata", "hringbraut", "garðstígur", "lækjargata", "mýrargata", "selvogsgata", "strandgata", "suðurgata", "öldugata"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 9), new Date(2024, 11, 10), new Date(2024, 11, 11),
      new Date(2024, 11, 23), new Date(2024, 11, 24), new Date(2024, 11, 25),
      //janúar
      new Date(2025, 0, 6), new Date(2025, 0, 7), new Date(2025, 0, 8),
      new Date(2025, 0, 20), new Date(2025, 0, 21), new Date(2025, 0, 22),
      //febrúar
      new Date(2025, 1, 3), new Date(2025, 1, 4), new Date(2025, 1, 5),
      new Date(2025, 1, 17), new Date(2025, 1, 18), new Date(2025, 1, 19),
      //mars
      new Date(2025, 2, 3), new Date(2025, 2, 4), new Date(2025, 2, 5),
      new Date(2025, 2, 17), new Date(2025, 2, 18), new Date(2025, 2, 19),
      //apríl
      new Date(2025, 3, 1), new Date(2025, 3, 2),
      new Date(2025, 3, 14), new Date(2025, 3, 15), new Date(2025, 3, 16),
      new Date(2025, 3, 28), new Date(2025, 3, 29), new Date(2025, 3, 30),
      //maí
      new Date(2025, 4, 12), new Date(2025, 4, 13), new Date(2025, 4, 14),
      new Date(2025, 4, 26), new Date(2025, 4, 27), new Date(2025, 4, 28),
      //júní
      new Date(2025, 5, 10), new Date(2025, 5, 11),
      new Date(2025, 5, 23), new Date(2025, 5, 24), new Date(2025, 5, 25),
      //júlí
      new Date(2025, 6, 7), new Date(2025, 6, 8), new Date(2025, 6, 9),
      new Date(2025, 6, 21), new Date(2025, 6, 22), new Date(2025, 6, 23),
      //ágúst
      new Date(2025, 7, 5), new Date(2025, 7, 6),
      new Date(2025, 7, 18), new Date(2025, 7, 19), new Date(2025, 7, 20),
      //september
      new Date(2025, 8, 1), new Date(2025, 8, 2), new Date(2025, 8, 3),
      new Date(2025, 8, 15), new Date(2025, 8, 16), new Date(2025, 8, 17),
      new Date(2025, 8, 29), new Date(2025, 8, 30),
      //október
      new Date(2025, 9, 1),
      new Date(2025, 9, 13), new Date(2025, 9, 14), new Date(2025, 9, 15),
      new Date(2025, 9, 27), new Date(2025, 9, 28), new Date(2025, 9, 29),
      //nóvember
      new Date(2025, 10, 10), new Date(2025, 10, 11), new Date(2025, 10, 12),
      new Date(2025, 10, 24), new Date(2025, 10, 25), new Date(2025, 10, 26),
      //desember
      new Date(2025, 11, 8), new Date(2025, 11, 9), new Date(2025, 11, 10),
      new Date(2025, 11, 22), new Date(2025, 11, 23),
      //janúar 2026
      new Date(2026, 0, 5), new Date(2026, 0, 6), new Date(2026, 0, 7),
      new Date(2026, 0, 19), new Date(2026, 0, 20), new Date(2026, 0, 21),

    ],
    blue_dates: [
      new Date(2024, 11, 19), new Date(2024, 11, 20),
      new Date(2025, 0, 16), new Date(2025, 0, 17),
      new Date(2025, 1, 13), new Date(2025, 1, 14),
      new Date(2025, 2, 13), new Date(2025, 2, 14),
      new Date(2025, 3, 10), new Date(2025, 3, 11),
      new Date(2025, 4, 8), new Date(2025, 4, 9),
      new Date(2025, 5, 5), new Date(2025, 5, 6),
      new Date(2025, 6, 3), new Date(2025, 6, 4),
      new Date(2025, 7, 1), new Date(2025, 7, 28), new Date(2025, 7, 29),
      new Date(2025, 8, 25), new Date(2025, 8, 26),
      new Date(2025, 9, 23), new Date(2025, 9, 24),
      new Date(2025, 10, 20), new Date(2025, 10, 21),
      new Date(2025, 11, 18), new Date(2025, 11, 19),
      new Date(2026, 0, 15), new Date(2026, 0, 16),
    ]
  },
  hverfi_8: {
    streets: [
      "austurgata", "fjarðargata", "gunnarssund", "hverfisgata", "linnetsstígur", "mjósund", "skólabraut", "sunnuvegur", "tjarnarbraut", "urðarstígur",
      "brunnstígur", "flókagata", "garðavegur", "hellisgata", "herjólfsgata", "hraunbrún", "hrauntunga", "hraunhvammur", "hraunstígur", "kirkjuvegur", "klettagata", "krosseyrarvegur",
      "langeyrarvegur", "merkurgata", "norðurbraut", "nönnustígur", "skerseyrarvegur", "skúlaskeið", "tunguvegur", "vesturbraut", "vesturgata", "reykjavíkurvegur", "vörðustígur"
    ],
    gray_dates: [
      //desember 2024
      new Date(2024, 11, 9), new Date(2024, 11, 10), new Date(2024, 11, 11),
      new Date(2024, 11, 23), new Date(2024, 11, 24), new Date(2024, 11, 25),
      //janúar
      new Date(2025, 0, 6), new Date(2025, 0, 7), new Date(2025, 0, 8),
      new Date(2025, 0, 20), new Date(2025, 0, 21), new Date(2025, 0, 22),
      //febrúar
      new Date(2025, 1, 3), new Date(2025, 1, 4), new Date(2025, 1, 5),
      new Date(2025, 1, 17), new Date(2025, 1, 18), new Date(2025, 1, 19),
      //mars
      new Date(2025, 2, 3), new Date(2025, 2, 4), new Date(2025, 2, 5),
      new Date(2025, 2, 17), new Date(2025, 2, 18), new Date(2025, 2, 19),
      //apríl
      new Date(2025, 3, 1), new Date(2025, 3, 2),
      new Date(2025, 3, 14), new Date(2025, 3, 15), new Date(2025, 3, 16),
      new Date(2025, 3, 28), new Date(2025, 3, 29), new Date(2025, 3, 30),
      //maí
      new Date(2025, 4, 12), new Date(2025, 4, 13), new Date(2025, 4, 14),
      new Date(2025, 4, 26), new Date(2025, 4, 27), new Date(2025, 4, 28),
      //júní
      new Date(2025, 5, 10), new Date(2025, 5, 11),
      new Date(2025, 5, 23), new Date(2025, 5, 24), new Date(2025, 5, 25),
      //júlí
      new Date(2025, 6, 7), new Date(2025, 6, 8), new Date(2025, 6, 9),
      new Date(2025, 6, 21), new Date(2025, 6, 22), new Date(2025, 6, 23),
      //ágúst
      new Date(2025, 7, 5), new Date(2025, 7, 6),
      new Date(2025, 7, 18), new Date(2025, 7, 19), new Date(2025, 7, 20),
      //september
      new Date(2025, 8, 1), new Date(2025, 8, 2), new Date(2025, 8, 3),
      new Date(2025, 8, 15), new Date(2025, 8, 16), new Date(2025, 8, 17),
      new Date(2025, 8, 29), new Date(2025, 8, 30),
      //október
      new Date(2025, 9, 1),
      new Date(2025, 9, 13), new Date(2025, 9, 14), new Date(2025, 9, 15),
      new Date(2025, 9, 27), new Date(2025, 9, 28), new Date(2025, 9, 29),
      //nóvember
      new Date(2025, 10, 10), new Date(2025, 10, 11), new Date(2025, 10, 12),
      new Date(2025, 10, 24), new Date(2025, 10, 25), new Date(2025, 10, 26),
      //desember
      new Date(2025, 11, 8), new Date(2025, 11, 9), new Date(2025, 11, 10),
      new Date(2025, 11, 22), new Date(2025, 11, 23),
      //janúar 2026
      new Date(2026, 0, 5), new Date(2026, 0, 6), new Date(2026, 0, 7),
      new Date(2026, 0, 19), new Date(2026, 0, 20), new Date(2026, 0, 21),

    ],
    blue_dates: [
      new Date(2024, 11, 19), new Date(2024, 11, 20),
      new Date(2025, 0, 16), new Date(2025, 0, 17),
      new Date(2025, 1, 13), new Date(2025, 1, 14),
      new Date(2025, 2, 13), new Date(2025, 2, 14),
      new Date(2025, 3, 10), new Date(2025, 3, 11),
      new Date(2025, 4, 8), new Date(2025, 4, 9),
      new Date(2025, 5, 5), new Date(2025, 5, 6),
      new Date(2025, 6, 3), new Date(2025, 6, 4),
      new Date(2025, 7, 1), new Date(2025, 7, 28), new Date(2025, 7, 29),
      new Date(2025, 8, 25), new Date(2025, 8, 26),
      new Date(2025, 9, 23), new Date(2025, 9, 24),
      new Date(2025, 10, 20), new Date(2025, 10, 21),
      new Date(2025, 11, 18), new Date(2025, 11, 19),
      new Date(2026, 0, 15), new Date(2026, 0, 16),
    ]
  }
}
