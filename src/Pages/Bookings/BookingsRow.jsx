import PropTypes from "prop-types";

const BookingsRow = ({ booking, handleDelete, handleConfrim }) => {
  const { _id, name, email, date, service, img, price, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="mask w-28 h-20">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>${price}</td>
      <th>
        { status === 'confirm' ? <span>Confirmed</span> :
          <button onClick={() => handleConfrim(_id)} className="btn btn-ghost btn-xs">
            Confirm
          </button>
        }
      </th>
    </tr>
  );
};

BookingsRow.propTypes = {
  booking: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleConfrim: PropTypes.func.isRequired,
};

export default BookingsRow;
