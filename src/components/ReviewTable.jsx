import React, { useState } from 'react';

const TablePage = () => {
  const [tableData, setTableData] = useState([
    // Initialize your table data as needed
    { field1: '', field2: '', field3: '' },
  ]);

  const handleAddRow = () => {
    // Add a new row to the table
    setTableData([...tableData, { field1: '', field2: '', field3: '' }]);
  };

  const handleInputChange = (e, rowIndex, fieldName) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][fieldName] = e.target.value;
    setTableData(updatedTableData);
  };

  return (
    <div>
      <h2>Table Page</h2>
      <button onClick={handleAddRow}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
            <th>Field 3</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="text"
                  value={row.field1}
                  onChange={(e) => handleInputChange(e, rowIndex, 'field1')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.field2}
                  onChange={(e) => handleInputChange(e, rowIndex, 'field2')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.field3}
                  onChange={(e) => handleInputChange(e, rowIndex, 'field3')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
