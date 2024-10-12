// import React, { useState } from 'react'
// import file from "../assets/CV/MyResumeNew.pdf"
// import { pdfjs } from 'react-pdf';
// import { Document, Page } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
// ).toString();

// function ShowCV() {

//     const [numPages, setNumPages] = useState();
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div className='mx-auto items-center'>
//             <Document file={file} onLoadSuccess={onDocumentLoadSuccess} >
//                 <Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
//             </Document>
//             <p>
//                 Page {pageNumber} of {numPages}
//             </p>
//         </div>
//     )
// }

// export default ShowCV








import React, { useState } from 'react';
import file from "../assets/CV/MyResumeNew.pdf";
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { HiDownload } from 'react-icons/hi'; // Optional: For download icon

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function ShowCV() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="mx-auto max-w-fit object-cover p-4 bg-white rounded-lg shadow-md ">
            {/* Document Viewer */}
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                className="border border-gray-300 rounded mx-auto "
            >
                <Page
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            </Document>

            {/* Page Number Display */}
            <p className="text-center mt-4 text-gray-600">
                Page {pageNumber} of {numPages}
            </p>

            {/* Download Button */}
            <div className="flex justify-center mt-4">
                <a
                    href={file}
                    download="MyResume.pdf"
                    className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
                >
                    <HiDownload className="mr-2" /> {/* Optional icon */}
                    Download CV
                </a>
            </div>
        </div>
    );
}

export default ShowCV;
