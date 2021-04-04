import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"
import Layout from "../../../components/layout"

import SEO from "../../../components/seo"

const Propane4 = () => (
    <Layout>
        <SEO title="Dyna-Glo DGY784BDP" />
        <SmokerInfo 
            title="Dyna-Glo DGY784BDP"
            text="A little better"
            price="200"
        />
        <Link to="/">Go back to the homepage</Link>
    </Layout> 
)

export default Propane4;