import React, { useState } from 'react';

const CompanyWise = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Status</th>
          <th>Problem</th>
          <th>Video</th>
        </tr>
      </thead>
      <tbody onClick={handleClick}>
        <tr>
          <td>1</td>
          <td>Open</td>
          <td>Example problem</td>
          <td>Example link</td>
        </tr>
        {isOpen && (
          <tr>
            <td colSpan="6">Link content goes here</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CompanyWise;
