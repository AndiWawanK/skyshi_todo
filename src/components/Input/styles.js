import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginVertical: width * 0.03,
  },
  label: {
    fontFamily: FONTS.poppins[500],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(12),
    textTransform: 'uppercase',
  },
  inputSection: isFocused => ({
    height: width * 0.13,
    borderWidth: 1,
    borderColor: isFocused ? Colors.PRIMARY : Colors.GREY_LIGHT,
    justifyContent: 'center',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    marginTop: width * 0.02,
  }),
  input: {
    fontFamily: FONTS.poppins[500],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(13),
    marginTop: width * 0.005,
  },
});
