import Image from 'next/image';


const productsList = [
    {
        image: "/Images/GENESISHOMME1.jpg",
        title: "Genesis Homme Spray de Force Épaississant"
    },
    {
        image: "/Images/GENESISHOMME2.jpg",
        title: "Genesis Homme Bain de Masse Épaississant"
    },
    {
        image: "/Images/GENESISHOMME3.jpg",
        title: "Genesis Homme Cire d'Épaisseur Texturisante"
    },
    {
        image: "/Images/GENESISHOMME4.jpg",
        title: "Genesis Homme Routine"
    },
    {
        image: "/Images/GENESISHOMME5.jpg",
        title: "Genesis Homme Routine 2"
    },
    {
        image: "/Images/GENESISHOMME6.jpg",
        title: "Genesis Homme Sérum Anti-Chute Fortifiant"
    },
    {
        image: "/Images/GENESIS_BAINHYDRA_TEXTURE_ECOMM.jpg",
        title: "Genesis Bain Hydra-Fortifiant Shampoo"
    },
    {
        image: "/Images/GENESIS_MASQUEBOX_ECOMM.jpg",
        title: "Genesis Masque Box"
    }
];



const Product = () => {


    return (
        <section className="light py-10 lg:py-20 lg:mb-48 mb-0 md:mb-48 bg-gray-100 text-black text-opacity-80">
            <div className="container px-4 mx-auto">
                <div className="justify-center mb-6 md:mb-12 space-y-4">
                    <h3 className="text-xl lg:text-[2rem] font-bold text-[#D4A745] font-Dancing">Produkte</h3>
                    <h1 className='text-xl lg:text-[1.5rem] font-semibold'>Entdecken Sie unser exquisites Sortiment an Schönheitsprodukten</h1>
                </div>

                <div className="grid grid-cols-12 gap-2 md:gap-6">
                    {productsList.map((product, i) => (
                        <div
                            className="col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3"
                            key={i}
                        >
                            <div className="rounded-xl overflow-hidden duration-300 relative hover:-translate-y-1">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={400}
                                    height={300}
                                    className="object-cover"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-white bg-opacity-40 backdrop-blur scale-100 opacity-0 flex flex-col justify-center items-center transition duration-300 text-center hover:scale-100 hover:opacity-100 p-4">
                                    <h5 className="text-xl font-medium mb-2">
                                        {product.title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;