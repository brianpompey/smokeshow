import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Kamado2 = () => (
    <Layout>
        <SEO title="Big Green Egg" />
        <SmokerInfo 
            title="Big Green Egg"
            text="A little better"
            price="900"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Kamado2;