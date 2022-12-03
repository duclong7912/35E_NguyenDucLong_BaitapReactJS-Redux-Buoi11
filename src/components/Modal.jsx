import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OpenModalAction } from '../redux/actions/OpenModalAction'

class Modal extends Component {
  render() {
    return (
        <div className="modal__container">
            <div className="overlay">
                <div className="modal__content">
                    <div className="modal__wrap">
                        <div className="modal__icon">
                            <i className="fa-solid fa-check "></i>
                        </div>
                        <div className="modal__info mt-4">
                            <h2 className="text-success font-weight-bold">Chốt đơn thành công !!</h2>
                        </div>
                        <div className="modal__comfirm mt-4">
                            <button className="btn btn-success" style={{fontWeight: '500'}} onClick={() => {
                                let body = document.querySelector("body");
                                body.classList.remove("open-modal")
                                let modal = document.querySelector(".modal__wrapper");
                                modal.style.opacity = '0';
                                const action = OpenModalAction(false)
                                this.props.dispatch(action)
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(Modal)