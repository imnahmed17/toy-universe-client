import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi';
import img1 from '../../assets/images/banner/banner1.jpg';
import img2 from '../../assets/images/banner/banner2.jpg';
import img3 from '../../assets/images/banner/banner3.jpg';

const Banner = () => {
    return (
        <div className="bg-base-100">
            <div className="carousel w-full h-[calc(100vh-120px)]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute rounded-xl flex justify-center items-end w-full h-full left-0 top-0 bg-gradient-to-t from-[#252525] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white text-center mb-6 space-y-5 md:pl-12 md:w-1/2'>
                            <h2 className='text-5xl font-semibold'>Avengers Action Figures</h2>
                            <p className="text-lg px-1">Discover the Magic of Playtime with Toy Universe - Your Ultimate Toy Destination!</p>
                            <div>
                                <Link to="/all-toys" className="btn bg-blue-600 hover:bg-blue-800 mr-5">
                                    <span className="mr-3">Visit Store</span> <HiShoppingCart size={18} />
                                </Link>
                                <Link to="/blogs" className="btn btn-outline btn-accent">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute rounded-xl flex justify-center items-end w-full h-full left-0 top-0 bg-gradient-to-t from-[#252525] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white text-center mb-6 space-y-5 md:pl-12 md:w-1/2'>
                            <h2 className='text-5xl font-semibold'>Guardians of the Galaxy Action Figures</h2>
                            <p className="text-lg px-1">Discover the Magic of Playtime with Toy Universe - Your Ultimate Toy Destination!</p>
                            <div>
                                <Link to="/all-toys" className="btn bg-blue-600 hover:bg-blue-800 mr-5">
                                    <span className="mr-3">Visit Store</span> <HiShoppingCart size={18} />
                                </Link>
                                <Link to="/blogs" className="btn btn-outline btn-accent">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute rounded-xl flex justify-center items-end w-full h-full left-0 top-0 bg-gradient-to-t from-[#252525] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white text-center mb-6 space-y-5 md:pl-12 md:w-1/2'>
                            <h2 className='text-5xl font-semibold'>DC Action Figures</h2>
                            <p className="text-lg px-1">Discover the Magic of Playtime with Toy Universe - Your Ultimate Toy Destination!</p>
                            <div>
                                <Link to="/all-toys" className="btn bg-blue-600 hover:bg-blue-800 mr-5">
                                    <span className="mr-3">Visit Store</span> <HiShoppingCart size={18} />
                                </Link>
                                <Link to="/blogs" className="btn btn-outline btn-accent">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#slide1" className="btn btn-xs">1</a> 
                <a href="#slide2" className="btn btn-xs">2</a> 
                <a href="#slide3" className="btn btn-xs">3</a> 
            </div>
        </div>
    );
};

export default Banner;