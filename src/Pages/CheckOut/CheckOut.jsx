import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const CheckOut = () => {
  const checkData = useLoaderData();
  const {_id, title, price, img} = checkData;

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phoneNumber = form.phone.value;
    const email = form.email.value;
    const message = form.message.value

    const booking = {
        name, email, date, phoneNumber, message,img, service: title, service_id: _id, price: price
    }
    console.log(booking)
    fetch('https://car-doctor-server-eight-sooty.vercel.app/bookings',{
        method: "POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: "Success",
                text: "Successfully Placed Your Order",
                icon: "Success"
              });
        }
    })
  }

  return (
    <div className="mt-10">
      <section className="p-6 bg-[#F3F3F3] rounded-lg">
        <form onSubmit={handleOrder} className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-md py-2 px-6"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="w-full rounded-md py-2 px-6"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full rounded-md py-2 px-6"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-md py-2 px-6"
                />
              </div>
              <div className="col-span-full">
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  className="w-full rounded-md py-4 px-6"
                />
              </div>
              <div className="col-span-full">
                <button type="submit" className="btn btn-ghost bg-[#FF3811] text-lg font-semibold text-white w-full">Order Confrim</button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default CheckOut;
