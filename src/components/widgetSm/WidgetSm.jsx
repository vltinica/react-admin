import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/1040440832/photo/portrait-of-a-beautiful-smiling-girl.jpg?s=612x612&w=0&k=20&c=1hDU-0iFt4W-fBtLYWDt_vDz71CFjOfKE3hPWrZIyOE="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Emma Müller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/482097024/photo/smiling-girl-in-summer-park.jpg?s=612x612&w=0&k=20&c=mwvsIrL9lRRzHnceVs4xj93-ZneWskYnJeHisPK2bEI="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sofia Petrova</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://media.istockphoto.com/id/1040279930/photo/pure-beauty.jpg?s=612x612&w=0&k=20&c=UmDxkSVzFRSy1MaYDgi9a65-dBNt6ttNGA4RtFSpers="
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Isabella Rossi</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
