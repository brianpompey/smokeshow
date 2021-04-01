import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const WeberPre = () => (
    <Layout>
        <SEO title="Weber Premium" />
        <SmokerInfo 
            title="Weber Kettle Premium"
            text="A little better"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default WeberPre;