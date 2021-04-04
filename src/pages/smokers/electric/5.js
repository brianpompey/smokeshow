import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Electric5 = () => (
    <Layout>
        <SEO title="Masterbuilt MB20074719" />
        <SmokerInfo 
            title="Masterbuilt MB20074719"
            text="A little better"
            price="400"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Electric5;