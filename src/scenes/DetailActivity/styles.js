import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, Colors} from 'styles';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.05,
  },
  topHeaderSection: isEditable => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: isEditable ? 0 : width * 0.025,
    borderBottomWidth: isEditable ? 1 : 0,
    borderBottomColor: Colors.LINE_STROKE,
    paddingHorizontal: width * 0.05,
    paddingTop: width * 0.05,
  }),
  topHeaderTitle: {
    flex: 1,
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(15),
    color: Colors.BLACK_TEXT,
  },
  topHeaderInput: {
    flex: 1,
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(15),
    color: Colors.BLACK_TEXT,
  },
  editButton: {
    // width: width * 0.13,
    alignItems: 'flex-end',
  },
  editButtonTitle: {
    fontFamily: FONTS.poppins[500],
    fontSize: RFValue(12),
    color: Colors.BLACK_TEXT,
  },
  pencilIcon: {
    fontSize: RFValue(17),
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: width * 0.07,
    marginBottom: width * 0.08,
    paddingHorizontal: width * 0.05,
  },
});
