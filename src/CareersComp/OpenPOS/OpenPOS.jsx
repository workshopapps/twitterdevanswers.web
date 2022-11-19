import React from 'react';
import classes from "./OpenPOS.module.css";


import careersArrowup from "../../careers_images/careers_arrowup.svg";

function OpenPOS () {
  return (
    <div className={classes.OpenPOS} id="open">
      <h1>Open Positions</h1>

      <main className={classes.mainposition}>
        {/* positions */}
        <div className={classes.positons}>

          <div className={classes.sen}>
            <div className={classes.senior}>
            <a href="/">Senior Product Designer </a>
            <img src={careersArrowup} alt="careers_arrowup" />
            </div>
            <div className={classes.remote}>
              <p>Design</p>
              <p>Remote </p>
            </div>
          </div>

          <div className={classes.sen}>
          <div className={classes.senior}>
            <a href="/">DevOps Engineer </a>
            <img src={careersArrowup} alt="careers_arrowup" />
        </div>
            <div className={classes.remote}>
              <p>Engineering</p>
              <p>Remote </p>
            </div>
          </div>

          <div className={classes.sen}>
          <div className={classes.senior}>
            <a href="/">Senior Software Engineer (PHP)</a>
            <img src={careersArrowup} alt="careers_arrowup" />
          </div>
          <div className={classes.remote}>
              <p>Engineering</p>
              <p>Remote </p>
            </div>
            </div>

        <div className={classes.sen}>
          <div className={classes.senior}>
            <a href="/">Junior Accountant </a>
            <img src={careersArrowup} alt="careers_arrowup" />
          </div>
          <div className={classes.remote}>
              <p>Accounting</p>
              <p>Remote </p>
            </div>
            </div>

            <div className={classes.sen}>
          <div className={classes.senior}>
            <a href="/">Lead UX Designer </a>
            <img src={careersArrowup} alt="careers_arrowup" />
          </div>
          <div className={classes.remote}>
              <p>Design</p>
              <p>Remote </p>
            </div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default OpenPOS;
