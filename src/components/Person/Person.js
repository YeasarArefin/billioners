import React from 'react';
import './Person.css';

const Person = (props) => {

    const { name, age, residence, company, worth, img, ranking, price } = props.person;

    return (
        <div className="col">

            <div className="card mx-auto h-100 shadow-sm" style={{ width: "18rem" }}>

                <img className="img-fluid img-thumbnail" src={img} alt={name} />

                <div className="card-body text-center">

                    <h3> <span className="fw-bold">Name :</span> {name}</h3>
                    <p> <span className="fw-bold"> Billionaire Ranking :</span> {ranking}</p>
                    <p> <span className="fw-bold">Age :</span> {age} years</p>
                    <p> <span className="fw-bold"> Residence : </span>{residence}</p>
                    <p> <span className="fw-bold"> Company :</span> {company}</p>
                    <p> <span className="fw-bold">Net Worth :</span> {worth}</p>
                    <p> <span className="fw-bold">Ticket Price :</span> ${price}</p>
                    <button onClick={() => props.handleAddToCart(props.person)} className="btn btn-dark"><i className="fas fa-ticket-alt me-2"></i> Buy Ticket</button>

                </div>

            </div>

        </div>
    );
};

export default Person;
