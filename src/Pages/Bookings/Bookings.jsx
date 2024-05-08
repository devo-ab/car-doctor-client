import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter((booking) => booking._id !== id);
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleConfrim = (id) => {
    Swal.fire({
        title: "Are you sure to confirm?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Updated!",
                  text: "Your file has been updated.",
                  icon: "success",
                });
                const remaining = bookings.filter((booking) => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id)
                updated.status= 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
              }
            });
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingsRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleConfrim={handleConfrim}
            ></BookingsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
