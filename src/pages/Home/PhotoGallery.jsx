import gallery1 from '../../assets/images/gallery/gallery1.jpg';
import gallery2 from '../../assets/images/gallery/gallery2.jpg';
import gallery3 from '../../assets/images/gallery/gallery3.jpg';
import img1 from '../../assets/images/gallery/img1.jpg';
import img2 from '../../assets/images/gallery/img2.jpg';
import img3 from '../../assets/images/gallery/img3.jpg';
import img4 from '../../assets/images/gallery/img4.jpg';
import img5 from '../../assets/images/gallery/img5.jpg';
import img6 from '../../assets/images/gallery/img6.jpg';
import PhotoSlider from './PhotoSlider';

const PhotoGallery = () => {
    return (
        <div className="mt-5 px-4">
            <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-[#800080]">Photo Gallery</h3>
                <p className="mt-2 text-justify">Welcome to Toy Universe, where playtime never ends! Our photo gallery features a wide selection of toys, games and fun activities for children of all ages. From DC to Marvel action figures, we&apos;ve got it all. Imagination knows no bounds at Toy Universe, so let your children&apos;s creativity run wild as they explore the magical world of toys. We believe that play is important for children&apos;s development, which is why we offer a diverse range of toys to suit everyone&apos;s interests. Come check out our photo gallery and discover the endless fun that awaits at Toy Universe!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-4 grid-cols-1">
                    <div>
                        <img src={gallery1} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        <div>
                            <img src={img1} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                        </div>
                        <div>
                            <img src={img2} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1">
                    <div>
                        <img src={gallery3} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        <div>
                            <img src={img5} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                        </div>
                        <div>
                            <img src={img6} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1">
                    <div>
                        <img src={gallery2} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        <div>
                            <img src={img4} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                        </div>
                        <div>
                            <img src={img3} alt="" className="transition duration-700 ease-in-out hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
            <PhotoSlider />
        </div>
    );
};

export default PhotoGallery;