const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
require("./models");
const game = require("./socket/game");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// Uncomment when the schemas are finished
/* const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: authMiddleware
}); */

// Uncomment when schemas are finished and the above code is ready
//server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets (from shop-shop, uncomment if we also need it)
//app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  const socketServer = app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // Uncomment when schemas are finished and ApolloServer is connected
    //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

  //socket

    const socketio = require("socket.io");
    const http = require("http");
    const io = socketio(socketServer); 

      
    //   io.on('connection', function(socket) {
    //       // Connection now authenticated to receive further events
      
    //       socket.on('message', function(message) {
    //           io.emit('message', message);
    //       });
    //   });

    io.use(())
    io.sockets.on("connection", (socket) => {
        // socket.on('join')
        console.log("joined socket" ,socket.id);
        //connection will start the game function in the socket dir, passing through back end socket (io) and client side (socket)
        game.initGame(io, socket)

      });
    

      io.on("disconnect", () => {
            //undefined if disconnected
            console.log("disconnected",socket.id);
          });

//   //run when client connects to socket

//   
});
