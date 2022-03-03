import {StyleSheet, Dimensions} from 'react-native';
import {Colors, FONTS} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    height: width * 0.1,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: width * 0.045,
    borderRadius: width * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: RFValue(16),
    color: Colors.WHITE,
  },
  title: {
    fontFamily: FONTS.poppins[600],
    fontSize: RFValue(11),
    color: Colors.WHITE,
    marginTop: width * 0.008,
    paddingLeft: width * 0.01,
  },
});
