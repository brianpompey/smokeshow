import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const WeberPro = () => (
    <Layout>
        <SEO title="Weber Pro" />
        <SmokerInfo 
            title="Weber Kettle Performer"
            text="The best one"
            price="439"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default WeberPro;