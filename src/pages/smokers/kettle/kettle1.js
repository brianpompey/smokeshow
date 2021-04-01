import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"
import { weber } from "../../../images/weber.jpg"

import SEO from "../../../components/seo"

const Weber1 = () => (
    <Layout>
        <SEO title="Weber" />
        <SmokerInfo 
            title="Weber Kettle"
            text="The best starter grill"
            image={ weber }
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Weber1;