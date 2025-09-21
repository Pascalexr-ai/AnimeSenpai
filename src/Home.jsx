 import './Home.css'
 import { useNavigate} from 'react-router-dom';
 function Home() {

  


    const navigate =  useNavigate();
    const handleClothing =(e)=>{
        e.preventDefault();
        navigate('/Clothing');
    }
    const navigate3 = useNavigate();
    const handleExplore =(t)=>{
      t.preventDefault();
      navigate3('/Explore')
    }

     const navigate1 =  useNavigate();
    const handleAssesories =(i)=>{
        i.preventDefault();
        navigate1('/Assesories');
    }

      const navigate2 =  useNavigate();
    const handleDownload =(i)=>{
        i.preventDefault();
        navigate1('/Download');
    }
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Your Anime World Awaits 🌸</h1>
          <p>Shop anime merch, stream  and connect with fans.</p>
          <p></p>
          <button onClick={handleExplore} className="cta-btn">Explore Now</button>
        </div>
      </section>

      
      <section className="collections">
        <h2>Featured Collections</h2>
        <div className="cards">
          <div onClick={handleClothing} className="card">Clothing</div>
          <div onClick={handleAssesories} className="card">Accessories</div>
         
        </div>
      </section>

     
      <section className="popular">
        <h2>Popular This Week</h2>
        <div className="products">
          <div onClick={handleClothing} className="product">Naruto Hoodie</div>
          <div onClick={handleClothing} className="product">One Piece Poster</div>
          <div onClick={handleClothing} className="product">Demon Slayer Keychain</div>
        </div>
      </section>

      
      <section className="community">
        <h2>Join the Community</h2>
        <p>Meet thousands of anime lovers sharing their passion.</p>
        <button className="cta-btn">Join the Chat</button>
      </section>

      
      <footer>
        <p>AnimeSenpai Built by fans, for fans ❤</p>
      </footer>

    </div>
  );
}
export default Home;