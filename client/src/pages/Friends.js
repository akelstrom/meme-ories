import React from 'react'
import { Container, Grid, Card, CardHeader, CardMedia, CardContent, Button } from '@material-ui/core'
/*DATA*/
import friendsData from '../utils/friendsData';
/*ICONS*/

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FaceIcon from '@material-ui/icons/Face';

const Friends = () => {
    return (
      <div>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={3} lg= {3} className="gridItem">
              
              {friendsData.people.map (friend => (
               
                <Card elevation={4} className='project-card'>
                
                <CardMedia>
                  
                </CardMedia>

                <CardContent>
                  <center>
                <FaceIcon/>
                  <h2>{friend.name}</h2>
                 <b>Games Played:</b> {friend.played} <br/>
                 <b>Games Won:</b> {friend.won}<br/><br/>
                 <Button>Add Friend <PersonAddIcon/></Button>
                 </center>
                </CardContent>

              </Card>
              
            ))}
             
            
  
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg= {3} className="gridItem">
              
            {friendsData.people.map (friend => (
               
               <Card elevation={4} className='project-card'>
               
               <CardMedia>
                  
                  </CardMedia>
  
                  <CardContent>
                  <center>
                <FaceIcon/>
                  <h2>{friend.name}</h2>
                 <b>Games Played:</b> {friend.played} <br/>
                 <b>Games Won:</b> {friend.won}<br/><br/>
                 <Button>Add Friend <PersonAddIcon/></Button>
                 </center>
                </CardContent>
              </Card>
                
            ))}
             
            
  
            </Grid>
  
  
          </Grid>

          
        </Container>
      </div>
    )
  }
  

export default Friends;