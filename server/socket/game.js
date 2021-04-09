
let io;
let gameSocket;

//init game function is called by index.js to init a new game instance
exports.initGame = function(sio, socket) {
    io = sio;
    gameSocket = socket;
    gameSocket.emit("connected", {message: "you are connected to sh*t's n giggles!"});

    //socket host events
    gameSocket.on('hostCreateNewGame', hostCreateNewGame);
    gameSocket.on('hostRoomFull', hostPrepGame);
    gameSocket.on('hostCountdownFinished', hostStartGame);
    gameSocket.on('hostNextRound', hostNextRound);

    //socket player events
    gameSocket.on('playerJoinGame', playerJoinGame);
    gameSocket.on('playerAnswer', playerAnswer);
    gameSocket.on('playerRestart', playerRestart);

}

//host functions

const hostCreateNewGame = () => {
    //unique socket.io room 
    const currentGameId = (Math.random() * 1000) | 0;

    //return the gameId and the my socketId to the browswer client
    this.emit('newGameCreated', {
        gameId: currentGameId,
        mySocketId: this.id
    })

    //join room, and wait for players
    this.join(currentGameId.toString());
}

const hostPrepGame = () => {
    const sock = this;
    let data = {
        mySocketId : sock.id,
        gameId: gameId
    };

    console.log("All Players have arrived, time to start!");
    io.sockets.in(data.gameId).emit('beginNewGame', data);
}

const hostStartGame = () => {
    console.log('Game Started');
    
    //create a function to send a question to all clients here:
    sendQuestion(0, gameId)
}

const hostNextRound = (data) => {
    if(data.round < 9 ) {
        //send question to client, and pass through round and gameid

    }  else {
        io.sockets.in(data.gameId).emit('gameOver', data);
    }
}


//player functions 

const playerJoinGame = (data) => {
    console.log(`Player ${data.playerName} attempting to join ${data.gameId}`);

    //reference the players socket io socket object
    const sock = this;

    //look up room id in the socket.io manager object
    let room = gameSocket.manager.rooms[`/${data.gameId}`];

    //if the room exsists
    if (room){
        //attach socket id to data object
        data.mySocketId = sock.id;

        //join the room
        sock.join(data.gameId);

        //emit an event notifiying the clients that player has joined 
        io.sockets.in(data.gameId).emit('playerJoinedRoom', data);

    } else {
        this.emit('error', {message: "This room does not exsist"})
    }
}

const playerAnswer = (data) => {
    io.sockets.in(data.gameId).emit('hostCheckAnswer', data);
}

const playerRestart = (data) => {
    data.playerId = this.id;
    io.sockets.in(data.gameId).emit("playerJoinedRoom", data);
}


//game logic

//send a question from the database to the room
const sendQuestion = (questionIndex, gameId) => {
    let data = getQuestionData(questionIndex);
    io.sockets.in(gameId).emit('newQuestionData', data);
}
