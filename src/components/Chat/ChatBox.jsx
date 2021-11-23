// import { FiUser } from "react-icons/fi";
// import profile from "../../assets/img/pic.png";
import profile from "../../assets/img/bg2.jpg";
const ChatBox = () => {
  return (
    <>
      <div className="container">
        <div className="chatBox">
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
      </div>
    </>
  );
};

export default ChatBox;
