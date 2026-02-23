import React, { useState } from 'react';

const Logo = ({ className = "h-14", textClassName = "text-2xl" }) => {
    const [imgError, setImgError] = useState(false);
    const logoUrl = "/logo.png";

    return (
        <div className="flex items-center gap-4 group cursor-pointer">
            <img
                src={logoUrl}
                alt="Luna Evolution Counseling Logo"
                className={`${className} w-auto object-contain filter drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]`}
                onError={() => setImgError(true)}
            />
            <div className="flex flex-col justify-center">
                <h1 className={`font-serif font-bold text-white ${textClassName} tracking-widest leading-none`}>
                    LUNA
                </h1>
                <div className="flex items-center gap-2 md:gap-3 mt-1 underline-offset-4">
                    <span className="text-xs md:text-sm text-accent-teal font-sans font-bold tracking-[0.2em] uppercase">
                        Evolution
                    </span>
                    <span className="text-[10px] md:text-xs text-slate-400 font-sans tracking-widest uppercase opacity-90">
                        Counseling
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Logo;
