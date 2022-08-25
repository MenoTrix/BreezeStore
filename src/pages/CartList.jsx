import { Container } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { ModalContext } from "../context/ModalContext";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useCart } from "react-use-cart";

const CartList = () => {
  const { cart, addOneMore, deleteOneMore, deleteItem, totalPrice, clearAll } =
    useContext(CartContext);

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();

  const { setModal } = ModalContext();

  return isEmpty ? (
    <div className="text-center p-5 m-5">
      <h1 className="p-5 text-color">
        Cart Is Empty <BsCartX />
      </h1>
      <Link to="/" className="btn btn-outline-success addBtn px-2 my-3 ">
        <span className="px-2">
          <IoMdArrowRoundBack />
        </span>
        Back to home
      </Link>
    </div>
  ) : (
    <Container className="shadow">
      <div className="row px-2 border-bottom py-3">
        <p className="col-6 fw-bold">Item</p>
        <p className="col-2 fw-bold">Price</p>
        <p className="col-2 fw-bold ">Quantity</p>
        <p className="col-2 fw-bold">Sub total</p>
      </div>
      {items.map((item) => (
        <div className="border-bottom" key={item.id}>
          <div className="row py-3 d-flex flex-row align-items-center ">
            <div className="col-6">
              <div className="row align-items-center">
                <div className="col-3">
                  <img src={item.image} className="w-100 " alt={item.id} />
                </div>
                <p className="col-6 ">{item.title}</p>
              </div>
            </div>
            <p className="col-2 ">{item.price} EGP</p>
            <div className="col-2 d-flex flex-row ">
              <AiFillPlusCircle
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                size={30}
                className="text-color"
                style={{ cursor: "pointer" }}
              />
              <p className="px-2 text-bold fs-5">{item.quantity}</p>
              <AiFillMinusCircle
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                size={30}
                color="darkred"
                style={{ cursor: "pointer" }}
              />
            </div>
            <p className="col-2">
              {(item.price * item.quantity).toFixed(2)} EGP
            </p>
          </div>
          <div
            onClick={() => removeItem(item.id)}
            style={{ cursor: "pointer" }}
            className=" d-flex flex-row align-items-end justify-content-end py-2"
          >
            <MdDeleteForever size={20} color="red" />
            <p className="mb-0">Remove</p>
          </div>
        </div>
      ))}
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2>
          <button
            onClick={() => setModal("buyNow")}
            className=" btn btn-outline-success fs-5 text-bold p-2 "
          >
            Order Now : {Math.floor(cartTotal)} EGP
          </button>
        </h2>
        {/* {console.log(cartTotal.floor())} */}
        <button
          className="btn btn-outline-danger addBtn  px-5 my-3 mx-3"
          onClick={emptyCart}
        >
          Clear cart
        </button>
      </div>
    </Container>
  );
};

export default CartList;
