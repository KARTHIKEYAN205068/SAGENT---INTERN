import React, { useState } from "react";

export default function App() {
  // ---------------- STATE MANAGEMENT ----------------

  const [categories, setCategories] = useState([
    { id: 1, name: "Vegetables" },
    { id: 2, name: "Fruits" }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Tomato", price: 40, available: true, categoryId: 1 },
    { id: 2, name: "Apple", price: 120, available: true, categoryId: 2 }
  ]);

  const [customers, setCustomers] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [deliveryPersons] = useState([
    { id: 1, name: "Rahul", contact: "9876543210" },
    { id: 2, name: "Amit", contact: "9123456780" }
  ]);

  const [activeTab, setActiveTab] = useState("products");

  // ---------------- HELPER FUNCTIONS ----------------

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const placeOrder = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    const total = cart.reduce((sum, p) => sum + p.price, 0);

    const newOrder = {
      id: orders.length + 1,
      items: cart,
      status: "Placed",
      totalAmount: total
    };

    setOrders([...orders, newOrder]);
    setCart([]);
  };

  const makePayment = (orderId) => {
    const newPayment = {
      id: payments.length + 1,
      orderId,
      method: "Cash on Delivery",
      status: "Paid"
    };

    setPayments([...payments, newPayment]);
  };

  const assignDelivery = (orderId) => {
    const person = deliveryPersons[Math.floor(Math.random() * deliveryPersons.length)];

    const newDelivery = {
      id: deliveries.length + 1,
      orderId,
      deliveryPerson: person.name,
      contact: person.contact
    };

    setDeliveries([...deliveries, newDelivery]);
  };

  // ---------------- UI ----------------

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🛒 Grocery Delivery App</h2>

      {/* NAVIGATION */}
      <ul className="nav nav-pills mb-4 justify-content-center">
        {["products", "cart", "orders", "admin"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      {/* PRODUCTS */}
      {activeTab === "products" && (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5>{product.name}</h5>
                  <p>₹ {product.price}</p>
                  <p>
                    Category:{" "}
                    {
                      categories.find((c) => c.id === product.categoryId)
                        ?.name
                    }
                  </p>
                  <button
                    className="btn btn-success w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CART */}
      {activeTab === "cart" && (
        <div>
          <h4>Your Cart</h4>
          {cart.length === 0 && <p>No items in cart</p>}
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                {item.name} - ₹{item.price}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <button className="btn btn-primary" onClick={placeOrder}>
              Place Order
            </button>
          )}
        </div>
      )}

      {/* ORDERS */}
      {activeTab === "orders" && (
        <div>
          <h4>Orders</h4>
          {orders.length === 0 && <p>No orders placed yet</p>}
          {orders.map((order) => (
            <div key={order.id} className="card mb-3">
              <div className="card-body">
                <h5>Order #{order.id}</h5>
                <p>Status: {order.status}</p>
                <p>Total: ₹{order.totalAmount}</p>

                <button
                  className="btn btn-success me-2"
                  onClick={() => makePayment(order.id)}
                >
                  Make Payment
                </button>

                <button
                  className="btn btn-warning"
                  onClick={() => assignDelivery(order.id)}
                >
                  Assign Delivery
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADMIN PANEL */}
      {activeTab === "admin" && (
        <div>
          <h4>Admin Dashboard</h4>

          <h5 className="mt-3">Payments</h5>
          <ul className="list-group mb-3">
            {payments.map((p) => (
              <li key={p.id} className="list-group-item">
                Order #{p.orderId} - {p.method} - {p.status}
              </li>
            ))}
          </ul>

          <h5>Deliveries</h5>
          <ul className="list-group">
            {deliveries.map((d) => (
              <li key={d.id} className="list-group-item">
                Order #{d.orderId} → {d.deliveryPerson} ({d.contact})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
