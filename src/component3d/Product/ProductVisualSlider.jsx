import React from 'react';
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import Heading from '../Heading/Heading';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductVisualSlider = () => {
    const sliderList = [
        {
            "image": "/img/Fashion Accessories.webp",
            "label": "Fashion Accessories",
            "link": "#"
        },
        {
            "image": "/img/Tech Accessories.webp",
            "label": "Tech Accessories",
            "link": "#"
        },

        {
            "image": "/img/Packaging.webp",
            "label": "Packaging",
            "link": "#"
        },
        {
            "image": "/img/Cosmetics-update.webp",
            "label": "Cosmetics",
            "link": "#"
        },
        {
            "image": "/img/Furniture.webp",
            "label": "Furniture",
            "link": "#"
        },
        {
            "image": "/img/Tech Equipment.webp",
            "label": "Tech Equipment",
            "link": "#"
        },

    ]

    return (
        <div className=' py-6' >
            <div>
                <Heading className="pt-12 pb-7 md:pt-12 md:pb-16" titleClassName="w-[1500px]" title="PRODUCT VISUALIZATION" />
                <div className='2xl:container 2xl:mx-auto '>
                    <div className='relative w-full '>
                        <Carousel uniqueId="id_125" delay={5000}
                            item={3}
                            indicators={false}
                            responsive={[
                                {
                                    breakPoint: 641,
                                    item: 1
                                },
                                {
                                    breakPoint: 1025,
                                    item: 2,
                                }
                            ]
                            }
                        >
                            {sliderList.map((item, index) => (
                                // <div className='h-full px-2'><img loading="lazy" src={item.image}/></div>
                                <div className='relative flex flex-col md:block mx-2 cursor-pointer'>
                                    <div>
                                        {/* <img loading="lazy" src={item.image} className="w-full object-cover"  alt='product visual' /> */}
                                        <LazyLoadImage
                                            src={item.image} 
                                            className="w-full object-cover"
                                            alt='product visual'
                                            effect="blur" />
                                    </div>
                                    <div className='w-full flex gap-3 py-4 justify-center'>
                                        <h2 className='text-black font-medium'>{item.label}</h2>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductVisualSlider;