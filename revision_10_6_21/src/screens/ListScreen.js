// import {
//     StyleSheet,
//     StatusBar,
//     Text,
//     View,
//     TouchableOpacity
// } from 'react-native'
// import React from 'react'
// import {useSelector, useDispatch} from "react-redux";
// import {addItem} from "../redux/reducers/reducer";
//
// const [value, setValue] = useState('')
// const dispatch = useDispatch()
// const onSaveNote = value => {
//     dispatch(addItem(value))
// }
//
// function ListScreen({ navigation }) {
//     return (
//         <>
//             <StatusBar barStyle='light-content' />
//             <View style={styles.container}>
//                 <View style={styles.fabContainer}>
//                     <TouchableOpacity
//                         style={styles.fabButton}>
//                         onPress={()=> onSaveNote(value)}
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </>
//     )
// }
// function ListView() {
//     const listItems = useSelector(state => state.itemList)
//
//     return (
//         <View
//             style={{
//                 backgroundColor: 'white',
//                 flex: 1,
//                 borderTopLeftRadius: 20,
//                 borderTopRightRadius: 20,
//                 paddingHorizontal: 20,
//                 paddingVertical: 20
//             }}>
//             {listItems.length !== 0 ? (
//                 <Text>Contains List items</Text>
//             ) : (
//                 <Text style={{ fontSize: 30 }}>You list is empty :'(</Text>
//             )}
//         </View>
//     )
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'blue'
//     },
//     fabContainer: {
//         justifyContent: 'flex-end',
//         flexDirection: 'row',
//         position: 'absolute',
//         right: 10,
//         bottom: 20
//     },
//     fabButton: {
//         backgroundColor: 'blue',
//         borderRadius: 35,
//         width: 70,
//         height: 70,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })
//
// export default ListScreen