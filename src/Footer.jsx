const Footer = () => {
    return (
        <footer>
            <div className="flex items-center justify-center h-[10svh]">
                <nav>
                    <ul className="flex items-center justify-center mt-[75px] flex-col sm:flex-row">
                        <li className="py-1 sm:px-5 text-sm font-semibold text-gray-500 relative"><a href="">Tesla @ 2024</a></li>
                        <li className="py-1 sm:px-5 text-sm font-semibold text-gray-500 relative"><a href="">Privacy & Legal</a></li>
                        <li className="py-1 sm:px-5 text-sm font-semibold text-gray-500 relative"><a href="">Contact</a></li>
                        <li className="py-1 sm:px-5 text-sm font-semibold text-gray-500 relative"><a href="">Careers</a></li>
                        <li className="py-1 sm:px-5 text-sm font-semibold text-gray-500 relative" ><a href="">Get Newsletter</a></li>
                        <li className="py-1 sm:px-5 text-sm font-semibold text-gray-500 relative"><a href="">Locations</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
export default Footer