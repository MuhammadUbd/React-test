import React from 'react';
import { Carousel } from 'antd';
import "./Carousel.css"


const Carosel = () => {
    return (
        <>
            <div className='carousel-wrapper'>
                <Carousel autoplay>
                    <div>
                        <h3 className="caro-style"></h3>
                    </div>
                    <div>
                        <h3 className='caro-style1'></h3>
                    </div>
                    <div>
                        <h3 className='caro-style2'></h3>
                    </div>
                </Carousel>
            </div>
        </>
    )
}
export default Carosel

{/* <img alt="We picked every item with care you must try" srcset="/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&amp;w=1920&amp;q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&amp;w=3840&amp;q=100 2x" src="/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-4.jpg&amp;w=3840&amp;q=100" decoding="async" data-nimg="intrinsic" class="bg-gray-300 object-cover w-full rounded-md" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"> */ }

// const contentStyle = {
//     margin: 0,
//     height: '250px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };