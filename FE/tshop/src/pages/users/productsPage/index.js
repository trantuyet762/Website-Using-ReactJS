import { memo, useEffect, useState } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { menuCategory } from "../theme/header";
import { Link, useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";
import featureImg1 from "assets/users/images/featured/damtrang.jpg";
import featureImg2 from "assets/users/images/featured/dongho.png";
import featureImg3 from "assets/users/images/featured/tuiBST.jpg";
import featureImg4 from "assets/users/images/featured/aokieu.jpg";
import featureImg5 from "assets/users/images/featured/somitrang.jpg";
import featureImg6 from "assets/users/images/featured/somixanh.jpg";
import featureImg7 from "assets/users/images/featured/cardigan.jpg";
import featureImg8 from "assets/users/images/featured/damxoe.jpg";
import featureImg9 from "assets/users/images/featured/caogot.jpg";
import { ProductsCard } from "component";

const ProductsPage=()=>{
    
    const sorts= [
        "Tăng dần",
        "Giảm dần",
        "Mới nhất",
        "Cũ nhất",
        "Bán chạy",
        "Giảm giá"
    ];
    const products=[
        {
            id:21,
            img:featureImg1,
            name: "Đầm trắng dự tiệc",
            price: 600000
        },
        {
            id: 31,
            img:featureImg2,
            name: "Đồng hồ Oyster Perpetual Day-Date",
            price: 1000000

        },
        {
            id: 32,
            img:featureImg3,
            name: "Túi nam Hermès bộ sưu tập hè 2020",
            price: 800000

        },
        {
            id: 22,
            img:featureImg4,
            name: "Áo kiểu BEIGE TENCEL set mẫu thiết kế",
            price: 500000

        },
        {
            id: 11,
            img:featureImg5,
            name: "Áo sơ mi nam form rộng VIGO cổ V",
            price: 300000

        },
        {
            id: 12,
            img:featureImg6,
            name: "Sơ mi nam kẻ xanh dáng vừa người ",
            price: 450000

        },
        {
            id: 13,
            img:featureImg7,
            name: "Áo Khoác cardigan Dệt Kim Cho Nam",
            price: 500000

        },
        {
            id: 23,
            img:featureImg8,
            name: "Đầm xòe dạo phố trắng dáng dài ",
            price: 700000

        },
        {
            id: 33,
            img:featureImg9,
            name: "Giày cao gót hoa lan ",
            price: 450000

        },

    
    ];
    return (<>
    <Breadcrumb name= "Danh sách sản phẩm"/>
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="sidebar">
                   
                    <div className="sidebar_item">
                        <h2>Tìm kiếm theo giá</h2>
                        <div className="price-range-wrap">
                            <div>
                                <p>Từ:</p>
                                <input type="number" min={0}/>
                            </div>
                            <div>
                                <p>Đến:</p>
                                <input type="number" min={0}/>
                            </div>
                            <div>
                                <button type="submit">Áp dụng</button>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar_item">
                        <h2>Sắp xếp</h2>
                        <div className="tags">
                            {
                                 sorts.map((item, index)=>(
                                    <div className={`tag ${ index === 0 ? "active" : ""}`} key={index}>
                                        {item}
                                    </div>
                                )) 
                            }
                        </div>
                    </div>
                    <div className="sidebar_item">
                        <h2>Thể loại khác</h2>
                        <ul>
                            {
                                menuCategory.map((categoryItem,categoryIndex)=>(
                                    <li key={categoryIndex}>
                                        <Link to={ROUTERS.USER.PRODUCTS}>
                                        {categoryItem.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="row">
                    {
                        products.map((product,index)=>
                        (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index}>
                                <ProductsCard id={product.id} name={product.name} img={product.img} price={product.price}/>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
    )
    
}
export default memo(ProductsPage);