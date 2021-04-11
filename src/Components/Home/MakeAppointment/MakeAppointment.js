import React from 'react';
import doctors from '../../../images/5790-removebg.png';
import './MakeAppointment.css';

const makeAppointment = () => {
    return (
            <div className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={doctors} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5 ">
                        <h5 className="text-primary text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make an Appointment</h1>
                        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi impedit explicabo tenetur error quia nemo! Ipsum ad suscipit expedita assumenda.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default makeAppointment;