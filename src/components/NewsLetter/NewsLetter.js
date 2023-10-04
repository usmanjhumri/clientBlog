import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter-wrapper">
        <div className="newsletter-box">
          <h1>Subscribe to our newsletter</h1>
          <h5>Shakarzahi LLC</h5>
          <form>
            <div>
              <input type="text" />
              <input type="submit" value="Join us" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
