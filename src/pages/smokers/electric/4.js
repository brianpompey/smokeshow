import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Electric4 = () => (
    <Layout>
        <SEO title="Char-Broil 17202004" />
        <SmokerInfo 
            title="Char-Broil 17202004"
            text="A little better"
            price="260"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Electric4;