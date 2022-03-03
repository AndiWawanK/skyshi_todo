import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.WHITE,
    paddingVertical: width * 0.04,
    borderRadius: width * 0.03,
  },
  bodyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.LINE_STROKE,
    paddingBottom: width * 0.03,
    paddingHorizontal: width * 0.04,
  },
  title: {
    flex: 1,
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(14),
    color: Colors.BLACK,
    marginTop: width * 0.005,
  },
  closeIcon: {
    fontSize: RFValue(20),
    color: Colors.GREY_DARK,
  },
  inputSection: {
    paddingHorizontal: width * 0.04,
    marginTop: width * 0.02,
  },
  bodyFooter: {
    borderTopWidth: 0.8,
    borderTopColor: Colors.LINE_STROKE,
    paddingTop: width * 0.03,
    paddingHorizontal: width * 0.04,
    marginTop: width * 0.04,
    alignItems: 'flex-end',
  },
  buttonSave: isDisabled => ({
    width: width * 0.25,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.07,
    backgroundColor: Colors.PRIMARY,
    opacity: isDisabled ? 0.5 : 1,
  }),
  buttonSaveTitle: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(12),
    color: Colors.WHITE,
    marginTop: width * 0.005,
  },
});
