import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Drum4 = () => (
    <Layout>
        <SEO title="Pit Barrel Cooker" />
        <SmokerInfo 
            title="Pit Barrel Cooker"
            text="A little better"
            price="350"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Drum4;