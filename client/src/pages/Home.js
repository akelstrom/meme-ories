import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
    },
    box: {
        border: "dotted 5px",
        borderRadius: "10px",
        boxShadow: "-13px 24px #242582",
        margin: "0 20px"
    }
}));
const Home = () => {

    const classes = useStyles();

    return (
        <Container fixed className={clsx("def-container", classes.root)}>
            <Container className={classes.box} >
             <h1>meme <i>noun</i></h1>
             <h2>Definition of <i>meme</i> <p>/ mēm /</p></h2>
             <p>1 : an idea, behavior, style, or usage that spreads from person to person within a culture</p>
             <p>2 : an amusing or interesting item (such as a captioned picture) or a genre of items that is spread widely online especially through social media.</p>
             </Container>
            <Container className={classes.box}>
             <h1>meme-ory <i>noun</i></h1>
             <h2>Definition of <i>meme-ory</i> <p>/ mēm-rē / </p></h2>
             <p>1. a meme that appears on your social media(meme-ories) dashboard, of which caption is to be determined by user's input. The highest number of votes on a caption wins the right to caption that meme.</p>
             </Container>
        </Container>
    );
};

export default Home;