import {memo} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import bannerItem1 from "assets/users/images/categories/bosuutap.jpg";
import bannerItem2 from "assets/users/images/categories/somi.jpg";
import bannerItem3 from "assets/users/images/categories/dongho.png";
import bannerItem4 from "assets/users/images/categories/vay.jpg";
import bannerItem5 from "assets/users/images/categories/cardigan.jpg";
import featureImg1 from "assets/users/images/featured/damtrang.jpg";
import featureImg11 from "assets/users/images/featured/damtrang1.jpg";
import featureImg12 from "assets/users/images/featured/damtrang2.jpg";
import featureImg2 from "assets/users/images/featured/dongho.png";
import featureImg22 from "assets/users/images/featured/dongho2.png";
import featureImg23 from "assets/users/images/featured/dongho3.png";
import featureImg3 from "assets/users/images/featured/tuiBST.jpg";
import featureImg32 from "assets/users/images/featured/tuiBST2.jpg";
import featureImg33 from "assets/users/images/featured/tuiBST3.jpg";
import featureImg4 from "assets/users/images/featured/aokieu.jpg";
import featureImg42 from "assets/users/images/featured/aokieu2.jpg";
import featureImg43 from "assets/users/images/featured/aokieu3.jpg";
import featureImg5 from "assets/users/images/featured/somitrang.jpg";
import featureImg52 from "assets/users/images/featured/somitrang2.jpg";
import featureImg53 from "assets/users/images/featured/somitrang3.jpg";
import featureImg6 from "assets/users/images/featured/somixanh.jpg";
import featureImg62 from "assets/users/images/featured/somixanh2.jpg";
import featureImg63 from "assets/users/images/featured/somixanh3.jpg";
import featureImg7 from "assets/users/images/featured/cardigan.jpg";
import featureImg72 from "assets/users/images/featured/cardigan2.jpg";
import featureImg8 from "assets/users/images/featured/damxoe.jpg";
import featureImg82 from "assets/users/images/featured/damxoe2.jpg";
import featureImg83 from "assets/users/images/featured/damxoe3.jpg";
import featureImg9 from "assets/users/images/featured/caogot.jpg";
import featureImg92 from "assets/users/images/featured/caogot2.jpg";
import featureImg93 from "assets/users/images/featured/caogot3.jpg";
import banner1 from "assets/users/images/banner/banner1.jpg";
import banner2 from "assets/users/images/banner/banner2.jpg";
import "./style.scss";
import {ProductsCard} from "component";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
const HomePage =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        },
    };
    const sliderItems=[
        {
            bgImg: bannerItem1,
            name: "Bộ sưu tập"
        },
        {
            bgImg: bannerItem2,
            name: "Sơ mi"
        },
        {
            bgImg: bannerItem3,
            name: "Đồng hồ"
        },
        {
            bgImg: bannerItem4,
            name: "Váy"
        },
        {
            bgImg: bannerItem5,
            name: "Cardigan"
        }

    ]
    const featproducts={
        all:{
            title: "Toàn bộ",
            products: [
                {
                    id:21,
                    img:[
                        featureImg1,featureImg11,featureImg12
                    ],
                    name: "Đầm trắng dự tiệc",
                    price: 600000
                },
                {
                    id: 31,
                    img:[featureImg2, featureImg22, featureImg23],
                    name: "Đồng hồ Oyster Perpetual Day-Date",
                    price: 1000000
            
                },
                {
                    id: 32,
                    img:[
                        featureImg3,featureImg32,featureImg33
                    ],
                    name: "Túi nam Hermès bộ sưu tập hè 2020",
                    price: 800000
            
                },
                {
                    id: 22,
                    img:[
                        featureImg4,featureImg42,featureImg43
                    ],
                    name: "Áo kiểu BEIGE TENCEL set mẫu thiết kế",
                    price: 500000
            
                },
                {
                    id: 11,
                    img:[
                        featureImg5,featureImg52,featureImg53
                    ],
                    name: "Áo sơ mi nam form rộng VIGO cổ V",
                    price: 300000
            
                },
                {
                    id: 12,
                    img:[
                        featureImg6,featureImg62,featureImg63
                    ],
                    name: "Sơ mi nam kẻ xanh dáng vừa người ",
                    price: 450000
            
                },
                {
                    id: 13,
                    img:[
                        featureImg7,featureImg72
                    ],
                    name: "Áo Khoác cardigan Dệt Kim Cho Nam",
                    price: 500000
            
                },
                {
                    id: 23,
                    img:[
                        featureImg8,featureImg82,featureImg83
                    ],
                    name: "Đầm xòe dạo phố trắng dáng dài ",
                    price: 700000
            
                },
                {
                    id: 33,
                    img:[
                        featureImg9,featureImg92,featureImg93
                    ],
                    name: "Giày cao gót hoa lan ",
                    price: 450000
            
                },
            ]
        },
        men:{
            title: "Nam",
            products:[
                {
                    id: 11,
                    img:[
                        featureImg5,featureImg52,featureImg53
                    ],
                    name: "Áo sơ mi nam form rộng VIGO cổ V",
                    price: 300000
            
                },
                {
                    id: 12,
                    img:[
                        featureImg6,featureImg62,featureImg63
                    ],
                    name: "Sơ mi nam kẻ xanh dáng vừa người ",
                    price: 450000
            
                },
                {
                    id: 13,
                    img:[
                        featureImg7,featureImg72
                    ],
                    name: "Áo Khoác cardigan Dệt Kim Cho Nam",
                    price: 500000
            
                },
            ]
        },
        women: {
            title:"Nữ",
            products:[
                {
                    id:21,
                    img:[
                        featureImg1,featureImg11,featureImg12
                    ],
                    name: "Đầm trắng dự tiệc",
                    price: 600000
                },
                {
                    id: 22,
                    img:[
                        featureImg4,featureImg42,featureImg43
                    ],
                    name: "Áo kiểu BEIGE TENCEL set mẫu thiết kế",
                    price: 500000
            
                },
                {
                    id: 23,
                    img:[
                        featureImg8,featureImg82,featureImg83
                    ],
                    name: "Đầm xòe dạo phố trắng dáng dài ",
                    price: 700000
            
                },
                
              
            ]
        },
        accessories:{
            title: "Phụ kiện",
            products:[
                
                {
                    id: 31,
                    img:[featureImg2, featureImg22, featureImg23],
                    name: "Đồng hồ Oyster Perpetual Day-Date",
                    price: 1000000
            
                },
                {
                    id: 32,
                    img:[
                        featureImg1,featureImg2,featureImg3
                    ],
                    name: "Túi nam Hermès bộ sưu tập hè 2020",
                    price: 800000
            
                },
                
                {
                    id: 33,
                    img:[
                        featureImg1,featureImg2,featureImg3
                    ],
                    name: "Giày cao gót hoa lan ",
                    price: 450000
            
                },
            ]
        }
       
        }

        const renderFeaturedProducts=(data)=>{
            const tabList=[];
            const tabPanels=[];
            
            Object.keys(data).forEach((key, index)=>{
                tabList.push(<Tab key={index}>
                    {data[key].title}
                </Tab>);
            const tabPanel=[];
                data[key].products.forEach((item,j)=>{
                    tabPanel.push(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-3" key={j}>
                         <ProductsCard id={item.id} name={item.name} img={item.img[0]} price={item.price}/>
                           </div>
                    );
                });
                tabPanels.push(tabPanel);
            });
            
            return (
                <Tabs>
                  
                    <TabList>{tabList}</TabList>
                    {
                        tabPanels.map((item,key)=>(
                        <TabPanel key={key}>
                            <div className="row">{item}</div>
                        </TabPanel>
                        ))
                    }
                    
                </Tabs>
              );
        };
    return (
        <>
        {/* Categories Begin */}
        <div className="container container_categories_slider">
       
           <Carousel responsive={responsive}
            className="categories_slider">
               {
                sliderItems.map((slideItem, itemIndex)=>(
                    <div className="categories_slider_item" key={itemIndex}
                    style={{backgroundImage: `url(${slideItem.bgImg})`}}>
                        <p>{slideItem.name}</p>
                    </div>
                ))
               } 
          
           </Carousel>
                
        </div>
        {/*Categories End */}
        {/* Featured Begin */}
               <div  className="container">
                <div className="featured">
                    <div className="section-title">
                        <h2>Sản phẩm nổi bật</h2>
                       
                    </div>
                    {renderFeaturedProducts(featproducts)}
                </div>

               </div>
        {/* Featured End */}
        {/* Banner Begin */}

               <div className="container">
                <div className="banner">
                    <div className="banner_pic">
                        <img src={banner1} alt="banner"/>
                    </div>
                    <div className="banner_pic">
                        <img src={banner2} alt="banner"/>
                    </div>
                </div>
               </div>
        {/* Banner End */}
        </>
    )
};
export default memo(HomePage);