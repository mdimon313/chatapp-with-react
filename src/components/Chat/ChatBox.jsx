import { useState } from "react";
import { FiArrowLeft, FiInfo, FiSend } from "react-icons/fi";
import profile from "../../assets/img/bg2.jpg";
import ChatText from "./ChatText";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  const cng = (e) => setMessage(e.target.value);

  const handleChatInput = (e) => {
    e.preventDefault();
    setDisplayMessage(message);
    console.log(message);
    setMessage("");
  };
  return (
    <>
      <div className="container">
        <div className="chatBox">
          {/* Chat box Sidebar */}
          {/* <div className="accoutns_side_bar">

          </div> */}
          <div className="chatBoxMainContainer">
            {/* chat box header */}
            <div className="chat_header">
              <div className="chat_header_icon back">
                <FiArrowLeft />
              </div>
              <div className="userNames">
                <h5>
                  Mohammd Imon <p>mohammdimon265@gmail.com</p>
                </h5>
              </div>
              <div className="chat_header_icon user_info">
                <FiInfo />
              </div>
            </div>
            <div className="chatMain">
              <ChatText
                className="me"
                message={!displayMessage ? null : displayMessage}
              />
            </div>
            <div className="chat_footer">
              <form onSubmit={handleChatInput}>
                <div className="chat_write">
                  <textarea
                    className="input"
                    onChange={cng}
                    value={message}
                    type="text"
                    placeholder="type message.."
                  ></textarea>
                  <button type="submit" className="send_btn">
                    <FiSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
