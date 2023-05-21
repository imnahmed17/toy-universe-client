import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import CategoryTabs from "./CategoryTabs";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner />
            <PhotoGallery />
            <CategoryTabs />
        </div>
    );
};

export default Home;