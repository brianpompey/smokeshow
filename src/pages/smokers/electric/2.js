import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Electric2 = () => (
    <Layout>
        <SEO title="Smokehouse Products Big Chief" />
        <SmokerInfo 
            title="Smokehouse Products Big Chief"
            text="A little better"
            price="124"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Electric2;