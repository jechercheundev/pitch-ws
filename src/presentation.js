// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
	Image,
	Appear
} from "spectacle";

import ElonCover from "./assets/images/elon-cover.jpg"
import W3DLogo from "./assets/images/w3d-white.png"
import CountDown from "./assets/images/countdown.gif"
import ElevatorGif from "./assets/images/basejump-101.gif"
import TeslaWall from "./assets/images/musk-teslawall.jpg"
import TargetGif from "./assets/images/target.gif"
import Doudou from "./assets/images/doudou.png"
import ShowBack from "./assets/images/show-back.jpg"
import Tweet from "./assets/images/tweet.png"
import HorseGif from "./assets/images/horse.gif"
import KeynotePic from "./assets/images/tesla-keynote.png"
import TheMoveGif from "./assets/images/the-move.gif"
import BoringLine from "./assets/images/boring-line.jpg"
import MemeMorpheus from "./assets/images/meme-morpheus.jpg"
import PromisedLand from "./assets/images/promised-land.jpg"
import R2D2 from "./assets/images/r2d2.gif"
import ThisIsReal from "./assets/images/this-is-real.png"
import ThisIsHappening from "./assets/images/this-is-happening.png"
import TheSun from "./assets/images/sun.png"
import Problem from "./assets/images/problem.png"
import Batteries from "./assets/images/batteries.png"
import UglyBatteries from "./assets/images/ugly-batteries.png"
import Proof from "./assets/images/proof.png"
import Magic from "./assets/images/magic.gif"
import Pika from "./assets/images/pika.gif"
import Obama from "./assets/images/obama.gif"


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#241BAB",
  secondary: "white",
  tertiary: "#35EBEE",
  quartenary: "#FA157E"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide", "fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={ElonCover} bgDarken={0.35}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pitch Like Elon
          </Heading>
          <Heading margin="20px 0 0" textColor="quartenary" size={6} fit caps bold>
            Badass Pitch 101
          </Heading>
					<Image margin="70px 0 0" width="15%" src={W3DLogo}/>
        </Slide>
				<Slide bgImage={CountDown} bgDarken={0.5}>
					<List>
					  <ListItem>1 min</ListItem>
					  <ListItem>2 min</ListItem>
					  <ListItem>3 min</ListItem>
					  <ListItem>5 min</ListItem>
					  <ListItem>Networking Pitch</ListItem>
					  <ListItem>Sales Pitch</ListItem>
					</List>
				</Slide>
				<Slide bgImage={ElevatorGif}>
					<Appear>
						<Heading fit caps> Elevator Pitch</Heading>
					</Appear>
				</Slide>
				<Slide bgImage={TeslaWall}>
					<Heading fit caps>Share a vision</Heading>
				</Slide>
				<Slide bgImage={TargetGif}>
					<Appear>
						<Heading bgColor="black" textColor={"secondary"} fit caps>Know your Target</Heading>
					</Appear>
				</Slide>
				<Slide bgImage={Doudou} />

				<Slide bgColor="primary" textColor="secondary">
					<Heading textColor="secondary" fit>What to say ?</Heading>
				</Slide>
				<Slide bgColor="secondary" textColor="secondary">
					<Heading textColor="primary" fit>1 : Product</Heading>
				</Slide>
				<Slide bgColor="secondary" textColor="secondary">
					<Heading textColor="primary" fit>2 : Money</Heading>
				</Slide>
				<Slide bgColor="secondary" textColor="secondary">
					<Heading textColor="primary" fit>3: Assets</Heading>
				</Slide>
				<Slide bgColor="primary" textColor="secondary">
					<Heading fit>What to say ?</Heading>
					<List start={1} ordered>
						<ListItem>Product</ListItem>
						<ListItem>How do you earn money ?</ListItem>
						<ListItem>Assets or why you are going to make it ?</ListItem>
					</List>
				</Slide>

				<Slide bgColor="primary" textColor="secondary">
					<Heading textColor="secondary" fit>A few tips</Heading>
				</Slide>

				<Slide bgColor="tertiary">
					<Appear>
						<Text textColor="secondary">Nobody wants to read your slides</Text>
					</Appear>
					<Image src={ShowBack} width="80%" margin="10px 0 0"/>
				</Slide>

				<Slide bgColor="tertiary">
					<Appear>
						<Heading caps fit textColor="secondary">1 Pic 140 Chars</Heading>
					</Appear>
					<Image src={Tweet} width="100%" margin="10px 0 0"/>
				</Slide>

				<Slide bgColor="primary">
					<Heading caps fit textColor="secondary"> Stage 101 </Heading>
				</Slide>

				<Slide bgImage={HorseGif} bgDarken={0.4}>
					<Appear>
						<Heading textColor="secondary" fit caps>Never turn your back on me</Heading>
					</Appear>
				</Slide>


				<Slide bgImage={KeynotePic} bgDarken={0.3}>
					<Appear>
						<Heading textColor="secondary" fit caps>Occupy the stage</Heading>
					</Appear>
				</Slide>

				<Slide bgColor="primary">
					<Heading textColor="secondary" fit>Pro Tip !</Heading>
				</Slide>

				<Slide bgColor="primary">
					<Heading size={5} fit textColor="secondary">You have to master</Heading>
					<Heading size={1} fit textColor="quartenary" caps margin="10px 0 0">THE MOVE</Heading>
					<Image src={TheMoveGif} height="60%" margin="40px 0 0"/>
				</Slide>


				<Slide bgColor="secondary">
					<Heading size={5} fit textColor="primary">Everybody goes</Heading>
					<Heading size={1} fit textColor="quartenary" caps margin="10px 0 0">Problem -> Solution</Heading>
					<Image src={BoringLine} width="100%" margin="40px 0 0"/>
				</Slide>



				<Slide bgColor="primary">

					<Heading size={1} fit textColor="secondary" caps >Stories</Heading>

					<List align="center" start={1} ordered margin="50px 0 0">
						<ListItem>A happened;</ListItem>
						<ListItem>then B happened;</ListItem>
						<ListItem>as a result C happened.</ListItem>
					</List>

				</Slide>

				<Slide bgColor="primary">
					<Image height="100%" fill src={MemeMorpheus}/>
				</Slide>

				<Slide>

					<List align="center" start={1} ordered>
						<ListItem>Problem</ListItem>
						<ListItem> ??? </ListItem>
						<ListItem>Solution</ListItem>
					</List>

				</Slide>

				<Slide bgImage={PromisedLand}></Slide>

				<Slide>
					<Heading size={1} fit textColor="quartenary" caps>A Quick Recipe</Heading>
					<Image src={R2D2} height="100%" margin="40px 0 0"/>
				</Slide>

				<Slide bgImage={ThisIsReal}>
					<Appear>
						<Heading textColor="secondary" size={1} fit caps> #1 NAME THE ENEMY</Heading>
					</Appear>
				</Slide>

				<Slide bgImage={ThisIsHappening}>
					<Appear>
						<Heading textColor="secondary" size={1} fit caps> #2 Make It Urgent</Heading>
					</Appear>
				</Slide>

				<Slide bgImage={TheSun}>
					<Appear>
						<Heading textColor="secondary" size={1} fit caps> #3 Promised Land</Heading>
					</Appear>
				</Slide>

				<Slide>
					<Heading textColor="secondar" size={1} fit caps> #4 Obstacles</Heading>
				</Slide>

				<Slide bgImage={Problem}>
				</Slide>

				<Slide bgImage={Batteries}>
				</Slide>

				<Slide bgImage={UglyBatteries}>
				</Slide>

				<Slide>
						<Heading textColor="secondary" size={1} fit caps> #5 SHOW THE EVIDENCE</Heading>
				</Slide>

				<Slide bgImage={Proof}>
				</Slide>

				<Slide bgColor="primary">
					<Image height="100%" src={Magic} />
				</Slide>

				<Slide>
					<Heading fit caps> Keep it simple</Heading>
				</Slide>


				<Slide>
					<Heading fit > REPEAT UNTIL</Heading>
					<Heading textColor="quartenary" fit caps> FOREVER</Heading>
				</Slide>


				<Slide>
					<Heading fit > Be awesome</Heading>
					<Heading textColor="quartenary" fit caps> BE REMARKABLE</Heading>
					<Image height="80%" src={Pika}/>
				</Slide>

			  <Slide transition={["fade"]} bgColor="primary">
					<Heading fit>Have Fun</Heading>
					<Heading textColor="quartenary" fit caps>You are a ROCKSTAR</Heading>
					<Image height="80%" src={Obama}/>
				</Slide>

      </Deck>
    );
  }
}
