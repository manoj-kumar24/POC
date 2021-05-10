/**
 * Sample VC data for the employment type.
 * */
import {VCBuildUnsignedInput} from 'utils/apis';

// export const companyNameVCData: VCBuildUnsignedInput = {
//     "type": "NameCredentialOrganizationV1",
//     "data": {
//       "@type": ["Organization", "OrganizationE", "NameOrganization"],
//       "name": "Adilabad Timber Mart",
//       "email": "atm123@gmail.com"
//     },
//     "holderDid": ""
// }

export const sellerCompanyIdVCData: VCBuildUnsignedInput = {
    "type": "NatIDNumCredentialOrganizationV1",
    "data": {
      "@type": ["Organization", "OrganizationE", "NatIDNumOrganization"],
      "nationality": {
        "@type": ["Role", "NationalityRole"],
        "identifier": {
          "@type": ["PropertyValue", "NatPropertyValue"],
          "propertyID": "GST Number",
          "value": "123-1234-123"
        },
        "nationality": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    "holderDid": ""
}

export const buyerCompanyIdVCData: VCBuildUnsignedInput = {
  "type": "NatIDNumCredentialOrganizationV1",
  "data": {
    "@type": ["Organization", "OrganizationE", "NatIDNumOrganization"],
    "nationality": {
      "@type": ["Role", "NationalityRole"],
      "identifier": {
        "@type": ["PropertyValue", "NatPropertyValue"],
        "propertyID": "GST Number",
        "value": "123-1235-123"
      },
      "nationality": {
        "@type": "Country",
        "name": "India"
      }
    }
  },
  "holderDid": ""
}

// {
//   "@type": [
//       "Organization",
//       "OrganizationE",
//       "NatIDNumOrganization"
//   ],
//   "nationality": {
//       "@type": [
//           "Role",
//           "NationalityRole"
//       ],
//       "identifier": {
//           "@type": [
//               "PropertyValue",
//               "NatPropertyValue"
//           ],
//           "propertyID": "GST Number",
//           "value": "123-3456-789"
//       },
//       "nationality": {
//           "@type": "Country",
//           "name": "India"
//       }
//   }
// }

export const companyInvoiceVCData: VCBuildUnsignedInput = {
    "type": "CargoReceiptCredentialV1",
    "data": {
      "@type": "SellerInvoice",
      "seller": {
        // "@type": ["Organization", "OrganizationE"]
        "@type": ["Organization", "OrganizationE", "NameOrganization"],
        "name": "Adilabad Timber Mart",
        "email": "atm123@gmail.com"
      },
      "buyer": {
        // "@type": ["Organization", "OrganizationE"]
        "@type": ["Organization", "OrganizationE", "NameOrganization"],
        "name": "ABC Corporation",
        "email": "abc.corp@gmail.com"
      },
      "invoice": {
        "@type": "Invoice",
        "hasValue": {
          "@type": "MonetaryAmount"
        },
        "invoiceDate": "",
        "sellerAddress": {
          "@type": "PostalAddress",
          "sellerAdderss": "Adilabad Timber Mart, plot. 9, Pushkinsakya 31-V, Kalyan Nagar,T.S., India"
        },
        "buyerAddress": {
          "@type": "PostalAddress",
          "buyerAddress": "" 
        },
        "orderedItem": {
          "@type": ["Product", "ProductE"],
          "hasValue": {
            "@type": "MonetaryAmount",
            "value": "1000",
            "currency": "INR"
          }
        }
      },
    },
    "holderDid": ""
}

// {
//   "@type": "SellerInvoice",
//   "seller": {
//       "@type": [
//           "Organization",
//           "OrganizationE",
//           "NameOrganization"
//       ],
//       "name": "ABC Org",
//       "email": "atm123@gmail.com"
//   },
//   "buyer": {
//       "@type": [
//           "Organization",
//           "OrganizationE",
//           "NameOrganization"
//       ],
//       "name": "XYZ Corp",
//       "email": "abc.corp@gmail.com"
//   },
//   "invoice": {
//       "@type": "Invoice",
//       "hasValue": {
//           "@type": "MonetaryAmount"
//       },
//       "invoiceDate": "01-05-2021",
//       "sellerAddress": {
//           "@type": "PostalAddress",
//           "sellerAdderss": "Adilabad Timber Mart, plot. 9, Pushkinsakya 31-V, Kalyan Nagar,T.S., India"
//       },
//       "buyerAddress": {
//           "@type": "PostalAddress",
//           "buyerAddress": ""
//       },
//       "orderedItem": {
//           "@type": [
//               "Product",
//               "ProductE"
//           ],
//           "hasValue": {
//               "@type": "MonetaryAmount",
//               "value": "1000",
//               "currency": "INR"
//           },
//           "value": "2500000"
//       }
//   }
// }

// {
//   "unsignedVC": {
//       "@context": [
//           "https://www.w3.org/2018/credentials/v1",
//           {
//               "CargoReceiptCredentialV1": {
//                   "@id": "https://schema.affinity-project.org/CargoReceiptCredentialV1",
//                   "@context": {
//                       "@version": 1.1,
//                       "@protected": true
//                   }
//               },
//               "data": {
//                   "@id": "https://schema.affinity-project.org/data",
//                   "@context": [
//                       null,
//                       {
//                           "@version": 1.1,
//                           "@protected": true,
//                           "@vocab": "https://schema.org/",
//                           "ProductE": {
//                               "@id": "https://schema.affinity-project.org/ProductE",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": "https://schema.org/",
//                                   "hasValue": "https://schema.affinity-project.org/hasValue"
//                               }
//                           },
//                           "Port": {
//                               "@id": "https://schema.affinity-project.org/Port",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": "https://schema.org/"
//                               }
//                           },
//                           "Shipment": {
//                               "@id": "https://schema.affinity-project.org/Shipment",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": null,
//                                   "hasValue": "https://schema.affinity-project.org/hasValue",
//                                   "shippedOn": "https://schema.affinity-project.org/shippedOn",
//                                   "originAddress": "https://schema.affinity-project.org/originAddress",
//                                   "deliveryAddress": "https://schema.affinity-project.org/deliveryAddress",
//                                   "orderedItem": "https://schema.affinity-project.org/orderedItem"
//                               }
//                           },
//                           "CargoReceipt": {
//                               "@id": "https://schema.affinity-project.org/CargoReceipt",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": null,
//                                   "shipper": "https://schema.affinity-project.org/shipper",
//                                   "recipient": "https://schema.affinity-project.org/recipient",
//                                   "shipment": "https://schema.affinity-project.org/shipment",
//                                   "portLoading": "https://schema.affinity-project.org/portLoading",
//                                   "portUnloading": "https://schema.affinity-project.org/portUnloading"
//                               }
//                           },
//                           "PersonE": {
//                               "@id": "https://schema.affinity-project.org/PersonE",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": "https://schema.org/"
//                               }
//                           },
//                           "OrganizationE": {
//                               "@id": "https://schema.affinity-project.org/OrganizationE",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": "https://schema.org/",
//                                   "hasCredential": "https://schema.org/hasCredential",
//                                   "industry": "https://schema.affinity-project.org/industry",
//                                   "identifiers": "https://schema.affinity-project.org/identifiers"
//                               }
//                           },
//                           "Credential": {
//                               "@id": "https://schema.affinity-project.org/Credential",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": "https://schema.org/",
//                                   "dateRevoked": "https://schema.affinity-project.org/dateRevoked",
//                                   "recognizedBy": "https://schema.affinity-project.org/recognizedBy"
//                               }
//                           },
//                           "OrganizationalCredential": {
//                               "@id": "https://schema.affinity-project.org/OrganizationalCredential",
//                               "@context": {
//                                   "@version": 1.1,
//                                   "@protected": true,
//                                   "@vocab": "https://schema.org/",
//                                   "credentialCategory": "https://schema.affinity-project.org/credentialCategory",
//                                   "organizationType": "https://schema.affinity-project.org/organizationType",
//                                   "goodStanding": "https://schema.affinity-project.org/goodStanding",
//                                   "active": "https://schema.affinity-project.org/active",
//                                   "primaryJurisdiction": "https://schema.affinity-project.org/primaryJurisdiction",
//                                   "identifier": "https://schema.org/identifier"
//                               }
//                           }
//                       }
//                   ]
//               }
//           }
//       ],
//       "id": "claimId:cfa083ac8e0ff052",
//       "type": [
//           "VerifiableCredential",
//           "CargoReceiptCredentialV1"
//       ],
//       "holder": {
//           "id": "did:elem:EiCVu_V1nEwUsNdce-92UKS6BcV5H6KUphn-Yv4P3Vbq4w"
//       },
//       "credentialSubject": {
//           "data": {
//               "@type": "SellerInvoice",
//               "seller": {
//                   "@type": [
//                       "Organization",
//                       "OrganizationE",
//                       "NameOrganization"
//                   ],
//                   "name": "ABC Org",
//                   "email": "atm123@gmail.com"
//               },
//               "buyer": {
//                   "@type": [
//                       "Organization",
//                       "OrganizationE",
//                       "NameOrganization"
//                   ],
//                   "name": "XYZ Corp",
//                   "email": "abc.corp@gmail.com"
//               },
//               "invoice": {
//                   "@type": "Invoice",
//                   "hasValue": {
//                       "@type": "MonetaryAmount"
//                   },
//                   "invoiceDate": "01-05-2021",
//                   "sellerAddress": {
//                       "@type": "PostalAddress",
//                       "sellerAdderss": "Adilabad Timber Mart, plot. 9, Pushkinsakya 31-V, Kalyan Nagar,T.S., India"
//                   },
//                   "buyerAddress": {
//                       "@type": "PostalAddress",
//                       "buyerAddress": ""
//                   },
//                   "orderedItem": {
//                       "@type": [
//                           "Product",
//                           "ProductE"
//                       ],
//                       "hasValue": {
//                           "@type": "MonetaryAmount",
//                           "value": "1000",
//                           "currency": "INR"
//                       },
//                       "value": "2500000"
//                   }
//               }
//           }
//       },
//       "issuanceDate": "2021-05-10T11:18:37.165Z"
//   }
// }

// export const unsignedDrivingLicenseVC: UnsignedW3cCredential = {
//   "@context": [
//     "https://www.w3.org/2018/credentials/v1",
//     {
//       "IDDocumentCredentialPersonV1": {
//         "@id": "https://schema.affinity-project.org/IDDocumentCredentialPersonV1",
//         "@context": {
//           "@version": 1.1,
//           "@protected": true
//         }
//       },
//       "data": {
//         "@id": "https://schema.affinity-project.org/data",
//         "@context": [
//           null,
//           {
//             "@version": 1.1,
//             "@protected": true,
//             "@vocab": "https://schema.org/",
//             "IDDocumentPerson": {
//               "@id": "https://schema.affinity-project.org/IDDocumentPerson",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": "https://schema.org/",
//                 "hasIDDocument": "https://schema.affinity-project.org/hasIDDocument"
//               }
//             },
//             "IDDocument": {
//               "@id": "https://schema.affinity-project.org/IDDocument",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": null,
//                 "issuer": "https://schema.affinity-project.org/issuer",
//                 "documentType": "https://schema.affinity-project.org/documentType",
//                 "issueDate": "https://schema.affinity-project.org/issueDate",
//                 "issueType": "https://schema.affinity-project.org/issueType",
//                 "expirationDate": "https://schema.affinity-project.org/expirationDate",
//                 "classificationMethod": "https://schema.affinity-project.org/classificationMethod",
//                 "idClass": "https://schema.affinity-project.org/idClass",
//                 "idClassName": "https://schema.affinity-project.org/idClassName",
//                 "countryCode": "https://schema.affinity-project.org/countryCode",
//                 "frontImage": "https://schema.affinity-project.org/frontImage",
//                 "backImage": "https://schema.affinity-project.org/backImage",
//                 "generic": "https://schema.affinity-project.org/generic",
//                 "keesingCode": "https://schema.affinity-project.org/keesingCode"
//               }
//             },
//             "IDDocumentFaceMatch": {
//               "@id": "https://schema.affinity-project.org/IDDocumentFaceMatch",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": null,
//                 "isMatch": "https://schema.affinity-project.org/isMatch",
//                 "score": "https://schema.affinity-project.org/score",
//                 "identifier": "https://schema.org/identifier"
//               }
//             },
//             "IDDocumentRole": {
//               "@id": "https://schema.affinity-project.org/IDDocumentRole",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": null,
//                 "authenticationResult": "https://schema.affinity-project.org/authenticationResult",
//                 "selfieImage": "https://schema.affinity-project.org/selfieImage",
//                 "faceMatch": "https://schema.affinity-project.org/faceMatch",
//                 "hasIDDocument": "https://schema.affinity-project.org/hasIDDocument"
//               }
//             },
//             "PersonE": {
//               "@id": "https://schema.affinity-project.org/PersonE",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": "https://schema.org/"
//               }
//             },
//             "OrganizationE": {
//               "@id": "https://schema.affinity-project.org/OrganizationE",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": "https://schema.org/",
//                 "hasCredential": "https://schema.org/hasCredential",
//                 "industry": "https://schema.affinity-project.org/industry",
//                 "identifiers": "https://schema.affinity-project.org/identifiers"
//               }
//             },
//             "Credential": {
//               "@id": "https://schema.affinity-project.org/Credential",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": "https://schema.org/",
//                 "dateRevoked": "https://schema.affinity-project.org/dateRevoked",
//                 "recognizedBy": "https://schema.affinity-project.org/recognizedBy"
//               }
//             },
//             "OrganizationalCredential": {
//               "@id": "https://schema.affinity-project.org/OrganizationalCredential",
//               "@context": {
//                 "@version": 1.1,
//                 "@protected": true,
//                 "@vocab": "https://schema.org/",
//                 "credentialCategory": "https://schema.affinity-project.org/credentialCategory",
//                 "organizationType": "https://schema.affinity-project.org/organizationType",
//                 "goodStanding": "https://schema.affinity-project.org/goodStanding",
//                 "active": "https://schema.affinity-project.org/active",
//                 "primaryJurisdiction": "https://schema.affinity-project.org/primaryJurisdiction",
//                 "identifier": "https://schema.org/identifier"
//               }
//             }
//           }
//         ]
//       }
//     }
//   ],
//   "id": "claimId:cf2d7f9480ffce1b",
//   "type": [
//     "VerifiableCredential",
//     "IDDocumentCredentialPersonV1"
//   ],
//   "holder": {
//     "id": "did:elem:EiD505S7IVXVP6jQHHjtNXIYQIYSvOs8b-aRipGPKgcTuw"
//   },
//   "credentialSubject": {
//     "data": {
//       "@type": [
//         "Person",
//         "PersonE",
//         "IDDocumentPerson"
//       ],
//       "gender": "Male",
//       "birthDate": "1986-07-01T00:00:00.000Z",
//       "givenName": "",
//       "familyName": "",
//       "address": "apt. 9, Pushkinsakya 31-V, Kyiv, Ukraine",
//       "hasIDDocument": {
//         "@type": [
//           "Role",
//           "IDDocumentRole"
//         ],
//         "hasIDDocument": {
//           "@type": "IDDocument",
//           "issuer": "Automobile Association of Singapore",
//           "documentType": "driving_license",
//           "issueDate": "",
//           "classificationMethod": "automatic",
//           "idClass": "{\"drivingLicenseID\":\"\",\"country\":\"Singapore\",\"drivingClass\":\"1\"}",
//           "countryCode": "..."
//         }
//       }
//     }
//   },
//   "issuanceDate": "2021-03-16T15:51:22.648Z"
// }

// export const signedDrivingLicenseVC: W3cCredential = {
//   ...unsignedDrivingLicenseVC,
//   'issuer': 'did:elem:EiDNDKiOcIBLu7TyLRju0lnh-0Q9kAz6iKwMyH6AhCuqhg;elem:initial-state=eyJwcm90ZWN0ZWQiOiJleUp2Y0dWeVlYUnBiMjRpT2lKamNtVmhkR1VpTENKcmFXUWlPaUlqY0hKcGJXRnllU0lzSW1Gc1p5STZJa1ZUTWpVMlN5SjkiLCJwYXlsb2FkIjoiZXlKQVkyOXVkR1Y0ZENJNkltaDBkSEJ6T2k4dmR6TnBaQzV2Y21jdmMyVmpkWEpwZEhrdmRqSWlMQ0p3ZFdKc2FXTkxaWGtpT2x0N0ltbGtJam9pSTNCeWFXMWhjbmtpTENKMWMyRm5aU0k2SW5OcFoyNXBibWNpTENKMGVYQmxJam9pVTJWamNESTFObXN4Vm1WeWFXWnBZMkYwYVc5dVMyVjVNakF4T0NJc0luQjFZbXhwWTB0bGVVaGxlQ0k2SWpBellUaGtZekV6WldWbU1HTTRZMlprT0RRek5qazFOVFppWmpFd1pqTXdNRFU1WTJaaU5qRXpZVFkyWlRCbVl6UTFPVFZpTWpka01EbGhNelkzT0RFM01DSjlMSHNpYVdRaU9pSWpjbVZqYjNabGNua2lMQ0oxYzJGblpTSTZJbkpsWTI5MlpYSjVJaXdpZEhsd1pTSTZJbE5sWTNBeU5UWnJNVlpsY21sbWFXTmhkR2x2Ymt0bGVUSXdNVGdpTENKd2RXSnNhV05MWlhsSVpYZ2lPaUl3TXpaaE1XSTNNRFk0T1dZeU4yUTFNV013WmpjeU1EZGpNREl4TWpWaFpUazFObVJpTkRjeU5HTTRPREF4TkRRNE1XSTBZekJtTVdFM1pUaG1OVEUyTnpZaWZWMHNJbUYxZEdobGJuUnBZMkYwYVc5dUlqcGJJaU53Y21sdFlYSjVJbDBzSW1GemMyVnlkR2x2YmsxbGRHaHZaQ0k2V3lJamNISnBiV0Z5ZVNKZGZRIiwic2lnbmF0dXJlIjoiTk50Sng4MXlIR1FrSlEtdGkzeHdJd2Z0ZkFjSWxFN2dGRGJlYUVQX01hY0dGcjlvUjdqdEFUT3Y5WFlueG9uMnMyUkEtS2hJcFJaOFNJdVByd0tGUXcifQ',
//   'proof': {
//     "type": "EcdsaSecp256k1Signature2019",
//     "created": "2021-03-16T15:52:13Z",
//     "verificationMethod": "did:elem:EiD505S7IVXVP6jQHHjtNXIYQIYSvOs8b-aRipGPKgcTuw#primary",
//     "proofPurpose": "assertionMethod",
//     "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ.._C8cP6XFWYcijLaGFIx-a4ApFM0QHR3O7TYJmr6f8VRNOjQ9LEW2u7fRsPSv9RB7T1Pw4X8cNOxsfH9AQqUe4A"
//   }
// }


