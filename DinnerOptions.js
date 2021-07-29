
import * as React from 'react';
import { Button, View, Text,TouchableOpacity, StatusBar, StyleSheet, SafeAreaView, SectionList } from 'react-native';

const DATA = [
  {
    title:["Barbecued Burritos"],
    data:["Ingredients:                                                         -1 lb (500 g) boneless beef top round steak (about 1 inch/2.5 cm thick)                             - 2/3 cup (150 mL) spicy eight vegetable juice                                   - 2 tbsp (30 mL) lime juice                                                      - 1 tbsp (15 mL) vegetable oil                                                  - 1/4 tsp (1 mL) salt                                                           - 1 medium orange, peeled, chopped                                              - 1/2 cup (125 mL) chopped peeled jicama                                        - 1/4 cup (50 mL) chopped tomatillos                                            - 1/4 cup (50 mL) chopped red onion                                              - 2 tbsp (30 mL) chopped fresh cilantro or parsley                               - 1 tbsp (15 mL) lime juice                                                     - 1 tsp (5 mL) honey                                                            - 1/4 tsp (1 mL) salt                                                           - 1 small serrano chile, seeded, finely chopped (1 tbsp/15 mL)                                          - 1 pkg (8 count) Old El Paso™ Large Soft Flour Tortillas", "Preperation:                                               With fork, pierce beef several times on both sides. In shallow nonmetal dish or resealable food-storage plastic bag, mix all remaining beef ingredients. Add beef; turn to coat with marinade. Cover dish or seal bag; refrigerate, turning beef occasionally, at least 8 hours but no longer than 24 hours.                In small nonmetal bowl, mix all salsa ingredients until blended. Cover; refrigerate at least 2 hours to blend flavors.                                Brush grill rack with vegetable oil. Heat coals or gas grill for direct heat. Wrap tortillas in heavy-duty foil.                                          Remove beef from marinade; discard marinade. Place beef on grill rack. Cover and grill beef over medium heat 25 to 30 minutes for medium doneness, turning once. Add packet of tortillas for last 5 minutes of grilling, turning occasionally, until warm.                                                                    Cut beef across grain into thin slices. Place beef, cheese, onion, tomato and avocado on center of each tortilla. Fold one end of tortilla up about 1 inch over filling; fold right and left sides over folded end, overlapping. Fold remaining end down. Brush burritos with barbecue sauce.                          Grill burritos uncovered over medium heat 5 minutes, turning once, until hot. Serve burritos with salsa."]
  },

  {
    title:["Prime Rib with Red Wine and Shallots"],
    data:["Ingredients:                                                         - 1 3-bone prime rib roast, room temperature                                    - 6 cloves garlic, smashed                                                       - 2 shallot, finely diced                                                        - 2 tsp chopped fresh thyme leaves                                              - 2 1/2 cups Campbell's 30% Less Sodium Beef Broth with Red Wine                 - 2 tbsp cornstarch", "Preperation:                                        Pre-heat oven to 475°F (240°C). Pat roast dry with paper towel. Place in high-sided roasting pan bone side down. Brown roast in oven for 15 minutes. Reduce temperature to 325°F (160°C) and roast for 11 to 12 min/ lb (25 to 27 minutes/kg) for medium-rare. Use a meat thermometer to check doneness. For medium-rare, aim for an internal temperature of 130° to 140°F(54° to 60°C). Place roast on a cutting board and tent with foil. Meanwhile, pour off excess fat from pan. Place pan over medium-high heat. Add garlic and shallots and sauté for 2 minutes. Add thyme and ½ cup (125 mL) of broth scraping to deglaze the pan. Cook until most of the broth has evaporated. In a small bowl, dissolve cornstarch with 2 tbsp. (30 mL) of broth; set aside. Add remaining broth to pan, simmer until reduced by half. Gradually stir in cornstarch mixture into broth and simmer until sauce coats the back of a spoon. Slice roast and serve with jus. "]
  },

  {
    title:["Monterey Chicken Fajitas"],
    data:["Ingredients:                                                         - 2 tbsp vegetable oil                                                          - 1.6 lb boneless, skinless chicken breast, cut into strips                         - 1 small green pepper, cut into strips                                       - 1 small red bell pepper, cut into strips                                       - 1 medium onion, sliced                                                         - 1 tbsp Tex-Mex seasoning blend                                                - 1 can (284 mL) CAMPBELL’S® Condensed Low Fat Cream of Celery Soup              - 1 cup Pace® Chunky Medium Salsa                                                - 1 cup corn, whole kernel                                                      - 6 flour tortillas (6-inch/15 cm)                                              - 1 cup Monterey Jack cheese, shredded                                          - Lime wedges", "Preperation:                                                 Heat oil in a large nonstick skillet set over medium-high heat. Cook chicken for 5 minutes or until lightly browned. Add green pepper, red pepper, onion and Tex-Mex seasoning. Cook,stirring often,for 7 to 10 minutes or until vegetables are tender-crisp and chicken is cooked through. Add soup and 1/2 cup (125 mL) salsa; bring to a simmer. Stir in corn. Cook for 2 to 3 minutes or until heated through. Spoon about 1/2 cup (125 mL) chicken mixture down the center of each tortilla. Top with cheese and additional salsa. Fold tortilla around filling. Serve with lime wedges."]
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

const DinnerOptions = () => (
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
 
 export default DinnerOptions