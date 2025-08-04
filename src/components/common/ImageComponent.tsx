import React, { useState, useRef } from "react";

const ImageComponent = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = (file) => {
    // Check file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please select a JPG, JPEG, or PNG file.");
      return;
    }

    // Check file size (2MB = 2 * 1024 * 1024 bytes)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File size must be less than 2MB.");
      return;
    }

    setSelectedFile(file);

    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="">
      {/* Upload Area - Only show when no image is selected */}
      {!selectedFile && (
        <div
          className={`relative rounded-lg border-2 border-dashed p-4 text-center transition-all duration-200 ${
            isDragOver
              ? "border-purple-400 bg-purple-50"
              : "border-purple-300 bg-white hover:border-purple-400 hover:bg-purple-50"
          } `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Upload Icon */}
          <div className="mb-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* File Type Info */}
          <div className="mb-2">
            <p className="text-lg font-medium text-gray-700">
              JPG, JPEG or PNG
            </p>
            <p className="text-sm text-gray-500">Max 2 MB (1:1 ratio)</p>
          </div>

          {/* Choose File Button */}
          <button
            onClick={handleChooseFile}
            className="mt-4 inline-flex items-center rounded-lg bg-[#000203] px-6 py-2 font-medium text-white transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
          >
            Choose File
          </button>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileInputChange}
            className="hidden"
          />

          {/* Drag and Drop Text */}
        </div>
      )}

      {/* Image Preview Block - Show when image is selected */}
      {selectedFile && imagePreview && (
        <div className="relative">
          {/* Image Display */}
          <div className="aspect-square h-[200px] w-full overflow-hidden rounded-lg border-2 border-purple-300 bg-gray-100">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image Info Overlay */}
          <div className="bg-opacity-60 absolute right-0 bottom-0 left-0 rounded-b-lg bg-black p-3 text-white">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-300">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setImagePreview(null);
                }}
                className="ml-3 text-white transition-colors hover:text-red-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Change Image Button */}
          <button
            onClick={handleChooseFile}
            className="bg-opacity-90 hover:bg-opacity-100 absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-md transition-all duration-200 hover:shadow-lg"
          >
            Change
          </button>

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
