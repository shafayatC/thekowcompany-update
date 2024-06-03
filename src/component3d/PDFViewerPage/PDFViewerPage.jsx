import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the workerSrc to the pdfjs-dist build file or a CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewerPage = ( fileUrl ) => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error while loading document:', error);
    setError(error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        <div className="flex justify-end mb-4">
          <a
            href={fileUrl}
            download
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download PDF
          </a>
        </div>
        {error ? (
          <div className="text-red-500">
            Failed to load PDF file. Please make sure the file URL is correct.
          </div>
        ) : (
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="flex justify-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        )}
      </div>
    </div>
  );
};

export default PDFViewerPage;
