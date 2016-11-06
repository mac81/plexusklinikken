import React, { Component } from 'react';
import { slide as MenuWrapper } from 'react-burger-menu';

class BurgerMenu extends Component {

    render() {

        let menuStyles = {
            bmBurgerButton: {
                position: 'fixed',
                zIndex: 4,
                width: '36px',
                height: '30px',
                left: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenuWrap: {
                zIndex: 5
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmOverlay: {
                background: 'rgba(35, 52, 69, 0.7)'
            }
        }

        return (
            <MenuWrapper width={ '100%' } styles={menuStyles}>
                {this.props.children}
            </MenuWrapper>
        );
    }
}

export default BurgerMenu;
