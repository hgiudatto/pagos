import styles from "./EmpresasCRUD.module.css";
import clientes from "./clientes.json";
import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRoad from "./ReadOnlyRoad";
import EditableRow from "./EditableRow";

export default function EmpresasCRUD() {
  const [customers, setCustomers] = useState(clientes);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editCustomerId, setEditCustomerId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newCustomer = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newCustomers = [...customers, newCustomer];
    setCustomers(newCustomers);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCustomer = {
      id: editCustomerId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newCustomers = [...customers];

    const index = customers.findIndex(
      (customer) => customer.id === editCustomerId
    );

    newCustomers[index] = editedCustomer;

    setCustomers(newCustomers);
    setEditCustomerId(null);
  };

  const handleEditClick = (event, customer) => {
    event.preventDefault();
    setEditCustomerId(customer.id);

    const formValues = {
      fullName: customer.fullName,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditCustomerId(null);
  }

  const handleDeleteClick = (customerId) => {
    const newCustomers = [...customers];

    const index = customers.findIndex((customer) => customer.id === customerId);

    newCustomers.splice(index, 1);

    setCustomers(newCustomers);
  }

  return (
    <div className={styles.appContainer}>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <Fragment>
                {editCustomerId === customer.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRoad
                    customer={customer}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
