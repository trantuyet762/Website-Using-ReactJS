import { memo } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import "./style.scss";
const ProductsCard= ({img, name,price})=>{

    return(
       
        <div className="featured_item">
            <div className="featured_item_pic"
            style={{backgroundImage: `url(${img})`,
            }}
            >
              <ul className="featured_item_pic_hover">
                <li>
                   <AiOutlineEye/> 
                </li>
                <li>
                   <AiOutlineShoppingCart/> 
                </li>
             </ul>  
            </div>
            <div className="featured_item_text">
                <h6>
                    <Link to={""}>{name}</Link>
                </h6>
                <h5>{formatter(price)}</h5>

            </div>
        </div>
    );
};
export default memo(ProductsCard);