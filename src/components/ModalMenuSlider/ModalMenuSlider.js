import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import PageContent from './PageContent';
import Modal from './Modal';

import './style.css';

class ModalMenuSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideNav: false,
            openModal: false,
        };
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            openModal: !this.state.openModal,
        })
    }

    closeModal = (event) => {
        event.target.id === 'modal' && this.setState({ ...this.state, openModal: false});
    }

    toggleSideNav = () => {
        this.setState({
            ...this.state,
            showSideNav: !this.state.showSideNav,
        })
    }

    closeSideNav = () => {
        this.setState({
            ...this.state,
            showSideNav: false,
        })
    }

    render() {
        return (
            <div className={`app-body ${this.state.showSideNav && 'show-nav'}`} onClick={this.closeModal}>
                <Nav closeSideNav={this.closeSideNav}/>
                <Header toggleModal={this.toggleModal} toggleSideNav={this.toggleSideNav}/>
                <PageContent/>
                <Modal openModal={this.state.openModal} toggleModal={this.toggleModal}/>
            </div>
        )
    }
}

export default ModalMenuSlider;
