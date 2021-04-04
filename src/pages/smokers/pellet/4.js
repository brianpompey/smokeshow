import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Pellet4 = () => (
    <Layout>
        <SEO title="Z GRILLS-700D" />
        <SmokerInfo 
            title="Z GRILLS-700D"
            text="A little better"
            price="569"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Pellet4;