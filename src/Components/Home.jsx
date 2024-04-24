import { useState, useEffect } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="Loader">Loading...</div>;
  }

  if (error) {
    return <div className="Error">{error}</div>;
  }

  return (
    <div className="ProductGrid">
      {products.map((product) => (
        <div className="ProductCard" key={product.id}>
          <img src={product.image} alt={product.title} className="ProductImage" />
          <div className="ProductInfo">
            <h2 className="ProductTitle">{product.title}</h2>
            <p className="ProductPrice">${product.price}</p>
            <p className="ProductDescription">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
