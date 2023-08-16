import React from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({ products }) {
    return(
        <>
        <h2>Order Available Products</h2>
            <article>
                <h3>Order Selection</h3>
                <p> Select the amount of each item you would like to order - up to 10.</p>
                <table id="productTable">
                    <caption>Available Items</caption>
                    <thead>
                        <tr>
                            <th>Product, Brand</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, idx) =>
                        <ProductRow
                            item={item}
                            key={idx}
                            />
                            )}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </article>
        </>
    );
}

export default OrderPage;