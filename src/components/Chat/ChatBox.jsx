import { FiArrowLeft, FiInfo, FiSend } from "react-icons/fi";
import profile from "../../assets/img/bg2.jpg";

const ChatBox = () => {
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
              <div className="text">
                <div className="user">
                  <span>
                    <img
                      src={profile}
                      alt="user-profile"
                      title="Niamul Haq Siyam"
                    />
                    {/* <FiUser /> */}
                  </span>
                </div>
                <p className="msg" title="Niamul Haq Siyam">
                  Hello How are you 1
                </p>
              </div>

              <div className="text me">
                <p className="msg-me" title="me">
                  I'm Fine. and You...?
                </p>
              </div>
            </div>
            <div className="chat_footer">
              <form>
                <div className="chat_write">
                  <textarea
                    className="input"
                    type="text"
                    placeholder="type message.."
                  ></textarea>
                  <span className="send_btn">
                    <FiSend />
                  </span>
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
