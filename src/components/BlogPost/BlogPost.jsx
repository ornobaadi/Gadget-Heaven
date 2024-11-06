
const BlogPost = ({ blog }) => {
    return (
            <div className="flex justify-center">
                <div className="card card-compact bg-base-100 w-[700px] h-[500px] shadow-xl">
                    <figure>
                        <img
                        className="w-full h-full object-cover"
                            src={blog.image}
                            alt={blog.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title ">{blog.title}</h2>
                        <div className="card-actions">
                            <a href={`${blog.link}`} target="_blank" rel="noopener noreferrer" className='text-blue-600 btn '>
                                Read Full News
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogPost;
