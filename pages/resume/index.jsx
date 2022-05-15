import React from 'react';
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../../components/PDFViewer"), {
  ssr: false
});

const resume = () => {
  return (
    <PDFViewer />
  )
};

export default resume;
