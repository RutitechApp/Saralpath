import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Container from '../components/Container';
import { ArrowBack, CloseIcon } from '../assets/svgs/Home';
import { horizontalScale, verticalScale } from '../constants/responsive';
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
} from '../constants/dummyData';
import ListCard from '../components/ListCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useFontSize } from '../constants/FontSizeContext';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useThemeColors } from '../constants/ThemeContext';
import { useTranslation } from 'react-i18next';
import { birthCertificateData } from '../constants/birthCertificateData';

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
  const currentLanguage = i18n.language;
  useEffect(() => {
    switch (route?.params?.data?.title) {
      case 'identity_documents':
        setFData(identityDocumentData);
        break;
      case 'food_beverage':
        setFData(foodBeverage);
        break;
      case 'manufacturing':
        setFData(manufacturing);
        break;
      case 'health_care_pharma':
        setFData(healthPharma);
        break;
      case 'international_trade':
        setFData(internationalTrade);
        break;
      case 'bio_technology':
        setFData(biotechnology);
        break;
      case 'real_estate_construction':
        setFData(realEstateConstruction);
        break;
      case 'banking_financial_services':
        setFData(bankingFinancialServices);
        break;
      case 'information_technology':
        setFData(informationTechnology);
        break;
      case 'renewable_energy':
        setFData(renewableEnergy);
        break;
      default:
        setFData([]);
    }
  }, [route?.params?.data?.title]);

  return (
    <Container subContainer={styles.container}>
      <View style={styles.viewStyle}>
        <Pressable
          style={[styles.headerViewStyle, { backgroundColor: colors.cardBg }]}
          onPress={() => navigation.goBack()}
        >
          <ArrowBack width={horizontalScale(20)} height={horizontalScale(20)} />
        </Pressable>
        <Text
          style={[
            styles.textStyle,
            { fontSize: 20 * fontScale, color: colors.primary },
          ]}
        >
          {t(data?.title)}
        </Text>
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
                refRBSheet.current.open();
                setRData(item);
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
          container: styles.containerStyle,
        }}
        draggable
        customModalProps={{
          animationType: 'slide',
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
              { fontSize: 18 * fontScale, color: colors.primary },
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
              fontSize: 14 * fontScale,
              fontWeight: '400',
              marginTop: verticalScale(8),
            }}
          >
            {birthCertificateData[currentLanguage]?.description ||
              birthCertificateData['en'].description}
          </Text>
          {(
            birthCertificateData[currentLanguage]?.steps ||
            birthCertificateData['en'].steps
          ).map((stepObj: any, index: number) => (
            <View key={index} style={{ marginTop: verticalScale(6) }}>
              <Text style={{ fontWeight: '600', fontSize: 14 * fontScale }}>
                {`${stepObj.step}. ${stepObj.title}`}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14 * fontScale,
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
        width={100}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '600',
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerStyle: {
    height: '80%',
    borderTopLeftRadius: horizontalScale(40),
    borderTopRightRadius: 40,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  draggableIconStyle: {
    width: horizontalScale(58),
    height: verticalScale(3),
  },
  wrapperStyle: {},
  bottomSheetRawStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeaderStyle: {
    fontWeight: '600',
  },
});
