import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Gravity1 = () => (
    <Layout>
        <SEO title="MasterBuilt 560" />
        <SmokerInfo 
            title="MasterBuilt 560"
            text="A little better"
            price="500"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Gravity1;