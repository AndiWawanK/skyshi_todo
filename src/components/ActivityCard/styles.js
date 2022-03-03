import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    width: width / 2.35,
    height: width * 0.35,
    backgroundColor: Colors.WHITE,
    elevation: 8,
    paddingHorizontal: width * 0.035,
    paddingVertical: width * 0.025,
    borderRadius: width * 0.03,
    shadowColor: 'rgba(0,0,0, 0.5)',
    marginVertical: width * 0.025,
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontFamily: FONTS.poppins[700],
    fontSize: RFValue(14),
    color: Colors.BLACK_TEXT,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    flex: 1,
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(10.5),
    color: Colors.GREY,
    marginTop: width * 0.01,
  },
  trashIcon: {
    fontSize: RFValue(16),
    color: Colors.GREY,
  },
});
