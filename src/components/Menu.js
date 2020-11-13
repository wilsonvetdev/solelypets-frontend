import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/users'


class MenuItem extends Component {

    state = { 
        activeItem: this.props.history.location.pathname
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
        console.log(this.props.history.location.pathname)
        return (
        <div>
            <Menu pointing secondary>
            {this.props.shelterInfo.token ? 
                <Menu.Item
                    name='/shelter_home'
                    active={activeItem === '/shelter_home'}
                    onClick={this.handleItemClick}
                    as='div'
                    >
                    <Link to='/shelter_home'>Home Page</Link>                   
                </Menu.Item>
                : null
            }
            {this.props.userInfo.token ? 
                <Menu.Item
                    name='/user_home'
                    active={activeItem === '/user_home'}
                    onClick={this.handleItemClick}
                    as='div'
                    >
                    <Link to='/user_home'>Home Page</Link>                   
                </Menu.Item>
                : null
            }

            <Menu.Item
                name='/animal_shelters'
                active={activeItem === '/animal_shelters'}
                onClick={this.handleItemClick}
                as='div'
            >
            <Link to='/animal_shelters'>All Animal Shelters</Link>
            </Menu.Item>
            { this.props.shelterInfo.role ?
            <Menu.Item
                name='/shelter_settings'
                active={activeItem === '/shelter_settings'}
                onClick={this.handleItemClick}
                as='div'
            >
            <Link to='/shelter_settings'>Settings</Link>
            </Menu.Item>
            :
            null 
            }

            
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuItem))