import { useEffect, useState } from 'react';
import ToyRow from './ToyRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
    }; 

    useEffect(() => {
        fetch("http://localhost:5000/toys")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    return (
        <div>
            <form onSubmit={handleSearch} className="my-10 flex justify-center gap-3">
                <div className="form-control w-4/6 md:w-1/2">
                    <input type="text" name="toyName" placeholder='toy name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input className="btn btn-primary btn-block" type="submit" value="Search" />
                </div>
            </form>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index) => <ToyRow
                                key={toy._id}
                                index={index}
                                toy={toy} 
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;