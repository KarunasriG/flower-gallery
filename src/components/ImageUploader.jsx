import { useState } from "react";

const ImageUploader = ({ onUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const newImage = {
                id: Date.now(),
                url: URL.createObjectURL(selectedFile),
                category: "Uncategorized",
            };
            onUpload(newImage);
            setSelectedFile(null);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-3 p-4 border border-gray-300 rounded-lg shadow-md">
            <input type="file" onChange={handleFileChange} className="p-2 border" />
            <button
                onClick={handleUpload}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                Upload Image
            </button>
        </div>
    );
};

export default ImageUploader;
