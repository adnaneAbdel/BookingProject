const {gql} = require('apollo-server-express')
const typeDefs = gql`
type Query {
         events: [Event]
         Bookings: [Booking]
         getUserEvents(userId: ID!): [Event]
        }

type Mutation {
    createUser(userInput: UserInput!): User
    createEvent(eventInput: EventInput!): Event
    bookEvent(eventId: ID!): Booking
    cancelBooking(bookingId: ID!): Event
    login(email:String!, password: String): AuthData
    deleteEvent(eventId: ID!): [Event]
        }
type User {
         _id: ID!
         username: String!
         email: String!
         passowrd: String!
        }
type Event {
         _id:ID!
         title : String!
         description: String!
         price: Float!
         date: String!
         creator: User!
        }
type Booking {
         _id: String!
         event: Event!
         user: User!
         createdAt: String!
         upadatedAt: String!
        }
`
        


module.exports = {typeDefs}