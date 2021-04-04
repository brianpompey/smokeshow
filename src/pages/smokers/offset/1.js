import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Offset1 = () => (
    <Layout>
        <SEO title="Char-Griller E1224" />
        <SmokerInfo 
            title="Char-Griller E1224"
            text="A little better"
            price="287"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Offset1;