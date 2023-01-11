import React from "react";

function CreditReport() {
  return (
    <div>
      <p>Credit Report</p>

      <form>
        <div>
          <label htmlFor="start">Start</label>
          <input type="text" id="start" />
        </div>

        <div>
          <label htmlFor="end">End</label>
          <input type="text" id="end" />
        </div>

        <div>
          <label htmlFor="mid">Machine id</label>
          <input type="text" id="mid" />
        </div>

        <div>
          <label htmlFor="cid">Company id</label>
          <input type="text" id="cid" />
        </div>
        <div>
          <button className="">Refresh</button>
        </div>
      </form>

      <div>
        <table>
          <tr>
            <th>Created date</th>
            <th>Credit month</th>
            <th>Card number</th>
            <th>Employee name</th>
            <th>Email</th>
            <th>Manager Email</th>
            <th>Cost center</th>
            <th>Credit amount</th>
            <th>Transaction amount</th>
            <th>Credit balance</th>
            <th>Active status</th>
          </tr>

          <tr>
            <td>2023-01-06T05:45:28.509Z</td>
            <td>January 2023</td>
            <td>111029</td>
            <td>Kuldeep Test1</td>
            <td>kuldeep@smartvendz.com</td>
            <td>vinayak7ambali@gmail.com</td>
            <td>'TEST1'</td>
            <td>1000000</td>
            <td>0</td>
            <td>10000</td>
            <td>true</td>
          </tr>
          <tr>
            <td>2023-01-06T05:45:28.509Z</td>
            <td>January 2023</td>
            <td>111029</td>
            <td>Kuldeep Test1</td>
            <td>kuldeep@smartvendz.com</td>
            <td>vinayak7ambali@gmail.com</td>
            <td>'TEST1'</td>
            <td>1000000</td>
            <td>0</td>
            <td>10000</td>
            <td>true</td>
          </tr>
          <tr>
            <td>2023-01-06T05:45:28.509Z</td>
            <td>January 2023</td>
            <td>111029</td>
            <td>Kuldeep Test1</td>
            <td>kuldeep@smartvendz.com</td>
            <td>vinayak7ambali@gmail.com</td>
            <td>'TEST1'</td>
            <td>1000000</td>
            <td>0</td>
            <td>10000</td>
            <td>true</td>
          </tr>
          <tr>
            <td>2023-01-06T05:45:28.509Z</td>
            <td>January 2023</td>
            <td>111029</td>
            <td>Kuldeep Test1</td>
            <td>kuldeep@smartvendz.com</td>
            <td>vinayak7ambali@gmail.com</td>
            <td>'TEST1'</td>
            <td>1000000</td>
            <td>0</td>
            <td>10000</td>
            <td>true</td>
          </tr>
          <tr>
            <td>2023-01-06T05:45:28.509Z</td>
            <td>January 2023</td>
            <td>111029</td>
            <td>Kuldeep Test1</td>
            <td>kuldeep@smartvendz.com</td>
            <td>vinayak7ambali@gmail.com</td>
            <td>'TEST1'</td>
            <td>1000000</td>
            <td>0</td>
            <td>10000</td>
            <td>true</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CreditReport;
