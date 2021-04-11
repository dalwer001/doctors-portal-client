
import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem temporibus dolore eaque? Blanditiis, numquam?',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem temporibus dolore eaque? Blanditiis, numquam?',
        name: 'Wilson Harry',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem temporibus dolore eaque? Blanditiis, numquam?',
        name: 'Wilson Harry',
        from: 'California',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says </h1>
                </div>
                <div className="row card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} ></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;