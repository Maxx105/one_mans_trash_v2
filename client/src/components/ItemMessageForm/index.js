import React from "react";
// import ItemAPI from "../../utils/ItemAPI";

function ItemMessageForm(props) {
  return (
    <div className = "container" style={{marginTop: "30px"}}>
      <div className="form-group">
        <label htmlFor="distance">Send a message to <strong>{props.user.username}</strong> about their <strong>{props.item.title}</strong>!</label>
        <div className="input-group mb-3">
              <input
                className="form-control shadow bg-light"
                id="message-input"
                type="text"
                placeholder="Enter Your Message"
                onChange={props.onMessageChange}
              ></input>
              <div className="input-group-append">
                <button
                  onClick={props.submit}
                  className="btn btn-primary btn-block shadow"
                >
                  Send
                </button>
              </div>
            </div>
        </div>
    </div>
  );
}
export default ItemMessageForm;
