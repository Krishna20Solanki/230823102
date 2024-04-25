import React from 'react';

const DynamicTable = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <table style={{ border: '1px solid black', borderCollapse: 'collapse',"width":"100%"}}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ border: '1px solid black', padding: '8px' }}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => {
          const sameAsPrevious = rowIndex > 0 && row['K-Levels'] === data[rowIndex - 1]['K-Levels'];
          return (
            <tr key={rowIndex} style={{ border: '1px solid black' }}>
              {columns.map((column, colIndex) => {
                if (column === 'K-Levels' && sameAsPrevious) {
                  return null; // Skip rendering the cell if rowspan is applied to the previous row
                } else if (column === 'K-Levels') {
                  let rowspan = 1;
                  // Calculate rowspan by counting the number of consecutive rows with the same "K-Levels"
                  for (let i = rowIndex + 1; i < data.length; i++) {
                    if (row[column] === data[i][column]) {
                      rowspan++;
                    } else {
                      break;
                    }
                  }
                  return <td key={colIndex} rowSpan={rowspan} style={{ border: '1px solid black', padding: '8px' }}>{row[column]}</td>;
                } else {
                  return <td key={colIndex} style={{ border: '1px solid black', padding: '8px' }}>{row[column]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DynamicTable;