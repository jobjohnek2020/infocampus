import ProductDetail from "./productdetail";

const Products = () => {
    return(
        <div className="container">
            <h1>Component re-use in React</h1>
            <ProductDetail pname="Mango" color="yellow" pprice="300" seller="Jay"/>
            <ProductDetail pname="Banana" color="green" pprice="80" seller="Marc"/>
            <ProductDetail pname="Orange" color="yellow" pprice="120" seller="Joey"/>
            <ProductDetail pname="Grape" color="green" pprice="100" seller="Ann"/>
            <ProductDetail pname="Papaya" color="yellow" pprice="40" seller="Jessie"/>
        </div>
    );
};

export default Products;