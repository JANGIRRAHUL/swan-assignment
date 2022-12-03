import done from "./verified.png";

const SuccessfullySubmit = () => {
  return (
    <>
      <div className="container">
        <div style={{padding:50}}>
          <div className="msgContainer">
            <img src={done} alt="" />
            <p>
              Your message has been sent, <br /> Our team will get back to you
              as soon as possible
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfullySubmit;
