import { memo, useEffect, useState } from "react";
import "./style.scss";
import { ROUTERS } from "utils/router";
import { Link, useLocation } from "react-router-dom";
const BreadCrumb =(props)=>{
    const location= useLocation();
    const [isHome,setIsHome]= useState(location.pathname.length<=1);
    useEffect(()=>{
        const isHome= location.pathname.length<=1;
        setIsHome(isHome);
        
        },[location])

    return (<div className="breadcrumb">
        <div className="breadcrumb_text">
            <h2>TT SHOP</h2>
            <div className="breadcrumb_option">
                <ul>
                    <li className="link">
                        <Link to={"/"}>Trang chủ</Link>
                    </li>
                    <li>
                        {props.name}
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default memo(BreadCrumb);