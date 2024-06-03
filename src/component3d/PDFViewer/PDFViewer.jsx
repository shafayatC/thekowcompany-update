import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import pdfFile from './sample.pdf';
import './style.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFViewer = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [formActive, setFormActive] = useState("");

  const [pdfVisible, setPdfVisible] = useState(false);
  const defaultPageView = 3;


 
  const handlePageClick = (pageNum) => {
    if (pageNum <= defaultPageView && pageNum > 0) {
      setPageNumber(pageNum);
      formActive == 'active' && setFormActive('deactive')
    } else if (pageNum > defaultPageView) {
      setFormActive('active')
    }
  };

  

  const ld = ()=>{

    setPdfVisible(false)
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
   
    setPdfVisible(true)
  }

  return (
    <div id='pdfViewBodyWrap' className="fwidth">

 

      <div className={`pdfview_wrap  ${pdfVisible == true && 'active'}`}>
        <div className='viewPdfBody fwidth'>
          <div className='viewPdf fwidth'>
              <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}  loading={ld} className="pdfViewcon_wrap">
                <Page width={500} devicePixelRatio={2} pageNumber={pageNumber} renderTextLayer={false} className="pdfViewFile" />
              </Document>
          </div>
        </div>

        <div className='pdf_nav_wrap fwidth'>
          <div className='pdf_nav'>
            <button onClick={() => handlePageClick(pageNumber - 1)} className='pdfBtn'><i className="fa fa-long-arrow-left" aria-hidden="true"></i></button>
            <p id="pageInfo">
              {pageNumber} of <span className="glyphicon glyphicon-asterisk"></span> {numPages}
            </p>
            <button onClick={() => handlePageClick(pageNumber + 1)} className='pdfBtn'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>

          </div>
        </div>
      </div>

      
     


    </div>
  );
}

export default PDFViewer;