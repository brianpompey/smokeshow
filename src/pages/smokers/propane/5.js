import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Propane5 = () => (
    <Layout>
        <SEO title="Masterbuilt MB20051316" />
        <SmokerInfo 
            title="Masterbuilt MB20051316"
            text="A little better"
            price="400"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Propane5;