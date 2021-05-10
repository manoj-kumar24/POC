import React, { useState, useContext } from 'react';
import AppContext from 'context/app';
import {Button, FormControl, FormGroup, FormLabel, FormFile} from 'react-bootstrap';
import ApiService from 'utils/apiService';
import 'pages/application/Application.scss'
import firebase from 'utils/firebase/firebase';
import randomstring from 'randomstring';

interface IBaseVCData1 {
  sellerName: string;
  sellerGST: string;
  buyerName: string;
  buyerGST: string;
  invoiceDate: string;
  invoiceValue: string;
}

interface IExtendVCData1 {
  email: string;
  issuerOrganization: string;
}

// interface IBaseVCData {
//     givenName: string;
//     familyName: string;
//     issueDate: string;
//   }
  
  // interface IExtendVCData {
  //   drivingLicenseID: string;
  //   country: string;
  //   drivingClass: string;
  //   email: string;
  //   issuerOrganization: string;
  // }

  const defaultBaseVCData1 : IBaseVCData1 = {
    sellerName: '',
    sellerGST: '',
    buyerName: '',
    buyerGST: '',
    invoiceDate: '',
    invoiceValue: '',
  }

  const defaultExtendVCData1: IExtendVCData1 = {
    email: '',
    issuerOrganization: 'Timber Association of Telangana'
  }

  // const defaultBaseVCData: IBaseVCData = {
  //   givenName: '',
  //   familyName: '',
  //   issueDate: ''
  // }
  
  // const defaultExtendVCData: IExtendVCData = {
  //   drivingLicenseID: '',
  //   country: 'Singapore',
  //   drivingClass: '1',
  //   email: '',
  //   issuerOrganization: 'Automobile Association of Singapore'
  // }

  interface IPayload1 extends IBaseVCData1{
    idClass: string;
    holderDid: string
  }

// interface IPayload extends IBaseVCData{
//   idClass: string;
//   holderDid: string
// }

const Application: React.FC = (): React.ReactElement => {
    const {appState} = useContext(AppContext);
    const [inputDID, setinputDID] = useState(appState.didToken || '');

    // const [baseVCData, setBaseVCData] = useState<IBaseVCData>(defaultBaseVCData)
  
    // const [extendVCData, setExtendVCData] = useState<IExtendVCData>(defaultExtendVCData)

    const [baseVCData1, setBaseVCData1] = useState<IBaseVCData1>(defaultBaseVCData1)
  
    const [extendVCData1, setExtendVCData1] = useState<IExtendVCData1>(defaultExtendVCData1)

    /**
     * Function for issuing an unsigned employment VC.
     * */
    const issueDrivingLicensePersonVC = async () => {
        try {
          // const { givenName, familyName, issueDate } = baseVCData;

          const {sellerName, sellerGST, buyerName, buyerGST, invoiceDate, invoiceValue} = baseVCData1;
          
          // Generate a random Affinidi Driving License ID, which will double up as an application ID
          const applicationID: string = randomstring.generate(10);
          // const vcToStringify = {...extendVCData, affinidiDrivingLicenseID: applicationID}
          const applicationID1: string = randomstring.generate(10);
          const vcToStringify1 = {...extendVCData1, affinidiSellerInvoiceID: applicationID1}
          
          // const payload: IPayload = {
          //   givenName,
          //   familyName,
          //   issueDate,
          //   idClass: JSON.stringify(vcToStringify),
          //   holderDid: inputDID || appState.didToken || '',
          // }
          const payload: IPayload1 = {
            sellerName,
            sellerGST,
            buyerName,
            buyerGST,
            invoiceDate,
            invoiceValue,
            idClass: JSON.stringify(vcToStringify1),
            holderDid: inputDID || appState.didToken || '',
          }

          // Store unsignedVC into issuer's datsabase
          const db = firebase.firestore();
          db.collection('drivinglicense-waiting-approval').add({username: appState.username, payload, applicationID, approved: false})
          // db.collection('sellerinvoice-waiting-approval').add({username: appState.username, payload, applicationID, approved: false})

          alert('You have successfully submitted your application.');
        } catch (error) {
            ApiService.alertWithBrowserConsole(error.message);
        }
    }
    
    const resetToDefaults = () => {
      setinputDID(appState.didToken || '')

      // setBaseVCData(defaultBaseVCData)
      // setExtendVCData(defaultExtendVCData)
      setBaseVCData1(defaultBaseVCData1)
      setExtendVCData1(defaultExtendVCData1)
    }
    
    // const updateBaseVC = (e: any) => {
    //   setBaseVCData({...baseVCData, [e.target.name]: e.target.value})
    // }

    // const updateExtendBaseVC = (e: any) => {
    //   setExtendVCData({...extendVCData, [e.target.name]: e.target.value})
    // }

    const updateBaseVC1 = (e: any) => {
      // console.log("bbb::", e.target);
      setBaseVCData1({...baseVCData1, [e.target.name]: e.target.value})
    }

    const updateExtendBaseVC1 = (e: any) => {
      // console.log("aaa::", e.target);
      setExtendVCData1({...extendVCData1, [e.target.name]: e.target.value})
    }

    return (
      <div className='tutorial'>
        <div className='tutorial__step'>
          <Button 
            style={{float: 'right'}}
            onClick={e => resetToDefaults()}
            >Clear all fields
          </Button>

          <p><strong>Step 1:</strong>Please fill in details of your driving license</p>
          <FormGroup controlId='email'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Email Address:</FormLabel>
            <FormControl name='email' type='text' value={extendVCData1.email} onChange={e => updateExtendBaseVC1(e)}/>
          </FormGroup>

          {/* <FormGroup controlId='sellerEmail'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Seller Email Address:</FormLabel>
            <FormControl name='sellerEmail' type='text' value={extendVCData1.email} onChange={e => updateExtendBaseVC1(e)}/>
          </FormGroup> */}
          <FormGroup controlId='sellerName'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Seller Organization Name:</FormLabel>
            <FormControl name='sellerName' type='text' value={baseVCData1.sellerName} onChange={e => updateBaseVC1(e)}/>
          </FormGroup>
          <FormGroup controlId='sellerGST'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Seller GST Number:</FormLabel>
            <FormControl name='sellerGST' type='text' value={baseVCData1.sellerGST} onChange={e => updateBaseVC1(e)}/>
          </FormGroup>
          <FormGroup controlId='buyerName'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Buyer Organization Name:</FormLabel>
            <FormControl name='buyerName' type='text' value={baseVCData1.buyerName} onChange={e => updateBaseVC1(e)}/>
          </FormGroup>
          <FormGroup controlId='buyerGST'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Buyer GST Number:</FormLabel>
            <FormControl name='buyerGST' type='text' value={baseVCData1.buyerGST} onChange={e => updateBaseVC1(e)}/>
          </FormGroup>
          <FormGroup controlId='invoiceDate'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Invoice Date:</FormLabel>
            <FormControl name='invoiceDate' type='text' value={baseVCData1.invoiceDate} onChange={e => updateBaseVC1(e)}/>
          </FormGroup>
          <FormGroup controlId='invoiceValue'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Invoice Value:</FormLabel>
            <FormControl name='invoiceValue' type='text' value={baseVCData1.invoiceValue} onChange={e => updateBaseVC1(e)}/>
          </FormGroup>

          {/* <FormGroup controlId='email'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Email Address:</FormLabel>
            <FormControl name='email' type='text' value={extendVCData.email} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='givenName'>
            <FormLabel className='label' style={{margin: '10px 0 0 0'}}>Given Name:</FormLabel>
            <FormControl name='givenName' type='text' value={baseVCData.givenName} onChange={e => updateBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='familyName'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Family Name:</FormLabel>
            <FormControl name='familyName' type='text' value={baseVCData.familyName} onChange={e => updateBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='issueDate'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Date of Issuance:</FormLabel>
            <FormControl name='issueDate' type='text' value={baseVCData.issueDate} onChange={e => updateBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='drivingLicense'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Driving License ID:</FormLabel>
            <FormControl name='drivingLicenseID' type='text' value={extendVCData.drivingLicenseID} onChange={e => updateExtendBaseVC(e)}/>
          </FormGroup>

          <FormGroup controlId='drivingClass'>
            <FormLabel style={{margin: '10px 0 0 0'}}>Driving Class:</FormLabel>
            <FormControl name='drivingClass' as="select" value={extendVCData.drivingClass} onChange={e => updateExtendBaseVC(e)}>
              <option>1</option>
              <option>2</option>
              <option>2A</option>
              <option>2B</option>
              <option>3</option>
              <option>3A</option>
              <option>3C</option>
              <option>3CA</option>
              <option>4</option>
              <option>4A</option>
              <option>5</option>
            </FormControl>
          </FormGroup> */}

          <div style={{margin: '30px 0'}}>
            <p><strong>Step 2:</strong>Upload Proof of Driving License</p>
            <FormFile id="formcheck-api-regular">
              <FormFile.Label>Proof of Driving License</FormFile.Label>
              <FormFile.Input />
            </FormFile>
          </div>
          
          <Button 
            onClick={e => issueDrivingLicensePersonVC()}
            >Submit
          </Button>
        </div>
      </div>
    )
}

export default Application;