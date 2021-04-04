import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Pellet2 = () => (
    <Layout>
        <SEO title="Green Mountain Davy Crockett Sense" />
        <SmokerInfo 
            title="Green Mountain Davy Crockett Sense"
            text="A little better"
            price="299"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Pellet2;