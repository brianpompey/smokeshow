import * as React from "react"
import { Link } from "gatsby"
import SmokerInfo from "../../../components/SmokerInfo"

import SEO from "../../../components/seo"

const PaidPage = () => (
    <div>
        <SEO title="Page two" />
        <SmokerInfo />
        <Link to="/">Go back to the homepage</Link>
    </div> 
)

export default PaidPage;