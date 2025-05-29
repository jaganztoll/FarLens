import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container fullscreen text-center">
        <h2>About the Project</h2>
        <p>
          This project is a tribute to the <strong>Far Cry</strong> series, showcasing the real-world locations
          that inspired the game worlds of <strong>Far Cry 3</strong> through <strong>Far Cry 6</strong>.
          The environments in these titles are more than just visual set pieces – they help shape the tone,
          atmosphere, and storytelling of each game.
        </p>

        <p>
          Each section of the site reflects one game and presents a small collection of real-world images
          that echo its visual style. The photos are arranged in a simple <strong>masonry layout</strong> and
          grouped by game title to hint at their geographic inspiration.
        </p>

        <p>
          As a fan of the series, I’ve always been fascinated by how authentic and immersive these digital worlds feel.
        </p>

        <p>
          The site was built using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong>,
          with a focus on <strong>responsive design</strong> and clean, expressive typography.
        </p>

      </div>
    </section>
  );
}

export default About;
