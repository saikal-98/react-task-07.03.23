import React, { useState } from "react";

const Person = (props) => {
  return (
    <div>
      <table border={2}>
        <tbody>
          <thead>
            <tr>
              <th>Name</th>
              <th> Surname</th>
              <th>Days</th>
              <th>Salary per day</th>
              <th> Total Salary</th>
            </tr>
            {props.employees.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>
                  <input value={item.days} type="text" />
                  {/* {item.days} */}
                </td>
                <td>
                  <input value={item.salaryPerDay} type="text" />{" "}
                  {/* {item.salaryPerDay} */}
                </td>
                <td>
                  <input value={item.days * item.salaryPerDay} type="text" />
                </td>
              </tr>
            ))}
          </thead>
        </tbody>
      </table>
    </div>
  );
};

export default Person;
