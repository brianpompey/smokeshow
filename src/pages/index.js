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
              url="https://www.weber.com/US/en/home/"
              image={ weber } />
          </div>
          <div className="next-tier">
            <p>A little more expensive</p>
            <Card 
              title="Weber Kettle Premium"
              text="Kettle Smoker $165"
              url="https://www.weber.com/US/en/home/"
              image={ weberpro } />
          </div>
          <div className="expensive">
            <p>Peak Tier</p>
            <Card 
              title="Weber Kettle Performer"
              text="Kettle Smoker $439"
              url="https://www.weber.com/US/en/home/"
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
              url="https://www.amazon.com/Masterbuilt-MB20050116-Patio-2-Portable-Propane-Smoker/dp/B079K9VR46/ref=as_li_ss_tl?keywords=propane+smoker&qid=1565053092&s=gateway&sr=8-9&linkCode=ll1&tag=smbbre-20&linkId=c5668e86287ffe4f6ecda3d86cbf6907&language=en_US"
              image={ mbcheap } />
            <Card 
              title="Charbroil 595"
              text="Propane $189"
              url="https://www.charbroil.com/vertical-gas-smoker-12701705"
              image={ char } />
          </div>
          <div className="next-tier">
            <p>A little more expensive</p>
            <Card 
              title="CampChef SmokeVault"
              text="Propane $229"
              url="https://www.homedepot.com/p/Camp-Chef-Smoke-Vault-18-in-Propane-Gas-Smoker-SMV18S/203591382?irgwc=1&cm_mmc=afl-ir-10078-456723-thespruceeats.com&clickid=2Gf2Y-R2IxyLUPnwUx0Mo372UkEXsVQBo2i1Rk0"
              image={ campsmoke } />
            <Card 
              title="Dyna-Glo DGY784BDP"
              text="Propane $200"
              url="https://www.amazon.com/Dyna-Glo-DGY784BDP-Vertical-Gas-Smoker/dp/B007YX9KRU/ref=as_li_ss_tl?keywords=gas+smoker&qid=1561191480&s=gateway&sr=8-6&linkCode=ll1&tag=smbbre-20&linkId=4fa55067152bbf7d70fba3d48ec6af61&language=en_US"
              image={ dyna } />
          </div>
          <div className="expensive">
            <p>Peak Tier</p>
            <Card 
              title="Masterbuilt MB20051316"
              text="Propane $400"
              url="https://www.amazon.com/dp/B07NQPLB1Q?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4160510%7Cna8f936af0c614da883410cbda18e20a916"
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
                url="https://www.amazon.com/dp/B00NP3U6CG?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smhollow} />
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="https://www.amazon.com/dp/B000ZL182I?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smokehouse} />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="https://www.amazon.com/dp/B07D5TH7ZP?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ elecdyna } />
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="https://www.amazon.com/dp/B00SMRXYCE?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ charbroilelec } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="https://www.amazon.com/dp/B07NQPLB19?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ mbelecexp} />
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="https://www.amazon.com/dp/B003KKLDX0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
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
                url="https://pitboss-grills.com/wood-pellet/440-deluxe-wood-pellet-grill-mahogany"
                image={ pitboss } />
              <Card 
                title="Green Mountain Davy Crockett Sense"
                text="Pellet $299"
                url="https://www.amazon.com/Green-Mountain-Grills-Crockett-Controlled/dp/B078RXH95C/?tag=aboutcom02thespruceeats-20&ascsubtag=4159120%7Cn19db9c24a7864577b8e4e2e02d14f24b18"
                image={ green } />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Camp Chef SmokePro DLX "
                text="Pellet 484"
                url="https://www.amazon.com/Camp-Chef-PG24DLX-Controls-Stainless/dp/B00DVELGT6/?tag=aboutcom02thespruceeats-20&ascsubtag=4159120%7Cn19db9c24a7864577b8e4e2e02d14f24b18"
                image={ campcheap } />
              <Card 
                title="Z GRILLS-700D"
                text="Pellet $569"
                url="https://zgrills.com/products/zpg-700d-pellet-grill?sscid=31k5_u282e"
                image={ zgrill } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="TRAEGER TIMBERLINE 850 "
                text="Pellet $1800"
                url="https://www.traegergrills.com/pellet-grills/timberline/850"
                image={ traeger } />
              <Card 
                title="Camp Chef WOODWIND WIFI 36"
                text="Pellet $1200"
                url="https://www.campchef.com/wood-pellet-grills-and-accessories/all-pellet-grills/woodwind-wifi-36-with-sidekick.html"
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
                title="Smoke Hollow 26142E "
                text="Electric $149"
                url="https://www.amazon.com/dp/B00NP3U6CG?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smhollow} />
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="https://www.amazon.com/dp/B000ZL182I?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smokehouse} />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="https://www.amazon.com/dp/B07D5TH7ZP?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ elecdyna } />
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="https://www.amazon.com/dp/B00SMRXYCE?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ charbroilelec } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="https://www.amazon.com/dp/B07NQPLB19?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ mbelecexp} />
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="https://www.amazon.com/dp/B003KKLDX0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ smokinit } />
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
                title="Smoke Hollow 26142E "
                text="Electric $149"
                url="https://www.amazon.com/dp/B00NP3U6CG?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smhollow} />
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="https://www.amazon.com/dp/B000ZL182I?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smokehouse} />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="https://www.amazon.com/dp/B07D5TH7ZP?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ elecdyna } />
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="https://www.amazon.com/dp/B00SMRXYCE?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ charbroilelec } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="https://www.amazon.com/dp/B07NQPLB19?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ mbelecexp} />
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="https://www.amazon.com/dp/B003KKLDX0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ smokinit } />
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-offset">
      <h3>Offset Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Smoke Hollow 26142E "
                text="Electric $149"
                url="https://www.amazon.com/dp/B00NP3U6CG?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smhollow} />
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="https://www.amazon.com/dp/B000ZL182I?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smokehouse} />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="https://www.amazon.com/dp/B07D5TH7ZP?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ elecdyna } />
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="https://www.amazon.com/dp/B00SMRXYCE?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ charbroilelec } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="https://www.amazon.com/dp/B07NQPLB19?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ mbelecexp} />
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="https://www.amazon.com/dp/B003KKLDX0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ smokinit } />
            </div>

        </div>
      </div>
    <hr />
      <div className="smokers-gravity">
      <h3>Cabinet/Gravity Fed Smokers</h3>
        <div className="smoker-group">
          <div className="budget">
              <p>Basic/Budget Option</p>
              <Card 
                title="Smoke Hollow 26142E "
                text="Electric $149"
                url="https://www.amazon.com/dp/B00NP3U6CG?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smhollow} />
              <Card 
                title="Smokehouse Products Big Chief Electric Smoker"
                text="Electric $124"
                url="https://www.amazon.com/dp/B000ZL182I?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ smokehouse} />
            </div>
            <div className="next-tier">
              <p>A little more expensive</p>
              <Card 
                title="Dyna-Glo DGU732SDE"
                text="Electric $302"
                url="https://www.amazon.com/dp/B07D5TH7ZP?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ elecdyna } />
              <Card 
                title="Char-Broil 17202004"
                text="Electric $260"
                url="https://www.amazon.com/dp/B00SMRXYCE?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ charbroilelec } />
            </div>
            <div className="expensive">
              <p>Peak Tier</p>
              <Card 
                title="Masterbuilt MB20074719"
                text="Electric $400"
                url="https://www.amazon.com/dp/B07NQPLB19?tag=aboutcom02thespruceeats-20&linkCode=ogi&th=1&psc=1&ascsubtag=4159127%7Cn305356883cf44ea79e8731d2a3e20c2f17"
                image={ mbelecexp} />
              <Card 
                title="Smokin-It Model #2"
                text="Electric $570"
                url="https://www.amazon.com/dp/B003KKLDX0?linkCode=ogi&tag=goodhousekeeping_auto-append-20&ascsubtag=[artid|10055.g.32052279[src|[ch|[lt|"
                image={ smokinit } />
            </div>

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
