import { useState } from 'react'
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";


const ITEMS_PER_PAGE = 12;
const PhotoGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: "/21731412_799992886827845_2161480800557884949_o.jpg", alt: "21731412 799992886827845 2161480800557884949 o - Ken's Tree Service", title: "Photo Gallery 1" },
        { src: "/21762272_799992670161200_437182094180226870_o-400x284.jpg", alt: "21762272 799992670161200 437182094180226870 o - Ken's Tree Service", title: "Photo Gallery 2" },
        { src: "/25488113_844434852383648_5012362303994108244_o-400x284.jpg", alt: "25488113 844434852383648 5012362303994108244 o - Ken's Tree Service", title: "Photo Gallery 3" },
        { src: "/32407342_918106928349773_8764264213578252288_n-400x284.jpg", alt: "32407342 918106928349773 8764264213578252288 n - Ken's Tree Service", title: "Photo Gallery 4" },
        { src: "/32498232_918103371683462_7686778002729861120_n.jpg", alt: "32498232 918103371683462 7686778002729861120 n - Ken's Tree Service", title: "Photo Gallery 5" },
        { src: "/33990821_926428700850929_7072344555504271360_n-400x284.jpg", alt: "33990821 926428700850929 7072344555504271360 n - Ken's Tree Service", title: "Photo Gallery 6" },
        { src: "/36240542_946945028799296_1795664898051538944_n-400x284.jpg", alt: "36240542 946945028799296 1795664898051538944 n - Ken's Tree Service", title: "Photo Gallery 7" },
        { src: "/38612377_989310431229422_6230231288440160256_n-400x284.jpg", alt: "38612377 989310431229422 6230231288440160256 n - Ken's Tree Service", title: "Photo Gallery 8" },
        { src: "/38668235_989310174562781_3587591873180467200_n-400x284.jpg", alt: "38668235 989310174562781 3587591873180467200 n - Ken's Tree Service", title: "Photo Gallery 9" },
        { src: "/39799789_1006525902841208_1908734572158255104_n-400x284.jpg", alt: "39799789 1006525902841208 1908734572158255104 n - Ken's Tree Service", title: "Photo Gallery 10" },
        { src: "/39846733_1006526109507854_187030484117618688_n-400x284.jpg", alt: "39846733 1006526109507854 187030484117618688 n - Ken's Tree Service", title: "Photo Gallery 11" },
        { src: "/47300128_1070645999762531_1703345697010483200_n-400x284.jpg", alt: "47300128 1070645999762531 1703345697010483200 n - Ken's Tree Service", title: "Photo Gallery 12" },
        { src: "/51133961_1109307649229699_599557342664589312_n-400x284.jpg", alt: "51133961 1109307649229699 599557342664589312 n - Ken's Tree Service", title: "Photo Gallery 13" },
        { src: "/92230384_1448758725284588_2461394866270109696_n-400x284.jpg", alt: "92230384 1448758725284588 2461394866270109696 n - Ken's Tree Service", title: "Photo Gallery 14" },
        { src: "/107247871_1523250347835425_7147649283087778080_n-400x284.jpg", alt: "107247871 1523250347835425 7147649283087778080 n - Ken's Tree Service", title: "Photo Gallery 15" },
        { src: "/117161000_1549669025193557_4915917293761008050_n-400x284.jpg", alt: "117161000 1549669025193557 4915917293761008050 n - Ken's Tree Service", title: "Photo Gallery 16" },
        { src: "/117234206_1549671068526686_4566334105761471143_n-400x284.jpg", alt: "117234206 1549671068526686 4566334105761471143 n - Ken's Tree Service", title: "Photo Gallery 17" },
        { src: "/301616262_483491860453054_79566879866319948_n-400x284.jpg", alt: "301616262 483491860453054 79566879866319948 n - Ken's Tree Service", title: "Photo Gallery 18" },
        { src: "/301625125_483491857119721_5793800417287341050_n-400x284.jpg", alt: "301625125 483491857119721 5793800417287341050 n - Ken's Tree Service", title: "Photo Gallery 19" },
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

    const currentImages = images.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const navigate = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentImageIndex - 1 + images.length) % images.length;
        } else {
            newIndex = (currentImageIndex + 1) % images.length;
        }
        setCurrentImageIndex(newIndex);
    };

    return (
        <div>
            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
                    >
                        <FaTimes />
                    </button>

                    <button
                        onClick={() => navigate('prev')}
                        className="absolute left-4 text-white text-3xl hover:text-gray-300 transition-colors"
                    >
                        <FaChevronLeft size={40} />
                    </button>

                    <div className="max-w-4xl w-full mx-16">
                        <img
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            className="max-h-[80vh] w-full object-contain"
                        />
                    </div>

                    <button
                        onClick={() => navigate('next')}
                        className="absolute right-4 text-white text-3xl hover:text-gray-300 transition-colors"
                    >
                        <FaChevronRight size={40} />
                    </button>
                </div>
            )}
            {/* Hero Section */}
            <section className="relative w-full mb-12">
                <div className="h-70 w-full">
                    <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
                            Photo Gallery
                        </h1>
                    </div>
                </div>
            </section>

            <div className="w-full py-10">
                <div className="w-11/12 md:w-9/12 mx-auto py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-20 border-b-2 border-b-[#666]">
                        {currentImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    fetchpriority="high"
                                    decoding="async"
                                    src={image.src}
                                    alt={image.alt}
                                    title={image.title}
                                    className="w-full h-60 md:h-64 lg:h-72 object-cover border-4 border-black shadow-xl shadow-[#333] group-hover:opacity-80 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-[#afb236] bg-opacity-50 rounded-full p-3">
                                        <FaPlus className="text-white text-2xl" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="mt-2 flex justify-end">
                        <div className="flex border border-[#444] divide-x divide-[#444] text-sm">
                            {/* Prev button – hidden on first page */}
                            {currentPage > 1 && (
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    className="px-4 py-2 bg-[#222] text-white hover:bg-white hover:text-black transition-colors"
                                >
                                    Prev
                                </button>
                            )}

                            {/* Page numbers */}
                            {[...Array(totalPages).keys()].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => goToPage(num + 1)}
                                    className={`px-4 py-2 hover:cursor-pointer hover:bg-white ${currentPage === num + 1
                                            ? "bg-[#222] text-[#afb236] font-semibold"
                                            : "bg-[#222] text-white hover:text-black"
                                        } transition-colors`}
                                >
                                    {num + 1}
                                </button>
                            ))}

                            {/* Next button – hidden on last page */}
                            {currentPage < totalPages && (
                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    className="px-4 py-2 bg-[#222] text-white hover:bg-white hover:text-black hover:cursor-pointer transition-colors"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhotoGallery
