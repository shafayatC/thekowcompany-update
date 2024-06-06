import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '/Creative-Showcase.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import './style.css';
import { GrDownload } from "react-icons/gr";
import { FaSpinner } from "react-icons/fa";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pagesVisible, setPagesVisible] = useState({});
  const [pdfVisible, setPdfVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const observer = useRef(null);

  useEffect(() => {
    if (numPages !== null) {
      setPdfVisible(true);
      setLoading(false); // Hide loader when PDF is loaded
    }
  }, [numPages]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onPageVisible = useCallback((pageNumber) => {
    setPagesVisible(prev => ({ ...prev, [pageNumber]: true }));
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNumber = parseInt(entry.target.dataset.pageNumber, 10);
          onPageVisible(pageNumber);
        }
      });
    });

    return () => observer.current.disconnect();
  }, [onPageVisible]);

  const observePage = useCallback(node => {
    if (node !== null) {
      observer.current.observe(node);
    }
  }, []);

  const clickableAreas = [
    { page: 30, x: 100, y: 150, width: 50, height: 30, action: () => alert('Clicked on Page 30') },
    // Add more clickable areas as needed
  ];

  return (
    <div id="pdfViewBodyWrap" className="fwidth">
      {loading && (
        <div className="loader">
          <FaSpinner className="spinner" />
        </div>
      )}

      <div className={`pdfview_wrap ${pdfVisible && 'active'}`}>
        <a target='_blank' rel='noreferrer' href="https://demo.thekowcompany.com/emailTempleteImage/Creative_Showcase.pdf" download className='fixed top-[10px] right-8 z-50'>
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
                  <div
                    key={`page_${index + 1}`}
                    data-page-number={index + 1}
                    ref={observePage}
                    className="pdfViewFile"
                    style={{ position: 'relative' }}
                  >
                    {pagesVisible[index + 1] ? (
                      <>
                        <Page
                          pageNumber={index + 1}
                          renderTextLayer={false}
                          className="pdfPage"
                        />
                        {clickableAreas
                          .filter(area => area.page === index + 1)
                          .map((area, idx) => (
                            <button
                              key={idx}
                              onClick={area.action}
                              style={{
                                position: 'absolute',
                                top: area.y,
                                left: area.x,
                                width: area.width,
                                height: area.height,
                                background: 'rgba(255, 0, 0, 0.5)',
                                border: 'none',
                                cursor: 'pointer'
                              }}
                            >
                              Click Me
                            </button>
                          ))}
                      </>
                    ) : (
                      <div className="pdfPageLoading">Loading...</div>
                    )}
                  </div>
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
