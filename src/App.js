import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

function App({name = "there"}) {
    return (
        <div className = "structure">
            <div className = "card">
                <Image />
                <div className = "card-body">
                    <Name></Name>
                    <Description></Description>
                    <Price></Price>
                </div>
            </div>
            <h1>Hello, {name}!</h1>
        </div>
    );
}

export default App;
