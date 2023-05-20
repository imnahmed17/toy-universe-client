import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from "sweetalert2";
import MyToyRow from './MyToyRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [url]);

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
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
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

    return (
        <div className="mt-10">
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
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;