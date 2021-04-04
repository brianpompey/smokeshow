import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Pellet6 = () => (
    <Layout>
        <SEO title="Camp Chef WOODWIND WIFI 36" />
        <SmokerInfo 
            title="Camp Chef WOODWIND WIFI 36"
            text="A little better"
            price="1200"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Pellet6;