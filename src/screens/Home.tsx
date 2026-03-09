import React, { useState, useEffect, useMemo } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import NativeAdCard from "../components/NativeAdComponent";
import { homeGridData } from "../constants/dummyData";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import GridCard from "../components/GridCard";
import Search from "../components/SearchComponent";
import { horizontalScale, verticalScale } from "../constants/responsive";
import { useTranslation } from "react-i18next";
import { useFontSize } from "../constants/FontSizeContext";
import { SettingIcon } from "../assets/svgs/Home";
import { useThemeColors } from "../constants/ThemeContext";
import {
  handleInterstitialClick,
  initializeInterstitialConfig,
  preloadInterstitial,
} from "../ads/InterstitialManager";

type GridItem = {
  id: number;
  title: string;
  [key: string]: any;
};

type AdItem = {
  type: "ad";
  id: string;
};

type RowItem = { type: "row"; items: GridItem[] } | AdItem;

type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
  List: { data: GridItem };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const AD_INTERVAL = 4;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  const { fontScale } = useFontSize();
  const { colors } = useThemeColors();

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState<GridItem[]>(
    homeGridData as GridItem[],
  );
  useEffect(() => {
    initializeInterstitialConfig();
    preloadInterstitial();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setFilteredData(homeGridData as GridItem[]);
    } else {
      const filtered = (homeGridData as GridItem[]).filter((item) =>
        t(item.title).toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }, [searchText, t]);

  const finalData: RowItem[] = useMemo(() => {
    const result: RowItem[] = [];
    let buffer: GridItem[] = [];

    filteredData.forEach((item, index) => {
      buffer.push(item);

      if (buffer.length === 2) {
        result.push({ type: "row", items: buffer });
        buffer = [];
      }

      if ((index + 1) % AD_INTERVAL === 0) {
        result.push({ type: "ad", id: `ad-${index}` });
      }
    });

    if (buffer.length > 0) {
      result.push({ type: "row", items: buffer });
    }

    return result;
  }, [filteredData]);

  return (
    <Container subContainer={{ paddingHorizontal: verticalScale(24) }}>
      <View style={styles.headerViewStyle}>
        <Text
          style={[
            styles.textStyle,
            { fontSize: 20 * fontScale, color: colors.primary },
          ]}
        >
          {t("compliance")}
        </Text>

        <Pressable
          style={[styles.settingBtnStyle, { backgroundColor: colors.cardBg }]}
          onPress={() => navigation.navigate("Setting")}
        >
          <SettingIcon
            width={horizontalScale(20)}
            height={horizontalScale(20)}
          />
        </Pressable>
      </View>

      <Search searchText={searchText} onSearchChangeText={setSearchText} />

      <FlatList
        data={finalData}
        keyExtractor={(item, index) =>
          item.type === "ad" ? item.id : `row-${index}`
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: verticalScale(20),
        }}
        renderItem={({ item }) => {
          if (item.type === "ad") {
            return (
              <View style={{ marginBottom: 16 }}>
                <NativeAdCard />
              </View>
            );
          }

          return (
            <View style={styles.row}>
              {item.items.map((card) => (
                <View key={card.id} style={styles.cardWrapper}>
                  <GridCard
                    data={card}
                    onPress={() => {
                      handleInterstitialClick(() => {
                        try {
                          navigation.navigate("List", { data: card });
                        } catch (err) {
                          console.warn("Navigation failed:", err);
                        }
                      });
                    }}
                  />
                </View>
              ))}

              {item.items.length === 1 && <View style={styles.cardWrapper} />}
            </View>
          );
        }}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardWrapper: {
    width: "48%",
  },
});
