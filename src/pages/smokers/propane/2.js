import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Propane2 = () => (
    <Layout>
        <SEO title="Charbroil 595" />
        <SmokerInfo 
            title="Charbroil 595"
            text="A little better"
            price="189"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Propane2;