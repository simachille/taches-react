/*
[
  '{{repeat(5, 7)}}',
  {
    id: '{{objectId()}}',
    title:'{{lorem(4, "words")}}',
    description: '{{lorem(20, "words")}}',
    status: '{{integer(1,4)}}',
    ti: '{{integer(14, 35)}}',
    tr: '{{integer(0, 35)}}',
    users: [
      '{{repeat(3)}}',
      {
        id: '{{objectId()}}',
        firstName: '{{firstName()}}',
        lastName: '{{surname()}}',
        email: '{{email()}}'
      }
    ]   
  }
]
*/

export const columns = [
  {
    id: 1,
    title: "TODO"
  },
  {
    id: 2,
    title: "WIP"
  },
  {
    id: 3,
    title: "TEST"
  },
  {
    id: 4,
    title: "DONE"
  }
];

export const TASKS_URL = "http://localhost:4000/tasks";
