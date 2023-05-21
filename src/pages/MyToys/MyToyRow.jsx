// import React from 'react';

const MyToyRow = ({ toy, handleDelete, setUniqueId }) => {
    const { _id, photo, toyName, subCategory, price, quantity, description } = toy;

    return (
        <tr className="hover">
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-16 h-[117px]">
                        {photo && <img src={photo} alt="" />}
                    </div>
                </div>
            </td>
            <td>{toyName.substring(19, 60)}</td>
            <td className="text-center">{subCategory}</td>
            <td>${price}</td>
            <td className="text-center">{quantity}</td>
            <td>{description.substring(0, 40)}...</td>
            <td>
                <label htmlFor="my-modal-3" onClick={() => setUniqueId(_id)} className="btn btn-sm btn-active btn-ghost normal-case">Wanna Change?</label>
            </td>
        </tr>
    );
};

export default MyToyRow;