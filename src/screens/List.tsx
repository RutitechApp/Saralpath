import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import Container from "../components/Container";
import { ArrowBack, CloseIcon } from "../assets/svgs/Home";
import { horizontalScale, verticalScale } from "../constants/responsive";
import {
  bankingFinancialServices,
  biotechnology,
  foodBeverage,
  healthPharma,
  identityDocumentData,
  informationTechnology,
  internationalTrade,
  manufacturing,
  realEstateConstruction,
  renewableEnergy,
} from "../constants/dummyData";
import ListCard from "../components/ListCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { useFontSize } from "../constants/FontSizeContext";
import RBSheet from "react-native-raw-bottom-sheet";
import { useThemeColors } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next";
import { birthCertificateData } from "../constants/identityDocuments/birthCertificateData";
import { aadhaarCardData } from "../constants/identityDocuments/adharCardData";
import { educationalCertificateData } from "../constants/identityDocuments/educationalCertificateData";
import { panCardData } from "../constants/identityDocuments/panCardData";
import { passportData } from "../constants/identityDocuments/passportData";
import { drivingLicenseData } from "../constants/identityDocuments/drivingLicenseData";
import { voterIdData } from "../constants/identityDocuments/voterIdData";
import { marriageCertificateData } from "../constants/identityDocuments/marriageCertificateData";
import { rationCardData } from "../constants/identityDocuments/rationCardData";
import { electricityBillData } from "../constants/identityDocuments/electricityBillData";
import { propertyTaxBillData } from "../constants/identityDocuments/propertyTaxBillData";
import { fssaiLicenseData } from "../constants/foodBeverage/fssaiLicenseData";
import { gstRegistrationData } from "../constants/foodBeverage/gstRegistrationData";
import { shopEstablishmentLicenseData } from "../constants/foodBeverage/shopEstablishmentData";
import { localSpecificLicenseData } from "../constants/foodBeverage/localSpecificLicenseData";
import { healthTradeLicenseData } from "../constants/foodBeverage/healthTradeLicenseData";
import { eatingHouseLicenseData } from "../constants/foodBeverage/eatingHouseLicenseData";
import { fireLicenseData } from "../constants/foodBeverage/fireLicenseData";
import { liquorLicenseData } from "../constants/foodBeverage/liquorLicenseData";
import { environmentalClearanceData } from "../constants/foodBeverage/environmentalClearanceData";
import { professionalTaxRegistrationData } from "../constants/foodBeverage/professionalTaxRegistrationData";
import { generalSupportingDocumentsData } from "../constants/foodBeverage/generalSupportingDocumentsData";
import { identityAddressDocuments } from "../constants/foodBeverage/identityAddressDocuments";
import { identityAddressPremisesDocuments } from "../constants/foodBeverage/identityAddressPremisesDocuments";
import { businessConstitutionData } from "../constants/foodBeverage/businessConstitutionData";
import { foodSafetyManagementData } from "../constants/foodBeverage/foodSafetyManagementData";
import { nocData } from "../constants/foodBeverage/nocData";
import { formsData } from "../constants/foodBeverage/formsData";
import { passportPhotosData } from "../constants/foodBeverage/passportPhotosData";
import { layoutPlanData } from "../constants/foodBeverage/layoutPlanData";
import { foodProductsEquipmentData } from "../constants/foodBeverage/foodProductsEquipmentData";
import { waterAnalysisReportData } from "../constants/foodBeverage/waterAnalysisReportData";
import { medicalFitnessCertificateData } from "../constants/foodBeverage/medicalFitnessCertificateData";
import { certificateOfIncorporationData } from "../constants/manufacturing/certificateOfIncorporationData";
import { memorandumAndArticlesData } from "../constants/manufacturing/memorandumAndArticlesData";
import { proofOfIdentityAddressData } from "../constants/manufacturing/proofOfIdentityAddressData";
import { businessPlanData } from "../constants/manufacturing/businessPlanData";
import { partnershipDeedOrBoardResolutionData } from "../constants/manufacturing/partnershipDeedOrBoardResolutionData";
import { shareholdersOrFoundersAgreementData } from "../constants/manufacturing/shareholdersOrFoundersAgreementData";
import { panAndGstinData } from "../constants/manufacturing/panAndGstinData";
import { financialStatusCAData } from "../constants/manufacturing/financialStatusCAData";
import { bankAccountDetailsData } from "../constants/manufacturing/bankAccountDetailsData";
import { factoryLicenseData } from "../constants/manufacturing/factoryLicenseData";
import { ownershipOrLeaseAgreementData } from "../constants/manufacturing/ownershipOrLeaseAgreementData";
import { fireNOCData } from "../constants/manufacturing/fireNOCData";
import { pollutionConsentData } from "../constants/manufacturing/pollutionConsentData";
import { siteFactoryPlanData } from "../constants/manufacturing/siteFactoryPlanData";
import { buildingStabilityCertificateData } from "../constants/manufacturing/buildingStabilityCertificateData";
import { utilityConnectionsData } from "../constants/manufacturing/utilityConnectionsData";
import { tradeLicenseData } from "../constants/manufacturing/tradeLicenseData";
import { productDrawingsData } from "../constants/manufacturing/productDrawingsData";
import { billOfMaterialsData } from "../constants/manufacturing/billOfMaterialsData";
import { qualityManagementData } from "../constants/manufacturing/qualityManagementData";
import { userManualAndLabelingData } from "../constants/manufacturing/userManualAndLabelingData";
import { typeTestReportsData } from "../constants/manufacturing/typeTestReportsData";
import { calibrationTestReportsData } from "../constants/manufacturing/calibrationTestReportsData";
import { healthSafetyPlansData } from "../constants/manufacturing/healthSafetyPlansData";
import { hazardousWasteAuthorizationData } from "../constants/manufacturing/hazardousWasteAuthorizationData";
import { employeeTrainingPlanData } from "../constants/manufacturing/employeeTrainingPlanData";
import { drugLicenseData } from "../constants/healthcare&Pharma/drugLicenseData";
import { gstRegistrationDatas } from "../constants/healthcare&Pharma/gstRegistrationData";
import { companyRegistrationData } from "../constants/healthcare&Pharma/companyRegistrationData";
import { fssaiRegistrationData } from "../constants/healthcare&Pharma/fssaiRegistrationData";
import { trademarkRegistrationData } from "../constants/healthcare&Pharma/trademarkRegistrationData";
import { businessPremisesData } from "../constants/healthcare&Pharma/businessPremisesData";
import { panCardDatas } from "../constants/healthcare&Pharma/panCardData";
import { aadhaarCardDatas } from "../constants/healthcare&Pharma/aadhaarCardData";
import { pharmacistRegistrationData } from "../constants/healthcare&Pharma/pharmacistRegistrationData";
import { bankAccountDetailsDatas } from "../constants/healthcare&Pharma/bankAccountDetailsData";
import { businessLicensesDatas } from "../constants/renewableEnergy/businessLicensesData";
import { gmpData } from "../constants/healthcare&Pharma/gmpData";
import { productDossierData } from "../constants/healthcare&Pharma/productDossierData";
import { pharmacovigilanceData } from "../constants/healthcare&Pharma/pharmacovigilanceData";
import { batchManufacturingRecordData } from "../constants/healthcare&Pharma/batchManufacturingRecordData";
import { sopData } from "../constants/healthcare&Pharma/sopData";
import { iso13485CertificateData } from "../constants/healthcare&Pharma/iso13485CertificateData";
import { importExportCodeData } from "../constants/healthcare&Pharma/importExportCodeData";
import { customsDocumentsData } from "../constants/healthcare&Pharma/customsDocumentsData";
import { undertakingsData } from "../constants/healthcare&Pharma/undertakingsData";
import { cppData } from "../constants/healthcare&Pharma/cppData";
import { proformaInvoiceData } from "../constants/internationalTrade/proformaInvoiceData";
import { commercialInvoicePackingData } from "../constants/internationalTrade/commercialInvoicePackingData";
import { billOfLadingData } from "../constants/internationalTrade/billOfLadingData";
import { shippingBillData } from "../constants/internationalTrade/shippingBillData";
import { certificateOfOriginData } from "../constants/internationalTrade/certificateOfOriginData";
import { billOfExchangeData } from "../constants/internationalTrade/billOfExchangeData";
import { letterOfCreditData } from "../constants/internationalTrade/letterOfCreditData";
import { inspectionCertificateData } from "../constants/internationalTrade/inspectionCertificateData";
import { phytosanitaryCertificateData } from "../constants/internationalTrade/phytosanitaryCertificateData";
import { billOfEntryData } from "../constants/internationalTrade/billOfEntryData";
import { insurancePolicyData } from "../constants/internationalTrade/insurancePolicyData";
import { insuranceCertificateData } from "../constants/internationalTrade/insuranceCertificateData";
import { importExportDocumentsData } from "../constants/internationalTrade/importExportDocumentsData";
import { customsDeclarationFormData } from "../constants/internationalTrade/customsDeclarationFormData";
import { identityAddressProofData } from "../constants/biotechnology/identityAddressProofData";
import { businessRegistrationData } from "../constants/biotechnology/businessRegistrationData";
import { governmentRegistrationData } from "../constants/biotechnology/governmentRegistrationData";
import { biotechnologyIgnitionGrantData } from "../constants/biotechnology/biotechnologyIgnitionGrantData";
import { biotechnologyProgrammeData } from "../constants/biotechnology/biotechnologyProgrammeData";
import { generalProposalSubmissionsData } from "../constants/biotechnology/generalProposalSubmissionsData";
import { manufacturingLicenseFormData } from "../constants/biotechnology/manufacturingLicenseFormData";
import { clinicalTrialApplicationFormData } from "../constants/biotechnology/clinicalTrialApplicationFormData";
import { drugMasterFileData } from "../constants/biotechnology/drugMasterFileData";
import { gstRegistrationFormData } from "../constants/biotechnology/gstRegistrationFormData";
import { regulatoryApprovalsFormData } from "../constants/biotechnology/regulatoryApprovalsFormData";
import { saleDeedFormData } from "../constants/realEstate/saleDeedFormData";
import { encumbranceCertificateData } from "../constants/realEstate/encumbranceCertificateData";
import { approvedBuildingPlanData } from "../constants/realEstate/approvedBuildingPlanData";
import { occupancyCertificateData } from "../constants/realEstate/occupancyCertificateData";
import { powerOfAttorneyData } from "../constants/realEstate/powerOfAttorneyData";
import { mutationCertificateFormData } from "../constants/realEstate/mutationCertificateData";
import { propertyTaxReceiptsFormData } from "../constants/realEstate/propertyTaxReceiptsData";
import { agreementToSellFormData } from "../constants/realEstate/agreementToSellData";
import { allotmentLetterFormData } from "../constants/realEstate/allotmentLetterData";
import { completionCertificateFormData } from "../constants/realEstate/completionCertificateData";
import { possessionLetterFormData } from "../constants/realEstate/possessionLetterData";
import { nocFormData } from "../constants/realEstate/nocFormData";
import { paymentReceiptFormData } from "../constants/realEstate/paymentReceiptData";
import { commencementCertificateFormData } from "../constants/realEstate/commencementCertificateData";
import { khataCertificateData } from "../constants/realEstate/khataCertificateData";
import { reraRegistrationCertificateData } from "../constants/realEstate/reraRegistrationCertificateData";
import { constructionAgreementData } from "../constants/realEstate/constructionAgreementData";
import { motherDeedData } from "../constants/realEstate/motherDeedData";
import { societyNOCData } from "../constants/realEstate/societyNOCData";
import { taxReceiptsData } from "../constants/realEstate/taxReceiptsData";
import { jointDevelopmentAgreementFormData } from "../constants/realEstate/jointDevelopmentAgreementData";
import { landDocumentsData } from "../constants/realEstate/landDocumentsData";
import { landUseCertificateData } from "../constants/realEstate/landUseCertificateData";
import { rbiRegistrationFormData } from "../constants/banking/rbiRegistrationData";
import { nbfcRegistrationData } from "../constants/banking/nbfcRegistrationData";
import { cersaiRegistrationData } from "../constants/banking/cersaiRegistrationData";
import { fiuIndData } from "../constants/banking/fiuIndiaData";
import { centralKycData } from "../constants/banking/centralKycData";
import { creditBureausData } from "../constants/banking/creditBureausData";
import { kycAmlData } from "../constants/banking/kycAmlData";
import { fairPracticeCodeData } from "../constants/banking/fairPracticeCodeData";
import { creditInformationData } from "../constants/banking/creditInformationData";
import { itCybersecurityData } from "../constants/banking/itCybersecurityData";
import { digitalLendingData } from "../constants/banking/digitalLendingData";
import { regulatoryReturnsData } from "../constants/banking/regulatoryReturnsData";
import { financialStatementsData } from "../constants/banking/financialStatementsData";
import { msmeVendorsData } from "../constants/banking/msmeVendorsData";
import { incomeTaxData } from "../constants/banking/incomeTaxData";
import { companiesActData } from "../constants/banking/companiesActData";
import { sebiComplianceData } from "../constants/banking/sebiComplianceData";
import { directorKycData } from "../constants/banking/directorKycData";
import { annualReturnData } from "../constants/banking/annualReturnData";
import { capitalReservesData } from "../constants/banking/capitalReservesData";
import { grievanceRedressalData } from "../constants/banking/grievanceRedressalData";
import { vendorManagementData } from "../constants/banking/vendorManagementData";
import { disasterRecoveryData } from "../constants/banking/disasterRecoveryData";
import { accessIdentityControlData } from "../constants/informationTech/accessIdentityControlData";
import { corporateSecurityPoliciesData } from "../constants/informationTech/corporateSecurityPoliciesData";
import { incidentResponseData } from "../constants/informationTech/incidentResponseData";
import { dataLossPreventionData } from "../constants/informationTech/dataLossPreventionData";
import { monitoringReportingData } from "../constants/informationTech/monitoringReportingData";
import { complianceMonitoringAuditingData } from "../constants/informationTech/complianceMonitoringAuditingData";
import { dataPrivacyAuditingData } from "../constants/informationTech/dataPrivacyAuditingData";
import { intellectualPropertyData } from "../constants/informationTech/intellectualPropertyData";
import { licensingRegistrationData } from "../constants/informationTech/licensingRegistrationData";
import { regulatoryComplianceData } from "../constants/informationTech/regulatoryComplianceData";
import { riskAssessmentData } from "../constants/informationTech/riskAssessmentData";
import { indianElectricityGridCodeData } from "../constants/renewableEnergy/indianElectricityGridCodeData";
import { ceaSafetyClearanceData } from "../constants/renewableEnergy/ceaSafetyClearanceData";
import { loadDespatchRegistrationData } from "../constants/renewableEnergy/loadDespatchRegistrationData";
import { technicalData } from "../constants/renewableEnergy/technicalData";
import { environmentalPermitsData } from "../constants/renewableEnergy/environmentalPermitsData";
import { moefccData } from "../constants/renewableEnergy/moefccData";
import { rpoData } from "../constants/renewableEnergy/rpoData";
import { recData } from "../constants/renewableEnergy/recData";
import { energyConservationActData } from "../constants/renewableEnergy/energyConservationActData";
import { electricityRegulatoryCommissionData } from "../constants/renewableEnergy/electricityRegulatoryCommissionData";
import { laborLawsData } from "../constants/renewableEnergy/laborLawsData";
import { factoriesActData } from "../constants/renewableEnergy/factoriesActData";
import { sexualHarassmentActData } from "../constants/renewableEnergy/sexualHarassmentActData";
import { complianceManagementSystemData } from "../constants/renewableEnergy/complianceManagementSystemData";
import { codeOfEthicsData } from "../constants/renewableEnergy/codeOfEthicsData";
import { reportingAndDisclosureData } from "../constants/renewableEnergy/reportingAndDisclosureData";

const List = () => {
  const bannerRef = useRef<BannerAd>(null);
  const navigation = useNavigation();
  const { fontScale } = useFontSize();
  const refRBSheet = useRef(null);
  const { colors } = useThemeColors();
  const route: any = useRoute();
  const { t, i18n } = useTranslation();
  const [fData, setFData] = useState([{}]);
  const data = route?.params?.data;
  const [rData, setRData] = useState({});
  const [selectedData, setSelectedData] = useState(null);

  const currentLanguage = i18n.language as Language;
  useEffect(() => {
    switch (route?.params?.data?.title) {
      case "identity_documents":
        setFData(identityDocumentData);
        break;
      case "food_beverage":
        setFData(foodBeverage);
        break;
      case "manufacturing":
        setFData(manufacturing);
        break;
      case "health_care_pharma":
        setFData(healthPharma);
        break;
      case "international_trade":
        setFData(internationalTrade);
        break;
      case "bio_technology":
        setFData(biotechnology);
        break;
      case "real_estate_construction":
        setFData(realEstateConstruction);
        break;
      case "banking_financial_services":
        setFData(bankingFinancialServices);
        break;
      case "information_technology":
        setFData(informationTechnology);
        break;
      case "renewable_energy":
        setFData(renewableEnergy);
        break;
      default:
        setFData([]);
    }
  }, [route?.params?.data?.title]);

  const dataMap: { [key: string]: any } = {
    // identity_doc
    birth_certificate:
      birthCertificateData[currentLanguage] || birthCertificateData["en"],
    aadhaar_card: aadhaarCardData[currentLanguage] || aadhaarCardData["en"],
    educational_certificates:
      educationalCertificateData[currentLanguage] ||
      educationalCertificateData["en"],
    pan_card: panCardData[currentLanguage] || panCardData["en"],
    passport: passportData[currentLanguage] || passportData["en"],
    driving_license:
      drivingLicenseData[currentLanguage] || drivingLicenseData["en"],
    voter_id: voterIdData[currentLanguage] || voterIdData["en"],
    marriage_certificate:
      marriageCertificateData[currentLanguage] || marriageCertificateData["en"],
    ration_card: rationCardData[currentLanguage] || rationCardData["en"],
    electricity_bill:
      electricityBillData[currentLanguage] || electricityBillData["en"],
    latest_property_tax_bill:
      propertyTaxBillData[currentLanguage] || propertyTaxBillData["en"],
    // foods
    fssai_license: fssaiLicenseData[currentLanguage] || fssaiLicenseData["en"],
    gst_registration:
      gstRegistrationData[currentLanguage] || gstRegistrationData["en"],
    shop_and_establishment_license:
      shopEstablishmentLicenseData[currentLanguage] ||
      shopEstablishmentLicenseData["en"],
    local_and_specific_licenses:
      localSpecificLicenseData[currentLanguage] ||
      localSpecificLicenseData["en"],
    health_trade_license:
      healthTradeLicenseData[currentLanguage] || healthTradeLicenseData["en"],
    eating_house_license:
      eatingHouseLicenseData[currentLanguage] || eatingHouseLicenseData["en"],
    fire_license: fireLicenseData[currentLanguage] || fireLicenseData["en"],
    liquor_license:
      liquorLicenseData[currentLanguage] || liquorLicenseData["en"],
    environmental_clearance_license:
      environmentalClearanceData[currentLanguage] ||
      environmentalClearanceData["en"],
    professional_tax_registration:
      professionalTaxRegistrationData[currentLanguage] ||
      professionalTaxRegistrationData["en"],
    general_and_supporting_documents:
      generalSupportingDocumentsData[currentLanguage] ||
      generalSupportingDocumentsData["en"],
    proof_of_identity_and_address:
      identityAddressDocuments[currentLanguage] ||
      identityAddressDocuments["en"],
    proof_of_premises:
      identityAddressPremisesDocuments[currentLanguage] ||
      identityAddressPremisesDocuments["en"],
    business_constitution:
      businessConstitutionData[currentLanguage] ||
      businessConstitutionData["en"],
    food_safety_management_plan:
      foodSafetyManagementData[currentLanguage] ||
      foodSafetyManagementData["en"],
    nocs: nocData[currentLanguage] || nocData["en"],
    application_forms_and_declaration_forms:
      formsData[currentLanguage] || formsData["en"],
    passport_sized_photographs:
      passportPhotosData[currentLanguage] || passportPhotosData["en"],
    layout_plan_of_kitchen_or_processing_unit:
      layoutPlanData[currentLanguage] || layoutPlanData["en"],
    list_of_food_products_and_equipment:
      foodProductsEquipmentData[currentLanguage] ||
      foodProductsEquipmentData["en"],
    water_analysis_report:
      waterAnalysisReportData[currentLanguage] || waterAnalysisReportData["en"],
    medical_fitness_certificates_for_employees:
      medicalFitnessCertificateData[currentLanguage] ||
      medicalFitnessCertificateData["en"],
    // manufacturing
    certificate_of_incorporation:
      certificateOfIncorporationData[currentLanguage] ||
      certificateOfIncorporationData["en"],
    memorandum_of_association_and_articles_of_association:
      memorandumAndArticlesData[currentLanguage] ||
      memorandumAndArticlesData["en"],
    proof_of_identity_and_address_of_directors_or_partners:
      proofOfIdentityAddressData[currentLanguage] ||
      proofOfIdentityAddressData["en"],
    business_plan: businessPlanData[currentLanguage] || businessPlanData["en"],
    partnership_deed_or_board_resolution:
      partnershipDeedOrBoardResolutionData[currentLanguage] ||
      partnershipDeedOrBoardResolutionData["en"],
    shareholders_or_founders_agreement_if_applicable:
      shareholdersOrFoundersAgreementData[currentLanguage] ||
      shareholdersOrFoundersAgreementData["en"],
    pan_card_and_gstin:
      panAndGstinData[currentLanguage] || panAndGstinData["en"],
    proof_of_financial_status_or_accountants_declaration:
      financialStatusCAData[currentLanguage] || financialStatusCAData["en"],
    bank_account_details:
      bankAccountDetailsData[currentLanguage] || bankAccountDetailsData["en"],
    factory_license_from_state_government:
      factoryLicenseData[currentLanguage] || factoryLicenseData["en"],
    proof_of_ownership_or_lease_agreement:
      ownershipOrLeaseAgreementData[currentLanguage] ||
      ownershipOrLeaseAgreementData["en"],
    noc_from_fire_department: fireNOCData[currentLanguage] || fireNOCData["en"],
    consent_to_establish_or_operate_from_pollution_board:
      pollutionConsentData[currentLanguage] || pollutionConsentData["en"],
    site_plan_and_factory_layout_plan:
      siteFactoryPlanData[currentLanguage] || siteFactoryPlanData["en"],
    building_stability_certificate:
      buildingStabilityCertificateData[currentLanguage] ||
      buildingStabilityCertificateData["en"],
    proof_of_utility_connections:
      utilityConnectionsData[currentLanguage] || utilityConnectionsData["en"],
    trade_license_from_local_municipality_or_panchayat:
      tradeLicenseData[currentLanguage] || tradeLicenseData["en"],
    product_drawings_and_specifications:
      productDrawingsData[currentLanguage] || productDrawingsData["en"],
    bill_of_materials:
      billOfMaterialsData[currentLanguage] || billOfMaterialsData["en"],
    quality_manual_and_sops:
      qualityManagementData[currentLanguage] || qualityManagementData["en"],
    user_manual_and_labeling_artwork:
      userManualAndLabelingData[currentLanguage] ||
      userManualAndLabelingData["en"],
    type_test_reports_from_recognized_labs:
      typeTestReportsData[currentLanguage] || typeTestReportsData["en"],
    calibration_and_test_reports:
      calibrationTestReportsData[currentLanguage] ||
      calibrationTestReportsData["en"],
    health_and_safety_plans_and_manuals:
      healthSafetyPlansData[currentLanguage] || healthSafetyPlansData["en"],
    list_of_hazardous_and_non_hazardous_wastes:
      hazardousWasteAuthorizationData[currentLanguage] ||
      hazardousWasteAuthorizationData["en"],
    training_plan_for_employees:
      employeeTrainingPlanData[currentLanguage] ||
      employeeTrainingPlanData["en"],
    // healthPharma
    drug_license: drugLicenseData[currentLanguage] || drugLicenseData["en"],
    gst_registration:
      gstRegistrationDatas[currentLanguage] || gstRegistrationDatas["en"],
    company_registration:
      companyRegistrationData[currentLanguage] || companyRegistrationData["en"],
    fssai_registration:
      fssaiRegistrationData[currentLanguage] || fssaiLicenseData["en"],
    trademark_registration:
      trademarkRegistrationData[currentLanguage] ||
      trademarkRegistrationData["en"],
    proof_of_business_premises:
      businessPremisesData[currentLanguage] || businessPremisesData["en"],
    pan_card: panCardDatas[currentLanguage] || panCardDatas["en"],
    aadhaar_card: aadhaarCardDatas[currentLanguage] || aadhaarCardDatas["en"],
    pharmacist_registration_certificate:
      pharmacistRegistrationData[currentLanguage] ||
      pharmacistRegistrationData["en"],
    bank_account_details:
      bankAccountDetailsDatas[currentLanguage] || bankAccountDetailsDatas["en"],
    business_license:
      businessLicensesDatas[currentLanguage] || businessLicensesDatas["en"],
    good_manufacturing_practice_gmp: gmpData[currentLanguage] || gmpData["en"],
    product_dossier:
      productDossierData[currentLanguage] || productDossierData["en"],
    pharmacovigilance_documents:
      pharmacovigilanceData[currentLanguage] || pharmacovigilanceData["en"],
    batch_manufacturing_record:
      batchManufacturingRecordData[currentLanguage] ||
      batchManufacturingRecordData["en"],
    standard_operating_procedures_sops:
      sopData[currentLanguage] || sopData["en"],
    iso_13485_certificate:
      iso13485CertificateData[currentLanguage] || iso13485CertificateData["en"],
    import_export_code_iec:
      importExportCodeData[currentLanguage] || importExportCodeData["en"],
    customs_documents:
      customsDocumentsData[currentLanguage] || customsDocumentsData["en"],
    undertakings: undertakingsData[currentLanguage] || undertakingsData["en"],
    certificate_of_pharmaceutical_product_copp:
      cppData[currentLanguage] || cppData,
    // internationalTrade
    proforma_invoice:
      proformaInvoiceData[currentLanguage] || proformaInvoiceData["en"],
    commercial_invoice_cum_packing_list:
      commercialInvoicePackingData[currentLanguage] ||
      commercialInvoicePackingData["en"],
    bill_of_lading_or_airway_bill:
      billOfLadingData[currentLanguage] || billOfLadingData["en"],
    shipping_bill: shippingBillData[currentLanguage] || shippingBillData["en"],
    certificate_of_origin_coo:
      certificateOfOriginData[currentLanguage] || certificateOfOriginData["en"],
    bill_of_exchange:
      billOfExchangeData[currentLanguage] || billOfExchangeData["en"],
    letter_of_credit_lc:
      letterOfCreditData[currentLanguage] || letterOfCreditData["en"],
    inspection_or_quality_check_certificate:
      inspectionCertificateData[currentLanguage] ||
      inspectionCertificateData["en"],
    phytosanitary_certificate:
      phytosanitaryCertificateData[currentLanguage] ||
      phytosanitaryCertificateData["en"],
    bill_of_entry_boe:
      billOfEntryData[currentLanguage] || billOfEntryData["en"],
    inspection_certificate:
      inspectionCertificateData[currentLanguage] ||
      inspectionCertificateData["en"],
    insurance_certificate:
      insuranceCertificateData[currentLanguage] ||
      insuranceCertificateData["en"],
    import_export_code_iec:
      importExportDocumentsData[currentLanguage] ||
      importExportDocumentsData["en"],
    customs_declaration_form:
      customsDeclarationFormData[currentLanguage] ||
      customsDeclarationFormData["en"],
    insurance_policy:
      insurancePolicyData[currentLanguage] || insurancePolicyData["en"],
    // biotechnology
    identity_and_address_proof:
      identityAddressProofData[currentLanguage] ||
      identityAddressProofData["en"],
    business_registration:
      businessRegistrationData[currentLanguage] ||
      businessRegistrationData["en"],
    government_registrations:
      governmentRegistrationData[currentLanguage] ||
      governmentRegistrationData["en"],
    biotechnology_ignition_grant_big:
      biotechnologyIgnitionGrantData[currentLanguage] ||
      biotechnologyIgnitionGrantData["en"],
    biotechnology_industry_partnership_programme_bipp:
      biotechnologyProgrammeData[currentLanguage] ||
      biotechnologyProgrammeData["en"],
    general_proposal_submissions:
      generalProposalSubmissionsData[currentLanguage] ||
      generalProposalSubmissionsData["en"],
    manufacturing_license:
      manufacturingLicenseFormData[currentLanguage] ||
      manufacturingLicenseFormData["en"],
    clinical_trial_applications:
      clinicalTrialApplicationFormData[currentLanguage] ||
      clinicalTrialApplicationFormData["en"],
    drug_master_files_dmf:
      drugMasterFileData[currentLanguage] || drugMasterFileData["en"],
    gst_registration:
      gstRegistrationFormData[currentLanguage] || gstRegistrationFormData["en"],
    regulatory_approvals:
      regulatoryApprovalsFormData[currentLanguage] ||
      regulatoryApprovalsFormData["en"],
    // realEstateConstruction
    sale_deed: saleDeedFormData[currentLanguage] || saleDeedFormData["en"],
    encumbrance_certificate:
      encumbranceCertificateData[currentLanguage] ||
      encumbranceCertificateData["en"],
    approved_building_plan:
      approvedBuildingPlanData[currentLanguage] ||
      approvedBuildingPlanData["en"],
    occupancy_certificate:
      occupancyCertificateData[currentLanguage] ||
      occupancyCertificateData["en"],
    power_of_attorney:
      powerOfAttorneyData[currentLanguage] || powerOfAttorneyData["en"],
    mutation_certificate:
      mutationCertificateFormData[currentLanguage] ||
      mutationCertificateFormData["en"],
    property_tax_receipts:
      propertyTaxReceiptsFormData[currentLanguage] ||
      propertyTaxReceiptsFormData["en"],
    agreement_to_sell:
      agreementToSellFormData[currentLanguage] || agreementToSellFormData["en"],
    allotment_letter:
      allotmentLetterFormData[currentLanguage] || allotmentLetterFormData["en"],
    completion_certificate:
      completionCertificateFormData[currentLanguage] ||
      completionCertificateFormData["en"],
    possession_letter:
      possessionLetterFormData[currentLanguage] ||
      possessionLetterFormData["en"],
    noc: nocFormData[currentLanguage] || nocFormData["en"],
    payment_receipts:
      paymentReceiptFormData[currentLanguage] || paymentReceiptFormData["en"],
    commencement_certificate:
      commencementCertificateFormData[currentLanguage] ||
      commencementCertificateFormData["en"],
    khata_certificate:
      khataCertificateData[currentLanguage] || khataCertificateData["en"],
    rera_registration_certificate:
      reraRegistrationCertificateData[currentLanguage] ||
      reraRegistrationCertificateData["en"],
    construction_agreement:
      constructionAgreementData[currentLanguage] ||
      constructionAgreementData["en"],
    mother_deed: motherDeedData[currentLanguage] || motherDeedData["en"],
    society_noc: societyNOCData[currentLanguage] || societyNOCData["en"],
    tax_receipts: taxReceiptsData[currentLanguage] || taxReceiptsData["en"],
    joint_development_agreement:
      jointDevelopmentAgreementFormData[currentLanguage] ||
      jointDevelopmentAgreementFormData["en"],
    land_documents:
      landDocumentsData[currentLanguage] || landDocumentsData["en"],
    land_use_certificate:
      landUseCertificateData[currentLanguage] || landUseCertificateData["en"],
    // bankingFinancialServices
    reserve_bank_of_india_rbi_registration:
      rbiRegistrationFormData[currentLanguage] || rbiRegistrationFormData["en"],
    non_banking_financial_company_nbfc_registration:
      nbfcRegistrationData[currentLanguage] || nbfcRegistrationData["en"],
    central_registry_of_securitisation_asset_reconstruction_and_security_interest_of_india_cersai:
      cersaiRegistrationData[currentLanguage] || cersaiRegistrationData["en"],
    financial_intelligence_unit_india_fiu_ind:
      fiuIndData[currentLanguage] || fiuIndData["en"],
    central_kyc: centralKycData[currentLanguage] || centralKycData["en"],
    credit_bureaus:
      creditBureausData[currentLanguage] || creditBureausData["en"],
    know_your_customer_and_aml_stands_for_anti_money_laundering_kyc_aml:
      kycAmlData[currentLanguage] || kycAmlData["en"],
    fair_practice_code:
      fairPracticeCodeData[currentLanguage] || fairPracticeCodeData["en"],
    credit_information:
      creditInformationData[currentLanguage] || creditInformationData["en"],
    it_and_cybersecurity:
      itCybersecurityData[currentLanguage] || itCybersecurityData["en"],
    digital_lending:
      digitalLendingData[currentLanguage] || digitalLendingData["en"],
    regulatory_returns:
      regulatoryReturnsData[currentLanguage] || regulatoryReturnsData["en"],
    financial_statements:
      financialStatementsData[currentLanguage] || financialStatementsData["en"],
    micro_small_and_medium_enterprises_msme_vendors:
      msmeVendorsData[currentLanguage] || msmeVendorsData["en"],
    income_tax: incomeTaxData[currentLanguage] || incomeTaxData["en"],
    companies_act: companiesActData[currentLanguage] || companiesActData["en"],
    securities_and_exchange_board_of_india_sebi_compliance:
      sebiComplianceData[currentLanguage] || sebiComplianceData["en"],
    director_kyc: directorKycData[currentLanguage] || directorKycData["en"],
    annual_return: annualReturnData[currentLanguage] || annualReturnData["en"],
    capital_and_reserves:
      capitalReservesData[currentLanguage] || capitalReservesData["en"],
    grievance_redressal:
      grievanceRedressalData[currentLanguage] || grievanceRedressalData["en"],
    vendor_management:
      vendorManagementData[currentLanguage] || vendorManagementData["en"],
    disaster_recovery:
      disasterRecoveryData[currentLanguage] || disasterRecoveryData["en"],
    // informationTechnology
    access_and_identity_control:
      accessIdentityControlData[currentLanguage] ||
      accessIdentityControlData["en"],
    corporate_security_policies:
      corporateSecurityPoliciesData[currentLanguage] ||
      corporateSecurityPoliciesData["en"],
    incident_response:
      incidentResponseData[currentLanguage] || incidentResponseData["en"],
    data_loss_prevention:
      dataLossPreventionData[currentLanguage] || dataLossPreventionData["en"],
    monitoring_and_reporting:
      monitoringReportingData[currentLanguage] || monitoringReportingData["en"],
    compliance_monitoring_and_auditing:
      complianceMonitoringAuditingData[currentLanguage] ||
      complianceMonitoringAuditingData["en"],
    data_privacy_and_cybersecurity:
      dataPrivacyAuditingData[currentLanguage] || dataPrivacyAuditingData["en"],
    intellectual_property:
      intellectualPropertyData[currentLanguage] ||
      intellectualPropertyData["en"],
    licensing_and_registration:
      licensingRegistrationData[currentLanguage] ||
      licensingRegistrationData["en"],
    regulatory_compliance:
      regulatoryComplianceData[currentLanguage] ||
      regulatoryComplianceData["en"],
    risk_assessment:
      riskAssessmentData[currentLanguage] || riskAssessmentData["en"],
    // renewableEnergy
    indian_electricity_grid_code_iegc:
      indianElectricityGridCodeData[currentLanguage] ||
      indianElectricityGridCodeData["en"],
    central_electricity_authority_safety_cea_clearance:
      ceaSafetyClearanceData[currentLanguage] || ceaSafetyClearanceData["en"],
    regional_load_despatch_centre_national_load_despatch_centre_rldc_nldc_registration:
      loadDespatchRegistrationData[currentLanguage] ||
      loadDespatchRegistrationData["en"],
    technical_data: technicalData[currentLanguage] || technicalData["en"],
    environmental_clearance:
      environmentalClearanceData[currentLanguage] ||
      environmentalClearanceData["en"],
    environmental_permits:
      environmentalPermitsData[currentLanguage] ||
      environmentalPermitsData["en"],
    ministry_of_environment_forest_and_climate_change_moef_cc:
      moefccData[currentLanguage] || moefccData["en"],
    renewable_purchase_obligation_rpo:
      rpoData[currentLanguage] || rpoData["en"],
    renewable_energy_certificates_recs:
      recData[currentLanguage] || recData["en"],
    energy_conservation_amendment_act_2022:
      energyConservationActData[currentLanguage] ||
      energyConservationActData["en"],
    central_electricity_regulatory_commission_and_serc_rules_cerc_serc:
      electricityRegulatoryCommissionData[currentLanguage] ||
      electricityRegulatoryCommissionData["en"],
    labor_laws: laborLawsData[currentLanguage] || laborLawsData["en"],
    factories_act: factoriesActData[currentLanguage] || factoriesActData["en"],
    sexual_harassment_act:
      sexualHarassmentActData[currentLanguage] || sexualHarassmentActData["en"],
    compliance_management_system:
      complianceManagementSystemData[currentLanguage] ||
      complianceManagementSystemData["en"],
    business_licenses:
      businessLicensesDatas[currentLanguage] || businessLicensesDatas["en"],
    code_of_ethics: codeOfEthicsData[currentLanguage] || codeOfEthicsData["en"],
    reporting_and_disclosure:
      reportingAndDisclosureData[currentLanguage] ||
      reportingAndDisclosureData["en"],
  };

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-3810123126111899/5904850139";

  return (
    <Container subContainer={styles.container}>
      <View style={styles.viewStyle}>
        <Pressable
          style={[styles.headerViewStyle, { backgroundColor: colors.cardBg }]}
          onPress={() => navigation.goBack()}
        >
          <ArrowBack width={horizontalScale(20)} height={horizontalScale(20)} />
        </Pressable>
        <View
          style={{
            width: "70%",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.textStyle,
              { fontSize: 20 * fontScale, color: colors.primary },
            ]}
          >
            {t(data?.title)}
          </Text>
        </View>
        <Pressable style={styles.headerViewStyle}></Pressable>
      </View>
      <FlatList
        data={fData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListCard
              data={item}
              onPress={() => {
                setRData(item);
                setSelectedData(dataMap[item.title] || []);
                refRBSheet.current.open();
              }}
            />
          );
        }}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        closeOnPressBack={true}
        customStyles={{
          wrapper: { backgroundColor: colors.wrapper },
          draggableIcon: {
            ...styles.draggableIconStyle,
            backgroundColor: colors.subText,
          },
          container: [
            styles.containerStyle,
            { backgroundColor: colors.background },
          ],
        }}
        draggable
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={styles.bottomSheetRawStyle}>
          <View style={{ flex: 1, maxWidth: "90%" }}>
            <Text
              style={[
                styles.textHeaderStyle,
                { fontSize: 20 * fontScale, color: colors.primary },
              ]}
            >
              {t(rData?.title)}
            </Text>
          </View>
          <CloseIcon
            onPress={() => refRBSheet.current.close()}
            width={horizontalScale(24)}
            height={horizontalScale(24)}
          />
        </View>
        <ScrollView style={{ marginBottom: verticalScale(20) }}>
          <Text
            style={{
              color: colors.subText,
              fontSize: 16 * fontScale,
              fontWeight: "400",
              marginTop: verticalScale(8),
            }}
          >
            {selectedData?.description}
          </Text>

          {selectedData?.steps?.map((stepObj: any, index: number) => (
            <View key={index} style={{ marginTop: verticalScale(6) }}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18 * fontScale,
                  color: colors.text,
                }}
              >
                {`${stepObj.step}. ${stepObj.title}`}
              </Text>

              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 16 * fontScale,
                  color: colors.subText,
                }}
              >
                {stepObj.details}
              </Text>
            </View>
          ))}
        </ScrollView>
        <BannerAd
          ref={bannerRef}
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          width={horizontalScale(345)}
        />
      </RBSheet>
      <BannerAd
        ref={bannerRef}
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        width={horizontalScale(345)}
      />
    </Container>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(20),
  },
  headerViewStyle: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(40) / 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
  },
  textStyle: {
    fontWeight: "600",
    textAlign: "center",
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerStyle: {
    height: "80%",
    borderTopLeftRadius: horizontalScale(40),
    borderTopRightRadius: 40,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  draggableIconStyle: {
    width: horizontalScale(58),
    height: verticalScale(3),
  },

  bottomSheetRawStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeaderStyle: {
    fontWeight: "600",
  },
});
