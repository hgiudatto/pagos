import React from "react";

const ReadOnlyRoad = ({ customer, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{customer.fullName}</td>
      <td>{customer.address}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => {
            handleEditClick(event, customer);
          }}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(customer.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRoad;
