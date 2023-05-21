import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import useTitle from '../../hooks/useTitle';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { toyName, photo, sellerName, email, subCategory, quantity, price, rating, description } = toy;
    useTitle("Toy Details");
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row gap-10">
                <img src={photo} className="md:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <p className="mt-2 py-2 text-lg">
                        <span className="font-semibold">Seller Name:</span> {sellerName}
                    </p>
                    <p className="text-lg"><span className="font-semibold">Email:</span> {email}</p>
                    <p className="py-2 text-lg"><span className="font-semibold">Sub Category:</span> {subCategory}</p>
                    <p className="text-lg"><span className="font-semibold">Quantity:</span> {quantity}</p>
                    <p className="py-2 text-lg"><span className="font-semibold">Price:</span> ${price}</p>
                    <div className="flex gap-2">
                        <p className="text-lg"><span className="font-semibold">Rating:</span></p>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    </div>
                    <p className="py-2 text-lg"><span className="font-semibold">Description:</span> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;