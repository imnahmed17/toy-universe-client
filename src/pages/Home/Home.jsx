import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import CategoryTabs from "./CategoryTabs";
import LocateUs from "./LocateUs";
import PhotoGallery from "./PhotoGallery";
import PhotoSlider from "./PhotoSlider";

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner />
            <PhotoSlider />
            <PhotoGallery />
            <CategoryTabs />
            <LocateUs />
        </div>
    );
};

export default Home;