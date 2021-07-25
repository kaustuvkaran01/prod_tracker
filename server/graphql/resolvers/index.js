const activityResolvers = require("./activity");
const userResolvers = require('./users');

module.exports = {
  Query: {
    ...activityResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    //    ...activityResolvers.Mutation
  },
};
