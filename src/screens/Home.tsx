import React, { useState, useEffect } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import NativeAdCard from "../components/NativeAdComponent";
import { homeGridData } from "../constants/dummyData";
import { useNavigation } from "@react-navigation/native";
import GridCard from "../components/GridCard";
import Search from "../components/SearchComponent";
import { horizontalScale, verticalScale } from "../constants/responsive";
import { useTranslation } from "react-i18next";
import { useFontSize } from "../constants/FontSizeContext";
import { SettingIcon } from "../assets/svgs/Home";
import { useThemeColors } from "../constants/ThemeContext";

const Home = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { fontScale } = useFontSize();
  const { colors } = useThemeColors();

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(homeGridData);

  useEffect(() => {
    if (searchText === "") {
      setFilteredData(homeGridData);
    } else {
      const filtered = homeGridData.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchText]);

  return (
    <Container subContainer={{ paddingHorizontal: verticalScale(24) }}>
      <View style={style.headerViewStyle}>
        <Text
          style={[
            style.textStyle,
            { fontSize: 20 * fontScale, color: colors.primary },
          ]}
        >
          {t("compliance")}
        </Text>
        <Pressable
          style={[style.settingBtnStyle, { backgroundColor: colors.cardBg }]}
          onPress={() => navigation.navigate("Setting")}
        >
          <SettingIcon
            width={horizontalScale(20)}
            height={horizontalScale(20)}
          />
        </Pressable>
      </View>

      <Search searchText={searchText} onSearchChangeText={setSearchText} />

      <NativeAdCard />

      <FlatList
        data={filteredData}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{ paddingVertical: verticalScale(20) }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GridCard
            data={item}
            onPress={() => navigation.navigate("List", { data: item })}
          />
        )}
      />
    </Container>
  );
};

export default Home;

const style = StyleSheet.create({
  textStyle: {
    fontWeight: "700",
  },
  headerViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(20),
  },
  settingBtnStyle: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderRadius: verticalScale(40) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
