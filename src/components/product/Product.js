export default function Product(props){
    const price = props.price;
    const name = props.name;
    return (
        <div className="product">
            <h2>Tên</h2>
            <p>Giá: {price} Đồng</p>
            <p>Ngon</p>
            <button type="button">Thêm vào giỏ hàng</button>
        </div>
    );
}