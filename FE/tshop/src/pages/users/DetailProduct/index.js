import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import userpic1 from "assets/users/images/userpic/user1.png"
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
import { FaRegEye } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { HiMinusSm , HiPlusSm} from "react-icons/hi";
import { formatter } from "utils/fomater";
const products = [
    {
        id:21,
        img:[
            featureImg1,featureImg11,featureImg12
        ],
        name: "Đầm trắng dự tiệc",
        price: 600000,
        description: "Đầm 2 dây màu trắng JU05 váy dài thiết kế thích hợp chít eo khí chất kiểu Pháp chữ A mẫu mới năm 2024 cho nữ mùa hè",
        detail: "Đầm 2 dây màu trắng JU05 váy dài thiết kế thích hợp chít eo khí chất kiểu Pháp chữ A mẫu mới năm 2024 cho nữ mùa hè"
    },
    {
        id: 31,
        img:[featureImg2, featureImg22, featureImg23],
        name: "Đồng hồ Oyster Perpetual Day-Date",
        price: 1000000,
        description: "Đồng hồ Oyster Perpetual Day-Date 36 bằng vàng với mặt số màu trắng, đai kính nạm kim cương và dây đeo President nạm kim cương.",
        detail: `Viền đính kim cương\n
                Một bản giao hưởng lấp lánh\n
                Những người thợ đính đá quý, giống như các nhà điêu khắc, chạm khắc tinh xảo kim loại quý để tạo hình bằng tay cho chỗ ngồi mà mỗi viên đá quý sẽ được đặt một cách hoàn hảo. Với nghệ thuật và sự khéo léo của người thợ kim hoàn, viên đá được đặt và căn chỉnh tỉ mỉ với những viên khác, sau đó được gắn chắc chắn trong khung vàng hoặc bạch kim.\n
                Bên cạnh chất lượng bên trong của những viên đá, một số tiêu chí khác góp phần tạo nên vẻ đẹp của việc đính đá quý trên Rolex: sự sắp xếp chính xác về chiều cao của những viên đá quý, hướng và vị trí của chúng, sự đều đặn, độ chắc chắn và tỷ lệ của việc đính đá cũng như độ phức tạp của viên đá. hoàn thiện đồ kim loại. Một bản giao hưởng lấp lánh làm nổi bật chiếc đồng hồ và mê hoặc người đeo.\n`
    },
    {
        id: 32,
        img:[
            featureImg3,featureImg32,featureImg33
        ],
        name: "Túi nam Hermès bộ sưu tập hè 2020",
        price: 800000,
        description: "Hermès mang đến sự lựa chọn thoải mái về trang phục nam giới thông qua bộ sưu tập Xuân/Hè 2020 do Véronique Nichanian thiết kế trên sàn diễn tại Tuần lễ thời trang Paris",
        detail: `- Chất liệu da PU chống nước cao cấp, không thấm nước, không bong tróc, đảm bảo chất lượng tương xứng giá trị.\n

- Màu sắc đa dạng, thiết kế đơn giản nhưng trang nhã.\n

- Kích thước vừa vặn, không có chi tiết thừa.\n

- Độc đáo với ngăn đựng đồ rộng rãi.\n

- Kích Thước: 19cm*12cm*6cm\n

- Sản phẩm chắc chắn sẽ khiến bạn trở nên tươm tất, phong cách và đẳng cấp khi đi du lịch, đi chơi thể thao hay đi học. Túi có thể chứa tất cả những vật dụng cần thiết tiện lợi khi đi du lịch, chơi thể thao, đi học, đi làm… Những ngăn nhỏ giúp bạn thỏa mái để những vật nhỏ như chìa khóa, cart, thẻ ATM…\n

- Chất liệu da chuyên dụng cao cấp. Loại chất liệu này góp phần hạn chế tối đa tình trạng sờn cũ, phai màu sau một thời gian dài sử dụng.\n

- Sản phẩm được chế tác bằng những đường may tỉ mỉ và chắc chắn, không chỉ mang đến độ bền mà còn mang đến tính thẩm mỹ, tinh tế cao. Phần dây đeo và tay xách được may bằng kỹ thuật gấp mép dây viền, vững chắc.`

    },
    {
        id: 22,
        img:[
            featureImg4,featureImg42,featureImg43
        ],
        name: "Áo kiểu BEIGE TENCEL set mẫu thiết kế",
        price: 500000,
        description: "Áo kiểu tay ngắn, cổ điểm thêm các chi tiết ren độc đáo. Tay áo xếp ly tạo kiểu bom nhẹ nhàng, bắt mắt. Lựa chọn mix cùng MS 31M8691 để có outfit hoàn hảo. Thiết kế được may cắt từ 2 dòng chất liệu Tencel, Nylon cao cấp, hút ẩm tốt nên khi mặc vô cùng thoải mái, không hề cảm nhận sự bí bách. Bề mặt mịn màng, mềm mại, tạo cảm giác thoáng mát, dễ chịu trong thời tiết Xuân – Hè.",
        detail: `
                Dòng sản phẩm:	Ladies\n
                Nhóm sản phẩm:	Áo\n
                Cổ áo:      	Cổ khác\n
                Tay áo:     	Tay ngắn\n
                Kiểu dáng:  	Xuông\n
                Độ dài:     	Croptop\n
                Họa tiết:   	Trơn\n
                Chất liệu:  	Lụa`
    },
    {
        id: 11,
        img:[
            featureImg5,featureImg52,featureImg53
        ],
        name: "Áo sơ mi nam form rộng VIGO cổ V",
        price: 300000,
        description: "Áo sơ mi nam form rộng VIGO cổ V cách điệu mới chất liệu lụa Hàn form rộng dành cho nam mặc thường ngày",
        detail: `Cổ áo:     Cổ chữ V\n
                Chất liệu:  Lụa mát\n
                Xuất xứ:    Việt Nam\n
                Mẫu:        Trơn\n
                Chiều dài tay áo: Dài tay`

    },
    {
        id: 12,
        img:[
            featureImg6,featureImg62,featureImg63
        ],
        name: "Sơ mi nam kẻ xanh dáng vừa người ",
        price: 450000,
        description: " Chất liệu : Premium cotton silk - Mềm mịn, dày dặn, không nhăn, không ra màu kể cả khi giặt máy. • Sử dụng nút bấm & mác kẹp kim loại độc đáo, thu hút, Xem từng ảnh để thấy những chi tiết thú vị nhé! Được chăm chút từ chất liệu, form dáng, đường may, hình in cho đến khâu đóng gói và hậu mãi, chiếc sơ mi xinh xẻo này sẽ làm hài lòng cả những vị khách khó tính nhất.",
        detail: `Thương hiệu:   NOCTURNAL\n
                 Dáng kiểu áo:  Oversized\n
                 Cổ áo:         Cổ sơ mi\n
                 Kiểu cổ áo:    Cổ áo truyền thống\n
                 Phong cách:    Cơ bản, Hàn Quốc, Đường phố, Công sở\n
                 Xuất xứ:       Việt Nam`

    },
    {
        id: 13,
        img:[
            featureImg7,featureImg72
        ],
        name: "Áo Khoác cardigan Dệt Kim Cho Nam",
        price: 500000,
        description: "Sản phẩm của chúng tôi là thương hiệu mới 100%. Hy vọng sẽ mang lại cho bạn trải nghiệm mua sắm tốt nhất. Chúng tôi có kinh nghiệm phong phú và sản phẩm chất lượng cao. Chúng tôi tập trung vào chất lượng tốt và giá rẻ! Có sản phẩm mới trên kệ bất cứ lúc nào. Hãy tiếp tục chú ý đến những tin tức mới nhất của cửa hàng chúng tôi. Chúng tôi sẽ gửi cho bạn phiếu giảm giá và giảm giá sản phẩm.",
        detail: "Sản phẩm của chúng tôi là thương hiệu mới 100%. Hy vọng sẽ mang lại cho bạn trải nghiệm mua sắm tốt nhất. Chúng tôi có kinh nghiệm phong phú và sản phẩm chất lượng cao. Chúng tôi tập trung vào chất lượng tốt và giá rẻ! Có sản phẩm mới trên kệ bất cứ lúc nào. Hãy tiếp tục chú ý đến những tin tức mới nhất của cửa hàng chúng tôi. Chúng tôi sẽ gửi cho bạn phiếu giảm giá và giảm giá sản phẩm."

    },
    {
        id: 23,
        img:[
            featureImg8,featureImg82,featureImg83
        ],
        name: "Đầm xòe dạo phố trắng dáng dài ",
        price: 700000,
        description: "Bliss Dress là sự kết hợp hoàn hảo giữa vẻ đẹp thanh lịch và nữ tính, phù hợp cho nhiều dịp khác nhau từ đi chơi, dự tiệc đến dạo phố. Đây là một lựa chọn tuyệt vời cho nàng muốn thể hiện nét dịu dàng qua phong cách thời trang của mình. Đầm có kiểu dáng xòe, tạo ra phần váy rộng và thoải mái, ôm nhẹ nhàng với đường cong của cơ thể. Cổ tròn kết hợp với thiết kế không tay, đơn giản mà tinh tế. Phần thân của Bliss Dress nổi bật với các đường bèo mềm mại, gợi cảm giác bồng bềnh, cuốn hút. Thiết kế được may cắt từ 2 dòng chất liệu Tuysi, Poly cao cấp, hút ẩm tốt nên khi mặc vô cùng thoải mái, không hề cảm nhận sự bí bách. Bề mặt mịn màng, mềm mại, tạo cảm giác thoáng mát, dễ chịu trong thời tiết Xuân – Hè.",
        detail: "Bliss Dress là sự kết hợp hoàn hảo giữa vẻ đẹp thanh lịch và nữ tính, phù hợp cho nhiều dịp khác nhau từ đi chơi, dự tiệc đến dạo phố. Đây là một lựa chọn tuyệt vời cho nàng muốn thể hiện nét dịu dàng qua phong cách thời trang của mình. Đầm có kiểu dáng xòe, tạo ra phần váy rộng và thoải mái, ôm nhẹ nhàng với đường cong của cơ thể. Cổ tròn kết hợp với thiết kế không tay, đơn giản mà tinh tế."

    },
    {
        id: 33,
        img:[
            featureImg9,featureImg92,featureImg93
        ],
        name: "Giày cao gót hoa lan ",
        price: 450000,
        description:"Sản phẩm được tự tay mình chăm chút cus lên để với giá siêu xinh không nơi nào rẻ bằng, sẽ thật hot trong mùa hè nóng bỏng sắp tới/ nhắn tin ngay với shop để được tư vấn từ a-> z nhe cảm ơn mọi ngừoi đã đọc, đã xem sản phẩm của mình, luôn cố gắng tìm những sản phẩm mới lạ, độc đáo cùng giá phải chăng dành cho những cô nàng xinh đẹp và những chàng đẹp xinh, mua liền nào bea hình thật ở cuối nhe",
        detail: `Bước vào sự nữ tính và quý phái với đôi sandal nữ cao gót này, một biểu tượng của sự thanh lịch và sành điệu. Thiết kế được tạo nên với gót giày nhọn, mang lại sự nhẹ nhàng và tinh tế trong mỗi bước đi của phái đẹp.\n
Gót giày nhọn không chỉ tạo điểm nhấn cho sự tinh tế và quý phái mà còn giúp tôn lên vẻ đẹp tự nhiên của đôi chân. Sự kết hợp hoàn hảo giữa gót giày cao và quai mảnh chắc chắn tạo ra một sự cân đối và ổn định, đảm bảo bạn cảm thấy tự tin và thoải mái mỗi khi di chuyển.\n
Quai mảnh được thiết kế vững chắc, giúp đôi sandal nữ cao gót ôm sát chân một cách an toàn và thoải mái. Chất liệu chọn lọc và công nghệ sản xuất tiên tiến giúp sản phẩm không chỉ đẹp mắt mà còn đảm bảo độ bền và chất lượng cao.`

    },


];
const getProductById = (id) => {
    return products.find(product => product.id.toString() === id);
};

const DetailProduct =()=>{
    const { id } = useParams();
    const product = getProductById(id);

    if (!product) {
        return <p>Không có sản phẩm nào!!</p>;
    }
    const detailLines = product.detail.split('\n');
    
    return(
        <>
        <Breadcrumb name="Chi tiết sản phẩm"/>
        <div className="container">
            <div className="row product_container_1">
            <div className="col-lg-7">
                <div className="single_product_pics">
                    <div className="row">
                        <div className="col-lg-3 single_product_thumnails">
                            <ul>
                                {
                                    product.img.map((productImg,productImgIndex)=>(
                                        <li key={productImgIndex}><img src={productImg}/></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="col-lg-9 single_product_image">
                            {
                             <img src={product.img[0]}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="product_details">
                    <div className="product_details_title">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="free_delivery">
                        free delivery
                    </div>
                    <p className="product_view">Lượt xem: 10<FaRegEye/> </p>
                    <div className="product_price">
                        <p>{formatter(product.price)}</p>
                        <p className="icon_star"><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoMdStarOutline/></p>
                    </div>
                    <div className="product_quantity">
                        <span>Số lượng: </span>
                        <div className="quantity_selector">
                            <span className="minus"><HiMinusSm /></span>
                            <span>1</span>
                            <span className="plus"><HiPlusSm/></span>
                        </div>
                        <button type="submit">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="row product_container">
            <Tabs >
                <TabList >
                    <Tab >Chi tiết sản phẩm</Tab>
                    <Tab >Đánh giá</Tab>
                </TabList>

            <TabPanel>
            <div>
                {detailLines.map((line, index) => (
                    <p key={index}>{line}</p>
                 ))}
             </div>
            </TabPanel>
            <TabPanel>
            
                    <div className="add_review">
                <h2>Đánh giá của bạn: </h2>
            
            <p className="icon_star"><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoMdStarOutline/></p>
            
                <textarea placeholder="Nhập đánh giá của bạn..."></textarea>
            
            <div className="button_review">
            <button type="submit">Gửi</button>
            </div>
           
            </div>
            <div className="review_title">
                <h2>Đánh giá (1)</h2>
                <div className="users_review">
                    <div className="user">
                        <div className="user_pic">
                            <img src={userpic1}/>
                        </div>
                        <div className="user_rating">
                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoMdStarOutline/>
                        </div>
                    </div>
                    <div className="review">
                        <div className="review_date">30 04 2024</div>
                        <div className="user_name">Trần Thị Tuyết</div>
                    <p className="review_content">
                        Sản phẩm tốt chất lượng, giao hàng nhanh!!
                    </p>
                    </div>
                </div>
            </div>
            </TabPanel>
            </Tabs>
            </div>
        </div>
        </>
    );
}
export default memo(DetailProduct);