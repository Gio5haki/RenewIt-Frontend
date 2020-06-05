import React from "react";

import "../styleSheets/Card.css";

function Card() {
  return (
    <div className="cards-container">
      <div className="card-wrapper">
        <div className="card-top">
          <a
            href="https://www.worldbank.org/"
            target="_blank"
            title="World Bank"
          >
            <img src="world_bank_logo.png" alt="image"></img>
          </a>
        </div>
        <div className="card-bottom">
          <p>
            <strong>World Bank</strong> is an international financial
            institution that provides loans and grants to the governments of
            poorer countries for the purpose of pursuing capital projects.
          </p>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-top">
          <a
            href="https://www.adb.org/"
            target="_blank"
            title="Asian Development Bank"
          >
            <img src="asian_development_bank.png" alt="image"></img>
          </a>
        </div>
        <div className="card-bottom">
          <p>
            <strong>Asian Development Bank</strong> is a regional development
            bank established on 19 December 1966, headquartered in Manila,
            Philippines. The company also maintains 31 field offices around the
            world to promote social and economic development in Asia.
          </p>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-top">
          <a
            href="https://www.ebrd.com/"
            target="_blank"
            title="European Bank of Reconstruction and Development"
          >
            <img src="ebrd_logo.png" alt="image"></img>
          </a>
        </div>
        <div className="card-bottom">
          <p>
            <strong>European Bank for Reconstruction and Development</strong> is
            an international financial institution founded in 1991. As a
            multilateral developmental investment bank, the EBRD uses investment
            as a tool to build market economies.
          </p>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-top">
          <a
            href="https://www.eib.org/"
            target="_blank"
            title="European Investment Bank"
          >
            <img src="eib_logo.png" alt="image"></img>
          </a>
        </div>
        <div className="card-bottom">
          <p>
            <strong>European Investment Bank</strong> is a publicly owned
            international financial institution whose shareholders are the EU
            member states. It was established in 1958 as a "policy-driven bank"
            using financing operations to further EU policy goals.
          </p>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-top">
          <a
            href="https://energy-community.org/"
            target="_blank"
            title="European Energy Community"
          >
            <img src="energy_community_logo.png" alt="image"></img>
          </a>
        </div>
        <div className="card-bottom">
          <p>
            <strong>Energy Community</strong> is an international organisation
            established between the European Union and a number of third
            countries to extend the EU internal energy market to Southeast
            Europe and beyond.
          </p>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card-top">
          <a
            href="https://www.energycharter.org/"
            target="_blank"
            title="Energy Charter Treaty"
          >
            <img src="energy_charter_logo.png" alt="image"></img>
          </a>
        </div>
        <div className="card-bottom">
          <p>
            <strong>Energy Charter Treaty</strong> is an international
            investment agreement that establishes a multilateral framework for
            cross-border cooperation in the energy industry. The treaty covers
            all aspects of commercial energy activities including trade,
            transit, investments and energy efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
