import React, { useState } from 'react';
import axios from 'axios';
const Sales = () => {
  const [formData, setFormData] = useState({
    customer: '',
    offerNoDate: '',
    enquiryNoDate: '',
    poNoDate: '',
    poReceiptDate: '',
    tableRows: [
      { sl: 1, rowHeading: '', parameters: 'Quantity', columns: ['', '', '', '', ''] },
      { sl: 2, rowHeading: '', parameters: 'Price', columns: ['', '', '', '', ''] },
      { sl: 3, rowHeading: '', parameters: 'Delivery Schedule/Lead time', columns: ['', '', '', '', ''] },
      { sl: 4, rowHeading: '', parameters: 'Payment Term', columns: ['', '', '', '', ''] },
      { sl: 5, rowHeading: '', parameters: 'INCOTERM', columns: ['', '', '', '', ''] },
      { sl: 6, rowHeading: '', parameters: 'Consignee', columns: ['', '', '', '', ''] },
      { sl: 7, rowHeading: '', parameters: 'LD Clause', columns: ['', '', '', '', ''] },
    ],
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleTableInputChange = (e, rowIndex, colIndex) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    updatedFormData.tableRows[rowIndex].columns[colIndex] = value;
    setFormData(updatedFormData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); 

    
    const dataToSend = {
      customer: formData.customer,
      enquiryNo: formData.enquiryNoDate,
      enquiryNoDate: formData.enquiryNoDate,
      offerNo: formData.offerNoDate,
      poNo: formData.poNoDate,
      quantity: formData.tableRows[0].columns[0],
      price: formData.tableRows[1].columns[0],
      paymentTerm: formData.tableRows[3].columns[0],
      incoTerm: formData.tableRows[4].columns[0],
      consignee: formData.tableRows[5].columns[0], 
      ldClause: formData.tableRows[6].columns[0],
      note: formData.note,
    };
    console.log('Data to send:', dataToSend);
    try {
     
      console.log('Before fetch');
      const response = await axios.post('http://localhost:8081/customer/newcustomer', dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('After Axios request');

      if (response.status === 200) {
        console.log('Data sent successfully!');
        alert('Data sent successfully!');
        
        setFormData({
          customer: '',
          offerNoDate: '',
          enquiryNoDate: '',
          poNoDate: '',
          poReceiptDate: '',
          tableRows: [
            { sl: 1, rowHeading: '', parameters: 'Quantity', columns: ['', '', '', '', ''] },
            { sl: 2, rowHeading: '', parameters: 'Price', columns: ['', '', '', '', ''] },
            { sl: 3, rowHeading: '', parameters: 'Delivery Schedule/Lead time', columns: ['', '', '', '', ''] },
            { sl: 4, rowHeading: '', parameters: 'Payment Term', columns: ['', '', '', '', ''] },
            { sl: 5, rowHeading: '', parameters: 'INCOTERM', columns: ['', '', '', '', ''] },
            { sl: 6, rowHeading: '', parameters: 'Consignee', columns: ['', '', '', '', ''] },
            { sl: 7, rowHeading: '', parameters: 'LD Clause', columns: ['', '', '', '', ''] },
            
          ],
          note: '',
          
        });
        
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  const tableData = formData.tableRows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      <td>
        <input
          type="text"
          name={`sl${rowIndex}`}
          placeholder={`SL ${rowIndex + 1}`}
          value={row.sl}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 font-bold"
        />
      </td>
      <td>
        <input
          type="text"
          name={`parameters${rowIndex}`}
          placeholder={`Parameters ${rowIndex + 1}`}
          value={row.parameters}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 font-bold"
        />
      </td>
      <td>
        <input
          type="text"
          name={`tableRow${rowIndex}_col0`}
          placeholder=""
          value={row.columns[0]}
          onChange={(e) => handleTableInputChange(e, rowIndex, 0)} // Use handleTableInputChange for table input fields
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </td>
      <td>
        <input
          type="text"
          name={`tableRow${rowIndex}_col1`}
          placeholder=""
          value={row.columns[1]}
          onChange={(e) => handleTableInputChange(e, rowIndex, 1)} // Use handleTableInputChange for table input fields
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </td>
      <td>
        <input
          type="text"
          name={`tableRow${rowIndex}_col2`}
          placeholder=""
          value={row.columns[2]}
          onChange={(e) => handleTableInputChange(e, rowIndex, 2)} // Use handleTableInputChange for table input fields
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </td>
      <td>
        <input
          type="text"
          name={`tableRow${rowIndex}_col3`}
          placeholder=""
          value={row.columns[3]}
          onChange={(e) => handleTableInputChange(e, rowIndex, 3)} // Use handleTableInputChange for table input fields
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
        />
      </td>
    </tr>
  ));


  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center">
      <div className="bg-blue-100 p-8 rounded shadow-md w-full max-w-4xl mt-4 ml-4">
        <h2 className="text-2xl mb-4 font-semibold text-center">Contract Review Form</h2>
        <form onSubmit={handleSubmit} onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
                Customer:
              </label>
              <input
                type="text"
                id="customer"
                name="customer"
                value={formData.customer}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="offerNoDate" className="block text-sm font-medium text-gray-700">
                Offer NO./Date:
              </label>
              <input
                type="text"
                id="offerNoDate"
                name="offerNoDate"
                value={formData.offerNoDate}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="enquiryNoDate" className="block text-sm font-medium text-gray-700">
                Enquiry No./Date:
              </label>
              <input
                type="date"
                id="enquiryNoDate"
                name="enquiryNoDate"
                value={formData.enquiryNoDate}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="poNoDate" className="block text-sm font-medium text-gray-700">
                P.O. No./Date:
              </label>
              <input
                type="text"
                id="poNoDate"
                name="poNoDate"
                value={formData.poNoDate}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="poReceiptDate" className="block text-sm font-medium text-gray-700">
                PO Receipt Date:
              </label>
              <input
                type="text"
                id="poReceiptDate"
                name="poReceiptDate"
                value={formData.poReceiptDate}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>SL</th>
                <th>Parameters</th>
                <th>Item-1</th>
                <th>Varience</th>
                <th>Item-2</th>
                <th>Varience</th>
              </tr>
            </thead>
            <tbody>
              {tableData}
            </tbody>
          </table>
          <div className="w-full px-2 mb-4">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">
              Note:
            </label>
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 mt-1 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              rows="3" 
              style={{
                resize: "vertical", 
              }}
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    
    </div>
  );
};

export default Sales;
