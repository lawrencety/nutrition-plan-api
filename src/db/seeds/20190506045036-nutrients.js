'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Nutrients', [
      {nutrient_id: 255, name: "Water", unit: "g"},
      {nutrient_id: 208, name: "Energy", unit: "kCal"},
      {nutrient_id: 268, name: "Energy", unit: "J"},
      {nutrient_id: 203, name: "Protein", unit: "g"},
      {nutrient_id: 204, name: "Total lipid (fat)", unit: "g"},
      {nutrient_id: 207, name: "Ash", unit: "g"},
      {nutrient_id: 206, name: "Carbohydrate, by difference", unit: "g"},
      {nutrient_id: 291, name: "Fiber, total dietary", unit: "g"},
      {nutrient_id: 295, name: "Fiber, soluble", unit: "g"},
      {nutrient_id: 297, name: "Fiber, insoluble", unit: "g"},
      {nutrient_id: 269, name: "Sugars, total", unit: "g"},
      {nutrient_id: 539, name: "Sugars, added", unit: "g"},
      {nutrient_id: 210, name: "Sucrose", unit: "g"},
      {nutrient_id: 211, name: "Glucose, dextrose", unit: "g"},
      {nutrient_id: 212, name: "Fructose", unit: "g"},
      {nutrient_id: 213, name: "Lactose", unit: "g"},
      {nutrient_id: 214, name: "Maltose", unit: "g"},
      {nutrient_id: 287, name: "Galactose", unit: "g"},
      {nutrient_id: 299, name: "Sugar alcohols, total", unit: "g"},
      {nutrient_id: 209, name: "Starch", unit: "g"},
      {nutrient_id: 301, name: "Calcium, Ca", unit: "g"},
      {nutrient_id: 303, name: "Iron, Fe", unit: "mg"},
      {nutrient_id: 304, name: "Magnesium, Mg", unit: "mg"},
      {nutrient_id: 305, name: "Phosphorus, P", unit: "mg"},
      {nutrient_id: 306, name: "Potassium, K", unit: "mg"},
      {nutrient_id: 307, name: "Sodium, Na", unit: "mg"},
      {nutrient_id: 309, name: "Zinc, Zn", unit: "mg"},
      {nutrient_id: 312, name: "Copper, Cu", unit: "mg"},
      {nutrient_id: 315, name: "Manganese, Mn", unit: "mg"},
      {nutrient_id: 317, name: "Selenium, Se", unit: "µg"},
      {nutrient_id: 313, name: "Fluoride, F", unit: "µg"},
      {nutrient_id: 314, name: "Iodine, I", unit: "IU"},
      {nutrient_id: 401, name: "Vitamin C, total ascorbic acid", unit: "mg"},
      {nutrient_id: 404, name: "Thiamin", unit: "mg"},
      {nutrient_id: 405, name: "Riboflavin", unit: "mg"},
      {nutrient_id: 406, name: "Niacin", unit: "mg"},
      {nutrient_id: 410, name: "Pantothenic acid", unit: "mg"},
      {nutrient_id: 415, name: "Vitamin B-6", unit: "mg"},
      {nutrient_id: 417, name: "Folate, total", unit: "µg"},
      {nutrient_id: 431, name: "Folic acid", unit: "µg"},
      {nutrient_id: 432, name: "Folate, food", unit: "µg"},
      {nutrient_id: 435, name: "Folate, DFE", unit: "µg"},
      {nutrient_id: 421, name: "Choline, total", unit: "mg"},
      {nutrient_id: 454, name: "Betaine", unit: "mg"},
      {nutrient_id: 418, name: "Vitamin B-12", unit: "µg"},
      {nutrient_id: 578, name: "Vitamin B-12, added", unit: "µg"},
      {nutrient_id: 416, name: "Biotin", unit: "IU"},
      {nutrient_id: 320, name: "Vitamin A, RAE", unit: "µg"},
      {nutrient_id: 319, name: "Retinol", unit: "µg"},
      {nutrient_id: 321, name: "Carotene, beta", unit: "µg"},
      {nutrient_id: 322, name: "Carotene, alpha", unit: "µg"},
      {nutrient_id: 334, name: "Cryptoxanthin, beta", unit: "µg"},
      {nutrient_id: 318, name: "Vitamin A, IU", unit: "IU"},
      {nutrient_id: 337, name: "Lycopene", unit: "µg"},
      {nutrient_id: 338, name: "Lutein + zeaxanthin", unit: "µg"},
      {nutrient_id: 323, name: "Vitamin E, (alpha-tocopherol)", unit: "mg"},
      {nutrient_id: 573, name: "Vitamin E, added", unit: "mg"},
      {nutrient_id: 341, name: "Tocopherol, beta", unit: "mg"},
      {nutrient_id: 342, name: "Tocopherol, gamma", unit: "mg"},
      {nutrient_id: 343, name: "Tocopherol, delta", unit: "mg"},
      {nutrient_id: 344, name: "Tocotrienol, alpha", unit: "mg"},
      {nutrient_id: 345, name: "Tocotrienol, beta", unit: "mg"},
      {nutrient_id: 346, name: "Tocotrienol, gamma", unit: "mg"},
      {nutrient_id: 347, name: "Tocotrienol, delta", unit: "mg"},
      {nutrient_id: 328, name: "Vitamin D (D2 + D3)", unit: "µg"},
      {nutrient_id: 325, name: "Vitamin D2 (ergocalciferol)", unit: "µg"},
      {nutrient_id: 326, name: "Vitamin D3 (cholecalciferol)", unit: "µg"},
      {nutrient_id: 324, name: "Vitamin D", unit: "IU"},
      {nutrient_id: 430, name: "Vitamin K (phylloquinone)", unit: "µg"},
      {nutrient_id: 429, name: "Dihydrophylloquinone", unit: "µg"},
      {nutrient_id: 428, name: "Menaquinone-4", unit: "µg"},
      {nutrient_id: 606, name: "Fatty acids, total saturated", unit: "g"},
      {nutrient_id: 607, name: "4:0", unit: "g"},
      {nutrient_id: 608, name: "6:0", unit: "g"},
      {nutrient_id: 609, name: "8:0", unit: "g"},
      {nutrient_id: 610, name: "10:0", unit: "g"},
      {nutrient_id: 611, name: "12:0", unit: "g"},
      {nutrient_id: 696, name: "13:0", unit: "g"},
      {nutrient_id: 612, name: "14:0", unit: "g"},
      {nutrient_id: 652, name: "15:0", unit: "g"},
      {nutrient_id: 613, name: "16:0", unit: "g"},
      {nutrient_id: 653, name: "17:0", unit: "g"},
      {nutrient_id: 614, name: "18:0", unit: "g"},
      {nutrient_id: 615, name: "20:0", unit: "g"},
      {nutrient_id: 624, name: "22:0", unit: "g"},
      {nutrient_id: 654, name: "24:0", unit: "g"},
      {nutrient_id: 645, name: "Fatty acids, total monounsaturated", unit: "g"},
      {nutrient_id: 625, name: "14:1", unit: "g"},
      {nutrient_id: 697, name: "15:1", unit: "g"},
      {nutrient_id: 626, name: "16:1 undifferentiated", unit: "g"},
      {nutrient_id: 673, name: "16:1 c", unit: "g"},
      {nutrient_id: 662, name: "16:1 t", unit: "g"},
      {nutrient_id: 687, name: "17:1", unit: "g"},
      {nutrient_id: 617, name: "18:1 undifferentiated", unit: "g"},
      {nutrient_id: 674, name: "18:1 c", unit: "g"},
      {nutrient_id: 663, name: "18:1 t", unit: "g"},
      {nutrient_id: 859, name: "18:1-11 t (18:1t n-7)", unit: "g"},
      {nutrient_id: 628, name: "20:1", unit: "g"},
      {nutrient_id: 630, name: "22:1 undifferentiated", unit: "g"},
      {nutrient_id: 676, name: "22:1 c", unit: "g"},
      {nutrient_id: 664, name: "22:1 t", unit: "g"},
      {nutrient_id: 671, name: "24:1", unit: "g"},
      {nutrient_id: 646, name: "Fatty acids, total polyunsaturated", unit: "g"},
      {nutrient_id: 618, name: "18:2 undifferentiated", unit: "g"},
      {nutrient_id: 675, name: "18:2 n-6 c,c", unit: "g"},
      {nutrient_id: 670, name: "18:2 CLAs", unit: "g"},
      {nutrient_id: 669, name: "18:2 t,t", unit: "g"},
      {nutrient_id: 666, name: "18:2 i", unit: "g"},
      {nutrient_id: 665, name: "18:2 t not further defined", unit: "g"},
      {nutrient_id: 619, name: "18:3 undifferentiated", unit: "g"},
      {nutrient_id: 851, name: "18:3 n-3 c,c,c (ALA)", unit: "g"},
      {nutrient_id: 685, name: "18:3 n-6 c,c,c", unit: "g"},
      {nutrient_id: 856, name: "18:3 i", unit: "g"},
      {nutrient_id: 627, name: "18:4", unit: "g"},
      {nutrient_id: 672, name: "20:2 n-6 c,c", unit: "g"},
      {nutrient_id: 689, name: "20:3 undifferentiated", unit: "g"},
      {nutrient_id: 852, name: "20:3 n-3", unit: "g"},
      {nutrient_id: 853, name: "20:3 n-6", unit: "g"},
      {nutrient_id: 620, name: "20:4 undifferentiated", unit: "g"},
      {nutrient_id: 855, name: "20:4 n-6", unit: "g"},
      {nutrient_id: 629, name: "20:5 n-3 (EPA)", unit: "g"},
      {nutrient_id: 857, name: "21:5", unit: "g"},
      {nutrient_id: 858, name: "22:4", unit: "g"},
      {nutrient_id: 631, name: "22:5 n-3 (DPA)", unit: "g"},
      {nutrient_id: 621, name: "22:6 n-3 (DHA)", unit: "g"},
      {nutrient_id: 605, name: "Fatty acids, total trans", unit: "g"},
      {nutrient_id: 693, name: "Fatty acids, total trans-monoenoic", unit: "g"},
      {nutrient_id: 695, name: "Fatty acids, total trans-polyenoic", unit: "g"},
      {nutrient_id: 601, name: "Cholesterol", unit: "mg"},
      {nutrient_id: 636, name: "Phytosterols", unit: "mg"},
      {nutrient_id: 638, name: "Stigmasterol", unit: "mg"},
      {nutrient_id: 639, name: "Campesterol", unit: "mg"},
      {nutrient_id: 641, name: "Beta-sitosterol", unit: "mg"},
      {nutrient_id: 501, name: "Tryptophan", unit: "g"},
      {nutrient_id: 502, name: "Threonine", unit: "g"},
      {nutrient_id: 503, name: "Isoleucine", unit: "g"},
      {nutrient_id: 504, name: "Leucine", unit: "g"},
      {nutrient_id: 505, name: "Lysine", unit: "g"},
      {nutrient_id: 506, name: "Methionine", unit: "g"},
      {nutrient_id: 507, name: "Cystine", unit: "g"},
      {nutrient_id: 508, name: "Phenylalanine", unit: "g"},
      {nutrient_id: 509, name: "Tyrosine", unit: "g"},
      {nutrient_id: 510, name: "Valine", unit: "g"},
      {nutrient_id: 511, name: "Arginine", unit: "g"},
      {nutrient_id: 512, name: "Histidine", unit: "g"},
      {nutrient_id: 513, name: "Alanine", unit: "g"},
      {nutrient_id: 514, name: "Aspartic acid", unit: "g"},
      {nutrient_id: 515, name: "Glutamic acid", unit: "g"},
      {nutrient_id: 516, name: "Glycine", unit: "g"},
      {nutrient_id: 517, name: "Proline", unit: "g"},
      {nutrient_id: 518, name: "Serine", unit: "g"},
      {nutrient_id: 521, name: "Hydroxyproline", unit: "g"},
      {nutrient_id: 221, name: "Alcohol, ethyl", unit: "g"},
      {nutrient_id: 262, name: "Caffeine", unit: "mg"},
      {nutrient_id: 263, name: "Theobromine", unit: "mg"},
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

/*
value="255" Water (g)
value="208" Energy (kcal)
value="268" Energy (kJ)
value="203" Protein (g)
value="204" Total lipid (fat) (g)
value="207" Ash (g)
value="205" Carbohydrate, by difference (g)
value="291" Fiber, total dietary (g)
value="295" Fiber, soluble (g)
value="297" Fiber, insoluble (g)
value="269" Sugars, total (g)
value="539" Sugars, added (g)
value="210" Sucrose (g)
value="211" Glucose (dextrose) (g)
value="212" Fructose (g)
value="213" Lactose (g)
value="214" Maltose (g)
value="287" Galactose (g)
value="299" Sugar alcohols, total (g)
value="209" Starch (g)
value="301" Calcium, Ca (mg)
value="303" Iron, Fe (mg)
value="304" Magnesium, Mg (mg)
value="305" Phosphorus, P (mg)
value="306" Potassium, K (mg)
value="307" Sodium, Na (mg)
value="309" Zinc, Zn (mg)
value="312" Copper, Cu (mg)
value="315" Manganese, Mn (mg)
value="317" Selenium, Se (µg)
value="313" Fluoride, F (µg)
value="314" Iodine,I (IU)
value="401" Vitamin C, total ascorbic acid (mg)
value="404" Thiamin (mg)
value="405" Riboflavin (mg)
value="406" Niacin (mg)
value="410" Pantothenic acid (mg)
value="415" Vitamin B-6 (mg)
value="417" Folate, total (µg)
value="431" Folic acid (µg)
value="432" Folate, food (µg)
value="435" Folate, DFE (µg)
value="421" Choline, total (mg)
value="454" Betaine (mg)
value="418" Vitamin B-12 (µg)
value="578" Vitamin B-12, added (µg)
value="416" Biotin (IU)
value="320" Vitamin A, RAE (µg)
value="319" Retinol (µg)
value="321" Carotene, beta (µg)
value="322" Carotene, alpha (µg)
value="334" Cryptoxanthin, beta (µg)
value="318" Vitamin A, IU (IU)
value="337" Lycopene (µg)
value="338" Lutein + zeaxanthin (µg)
value="323" Vitamin E (alpha-tocopherol) (mg)
value="573" Vitamin E, added (mg)
value="341" Tocopherol, beta (mg)
value="342" Tocopherol, gamma (mg)
value="343" Tocopherol, delta (mg)
value="344" Tocotrienol, alpha (mg)
value="345" Tocotrienol, beta (mg)
value="346" Tocotrienol, gamma (mg)
value="347" Tocotrienol, delta (mg)
value="328" Vitamin D (D2 + D3) (µg)
value="325" Vitamin D2 (ergocalciferol) (µg)
value="326" Vitamin D3 (cholecalciferol) (µg)
value="324" Vitamin D (IU)
value="430" Vitamin K (phylloquinone) (µg)
value="429" Dihydrophylloquinone (µg)
value="428" Menaquinone-4 (µg)
value="606" Fatty acids, total saturated (g)
value="607" 4:0 (g)
value="608" 6:0 (g)
value="609" 8:0 (g)
value="610" 10:0 (g)
value="611" 12:0 (g)
value="696" 13:0 (g)
value="612" 14:0 (g)
value="652" 15:0 (g)
value="613" 16:0 (g)
value="653" 17:0 (g)
value="614" 18:0 (g)
value="615" 20:0 (g)
value="624" 22:0 (g)
value="654" 24:0 (g)
value="645" Fatty acids, total monounsaturated (g)
value="625" 14:1 (g)
value="697" 15:1 (g)
value="626" 16:1 undifferentiated (g)
value="673" 16:1 c (g)
value="662" 16:1 t (g)
value="687" 17:1 (g)
value="617" 18:1 undifferentiated (g)
value="674" 18:1 c (g)
value="663" 18:1 t (g)
value="859" 18:1-11 t (18:1t n-7) (g)
value="628" 20:1 (g)
value="630" 22:1 undifferentiated (g)
value="676" 22:1 c (g)
value="664" 22:1 t (g)
value="671" 24:1 c (g)
value="646" Fatty acids, total polyunsaturated (g)
value="618" 18:2 undifferentiated (g)
value="675" 18:2 n-6 c,c (g)
value="670" 18:2 CLAs (g)
value="669" 18:2 t,t (g)
value="666" 18:2 i (g)
value="665" 18:2 t not further defined (g)
value="619" 18:3 undifferentiated (g)
value="851" 18:3 n-3 c,c,c (ALA) (g)
value="685" 18:3 n-6 c,c,c (g)
value="856" 18:3i (g)
value="627" 18:4 (g)
value="672" 20:2 n-6 c,c (g)
value="689" 20:3 undifferentiated (g)
value="852" 20:3 n-3 (g)
value="853" 20:3 n-6 (g)
value="620" 20:4 undifferentiated (g)
value="855" 20:4 n-6 (g)
value="629" 20:5 n-3 (EPA) (g)
value="857" 21:5 (g)
value="858" 22:4 (g)
value="631" 22:5 n-3 (DPA) (g)
value="621" 22:6 n-3 (DHA) (g)
value="605" Fatty acids, total trans (g)
value="693" Fatty acids, total trans-monoenoic (g)
value="695" Fatty acids, total trans-polyenoic (g)
value="601" Cholesterol (mg)
value="636" Phytosterols (mg)
value="638" Stigmasterol (mg)
value="639" Campesterol (mg)
value="641" Beta-sitosterol (mg)
value="501" Tryptophan (g)
value="502" Threonine (g)
value="503" Isoleucine (g)
value="504" Leucine (g)
value="505" Lysine (g)
value="506" Methionine (g)
value="507" Cystine (g)
value="508" Phenylalanine (g)
value="509" Tyrosine (g)
value="510" Valine (g)
value="511" Arginine (g)
value="512" Histidine (g)
value="513" Alanine (g)
value="514" Aspartic acid (g)
value="515" Glutamic acid (g)
value="516" Glycine (g)
value="517" Proline (g)
value="518" Serine (g)
value="521" Hydroxyproline (g)
value="221" Alcohol, ethyl (g)
value="262" Caffeine (mg)
value="263" Theobromine (mg)
*/
