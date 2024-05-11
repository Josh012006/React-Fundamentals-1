import ProductInfos from './product';

const infos = JSON.parse(ProductInfos);

function Price () {
    return (
        <span style = {{fontWeight:"bold"}}>{infos.price} $US</span>
    );  
}



export default Price;