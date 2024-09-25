import data from "../data/index.json";

export default function Skills() {
  return (
    <section className="skills__section" id="Skills">
      <div className="skills__section__container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills__section__card">
            <div className="skills__section__img">
              <img src={item.src} alt={item.alt} />
            </div>
            <div className="skills__section__card__content">
              <h3 className="skills__section__title">{item.title}</h3>
              <p className="skills__section__description">{item.description}</p>
              <p className="text-xl portfolio__link">
                <a href={item.webflowref} target="_blank" rel="noopener noreferrer">
                  {item.externalLink}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}