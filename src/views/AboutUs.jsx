const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h2>Our Mission</h2>
      <p>To give cats the spotlight and to keep dogs in the background where they belong.</p>

      <h2>Our History</h2>
      <p>
        <s>We are dog haters.</s> We are cat lovers.
      </p>

      <h2>Our Team</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://i.imgflip.com/675mkk.jpg" className="card-img-top" alt="Team Member 1" style={{height: '200px'}} />
            <div className="card-body">
              <h5 className="card-title">Tom</h5>
              <p className="card-text">Director</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://i.pinimg.com/736x/18/53/ad/1853adae05ace68f6979cbbac48af2ec.jpg" className="card-img-top" alt="Team Member 2" style={{height: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Hehe</h5>
              <p className="card-text">Senior Developer</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img src="https://i.imgur.com/8jpzOGZ.jpeg" className="card-img-top" alt="Team Member 3" style={{height: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Mittens</h5>
              <p className="card-text">Junior Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
