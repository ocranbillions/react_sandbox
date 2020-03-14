import React from 'react';

function Modal(props) {
    
    const { openModal, toggleModal } = props;
    const closeModal = () => toggleModal();

    return (
        <div className={`modal-container ${openModal && 'show-modal'}`} id="modal">
            <div className="modal">
                <button className="close-btn" id="close" onClick={closeModal}>
                    <i className="fa fa-times"></i>
                </button>
                <div className="modal-header">
                    <h3>Sign Up</h3>
                </div>
                <div className="modal-content">
                    <p>Register with us to get offers, support and more</p>
                    <form className="modal-form">
                        <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            className="form-input"
                        />
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            className="form-input"
                        />
                        </div>
                        <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            className="form-input"
                        />
                        </div>
                        <div>
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            type="password"
                            id="password2"
                            placeholder="Confirm Password"
                            className="form-input"
                        />
                        </div>
                        <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                </div>
            </div>
        </div>         
    )
}

export default Modal;
