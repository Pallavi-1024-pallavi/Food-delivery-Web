import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [showBurgerTypes, setShowBurgerTypes] = useState(false);
  const [showPizzaTypes, setShowPizzaTypes] = useState(false);
  const [showChickenTypes, setShowChickenTypes] = useState(false);
  const [showMomosTypes, setShowMomosTypes] = useState(false);
  const [showMilkshakeTypes, setShowMilkshakeTypes] = useState(false);
  const navigate = useNavigate(); // React Router navigate hook

  const handleAddToCart = () => {
    // Navigate to the Cart page
    navigate('/cartpage');
  };

  const containerStyle = {
    backgroundColor: '#000',
    color: '#FFD700',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '38px',
    fontWeight: 'bold',
    marginBottom: '30px',
    marginTop: '50px',
  };

  const categoryButtonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  };

  const imageButtonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: '#FFD700',
  };

  const imageStyle = {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    border: '4px solid #FFD700',
    transition: 'transform 0.3s',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const typeCardStyle = {
    backgroundColor: '#111',
    border: '2px solid #FFD700',
    borderRadius: '15px',
    padding: '15px',
    width: '180px',
    textAlign: 'center',
  };

  const typeImageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const addToCartButtonStyle = {
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Explore Our Menu</h1>
      <h1 style={{ width: '100%', borderRadius: '10px' }}>30% Offer on Your First Order</h1>

      <div style={categoryButtonsStyle}>
        {/* Burger Category */}
        <button
          style={imageButtonStyle}
          onClick={() => {
            setShowBurgerTypes(!showBurgerTypes);
            setShowPizzaTypes(false);
            setShowChickenTypes(false);
            setShowMomosTypes(false);
            setShowMilkshakeTypes(false);
          }}
        >
          <img
            src="https://www.shutterstock.com/image-vector/black-yellow-burger-fast-food-600w-1747486895.jpg"
            alt="Burger"
            style={imageStyle}
          />
          <p>Burgers</p>
        </button>

        {/* Pizza Category */}
        <button
          style={imageButtonStyle}
          onClick={() => {
            setShowPizzaTypes(!showPizzaTypes);
            setShowBurgerTypes(false);
            setShowChickenTypes(false);
            setShowMomosTypes(false);
            setShowMilkshakeTypes(false);
          }}
        >
          <img
            src="https://c8.alamy.com/comp/2HXMCKC/pizza-slice-with-melt-smile-face-t-shirt-print-vector-doodle-line-cartoon-character-illustrationpizzatrippy-smile-faceacid-print-on-poster-t-shirtlogo-concept-2HXMCKC.jpg"
            alt="Pizza"
            style={imageStyle}
          />
          <p>Pizzas</p>
        </button>

        {/* Chicken Category */}
        <button
          style={imageButtonStyle}
          onClick={() => {
            setShowChickenTypes(!showChickenTypes);
            setShowBurgerTypes(false);
            setShowPizzaTypes(false);
            setShowMomosTypes(false);
            setShowMilkshakeTypes(false);
          }}
        >
          <img
            src="https://img.freepik.com/premium-vector/fried-chicken-nuggets-plate-vector-illustration-doodle-vector-illustration_969863-164486.jpg"
            alt="Chicken"
            style={imageStyle}
          />
          <p>Chicken</p>
        </button>

        {/* Momos Category */}
        <button
          style={imageButtonStyle}
          onClick={() => {
            setShowMomosTypes(!showMomosTypes);
            setShowBurgerTypes(false);
            setShowPizzaTypes(false);
            setShowChickenTypes(false);
            setShowMilkshakeTypes(false);
          }}
        >
          <img
            src="https://i.pinimg.com/736x/17/09/b3/1709b39b09d755d77eebadd1a88e60f2.jpg" 
            alt="Momos"
            style={imageStyle}
          />
          <p>Momos</p>
        </button>

        {/* Milkshake Category */}
        <button
          style={imageButtonStyle}
          onClick={() => {
            setShowMilkshakeTypes(!showMilkshakeTypes);
            setShowBurgerTypes(false);
            setShowPizzaTypes(false);
            setShowChickenTypes(false);
            setShowMomosTypes(false);
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/049/242/701/small_2x/cute-cartoon-illustration-of-a-yellow-milkshake-with-whipped-cream-and-a-black-straw-free-vector.jpg" 
            alt="Milkshake"
            style={imageStyle}
          />
          <p>Milkshakes</p>
        </button>
      </div>

      {/* Display Food Types Based on the Category Clicked */}
      {showBurgerTypes && (
        <div style={gridStyle}>
          <div style={typeCardStyle}>
            <img src="https://thumbs.dreamstime.com/b/delicious-burger-flying-ingredients-isolated-dark-background-food-levitation-concept-high-resolution-image-360311018.jpg" alt="Burger Type 1" style={typeImageStyle} />
            <p>Veg Burger Rs.120</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://www.shutterstock.com/image-photo/dynamic-cheeseburger-splash-midair-on-600nw-2490269053.jpg" alt="Burger Type 2" style={typeImageStyle} />
            <p>Cheese Burger Rs.135</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://thumbs.dreamstime.com/b/delicious-burger-fried-chicken-cheese-vegetables-falling-apart-crispy-nuggets-flying-around-cola-dark-background-329018248.jpg" alt="Burger Type 3" style={typeImageStyle} />
            <p>Chicken Burger Rs.180</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      {showPizzaTypes && (
        <div style={gridStyle}>
          <div style={typeCardStyle}>
            <img src="https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg" alt="Pizza Type 1" style={typeImageStyle} />
            <p>Margherita Pizza Rs.190</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://as2.ftcdn.net/jpg/02/09/66/63/1000_F_209666312_oegam0ieyO7keWNWR3lNLqQJhuaREcmt.jpg" alt="Pizza Type 2" style={typeImageStyle} />
            <p>Pepperoni Pizza Rs.210</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://sugarspunrun.com/wp-content/uploads/2024/05/BBQ-chicken-pizza-1-of-1.jpg" alt="Pizza Type 3" style={typeImageStyle} />
            <p>Chicken Pizza Rs.280</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      {showChickenTypes && (
        <div style={gridStyle}>
          <div style={typeCardStyle}>
            <img src="https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg" alt="Chicken Type 1" style={typeImageStyle} />
            <p>Crispy Fried Chicken Rs.195</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://bakerbynature.com/wp-content/uploads/2015/02/Sweet-and-Spicy-Sriracha-Chicken-Wings-0-6.jpg" alt="Chicken Type 2" style={typeImageStyle} />
            <p>Chicken Wings Rs.180</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://st3.depositphotos.com/7691758/18788/i/450/depositphotos_187885158-stock-photo-fried-chicken-strips-on-white.jpg" alt="Chicken Type 3" style={typeImageStyle} />
            <p>Chicken Strips Rs.168</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      {showMomosTypes && (
        <div style={gridStyle}>
          <div style={typeCardStyle}>
            <img src="https://chefadora.b-cdn.net/medium_931_DFCAA_1_C48_4496_B851_1_AD_52_DC_74233_4597b7d9e8.jpeg" alt="Momos Type 1" style={typeImageStyle} />
            <p>Veg Momos Rs.100</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://static.wixstatic.com/media/181d31_973b2a5426bd49bfa29a33c7c27e37c6~mv2.jpg/v1/fill/w_528,h_576,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/181d31_973b2a5426bd49bfa29a33c7c27e37c6~mv2.jpg" alt="Momos Type 2" style={typeImageStyle} />
            <p>Tandoori Momos Rs.180</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://salasdaily.com/cdn/shop/files/chiliachickenmomos.jpg?v=1692185667" alt="Momos Type 3" style={typeImageStyle} />
            <p>Chicken Momos Rs.190</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      {showMilkshakeTypes && (
        <div style={gridStyle}>
          <div style={typeCardStyle}>
            <img src="https://sreerajlassibar.com/wp-content/uploads/2024/09/Oreo-Milkshake.png" alt="Milkshake Type 1" style={typeImageStyle} />
            <p>Chocolate Milkshake Rs.120</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://sreerajlassibar.com/wp-content/uploads/2024/09/Strawberry-Milkshake.png" alt="Milkshake Type 2" style={typeImageStyle} />
            <p>Strawberry Milkshake Rs.85</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <div style={typeCardStyle}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAXxSz9wWRj58v_i7WtwG4J9xCfIS_2iMsA&s" alt="Milkshake Type 3" style={typeImageStyle} />
            <p>Vanilla Milkshake Rs.85</p>
            <button style={addToCartButtonStyle} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      <div className="offer-box">
        <h2 className="offer-title">Our food starts just from Rs.85 to Rs.250</h2>
        <p className="offer-subtitle">Don't wait, just order!</p>
      </div>
    </div>
  );
};

export default MenuPage;
