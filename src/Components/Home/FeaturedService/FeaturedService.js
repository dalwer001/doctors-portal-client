import React from 'react';
import featured from '../../../images/Mask Group 3.png';

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured } alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>
                            Exceptional Dental <br/>
                            Care, On your Term
                        </h1>
                        <p className="text-secondary my-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit debitis hic ex sit. Assumenda, quae. Modi quasi aliquid quisquam vitae reprehenderit accusamus dolore, eum at, numquam perspiciatis autem veritatis doloribus, incidunt voluptates officiis nesciunt mollitia sint! Nemo quibusdam dignissimos, molestias voluptas sapiente voluptatum esse autem cum provident, inventore animi consectetur? Dolores adipisci eius eveniet, laudantium minus explicabo quas natus ullam fugiat beatae consequuntur nobis voluptates aliquam error iste voluptate deserunt soluta a. Dicta eligendi perferendis itaque perspiciatis temporibus earum suscipit at? Officiis aut non, cupiditate corrupti ipsam dolorum maxime nihil iusto laboriosam molestiae assumenda cum similique, error reprehenderit aperiam, quibusdam voluptate. Ipsum, animi. Voluptatum laudantium tempore facere autem incidunt eos aliquid obcaecati mollitia necessitatibus molestias, repudiandae id tenetur minus quidem? Dignissimos impedit quam distinctio alias quas, ut, dolore dolores nisi suscipit aut aliquam quidem enim saepe veniam inventore quisquam necessitatibus in, totam quae? Debitis provident voluptatum perspiciatis dolorem odit!</p>
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeaturedService;