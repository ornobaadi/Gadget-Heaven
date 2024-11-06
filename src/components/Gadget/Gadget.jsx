import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {

    const { gadgetId, image, title, price } = gadget;

    return (
        <div className="card card-compact bg-base-100 w-80 mx-16 shadow-xl">
            <figure>
                <img
                    src={image}
                    className="h-[200px]"
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: {price}$</p>
                <Link to={`/gadgets/${gadgetId}`}>
                    <button className="btn text-[#9538E2] border-[#9538E2] rounded-full ">View details</button>
                </Link>
            </div>
        </div>
    );
};

export default Gadget;