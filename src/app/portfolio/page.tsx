import React from "react";

const Portfolio = () => {
  return (
    <div>
        <div className="bg-yellow-500 min-h-screen">
            <h2 className="font-bold text-xl text-center p-6 underline px-64 animate-pulse delay-200">
                My Portfolio
            </h2>
            <img src="/portfolio.png" alt="My Portfolio" className="h-64 p-4 ml-96 rounded-lg shadow-inner" /><br />
         
        </div>
    </div>
  );
};

export default Portfolio;