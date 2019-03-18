import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {Menu, Image, Button} from 'semantic-ui-react'

const HeaderBar = props => {
  let year = new Date().getFullYear()

  return (
    <Menu id="headerbar" size="mini" borderless>
      {
        <div className="headerbar-title">
          <span>Europe Vacation {year} </span>
          <span id="headerbar-title-vacationDuration">February 2 - 18</span>
        </div>
      }
      {props.isLoggedIn && (
        <Menu.Item>
          <Button inverted onClick={props.handleClick}>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(HeaderBar)

/**
 * PROP TYPES
 */
HeaderBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
