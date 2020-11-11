import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/users'

class MenuItem extends Component {

    state = { 
        activeItem: 'shelters'
    }

    handleItemClick = (e, { name }) => {
        if(name === 'logout') {
            localStorage.clear()
            this.props.logOutUser()
        }
        this.setState({ activeItem: name})
    }

    render() {
        const { activeItem } = this.state
        return (
        <div>
            <Menu pointing secondary>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                as='div'
            >
            {this.props.shelterInfo.role ? 
                <Link to='/shelter_home'>Home Page</Link>
                :
                <Link to='/user_home'>Home Page</Link>
            }
            </Menu.Item>
            <Menu.Item
                name='shelters'
                active={activeItem === 'shelters'}
                onClick={this.handleItemClick}
                as='div'
            >
            <Link to='/animal_shelters'>All Animal Shelters</Link>
            </Menu.Item>

            
            <Menu.Menu position='right'>
            {this.props.shelterInfo.token || this.props.userInfo.token ? 
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
                as='div'
                >
                <Link to='/logout'>Log Out</Link>
                </Menu.Item>
                :
                <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
                as='div'
                >
                <Link to='/login'>Log In</Link>
                </Menu.Item>
            }
            </Menu.Menu>  
            

            </Menu>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
        shelterInfo: state.shelterInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutUser: () => dispatch(logOutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)