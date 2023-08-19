import React from 'react';
import './Payment.css'; // We'll create this CSS file later
import GooglePayButton from "@google-pay/button-react"

const Payment = () => {
  return (
    <div className="payment-page">
      <div className="row">
        <div className="col">
        <h2>Resume Service</h2>
  <p>Resume for IT and Non-IT</p>
  <p>ATS Friendly Resume</p>
  <p>Standard Format</p>
  <h3>₹650</h3>
  <GooglePayButton
    environment='TEST'
    paymentRequest={{
      apiVersion:2,
      apiVersionMinor:0,
      allowedPaymentMethods:[
        {
          type:'CARD',
          parameters:{
            allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
            allowedCardNetworks:['MASTERCARD','VISA'],
          },
          tokenizationSpecification:{
            type:'PAYMENT_GATEWAY',
            parameters:{
              gateway:'example',
              gatewayMerchantId:'exampleGatewayMerchantId',
            },
          }
        },
      ],
      merchantInfo:{
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '650.00',
        currencyCode: 'INR',
        countryCode: 'IN',
      },


    }}
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }}
  
  
  
  
  
  
  />
        </div>

      
        <div className="col">
        <h2>Carrer Guidance</h2>
  <p>Access to advanced features</p>
  <p>Guidence for IT and Non-IT Job</p>
  <p>Placement Support</p>
  <h3>₹750</h3>
  <GooglePayButton
    environment='TEST'
    paymentRequest={{
      apiVersion:2,
      apiVersionMinor:0,
      allowedPaymentMethods:[
        {
          type:'CARD',
          parameters:{
            allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
            allowedCardNetworks:['MASTERCARD','VISA'],
          },
          tokenizationSpecification:{
            type:'PAYMENT_GATEWAY',
            parameters:{
              gateway:'example',
              gatewayMerchantId:'exampleGatewayMerchantId',
            },
          }
        },
      ],
      merchantInfo:{
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '750.00',
        currencyCode: 'INR',
        countryCode: 'IN',
      },


    }}
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }}
  
  
  
  
  
  
  />
        </div>
        <div className="col">
        <h2>Content Writting</h2>
  <p>Access to all Content</p>
  <p>Fast Delivery of Content</p>
  <p>Content follow the standard guidlience</p>
  <h3>₹999/month</h3>
  <GooglePayButton
    environment='TEST'
    paymentRequest={{
      apiVersion:2,
      apiVersionMinor:0,
      allowedPaymentMethods:[
        {
          type:'CARD',
          parameters:{
            allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
            allowedCardNetworks:['MASTERCARD','VISA'],
          },
          tokenizationSpecification:{
            type:'PAYMENT_GATEWAY',
            parameters:{
              gateway:'example',
              gatewayMerchantId:'exampleGatewayMerchantId',
            },
          }
        },
      ],
      merchantInfo:{
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '999.00',
        currencyCode: 'INR',
        countryCode: 'IN',
      },


    }}
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }}
  
  
  
  
  
  
  />
        </div>
      </div>
    </div>
  );
}

export default Payment;
