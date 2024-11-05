import { Helmet } from 'react-helmet-async';
const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <div className='flex flex-col items-center py-5 text-center mt-5 text-white bg-[#9538E2]'>
                <h3 className="text-5xl font-bold my-5">Statistics</h3>
                <p className='w-2/5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            
        </div>
    );
};

export default Statistics;