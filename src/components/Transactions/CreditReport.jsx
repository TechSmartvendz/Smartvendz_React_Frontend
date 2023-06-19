import React from "react";

function CreditReport() {
  return (
    <>
      <div className="add-user-container">
        <div>
          <span className="componet-title">Credit Report</span>
        </div>
        <div className="componet-sub-title">
          <span>Search Credit Report</span>
        </div>

        <form className="flex-col">
          <div className="input-lable-v-div">
            <label htmlFor="start">Start Date</label>
            <input type="date" id="start" className="input-lable-v-div"/>
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="end">End Date</label>
            <input type="date" id="end" className="input-lable-v-div" />
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="mid">Machine id</label>
            <input type="text" id="mid" className="input-lable-v-div" />
          </div>

          <div className="input-lable-v-div">
            <label htmlFor="cid">Company id</label>
            <input type="text" id="cid" className="input-lable-v-div" />
          </div>
          <div className="input-lable-v-div">
            <button className="submit-btn">Refresh</button>
          </div>
        </form>
        </div>

        <div>
          <div className="componet-sub-title">
            <span>Credit Recharge Details</span>
          </div>

          <div className="table_container-div">
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default CreditReport;
