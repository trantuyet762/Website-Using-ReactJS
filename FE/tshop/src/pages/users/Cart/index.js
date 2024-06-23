import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { ROUTERS } from "utils/router";
import featureImg1 from "assets/users/images/featured/damtrang.jpg";
import featureImg2 from "assets/users/images/featured/dongho.png";
import featureImg3 from "assets/users/images/featured/tuiBST.jpg";
import { formatter } from "utils/fomater";
const Cart= ()=>{
    return (
        <>
        <Breadcrumb name="Giỏ hàng"/>
        <div className="container">
            <div className="row cart-border">
                <button type="submit" className="btn-danger">Xóa</button>
            </div>
            <div className="row">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th> 
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                   
                    <tr>
                        <td>1</td>
                       <td><img src={featureImg1}/></td>
                       <td>Đầm trắng dự tiệc</td>
                       <td>{formatter(600000)}</td>
                       <td>2</td>
                       <td>{formatter(1200000)}</td>
                       <td>
                        <button type="submit" className="btn-danger">Xóa</button>
                        <button type="submit" className="btn-primary">Cập nhật</button>
                       </td>
                    </tr>
                    <tr>
                        <td>2</td>
                       <td><img src={featureImg2}/></td>
                       <td>Đồng hồ Oyster Perpetual Day-Date</td>
                       <td>{formatter(1000000)}</td>
                       <td>1</td>
                       <td>{formatter(1000000)}</td>
                       <td>
                        <button type="submit" className="btn-danger">Xóa</button>
                        <button type="submit" className="btn-primary">Cập nhật</button>
                       </td>
                    </tr>
                    <tr>
                        <td>3</td>
                       <td><img src={featureImg3}/></td>
                       <td>Túi nam Hermès bộ sưu tập hè 2020</td>
                       <td>{formatter(800000)}</td>
                       <td>2</td>
                       <td>{formatter(1600000)}</td>
                       <td>
                        <button type="submit" className="btn-danger">Xóa</button>
                        <button type="submit" className="btn-primary">Cập nhật</button>
                       </td>
                    </tr>
                    <tr>
                        <th colSpan={5}>Tổng: </th>
                        <th>{formatter(3800000)}</th>
                        <th></th>
                    </tr>
                </table>
            </div>
            <div className="row cart-border">
                <button type="submit" className="btn-danger">Mua hàng</button>
            </div>
        </div>
        
        </>
    )
}
export default memo(Cart);