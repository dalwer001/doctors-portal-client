import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';

import './Blogs.css'


const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Dalwer',
        authorImg: wilson,
        date: '11 April 2021'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: ema,
        date: '11 April 2021'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Dalwer',
        authorImg: wilson,
        date: '11 April 2021'
    },
]

const Blogs = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="row card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;