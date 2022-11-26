// import { useState } from "react";
// import * as Styled from './index.styled';
// // import default react-pdf entry
// import { Document, Page, pdfjs } from "react-pdf";
// // import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// import workerSrc from "../../pdf-worker"

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// export default function PDFViewer() {
//   const [file, setFile] = useState("./assets/resume.pdf");
//   const [numPages, setNumPages] = useState(null);

//   function onFileChange(event) {
//     setFile(event.target.files[0]);
//   }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <Styled.PDFContainer>
//       {/* <div>
//         <label htmlFor="file">Load from file:</label>{" "}
//         <input onChange={onFileChange} type="file" />
//       </div> */}
//         <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from({ length: numPages }, (_, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//               scale={2}
//             />
//           ))}
//         </Document>
//     </Styled.PDFContainer>
//   );
// }