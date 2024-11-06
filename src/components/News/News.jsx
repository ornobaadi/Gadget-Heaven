import { useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import BlogPost from "../BlogPost/BlogPost";
const News = () => {

    const news = useLoaderData();

    return (
        <div className='text-center'>
            <Helmet>
                <title>News | Gadget Heaven</title>
            </Helmet>
            <div className='flex flex-col items-center py-5 text-center mt-5 text-white bg-[#9538E2]'>
                <h3 className="text-5xl font-bold my-5">News Page</h3>
                <p className='w-2/5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="mx auto mt-10 ">
                <div>
                    <h3 className="text-3xl py-10 font-medium text- black text-center mt-10">Latest Gadget Related News</h3>
                    <div className="grid grid-cols-2 gap-10 mx-auto mt-5 ">
                        {
                            news.map(blog => (
                                <BlogPost blog={blog} key={blog.id}></BlogPost>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl py-10 font-medium text- black text-center mt-10">Youtuber's Reviews</h3>
                    <div className="mt-10 text-center flex justify-evenly rounded-xl gap-10">
                        <iframe width="700" height="415" src="https://www.youtube.com/embed/sqQrN0iZBs0?si=P6vHeEA4WnnvD9GO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="700" height="415" src="https://www.youtube.com/embed/G0eKzU_fV00?si=sFVb9hS2oX4MOeNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default News;