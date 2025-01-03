const ItemList = () => {
    let items = [
        {
            category: 'Book',
            products: [
                'html', 'css', 'boostrap', 'javascript', 'php', 'nodejs'
            ]
        },
        {
            category: 'Laptop',
            products: [
                'HP', 'ACER', 'LENOVO', 'Toshiba'
            ]
        },
        {
            category: 'Grocery',
            products: [
                'Milk', 'Rice', 'Sugar', 'Potato'
            ]
        },
        {
            category: 'Mobile',
            products: [
                'MI', 'Apple', 'Nokia', 'Samsung'
            ]
        }
    ];
    return (
        <div className="container">
            <h1>Items : {items.length}</h1>
            {
                items.map((item, index1) => {
                    return (<div key={index1 + 1000}>
                        <h2 key={index1}>{item.category}</h2>
                        <ul key={index1 + 100}>
                            <h3 key={index1 + 200}>Products : {item.products.length}</h3>
                            {item.products.map((product, index2) => {
                                return (
                                    <li key={index2}>
                                        {product}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>)
                })
            }
        </div>
    );
};

export default ItemList;