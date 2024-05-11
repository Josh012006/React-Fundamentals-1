import ProductInfos from './product';

const infos = JSON.parse(ProductInfos);

function Description () {
    return (
        <p style = {{textAlign: "justify"}}>{infos.description}</p>
    );  
}


export default Description;