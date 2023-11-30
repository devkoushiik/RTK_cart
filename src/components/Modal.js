import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { closeModal } from "../features/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type="button"
            className="btn confirm-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
