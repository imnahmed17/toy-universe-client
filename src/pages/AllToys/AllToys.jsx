import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyRow from './ToyRow';
import useTitle from '../../hooks/useTitle';
import './AllToys.css';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    useTitle("All Toys");

    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalToys / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        
        fetch(`https://toy-universe-server-lake.vercel.app/toys?toyName=${toyName}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }; 

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://toy-universe-server-lake.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setToys(data);
        }

        fetchData();
    }, [currentPage, itemsPerPage]);

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
                            <th className="text-center">Seller Info</th>
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
                <div className="btn-group pagination">
                    {
                        pageNumbers.map(number => <button
                            key={number}
                            className={currentPage === number ? 'selected btn btn-sm border-0' : 'btn btn-sm border-0'}
                            onClick={() => setCurrentPage(number)}
                        >{number + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;