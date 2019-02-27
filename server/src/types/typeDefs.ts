import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Place {
    "Unique id of the Place"
    id: ID!
    "Name of the Place"
    name: String!
    "Description of the Place"
    description: String
    "Location of the Place"
    location: Location
    "Type of the Place"
    type: String
    "Tags related to the Place"
    tags: [String]
    "Available menus for the Place"
    menus: [Menu]!
  }

  type Location {
    "Latitude"
    latitude: Float
    "Longitude"
    longitude: Float
  }

  type Menu {
    "Unique id of the Menu"
    id: ID!
    "Availability of the Menu"
    available: Available
    "If the Menu is active"
    active: Boolean
    "The Place that has the Menu"
    place: Place!
    "Available Food on the Menu"
    foods: [Food]!
  }

  type Available {
    "Week the Menu was available"
    week: Int
    "From which date the Menu was available"
    fromDate: String
    "To which date the Menu was available"
    toDate: String
  }

  type Food {
    "Unique id of the Food"
    id: ID!
    "Name of the Food"
    name: String!
    "Description of the Food"
    description: String
    "Price of the Food"
    price: Int
    "The Place that serves the Food"
    place: Place!
    "The Menus that has the Food"
    menus: [Menu]!
  }

  type Query {
    place(id: ID!): Place
    places: [Place]!

    menu(id: ID!): Menu
    menus: [Menu]!

    food(id: ID!): Food
    foods: [Food]!
  }
`;
