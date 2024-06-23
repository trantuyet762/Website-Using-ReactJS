import {memo} from "react"
import "./style.scss";
import { Link } from "react-router-dom";
import {formatter} from "utils/fomater";
import { ROUTERS } from "utils/router";
import { RiFacebookBoxLine, RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaRegUserCircle } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
const Footer =()=>{
    return (
    <footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="footer_info">
                    <h1 className="footer_info_logo">TTShop</h1>
                    <ul>
                        <li>Địa chỉ: Nghĩa Hưng-Nam Định</li>
                        <li>Phone: 0976-543-389</li>
                        <li>Email: ttshop@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="footer_widget">
                    <h4>Cửa hàng</h4>
                    <ul>
                    <li>
                            <Link to={""}>Liên hệ</Link>
                        </li>
                        <li>
                            <Link to={""}>Thông tin về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to={""}>Sản phẩm kinh doanh</Link>
                        </li>
                        
                    </ul>
                    <ul>
                    <li>
                            <Link to={""}>Thông tin tài khoản</Link>
                        </li>
                        <li>
                            <Link to={""}>Giỏ hàng</Link>
                        </li>
                        <li>
                            <Link to={""}>Danh sách ưa thích</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-12 col-sm-6 col-xs-12">
                <div className="footer_widget">
                    <h4>Khuyến mãi && Ưu đãi</h4>
                    <p>Đăng ký nhận thông tin tại đây</p>
                    <form action="#">
                        <div className="input-group">
                            <input type="text" placeholder="Nhập email.."/>
                            <button type="submit" className="button_submit">
                                Đăng ký
                            </button>
                        </div>
                        <div className="footer_widget_social">
                            <div><RiFacebookBoxLine/></div>
                            <div><FaInstagram/></div>
                            <div>< RiTwitterXFill/></div>
                            <div><PiLinkedinLogo/></div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </footer>
    )
};
export default memo(Footer);