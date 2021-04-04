import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Drum1 = () => (
    <Layout>
        <SEO title="Charbroil Bullet" />
        <SmokerInfo 
            title="Charbroil Bullet"
            text="A little better"
            price="177"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Drum1;