const han = {
    name : "hangyeol",
    age : 18,
    gender : "male"
};

const resolvers = {
    Query: {
      person: () => han
    }
};

export default resolvers;