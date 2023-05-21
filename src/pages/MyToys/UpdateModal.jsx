// import Swal from "sweetalert2";

const UpdateModal = ({ singleToy, handleUpdateToy }) => {
    const { _id, toyName, quantity, price, description } = singleToy;

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const updatedToy = { quantity, price, description };
        console.log(updatedToy);
        handleUpdateToy(updatedToy, _id);

        // fetch(`http://localhost:5000/toys/${_id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updatedToy)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.modifiedCount > 0) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Toy Updated Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'OK'
        //             });
        //         }
        //     });
    };

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{toyName}</h3>
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered h-24" defaultValue={description} required></textarea>
                        </div>
                        <div className="form-control mt-5">
                            <input className="btn btn-primary" type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;