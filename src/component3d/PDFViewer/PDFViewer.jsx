import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '/Creative-Showcase.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import './style.css';
import { GrDownload } from "react-icons/gr";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfVisible, setPdfVisible] = useState(false);

  useEffect(() => {
    if (numPages !== null) {
      setPdfVisible(true);
    }
  }, [numPages]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  return (
    <div id="pdfViewBodyWrap" className="fwidth">

      <div className={`pdfview_wrap ${pdfVisible && 'active'}`}>
        <a target='_blank' rel='noreferrer' href="https://demo.thekowcompany.com/emailTempleteImage/Creative_Showcase.pdf" download className=' fixed top-[10px] right-8  z-50'>
          <GrDownload className='text-2xl font-extrabold absolute top-0 right-2 cursor-pointer bg-white p-1' />
        </a>
        <div className="viewPdfBody fwidth">

          <div className="viewPdf fwidth">
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error} // add error handling
              className="pdfViewcon_wrap"
            >
              {Array.from(
                new Array(numPages),
                (el, index) => (
                  
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    className="pdfViewFile"
                  />
                )
              )}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFViewer;
