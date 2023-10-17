import React from "react";
//
// "https://claim.primarykeytech.in/api"
// https://claim.primarykeytech.in/api
// "https://demo.ezclicktech.com/api",
//
// BASE_URL: "http://192.168.1.7:80",

//https://dealer-website.primarykeytech.in/dynamic/api'
// BASE_URL: "https://demo.ezclicktech.com/api",
export const API_CONSTANTS = {
  // BASE_URL:"https://sharvaautomobiles.2wh.in/api",
  // BASE_URL:"https://osh2-nsp.aitechiez.com/api",
  BASE_URL: 'https://aitechiez.com/api',
  // BASE_URL:  "https://dealer-website.primarykeytech.in/dynamic/api",
  // BASE_URL:" https://poojapestcontrol.com/api",
  // BASE_URL:" //https://shubhauto.2wh.in/dynamic/api",
  login: "/api/login", //used
  register: "/api/register", //used
  airegister: "/api/enquiry/create-update",
  userregister: "/api/users/userCreate",
  companydatacd: "/api/company/view",
  userlist: "/api/users/usersrolelist",
  updateenquiey :"/api/enquiry/updateEnquiry",
  enquiryhistory:"/api/enquiry/history",
  companyrole: "api/users/roles-list",
  enquiry: "/api/enquiry/list",
  assign :"/api/enquiry/assignEnquiry",
  paacitivity:"/api/pActivity/list",
  createOrder: "/api/order/create",
  promotioactivity:"/api/paType/list",
  patypecreate:"/api/paType/createUpdate",
  campaign:"/api/mCampaign/list",
  mcreateupate:"/api/mCampaign/createUpdate",
  cities: "/api/cities/list",
  socmmng: "/api/societymgmt/bill-list",
  pincode: "/api/pincode/StateCitylist",
  createinvoice: "/api/invoice/create",
  update: "/api/company/create",
  listinvoice: "/api/invoice",
  companylist: "/api/company/list",
  punchOrder: "/api/createorder", //used
  businessSetting: "api/business-setting",
  generateQRCode: "/api/qrcode/generate_code.php", //used
  getMerchant: "/api/user/merchant", //used
  getCustomers: "/api/user/customer", //used
  merchantWiseDiscounts: "/api/business-setting/merchant_id/",
  getOrderList: "/api/orderlist", //used
  pendingOrderList: "/api/orderlist",
  dashboardData: "/api/dashboard/list", //used
  addUser: "api/newuser",
  editUser: "/api/edituser/",
  confirmOrder: "/api/confirmorder",
  contactUs: "/api/contact-us/primarykeytech",
  forgotPassword: "/api/forgot-password",
  addVisitor: "/api/checkUserByMobile",
  eventList: "/api/eventList",
  eventVenueList: "/api/eventVenueList",
  claimList: "/api/claim_list",
  getClaimDetails: "/api/get-claim-details",
  addImagesToClaimQuestion:
    "/api/add-images-to-claim-question",
  getAssessmentDetails:
    "/api/get-assessment-details",
  getAssessmentDetailsNew:
    "/api/get-assessment-details-new",

  dashboardList: '/api/dashboard-list',
  updateAssessmentDetails: '/api/update-assessment-detail-by-id',
  uploadAssessmentImages: '/api/add-assessment-image',
  getAssessmentDetailProduct: '/api/get-assessment-detail-product',
  uploadAccidentImage: '/api/storeAccidentImages',
  updateAssignedClaimStatus: '/api/update-assigned-claim-status',
  qustionAnswerList: '/api/question-answer-list',
  storeInspectionDetails: '/api/storeInspectionDetails',
  updateAssessmentFormStepById: '/api/update-assessment-form-step-by-id',
};
// export let userDetails = null;
export let loadingVisible = true;
export let alertVisible = null;
export let userRole = null;
