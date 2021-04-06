const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const dotenv = require('dotenv');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

//socket io constants
const socketio = require('socket.io');
const http = require('http');
const socketServer = http.createServer(app);
const io = socketio(socketServer);

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

//run when client connects to socket
io.on('connection', socket => {
    console.log('New socket connetion')
})

// Serve up static assets (from shop-shop, uncomment if we also need it)
//app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    socketServer.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // Uncomment when schemas are finished and ApolloServer is connected
        //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});