import ProductInfos from './product';

const infos = JSON.parse(ProductInfos);

function Name () {
    return (
        <h1>{infos.name}</h1>
    );  
}



export default Name;