import React, { Component } from "react";
import { connect } from "react-redux";
import { OpenModalAction } from "../redux/actions/OpenModalAction";
import { TangGiamSoLuongAction } from "../redux/actions/TangGiamSoLuongAction";
import Modal from "./Modal";

class OrderFood extends Component {

  renderBurger = () => {
    let {burger} = this.props.obBurger;
    let arrBurger = [];

    for (let value in burger) {
      let middleBurger = [];
      for (let i = 0; i < burger[value]; i++) {
        middleBurger.push(<div className={value} key={i}></div>)
      }
      arrBurger.push(middleBurger);
    };

    return arrBurger;
  }

  renderMenu = () => {
    let {menu, burger} = this.props.obBurger;
    let arrMenu = [];
    for(let value in menu) {
      arrMenu.push(<tr key={value}>
        <td className="food">{value}</td>
        <td>
            <span><i className="fa-solid fa-circle-plus" onClick={() => {
              const action = TangGiamSoLuongAction(value, 1);
              this.props.dispatch(action)
            }}></i></span>
            <span style={{width: '35px', display: 'inline-block'}}>{burger[value]}</span>
            <span><i className="fa-solid fa-circle-minus" onClick={() => {
              const action = TangGiamSoLuongAction(value, -1);
              this.props.dispatch(action)
            }}></i></span>
        </td>
        <td>${menu[value]}</td>
        <td>${burger[value] * menu[value]}</td>
      </tr>)
    }
    return arrMenu
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1 className="text-center font-weight-bold mt-4">Bài tập Burger - React Redux</h1>
          <div className="row">
            <div className="col-6 mt-5">
              <h4 className="text-center font-weight-bold mb-5">Bánh của bạn</h4>
              <div className="breadTop"></div>
                {this.renderBurger()}
              <div className="breadBottom"></div>
            </div>
            <div className="col-6 mt-5">
            <h4 className="text-center font-weight-bold mb-5">Menu</h4>
              <table className="table">
                  <thead>
                      <tr>
                          <th>Thức ăn</th>
                          <th>Số lượng</th>
                          <th>Đơn giá</th>
                          <th>Thành tiền</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.renderMenu()}
                  </tbody>
                  <tfoot>
                      <tr>
                          <td className="text-right" colSpan={4} style={{paddingRight: '54px'}}>Tổng tiền:
                            <span className="ml-2" style={{display: 'inline-block', width: '30px', textAlign: 'center'}}>${this.props.obBurger.total}</span>
                          </td>
                      </tr>
                  </tfoot>
              </table>
              <button className="btn btn-success d-flex m-auto" style={{fontWeight: '500'}} onClick={() => {
                let body = document.querySelector("body");
                let modal = document.querySelector(".modal__wrapper");
                modal.style.opacity = '1';
                body.classList.toggle("open-modal");
                const action = OpenModalAction(true)
                this.props.dispatch(action)
              }}>Chốt đơn</button>
            </div>
          </div>
        </div>
        <div className="modal__wrapper" style={{opacity: '0'}}>
          {this.props.obBurger.isOpenModal && <Modal/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  obBurger: state.orderBurgerReducer
});

export default connect(mapStateToProps)(OrderFood);
