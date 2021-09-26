import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';

const Persons = () => {

    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);

    // fetching data
    useEffect(() => {

        fetch('./billionaires.json')
            .then(res => res.json())
            .then(data => setPersons(data));

    }, []);

    // handeling cart calcualtion
    const handleAddToCart = (ticket) => {

        const newCart = [...cart, ticket];
        setCart(newCart);

    };

    return (

        <div className="container mt-5">

            <div className="row">

                <div className="col-9">

                    <div className="row gy-5">

                        {
                            persons.map(person => <Person key={person.ranking} person={person} handleAddToCart={handleAddToCart} />)
                        }

                    </div>

                </div>

                <div className="col-3">

                    <Cart cart={cart} />

                </div>

            </div>

        </div>
    );
};

export default Persons;
