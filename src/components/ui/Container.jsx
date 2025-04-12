import React from "react";

const Container = ({ children }) => {
    return (
        <div className="min-h-screen w-full relative bg-gradient-to-b from-[#0a0f1c] to-[#05070d]">
            {/* Camada de textura de ruído */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none z-0"></div>

            {/* Conteúdo principal */}
            <div className="container mx-auto py-6 px-5 text-gray-100 relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Container;
