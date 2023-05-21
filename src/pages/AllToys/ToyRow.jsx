import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ToyRow = ({ toy, index }) => {
    const { _id, sellerName, photo, toyName, subCategory, rating, price, quantity } = toy;

    return (
        <tr className="hover">
            <th>{index+1}</th>
            <td className="text-center">{sellerName}</td>
            <td>
                <div className="avatar">
                    <div className="rounded w-16 h-[117px]">
                        {photo && <img src={photo} alt="" />}
                    </div>
                </div>
            </td>
            <td>{toyName}</td>
            <td className="text-center">{subCategory}</td>
            <td><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></td>
            <td>${price}</td>
            <td className="text-center">{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-sm btn-active btn-ghost">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default ToyRow;