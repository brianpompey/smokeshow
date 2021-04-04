import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Kamado3 = () => (
    <Layout>
        <SEO title="Kamado Joe" />
        <SmokerInfo 
            title="Kamado Joe"
            text="A little better"
            price="1600"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Kamado3;