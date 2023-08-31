import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';

import * as XLSX from 'xlsx';

function Upload_File() {
  // Onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  // Submit state
  const [excelData, setExcelData] = useState(null);

  // Onchange event
  const handleFile = (e) => {
    const fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onloadend = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError('Please select only excel file type');
        setExcelFile(null);
      }
    } else {
      console.log('Error: No selected file');
    }
  };

  // Submit Event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  };

  return (
    <>
      <p className="mb-3">Upload File</p>
      <form className="mb-4" onSubmit={handleFileSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Folder
              </label>
              <select className="form-select">
                <option>Open this select menu</option>
                <option value="1">Folder A</option>
                <option value="2">Folder B</option>
                <option value="3">Folder C</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Select File:
              </label>
              <input
                className="form-control"
                type="file"
                id="file"
                // accept=".xlsx, .csv"
                required
                onChange={handleFile}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-light mb-3">
          Upload
        </button>
        {typeError && (
          <div className="alert alert-info" role="alert">
            {typeError}
          </div>
        )}
      </form>

      {/* View data */}
      {excelData ? (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {Object.keys(excelData[0]).map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {excelData.map((individualExcelData, index) => (
                  <TableRow key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <TableCell key={key}>{individualExcelData[key]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <div className="py-1 py-3 d-flex justify-content-center bg-dark">No File is uploaded yet !</div>
      )}
    </>
  );
}

export default Upload_File;
