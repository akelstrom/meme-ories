import { validate } from "../../../server/models/User";

function game() {
    //IO
    const IO = {

        init: function() {
            IO.socket = io.connect();
            IO.bindEvents();
        },
        bindEvents: function() {
            IO.socket.on('connected', IO.onConnected);
            IO.socket.on('newGameCreated', IO.onNewGameCreated);
        },
        onConnected: function() {
                 app.mySocketId = IO.socket.socket.sessionId;
        },
        onNewGameCreated: function(data) {
            app.Host.gameInit(data);
        },
        playerJoinedRoom: function(data) {
            app[app.myRole].updateWaitingScreen(data);
        },
        beginNewGame: function(data) {
            app[app.myRole].gameCount(data);
        },
        onNewQuestionData: function(data) {
            app.currentRound = data.round;
            app[app.myRole].newQuestion(data);
        },
        hostCheckVoteCount: function(data){
            //logic to check which player has most votes
            let max = 0;

       
         
        },
        gameOver: function(data) {
            app[app.myRole].endGame(data);
        } 
        //all code relating to socket connections
    }

    const app = {
        //generic game logic goes here
        gameId: 0,
        myRole: '', //'player' or 'host'
        mySocketId: '',
        currentRound: 0,
        scoreCount: 0,


        //Host 
        Host:  {
            //game logic for host (big screen) goes here
            players: [],
            isNewGame: false,
            numPlayersInRoom: 0,
            scoreCount: 0,
            //create event listener to attach to this, when host clicks "create game"
            onCreateClick: function() {
                IO.socket.emit('hostCreatedNewGame')
            },
            gameInit: function(data) {
                app.gameId = data.gameId;
                app.mySocketId = data.mySocketId;
                app.myRole = "Host";
                app.Host.numPlayersInRoom = 0;
                app.Host.displayNewGameScreen();
            },
            displayNewGameScreen: function() {
                //show code on the screen 
                getElementById("gameArea").innerHTML = `Welcome to sh*ts and giggles, here is your game code: ${app.gameId}`;

                //add start game button, to be clicked when all players arrive

            },
            updateWaitingScreen: function() {
                if (app.Host.isNewGame) {
                    app.Host.displayNewGameScreen();
                }
                app.Host.players.push(data);
                //increment number of players in room
                app.Host.numPlayersInRoom += 1;

                //if all players join, click start game and let server know all players are present
                //on click start game,... fire **ADD event listener****
                IO.socket.emit('hostRoomFull', app.gameId);
            },
            newQuestion: function(data) {
              
            },
            hostCheckVoteCount: function() {

            },
            endGame: function(data) {

            },
            restartGame: function(data) {

            },


        },
      //game logic for player screens
        Player : {
            hostSocketId: '',
            username: '',
            onJoinClick: function() {
                //display the game id or reroute player to gameboard
            },
            onPlayerStartClick: function() {
                //collect data to send to server
                let data = {
                    gameId: getElementById("gameIdInput").value().trim();
                    playerName: this.username,
                }
            }
        }
    }








}