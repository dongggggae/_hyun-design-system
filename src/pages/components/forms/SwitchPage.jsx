const ComponentPage = () => {
  return (
    <>
      <div className="tab__wrap">
        <ul className="tab">
          <li className="tab__item">
            <button className="tab__link active">
              <span className="tab__text">title1</span>
            </button>
          </li>
          <li className="tab__item">
            <button className="tab__link">
              <span className="tab__text">title1</span>
            </button>
          </li>
          <li className="tab__item">
            <button className="tab__link">
              <span className="tab__text">title1</span>
            </button>
          </li>
        </ul>
        <div className="tab__content">
          <div className="tab__pane">content1</div>
        </div>
        <div className="tab__content">
          <div className="tab__pane">content2</div>
        </div>
        <div className="tab__content">
          <div className="tab__pane">content3</div>
        </div>
      </div>

      <div className="tab__wrap">
        <ul className="tab tab--pills">
          <li className="tab__item">
            <button className="tab__link active">
              <span className="tab__text">title1</span>
            </button>
          </li>
          <li className="tab__item">
            <button className="tab__link">
              <span className="tab__text">title1</span>
            </button>
          </li>
          <li className="tab__item">
            <button className="tab__link">
              <span className="tab__text">title1</span>
            </button>
          </li>
        </ul>
        <div className="tab__content">
          <div className="tab__pane">content1</div>
        </div>
        <div className="tab__content">
          <div className="tab__pane">content2</div>
        </div>
        <div className="tab__content">
          <div className="tab__pane">content3</div>
        </div>
      </div>

      <div className="tab__wrap">
        <ul className="tab tab--fill">
          <li className="tab__item">
            <button className="tab__link active">
              <span className="tab__text">title1</span>
            </button>
          </li>
          <li className="tab__item">
            <button className="tab__link">
              <span className="tab__text">title1</span>
            </button>
          </li>
          <li className="tab__item">
            <button className="tab__link">
              <span className="tab__text">title1</span>
            </button>
          </li>
        </ul>
        <div className="tab__content">
          <div className="tab__pane">content1</div>
        </div>
        <div className="tab__content">
          <div className="tab__pane">content2</div>
        </div>
        <div className="tab__content">
          <div className="tab__pane">content3</div>
        </div>
      </div>
    </>
  );
};

export default ComponentPage;
