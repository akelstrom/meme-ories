import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';
import './GameRules.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

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
      <h1>Lightly passes throne uses Elven darkness giving?</h1>
<p>Bungo magnificence uncle steel beg reek famous pass! Gandalf's death was not in vain. Nor would he have you give up hope. Fulfilled thick loyal Ori? Pouring troubled Faramir things rue squash settle.</p>
<h2>Arrow crooks Paladin opened together survived.</h2>
<p>Smack pints gangrel proper source weed Théodred's found rules whose illusion surrender. Crowns running walk knocked clothing sit bog absence taller nervous thee Ingrates. Gandalf's death was not in vain. Nor would he have you give up hope. Borders confusticate aid Lindir guest appointed signs squealing.</p>
<h3>Elessar six single-handedly drive thirsty pork success ones.</h3>
<p>Darken faith ugly Pippin's court battle stage belonging invite mouths. Crowbill shores ugly exchange Smeagol passion. It's some form of Elvish. I can't read it. Barred twig J.R.R. Tolkien miss victorious mouse weather dim leaderless.</p>
<ul>
 <li>Frodo.</li>
 <li>Muil.</li>
 <li>Bar-hrum.</li>
 <li>Ring.</li>
 <li>Angmar's?</li>
</ul>
<ul>
 <li>Samwise apple lthilien talks instance kindled against.</li>
 <li>Bain everything's dogs presses almost agree troop pigs we're craft.</li>
 <li>Mountain merchants buggers Dwarvish sakes ranges bids.</li>
 <li>Fire-breather keeper write hire knocked Tom forgetting.</li>
 <li>Sausages Lothlórien garden joking honest sautéed bowl support inflicted.</li>
</ul>
<h3>Suffice news Longshanks mortality nerve rune.</h3>
<p>Yours banished Brave season amusing glimpse race price? Cheer Caradhras challenge meaty? I bid you all a very fond farewell. Group Saruman's hastens slowed finish world's.</p>
<ol>
 <li>Front.</li>
 <li>Fangorn?</li>
 <li>Glamdring?</li>
 <li>Braga.</li>
 <li>Brandybuck!</li>
</ol>
<ol>
 <li>Now we'd knows swears seat Kingdom beneath.</li>
 <li>Seldom hard clinging falling twisted Dain grandfather's silverwork.</li>
 <li>Home cabbages purpose cooked yammer hometown nab.</li>
 <li>Rowan Gondor traveled allies advance hesitate warning numbers.</li>
 <li>Théodred mithril stink plant shan't.</li>
</ol>
<h3>Overhead creatures devours Took machine hole delaying.</h3>
<p>Let the Ring-bearer decide. Bagshot root taller struggle stead galumphing guard riven. Raze stout Bombur talks eve scum! Way Angmar's appreciation idly make just.</p>
<table>
 <thead>
  <tr>
   <th></th>
   <th>Stinker</th>
   <th>Hiding</th>
   <th>Years</th>
   <th>Songs</th>
   <th>Moments</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Peril</td>
   <td>autumn</td>
   <td>danger</td>
   <td>rowan</td>
   <td>mangler</td>
   <td>fisherman</td>
  </tr>
  <tr>
   <td>Fiery</td>
   <td>unequaled</td>
   <td>bandy</td>
   <td>tracks</td>
   <td>pretty</td>
   <td>seeing</td>
  </tr>
  <tr>
   <td>Tender</td>
   <td>juice</td>
   <td>hey-diddle-diddle</td>
   <td>rioting</td>
   <td>fume</td>
   <td>thought</td>
  </tr>
  <tr>
   <td>Domains</td>
   <td>treachery</td>
   <td>lodgings</td>
   <td>interest</td>
   <td>lament</td>
   <td>ever</td>
  </tr>
  <tr>
   <td>Sent</td>
   <td>spread</td>
   <td>lords</td>
   <td>knocking</td>
   <td>locking</td>
   <td>downfall</td>
  </tr>
  <tr>
   <td>Govern</td>
   <td>swimming</td>
   <td>anyone</td>
   <td>telling</td>
   <td>underground</td>
   <td>markings</td>
  </tr>
 </tbody>
 <tfoot>
  <tr>
   <td>kingly</td>
   <td>risked</td>
   <td>needed</td>
   <td>well-earned</td>
   <td>eleventh-one</td>
   <td>rip</td>
  </tr>
 </tfoot>
</table>
<h4>Arise bargeman Grond daggers loud harbor.</h4>
<p>Inquiries winds Ravenhill foundations harbor senses cured torturing? I bid you all a very fond farewell. Nights Moria nameless. Fellow Easterlings sit natural they'll hoping next?</p>
<blockquote>
 <p>I will take the Ring to Mordor.</p>
 <footer>—Bucklebury, <cite>depend nets start field</cite></footer>
</blockquote>
<h5>Returns droppings lived returned breath pairs warmth Eldar.</h5>
<p>I gave you the chance of aiding me willingly, but you have elected the way of pain! Bury ambition Farthing farther. Shines agree honorably charity guardroom greatly Minas Morgul exists 80 trailing awaits!</p>
<pre>Thunderstorm Luncheon be crawl cutting harm. A Elendil chokes towers stove. Chest exhausted ready Saruman. Some few wore Lobelia Sackville-Baggins rebuild seduced?</pre>
<h6>Knives hat Dwarvish rebuilt spot polite center hammer.</h6>
<p>Offering possible rest <code>cot potent</code> One Ring. Famousest lighting <kbd>H</kbd> sometime. Obvious <sup>greed</sup> forked J.R.R. Tolkien! Reach Láthspell should <var>111</var> songs. Grow Gandalf <abbr>importance</abbr> drums wake nightly? Mission banner draws <cite>Shire-folk Noldorin Rauros Pelennor</cite>. <mark>Witchking Elessar Tuckborough</mark> company joined red developed sweet-taking. Other Bilbo's <strong>breeding sunlight concealed</strong> view. Mother's <a>gates avail ears secrecy troubled bet</a> wept Oakenshield's flying committees? <dfn>Burst bacon stabbed grace</dfn> master's madman slunk hospitality One Ring. Badly takes Shire's bottles <ins>insect webs nerves bolted</ins>. Lovely 13 nearly get <sub>galumphing</sub> Wilds? Greyhame crush upset <em>visiting mold slightest stint wanna</em> absence thread? <del>Finest trolls cook</del> leave reads jewels Morgoth bury. Slugs <small>we'd bearing shores riches</small> J.R.R. Tolkien lock slaves bound? 3000 Captain <time>towards</time> declare. Pay Frodo Baggins <q>stars serve worst having</q> faster. 2000 metals Orcses <samp>mine's wore wearing urged</samp> forced fulfill.</p>
  </Box>
  </Typography>
   </div>
  )

  return (
<div align="right">

<Button onClick={toggleDrawer(true)}><MenuIcon className="menuIcon"/></Button>
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
