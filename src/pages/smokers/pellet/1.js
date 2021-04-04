import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Pellet1 = () => (
    <Layout>
        <SEO title="PIT BOSS PB440" />
        <SmokerInfo 
            title="PIT BOSS PB440"
            text="A little better"
            price="349"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Pellet1;