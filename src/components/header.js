import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderLine1">
          <h1>SmokeShow</h1>
        </div>
        <div className="HeaderLine2">
          <Link to="https://www.instagram.com/chefpompei/">Chef Pompei</Link>
          <Link to="https://www.instagram.com/welcometothebbq_/">WTTB</Link>
          <Link to="/paid/">Paid</Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
