import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Electric1 = () => (
    <Layout>
        <SEO title="Smoke Hollow 26142E" />
        <SmokerInfo 
            title="Smoke Hollow 26142E"
            text="A little better"
            price="149"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Electric1;