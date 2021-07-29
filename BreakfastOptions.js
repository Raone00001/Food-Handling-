import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";

const DATA = [
  {
    title: "Flourless Brownie Cake",
    data: [" Ingredients:                                                       - ⅔ cup granulated sugar                                                        - 4 eggs, separated                                                             - 8 oz semi sweet baker’s chocolate, chopped                                    - ½ cup unsalted butter                                                         - ½ cup cocoa powder                                                            - 1 tbsp orange zest                                                            - ¼ cup fresh orange juice                                                      - ½ tsp vanilla extract                                                         - ¼ tsp salt                                                                    - cocoa, candied orange peel and sugared cranberries for garnish", "Preperation:                                                                              Preheat oven to 325°F (160 °C). Line bottom of  8-inch (20 cm) spring form pan with parchment paper.                                                           In a large mixing bowl, whisk sugar and egg yolks until pale and thick, about 3minutes.                                                                                                                                                     Melt chocolate and butter together over a double boiler. Pour one-third of the melted chocolate mixture into the egg yolk mixture; whisk to incorporate. Whisk in remaining chocolate mixture, cocoa powder, orange zest, orange juice, vanilla and salt until fully combined.                                                                                                                                    Using a hand mixer or stand mixer, on high speed, whisk egg whites until stiff peaks form, about 3 minutes. Fold egg whites into chocolate batter until fully combined. Pour batter into prepared pan. Bake for 45 for 50 minutes, until a toothpick inserted in center comes out fairly clean. Let cool in pan on a wire rack for 3 minutes. Remove spring form ring and cool cake completely. (It will fall upon cooling; that’s expected.) Transfer to serving plate. Dust with cocoa and garnish with candied orange peel and cranberries.                                                                                                          Candied Orange Peel: Slice rind off of 1 naval orange and cut into thin strips. In a small saucepan, on low-medium heat, combine ½ cup (125 mL) granulated sugar with ¼ cup (60 mL) water. Cook for 5 minutes, stirring until sugar has dissolved. Add orange strips and cook out until pith (white skin) looks semi translucent, 20 to 25 minutes. Gently remove orange slices from syrup and lightly toss in ¼ cup (60 mL) granulated sugar. Transfer to a wire rack to dry. Store in an airtight container for 1 week.                                                                                                                   Sugared Cranberries:In small bowl place 1 egg white. In separate small bowl, place ¼ cup (60 mL) granulated sugar. Dip ¼ cup (10 mL) fresh cranberries in egg white and toss in sugar. Let dry 10 to 15 minutes.                                                                                                              Tip: Add in a hint of powdered espresso to the mix instead of orange and top with whipped cream for a mocha chocolate vibe."]
  },

  {
    title:["Orange Cranberry Oatmeal"],
    data:["Ingredients:                                                         - 2 cups Tropicana Pure Premium® orange juice                                    - 1 cup water                                                                     - 1/4 teaspoon salt                                                             - /8 teaspoon ground cinnamon                                                   - 2 cups Large Flake Quaker® Oats or Quick Quaker® Oats (uncooked)                     - 1/2 cup dried cranberries                                                     - 1 cup low-fat or fat-free vanilla yogurt                                       - 1/4 cup chopped toasted walnuts                                                - Additional dried cranberries (optional)", "Preperation:                 In medium saucepan, bring orange juice, water, salt and cinnamon to a gentle boil. Stir in oats and cranberries. Return to a boil, reduce heat to medium. Cook 1 minute for quick oats, 5 minutes for large flake oats or until most of liquid is absorbed, stirring occasionally. Let stand until desired consistency. Spoon oatmeal into four cereal bowls. Top each serving with 1/4 cup yogurt, 1 tablespoon walnuts and, if desired, additional cranberries."]
  },

  {
    title:["Warm Pralines 'n Cream Muffins"],
    data:["Ingredients:                                                         - 1/2 cup firmly packed brown sugar                                              - 1/3 cup (5-1/3 tablespoons) stick margarine or butter, softened                  One 3-ounce package cream cheese, softened                                      - 2/3 cup milk                                                                   - 1 egg                                                                          - 1 teaspoon maple or vanilla extract                                           - 1 cup Large Flake Quaker® Oats or Quick Quaker® Oats (uncooked)                   - 1/2 cup all-purpose flour                                                     - 1/3 cup whole wheat flour                                                      - 1  tablespoon baking powder                                                    - 1/2 teaspoon salt                                                             - 3/4 cup chopped pecans, divided", "Preperation:                             Heat oven to 400°F. Line 12 medium muffin cups with paper baking cups. In medium bowl, combine oats, flours, baking powder and 1/2 cup pecans; mix well. In medium bowl, beat sugar, margarine and cream cheese until creamy. Add milk, egg and maple extract; mix well. Add to dry ingredients; stir just until dry ingredients are moistened. (Do not overmix) Fill muffin cups 3/4 full. Sprinkle with remaining 1/4 cup pecans. Bake 20 to 22 minutes or until golden brown. Cool muffins in pan on wire rack 5 minutes. Remove from pan."]
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

const BreakfastOptions = () => (
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

export default BreakfastOptions;