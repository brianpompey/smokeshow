import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Drum3 = () => (
    <Layout>
        <SEO title="Weber Smoker Mountain" />
        <SmokerInfo 
            title="Weber Smoker Mountain"
            text="A little better"
            price="430"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Drum3;