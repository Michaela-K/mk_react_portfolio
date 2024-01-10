import data from "../data/index.json";

export default function Portfolio() {
  return (
    <section className="portfolio__section" id="Portfolio">
      <div className="portfolio__container-box">
        <div className="portfolio__container">
          <p className="sub__title">Recent Projects</p>
          <h2 className="section__heading">Portfolio</h2>
        </div>
      </div>
      <div className="portfolio__section__container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio__section__card">
            <div className="portfolio__section__img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio__section__card__content">
              <div>
                <h3 className="portfolio__section__title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio__link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}