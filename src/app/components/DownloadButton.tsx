'use client';
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = '/cv.pdf'; // File path from public folder
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'cv.pdf'; // Suggested file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={handleDownload}
      className=""
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
