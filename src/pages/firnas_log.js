import React, {useState} from "react";
import IntMap from "../comp/intMap";
import "../TicketForm/TicketStyle.css"

function TicketForm() {
  return (
    <div className="card ticket" id="ticket01" style={{ display: "block" }}>
  <div className="card-header">
    <h4 className="m-0">Ticket details</h4>
    <a href="#" className="close" style={{}}>
      <i className="far fa-times-circle" />
    </a>
  </div>
  <div className="card-body">
    <ul>
      <li>
        <label>
          <i className="fa fa-file-alt" /> Number of ticket :
        </label>
        <span id="NumTicket">82</span>
      </li>
      <li>
        <label>
          <i className="fa fa-file-alt" /> Status of local ticket :
        </label>
        <span id="StatusTicket">approved</span>
      </li>
      <li>
        <label style={{ whiteSpace: "nowrap" }}>
          <i className="fa fa-file-alt" /> Status of automax ticket :
        </label>
        <span id="StatusAutoMaxTicket" className="text-right">
          Sent
        </span>
      </li>
      <li>
        <label>
          <i className="fa fa-calendar" /> Date / Time :
        </label>
        <span id="DateTime" className="">
          2022-08-22 07:52:15
        </span>
      </li>
      <li>
        <label>
          <i className="fa fa-map-pin" /> Latitude :
        </label>
        <span id="Lat">24.5032</span>
      </li>
      <li className="">
        <label>
          <i className="fa fa-map-pin" /> Longitude :
        </label>
        <span id="Long">39.5688</span>
      </li>
      <li>
        <label>
          <i className="fa fa-tag" /> Class name :
        </label>
        <span id="Class">Garbage</span>
      </li>
      <li className="">
        <label>
          <i className="fa fa-tag" /> Count of objects :
        </label>
        <span id="Count">1</span>
      </li>
      <li>
        <label>
          <i className="fa fa-tag" /> Confidence :
        </label>
        <span id="Confidence">46.12%</span>
      </li>
      <li>
        <label>
          <i className="fa fa-download" /> Prediction output Type :
        </label>
        <span id="json_link">
          <a href="http://pocf.letsvers.com/fetch/marker/82" target="_blank">
            JSON
          </a>
        </span>
      </li>
      <li>
        <label>
          <i className="fa fa-paperclip" /> Prediction output File :
        </label>
        <span id="outputfile">
          <a
            href="http://pocf.letsvers.com/raster/63d525ce69854.JPEG"
            target="_blank"
          >
            Proccessed image
          </a>
        </span>
      </li>
    </ul>
    <div className="mx-auto text-center mt-1" id="actions">
      <a
        href="#"
        onclick="updateStatus(1,82)"
        className="btn btn-success text-white mr-3 disabled"
      >
        Approve
      </a>
      <a
        href="#"
        onclick="updateStatus(0,82)"
        className="btn btn-danger text-white disabled"
      >
        Reject{" "}
      </a>
      <a
        onclick="getAutoMaxStatus(0,82)"
        id="sendTicket"
        className="btn btn-info btn-block text-white mt-2"
        target="_blank"
      >
        <i className="fa fa-cloud" /> Update ticket status
      </a>
    </div>
  </div>
</div>

  );
}

const FirnasLog = () => {

  const [showForm, setShowForm] = useState(false);

  const handleMarkerClick = () => {
    setShowForm(true);
  };
  
  return (
    <>
      
      <nav
          className="navbar navbar-expand-md sticky-top py-3 navbar-dark"
          id="mainNav"
          style={{ background: "#025F5F", color: "#00544D" }}
        >
          <div className="container">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#navcol-2"
              className="navbar-toggler"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <img
              src="assets/img/Screenshot%202023-08-02%20at%204.11.46%20PM.png"
              width={347}
              height={129}
            />
            <div
              className="collapse navbar-collapse"
              id="navcol-1"
              style={{
                borderStyle: "none",
                color: "rgba(0,84,77,0)",
                marginRight: "-475px",
                paddingRight: 170,
              }}
            >
              <button
                className="btn btn-primary"
                data-bss-hover-animate="flash"
                type="button"
                style={{
                  background: 'url("assets/img/logo.png") no-repeat, #00000000',
                  backgroundSize: "cover, auto",
                  width: 292,
                  height: 102,
                  transform: "perspective(0px)",
                  color: "rgba(0,0,0,0)",
                  marginRight: 23,
                  paddingRight: 0,
                  paddingBottom: 0,
                  marginBottom: 21,
                  borderColor: "#025F5F",
                }}
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{
                  background:
                    'url("assets/img/logo1.png") no-repeat, #00000000',
                  backgroundSize: "cover, auto",
                  width: 341,
                  height: 104,
                  transform: "perspective(0px)",
                  color: "rgba(0,0,0,0)",
                  paddingBottom: 0,
                  marginBottom: 3,
                  marginRight: 12,
                  paddingRight: 0,
                  marginTop: 34,
                  borderColor: "#025F5F",
                }}
              />
              <small>
                Tex
                <i
                  className="fa fa-user"
                  style={{
                    fontSize: 26,
                    marginRight: 9,
                    color: "#ffffff",
                    paddingLeft: 52,
                    marginTop: 119,
                    marginLeft: 89,
                    marginBottom: "-14px",
                  }}
                />
                t
              </small>
              <small
                style={{
                  fontFamily: "Raleway, sans-serif",
                  color: "var(--bs-primary-bg-subtle)",
                  fontSize: 18,
                  marginTop: 120,
                  fontWeight: "bold",
                  marginRight: "-2px",
                  marginLeft: "-8px",
                }}
              >
                Firnas Aero
              </small>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item" />
              </ul>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navcol-2"
              style={{
                borderStyle: "none",
                color: "rgba(0,84,77,0)",
                marginRight: "-475px",
                paddingRight: 170,
              }}
            />
          </div>
        </nav>
  <section className="py-5" style={{ background: "#ffffff" }}>
    <section
      className="py-4 py-xl-5"
      style={{ marginBottom: "-29px", marginTop: "-78px" }}
    >
      <div
        className="container"
        style={{ borderBottomColor: "var(--bs-secondary)" }}
      >
        <div
          className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5"
          style={{
            height: "170.398px",
            width: 1296,
            color: "#327777",
            border: "13px double var(--bs-secondary)"
          }}
        >
          <div
            className="pb-2 pb-lg-1"
            style={{ borderStyle: "solid", borderBottomStyle: "none" }}
          >
            <h2
              className="fw-bold mb-2"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 30,
                color: "#327777",
                borderColor: "var(--bs-secondary)",
                fontWeight: "bold"
              }}
            >
              <strong>Upload image</strong>
            </h2>
            <p
              className="mb-0"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 24,
                color: "#327777",
                borderColor: "var(--bs-secondary)",
                fontWeight: "bold"
              }}
            >
              Upload images and process them to create a ticket in the AlMadinah
              platform&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="files color form-group mb-3">
        <input
          type="file"
          multiple=""
          name="files"
          style={{
            fontFamily: "Raleway, sans-serif",
            background: "rgb(255,255,255)",
            borderColor: "var(--bs-primary)",
            marginBottom: "-13px",
            fontWeight: "bold"
          }}
        />
      </div>
    </div>
    <section
      className="py-4 py-xl-5"
      style={{ marginTop: "-30px", marginBottom: "-33px" }}
    >
      <div className="container">
        <div
          className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5"
          style={{
            paddingBottom: 23,
            marginBottom: "-13px",
            marginTop: "-1px"
          }}
        >
          <div
            className="pb-2 pb-lg-1"
            style={{ marginRight: 0, paddingRight: 0 }}
          >
            <h2
              className="fw-bold mb-2"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 30,
                color: "#327777",
                fontWeight: "bold"
              }}
            >
              Interactive map
            </h2>
            <p
              className="mb-0"
              style={{
                fontFamily: "Raleway, sans-serif",
                color: "#327777",
                fontWeight: "bold",
                fontSize: 24
              }}
            >
              This map is to view tickets and push them to AlMadinah platform
            </p>
          </div>
        </div>
      </div>
    </section>
    <h1
      style={{
        fontFamily: "Raleway, sans-serif",
        textAlign: "center",
        fontSize: 35
      }}
    />


    <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <IntMap onMarkerClick={handleMarkerClick} />
          </div>
          {showForm && (
            <div style={{ flex: 1 }}>
              <TicketForm />
            </div>
          )}
        </div>


    <footer className="text-center">
      <div className="container text-muted py-4 py-lg-5">
        <p className="mb-0" style={{ fontFamily: "Raleway, sans-serif" }}>
          Firnas Aero © 2023
        </p>
      </div>
    </footer>
  </section>
  <section />
  <section />
</>

    
  );
};

export default FirnasLog;
