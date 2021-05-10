import React from 'react';
import 'pages/intro/Intro.scss'
import EntireFlow from 'assets/images/icons/entire-flow.png';
// import EntireFlow1 from 'assets/images/icons/entire_flow.png';
import {routes} from 'constants/routes';

/**
 * Stateless component responsible for rendering a simple SSI introduction screen.
 * */
const IntroPage = () => {
  return (
    <div className='intro page-form page-form--large'>
      <div className='intro__heading-block'>
        <h1 className='intro__heading'>
          StartUp A - Invoice Issuer
        </h1>
        <h5 className='intro__subheading'>A simple use case by Affinidi</h5>
      </div>
      <div className='intro__text-block'>
        <h4>Scenario</h4>
        <p>Sanjeev, a Timber depot SMEs entrepreneur, is planning to avail loan for his working capital in Hyderabad, India and planning to approach financial institutes with pending invoices as collateral. </p>
        <p>As he approaches financial institute, the loan appraiser struggles to verify that his financial reports are legitimate as different financial institutes may have different templates for invoice financing.</p>
        <p>Instead, Sanjeev could provide his verifiable credentials which contain pending invoice information to the loan appraiser and is also able to use the same credential if he wants any other financial benefits like insurance.</p>
        <h4>Roles in this scenario</h4>
        <p>There are 3 roles in SSI cycle: <strong>ISSUER</strong>, <strong>VERIFIER</strong>, and <strong>HOLDER</strong>. Each of them is explained in the example below.</p>
      </div>
      <div className='intro__example'>
        <img className='flow-size' src={EntireFlow} alt='entire-flow'/>
      </div>
      <div className='intro__roles-description'>
        <div className='intro__roles-description-role'>
          <h3>Issuer</h3>
          <p>StartUp A is able to issue a digitalised verified credentials which has information that a standard invoice financing has.</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Holder</h3>
          <p>A Timber merchant, is planning to avail finance against his pending invoice so he/she do not have to present their physical invoice document during incoice financing process.</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Verifier</h3>
          <p>A financial institue would be able to verify the verfied credentials and not to worry about the legitimacy of the pending invoices as it may be difficult to verify different documents. This is to also ensure that their loans are dispursed to individuals who are having good business financial record.</p>
        </div>
      </div>

      <p>Ready to try out the application? Get started <a href={routes.APPLICANT_LOGIN} rel='noreferrer'>here</a> by being the applicant first!</p>
      <p>For more information and well documented tutorials, please visit <a href='https://www.affinidi.com/api' target='_blank' rel='noreferrer'>https://www.affinidi.com/api</a>.</p>
    </div>
  )
}

export default IntroPage
