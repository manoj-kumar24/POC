import React, { useState } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ApiService from 'utils/apiService';
import { routes } from 'constants/routes';
import firebase from 'utils/firebase/firebase';
import {sellerCompanyIdVCData, buyerCompanyIdVCData, companyInvoiceVCData} from 'utils/vc-data-examples/drivinglicense';
import { sendEmail } from 'utils/templates/email';

interface IProps {
  children?: React.ReactNode,
  location?: any
}

const ApplicationInfoPage: React.FC<IProps & RouteComponentProps> = (props: IProps): React.ReactElement => {
  // const [VCschemaData] = useState<any>(JSON.stringify(drivingLicenseVCData));
  const [VCschemaData1] = useState<any>(JSON.stringify(sellerCompanyIdVCData));
  const [VCschemaData2] = useState<any>(JSON.stringify(buyerCompanyIdVCData));
  const [VCschemaData3] = useState<any>(JSON.stringify(companyInvoiceVCData));

  const { username, payload, applicationID, docID, approved } = props.location.state.state;
  console.log('payload in ApplicationInfoPage::: ', payload);
  const { sellerName, sellerGST, buyerName, buyerGST, invoiceDate, invoiceValue, idClass, holderDid } = payload;
  console.log('idClass inside payload in ApplicationInfoPage::: ', payload);
  const { email, issuerOrganization } = JSON.parse(idClass);
  
  // const { givenName, familyName, holderDid, idClass, issueDate} = payload;
  // const { country, drivingClass, email, issuerOrganization } = JSON.parse(idClass);

  const history = useHistory();

  const isJson = (str: string) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }

  const _approveHelper = async (rawData: any) => {
    // Build unsigned VC
    const {unsignedVC} = await ApiService.issueUnsignedVC(rawData);

    // Sign the VC
    const {signedCredential} = await ApiService.signVC({
      unsignedCredential: unsignedVC
    })

    // Store the VC
    const {credentialIds} = await ApiService.storeSignedVCs({ data: [signedCredential]})
    
    // Share the credentials
    const claimID: string = credentialIds[0];
    const {qrCode, sharingUrl} = await ApiService.shareCredentials(claimID)
    sendEmail(qrCode, sharingUrl, email)

    const db = firebase.firestore();
    // Store the information under Approved Table
    db.collection('drivinglicense-approved').add({ username, payload, applicationID, approved: true });
    // Delete the information under the Pending Approval Table
    db.collection('drivinglicense-waiting-approval').doc(docID).delete();

    alert('Application has been approved and have alerted the applicant.');
    history.push(routes.ISSUER);
  }
  /**
   * Function for signing an unsigned VC.
  * */
  const approveVC = async () => {
    try {
      if(isJson(VCschemaData1)) {
        const example1 = {...JSON.parse(VCschemaData1)};
        example1.data.nationality.identifier.value = sellerGST;
        example1.holderDid = holderDid || '';
        _approveHelper(example1);
      }
      if(isJson(VCschemaData2)) {
        const example2 = {...JSON.parse(VCschemaData2)};
        example2.data.nationality.identifier.value = buyerGST;
        example2.holderDid = holderDid || '';
        _approveHelper(example2);
      }
      if (isJson(VCschemaData3)){
        // const example = {...JSON.parse(VCschemaData)}
        // example.data.givenName = givenName;
        // example.data.familyName = familyName;
        // example.data.email = email;
        // example.data.hasIDDocument.hasIDDocument.issueDate = issueDate;
        // example.data.hasIDDocument.hasIDDocument.idClass = idClass;
        // example.holderDid = holderDid || '';
        const example3 = {...JSON.parse(VCschemaData3)};
        example3.data.invoice.invoiceDate = invoiceDate;
        example3.data.invoice.orderedItem.value = invoiceValue;
        example3.data.seller.name = sellerName;
        example3.data.buyer.name = buyerName;
        example3.holderDid = holderDid || '';
        
        _approveHelper(example3);
      }
    } catch (error) {
      ApiService.alertWithBrowserConsole(error.message);
    }
  }

  return (
    <div className='tutorial'>
      <div className='tutorial__step'>
        <h3><strong>Application ID:</strong> {applicationID}</h3>
        <p><strong>Seller Name:</strong> {sellerName}</p>
        <p><strong>Seller GST Number:</strong> {sellerGST}</p>
        <p><strong>Buyer Name:</strong> {buyerName}</p>
        <p><strong>Buyer GST Number:</strong> {buyerGST}</p>
        <p><strong>Invoice Date:</strong> {invoiceDate}</p>
        <p><strong>Invoice Value(INR):</strong> {invoiceValue}</p>
        <p><strong>Issuer Organisation:</strong> {issuerOrganization}</p>
        {/* <p><strong>Country of Issuance:</strong> {country}</p>
        <p><strong>Driving Class:</strong> {drivingClass}</p> */}
        <Button style={{display: 'block', margin: '10px 0 0 0'}}>View Proof of Document</Button>

        { !approved ? (
          <>
           <Button style={{display: 'block', margin: '10px 0 0 0'}} onClick={approveVC}>Approve</Button>
           <Button style={{display: 'block', margin: '10px 0 0 0'}} disabled>Reject</Button>
          </>
          ) : null}
       
      </div>
    </div>
  )
}


export default ApplicationInfoPage;