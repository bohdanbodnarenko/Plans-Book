import React from "react";
import moment from "moment";

const Notifications = props => {
  return (
    <div>
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="notifications">
              {props.notifications &&
                props.notifications.map(el => (
                  <li key={el.id}>
                    <span style={{color:'#DB504A',fontWeight:'bold'}}>{el.user} </span>
                    <span>{el.content}</span>
                    <div className="grey-text note-date">
                      {moment(el.time.toDate()).fromNow()}
                    </div>
                    <br/>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
