import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Drum2 = () => (
    <Layout>
        <SEO title="Bronco Drum Smoker" />
        <SmokerInfo 
            title="Bronco Drum Smoker"
            text="A little better"
            price="250"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Drum2;