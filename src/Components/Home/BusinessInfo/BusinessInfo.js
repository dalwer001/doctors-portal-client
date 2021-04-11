import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyb, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call US NOW',
        description: '+8801532629845',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>


    );
};

export default BusinessInfo;