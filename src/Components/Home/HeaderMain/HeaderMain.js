import React from 'react';
import chair from '../../../images/Mask Group 1.png'

const HeaderMain = () => {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center mx-0">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here!</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto, maxime, sunt neque, deleniti molestiae veritatis sed pariatur cum ex nam provident aut enim? Odit neque illo illum labore voluptate?
                Nulla, expedita alias quidem similique repellat repellendus iure cupiditate maiores recusandae nihil consequatur consequuntur perspiciatis natus voluptas dolorum itaque veniam nisi quisquam voluptatum doloremque mollitia aliquid soluta excepturi pariatur! Expedita!</p>

                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMain;