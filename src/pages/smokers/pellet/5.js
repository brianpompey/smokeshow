import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Pellet5 = () => (
    <Layout>
        <SEO title="TRAEGER TIMBERLINE 850" />
        <SmokerInfo 
            title="TRAEGER TIMBERLINE 850"
            text="A little better"
            price="1800"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Pellet5;