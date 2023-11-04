/* eslint-disable  */
import './App.css'
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { PDFViewer, usePDF } from '@react-pdf/renderer';
import { PDF } from './PDF';

function App() {
  const [data, setData] = useState<any>([]);
  const [numRows, setNumRows] = useState(100);
  const generateFakeData = () => {
    const fakeData = [];
    for (let i = 0; i < numRows; i++) {
      fakeData.push({
        sInvNo: i,
        invoiceDate: faker.date.anytime().toString(),
        pcs: faker.number.int({ min: 1000, max:100000}),
        invAmount: faker.number.int({ min: 1000, max:100000}),
        transport: faker.company.name(),
        lrNo: faker.number.int({min:0, max:100}),
        lrDate: faker.date.anytime().toString()
      });
    }
    setData(fakeData);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* <label>
        Number of Rows:
        <input
          type="number"
          value={numRows}
          defaultValue={0}
          onChange={(e) => setNumRows(parseInt(e.target.value))}
        />
      </label>
      <button onClick={generateFakeData}>Generate Fake Data</button> */}
      {/* <PDFViewer style={{width:"100%", height: "90vh"}} progressCallBack={(value)=>{
        console.log({value})
      }}>
        <PDF
          data={data}
        />
      </PDFViewer> */}
    </div>
  )
}

export default App
