import React from "react";
// import "./style.css";

function MessageResponseForm(props) {
  return (
    <div>
        <div className="form-group" style={{margin: "10px"}}>
            <div className="input-group mb-3">
                <input
                    className="form-control shadow bg-light"
                    id="response-input"
                    type="text"
                    placeholder="Enter Your Message"
                    onChange={props.onResponseInputChange}
                ></input>
                <div className="input-group-append">
                    <button
                    onClick={props.sendResponse}
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
export default MessageResponseForm;