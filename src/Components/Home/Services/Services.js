import React from 'react';
import Fluoride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whiting from '../../../images/teethwhiting.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Treatment',
        img: whiting
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1' }}>Our services</h5>
                <h2>Services we provide</h2>
            </div>

            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 py-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}> </ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;