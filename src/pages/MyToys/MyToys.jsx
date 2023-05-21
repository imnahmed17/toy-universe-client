import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
import MyToyRow from './MyToyRow';
import UpdateModal from './UpdateModal';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [singleToy, setSingleToy] = useState({});
    const [uniqueId, setUniqueId] = useState(null);
    const [sortType, setSortType] = useState('Ascending');
    useTitle("My Toys");

    const url = `https://toy-universe-server-lake.vercel.app/toys?email=${user?.email}&sort=${sortType}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [url, toys]);

    useEffect(() => {
        if(uniqueId != null) {
            fetch(`https://toy-universe-server-lake.vercel.app/toys/${uniqueId}`)
                .then(res => res.json())
                .then(data => setSingleToy(data));
        }
    }, [uniqueId]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#F87272",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://toy-universe-server-lake.vercel.app/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your toy has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 900,
                            });
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled!",
                    text: "Your toy is safe :)",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 900,
                });
            }
        });
    };

    const handleUpdateToy = (updatedToy, id) => {
        fetch(`https://toy-universe-server-lake.vercel.app/toys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = toys.filter(toy => toy._id !== id);
                    const updated = toys.find(toy => toy._id === id);
                    const newToys = [updated, ...remaining];
                    setToys(newToys);

                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
    };

    return (
        <div className="">
            <div className='my-10'>
                <div className='relative h-10'>
                    <div className="flex items-center gap-3 absolute right-0">
                        <p>Sort by price: </p>
                        <select onChange={e => setSortType(e.target.value)} className='bg-gray-100 p-2 rounded '>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-center">Image</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToyRow
                                key={toy._id}
                                toy={toy} 
                                handleDelete={handleDelete}
                                setUniqueId={setUniqueId}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            <UpdateModal 
                singleToy={singleToy} 
                handleUpdateToy={handleUpdateToy} 
            />
        </div>
    );
};

export default MyToys;