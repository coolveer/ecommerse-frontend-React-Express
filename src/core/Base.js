import React from 'react';
import Menu from './Menu';

const Base = ({
    title="My Tshirt",
    discription = "my disription",
    className = "bg-dark text-white p-4",
    children
}) => (
     <div>
         < Menu />
         <div className="container-fluid">
             <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{discription}</p>
             </div>
             <p className={className}>{children}</p>
         </div>
         
         <footer className="footer bg-dark mt-auto py-3">
             <div className="container-fluid bg-success text-white text-center py-4">
                 <h4>if you ahve any query feel free to reach out </h4>
                 <button className="btn btn-danger btn-lg">contect us</button>
             </div>
             <div className="container">
                  <span className="text-muted">
                      An amezing <span className="text-white">MERN</span> bootcamp
                  </span>
             </div>
         </footer>
     </div>
)

export default Base;