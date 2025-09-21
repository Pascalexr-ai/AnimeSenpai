import { useNavigate } from 'react-router-dom';
import './Explore.css';


function Explore() {
    const navigate = useNavigate();
    const handleExplorer =(e)=>{
        e.preventDefault();
        navigate('/Clothing')
    }

  return (
    <div className="explore-page">
      {/* Hero Section */}
      <section className="explore-hero">
        <h1> Explore AnimeSenpai ✨</h1>
        <p>Unleash your otaku spirit — shop, connect, and dive into anime culture.</p>
        <button onClick={handleExplorer} className="explore-main-btn">Start Exploring</button>
      </section>

      {/* Categories */}
      <section className="explore-categories">
        <h2>🌸 Popular Categories</h2>
        <div className="category-grid">
          <div onClick={handleExplorer} className="category-card">
            <img src="/Animehoodie.jpg" alt="Merch" />
            <h3>Merchandise</h3>
            <p>From hoodies to posters, find what suits your style.</p>
          </div>

          <div className="category-card">
            <img src="/FanArt.webp" alt="Art" />
            <h3>Fan Art</h3>
            <p>Explore stunning art from anime creators worldwide.</p>
          </div>

          <div className="category-card">
            <img src="/Akaza.jpg" alt="Wallpapers" />
            <h3>Wallpapers</h3>
            <p>HD anime wallpapers to customize your devices.</p>
          </div>

          
        </div>
      </section>

      {/* Featured Section */}
      <section className="explore-featured">
        <h2>🔥 Featured This Month</h2>
        <div className="featured-cards">
          <div className="featured-card">
            <h3>Naruto Collection</h3>
            <p>Exclusive Naruto merch with limited editions.</p>
            <button className="explore-btn">Shop Now</button>
          </div>
          <div className="featured-card">
            <h3>Demon Slayer Pack</h3>
            <p>Grab wallpapers, posters, and accessories today.</p>
            <button className="explore-btn">Explore Pack</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;