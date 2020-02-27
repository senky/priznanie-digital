import React from "react";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const DEBUG_ON = false;
const Layout = ({ children, debug }) => (
  <div className="container">
    <Head>
      <title>priznanie.digital</title>
    </Head>
    <Header />
    <div className="sdn-headline">
      <div className="sdn-headline__container govuk-width-container">
        <div className="sdn-headline__part">
          <span className="sdn-headline__headline">
            Daňové priznanie pre živostníkov s paušálnymi výdavkami (DPFO typ B)
          </span>
        </div>
      </div>
    </div>

    <div className="govuk-width-container content-container">
      <div className="govuk-phase-banner">
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag">
            alpha
          </strong>
          <span className="govuk-phase-banner__text">
            This is a new service – your{" "}
            <a className="govuk-link" href="#">
              feedback
            </a>{" "}
            will help us to improve it.
          </span>
        </p>
      </div>
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">{children}</div>
          <div
            className="govuk-grid-column-one-third"
            style={{ visibility: DEBUG_ON ? "visible" : "hidden" }}
          >
            {debug}
          </div>
        </div>
      </main>
    </div>
    <Footer />
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      .content-container {
        flex-grow: 1;
        width: 100%;
      }
    `}</style>
  </div>
);

export default Layout;
