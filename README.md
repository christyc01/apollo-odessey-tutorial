# Odyssey Lift-off I: Basics

Welcome to the companion app of Odyssey Lift-off I! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/lift-off-part1), Apollo's learning platform.

You can [preview the completed demo app here](https://lift-off-client-demo.netlify.app/).

## How to use this repo

The course will walk you step by step on how to implement the features you see in the demo app. This codebase is the starting point of your journey!

There are 2 main folders:

- `server`: The starting point of our GraphQL server.
- `client`: The starting point of our React application.

To get started:

1. Navigate to the `server` folder.
1. Run `npm install`.
1. Run `npm start`.

This will start the GraphQL API server.

In another Terminal window,

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

This will open up `localhost:3000` in your web browser.

## Getting Help

For any issues or problems concerning the course content, please refer to the [Odyssey topic in our community forums](https://community.apollographql.com/tags/c/help/6/odyssey).

## SUMMARIES
### Lift-off I: Basics (Get started with Apollo)
To build our homepage grid feature, we used a schema-first approach, meaning we considered data needs from the client's perspective before even starting to code.

We defined our schema and used Apollo Server to build a basic GraphQL endpoint that provides mocked responses.

We then used the Apollo Studio Explorer to interactively build queries from our development graph.

Finally, we developed the client side of our Catstronauts app. We used React, Apollo Client, and the useQuery Hook to perform a query on our GraphQL server to display our tracks in a nice grid card layout.

In the following course, we'll connect our app to live data using a REST data source and write our first resolvers to provide that data to clients.