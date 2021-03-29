import * as React from "react"
import { Link } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel"

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
        <p>kettle</p>
      </div>
    <hr />
      <div className="smokers-gas">
        <p>gas/propane</p>
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
