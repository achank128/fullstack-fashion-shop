import React from "react";
import "./widgetLarge.scss";
export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table>
        <tr>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className="widgetLgUser">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/275002445_1110849702817487_4422254337327486611_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cDsorzbXRFgAX9Uw9Zo&_nc_ht=scontent-hkt1-1.xx&oh=00_AT_YOECothy5GbiPM1k8-lHLGMV925n8LZcxsxxBDj0Mww&oe=622639A1"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr>
          <td className="widgetLgUser">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/275002445_1110849702817487_4422254337327486611_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cDsorzbXRFgAX9Uw9Zo&_nc_ht=scontent-hkt1-1.xx&oh=00_AT_YOECothy5GbiPM1k8-lHLGMV925n8LZcxsxxBDj0Mww&oe=622639A1"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined"></Button>
          </td>
        </tr>
        <tr>
          <td className="widgetLgUser">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/275002445_1110849702817487_4422254337327486611_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cDsorzbXRFgAX9Uw9Zo&_nc_ht=scontent-hkt1-1.xx&oh=00_AT_YOECothy5GbiPM1k8-lHLGMV925n8LZcxsxxBDj0Mww&oe=622639A1"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>
        <tr>
          <td className="widgetLgUser">
            <img
              src="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/275002445_1110849702817487_4422254337327486611_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=cDsorzbXRFgAX9Uw9Zo&_nc_ht=scontent-hkt1-1.xx&oh=00_AT_YOECothy5GbiPM1k8-lHLGMV925n8LZcxsxxBDj0Mww&oe=622639A1"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">3 Mar 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
