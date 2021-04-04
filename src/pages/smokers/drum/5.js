import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Drum5 = () => (
    <Layout>
        <SEO title="Gateway Drum" />
        <SmokerInfo 
            title="Gateway Drum"
            text="A little better"
            price="800"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Drum5;