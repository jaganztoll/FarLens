import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container fullscreen text-center">
        <h2>About the Project</h2>
        <p>
          This project explores the real-world locations that inspired the game
          worlds of <strong>Far Cry 3 through 6</strong>. The environments in
          the Far Cry series are more than just scenery. They play an active
          role in shaping the atmosphere and storytelling. This website reveals
          the geographic and cultural sources behind these iconic digital
          landscapes.
        </p>

        <p>
          Each region on this site corresponds to one of the game titles and
          presents real-world locations used by Ubisoft as visual references.
          These are highlighted through curated color palettes, stylized
          photography, and short contextual descriptions. The layout follows a{" "}
          <strong>minimalist, artistic concept</strong>.
        </p>

        <p>
          As a fan of the series, I have always been fascinated by how authentic
          the game worlds feel.
        </p>

        <p>
          The site was built using <strong>React</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>CSS</strong>. It focuses on{" "}
          <strong>responsive design</strong>, clean typography.
        </p>
      </div>
    </section>
  );
}

export default About;
