import ProductInfos from './product';

const infos = JSON.parse(ProductInfos);

function Image () {
    return (
        <img style = {{width: "400px", height: "250px", borderRadius: "10px"}} alt = "Art presentation" src = {infos.path} />
    );  
}



export default Image;