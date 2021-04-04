import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Propane1 = () => (
    <Layout>
        <SEO title="MasterBuilt MB20050116" />
        <SmokerInfo 
            title="MasterBuilt MB20050116"
            text="A little better"
            price="149"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Propane1;