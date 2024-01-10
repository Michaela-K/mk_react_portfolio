import data from "../data/index.json";

export default function Skills() {
  return (
    <section className="skills__section" id="mySkills">
      <div className="portfolio__container">
        <p className="section__title">My Skills</p>
        <h2 className="skills__section__heading">My Expertise</h2>
      </div>
      <div className="skills__section__container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills__section__card">
            <div className="skills__section__img">
              <img src={item.src} alt={item.alt} />
            </div>
            <div className="skills__section__card__content">
              <h3 className="skills__section__title">{item.title}</h3>
              <p className="skills__section__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}