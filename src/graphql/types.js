const { GraphQLObjectType, GraphQLInputObjectType, GraphQLID, GraphQLString, 
    GraphQLList, GraphQLInt, GraphQLBoolean, GraphQLFloat } = require('graphql');

const { Post, User } = require('../models');

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User',
    fields: () => ({
          id: { type: GraphQLID },
          username: { type: GraphQLString},
          email: { type: GraphQLString},
          
          posts: { 
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userID: parent.id})
            }
           },
    })
})


const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: { type: GraphQLID },
        posts: { type: GraphQLString },
        userID: { type: GraphQLString },
        
        user: { 
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userID)
            }
        },
    })
})






module.exports = {
    UserType,
    PostType,
}