import { Helmet } from 'react-helmet-async';
const Special = () => {
    return (
        <div className='text-center'>
            <Helmet>
                <title>Special | Gadget Heaven</title>
            </Helmet>
            <h3 className='text-5xl'>Special Page</h3>
        </div>
    );
};

export default Special;