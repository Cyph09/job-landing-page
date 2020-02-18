import React from "react";
import classes from "../style/home.module.scss";

const Home = props => {
  return (
    <section>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <h1>
              <a href="#">Wiloa</a>
            </h1>
          </div>
          <ul className={classes.listItems}>
            <li className={classes.listItem}>
              <a href="#">Home</a>
            </li>
            <li className={classes.listItem}>
              <a href="#">Featured</a>
            </li>
            <li className={classes.listItem}>
              <a href="#">How it works?</a>
            </li>
            <li className={classes.listItem}>
              <a href="#">Find Job</a>
            </li>
            <li className={classes.listItem}>
              <a href="#">Post Job</a>
            </li>
            <li className={classes.listItem}>
              <a
                href="#"
                className={[classes.btn, classes.btnOrange].join(" ")}
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
        <div className={classes.heroContent}>
          <div className={classes.heroText}>
            <h1 className={classes.headingPrimary}>
              <span className={classes.headingTop}>The best place to</span>
              <span className={classes.headingBottom}>find your dream job</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              odio optio repellendus architecto, expedita enim perferendis
              ullam!
            </p>
          </div>
        </div>
        <div className={classes.jobInfo}>
          <div className={classes.jobInfoSummary}>
            <h2 className={classes.jobStats}>
              <span className={classes.stats}>176.981</span>
              <span className={classes.text}>Job Opportunity</span>
            </h2>
            <h2 className={classes.companyStats}>
              <span className={classes.stats}>4.246</span>
              <span className={classes.text}>Company</span>
            </h2>
          </div>
          <div className={classes.jobSearchBox}>
            <div className={classes.formControl}>
              <label htmlFor="search">search</label>
              <input
                type="text"
                className={classes.searchJob}
                name="jobTitle"
                placeholder="Type search title"
              />
            </div>
            <div
              className={[classes.formControl, classes.locationControl].join(
                " "
              )}
            >
              <label htmlFor="location">location</label>
              <input
                type="text"
                className={classes.searchLocation}
                name="location"
                placeholder="Select location"
              />
            </div>

            <input
              type="button"
              value="search"
              className={[classes.btn, classes.searchBtn, classes.btnBlue].join(
                " "
              )}
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Home;
