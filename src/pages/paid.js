import * as React from "react"
import { Link } from "gatsby"
import Paid from "../components/Paid"

import SEO from "../components/seo"

const PaidPage= () => (
    <div>
        <SEO title="Paid" />
        <Paid/>
        <Link to="/">Go back to the homepage</Link>
    </div>
)

export default PaidPage;