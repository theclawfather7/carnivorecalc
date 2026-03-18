import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type FoodPage = {
  name: string
  emoji: string
  title: string
  description: string
  keywords: string[]
  intro: string
  macrosPer100g: { protein: number; fat: number; carbs: number; calories: number }
  macrosPerServing: { serving: string; protein: number; fat: number; carbs: number; calories: number }
  carnivoreScore: number // 1-10
  carnivoreRating: string
  benefits: { icon: string; title: string; body: string }[]
  howMuch: string
  bestFor: string[]
  concerns: string | null
  pairsWith: string[]
  buyingTips: string
  cookingTips: string
  faq: { q: string; a: string }[]
}

const foods: Record<string, FoodPage> = {
  'ribeye-steak': {
    name: 'Ribeye Steak',
    emoji: '🥩',
    title: 'Ribeye Steak on the Carnivore Diet — Macros, Benefits & How Much to Eat',
    description: 'Ribeye steak is considered the #1 carnivore diet food. Complete guide to ribeye macros, benefits, how much to eat daily, and cooking tips for the carnivore diet.',
    keywords: ['ribeye steak carnivore diet', 'ribeye macros carnivore', 'how much ribeye carnivore diet', 'ribeye steak nutrition carnivore', 'best steak carnivore diet'],
    intro: 'Ribeye steak is widely considered the perfect carnivore diet food — a near-ideal ratio of protein and fat, extremely nutrient-dense, and deeply satisfying. Most carnivore diet veterans eat ribeye as their primary food, often multiple times per day. If you only eat one thing on the carnivore diet, make it ribeye.',
    macrosPer100g: { protein: 26, fat: 22, carbs: 0, calories: 305 },
    macrosPerServing: { serving: '8 oz (227g) cooked', protein: 59, fat: 50, carbs: 0, calories: 693 },
    carnivoreScore: 10,
    carnivoreRating: 'Perfect — the gold standard carnivore food',
    benefits: [
      { icon: '💪', title: 'Complete amino acid profile', body: 'Ribeye contains all 9 essential amino acids in ideal ratios for human muscle synthesis and repair. The protein bioavailability of beef rivals or exceeds any other food source.' },
      { icon: '🧠', title: 'High in B12, zinc, and selenium', body: 'A single ribeye provides more than 100% of your daily B12 needs, significant zinc for immune function, and selenium for thyroid health — all in highly bioavailable animal form.' },
      { icon: '⚡', title: 'Fat as stable fuel', body: 'The marbled fat in ribeye is primarily oleic acid (same as olive oil) and saturated fat — both excellent long-burning fuel sources. Ribeye keeps you satiated for 5–8 hours with no blood sugar spikes.' },
      { icon: '🔴', title: 'High bioavailable iron', body: 'Ribeye is an excellent source of heme iron — the form of iron most efficiently absorbed by humans (15–35% absorption vs. 2–20% for plant iron). Critical for energy, oxygen transport, and immune function.' },
    ],
    howMuch: 'Most carnivore dieters eat 1–2 ribeye steaks (6–12 oz cooked) per meal, 1–3 meals per day. A common starting point is 1 lb (454g) of ribeye per day total. Adjust based on hunger — carnivore diet works best eating to satiety, not counting calories.',
    bestFor: ['Weight loss (high satiety, zero carbs)', 'Muscle building (high complete protein)', 'Lion diet (beef + salt + water protocol)', 'Beginners (easiest carnivore transition food)', 'Long-term sustainability (most people never tire of ribeye)'],
    concerns: null,
    pairsWith: ['Eggs (for breakfast, adds variety)', 'Butter (additional fat, flavor)', 'Beef tallow (cooking fat)', 'Beef liver (1x/week for micronutrients)'],
    buyingTips: 'Buy USDA Prime or Choice grade if budget allows — Prime has more marbling and better fat-to-protein ratio. 1.5 inch thickness is ideal for cast iron. Costco and Sam\'s Club offer excellent ribeyes at significant discount vs. supermarket. Grass-finished has slightly better omega-3 profile but conventional grain-fed ribeye is still excellent.',
    cookingTips: 'Reverse sear is the best method: oven at 250°F until internal temp 125°F, then cast iron sear 2 min per side with butter. Alternatively: cast iron high heat, 3-4 min per side for medium-rare. Salt generously (sodium needs increase on carnivore). Rest 5 minutes before cutting.',
    faq: [
      { q: 'Is ribeye the best steak for carnivore diet?', a: 'Yes, according to most experienced carnivore dieters. The fat-to-protein ratio in ribeye (~45% fat calories, 55% protein calories) is ideal for the carnivore diet. Paul Saladino, Shawn Baker, and most carnivore doctors recommend ribeye as the primary food.' },
      { q: 'How many ribeyes can I eat per day on carnivore?', a: 'Eat to satiety. Most carnivore dieters eat 1–2 ribeyes (6–16 oz cooked) per day across 1–2 meals. There is no established upper limit. If you\'re hungry, eat more. The carnivore diet is not a calorie restriction diet.' },
      { q: 'Is the fat in ribeye bad for your heart?', a: 'The scientific literature on saturated fat and heart disease is far less settled than popular media suggests. The PURE study (2017, 135,000 people) found saturated fat was associated with lower cardiovascular mortality. Most carnivore practitioners experience improved lipid markers (lower triglycerides, higher HDL) when eating primarily ribeye.' },
      { q: 'What is the difference between ribeye and New York strip on carnivore?', a: 'Ribeye has significantly more fat (marbling) than NY strip, making it higher calorie and more satiating per gram. NY strip is leaner, higher in protein per calorie, and better for people who want more protein relative to fat. Both are excellent carnivore foods.' },
    ],
  },

  'eggs': {
    name: 'Eggs',
    emoji: '🥚',
    title: 'Eggs on the Carnivore Diet — Macros, How Many to Eat & Benefits',
    description: 'Complete guide to eating eggs on the carnivore diet. Macros per egg, how many eggs per day, whole eggs vs. yolks only, and whether eggs are allowed on strict carnivore.',
    keywords: ['eggs carnivore diet', 'how many eggs carnivore diet', 'eggs allowed on carnivore', 'egg macros carnivore', 'carnivore diet eggs per day'],
    intro: 'Eggs are one of the most versatile and nutritious carnivore diet foods. A single egg contains all the nutrients needed to build a complete living organism — making it arguably the most nutrient-dense food per calorie. Most carnivore dieters eat eggs daily, either as a meal in themselves or alongside meat.',
    macrosPer100g: { protein: 13, fat: 10, carbs: 1, calories: 143 },
    macrosPerServing: { serving: '3 whole large eggs', protein: 18, fat: 15, carbs: 1, calories: 210 },
    carnivoreScore: 9,
    carnivoreRating: 'Excellent — allowed on all carnivore variations',
    benefits: [
      { icon: '🧠', title: 'Choline powerhouse for brain health', body: 'Egg yolks are the richest dietary source of choline — an essential nutrient for brain development, memory, and nerve function. Two egg yolks provide almost your entire daily choline requirement.' },
      { icon: '💪', title: 'Complete protein with all essential amino acids', body: 'Eggs have a Protein Digestibility Corrected Amino Acid Score (PDCAAS) of 1.0 — the maximum score. They are the reference protein against which all other proteins are measured.' },
      { icon: '👁️', title: 'Lutein and zeaxanthin for eye health', body: 'Egg yolks contain high concentrations of lutein and zeaxanthin — antioxidants that accumulate in the retina and reduce risk of macular degeneration and cataracts.' },
      { icon: '🔴', title: 'Vitamin K2 in pastured egg yolks', body: 'Pastured eggs (from chickens with outdoor access) contain K2 MK-4 — the animal form of Vitamin K2 critical for calcium metabolism and cardiovascular health. Conventional eggs have much less.' },
    ],
    howMuch: 'Most carnivore dieters eat 3–6 eggs per day, often as breakfast or as a supplement to meat meals. Some eat 12+ eggs per day (especially athletes or people with limited meat access). There is no established upper limit for healthy people. Eat to satiety.',
    bestFor: ['Budget-conscious carnivore (eggs are cheap per gram of protein)', 'Breakfast (fast to cook, highly satiating)', 'Adding variety to a primarily beef diet', 'Pregnant women (choline is critical in pregnancy)', 'Athletes (convenient high-quality protein)'],
    concerns: 'Some carnivore practitioners recommend limiting eggs to 3–4/day initially due to potential egg white sensitivity in some people (egg whites contain protease inhibitors). If you experience digestive issues, try yolks only for a week to test. Most people have no issues with whole eggs.',
    pairsWith: ['Bacon (classic carnivore breakfast)', 'Butter (scrambled in butter is the best)', 'Beef (ground beef and eggs is a common carnivore meal)', 'Salmon (eggs + smoked salmon for variety)'],
    buyingTips: 'Pastured eggs (Vital Farms, local farm eggs) have significantly better nutritional profiles — more K2, omega-3s, and fat-soluble vitamins. Budget option: Costco cage-free eggs are solid value. Avoid liquid egg substitutes — the yolk is the most nutritious part.',
    cookingTips: 'Scrambled in butter over low heat for maximum tenderness. Fried in beef tallow or butter. Soft boiled (6 min) for a runnier yolk that retains more heat-sensitive nutrients. Raw egg yolks (with meat) is an option some carnivore practitioners use for maximum nutrition preservation.',
    faq: [
      { q: 'Are eggs allowed on the carnivore diet?', a: 'Yes — eggs are universally allowed on all versions of the carnivore diet, including strict carnivore and the lion diet (which is the most restrictive). Eggs are one of the most recommended carnivore foods.' },
      { q: 'Should I eat whole eggs or just yolks on carnivore?', a: 'Whole eggs are fine for most people. The yolk is the more nutritious part (choline, K2, fat-soluble vitamins) while the white is primarily protein. Some sensitive individuals do better with yolks only initially. For most people, whole eggs are optimal.' },
      { q: 'How many eggs per day is too many on carnivore?', a: 'There is no established upper limit for healthy individuals. Studies show healthy people can eat 3+ eggs per day without adverse effects on cholesterol or cardiovascular risk. Many carnivore practitioners eat 6–12 eggs per day without issue. Listen to your body.' },
      { q: 'Do eggs raise cholesterol on carnivore diet?', a: 'Eggs do raise LDL-C in some people ("hyper-responders"). However, they typically raise large buoyant LDL (less atherogenic) and also raise HDL significantly. Most carnivore practitioners focus on the total LDL/HDL ratio and triglycerides rather than total cholesterol. Consult your doctor if concerned.' },
    ],
  },

  'bacon': {
    name: 'Bacon',
    emoji: '🥓',
    title: 'Bacon on the Carnivore Diet — Macros, Best Brands & How Much to Eat',
    description: 'Is bacon good for carnivore diet? Complete guide to bacon macros, whether bacon is allowed on strict carnivore, best brands to buy, and how much to eat.',
    keywords: ['bacon carnivore diet', 'is bacon allowed on carnivore diet', 'bacon macros carnivore', 'best bacon carnivore diet', 'bacon carnivore diet daily'],
    intro: 'Bacon is one of the most popular carnivore diet foods — it\'s delicious, extremely satiating, and provides a good combination of protein and fat. The main carnivore diet consideration with bacon is the ingredient list: most commercial bacon contains added sugar, dextrose, or other curing ingredients. Choose bacon with the cleanest ingredients.',
    macrosPer100g: { protein: 37, fat: 42, carbs: 1, calories: 541 },
    macrosPerServing: { serving: '3 slices (34g)', protein: 12, fat: 15, carbs: 0.5, calories: 185 },
    carnivoreScore: 8,
    carnivoreRating: 'Very Good — choose sugar-free varieties for strictest carnivore',
    benefits: [
      { icon: '🧂', title: 'Excellent sodium source', body: 'Sodium needs increase significantly on the carnivore diet (no carbohydrates = lower insulin = more sodium excretion). Bacon naturally provides significant sodium, helping maintain electrolyte balance without supplementation.' },
      { icon: '💪', title: 'High protein per calorie', body: 'Cooked bacon is extremely protein-dense — up to 37g protein per 100g. The rendering process removes water and some fat, concentrating both protein and remaining fat. A few strips of bacon provide substantial protein.' },
      { icon: '⚡', title: 'Fat for sustained energy', body: 'Bacon\'s fat content (primarily monounsaturated and saturated) provides the energy substrate for ketosis on carnivore. The combination of fat and salt makes bacon highly satisfying and reduces hunger.' },
      { icon: '🐷', title: 'Rich in B vitamins', body: 'Pork (and bacon) is among the richest sources of thiamine (B1), niacin (B3), and B6. These B vitamins are essential for energy metabolism, nerve function, and red blood cell formation.' },
    ],
    howMuch: 'Bacon is best used as a complement to other carnivore foods rather than a primary protein source. 3–6 strips with eggs is a common breakfast. Due to the curing process and high sodium, some people prefer not to make bacon their primary daily protein, instead using it to add flavor and fat to meals.',
    bestFor: ['Breakfast (bacon and eggs is the classic carnivore meal)', 'Adding fat to leaner meats', 'Carnivore snacking (easy to batch cook)', 'Electrolyte support (natural sodium)', 'Getting newcomers into carnivore (familiar and delicious)'],
    concerns: 'Most commercial bacon contains dextrose, brown sugar, or honey in the cure. While the carb content per serving remains very low (under 1g), strict carnivore practitioners prefer uncured or sugar-free varieties. Nitrates in cured bacon are debated — most evidence suggests dietary nitrates from bacon are not concerning for healthy adults.',
    pairsWith: ['Eggs (the classic combination)', 'Ground beef (wrap ground beef in bacon for fat boost)', 'Ribeye (bacon fat as cooking base)', 'Liver (bacon wrapping offsets liver\'s taste for beginners)'],
    buyingTips: 'Best options: Pederson\'s Natural Farms (no sugar added), Applegate Sunday Bacon (minimal ingredients), ButcherBox bacon (pasture-raised, sugar-free). Budget option: check ingredient labels at any grocery store and choose the one with the fewest non-meat ingredients. Uncured bacon has no added nitrates but naturally occurring nitrates from celery powder.',
    cookingTips: 'Oven method: 400°F for 15–20 min on a rack over a sheet pan — yields flat, evenly cooked bacon with easy cleanup. Cast iron: medium heat, start cold pan, render for 4–5 min per side. Save the bacon fat in a jar — it\'s excellent for cooking other carnivore foods.',
    faq: [
      { q: 'Is bacon allowed on the carnivore diet?', a: 'Yes — bacon is widely eaten on the carnivore diet. The main consideration is ingredient quality: choose bacon with minimal ingredients (pork belly, salt, and ideally no added sugar). Most commercial bacon has trace amounts of dextrose but the carb content remains near zero per serving.' },
      { q: 'Can I eat bacon every day on carnivore?', a: 'Yes, many carnivore dieters eat bacon daily. It\'s a matter of preference and food variety. Some practitioners eat it every breakfast; others use it less frequently. There\'s no established reason to limit bacon on carnivore for most healthy individuals.' },
      { q: 'Is turkey bacon allowed on carnivore?', a: 'Turkey bacon is technically allowed (it\'s animal-derived) but is considered inferior to pork bacon by most carnivore practitioners. Turkey bacon is leaner, often contains more additives, and lacks the fat profile that makes pork bacon so satisfying. Pork bacon is the default choice.' },
      { q: 'Does bacon have carbs on carnivore diet?', a: 'Most bacon has less than 0.5g of carbohydrates per serving despite the curing sugar, because the sugar is used in small quantities and partially metabolized during curing. Sugar-free or "no sugar added" bacon has essentially zero carbs per serving.' },
    ],
  },

  'ground-beef': {
    name: 'Ground Beef (80/20)',
    emoji: '🫕',
    title: 'Ground Beef on Carnivore Diet — 80/20 vs 90/10 Macros & How Much to Eat',
    description: 'Ground beef is the budget carnivore diet staple. Complete guide to 80/20 vs 90/10 ground beef macros, daily amounts, and why 80/20 is the carnivore diet choice.',
    keywords: ['ground beef carnivore diet', '80/20 ground beef carnivore', 'ground beef macros carnivore', 'how much ground beef carnivore diet', 'ground beef vs ribeye carnivore'],
    intro: 'Ground beef is the most accessible and budget-friendly carnivore diet staple. 80/20 ground beef (80% lean, 20% fat) is the standard carnivore choice — the fat ratio is closer to ribeye\'s profile than leaner grinds. Many carnivore practitioners eat 1–2 lbs of ground beef daily as their primary protein and fat source.',
    macrosPer100g: { protein: 19, fat: 23, carbs: 0, calories: 285 },
    macrosPerServing: { serving: '4 oz (113g) cooked', protein: 22, fat: 26, carbs: 0, calories: 322 },
    carnivoreScore: 9,
    carnivoreRating: 'Excellent — the budget carnivore staple',
    benefits: [
      { icon: '💰', title: 'Best value carnivore food', body: 'Ground beef costs 50–70% less per gram of protein than ribeye while providing nearly identical macros and most of the same micronutrients. For carnivore dieters on a budget, 80/20 ground beef is the foundation.' },
      { icon: '🧪', title: 'Same nutrients as whole beef cuts', body: 'Ground beef contains all the same amino acids, B vitamins, zinc, selenium, and creatine as any other beef cut. The grinding process doesn\'t diminish nutritional quality.' },
      { icon: '🍳', title: 'Infinitely versatile cooking', body: 'Ground beef can be formed into patties, loose-cooked "carnivore bowls," meatballs, or smash burgers (patty only). The preparation variety prevents boredom on the carnivore diet.' },
      { icon: '⚡', title: 'Creatine for energy and muscle', body: 'Beef is one of the richest natural sources of creatine (about 2g per lb). Carnivore dieters often report not needing creatine supplements because daily beef consumption provides meaningful amounts.' },
    ],
    howMuch: 'A common carnivore diet portion is 1/2–1 lb (225–450g) raw ground beef per meal, 1–2 meals per day. Total daily intake of 1–2 lbs raw (0.7–1.4 lbs cooked) is typical for most adults. Adjust based on hunger and goals — athletes and muscle-builders may eat more.',
    bestFor: ['Budget carnivore diet (lowest cost per gram of protein/fat)', 'Meal prep (batch cook 3–5 lbs at once)', 'Beginners (familiar preparation methods)', 'High-volume eating (1–2 lbs/day is easy to manage)', 'Lion diet (ground beef is an approved lion diet food)'],
    concerns: 'Choose 80/20 over leaner grinds (90/10, 95/5) for carnivore. Leaner grinds require adding fat back (butter, tallow) and may contribute to lean-meat sickness (too much protein relative to fat). If you can only find lean ground beef, add a tablespoon of butter while cooking.',
    pairsWith: ['Eggs (ground beef and eggs is a classic carnivore meal)', 'Butter (adds fat and flavor)', 'Bacon (cook ground beef in rendered bacon fat)', 'Beef liver (mix 20% liver into ground beef — nearly undetectable taste)'],
    buyingTips: 'Buy in bulk from Costco or a local butcher for best price. 80/20 is the standard carnivore grind. Some practitioners prefer 70/30 for higher fat intake. Fresh-ground from a butcher is preferable to pre-packaged if available. Grass-fed ground beef has a slightly better fatty acid profile but standard grain-fed is nutritionally excellent.',
    cookingTips: 'Smash burgers: high heat cast iron, smash thin, 2 min per side — excellent crust. Ground beef bowl: brown in cast iron, season with salt, eat directly. Meatballs: mix with eggs (optional on carnivore), bake at 400°F for 15 min. Always salt generously — sodium is critical on carnivore.',
    faq: [
      { q: 'Should I eat 80/20 or 90/10 ground beef on carnivore?', a: '80/20 is strongly preferred on carnivore diet. The carnivore diet works best with adequate fat intake — fat provides the primary energy substrate. 90/10 is too lean and often causes symptoms of "rabbit starvation" (excess protein, insufficient fat). If you must use lean beef, add butter or tallow.' },
      { q: 'Is ground beef as good as steak on carnivore?', a: 'Nutritionally very similar. Ribeye has more marbling (intramuscular fat) and some argue better micronutrient density from the variety of beef tissues, but the practical difference is small. Ground beef can include heart, liver, and other organs mixed in (ask your butcher) for enhanced micronutrients.' },
      { q: 'How much ground beef should I eat per day on carnivore?', a: 'Most carnivore practitioners eat 1–2 lbs raw ground beef per day (0.7–1.4 lbs cooked). Eat to satiety. Do not restrict portion size — the carnivore diet is not a calorie-counting diet. Your hunger signals will regulate intake naturally after 2–4 weeks of adaptation.' },
      { q: 'Can I eat ground beef every day on carnivore?', a: 'Yes — many carnivore dieters eat ground beef as their primary food daily for months or years. The nutritional completeness of beef makes daily consumption sustainable. Adding some variety (eggs, liver, salmon occasionally) is recommended for micronutrient breadth but is not required.' },
    ],
  },

  'salmon': {
    name: 'Salmon',
    emoji: '🐟',
    title: 'Salmon on the Carnivore Diet — Macros, Omega-3 Benefits & How Much to Eat',
    description: 'Salmon is one of the best carnivore diet seafoods. Complete guide to salmon macros, omega-3 content, wild vs. farmed, and how much salmon to eat on carnivore.',
    keywords: ['salmon carnivore diet', 'salmon macros carnivore', 'can you eat salmon on carnivore diet', 'wild salmon carnivore', 'salmon omega 3 carnivore diet'],
    intro: 'Salmon is one of the most nutritionally valuable foods on the carnivore diet. Its exceptional omega-3 fatty acid content (EPA and DHA) provides anti-inflammatory benefits that complement a primarily red-meat diet. Most carnivore practitioners eat salmon 2–4 times per week for optimal omega-3 to omega-6 balance.',
    macrosPer100g: { protein: 22, fat: 13, carbs: 0, calories: 206 },
    macrosPerServing: { serving: '6 oz (170g) cooked', protein: 37, fat: 22, carbs: 0, calories: 350 },
    carnivoreScore: 9,
    carnivoreRating: 'Excellent — best carnivore omega-3 source',
    benefits: [
      { icon: '🧠', title: 'Highest EPA/DHA omega-3 of any common food', body: 'A single 6 oz salmon fillet provides 3–4g of EPA+DHA omega-3 fatty acids — more than any other commonly eaten food. These omega-3s reduce inflammation, support brain health, and improve cardiovascular markers.' },
      { icon: '🩷', title: 'Astaxanthin — powerful antioxidant', body: 'Wild salmon\'s pink color comes from astaxanthin — an extremely potent antioxidant (6,000x more powerful than vitamin C in some assays). Farmed salmon often lacks this without supplementation.' },
      { icon: '🦴', title: 'Vitamin D3 in significant quantities', body: 'Salmon is one of the few dietary sources of vitamin D3 — providing 400–700 IU per serving. Vitamin D deficiency is common in carnivore dieters who avoid sun exposure. Regular salmon consumption meaningfully contributes to vitamin D status.' },
      { icon: '🔥', title: 'Balances omega-6 ratio from red meat', body: 'Red meat (especially grain-fed) contains more omega-6 than omega-3. Adding salmon 2–4x per week significantly improves the overall omega-3:omega-6 ratio, reducing systemic inflammation markers.' },
    ],
    howMuch: 'Most carnivore practitioners eat salmon 2–4 times per week, 6–8 oz (170–225g) per serving. Daily salmon consumption is fine but not necessary — 2x per week provides excellent omega-3 coverage. Wild-caught is strongly preferred over farmed for omega-3 and astaxanthin content.',
    bestFor: ['Omega-3 supplementation (replaces fish oil capsules)', 'Vitamin D intake (carnivore dieters who avoid sun)', 'Variety from red meat (prevents diet fatigue)', 'Brain health (DHA is critical for cognitive function)', 'Anti-inflammatory needs (athletes, autoimmune conditions)'],
    concerns: 'Farmed Atlantic salmon is nutritionally inferior to wild-caught and may contain PCBs and other contaminants at higher levels. Always choose wild-caught Pacific salmon (sockeye, king/Chinook, coho) over farmed Atlantic salmon when possible. Canned wild salmon is an excellent and affordable option.',
    pairsWith: ['Butter (salmon in butter is excellent)', 'Eggs (salmon and eggs for variety)', 'Avocado oil (for pan searing at high heat)', 'Sardines (rotate between fatty fish for variety)'],
    buyingTips: 'Best options: Costco wild-caught sockeye salmon (excellent value), Vital Choice wild-caught online, local fish market for freshest options. Canned: Wild Planet wild sockeye or pink salmon — convenient and affordable omega-3 source. Avoid Atlantic salmon labeled simply "farmed" without additional certifications.',
    cookingTips: 'Pan sear: high heat, oil or butter, skin side down 4 min, flip 2 min — results in crispy skin and moist flesh. Baked: 400°F for 12–15 min. Avoid overcooking — salmon is best at 125–130°F internal (medium). Season with salt only for strict carnivore.',
    faq: [
      { q: 'Is salmon allowed on the carnivore diet?', a: 'Yes — all animal foods are allowed on the carnivore diet, including all fish and seafood. Salmon is one of the most recommended carnivore diet foods specifically for its omega-3 content and nutrient density.' },
      { q: 'Should I choose wild or farmed salmon on carnivore?', a: 'Wild-caught is strongly preferred. Wild Pacific salmon (sockeye, king, coho) has 2–3x higher omega-3 content than farmed, contains natural astaxanthin, and has lower levels of PCBs and other contaminants. The price premium for wild salmon is worth it nutritionally.' },
      { q: 'Can I eat smoked salmon on carnivore diet?', a: 'Yes — smoked salmon is allowed on carnivore. Check the ingredient list: some commercial smoked salmon contains sugar or other additives. Plain smoked salmon (salmon and salt only) is ideal. Lox (cold-smoked) is the most carnivore-friendly option.' },
      { q: 'How often should I eat salmon on carnivore?', a: 'Most carnivore practitioners eat salmon 2–4 times per week. This frequency provides excellent omega-3 coverage without making salmon the dietary foundation (beef typically remains the primary food). More frequent consumption is fine if preferred.' },
    ],
  },

  'chicken-thighs': {
    name: 'Chicken Thighs',
    emoji: '🍗',
    title: 'Chicken Thighs on the Carnivore Diet — Macros, Benefits & Skin-On vs. Boneless',
    description: 'Are chicken thighs good for carnivore diet? Complete guide to chicken thigh macros, skin-on vs. boneless, and why carnivore practitioners prefer thighs over breast.',
    keywords: ['chicken thighs carnivore diet', 'chicken carnivore diet', 'chicken thigh macros carnivore', 'can you eat chicken on carnivore', 'chicken breast vs thigh carnivore'],
    intro: 'Chicken thighs are the best poultry option for the carnivore diet — their higher fat content (compared to breast) provides more satiety and better energy. Skin-on chicken thighs with the fat are preferred over skinless breast, which is too lean to sustain on the carnivore diet long-term. Chicken is a solid carnivore food but most practitioners rely primarily on beef and eggs.',
    macrosPer100g: { protein: 19, fat: 11, carbs: 0, calories: 179 },
    macrosPerServing: { serving: '2 thighs (170g) bone-in', protein: 32, fat: 19, carbs: 0, calories: 304 },
    carnivoreScore: 7,
    carnivoreRating: 'Good — best poultry option; prefer skin-on',
    benefits: [
      { icon: '💰', title: 'Affordable protein source', body: 'Chicken thighs are typically 50–60% cheaper than beef per pound while providing solid protein and fat. For carnivore dieters managing cost, chicken thighs are an important affordable option.' },
      { icon: '💪', title: 'Taurine and carnitine content', body: 'Poultry contains meaningful amounts of taurine and carnitine — amino acid derivatives important for heart function, energy metabolism, and fat transport. Both are absent from plant foods.' },
      { icon: '🔵', title: 'Zinc and selenium', body: 'Chicken thighs provide zinc (immune function) and selenium (thyroid health and antioxidant defense). While lower than beef, these micronutrients are still meaningful contributors to daily requirements.' },
      { icon: '🍳', title: 'Collagen from skin and connective tissue', body: 'Chicken skin and the connective tissue around bone-in thighs provides collagen — the structural protein that supports joints, skin, and gut lining. Cooking bone-in with skin maximizes collagen intake.' },
    ],
    howMuch: 'Chicken thighs are typically eaten as a meal complement rather than a primary daily food for most carnivore practitioners. 2–4 thighs (skin-on) per meal is typical. Many carnivore dieters rotate chicken thighs with beef 2–3 days per week for variety and cost management.',
    bestFor: ['Budget carnivore (significantly cheaper than beef)', 'Variety from beef-only diet', 'Meal prep (batch bake 8-10 thighs)', 'Beginners transitioning to carnivore (familiar food)', 'Children on carnivore diet (familiar flavor)'],
    concerns: 'Chicken breast is not recommended as a primary carnivore food — it is too lean (very low fat) and will cause symptoms of lean-meat sickness. Always choose skin-on, bone-in thighs over boneless skinless breast. Factory-farmed chicken has a poor omega-6:omega-3 ratio — consider pasture-raised if budget allows.',
    pairsWith: ['Butter (baste thighs with butter while cooking)', 'Eggs (chicken thighs and eggs for a complete meal)', 'Bacon fat (cook chicken in bacon fat)', 'Beef tallow (excellent cooking fat for chicken)'],
    buyingTips: 'Bone-in, skin-on chicken thighs are the carnivore standard. Costco family packs offer excellent value. Pasture-raised chicken (Mary\'s Free Range, Bell & Evans) has better omega-3 profile but standard supermarket thighs are nutritionally solid. Avoid pre-marinated varieties — they typically contain soy, sugar, and seed oils.',
    cookingTips: 'Best method: cast iron sear skin-side down over medium heat for 8 min until golden and crispy, then flip and finish in 400°F oven for 15 min. Alternatively: bake at 425°F for 35–40 min skin-side up. Salt generously under the skin before cooking for best flavor and seasoning penetration.',
    faq: [
      { q: 'Is chicken allowed on the carnivore diet?', a: 'Yes — all animal foods are allowed on the carnivore diet, including all poultry. Chicken thighs (skin-on) are the recommended chicken choice due to their higher fat content. Some strict carnivore practitioners prefer beef for its superior micronutrient profile, but chicken is fully acceptable.' },
      { q: 'Why do carnivore dieters prefer thighs over breast?', a: 'Chicken breast is very lean (2–3g fat per 100g) while thighs have 10–11g fat per 100g. The carnivore diet functions best with adequate fat intake. Eating primarily chicken breast is likely to result in lean-meat sickness — a condition of excessive protein relative to fat that causes nausea and fatigue.' },
      { q: 'Can chicken be a primary carnivore diet food like beef?', a: 'Technically yes, but most experienced carnivore practitioners recommend beef as the primary food and chicken as a complement. Beef has a more complete micronutrient profile (higher B12, zinc, creatine, carnitine) and a more favorable fat composition for carnivore diet goals.' },
      { q: 'Is chicken skin healthy on carnivore diet?', a: 'Yes — chicken skin is an animal fat and is fully acceptable on the carnivore diet. It provides collagen, fat-soluble vitamins, and additional fat for satiety. The idea that chicken skin is unhealthy is based on outdated and debated dietary fat science. Eat it.' },
    ],
  },

  'butter': {
    name: 'Butter',
    emoji: '🧈',
    title: 'Butter on the Carnivore Diet — Macros, Benefits & How Much Fat to Add',
    description: 'Butter is a carnivore diet staple for cooking and adding fat. Complete guide to butter macros, grass-fed vs. conventional, and how to use butter on carnivore.',
    keywords: ['butter carnivore diet', 'how much butter carnivore diet', 'grass-fed butter carnivore', 'butter macros carnivore', 'butter vs tallow carnivore'],
    intro: 'Butter is one of the most beloved carnivore diet foods — a pure animal fat that enhances every carnivore meal. Butter provides the extra fat needed to reach optimal fat ratios on carnivore and makes cooking meat deeply satisfying. Grass-fed butter (Kerrygold, Vital Farms) has meaningfully higher nutrient content than conventional butter.',
    macrosPer100g: { protein: 1, fat: 80, carbs: 1, calories: 717 },
    macrosPerServing: { serving: '1 tablespoon (14g)', protein: 0.1, fat: 11, carbs: 0.1, calories: 102 },
    carnivoreScore: 8,
    carnivoreRating: 'Very Good — essential carnivore fat and cooking medium',
    benefits: [
      { icon: '🌿', title: 'Butyrate for gut health', body: 'Butter is the richest dietary source of butyrate — a short-chain fatty acid that serves as the primary fuel for colon cells, reduces inflammation in the gut, and may have protective effects against colorectal conditions.' },
      { icon: '🌞', title: 'Vitamin K2 MK-4 in grass-fed butter', body: 'Grass-fed butter (especially from spring grass) contains significant K2 MK-4 — the animal form of Vitamin K2 that directs calcium to bones and teeth rather than arteries. Conventional butter has very little K2.' },
      { icon: '💛', title: 'CLA from grass-fed butter', body: 'Grass-fed butter contains conjugated linoleic acid (CLA) — a fatty acid with established anti-cancer and body composition benefits in research. CLA levels are 3–5x higher in grass-fed vs. conventional dairy.' },
      { icon: '🍳', title: 'Ideal cooking fat (high smoke point with ghee)', body: 'Regular butter smokes at 302°F; clarified butter (ghee) smokes at 482°F, making it excellent for high-heat searing. Butter adds flavor complexity to all carnivore meats that tallow or avocado oil cannot match.' },
    ],
    howMuch: 'Use butter to taste and satiety. Most carnivore practitioners use 1–3 tablespoons per meal for cooking and finishing. If fat intake is insufficient (hunger persists between meals), adding more butter is one of the easiest fixes. There is no established upper limit of butter for the carnivore diet.',
    bestFor: ['Cooking medium for all carnivore meats', 'Finishing fat (add to cooked meat for richness)', 'Scrambled eggs (butter is the classic medium)', 'Fat intake boost when eating leaner meats', 'Electrolyte balance (butter provides small amounts of potassium and sodium)'],
    concerns: 'Butter contains trace amounts of lactose and casein — proteins that cause reactions in some dairy-sensitive people. If you experience digestive issues with butter, try ghee (clarified butter) which removes the milk proteins and lactose. Most carnivore practitioners tolerate butter well.',
    pairsWith: ['Eggs (scrambled in butter)', 'Ribeye (baste with butter during cast iron cooking)', 'Salmon (butter-basted salmon is excellent)', 'Chicken thighs (butter under the skin)', 'Ground beef (tablespoon of butter while browning)'],
    buyingTips: 'Kerrygold Pure Irish Butter is widely available, affordable, and high quality (Irish dairy cows are primarily grass-fed). Vital Farms butter from pasture-raised cows is the US premium option. Ghee: 4th & Heart or Organic Valley grass-fed ghee for high-heat cooking. Avoid margarine, "butter spreads," or any butter blended with plant oils.',
    cookingTips: 'For steaks: Add 2 tablespoons to cast iron in the last 2 minutes of cooking, tilt pan and baste continuously for 1 minute — the "French beurre arrosée" technique. For eggs: Low heat, 1 tablespoon butter, slow scramble (3–4 minutes) produces the creamiest result. Ghee for any searing above 350°F.',
    faq: [
      { q: 'Is butter allowed on strict carnivore diet?', a: 'Yes — butter is an animal-derived product allowed on all versions of the carnivore diet. It comes from cow\'s milk (an animal source) and is primarily fat. Some extremely strict carnivore practitioners (lion diet) exclude dairy, but most carnivore variations include butter.' },
      { q: 'Grass-fed vs. conventional butter on carnivore — does it matter?', a: 'Yes, meaningfully. Grass-fed butter (Kerrygold, Vital Farms) contains 3–5x more CLA, significantly more K2 MK-4, and a better omega-3:omega-6 ratio than conventional butter. The price difference is small and the nutritional difference is large. Choose grass-fed.' },
      { q: 'Should I use butter or ghee on carnivore?', a: 'Both are excellent. Regular butter is ideal for lower-heat cooking (eggs, finishing steaks) and provides trace amounts of butyrate that ghee lacks. Ghee is better for high-heat searing (higher smoke point) and is more tolerable for dairy-sensitive individuals. Many carnivore practitioners keep both.' },
      { q: 'Can butter help with fat adaptation on carnivore?', a: 'Yes. Adding butter to meals increases total fat intake, which helps the body more rapidly adapt to fat as the primary fuel source. If you\'re experiencing energy crashes in the first 2–4 weeks of carnivore, increasing fat intake (via butter, tallow, or fattier cuts) often resolves this.' },
    ],
  },

  'beef-liver': {
    name: 'Beef Liver',
    emoji: '🫀',
    title: 'Beef Liver on Carnivore Diet — The Ultimate Superfood Guide',
    description: 'Beef liver is the most nutrient-dense food on earth. Complete guide to beef liver on carnivore diet — how much to eat, macros, benefits, and how to make it taste better.',
    keywords: ['beef liver carnivore diet', 'how much liver carnivore diet', 'beef liver macros', 'beef liver nutrients carnivore', 'how to eat beef liver carnivore'],
    intro: 'Beef liver is often called "nature\'s multivitamin" — the most nutrient-dense food per calorie of any commonly available food. A single serving of beef liver provides extraordinary quantities of B12, Vitamin A, folate, copper, iron, and dozens of other micronutrients. Most carnivore practitioners eat liver 1–3 times per week as their primary micronutrient source.',
    macrosPer100g: { protein: 20, fat: 4, carbs: 4, calories: 135 },
    macrosPerServing: { serving: '3.5 oz (100g) cooked', protein: 20, fat: 4, carbs: 4, calories: 135 },
    carnivoreScore: 10,
    carnivoreRating: 'Perfect — the most nutrient-dense carnivore food',
    benefits: [
      { icon: '⚡', title: 'Vitamin B12: 3,460% daily value per serving', body: 'A single 100g serving of beef liver provides 3,460% of the recommended daily B12 — more than any other food. B12 deficiency (fatigue, neurological symptoms, anemia) is impossible when eating liver regularly.' },
      { icon: '👁️', title: 'Preformed Vitamin A (retinol) — highest source', body: 'Beef liver provides retinol (true vitamin A) — not beta-carotene (which requires conversion). Retinol is essential for vision, immune function, skin health, and reproductive health. One serving provides 488% of the daily value.' },
      { icon: '🫀', title: 'CoQ10 for energy and heart health', body: 'Organ meats, especially heart and liver, are the richest dietary sources of Coenzyme Q10 — the mitochondrial energy compound. Carnivore practitioners who eat organ meats regularly rarely need CoQ10 supplements.' },
      { icon: '🩸', title: 'Copper: 1,620% daily value — unmatched', body: 'Beef liver\'s copper content is extraordinary — one serving provides 1,620% of the daily value. Copper deficiency (more common than recognized) causes fatigue, iron-deficiency anemia, bone fragility, and cardiovascular issues.' },
    ],
    howMuch: 'The standard carnivore recommendation is 4 oz (113g) of beef liver, 1–3 times per week. Daily consumption is not recommended due to the extremely high Vitamin A content (risk of toxicity with excessive daily intake). Once or twice a week is optimal for most people — this provides extraordinary micronutrient coverage with no toxicity risk.',
    bestFor: ['Nutrient completeness on the carnivore diet', 'Replacing supplements (B12, folate, Vitamin A, copper, iron)', 'Iron-deficiency anemia (heme iron is the most bioavailable)', 'Energy and fatigue (B12, CoQ10, iron all affect energy)', 'Fertility and pregnancy (liver was historically given to pregnant women)'],
    concerns: 'Do NOT eat liver daily — Vitamin A toxicity (hypervitaminosis A) is a real risk with excessive daily liver consumption. 4 oz, 1–3 times per week is the established safe range. Pregnant women should be especially cautious with high vitamin A intake. People taking Vitamin A supplements should be particularly careful about frequency.',
    pairsWith: ['Bacon (wrap liver in bacon — dramatically improves taste)', 'Ground beef (mix 20% liver into ground beef — nearly undetectable)', 'Onions (traditional pairing, technically not carnivore but allowed on some variations)', 'Butter (sautéed in butter improves texture and taste)'],
    buyingTips: 'Beef liver is one of the cheapest animal foods available — typically $2–4/lb. Grass-fed liver has higher nutrient content (more K2, better omega-3) but conventional is still excellent. Fresh liver from a butcher is preferred over frozen if available. For people who struggle with the taste: desiccated liver capsules (Ancestral Supplements) are a valid alternative providing identical nutrients.',
    cookingTips: 'Soaking in milk or salted water for 30–60 min before cooking significantly reduces the strong flavor (works even for carnivore practitioners who use butter instead). Slice thin (1/4 inch), high heat, 2 min per side — do NOT overcook (becomes grainy and more bitter). Serve slightly pink inside. Fry in butter with heavy salt.',
    faq: [
      { q: 'How often should I eat beef liver on carnivore?', a: '1–3 times per week, 3–4 oz per serving is the standard carnivore recommendation. This frequency provides exceptional micronutrient coverage while avoiding the risk of Vitamin A toxicity that comes with daily high-dose consumption. Once a week is the minimum to see clear benefits.' },
      { q: 'Is beef liver safe to eat on carnivore? I heard about toxin storage.', a: 'This is a common misconception. The liver processes toxins but does not store them — it neutralizes and eliminates them. What the liver does store are fat-soluble vitamins and minerals (which is why it\'s so nutritious). The only real concern with liver is excessive Vitamin A from very frequent consumption.' },
      { q: 'How do I make beef liver taste better on carnivore?', a: 'Soak in water (or milk if not strict carnivore) for 30–60 minutes to reduce bitterness. Slice thin. Cook at very high heat, 2 min per side, slightly rare inside. Mix into ground beef (20% liver:80% beef ratio) for nearly undetectable flavor. Bacon-wrapped liver is the classic carnivore preparation.' },
      { q: 'Can I take desiccated liver capsules instead of eating fresh liver?', a: 'Yes — freeze-dried (desiccated) liver capsules provide virtually identical nutrients to fresh liver and are an excellent alternative for those who dislike the taste. Ancestral Supplements and Heart & Soil are the most trusted brands. Use capsules as a supplement between fresh liver meals.' },
    ],
  },

  'lamb-chops': {
    name: 'Lamb Chops',
    emoji: '🍖',
    title: 'Lamb Chops on Carnivore Diet — Macros, Benefits & Why Lamb Is Underrated',
    description: 'Lamb chops on the carnivore diet — complete guide to lamb macros, nutritional benefits, how much to eat, and why lamb rivals beef as a carnivore diet staple.',
    keywords: ['lamb carnivore diet', 'lamb chops macros carnivore', 'can you eat lamb on carnivore diet', 'lamb vs beef carnivore', 'lamb diet benefits'],
    intro: 'Lamb is one of the most underrated carnivore diet foods — it rivals beef in nutrient density, has a naturally high omega-3 content (especially grass-fed), and provides unique micronutrients not found at the same levels in other meats. Many carnivore practitioners who add lamb to their diet report feeling noticeably better, likely due to lamb\'s distinct fatty acid and micronutrient profile.',
    macrosPer100g: { protein: 25, fat: 16, carbs: 0, calories: 245 },
    macrosPerServing: { serving: '2 lamb chops (170g)', protein: 43, fat: 27, carbs: 0, calories: 417 },
    carnivoreScore: 9,
    carnivoreRating: 'Excellent — superior omega-3 and micronutrient profile',
    benefits: [
      { icon: '🌿', title: 'Naturally higher omega-3 than most beef', body: 'Lamb (especially grass-fed New Zealand or Australian) has an omega-3:omega-6 ratio of approximately 1:2–3, compared to grain-fed beef at 1:6–7. This makes lamb a more balanced fat source and reduces the need for as much omega-3 supplementation via fish.' },
      { icon: '🔬', title: 'High in B12, zinc, and selenium', body: 'Lamb rivals beef for B12, zinc, and selenium content. A single lamb chop provides 50%+ of daily B12, significant zinc for immune support, and selenium for thyroid and antioxidant function.' },
      { icon: '⚡', title: 'Rich in carnitine and creatine', body: 'Lamb is exceptionally high in L-carnitine (critical for fatty acid transport into mitochondria) and creatine. Carnivore dieters eating lamb regularly rarely need carnitine or creatine supplementation.' },
      { icon: '🫀', title: 'Conjugated linoleic acid (CLA)', body: 'Grass-fed lamb contains more CLA than almost any other meat — including grass-fed beef. CLA has established benefits for body composition, immune function, and potential anti-cancer properties in research.' },
    ],
    howMuch: 'Lamb chops are typically eaten as a meal — 2–4 chops (6–12 oz total) per sitting. Lamb can serve as a primary carnivore food or as a weekly rotation alongside beef. Many carnivore practitioners eat lamb 2–4 times per week for micronutrient variety.',
    bestFor: ['Micronutrient diversity beyond beef-only', 'Omega-3 improvement without eating fish', 'Athletes (high carnitine and creatine content)', 'Autoimmune protocol (lamb is the traditional elimination diet protein)', 'Variety and anti-monotony on long-term carnivore'],
    concerns: 'Lamb is more expensive than beef in most US markets. New Zealand and Australian grass-fed lamb is widely available at Costco and Trader Joe\'s at competitive prices. Some people find lamb\'s flavor too strong initially — rib chops (the mildest) are the best starting point.',
    pairsWith: ['Butter (lamb in butter is exceptional)', 'Tallow (cook lamb in beef tallow)', 'Eggs (lamb and eggs for variety)', 'Beef (alternate between lamb and beef for micronutrient diversity)'],
    buyingTips: 'Costco carries Australian and New Zealand grass-fed rack of lamb and chops at excellent prices. Whole Foods and Trader Joe\'s also stock grass-fed lamb regularly. Domestic US lamb (Colorado lamb is excellent) tends to be milder in flavor than imported. For budget: lamb shoulder chops are significantly cheaper than rib chops.',
    cookingTips: 'Best method for lamb chops: cast iron at high heat, 3–4 min per side for medium-rare (130°F internal). Butter baste in the last minute. Rack of lamb: reverse sear at 225°F to 125°F internal, then sear. Lamb shoulder: braise low and slow (300°F, 3–4 hours) for fork-tender result. Always rest 5 minutes before cutting.',
    faq: [
      { q: 'Is lamb as good as beef on carnivore?', a: 'Lamb rivals beef in most nutritional parameters and exceeds beef in omega-3 content (especially grass-fed lamb). Many experienced carnivore practitioners rotate between beef and lamb and find the combination provides better overall results than beef alone.' },
      { q: 'Why is lamb recommended for autoimmune carnivore diets?', a: 'Lamb is the traditional "elimination diet" meat because it is rarely an allergen and is distinct enough from common allergens (dairy, beef, chicken) to serve as a clean baseline. The carnivore autoimmune protocol often starts with lamb and water before reintroducing other foods.' },
      { q: 'Does lamb have more fat than beef?', a: 'It depends on the cut. Rib chops and leg of lamb have similar fat content to comparable beef cuts. Lamb shoulder can be fattier. The key advantage is lamb\'s fat composition — higher omega-3 and CLA than grain-fed beef — not simply the quantity.' },
      { q: 'Is imported grass-fed lamb (New Zealand) better than US lamb?', a: 'New Zealand and Australian lamb is almost entirely grass-fed year-round (pasture is year-round in those climates) and is often less expensive than US lamb due to production efficiency. It has an excellent nutritional profile. US lamb (especially Colorado, domestic) is also high quality but more expensive.' },
    ],
  },

  'sardines': {
    name: 'Sardines',
    emoji: '🐠',
    title: 'Sardines on Carnivore Diet — The Best Budget Omega-3 Food',
    description: 'Sardines are one of the best carnivore diet seafoods for omega-3s and micronutrients at a low cost. Complete guide to sardine macros, benefits, and best brands for carnivore.',
    keywords: ['sardines carnivore diet', 'can you eat sardines on carnivore', 'sardine macros carnivore', 'best canned fish carnivore diet', 'sardines omega 3 carnivore'],
    intro: 'Sardines are arguably the most nutritionally impressive affordable food on the carnivore diet. A single can of sardines provides exceptional omega-3s, Vitamin D, B12, calcium (from edible bones), and selenium — all at a cost of $1–3. Sardines are eaten whole (bones included), making them the only commonly eaten food that provides significant dietary calcium on a carnivore diet.',
    macrosPer100g: { protein: 25, fat: 11, carbs: 0, calories: 208 },
    macrosPerServing: { serving: '1 can (92g, drained)', protein: 23, fat: 10, carbs: 0, calories: 191 },
    carnivoreScore: 9,
    carnivoreRating: 'Excellent — unbeatable value for omega-3 and micronutrients',
    benefits: [
      { icon: '🦴', title: 'Calcium from edible bones — unique on carnivore', body: 'Sardines are one of the only foods carnivore dieters eat whole (with bones), providing significant calcium — typically 35% daily value per can. Carnivore diets that exclude dairy often rely on sardines as the primary dietary calcium source.' },
      { icon: '🧠', title: 'Highest EPA+DHA per dollar of any food', body: 'Sardines provide 1.5–2g of EPA+DHA omega-3 per can at $1–3 price point — making them 5–10x more cost-effective as an omega-3 source than salmon or fish oil supplements. Regular sardine consumption effectively replaces fish oil supplementation.' },
      { icon: '🌞', title: 'Vitamin D3 — highest among common canned foods', body: 'A single can of sardines provides 12 mcg (480 IU) of vitamin D3 — about 60% of the daily recommendation. Combined with regular sun exposure, regular sardine consumption maintains excellent vitamin D status.' },
      { icon: '💊', title: 'CoQ10 and selenium — rare in most meats', body: 'Sardines contain CoQ10 (mitochondrial energy support) and selenium at levels that complement the typical beef-based carnivore diet. The combination makes sardines an excellent rotation food for micronutrient completeness.' },
    ],
    howMuch: '1–2 cans per day, 2–4 times per week is typical for carnivore practitioners who rely on sardines for omega-3s. Some practitioners eat sardines daily as a budget-primary carnivore food. They can fully replace fish oil supplements when eaten 3+ times per week.',
    bestFor: ['Budget carnivore (cheapest quality omega-3 source)', 'Calcium without dairy', 'Omega-3 supplementation replacement', 'Quick no-cook carnivore meal', 'Travel (shelf-stable, portable)'],
    concerns: 'Sardines in soybean or sunflower oil are not ideal for carnivore (seed oils). Always choose sardines in water, olive oil, or their own juices. Avoid sardines in tomato sauce (contains non-carnivore ingredients). Mercury content is negligible — sardines are one of the lowest-mercury fish available.',
    pairsWith: ['Eggs (sardines and eggs is a complete meal)', 'Butter (mash sardines with butter over eggs)', 'Salmon (rotate between fatty fish for variety)', 'Beef (sardines as side with beef main course)'],
    buyingTips: 'Best brands: Wild Planet (wild-caught, in water or olive oil — the gold standard), Crown Prince (in spring water), King Oscar (in olive oil). Avoid brands in soybean or cottonseed oil. Trader Joe\'s sardines in olive oil are excellent value. Buy by the case for significant discount.',
    cookingTips: 'Sardines are ready to eat straight from the can — no preparation needed. For variety: mash with butter and eat over eggs, pan-fry briefly (30 sec) to warm and lightly crisp the outside, or eat cold directly from can. The simpler the better — the nutrition is already perfect.',
    faq: [
      { q: 'Are sardines allowed on the carnivore diet?', a: 'Yes — sardines are an excellent carnivore diet food. They are whole animal (you eat the bones), unprocessed, and provide nutrients that beef and eggs alone do not cover as well (particularly omega-3s and calcium).' },
      { q: 'Do sardines replace fish oil supplements on carnivore?', a: 'Yes, effectively. Three to four cans of sardines per week provides approximately the same EPA+DHA as taking 2–3 fish oil capsules daily, at lower cost and with greater bioavailability. Whole-food omega-3s from sardines are superior to isolated fish oil capsules.' },
      { q: 'Can I eat sardines every day on carnivore?', a: 'Yes — sardines are a safe daily food. Unlike tuna (which has mercury concerns at high frequency), sardines have negligible mercury. Daily sardine consumption provides excellent omega-3, D3, and calcium coverage and is considered safe by most nutrition researchers.' },
      { q: 'Which is better on carnivore: sardines or salmon?', a: 'Both are excellent. Salmon provides more omega-3 per serving and has astaxanthin (the pink antioxidant). Sardines provide calcium (from bones), are significantly cheaper, and are more convenient (shelf-stable). Most carnivore practitioners eat both — sardines for daily omega-3 convenience, salmon for premium meals.' },
    ],
  },

  'pork-belly': {
    name: 'Pork Belly',
    emoji: '🐷',
    title: 'Pork Belly on Carnivore Diet — High-Fat Macros, Benefits & Cooking Guide',
    description: 'Pork belly is one of the highest-fat carnivore diet foods. Complete guide to pork belly macros, fat-to-protein ratio, and why high-fat carnivore practitioners love it.',
    keywords: ['pork belly carnivore diet', 'pork belly macros carnivore', 'high fat carnivore diet food', 'pork belly nutrition carnivore', 'uncured pork belly carnivore'],
    intro: 'Pork belly is essentially uncured, unsmoked bacon — a thick-cut pork product with an exceptionally high fat content (~75% of calories from fat). Carnivore practitioners who struggle to eat enough fat, or who want a high-fat ketogenic protein source, find pork belly an excellent addition. It\'s also what bacon is made from, before curing and slicing.',
    macrosPer100g: { protein: 9, fat: 35, carbs: 0, calories: 350 },
    macrosPerServing: { serving: '4 oz (113g)', protein: 10, fat: 40, carbs: 0, calories: 396 },
    carnivoreScore: 8,
    carnivoreRating: 'Very Good — best choice for boosting fat intake',
    benefits: [
      { icon: '⚡', title: 'Highest fat-to-protein ratio of common meats', body: 'Pork belly is one of the few common meats where fat exceeds protein by caloric contribution (~75% fat, 25% protein). For carnivore practitioners in deep ketosis or doing fat-heavy protocols, pork belly provides an unmatched fat density.' },
      { icon: '🐷', title: 'Rich in oleic acid (heart-healthy monounsaturated fat)', body: 'Pork fat is approximately 45% oleic acid — the same primary fat as olive oil. This monounsaturated fat profile makes pork belly a more cardiovascular-neutral fat source than its saturated fat content alone suggests.' },
      { icon: '🧪', title: 'B vitamins unique to pork', body: 'Pork is the richest meat source of thiamine (B1) — essential for carbohydrate metabolism and nerve function. Even on a no-carb diet, thiamine supports energy metabolism and neurological health.' },
      { icon: '💰', title: 'Very affordable per calorie', body: 'Pork belly provides more calories per dollar than almost any other quality carnivore food. For high-calorie needs (athletes, hard laborers, people eating 3,000+ calories on carnivore), pork belly is an economical choice.' },
    ],
    howMuch: 'Pork belly is typically eaten as a component of meals rather than the entire meal, due to its very high fat content. 3–5 oz alongside eggs or other protein is a common serving. Some high-fat carnivore practitioners eat larger portions as their primary fat source.',
    bestFor: ['Boosting fat intake when eating lean meats', 'Very high-calorie carnivore needs', 'Fat-to-protein ratio correction', 'Cooking medium (render the fat and use it)', 'Asian cuisine-inspired carnivore cooking'],
    concerns: 'Pork belly\'s very high fat content can cause digestive discomfort (loose stools, nausea) in people transitioning to carnivore who are not yet fat-adapted. Start with small portions and increase gradually. The high fat content also means calorie density is very high — be aware if weight loss is a goal.',
    pairsWith: ['Eggs (pork belly and eggs is a high-fat carnivore breakfast)', 'Beef (pork belly alongside leaner beef balances the meal)', 'Butter (cook pork belly in butter for maximum fat)', 'Salmon (the contrast of textures works well)'],
    buyingTips: 'Asian grocery stores typically carry the best pork belly selection at excellent prices (skin-on slabs). Costco carries pork belly slabs seasonally. Butcher shops offer custom thickness cuts. Look for good marbling throughout — evenly distributed fat layers cook better than large fat pockets.',
    cookingTips: 'Best methods: slow roast at 275°F for 2 hours until internal temp 195°F, then high broil for 5 min to crisp skin. Or: slice 1/4 inch and pan-fry at medium-high heat 3–4 min per side. Korean-style: thin-slice on a grill. Always render the fat first before eating (do not eat gelatinous unrendered fat).',
    faq: [
      { q: 'Is pork belly the same as bacon on carnivore?', a: 'Pork belly is the uncured, unsmoked, raw version of what bacon is made from. Bacon is pork belly that has been salt-cured, sometimes smoked, and sliced thin. Uncured pork belly (no curing agents or sugar) is the cleanest carnivore version for strict practitioners.' },
      { q: 'Is pork belly too fatty for carnivore?', a: 'Not for most people who are fat-adapted. At 75% fat by calories, pork belly is one of the higher-fat carnivore foods. Early in carnivore adaptation (first 4 weeks), very high fat intake can cause digestive issues. After adaptation, most people handle pork belly well.' },
      { q: 'Does pork belly have the same nutrients as bacon?', a: 'Very similar, with a key difference: raw pork belly doesn\'t have added sodium from curing. The B vitamins, zinc, and fat profile are nearly identical. Pork belly may be preferred by carnivore practitioners who want to control their salt intake.' },
      { q: 'Can I render pork belly fat and use it like tallow?', a: 'Yes — rendered pork fat (lard) is an excellent carnivore cooking fat. It has a high smoke point and excellent flavor for cooking eggs, meat, and other carnivore foods. Traditional lard is experiencing a revival among carnivore and ancestral diet practitioners.' },
    ],
  },

  'beef-tallow': {
    name: 'Beef Tallow',
    emoji: '🫙',
    title: 'Beef Tallow on Carnivore Diet — The Ultimate Ancestral Cooking Fat',
    description: 'Beef tallow is the traditional carnivore diet cooking fat. Complete guide to beef tallow macros, benefits, how to use it, and why to replace seed oils with tallow.',
    keywords: ['beef tallow carnivore diet', 'beef tallow cooking fat carnivore', 'what to cook with beef tallow', 'beef tallow vs butter carnivore', 'rendering tallow carnivore diet'],
    intro: 'Beef tallow is rendered beef fat — the traditional cooking fat used for millennia before vegetable and seed oils displaced it in the 20th century. On the carnivore diet, tallow is the preferred high-heat cooking fat, replacing the inflammatory seed oils (canola, soybean, sunflower) used in most modern cooking. Many carnivore practitioners also eat tallow directly as a fat source.',
    macrosPer100g: { protein: 0, fat: 100, carbs: 0, calories: 902 },
    macrosPerServing: { serving: '1 tablespoon (13g)', protein: 0, fat: 13, carbs: 0, calories: 115 },
    carnivoreScore: 9,
    carnivoreRating: 'Excellent — the ancestral cooking fat of choice',
    benefits: [
      { icon: '🌡️', title: 'High smoke point (420°F) — stable for high-heat cooking', body: 'Beef tallow remains chemically stable at high cooking temperatures that oxidize seed oils into potentially harmful byproducts. Tallow\'s saturated fat content makes it highly resistant to oxidation at searing temperatures.' },
      { icon: '🍟', title: 'Used to make original McDonald\'s fries', body: 'McDonald\'s used to cook their fries in beef tallow — widely considered to produce the best-tasting fries ever. The switch to vegetable oils in 1990 both worsened the taste and removed the nutritional benefits of tallow-fried food.' },
      { icon: '💊', title: 'CLA and fat-soluble vitamins', body: 'Grass-fed beef tallow contains CLA (conjugated linoleic acid) and fat-soluble vitamins A, D, E, and K in their animal-derived (most bioavailable) forms. Grass-fed tallow has significantly higher nutrient content than conventional.' },
      { icon: '💰', title: 'Can be made at home for near-zero cost', body: 'Beef fat trim (the raw material for tallow) is often sold for $0.50–$1/lb or even given away by butchers. Rendering tallow at home takes 2–3 hours and produces a shelf-stable cooking fat that costs a fraction of any commercial alternative.' },
    ],
    howMuch: 'Use tallow as a cooking fat for any high-heat carnivore cooking (searing steaks, frying eggs, cooking liver). Additionally, some carnivore practitioners eat tallow directly (1–2 tablespoons) to boost fat intake when eating leaner meats. There is no established limit.',
    bestFor: ['High-heat searing (highest smoke point of common carnivore fats)', 'Replacing seed oils completely', 'Budget fat source (render at home)', 'Deep fat frying (carnivore french fries, chicken)', 'Skin care (some carnivore practitioners use tallow topically)'],
    concerns: null,
    pairsWith: ['Ribeye (cook ribeye in tallow for extra fat)', 'Liver (tallow is the preferred cooking fat for liver)', 'Chicken (fry skin-on chicken in tallow for extraordinary crispiness)', 'Ground beef (cook ground beef in tallow for richer flavor)'],
    buyingTips: 'Fatworks and Epic are the leading commercial grass-fed tallow brands (available on Amazon, Whole Foods). White Mountain Tallow is another quality option. For DIY: ask a local butcher for beef fat trim (suet), chop finely, slow render in a slow cooker on low for 4–6 hours, strain through cheesecloth into mason jars. Room temperature shelf life: 1 month. Refrigerator: 1 year.',
    cookingTips: 'For searing: heat tallow in cast iron until shimmering, add meat — tallow gets extremely hot and produces excellent Maillard reaction crust. For frying eggs: 1 tablespoon tallow, medium heat, the eggs will taste richer than with any other fat. For oven cooking: coat chicken or pork belly in tallow before roasting for superior browning.',
    faq: [
      { q: 'Is beef tallow allowed on carnivore diet?', a: 'Yes — beef tallow is one of the most recommended carnivore diet cooking fats. It is entirely animal-derived, has no additives, and is nutritionally superior to plant-based cooking oils for carnivore purposes.' },
      { q: 'Is beef tallow better than butter for carnivore cooking?', a: 'For high-heat cooking (searing, frying), tallow is better — higher smoke point (420°F vs. 302°F for butter) and no risk of burning. For finishing and flavoring (adding to finished steaks, scrambling eggs at low heat), butter is excellent. Most carnivore practitioners keep both.' },
      { q: 'Can I make tallow at home?', a: 'Yes, easily. Ask your butcher for beef suet (kidney fat) or fat trim. Chop into small pieces, slow-cook in a pot or slow cooker on low for 3–5 hours, strain through a fine mesh strainer, pour into glass jars, and let solidify. The result is shelf-stable for weeks at room temperature and months refrigerated.' },
      { q: 'Why did restaurants switch from tallow to seed oils?', a: 'In the 1980s–90s, the vegetable oil industry successfully lobbied and marketed seed oils as "heart-healthy" alternatives to animal fats. McDonald\'s and other chains switched for public relations purposes despite seed oils being chemically unstable at cooking temperatures. The science has since reversed significantly on saturated vs. unsaturated cooking fats.' },
    ],
  },

  'heavy-cream': {
    name: 'Heavy Cream',
    emoji: '🥛',
    title: 'Heavy Cream on Carnivore Diet — Is Dairy Allowed? Macros & How Much',
    description: 'Is heavy cream allowed on carnivore diet? Complete guide to heavy cream macros, whether dairy fits strict carnivore, and how much to use without stalling progress.',
    keywords: ['heavy cream carnivore diet', 'is heavy cream allowed on carnivore', 'dairy on carnivore diet', 'heavy cream macros carnivore', 'heavy cream vs butter carnivore'],
    intro: 'Heavy cream is a popular carnivore diet addition for coffee and sauces — providing pure fat with minimal protein. Most carnivore variations allow heavy cream. The main considerations are individual dairy tolerance and whether the trace carbohydrates in dairy products affect your specific goals. Most carnivore practitioners who include dairy use it primarily in coffee or to add fat to meals.',
    macrosPer100g: { protein: 2, fat: 36, carbs: 3, calories: 340 },
    macrosPerServing: { serving: '2 tablespoons (30g)', protein: 0.6, fat: 11, carbs: 0.9, calories: 104 },
    carnivoreScore: 7,
    carnivoreRating: 'Good — allowed on most carnivore variations; check tolerance',
    benefits: [
      { icon: '☕', title: 'Coffee transformation without carbs', body: 'Heavy cream in coffee (carnivore "bulletproof coffee") provides fat for satiety and flavor with minimal carbohydrates. For carnivore practitioners who miss creamy coffee, heavy cream is the natural solution.' },
      { icon: '🔁', title: 'Pure fat — almost no protein or carbs', body: 'Per tablespoon, heavy cream is primarily fat with minimal protein and less than 0.5g net carbs. This fat-dominant profile means it doesn\'t significantly impact protein-to-fat ratios when used in reasonable amounts.' },
      { icon: '🧪', title: 'Fat-soluble vitamins from dairy fat', body: 'Heavy cream from grass-fed cows contains meaningful K2 MK-4, Vitamin A, and Vitamin D in their bioavailable fat-soluble forms. Grass-fed cream has significantly more of these nutrients than conventional.' },
      { icon: '🍦', title: 'Versatile for carnivore recipe variety', body: 'Reduced heavy cream makes an excellent sauce for meats. Whipped cream (unsweetened) is a tolerated carnivore treat. These applications help with long-term dietary sustainability and preventing carnivore diet fatigue.' },
    ],
    howMuch: 'Most carnivore practitioners use 2–4 tablespoons of heavy cream per day — primarily in coffee. For making cream sauces, 1/4–1/2 cup per recipe. Those using heavy cream more heavily (e.g., as a primary fat source) sometimes report dairy stalls — consider reducing if weight loss plateaus.',
    bestFor: ['Adding to coffee (carnivore coffee)', 'Cream sauces for meats', 'Adding fat to leaner meals', 'Transitioning to carnivore (familiar flavors ease transition)', 'Whipped cream (carnivore-friendly treat)'],
    concerns: 'Some people are sensitive to the casein proteins or lactose in heavy cream despite the low quantities. Symptoms: bloating, acne flare-ups, weight loss stalls. If you suspect dairy sensitivity, do a 2-week elimination test removing all dairy and reintroduce. If symptoms return with reintroduction, dairy may not be right for your carnivore approach.',
    pairsWith: ['Coffee (the classic carnivore cream use)', 'Ribeye (cream reduction sauce over steak)', 'Salmon (cream sauce with salmon)', 'Eggs (add to scrambled eggs for richness)'],
    buyingTips: 'Heavy whipping cream (36%+ fat) is preferred over light cream. Organic Valley pasture-raised heavy cream is the quality standard. Avoid ultra-high temperature (UHT) pasteurized cream if possible — the standard pasteurized version is fresher. Clover Organic and Kalona Supernatural are other quality brands.',
    cookingTips: 'For carnivore cream sauce: reduce heavy cream in a pan over medium heat by 50%, season with salt — excellent over any meat. For whipped cream: cold heavy cream whipped in a cold bowl to soft peaks. For coffee: steam or microwave slightly, add to hot coffee.',
    faq: [
      { q: 'Is heavy cream allowed on strict carnivore diet?', a: 'Most strict carnivore variations allow heavy cream as a dairy product (animal-derived). The Lion Diet (the most restrictive carnivore protocol — beef, salt, water only) excludes it. Standard carnivore diets, including the approach promoted by Paul Saladino and Shawn Baker, allow heavy cream.' },
      { q: 'Does heavy cream stall weight loss on carnivore?', a: 'Some people experience weight loss stalls with dairy. This appears to be individual — dairy causes an insulin response in some people that may slow fat loss. If you\'re not losing weight as expected on carnivore, try removing all dairy for 2 weeks as a first troubleshooting step.' },
      { q: 'Is heavy cream better than butter for carnivore coffee?', a: 'Both are excellent and many practitioners use both. Heavy cream creates a more integrated, creamy texture when mixed with coffee. Butter (especially blended) creates more of a "Bulletproof coffee" effect with higher MCT availability. Using both produces the richest carnivore coffee.' },
      { q: 'How is heavy cream different from milk on carnivore?', a: 'Heavy cream (36%+ fat) contains 90%+ fewer carbohydrates per serving than whole milk, 10x less protein, and primarily fat. Milk has significant lactose (milk sugar) and casein protein that may cause more issues for dairy-sensitive people. Most carnivore practitioners who allow dairy draw the line at cream and butter, excluding milk.' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(foods).map((food) => ({ food }))
}

export async function generateMetadata({ params }: { params: Promise<{ food: string }> }): Promise<Metadata> {
  const { food } = await params
  const page = foods[food]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://carnivorecalc.com/foods/${food}`,
      siteName: 'CarnivoreCalc',
      type: 'website',
    },
  }
}

export default async function FoodPage({ params }: { params: Promise<{ food: string }> }) {
  const { food } = await params
  const page = foods[food]
  if (!page) notFound()

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">CarnivoreCalc</Link>
          <span>›</span>
          <Link href="/foods" className="hover:text-white transition-colors">Food Guide</Link>
          <span>›</span>
          <span className="text-stone-300">{page.name}</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">{page.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.name} on Carnivore Diet</h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">{page.intro}</p>
          {/* Carnivore score badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-5 py-2">
            <span className="text-red-300 text-sm font-medium">Carnivore Rating:</span>
            <span className="text-white font-bold">{page.carnivoreRating}</span>
          </div>
        </div>

        {/* Macro cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-5">{page.name} Macros</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { label: 'Protein', value: `${page.macrosPer100g.protein}g`, color: 'text-blue-300' },
              { label: 'Fat', value: `${page.macrosPer100g.fat}g`, color: 'text-yellow-300' },
              { label: 'Carbs', value: `${page.macrosPer100g.carbs}g`, color: 'text-green-300' },
              { label: 'Calories', value: `${page.macrosPer100g.calories}`, color: 'text-red-300' },
            ].map((m) => (
              <div key={m.label} className="bg-stone-800/60 border border-stone-700 rounded-xl p-4 text-center">
                <div className={`text-2xl font-bold ${m.color}`}>{m.value}</div>
                <div className="text-stone-500 text-xs mt-1">per 100g</div>
                <div className="text-stone-400 text-sm font-medium mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-stone-800/40 border border-stone-700 rounded-xl p-4 text-sm text-stone-400">
            <span className="text-white font-medium">Per serving ({page.macrosPerServing.serving}):</span>{' '}
            {page.macrosPerServing.protein}g protein · {page.macrosPerServing.fat}g fat · {page.macrosPerServing.carbs}g carbs · {page.macrosPerServing.calories} kcal
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Benefits of {page.name} on Carnivore</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {page.benefits.map((b) => (
              <div key={b.title} className="bg-stone-800/50 border border-stone-700 rounded-xl p-5">
                <div className="text-2xl mb-2">{b.icon}</div>
                <h3 className="font-semibold text-white mb-1">{b.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How much */}
        <section className="mb-12 bg-stone-800/50 border border-stone-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3">How Much {page.name} Per Day on Carnivore?</h2>
          <p className="text-stone-300 leading-relaxed">{page.howMuch}</p>
        </section>

        {/* Best for */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">{page.name} Is Best For</h2>
          <ul className="space-y-2">
            {page.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-300 text-sm">
                <span className="text-red-400 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Concerns */}
        {page.concerns && (
          <section className="mb-12 bg-amber-900/20 border border-amber-700/40 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3 text-amber-300">⚠️ Things to Know</h2>
            <p className="text-stone-300 leading-relaxed text-sm">{page.concerns}</p>
          </section>
        )}

        {/* Pairs with */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">{page.name} Pairs With</h2>
          <div className="flex flex-wrap gap-3">
            {page.pairsWith.map((item) => (
              <span key={item} className="bg-stone-800 border border-stone-700 rounded-full px-4 py-1.5 text-stone-300 text-sm">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Buying & Cooking tips */}
        <section className="mb-12 grid sm:grid-cols-2 gap-5">
          <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-5">
            <h2 className="text-lg font-bold mb-3">🛒 Buying Tips</h2>
            <p className="text-stone-400 text-sm leading-relaxed">{page.buyingTips}</p>
          </div>
          <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-5">
            <h2 className="text-lg font-bold mb-3">🍳 Cooking Tips</h2>
            <p className="text-stone-400 text-sm leading-relaxed">{page.cookingTips}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">FAQ — {page.name} on Carnivore Diet</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <div key={item.q} className="bg-stone-800/50 border border-stone-700 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-stone-800/60 border border-stone-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Calculate Your {page.name} Intake</h2>
          <p className="text-stone-400 mb-6 text-sm">
            Use our free macro calculator to see exactly how much {page.name.toLowerCase()} fits your carnivore goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Calculate My Carnivore Macros →
            </Link>
            <Link
              href="/foods"
              className="bg-stone-700 hover:bg-stone-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Browse All Foods →
            </Link>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-600 text-xs">
          <p>© 2025 CarnivoreCalc · Not medical advice · Consult a healthcare provider before making dietary changes</p>
        </footer>
      </div>
    </main>
  )
}
