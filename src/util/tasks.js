/*
[
  '{{repeat(5, 7)}}',
  {
    id: '{{index()}}',
    title:'{{lorem(4, "words")}}',
    description: '{{lorem(20, "words")}}',
    status: '{{integer(1,4)}}',
    ti: '{{integer(14, 35)}}',
    tr: '{{integer(0, 35)}}',
    users: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        firstName: '{{firstName()}}',
        lastName: '{{surname()}}',
        email: '{{email()}}'
      }
    ]
  }
]
*/

export const tasks = [
  {
    id: 0,
    title: "consectetur velit amet proident",
    description:
      "velit id enim tempor ea in qui anim cupidatat nisi ipsum eiusmod laborum est esse veniam nisi irure nulla adipisicing",
    status: 2,
    ti: 16,
    tr: 31,
    users: [
      {
        id: 0,
        firstName: "Parsons",
        lastName: "Russell",
        email: "parsonsrussell@idetica.com"
      },
      {
        id: 1,
        firstName: "Eileen",
        lastName: "Blake",
        email: "eileenblake@idetica.com"
      },
      {
        id: 2,
        firstName: "Rosa",
        lastName: "Murray",
        email: "rosamurray@idetica.com"
      }
    ]
  },
  {
    id: 1,
    title: "ex pariatur enim voluptate",
    description:
      "laborum aliquip pariatur consequat velit aute aute nulla ipsum sint adipisicing deserunt excepteur ex do proident do nisi tempor aute",
    status: 4,
    ti: 26,
    tr: 32,
    users: [
      {
        id: 0,
        firstName: "Lucy",
        lastName: "Melendez",
        email: "lucymelendez@idetica.com"
      },
      {
        id: 1,
        firstName: "Lorna",
        lastName: "Gay",
        email: "lornagay@idetica.com"
      },
      {
        id: 2,
        firstName: "Sandra",
        lastName: "Elliott",
        email: "sandraelliott@idetica.com"
      }
    ]
  },
  {
    id: 2,
    title: "ea occaecat reprehenderit elit",
    description:
      "consectetur consequat nostrud nisi eiusmod aliqua in cillum exercitation consequat aliqua sunt dolore excepteur anim dolor eiusmod non ad ea",
    status: 4,
    ti: 23,
    tr: 3,
    users: [
      {
        id: 0,
        firstName: "William",
        lastName: "Beck",
        email: "williambeck@idetica.com"
      },
      {
        id: 1,
        firstName: "Merrill",
        lastName: "Hahn",
        email: "merrillhahn@idetica.com"
      },
      {
        id: 2,
        firstName: "Mckinney",
        lastName: "Berry",
        email: "mckinneyberry@idetica.com"
      }
    ]
  },
  {
    id: 3,
    title: "consequat sunt proident incididunt",
    description:
      "exercitation officia sunt magna aute duis velit qui nostrud aliqua cupidatat deserunt esse fugiat sint fugiat dolore eu excepteur commodo",
    status: 3,
    ti: 30,
    tr: 32,
    users: [
      {
        id: 0,
        firstName: "Angelique",
        lastName: "Adams",
        email: "angeliqueadams@idetica.com"
      },
      {
        id: 1,
        firstName: "Sue",
        lastName: "Benton",
        email: "suebenton@idetica.com"
      },
      {
        id: 2,
        firstName: "Guerra",
        lastName: "Prince",
        email: "guerraprince@idetica.com"
      }
    ]
  },
  {
    id: 4,
    title: "labore proident excepteur fugiat",
    description:
      "aliqua aute labore in laborum quis officia ullamco amet qui ullamco quis ea ad est laborum anim ex exercitation enim",
    status: 1,
    ti: 14,
    tr: 21,
    users: [
      {
        id: 0,
        firstName: "Neva",
        lastName: "Estrada",
        email: "nevaestrada@idetica.com"
      },
      {
        id: 1,
        firstName: "Serena",
        lastName: "Norton",
        email: "serenanorton@idetica.com"
      },
      {
        id: 2,
        firstName: "Maryellen",
        lastName: "Bolton",
        email: "maryellenbolton@idetica.com"
      }
    ]
  },
  {
    id: 5,
    title: "anim pariatur ullamco do",
    description:
      "amet laboris aliquip et nulla irure anim labore sit amet deserunt ut non duis adipisicing eu ipsum ad magna irure",
    status: 3,
    ti: 33,
    tr: 15,
    users: [
      {
        id: 0,
        firstName: "Holland",
        lastName: "Knox",
        email: "hollandknox@idetica.com"
      },
      {
        id: 1,
        firstName: "Collins",
        lastName: "Mayer",
        email: "collinsmayer@idetica.com"
      },
      {
        id: 2,
        firstName: "Camacho",
        lastName: "Cooke",
        email: "camachocooke@idetica.com"
      }
    ]
  },
  {
    id: 6,
    title: "velit exercitation occaecat ullamco",
    description:
      "est dolor pariatur in velit ipsum consectetur adipisicing laborum exercitation esse reprehenderit aliquip incididunt laboris laborum amet velit ex Lorem",
    status: 2,
    ti: 30,
    tr: 18,
    users: [
      {
        id: 0,
        firstName: "Fannie",
        lastName: "Mercado",
        email: "fanniemercado@idetica.com"
      },
      {
        id: 1,
        firstName: "Jill",
        lastName: "Summers",
        email: "jillsummers@idetica.com"
      },
      {
        id: 2,
        firstName: "Jenna",
        lastName: "Guerrero",
        email: "jennaguerrero@idetica.com"
      }
    ]
  }
];
