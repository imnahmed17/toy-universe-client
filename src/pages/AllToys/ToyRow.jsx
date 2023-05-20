// import { useState } from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy, index }) => {
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy;

    return (
        <tr className="hover">
            <th>{index+1}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td className="text-center">{subCategory}</td>
            <td>${price}</td>
            <td className="text-center">{quantity}</td>
            <td>
                <Link to={`/toy/${_id}`}>
                    <button className="btn btn-active btn-ghost">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default ToyRow;