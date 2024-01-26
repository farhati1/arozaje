import { StyleSheet } from 'react-native';
import {COLORS} from './../../outils/constantes';

export const stylesComm = StyleSheet.create({
  commentContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentOwnerImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.main,
  },
  commentOwnerName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 5,
  },
  commentText: {
    fontSize: 14,
    marginLeft: 10,
  },
});
