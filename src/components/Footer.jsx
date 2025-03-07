const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Flower Gallery. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-green-400 transition">Facebook</a>
                    <a href="#" className="hover:text-green-400 transition">Instagram</a>
                    <a href="#" className="hover:text-green-400 transition">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
