import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Gravity2 = () => (
    <Layout>
        <SEO title="MasterBuilt 1050" />
        <SmokerInfo 
            title="MasterBuilt 1050"
            text="A little better"
            price="800"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Gravity2;