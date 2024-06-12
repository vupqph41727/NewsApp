import { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color';

function CategoryTextSlider({ selectCategory }) {
  const [active, setActive] = useState(1);

  const categoryList = [
    { id: 1, name: 'Latest' },
    { id: 2, name: 'World' },
    { id: 3, name: 'Business' },
    { id: 4, name: 'Sport' },
    { id: 5, name: 'Life' },
    { id: 6, name: 'Movie' },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onCategoryClick(item.id);
              selectCategory(item.name);
            }}
          >
            <Text style={item.id === active ? styles.selectText : styles.unselectText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  unselectText:{
    marginRight:15,
    fontSize:20,
    fontWeight:'bold',
    color:Color.gray,
  },
  selectText:{
    marginRight:15,
    fontSize:20,
    fontWeight:'bold',
    color:Color.primary,
  }
})

export default CategoryTextSlider