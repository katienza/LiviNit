import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu, Dropdown, Button} from 'semantic-ui-react'
import Routes from '../routes'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state
    return (
      <Menu id="navbar" size="large" pointing secondary borderless>
        <span id="navbar-menu-allT">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            as={Link}
            to="/"
            onClick={this.handleItemClick}
          >
            Overview
          </Menu.Item>
        </span>
        <span id="navbar-menu-funnyTees">
          <Menu.Item
            name="city1"
            active={activeItem === 'city1'}
            as={Link}
            to="/products"
            onClick={this.handleItemClick}
          >
            Barcelona
          </Menu.Item>
        </span>
        <Menu.Item>
          <Routes />
        </Menu.Item>
        {/* <Menu.Item position="right">
        <CartModal />
      </Menu.Item> */}
        {this.props.isLoggedIn && (
          <Menu.Item>
            <Button onClick={this.props.handleClick}>Logout</Button>
          </Menu.Item>
        )}
        {this.props.isLoggedIn && (
          <Menu.Item>
            <Dropdown button icon="user">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/orders" text="Past Orders" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        )}
      </Menu>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user,
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
