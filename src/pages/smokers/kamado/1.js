import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Kamado1 = () => (
    <Layout>
        <SEO title="Char-Griller E16620 Akorn" />
        <SmokerInfo 
            title="Char-Griller E16620 Akorn"
            text="A little better"
            price="300"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Kamado1;