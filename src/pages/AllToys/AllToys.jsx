import { useEffect, useState } from 'react';
import ToyRow from './ToyRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useTitle("All Toys");

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        
        fetch(`https://toy-universe-server-lake.vercel.app/toys?toyName=${toyName}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }; 

    useEffect(() => {
        fetch("https://toy-universe-server-lake.vercel.app/toys")
            .then(res => res.json())
            .then(data => setToys(data));
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
                            <th className="text-center">Seller</th>
                            <th className="text-center">Image</th>
                            <th>Toy Name</th>
                            <th className='text-center'>Sub Category</th>
                            <th className="text-center">Rating</th>
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