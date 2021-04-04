import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Offset3 = () => (
    <Layout>
        <SEO title="Bandera" />
        <SmokerInfo 
            title="Bandera"
            text="A little better"
            price="450"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Offset3;