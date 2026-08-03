import "./ChhotaBheemAnimation.css";

function ChhotaBheemAnimation() {

  const characters = [
    {
      name: "Hero Character",
      image: "/animation-assets/hero-character.png",
    },
    {
      name: "Friend Character",
      image: "/animation-assets/friend-character.png",
    },
    {
      name: "Monkey Companion",
      image: "/animation-assets/monkey-character.png",
    },
  ];


  return (
    <div className="animation-portfolio-page">


      <button
        className="back-button"
        onClick={() => window.history.back()}
      >
        ← Back to RecruitWithEd
      </button>



      <section className="animation-hero">


        <div className="hero-content">

          <h1>
            Chhota Bheem Animation Portfolio
          </h1>

          <p>
            A creative portfolio experience designed and developed
            for a 2D animator and background artist, showcasing
            animation, storytelling, character design, and visual creativity.
          </p>

        </div>



        <div className="village-preview">

          <img
            src="/animation-assets/village-background.png"
            alt="Animation village background"
          />


          <div className="asset-message">

            Add animation artwork here

          </div>


        </div>


      </section>




      <section className="characters-section">


        <h2>
          Character Showcase
        </h2>


        <div className="character-grid">


          {characters.map((character) => (

            <div
              className="character-card"
              key={character.name}
            >

              <img
                src={character.image}
                alt={character.name}
              />

              <h3>
                {character.name}
              </h3>


            </div>

          ))}


        </div>


      </section>




      <section className="skills-section">


        <h2>
          Animation Skills
        </h2>


        <div className="skills-grid">

          <div>
            🎨 Character Design
          </div>

          <div>
            🌄 Background Art
          </div>

          <div>
            🎬 2D Animation
          </div>

          <div>
            📖 Storytelling
          </div>

        </div>


      </section>




      <section className="gallery-section">

        <h2>
          Animation Gallery
        </h2>


        <p>
          Animation frames, artwork, and production visuals
          will be displayed here.
        </p>


      </section>


    </div>
  );
}


export default ChhotaBheemAnimation;