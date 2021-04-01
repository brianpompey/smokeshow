import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const PaidPage = () => (
    <Layout>
        <SEO title="Page two" />
        <SmokerInfo />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default PaidPage;