import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    useTitle("Add A Toy");

    const handleAddAToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellerName = user?.displayName;
        const email = user?.email;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const subCategory = form.subCategory.value;
        const quantity = form.quantity.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const description = form.description.value;
        const toy = { sellerName, email, toyName, photo, subCategory, quantity, price, rating, description };
        console.log(toy);

        fetch("https://toy-universe-server-lake.vercel.app/toys", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toy)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Toy Added Successfully",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                }
            });
    };

    return (
        <div className="px-2">
            <h2 className="text-center text-3xl my-6">Add Toys</h2>
            <form onSubmit={handleAddAToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder='toy name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder='https://image.png' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="subCategory" className="select select-bordered" required>
                            <option value="dc">DC</option>
                            <option value="avengers">Avengers</option>
                            <option value="guardians_of_the_galaxy">Guardians of the Galaxy</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder='0' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder='$10' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder='5' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered h-24" placeholder="toy description" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;