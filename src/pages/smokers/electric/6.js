import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Electric6 = () => (
    <Layout>
        <SEO title="Smokin-It Model #2" />
        <SmokerInfo 
            title="Smokin-It Model #2"
            text="A little better"
            price="570"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Electric6;