import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TableInReact() {
  const studentsInfo = [
    {
      name: "Aniket",
      email: "Aniket@gmail.com",
      year: "4",
      college: {
        college_Name: "SIT",
        city: "Ichalkaranji",
        country: "India",
      },
    },
    {
      name: "Indrajeet",
      email: "Indrajeet@gmail.com",
      year: "3",
      college: {
        college_Name: "SIT",
        city: "Ichalkaranji",
        country: "India",
      },
    },
    {
      name: "Yash",
      email: "Yash@gmail.com",
      year: "4",
      college: {
        college_Name: "SIT",
        city: "Ichalkaranji",
        country: "India",
      },
    },
    {
      name: "Om",
      email: "Om@gmail.com",
      year: "2",
      college: {
        college_Name: "SIT",
        city: "Ichalkaranji",
        country: "India",
      },
    },
    {
      name: "Vishal",
      email: "Vishal@gmail.com",
      year: "4",
      college: {
        college_Name: "SIT",
        city: "Ichalkaranji",
        country: "India",
      },
    },
    {
      name: "Parth",
      email: "Parth@gmail.com",
      year: "3",
      college: {
        college_Name: "SIT",
        city: "Ichalkaranji",
        country: "India",
      },
    },
  ];

  return (
    <div className="m-4">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Year</th>
            <th scope="col">College Information</th>
          </tr>
        </thead>
        <tbody>
          {studentsInfo.map((info, index1) => (
            <tr key={index1}>
              <td>{index1 + 1}</td>
              <td>
                {info.name}
                <td>
                  <button type="button" className="btn btn-success mt-5" onClick={()=>alert('Data Saved Successfully')}>
                    Save
                  </button>
                </td>
              </td>
              <td>
                {info.email}
                <td>
                  <button type="button" className="btn btn-primary mt-5" onClick={()=>alert('Data updated Successfully')}>
                    Edit
                  </button>
                </td>
              </td>
              <td>
                {info.year}
                <td>
                  <button type="button" className="btn btn-danger mt-5" onClick={()=>alert('Data Deleted Successfully')}>
                    Delete
                  </button>
                </td>
              </td>
              <td>
                <table className="table table-dark table-striped table-hover">
                  <tbody>
                    {Object.entries(info.college).map(
                      ([key, value], index2) => (
                        <tr key={index2 + 1}>
                          <td>{index2 + 1}</td>
                          <td>{key}</td>
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableInReact;
