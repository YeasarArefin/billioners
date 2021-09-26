import React from 'react';

const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    for (let ticket of cart) {
        total += ticket.price;
    }

    return (
        <div>

            <div className="shadow text-center rounded" style={{ backgroundColor: "white", padding: "30px 10px" }}>

                <h2 className="mb-4"><span className="fw-bold">Orderd Tickets :</span> {cart.length}</h2>

                <h2 className="mb-4"><span className="fw-bold">Total : </span> ${total}</h2>

                <h2 className="mb-4"><span className="fw-bold">Ticket List :</span></h2>

                <ol>
                    {
                        cart.map(ticket => {

                            return (

                                <>

                                    <li className="mb-3 text-start h5">You Bought : <span className="fw-bold">{ticket.name}'s</span> seminer ticket </li><hr />


                                </>

                            );

                        })
                    }

                </ol>

            </div>



        </div>
    );
};

export default Cart;
