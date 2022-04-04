import React, { } from 'react';
import Images from '../../Images/ET_Mahide.jpg'





const Home = () => {


    return (
        <div >
            <div className=' grid grid-cols-2 mt-14  '>
                <div className=' text-center p-16'>
                    <h1 className=' text-5xl'>Model of Laxmipur District Entrepreneurs
                        <br />
                        <span className=' text-3xl font-semibold text-orange-500'>Engineer Mehedi Hasan.</span>
                    </h1>

                    <p className='font-semibold'> Director of Laxmipur Kot Post Office (Entrepreneur). His thinking consists of a combination of skills and talents. Dedicated souls for entrepreneurs. Sumist Bachan Bangi. He is working diligently to transform post offices into digital post offices. Despite various adversities, he is moving forward at a relentless pace. We are proud to be a part of his journey. We will continue to work relentlessly as a tool to exchange digital Bangladesh.</p>
                    <button className='bg-cyan-100 p-3 rounded-lg mt-5 hover:bg-sky-400 hover:text-zinc-100'>SEE MORE</button>
                </div>
                <div>
                    <img className='ml-24 rounded-sm' src={Images} alt="" />
                </div>
            </div>
            <div className=' flex justify-center mt-7'>
                <h1> customer Reviews(3)</h1>

                <button className='bg-cyan-100 p-3 rounded-lg mt-5 hover:bg-sky-400 hover:text-zinc-100'> SEE ALL REVIEWS</button>
            </div>
        </div>
    );
};

export default Home;