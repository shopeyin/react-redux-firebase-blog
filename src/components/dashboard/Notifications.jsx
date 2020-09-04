import React from "react";
import Moment from "react-moment";
import "./notification.style.scss";
function Notifications(props) {
  const { notifications } = props;
  return (
    <div className="card mt-4 notification-container">
      <ul className="list-group list-group-flush list-none p-2">
        {notifications &&
          notifications.map((item) => {
            return (
              <li key={item.id}>
                <span className="text-warning"> {item.user}</span>
                <span> {item.content}</span>
                <span>
                  {" "}
                  <Moment fromNow>{item.time.toDate()}</Moment>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Notifications;
