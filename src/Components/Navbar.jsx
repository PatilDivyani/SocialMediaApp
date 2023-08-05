import React from "react";
// import home from '../images/home.png';
// import bell from '../images/bell.png'
// import bookmark from '../images/bookmark.png'
// import group from '../images/group.png'


const Navbar = () => {

    return (
        <>
            <nav>
                <div id="logo">TravelMedia.in</div>
                <div className="nav-links" >
                    <a href="/" ><svg xmlns="http://www.w3.org/2000/svg" width="47" height="49" viewBox="0 0 47 49" fill="none">
                        <g filter="url(#filter0_d_102_36)">
                            <path d="M31.0276 16.5298L29.1646 14.7853L28.1994 13.9304L20.927 7.28736C20.5033 6.90421 19.8692 6.90421 19.4455 7.28736L12.173 13.9304L11.2079 14.7853L9.34486 16.5298C8.91156 16.9582 8.88287 17.6619 9.27978 18.1262C9.67669 18.5905 10.3584 18.6507 10.8263 18.2628L11.2079 17.9162V27.794C11.2079 29.7082 12.7153 31.2599 14.5748 31.2599H16.8194V24.3281C16.8194 22.4139 18.3268 20.8622 20.1862 20.8622C22.0457 20.8622 23.5531 22.4139 23.5531 24.3281V31.2599H25.7977C27.6572 31.2599 29.1646 29.7082 29.1646 27.794V17.9162L29.5462 18.2628C30.0113 18.6833 30.7193 18.6367 31.1286 18.1588C31.5371 17.68 31.4919 16.9512 31.0276 16.5298Z" fill="#F05A22" />
                        </g>
                        <defs>
                            <filter id="filter0_d_102_36" x="0" y="0" width="46.4077" height="48.2599" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="3" dy="5" />
                                <feGaussianBlur stdDeviation="6" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.745098 0 0 0 0 0.615686 0 0 0 0.78 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_36" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_36" result="shape" />
                            </filter>
                        </defs>
                    </svg></a>
                    <a href="/" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
                            <path d="M19.8897 16.8344H18.8968V8.97837C18.8968 4.01975 15.1135 0 10.4466 0C5.77966 0 1.99637 4.01975 1.99637 8.97837V16.8344H1.05628C0.472912 16.8344 0 17.3369 0 17.9567C0 18.5766 0.472912 19.079 1.05628 19.079H19.8897C20.4731 19.079 20.946 18.5766 20.946 17.9567C20.946 17.3369 20.4731 16.8344 19.8897 16.8344Z" fill="#F9DDCF" />
                            <path d="M10.4467 22.4459C11.7863 22.4419 12.9788 21.5433 13.4254 20.2014H7.46796C7.9145 21.5433 9.10703 22.4419 10.4467 22.4459Z" fill="#F9DDCF" />
                        </svg></a>
                    <a href="/" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                        <path d="M14.5905 0H3.36758C1.46897 0.0429295 -0.036912 1.61407 0.000689101 3.51279V19.9881C-0.00401015 20.9037 0.526993 21.7375 1.35867 22.1205C2.15761 22.458 3.07955 22.3051 3.72671 21.7277L8.97906 16.9467L14.2314 21.7277C14.631 22.0996 15.1557 22.3079 15.7016 22.3112C16.0107 22.3086 16.316 22.2437 16.5995 22.1205C17.4311 21.7375 17.9621 20.9037 17.9574 19.9881V3.51279C17.995 1.61407 16.4891 0.0429295 14.5905 0Z" fill="#F9DDCF" />
                    </svg></a>
                    <a href="/" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                        <ellipse cx="11.5531" cy="5.61148" rx="5.77652" ry="5.61148" fill="#F9DDCF" />
                        <path d="M12.7084 11.223H10.3977C4.65523 11.223 0 15.7452 0 21.3236C0 21.9435 0.517248 22.4459 1.15531 22.4459H21.9508C22.5889 22.4459 23.1061 21.9435 23.1061 21.3236C23.1061 15.7452 18.4509 11.223 12.7084 11.223Z" fill="#F9DDCF" />
                    </svg></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;