import React from 'react';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mb-5" style={{ backgroundColor: 'white', borderBottom: '1px solid #e6e0e0' }}>
                <div className="container">
                    <a className="navbar-brand" href="https://github.com/YeasarArefin"><span className="fw-bold me-3 h2">Billioners</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="https://github.com/YeasarArefin">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="https://github.com/YeasarArefin">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="https://github.com/YeasarArefin">Info</a>
                            </li>
                        </ul>
                        <div>
                            <h4>Your Budget Is <span className="fw-bold">$100M</span></h4>
                        </div>
                    </div>
                </div>
            </nav>

            <div>

                <h1 className="text-center mb-5">Join Your Dream Seminars Here!</h1>

            </div>

            <div className="container mt-3">

                <div className="row">

                    <div className="col-7 d-flex mx-auto">
                        <input className="form-control me-3" type="text" placeholder="Billionaier Name" />
                        <button className="btn btn-dark">Search</button>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Header;
