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
    <div onClick={toggleDrawer(true)}>
      <Typography component="div">
      <Box width={800}>
        <h1>Meme-Ories</h1>
          <p>Compete with your friends and family to come up with the funniest captions for popular memes.</p>
        <h2>Game Rules</h2>
          <p>Each player will have a meme appear on their dashboard. They will be able to enter their funniest caption and submit it. 
            Other players will be able to see what captions have already been added, and they can vote on their favorite one! 
            After 8 votes have been submitted, the Meme will expire and the next Meme will be displayed.
            At this time, the player with the most votes wins that round!
          </p>
          <ul>
            <li>
              Players are not allowed to vote for their own caption.
            </li>
            <li>
              Players are only allowed to vote once. 
            </li>
          </ul>
        <h3>Demo below? </h3>
          <p>Placeholder for a gif</p>
      </Box>
      </Typography>
    </div>
  )

  return (
  <div align="right">
    <Button onClick={toggleDrawer(true)}><MenuIcon className="helpIcon"/></Button>
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