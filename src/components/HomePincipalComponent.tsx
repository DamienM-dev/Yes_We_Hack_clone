import DOMPurify from "dompurify";
import Button from "./Button";

type HomeProps = {
  img: string;
  alt: string;
  title: string;
  paragraph: string;
};

function HomePincipal({ title, paragraph }: HomeProps) {
  return (
    <section>
      <div className="containerHome">
        <div>
          <h1
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
            className="titleHome"
          ></h1>
          <p
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }}
            className="secondaryTitle"
          ></p>
          <div className="containerButton">
            <Button title="contact" href="/contact" variant="primary" />
            <Button title="s'inscrire" href="/register" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePincipal;
