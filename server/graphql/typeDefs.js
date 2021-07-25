const {gql} = require('apollo-server');

module.exports = gql`

    type User{
        id:ID!
        username:String!
        email:String!
        token:String!
        createdAt:String!
    }

    input RegisterInput{
        username:String!
        password:String!
        confirmPassword:String!
        email:String!
    }

    type Query{
        sayHi:String!
    }

    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password:String!):User!
    }
`;