import collaborators from './collaborators'

const tasks = [
  {
    id: 1,
    title: 'Gel Electrophoresis',
    description: '',
    startDate: new Date(),
    deadline: new Date(2021, 1, 1),
    creator: collaborators[2],
    collaborators: [collaborators[2], collaborators[7], collaborators[8]],
  },
  {
    id: 2,
    title: 'PCR',
    description: '',
    startDate: new Date(),
    deadline: new Date(2021, 1, 1),
    creator: collaborators[3],
    collaborators: [collaborators[3], collaborators[9], collaborators[4]],
  },
  {
    id: 3,
    title: 'Protein Purification',
    description: '',
    startDate: new Date(),
    deadline: new Date(2021, 1, 1),
    creator: collaborators[4],
    collaborators: [collaborators[4], collaborators[5], collaborators[6]],
  },
  {
    id: 4,
    title: 'Flow Cytometry',
    description: '',
    startDate: new Date(),
    deadline: new Date(2021, 1, 1),
    creator: collaborators[5],
    collaborators: [collaborators[5], collaborators[7], collaborators[8]],
  },
  {
    id: 5,
    title: 'Cell Culture',
    description: '',
    startDate: new Date(),
    deadline: new Date(2021, 1, 1),
    creator: collaborators[6],
    collaborators: [collaborators[6], collaborators[8], collaborators[9]],
  }
]

export default tasks
