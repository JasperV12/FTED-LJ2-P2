import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch('/categories.json')
      .then((response) => {
        if (!response.ok) throw new Error('Could not load categories.')
        return response.json()
      })
      .then(setCategories)
      .catch((loadError) => setError(loadError.message))
  }, [])

  return (
    <div id="top">
      <header className="header">
        <a href="#top">Florist</a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={menuOpen ? 'navigation open' : 'navigation'}>
          <a href="#top">Home</a>
          <a href="#categories">Roses</a>
          <a href="#categories">Bouquets</a>
          <a href="#categories">Plants</a>
          <a href="#categories">Gifts</a>
          <a href="#shop">Location</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <h1>Fresh Flowers, Thoughtfully Arranged</h1>
            <p>
              Seasonal blooms crafted for everyday moments and meaningful
              occasions. Sourced responsibly and arranged with care.
            </p>
            <a className="button" href="#categories">Shop Flowers</a>
          </div>
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85"
              alt="A colorful flower bouquet"
            />
            <h2>Indoor Plants</h2>
          </div>
        </section>

        <section className="categories" id="categories">
          {error ? (
            <p>{error}</p>
          ) : (
            categories.map((category) => (
              <article className="category" key={category.id}>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </article>
            ))
          )}
        </section>

        <section className="shop" id="shop">
          <img
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=85"
            alt="Flowers in a florist shop"
          />
          <div>
            <h2>Visit Our Shop</h2>
            <p>
              123 Flower Street<br />
              Garden District<br />
              Bloomtown, BT 45678
            </p>
            <p>
              Open Monday to Saturday<br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </section>

        <footer className="footer">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Pinterest</span>
          <span>Twitter</span>
        </footer>
      </main>
    </div>
  )
}

export default App
