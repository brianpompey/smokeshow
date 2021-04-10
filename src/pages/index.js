import * as React from "react"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import weber from "../images/weber.jpg"
import weberpro from "../images/weber-pro.jpg"
import webersuper from "../images/weber-superpro.png"
import mbcheap from "../images/masterbuilt-cheap.jpg"
import mbexp from "../images/masterbuilt-exp.jpg"
import char from "../images/charbroil.png"
import campsmoke from "../images/campchefsmokevault.jpg"
import dyna from "../images/dynaglo.jpg"
import charbroilelec from "../images/charbroilelec.jpg"
import elecdyna from "../images/elecdyna.png"
import mbelecexp from "../images/mbelecexp.jpg"
import smhollow from "../images/smhollow.jpg"
import smokehouse from "../images/smokehouse.jpg"
import smokinit from "../images/smokinit.jpg"
import green from "../images/greenmountain.jpg"
import pitboss from "../images/pitboss.jpg"
import zgrill from "../images/zgrill.jpg"
import campcheap from "../images/campchef-cheap.jpg"
import campchef from "../images/campchef.jpg"
import traeger from "../images/traeger.png"
import acorn from "../images/acorn.jpg"
import biggreenegg from "../images/biggreen.jpg"
import kamado from "../images/kamado.jpg"
import bronco from "../images/bronco.png"
import charvert from "../images/charvert.jpg"
import gateway from "../images/gateway.jpg"
import pitbarrel from "../images/pitbarrel.jpg"
import websmokey from "../images/websmokey.jpg"
import charoff from "../images/charoff.jpg"
import bandera from "../images/bandera.png"
import highland from "../images/highland.png"
import wichita from "../images/loaded-wichita.jpg"
import mb560 from "../images/MB560.jpg"
import mb1050 from "../images/MB1050.jpg"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="welcome-image">
      < Carousel />
    </div>
    <hr />
    <div className="container">

    </div>
    <p>My name is Chef Brian Pompey and my first love, my first passion is true American BBQ. Among my many culinary dreams, I have a huge desire to help everyday aspiring "cue-masters" reach the peaks of their potential. One of the most important factors in good bbq is the tool that's being used. According to the legend, John Lewis of Lewis BBQ fame, the cooking vessel is the single most important factor. Now I agree to some extent. While it's easy for us experienced enthusiasts to think we have some king of extra special sauce that can't be duplicated, to be honest it really isn't rocket science. Similar to programming, there are so many ways to put together a great dish and the right amount of attention to detail, patience and of course the right vessel or tools will definitely make your job so much easier and successful. So my goal on this site is to address that factor. Helping the new bbq enthusiast choose the best tool of the trade for their goals.</p>
    
    <hr />

    <div className="smokers">
      <h2>Let's take a look at each smoker type and some examples that you can purchase!</h2>
      <div className="smokers-kettle">
        <h3>Kettle Grills -  a staple in the backyard bbq community</h3>

        <div className="smoker-group">
          <div className="budget">
            <p>Basic/Budget Option</p> 
            <Card 
              title="Weber Kettle"
              text="Kettle Smoker $109"
              url="/smokers/kettle/kettle1"
              image={ weber } />
            <button
              class="snipcart-add-item"
              data-item-id="weber-kettle-original"
              data-item-price="109.99"
              data-item-url="/smokers/kettle/kettle1"
              data-item-name="Weber Kettle Original"
            >
              Add to Cart
            </button>
          </div>
          <div className="next-tier">
            <p>A little more expensive</p>
            <Card 
              title="Weber Kettle Premium"
              text="Kettle Smoker $165"
              url="/smokers/kettle/kettlepre"
              image={ weberpro } />
          </div>
          <div className="expensive">
            <p>Peak Tier</p>
            <Card 
              title="Weber Kettle Performer"
              text="Kettle Smoker $439"
              url="/smokers/kettle/kettlepro"
              image={ webersuper } />
          </div>
        </div>
        <p>The Weber is a classic addition to any backyard. Most people can remember seeing their dad or uncle flipping burgers, hot dogs, or ribs on a Weber in their childhood years. The most basic level is pretty affordable at about $100 is it's a great starter grill for anyone to get started at the art of building/managing fires. If you have more funds to start out with or are just in love with the kettle style, feel free to upgrade to one of the more premium options which have more advanced features such as one-touch cleaning and side tables.</p>
      </div>
    <hr />
      <div className="smokers-gas">
      <h3>Propane Smokers - not for the "purist" but they sure are convenient</h3>

      <div className="smoker-group">
        <div className="budget">
            <p>Basic/Budget Option</p>
            <Card 
              title="Masterbuilt MB20050116 "
              text="Propane $149"
              url="/smokers/propane/1"
              image={ mbcheap } />
            <Card 
              title="Charbroil 595"
              text="Propane $189"
              url="/smokers/propane/2"
              image={ char } />
          </div>
          <div className="next-tier">
            <p>A little more expensive</p>
            <Card 
              title="CampChef SmokeVault"
              text="Propane $229"
              url="/smokers/propane/3"
              image={ campsmoke } />
            <Card 
              title="Dyna-Glo DGY784BDP"
              text="Propane $200"
              url="/smokers/propane/4"
              image={ dyna } />
          </div>
          <div className="expensive">
            <p>Peak Tier</p>
            <Card 
              title="Masterbuilt MB20051316"
              text="Propane $400"
              url="/smokers/propane/5"
              image={ mbexp } />
          </div>

        </div>
      </div>
    <hr />
      <div className="smokers-electric">
        <h3>Electric Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Smoke Hollow 26142E "
                text="Electric $149"
                url="/smokers/electric/1"
                image={ smhollow} />
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="/smokers/electric/2"
                image={ smokehouse} />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="/smokers/electric/3"
                image={ elecdyna } />
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="/smokers/electric/4"
                image={ charbroilelec } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="/smokers/electric/5"
                image={ mbelecexp} />
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="/smokers/electric/6"
                image={ smokinit } />
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-pellet">
      <h3>Pellet Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="PIT BOSS PB440 "
                text="Pellet $349"
                url="/smokers/pellet/1"
                image={ pitboss } />
              <Card 
                title="Green Mountain Davy Crockett Sense"
                text="Pellet $299"
                url="/smokers/pellet/2"
                image={ green } />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Camp Chef SmokePro DLX "
                text="Pellet 484"
                url="/smokers/pellet/3"
                image={ campcheap } />
              <Card 
                title="Z GRILLS-700D"
                text="Pellet $569"
                url="/smokers/pellet/4"
                image={ zgrill } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="TRAEGER TIMBERLINE 850 "
                text="Pellet $1800"
                url="/smokers/pellet/5"
                image={ traeger } />
              <Card 
                title="Camp Chef WOODWIND WIFI 36"
                text="Pellet $1200"
                url="/smokers/pellet/6"
                image={ campchef } />
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-ceramic">
      <h3>Kamado Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Char-Griller E16620 Akorn "
                text="Kamado $300"
                url="/smokers/kamado/1"
                image={ acorn } />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Big Green Egg"
                text="Kamado $900"
                url="/smokers/kamado/2"
                image={ biggreenegg } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Kamado Joe"
                text="Kamado $1600"
                url="/smokers/kamado/3"
                image={ kamado } />
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-drum">
      <h3>Drum/Vertical Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Charbroil Bullet"
                text="Drum $177"
                url="/smokers/drum/1"
                image={ charvert } />
              <Card 
                title="Bronco Drum Smoker"
                text="Drum $250"
                url="/smokers/drum/2"
                image={ bronco } />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Weber Smoker Mountain"
                text="Drum $430"
                url="/smokers/drum/3"
                image={ websmokey } />
              <Card 
                title="Pit Barrel Cooker"
                text="Drum $350"
                url="/smokers/drum/4"
                image={ pitbarrel} />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Gateway Drum"
                text="Drum $800"
                url="/smokers/drum/5"
                image={ gateway } />
            </div>

        </div>
        <h2>Many people make their own</h2>
      </div>
    <hr />
      <div className="smokers-offset">
      <h3>Offset Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Char-Griller E1224 "
                text="Offset $287"
                url="/smokers/offset/1"
                image={ charoff } />
              <Card 
                title="Highland Offset"
                text="Offset $300"
                url="/smokers/offset/2"
                image={ highland } />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Bandera"
                text="Offset $450"
                url="/smokers/offset/3"
                image={ bandera } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Yoder Wichita"
                text="Offset $2400"
                url="/smokers/offset/4"
                image={ wichita} />
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-gravity">
      <h3>Gravity Fed Smokers</h3>
        <div className="smoker-group">
              <Card 
                title="MasterBuilt 560"
                text="Gravity $500"
                url="/smokers/gravity/1"
                image={ mb560 } />
              <Card 
                title="MasterBuilt 1050"
                text="Gravity $800"
                url="/smokers/gravity/2"
                image={ mb1050 } />
        </div>
      </div>
    <hr />
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
