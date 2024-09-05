import React from 'react'

const Technologies = () => {
  return (
    <section className="mb-3">
      <div className="container">
        <h3 className="second-title text-center mb-3 dark-blue">
          qui le mie competenze
        </h3>
        <div className="row justify-content-between align-items-center gap-2 mb-3">
          <div className="col-6">
            <div
              className="bg-yellow"
              style={{ height: "400px" }}
            ></div>
          </div>
          <div className="col-3">
            <div>
              <h2>
                Lorem ih2sum dolor sit
                <br />
                amet consectetur adipisicing elit.
                <br /> Placeat, officiis.
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-center gap-2">
          <div className="col-3">
            <div>
              <h2>
                Lorem ih2sum dolor
                <br /> sit amet consectetur adipisicing elit.
                <br /> Placeat, officiis.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div
              className="bg-dark-blue"
              style={{height: "400px"}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies