import React, { useState } from "react";
const MessageWidget = () => {
  const [isWidgetOpen, setWidgetOpen] = useState(false);

  const handleWidgetToggle = () => {
    setWidgetOpen(!isWidgetOpen);
  };

  return (
    <div
      className={`w3c__message--widget ${
        isWidgetOpen ? "w3c__widget--open" : ""
      }`}
    >
      <div className="w3c__message--icon" onClick={handleWidgetToggle}>
        <span className="w3c__chat--icon">
          <img
            alt=""
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS42IDQ4OS42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODkuNiA0ODkuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zOTQuOCwyNjEuNVY4MS43YzAtMjQuOS0yMC4zLTQ1LjItNDUuMi00NS4ySDQ1LjJDMjAuMywzNi41LDAsNTYuOCwwLDgxLjd2MTc5LjhjMCwyNC45LDIwLjMsNDUuMiw0NS4yLDQ1LjJoMTIuOXY1NC4yICAgIGMwLDEwLDguMSwxOC4xLDE4LjIsMTguMWwwLDBjNS4yLDAsMTAuMi0yLjMsMTMuNy02LjNsNTcuMS02Ni4xaDIwMi42QzM3NC41LDMwNi43LDM5NC44LDI4Ni40LDM5NC44LDI2MS41eiBNMTQxLjQsMjgyLjIgICAgYy0zLjYsMC02LjksMS41LTkuMyw0LjJsLTQ5LjYsNTcuM3YtNDkuM2MwLTYuOC01LjUtMTIuMy0xMi4zLTEyLjNoLTI1Yy0xMS40LDAtMjAuNy05LjMtMjAuNy0yMC43VjgxLjcgICAgYzAtMTEuNCw5LjMtMjAuNywyMC43LTIwLjdoMzA0LjRjMTEuNCwwLDIwLjcsOS4zLDIwLjcsMjAuN3YxNzkuOGMwLDExLjQtOS4zLDIwLjctMjAuNywyMC43TDE0MS40LDI4Mi4yTDE0MS40LDI4Mi4yeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik0zOTkuNyw0NDYuOGMzLjUsNC4xLDguNSw2LjMsMTMuNiw2LjNjMi4xLDAsNC4zLTAuNCw2LjQtMS4yYzcuMi0yLjcsMTEuOC05LjMsMTEuOC0xN3YtNTQuMmgxMi45ICAgIGMyNC45LDAsNDUuMi0yMC4zLDQ1LjItNDUuMlYxNTUuN2MwLTI0LjktMjAuMy00NS4yLTQ1LjItNDUuMmMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4yYzAsNi44LDUuNSwxMi4zLDEyLjMsMTIuMyAgICBjMTEuNCwwLDIwLjcsOS4zLDIwLjcsMjAuN3YxNzkuOGMwLDExLjQtOS4zLDIwLjctMjAuNywyMC43aC0yNS4xYy02LjgsMC0xMi4zLDUuNS0xMi4zLDEyLjN2NDkuM2wtNDkuNi01Ny4zICAgIGMtMi4zLTIuNy01LjctNC4yLTkuMy00LjJoLTE4NGMtNi44LDAtMTIuMyw1LjUtMTIuMywxMi4zczUuNSwxMi4zLDEyLjMsMTIuM2gxNzguNEwzOTkuNyw0NDYuOHoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8Y2lyY2xlIGN4PSIxOTcuNCIgY3k9IjE3NS45IiByPSIxNC42IiBmaWxsPSIjRkZGRkZGIi8+CgkJPGNpcmNsZSBjeD0iMjQ2LjMiIGN5PSIxNzUuOSIgcj0iMTQuNiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxjaXJjbGUgY3g9IjE0OC41IiBjeT0iMTc1LjkiIHI9IjE0LjYiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          />
        </span>
        <span className="w3c__close--icon">
          <img
            alt=""
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ljk3MSA0Ny45NzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OCAgIGMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwYy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQybDE4Ljg2NSwxOC44NjRMMC44NzksNDIuODVjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDIgICBDMS40NjUsNDcuNjc3LDIuMjMzLDQ3Ljk3LDMsNDcuOTdzMS41MzUtMC4yOTMsMi4xMjEtMC44NzlsMTguODY1LTE4Ljg2NEw0Mi44NSw0Ny4wOTFjMC41ODYsMC41ODYsMS4zNTQsMC44NzksMi4xMjEsMC44NzkgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
          />
        </span>
      </div>

      <div className="w3c__message--box">
        <div className="w3c__message-box--header">
          <span className="w3c__message-box--title">Have a question?</span>
          <span>Message us and we will get back to you soon.</span>
        </div>

        <div className="contact-form" id="contact-form">
          <form action="https://formspree.io/f/mvoneoqo" method="post">
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              className="contact-box"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="contact-box"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              className="contact-box message-box"
            ></textarea>
            <button type="submit" id="#submit-btn" className="message-submit">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageWidget;
