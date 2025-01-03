const ProductDetail = (info) => {
    return(
        <fieldset>
            <legend><b>{info.pname}</b></legend>
            <p><b>Rs.{info.pprice}/-</b></p>
            <p>Sold by <strong>{info.seller}</strong></p>
            <p>In <strong>{info.color}</strong> color</p>
        </fieldset>
    );
};

export default ProductDetail;