import { useState } from 'react';
import { Form } from 'react-bootstrap';

function Upload_File() {
  return (
    <>
      <p className="mb-3">Upload File</p>
      <form className="">
        <div className="row">
          <div className="col-6">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Folder
              </label>
              <select class="form-select">
                <option selected>Open this select menu</option>
                <option value="1">Folder A</option>
                <option value="2">Folder B</option>
                <option value="3">Folder C</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label for="file" className="form-label">
                Select File:
              </label>
              <input className="form-control" type="file" id="file" accept=".xlsx, .csv, .pdf" required />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-light">
          Upload
        </button>
      </form>
    </>
  );
}

export default Upload_File;
