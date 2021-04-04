import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Propane3= () => (
    <Layout>
        <SEO title="CampChef SmokeVault" />
        <SmokerInfo 
            title="CampChef SmokeVault"
            text="A little better"
            price="229"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Propane3;