import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// This will allow the use of worker files from a CDN or your local installation.
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const PDFViewer = ({ pdfFile }) => {
    return (
        <div>
            <Document file={pdfFile}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PDFViewer;
