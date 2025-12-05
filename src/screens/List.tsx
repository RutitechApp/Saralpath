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

  const currentLanguage = i18n.language;
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
  };

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
          <Text
            style={[
              styles.textHeaderStyle,
              { fontSize: 20 * fontScale, color: colors.primary },
            ]}
          >
            {t(rData?.title)}
          </Text>
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
      </RBSheet>
      <BannerAd
        ref={bannerRef}
        unitId={TestIds.BANNER}
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
