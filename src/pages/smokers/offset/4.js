import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Offset4 = () => (
    <Layout>
        <SEO title="Yoder Wichita" />
        <SmokerInfo 
            title="Yoder Wichita"
            text="A little better"
            price="2400"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Offset4;