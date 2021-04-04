import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Electric3 = () => (
    <Layout>
        <SEO title="Dyna-Glo DGU732SDE" />
        <SmokerInfo 
            title="Dyna-Glo DGU732SDE"
            text="A little better"
            price="302"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Electric3;