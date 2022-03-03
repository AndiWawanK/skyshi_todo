import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.05,
  },
  sectionTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.08,
  },
  screenLabel: {
    flex: 1,
    fontFamily: FONTS.poppins[700],
    color: Colors.BLACK_TEXT,
    fontSize: RFValue(16),
  },
});
