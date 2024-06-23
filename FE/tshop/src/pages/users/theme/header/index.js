import {memo, useState,useEffect} from "react";
import { RiFacebookBoxLine, RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaRegUserCircle } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineDownCircle, AiOutlineMenu, AiOutlineUpCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import {formatter} from "utils/fomater";
import { MdOutlineMailOutline, MdLocalPhone, MdOutlineSearch } from "react-icons/md";
import "./style.scss";
import { ROUTERS } from "utils/router";
export const menuCategory= [
    {
        name: "Bộ sưu tập"
    },
    {
        name:"Sơ mi"
    },
    {
        name: "Túi"
    },
    {
        name:"Đồng hồ"
    },
    {
        name:"Đầm-váy"
    }
];
const Header =()=>{
    const location= useLocation();
    const [isShowHumberger, setShowHumberger]= useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const[isHome,setIsHome]= useState(location.pathname.length<=1);
    const [isShowCategory, setShowCategory]= useState(isHome);
    useEffect(() => {
        // Function to check screen size
        const checkScreenSize = () => {
            setIsTablet(window.innerWidth <991 || window.innerWidth <767);
        };

        // Initial check
        checkScreenSize();

        // Add event listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
           
        };
    }, []);
    

    const [menus,setMenus]= useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.SHOP,
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCTS,
            isShowSubMenu: false,
            child:[
                {
                    name: "Nam",
                    path:"",
                },
                {
                    name: "Nữ",
                    path:"",
                },
                {
                    name: "Phụ kiện",
                    path:"",
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.POSTS,
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.CONTACT,
        }

    ]);
  
    useEffect(()=>{
    const isHome= location.pathname.length<=1;
    setIsHome(isHome);
    setShowCategory(isHome);
    },[location])

    return (
        <>
        <div className={`humberger_menu_overlay${isShowHumberger? " active": ""}`} 
        onClick={()=>setShowHumberger(false)}
        >

        </div>
        <div className={`humberger_menu_wrapper${isShowHumberger? " show": ""}`}  >
            <div className="header_logo">
                <h1>TTSHOP</h1>
            </div>
            <div className="humberger_menu_cart">
                <ul>
                    <li>
                        <Link to={""}>
                        <IoCartOutline/>
                        <span>1</span>
                        
                        </Link>
                    </li>
                    <p>Giỏ hàng: {formatter(1000000)}</p>
                </ul>
                </div>
            <div className="humberger_menu_widget">
                <div className="header_top_right_auth">
                    <Link to={""}>
                    <FaRegUserCircle/>Đăng nhập
                    </Link>
                </div>
            </div>
            

            <div className="humberger_menu_nav">
                <ul>
                    {
                        menus.map((menuItem,menuIndex)=>
                        (
                        <li key={menuIndex} to={menuItem.path}>
                            <Link to={menuItem.path}
                            onClick={()=>{
                                const newMenus=[...menus];
                                newMenus[menuIndex].isShowSubMenu =!newMenus[menuIndex].isShowSubMenu;
                                setMenus(newMenus);
                            }}
                            >
                            {menuItem.name} 
                            {menuItem.child &&(
                                menuItem.isShowSubMenu ? (<AiOutlineDownCircle/>) : (<AiOutlineUpCircle/>)
                            )}
                            </Link>
                            {
                                menuItem.child && (
                                    <ul className={`header_menu_dropdown ${menuItem.isShowSubMenu ? "show_submenu" : ""}` }>
                                        {menuItem.child.map((childItem,childIndex)=>(
                                            <li key={`${menuIndex}-${childIndex}`}>
                                                <Link to={childItem.path}>{childItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                            

                        </li>
                        ))
                    }
                </ul>
            </div>
            <div className="header_top_right_social">
                <Link to={""}>
                    <RiFacebookBoxLine />
                </Link>
                <Link to={""}>
                    <FaInstagram />
                </Link>
                <Link to={""}>
                    <PiLinkedinLogo />
                </Link>
                <Link to={""}>
                    <RiTwitterXFill />
                </Link>

            </div>
            <div className="contact">
                <ul>
                    <li>
                    <MdOutlineMailOutline />tt@gmail.com
                    </li>
                    <li>Miễn phí vận chuyển</li>
                </ul>
            </div>
        </div>
        <div className="header_top">
             <div className="container">
            <div className="row">
                <div className="col-6 header_top_left">
                    <ul>
                        <li>
                        <MdOutlineMailOutline />
                            tt@gmail.com
                        </li>
                        <li>
                            <MdLocalPhone/>
                            0976543389
                        </li>
                    </ul>
                </div>
                <div className="col-6 header_top_right">
                    <ul>
                    <li>
                        <Link to={""}>
                            <RiFacebookBoxLine />
                        </Link>
                        
                    </li>
                    <li>
                        <Link to={""}>
                        <FaInstagram />
                        </Link>
                        
                    </li>
                    <li>
                        <Link to={""}>
                        <PiLinkedinLogo />
                        </Link>
                        
                    </li>
                    <li>
                        <Link to={""}>
                        <RiTwitterXFill />
                        </Link>
                        
                    </li>
                  <li>
                  <Link to={""} ><FaRegUserCircle/></Link >
                  <span>Đăng Nhập</span>
                  </li>
                    </ul>       
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row">
                <div className=" col-lg-3">
                   <div className="header_logo">
                    <h1><span>TT</span>SHOP</h1>
                   </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header_menu">
                    <ul>
                     {
                        menus?.map((menuItem,menuIndex)=>(
                            <li key={menuIndex} className="active" >
                                <Link to={menuItem?.path}>{menuItem?.name}</Link>
                                {
                                    menuItem.child &&(
                                        <ul className="menu_child">
                                           {
                                            menuItem.child.map((childItem,childIndex)=>(
                                                <li key={`${menuIndex}-${childIndex}`}>
                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                </li>
                                            ))
                                           } 
                                        </ul>
                                    )
                                }
                            </li>
                        ))
                     }
                    </ul>
                    </nav>
                </div>
                <div className=" col-lg-3">
                    <div className="header_cart">
                    <Link to={ROUTERS.USER.CART}>
                    <IoCartOutline className="cart_icon" /><span>0</span>
                    </Link>
                    </div>
                    <div className="humberger_open">
                        <AiOutlineMenu onClick={()=>setShowHumberger(true)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
           <div className="row sidebar_menu_container">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 sidebar_menu">
                <div className="categories_menu" onClick={()=>setShowCategory(!isShowCategory)}>
                <AiOutlineMenu />Danh sách
                </div>
                    <ul className={isShowCategory ? "": "hidden"}>
                    {
                        menuCategory.map((cateItem,cateIndex)=>(
                           <li key={cateIndex}>
                            <Link to={ROUTERS.USER.PRODUCTS}>{cateItem.name}</Link>
                            </li>
                                 
                        ))
                     }
                    
                </ul>
                
                
            </div>
            <div className=" col-md-12 col-sm-12 col-xs-12 header_search_container">
                <div className="header_search">
                     <div className="search_form">
                        <form>
                            <input  type="" name="" value="" placeholder="Bạn đang tìm gì.."/>
                            <button  type="submit">{!isTablet ? "Tìm kiếm" : <MdOutlineSearch />}</button>
                        </form>
                        
                     </div>
                     <div className="search_phone">
                        <div className="search_phone_icon">
                            <MdLocalPhone/>
                        </div>
                        <div className="search_phone_text">
                          <p> 0976.543.389</p>
                          <span>Hỗ trợ 24/7</span>
                        </div>
                     </div>
                </div>
                {
                    isHome && (
                        <div className="header_slider">
                    <div className="slider_text">
                        <span>
                            SPRING/ SUMMER COLLECTION 2024
                        </span>
                        <h2>Get up to 20% Off<br/>
                        New Arrials
                        </h2>
                        <Link to={"/"} className="danger-btn">
                        SHOP NOW
                        </Link>
                    </div>
                </div>
                    )
                }
            </div>
            </div> 
        </div>
        </>
       
   
    
    )
};
export default memo(Header);