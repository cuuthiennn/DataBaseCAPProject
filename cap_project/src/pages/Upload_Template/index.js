import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

import * as XLSX from 'xlsx';
import ModelAddFormat from './ModalAddFormat';
import SelectWorkingRole from './SelectWorkingRole';

function Upload_Template() {
  // Onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [formatExcel, setFormatExcel] = useState(null);

  //
  const [isShowModelAddFormat, setIsShowModelAddFormat] = useState(false);

  // Submit state
  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    const fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onloadend = (e) => {
          setExcelFile(e.target.result);
          const workbook = XLSX.read(e.target.result, { type: 'buffer' });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          setExcelData(data.slice(0, 10));
        };
      } else {
        toast.error('Please select only excel file type');
        setExcelFile(null);
      }
    } else {
      console.log('Error: No selected file');
    }
  };

  // Submit Event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    const columnFormats = [];

    if (!excelData || excelData.length < 1) {
      toast.error('Please select only excel file type');
    } else {
      const firstRow = excelData[0];
      for (let columnName in firstRow) {
        const columnData = excelData.map((row) => row[columnName]);

        const sampleData = columnData.slice(0, 10);

        // Kiểm tra xem toàn bộ 10 hàng đầu có kiểu dữ liệu giống nhau không
        const areAllSameType = sampleData.every((value) => typeof value === typeof sampleData[0]);
        if (areAllSameType) {
          // Nếu toàn bộ 10 hàng đầu giống nhau về kiểu dữ liệu, xác định kiểu dữ liệu của cột
          const dataType = typeof sampleData[0];
          columnFormats.push({ columnName, dataType });
        } else {
          // Nếu có kiểu dữ liệu khác nhau, xuất thông báo
          console.log(`Column ${columnName} has different data types.`);
        }
      }
      setFormatExcel(columnFormats);
      setIsShowModelAddFormat(true);
    }
  };

  return (
    <>
      <h3 className="mb-3">Upload Template</h3>
      <form className="mb-4" onSubmit={handleFileSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Folder
              </label>
              {/* <select className="form-select">
                <option>Open this select menu</option>
                <option value="1">Folder A</option>
                <option value="2">Folder B</option>
                <option value="3">Folder C</option>
              </select> */}
              <SelectWorkingRole />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Select File:
              </label>
              <input className="form-control" type="file" id="file" required onChange={handleFile} />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-light mb-3">
          Upload
        </button>
      </form>
      {/* View data */}
      {excelData ? (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyheader="true" aria-label="sticky table">
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
      <ModelAddFormat
        show={isShowModelAddFormat}
        handleClose={() => setIsShowModelAddFormat(false)}
        formatExcel={formatExcel}
      />
    </>
  );
}

export default Upload_Template;
