import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-7xl font-bold text-purple-500">404</h1>
                    <p className="py-6">
                        Oops! This page was not found. 
                    </p>
                    <Link className="btn btn-outline border border-gray-400 hover:bg-purple-500 " to="/">Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;