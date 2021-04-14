import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box';
import './GameRules.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Help'

const GameRules = () => {
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' || event.type === 'click' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const rules = () => (
    <div  className="rules-container" onClick={toggleDrawer(true)}>
      <Typography component="div">
      <Box width={800}>
      <img src={require("../../images/logo.png").default} alt="logo" className="logo"/>
          <h1>Compete with your friends and family to come up with the funniest captions for popular memes.</h1>
        <h2>How to play</h2>
          <p>Each player will have a set of memes appear on their dashboard, we call this a (meme-ory). You will be able to enter your own funny caption and submit it. 
            Other players will be able to see what captions have already been added, and they can vote (we call this laugh) on their favorite one! 
            Keep track of you're scores, and compare them to your friends scores, to compete for "cleverest/funniest." To have a friend show up on the leaderboard, click the "search for friends" button, and start typing a name to filter through our users. 
          </p>
          <h2>Some general rules</h2>
          <ul>
            <li>
              Players are not allowed to vote (laugh) on their own caption.
            </li>
            <li>
              Players are only allowed to vote (laugh) once. 
            </li>
          </ul>
      </Box>
      </Typography>
    </div>
  )

  return (
  <div align="right">
    <Button onClick={toggleDrawer(true)}><MenuIcon className="helpIcon link"/></Button>
    <Drawer
    anchor={'right'}
    open={state}
    onClose={toggleDrawer(false)}
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
    >
    {rules()}
    </Drawer>
  </div>
  )
}

export default GameRules;