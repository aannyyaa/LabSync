import collaborators from './collaborators'

const tasks = [
  {
    id: '1',
    title: 'Gel Electrophoresis',
    description: '',
    startDate: (new Date()).toLocaleDateString(),
    deadline: (new Date(2021, 1, 1)).toLocaleDateString(),
    creator: collaborators[2],
    collaborators: [collaborators[2], collaborators[7], collaborators[8], collaborators[11]],
  },
  {
    id: '2',
    title: 'PCR',
    description: '',
    startDate: (new Date()).toLocaleDateString(),
    deadline: (new Date(2021, 1, 5)).toLocaleDateString(),
    creator: collaborators[3],
    collaborators: [collaborators[3], collaborators[9], collaborators[4], collaborators[14]],
  },
  {
    id: '3',
    title: 'Protein Purification',
    description: '',
    startDate: (new Date()).toLocaleDateString(),
    deadline: (new Date(2021, 1, 10)).toLocaleDateString(),
    creator: collaborators[4],
    collaborators: [collaborators[4], collaborators[5], collaborators[6], collaborators[13]],
  },
  {
    id: '4',
    title: 'Flow Cytometry',
    description: '',
    startDate: (new Date()).toLocaleDateString(),
    deadline: (new Date(2021, 1, 15)).toLocaleDateString(),
    creator: collaborators[5],
    collaborators: [collaborators[5], collaborators[7], collaborators[8], collaborators[12]],
  },
  {
    id: '5',
    title: 'Cell Culture',
    description: '',
    startDate: (new Date()).toLocaleDateString(),
    deadline: (new Date(2021, 1, 20)).toLocaleDateString(),
    creator: collaborators[6],
    collaborators: [collaborators[6], collaborators[8], collaborators[9], collaborators[11], collaborators[15]],
  },
  {
    id: '6',
    title: 'Grant Writing',
    description: '',
    startDate: (new Date()).toLocaleDateString(),
    deadline: (new Date(2021, 1, 25)).toLocaleDateString(),
    creator: collaborators[0],
    collaborators: [collaborators[0], collaborators[1]],
  }
]

export default tasks
