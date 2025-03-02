import { useState } from "react";
import ImageUploader from "../components/ImageUploader";

const initialImages = [
    { id: 1, url: "/images/wedding1.jpeg", category: "Wedding" },
    { id: 2, url: "/images/mangalaSnanam1.jpeg", category: "MangalaSnanam" },
    { id: 3, url: "/images/reception1.jpeg", category: "Reception" },
    { id: 4, url: "/images/mangalaSnanam2.jpeg", category: "MangalaSnanam" },
    { id: 5, url: "/images/reception2.jpeg", category: "Wedding" },
    { id: 6, url: "/images/birthday1.jpeg", category: "Birthday" },
];

const categories = ["All", "Wedding", "Birthday", "Reception", "MangalaSnanam"];


const Gallery = () => {

    const [images, setImages] = useState(initialImages);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);


    const handleUpload = (newImage) => {
        setImages([...images, newImage]);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    //  Filter images based on selected category
    const filteredImages =
        selectedCategory === "All"
            ? images
            : images.filter((img) => img.category === selectedCategory);

    return (
        <div className="container mx-auto p-4 mt-16">

            {/* Image Uploader */}
            {/* <div className="mb-6 flex justify-center">
                <ImageUploader onUpload={handleUpload} />
            </div> */}

            {/* Category Filter */}
            <div className="flex justify-center space-x-4 mb-6">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg ${selectedCategory === category
                            ? "bg-green-600 text-white"
                            : "bg-gray-200"
                            } hover:bg-green-700 transition`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* ✅ Debugging: Show current selectedCategory */}
            <p className="text-center mb-4">Selected Category: {selectedCategory}</p>
            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.length > 0 ? (
                    filteredImages.map((img) => (
                        <div key={img.id} className="relative">
                            <img
                                key={img.id}
                                src={img.url}
                                alt="Flower Decoration"
                                className="w-full h-48 object-cover rounded-lg 
                        shadow-md cursor-pointer hover:scale-105transition-transform duration-300 ease-in-out"
                                onClick={() => setSelectedImage(img.url)}
                            />
                            <p className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
                                {img.category}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No images in this category
                    </p>
                )}
            </div>

            {/* Full-Screen Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Enlarged"
                            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                        />
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-white bg-white-600 hover:bg-gray-800 p-2 rounded-full shadow-lg transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
