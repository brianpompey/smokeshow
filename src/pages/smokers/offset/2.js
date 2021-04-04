import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Offset2 = () => (
    <Layout>
        <SEO title="Highland Offset" />
        <SmokerInfo 
            title="Highland Offset"
            text="A little better"
            price="300"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Offset2;