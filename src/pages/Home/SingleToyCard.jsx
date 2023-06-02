import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const SingleToyCard = ({ data }) => {
    const { _id, toyName, photo, rating, price } = data;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="w-36 rounded-xl" />
            </figure>
            <div className="card-body">
                <h3 className="card-title">{toyName}</h3>
                <p className="text-orange-600">${price}</p>
                <p><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
                <div className="card-actions">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-active btn-ghost">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToyCard;