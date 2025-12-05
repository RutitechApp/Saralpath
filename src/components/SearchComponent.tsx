import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchIcon } from '../assets/svgs/Home';
import { useTranslation } from 'react-i18next';
import { useFontSize } from '../constants/FontSizeContext';
import { useThemeColors } from '../constants/ThemeContext';

interface SearchProps {
  searchText?: string;
  onSearchChangeText?: () => void;
}

const Search: React.FC<SearchProps> = ({ searchText, onSearchChangeText }) => {
  const { t } = useTranslation();
  const { fontScale } = useFontSize();
  const { theme, setTheme, colors } = useThemeColors();
  return (
    <View
      style={[
        styles.viewStyle,
        { backgroundColor: colors.cardBg, borderColor: colors.background },
      ]}
    >
      <SearchIcon />
      <TextInput
        placeholder={t('search_here')}
        value={searchText}
        onChangeText={onSearchChangeText}
        style={[
          styles.textInputStyle,
          { fontSize: 12 * fontScale, color: colors.background },
        ]}
        placeholderTextColor={colors.text}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 15,
    paddingHorizontal: 13,
    borderWidth: 0.5,
  },
  textInputStyle: {
    marginHorizontal: 10,
    fontWeight: '400',
  },
});
