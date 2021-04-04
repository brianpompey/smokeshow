import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Pellet3 = () => (
    <Layout>
        <SEO title="Camp Chef SmokePro DLX" />
        <SmokerInfo 
            title="Camp Chef SmokePro DLX"
            text="A little better"
            price="484"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Pellet3