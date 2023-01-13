import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Home = () => {
    return (
        <div>
            <h2>Home page</h2>
            <div className='gnf-mx-auto' style={{maxWidth: 500}}>
                <section className='gnf-mb-3xl md:gnf-max-w-3/4 md:gnf-pb-xl'>
                    <h3 className='gnf-type-sm-header gnf-text-gray-200 gnf-mb-2xs'>
                        Who we are ?
                    </h3>
                    <div className="fa-3x">
                        <FontAwesomeIcon icon={['fas', 'fa-snowflake', 'fa-pulse']} />
                    </div>
                    <h3 className='gnf-text-md md:gnf-text-lg md:gnf-leading-lg gnf-text-gray-200 gnf-mb-lg'>
                        We’re the world’s leading software reviews and selection platform</h3>
                    <p className='gnf-text-md md:gnf-text-lg md:gnf-leading-lg gnf-text-gray-200 gnf-mb-lg'>
                        We help you find the right software for your business.
                        Feel confident with the most comprehensive software search resource out there.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Home;
