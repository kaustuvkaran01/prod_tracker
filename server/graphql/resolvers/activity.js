const {AuthenticationError, UserInputError} = require('apollo-server');

const Activity = require('../../models/Activity');
// const checkAuth = require('../../util/check-auth');

module.exports = {
    Query:{
        sayHi: () => 'Hello world!'
    },
    // Mutation: {

    // }
}