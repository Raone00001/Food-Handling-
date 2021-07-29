import * as React from 'react';
import { Button, View, Text,TouchableOpacity, StatusBar, StyleSheet, SafeAreaView, SectionList } from 'react-native';

const DATA = [
  {
    title:["Turkey, Avocado and Pineapple Burger"],
    data:["Ingredients:                                                         - 10 each -> Turkey Burger patties                                              - 1 pinch -> Salt, kosher                                                       - Paparika, as needed                                                            - White pepper, ground, as needed                                                - 10 slices -> Pineapple, 1/8 thick                                             - 3 each -> Avocados - 10 each -> Focaccia bread, 5” square                      - 1 cup -> Mango Pineapple Mayonnaise, prepared", "To Prepare Mango Pineapple Mayonnaise:                                                                      - 2 ounces/oz -> Hellmann's Mango Pineapple Vinaigrette                         - 1 cup -> Hellmann's® 1/2 The Fat Light Mayonnaise 2 x 4 L", "Preperation:             (To Prepare the Sandwich) -> Season turkey burgers with salt, paprika and white pepper; grill to 165 degrees.                                               Grill pineapple rings until warmed through and lightly browned. Keep warm.  Spread one focaccia evenly with Mango Pineapple Mayonnaise (sub recipe below).  On bottom of focaccia, layer one turkey burger, one pineapple ring and 2 slices avocado.                                                                  Replace top of focaccia.                                                    Serve immediately.                                                               (To Prepare Mango Pineapple Mayonnaise) -> Combine ingredients."]
  },

  {
    title:["Toasted Chicken, Avocado and Purple Slaw Sandwich"],
    data:["Ingredients:                                                         - 4 slices Dempster's® 100% Whole Grains Double Flax Bread, toasted             - 1/3 cup (75 mL) hummus                                                        - 1 1/2 cups (375 mL) shredded cooked chicken                                   - 1 avocado, peeled, pitted and sliced                                          - 3 tbsp (45 mL) olive oil                                                      - 1 tbsp (15 mL) lime juice                                                     - 1/4 tsp (1 mL) each salt and pepper                                           - 1 cup (250 mL) shredded red cabbage                                           - 1/2 cup (125 mL) grated carrot                                                - 1/4 cup (60 mL) chopped green onion", "Preperation:                       Purple Slaw: Whisk together olive oil, lime juice, salt and pepper.           Add cabbage, carrot and green onion; toss well.                               Spread bread slices with hummus.                                                 Top 2 slices of bread with chicken, avocado and slaw.                          Cap with remaining bread."]
  },

  {
    title:["BLT Hot Dogs"],
    data:["Ingredients:                                                         - 4 Dempster’s® Signature Sausage Buns (White), split                           - 4 jumbo hot dogs, cooked according to package directions                      - 1/4 cup (60 mL) mayonnaise                                                    - 1/2 cup (125 mL) shredded lettuce                                             - 1/2 cup (125 mL) diced tomatoes                                               - 4 slices bacon, cooked and chopped", "Preperation:                        Assemble hot dogs in buns with mayonnaise, lettuce, tomatoes and bacon.                               Tips:                                                                           • Add shredded cheese to BLT dog if desired. Cheddar, Swiss or Monterey Jack are all good options.                                                                • Substitute arugula for shredded lettuce if desired."]
  },

  {
    title: "Drinks",
    data: ["- Coffee                                - Milk                                    - Smoothie                  - Tea"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LunchOptions = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
 
 export default LunchOptions