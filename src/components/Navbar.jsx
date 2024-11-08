import React, { useState } from 'react';
import { Link } from 'wouter';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">PromptHub</Link>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <div className="navbar-nav">
                        <Link to="/submit-prompt" className="nav-link">Submit Prompt</Link>
                        <Link to="/prompts" className="nav-link">View Prompts</Link>
                        <Link to="/compare-models" className="nav-link">Compare Models</Link>
                        <Link to="/popularity-charts" className="nav-link">Popularity Charts</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;