import * as React from 'react';
import { Button, View, Text,TouchableOpacity, StatusBar, StyleSheet, SafeAreaView, SectionList } from 'react-native';

const DATA = [
  {
    title:["Double-Chocolate Pudding"],
    data:["Ingredients:                                                         - 2 1/4 cups whole milk                                                          - 1/2 cup sugar                                                                  - Pinch of salt                                                                 - 2 tablespoons cornstarch                                                      - 3 tablespoons unsweetened cocoa powder                                         - 1 large egg                                                                    - 2 large egg yolks                                                              - 5 ounces semisweet or bittersweet chocolate, finely chopped                            - 2 tablespoons unsalted butter, cut into pieces                                - 1 teaspoon vanilla extract                                                     - Lightly whipped cream, for serving", "Preperation:                           In a medium saucepan, combine 2 cups of the milk with 1/4 cup of the sugar and the salt and bring to a boil over moderate heat, stirring to dissolve the sugar. Remove from the heat.                                                                                                                                             In a medium bowl, whisk the cornstarch with the unsweetened cocoa powder and the remaining 1/4 cup of sugar until blended. Add the remaining 1/4 cup of milk and whisk until smooth. Whisk this mixture into the hot milk in the saucepan and bring to a boil over moderate heat, whisking constantly. Reduce the heat to moderately low and simmer, whisking constantly, until the pudding is thick enough to coat the back of a spoon, about 2 minutes.                                                                                                              In a medium bowl, whisk the whole egg with the egg yolks. Gradually whisk about 1 cup of the hot cocoa pudding into the eggs until thoroughly incorporated, then scrape the pudding back into the saucepan. Cook the pudding over moderate heat, whisking constantly, until it just comes to boil, about 2 minutes.                                                                                                Strain the pudding into a medium heatproof bowl. Add the chopped chocolate, butter and vanilla and whisk until the chocolate and butter are melted and incorporated and the pudding is smooth, about 2 minutes. Transfer the pudding to six 6-ounce ramekins and refrigerate until chilled. (If you're not in a hurry, press a piece of plastic wrap directly onto the surface of the pudding in the bowl and refrigerate.) Serve with lightly whipped cream."]
  },

  {
    title:["Molten Peppermint-Chocolate Cakes"],
    data:["Ingredients:                                                         - 1/2 cup butter, cubed                                                         - 4 ounces bittersweet chocolate, chopped                                        - 2 eggs                                                                         - 2 egg yolks                                                                   - 1/3 cup sugar                                                                 - 1/2 teaspoon peppermint extract                                               - 1/8 teaspoon salt                                                             - 1/4 cup all-purpose flour                                                      - Confectioners' sugar", "Preperation:                                         Preheat oven to 425°. In a small heavy saucepan, heat butter and chocolate over low heat until blended, stirring constantly; transfer to a large bowl. Add eggs, egg yolks, sugar, extract and salt to chocolate mixture; mix well. Stir in flour. Pour into four greased 6-oz. custard cups or ramekins. Place custard cups on a baking sheet. Bake 10-12 minutes or until a thermometer reads 160° and edges of cakes are set. Remove from oven; let stand 1 minute. Run a knife around sides of cakes; remove to dessert plates. Dust with confectioners' sugar. Serve immediately."]
  },

  {
    title:["Pot of S’mores"],
    data:["Ingredients:                                                         - 1 package (14-1/2 ounces) graham crackers, crushed                            - 1/2 cup butter, melted                                                        - 1 can (14 ounces) sweetened condensed milk                                    - 2 cups semisweet chocolate chips                                              - 1 cup butterscotch chips                                                      - 2 cups miniature marshmallows", "Preperation:                             Prepare grill or campfire for low heat, using 16-18 charcoal briquettes or large wood chips. Line a cast-iron Dutch oven with heavy-duty aluminum foil. Combine cracker crumbs and butter; press into bottom of pan. Pour milk over crust and sprinkle with chocolate and butterscotch chips. Top with marshmallows. Cover Dutch oven. When briquettes or wood chips are covered with white ash, place Dutch oven directly on top of 6 of them. Using long-handled tongs, place remaining briquettes on pan cover. Cook until marshmallows begin to melt, about 15 minutes. To check for doneness, use the tongs to carefully lift the cover."]
  },

  {
    title:["Drinks"],
    data:["- Smoothie                                                                      - Milk                                                                          - Tea                                                                           - Coffee"]
  }

];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SnackOptions = () => (
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
 
 export default SnackOptions