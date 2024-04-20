import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <table className="widgetLgTable">
        <caption>
          <h3 className="widgetLgTitle">Latest transactions</h3>
        </caption>
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media.istockphoto.com/id/490548364/photo/young-brunette-in-nature.jpg?s=612x612&w=0&k=20&c=B7Es3bm6Up_LpjCMxIzG5pZe3oX8rlm0uCPXzDIgPt4="
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$150.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media.istockphoto.com/id/157638794/photo/young-brunette-on-her-phone-in-the-park.jpg?s=612x612&w=0&k=20&c=YumzCUT7hzFyxzDbTqIUuU-6oXowqulXe6JjNeFikQY="
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Amelia Andersen</span>
            </td>
            <td className="widgetLgDate">21 Jul 2021</td>
            <td className="widgetLgAmount">$190.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media.istockphoto.com/id/500174349/photo/bring-on-the-summer.jpg?s=612x612&w=0&k=20&c=gxXOXv0kGds0A3qff13CFdL6_6YSQanutVwg6U6Xozk="
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Charlotte van den Berg</span>
            </td>
            <td className="widgetLgDate">15 Apr 2021</td>
            <td className="widgetLgAmount">$120.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media.istockphoto.com/id/482097024/photo/smiling-girl-in-summer-park.jpg?s=612x612&w=0&k=20&c=mwvsIrL9lRRzHnceVs4xj93-ZneWskYnJeHisPK2bEI="
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Maria Kovačević</span>
            </td>
            <td className="widgetLgDate">29 May 2021</td>
            <td className="widgetLgAmount">$350.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://media.istockphoto.com/id/1185709412/photo/portrait-of-a-beautiful-young-woman.jpg?s=612x612&w=0&k=20&c=aHDqk0i7N6BedKTsvrW-d4sgEbNkge6oeN9K9avO_Yc="
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Léa Dubois</span>
            </td>
            <td className="widgetLgDate">5 Nov 2021</td>
            <td className="widgetLgAmount">$260.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
