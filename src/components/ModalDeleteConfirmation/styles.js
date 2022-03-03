import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.WHITE,
    paddingVertical: width * 0.04,
    borderRadius: width * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.1,
  },
  imageWarning: {
    width: width * 0.2,
    height: width * 0.2,
    marginTop: width * 0.04,
  },
  message: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(14),
    color: Colors.BLACK_TEXT,
    textAlign: 'center',
    marginVertical: width * 0.05,
  },
  messageBold: {
    fontFamily: FONTS.poppins[700],
    fontSize: RFValue(14),
    color: Colors.BLACK_TEXT,
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width * 0.04,
  },
  cancelledButton: {
    width: width * 0.28,
    height: width * 0.12,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.08,
    marginHorizontal: width * 0.02,
  },
  cancelledButtonTitle: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(14),
    color: '#4A4A4A',
    marginTop: width * 0.005,
  },
  deleteButton: {
    width: width * 0.28,
    height: width * 0.12,
    backgroundColor: Colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.08,
    marginHorizontal: width * 0.02,
  },
  deleteButtonTitle: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(14),
    color: Colors.WHITE,
    marginTop: width * 0.005,
  },
});
