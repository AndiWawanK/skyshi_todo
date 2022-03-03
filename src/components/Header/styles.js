import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.17,
    backgroundColor: Colors.PRIMARY,
  },
  section: withBack => ({
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: withBack ? width * 0.01 : width * 0.03,
  }),
  sectionLeft: {
    paddingHorizontal: width * 0.02,
  },
  arrowLeftIcon: {
    fontSize: RFValue(22),
    color: Colors.WHITE,
  },
  sectionBody: {
    flex: 1,
    paddingHorizontal: width * 0.01,
  },
  title: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(15),
    color: Colors.WHITE,
    marginTop: width * 0.006,
  },
});
