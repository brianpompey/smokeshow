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

        <div className="kettle-group">
          <div class="budget">
            <p>Basic/Budget Option</p>
            <Card 
              title="Weber Kettle"
              text="Kettle Smoker $109"
              url="https://www.weber.com/US/en/home/"
              image={ weber } />
          </div>
          <div class="next-tier">
            <p>A little more expensive</p>
            <Card 
              title="Weber Kettle Premium"
              text="Kettle Smoker $165"
              url="https://www.weber.com/US/en/home/"
              image={ weberpro } />
          </div>
          <div class="expensive">
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

      <div className="propane-group">
        <div class="budget">
            <p>Basic/Budget Option</p>
            <Card 
              title="Masterbuilt MB20050116 "
              text="Propane $149"
              url="https://www.amazon.com/Masterbuilt-MB20050116-Patio-2-Portable-Propane-Smoker/dp/B079K9VR46/ref=as_li_ss_tl?keywords=propane+smoker&qid=1565053092&s=gateway&sr=8-9&linkCode=ll1&tag=smbbre-20&linkId=c5668e86287ffe4f6ecda3d86cbf6907&language=en_US"
              image={ mbcheap } />
            <Card 
              title="Weber Kettle"
              text="Kettle Smoker $109"
              url="https://www.weber.com/US/en/home/"
              image={ weber } />
          </div>
          <div class="next-tier">
            <p>A little more expensive</p>
            <Card 
              title="Weber Kettle Premium"
              text="Kettle Smoker $165"
              url="https://www.weber.com/US/en/home/"
              image={ weberpro } />
            <Card 
              title="Weber Kettle Premium"
              text="Kettle Smoker $165"
              url="https://www.weber.com/US/en/home/"
              image={ weberpro } />
          </div>
          <div class="expensive">
            <p>Peak Tier</p>
            <Card 
              title="Weber Kettle Performer"
              text="Kettle Smoker $439"
              url="https://www.weber.com/US/en/home/"
              image={ webersuper } />
          </div>

        </div>
      </div>
    <hr />
      <div className="smokers-electric">
        <p>electric</p>
        
      </div>
    <hr />
      <div className="smokers-pellet">
        <p>pellet</p>
      </div>
    <hr />
      <div className="smokers-ceramic">
        <p>ceramic/kamado</p>
      </div>
    <hr />
      <div className="smokers-drum">
        <p>drum/vertical</p>
      </div>
    <hr />
      <div className="smokers-offset">
        <p>offset</p>
      </div>
    <hr />
      <div className="smokers-gravity">
        <p>gravity/cabinet</p>
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
