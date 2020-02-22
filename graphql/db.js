export const people = [
    {
      id : "1",
      name : "hangyeol1",
      age : 18,
      gender : "male"
    },
    {
      id : "2",
      name : "hangyeol2",
      age : 19,
      gender : "female"
    },
    {
      id : "3",
      name : "hangyeol3",
      age : 20,
      gender : "male"
    },
    {
      id : "4",
      name : "hangyeol4",
      age : 21,
      gender : "female"
    }
  ]

export const getById = id => {
    const filtereadPeople = people.filter(person => person.id === String(id));
    return filtereadPeople[0];
}