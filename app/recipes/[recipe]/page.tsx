import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Recipe = {
  name: string
  emoji: string
  badge: string
  title: string
  description: string
  keywords: string[]
  intro: string
  cookTime: string
  prepTime: string
  servings: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  macros: { protein: number; fat: number; carbs: number; calories: number; servingSize: string }
  ingredients: { amount: string; item: string; note?: string }[]
  instructions: { step: number; text: string }[]
  tips: string[]
  carnivoreNotes: string
  variations: { name: string; change: string }[]
  whyCarnivore: string[]
  faq: { q: string; a: string }[]
  relatedRecipes: string[]
}

const recipes: Record<string, Recipe> = {
  'ribeye-steak': {
    name: 'Perfect Ribeye Steak',
    emoji: '🥩',
    badge: 'Most Popular',
    title: 'Perfect Carnivore Ribeye Steak Recipe | How to Cook Ribeye | CarnivoreCalc',
    description: 'The perfect carnivore diet ribeye steak recipe. Pan-sear or reverse sear a ribeye steak to medium-rare perfection. Macros, cooking times, and carnivore tips included.',
    keywords: ['carnivore ribeye recipe', 'how to cook ribeye steak carnivore', 'ribeye steak carnivore diet', 'carnivore diet steak recipe', 'perfect ribeye steak recipe'],
    intro: 'The ribeye is the king of carnivore diet cuts. High in fat, deeply marbled, and rich in flavor — it\'s the most satisfying and nutritionally complete single meal you can eat on a carnivore diet. Rib-eye comes from the rib section (ribs 6-12), which is heavily worked and heavily marbled, making it self-basting as it cooks. Learn to cook a perfect ribeye and you\'ve mastered the foundation of carnivore eating.',
    cookTime: '10 min',
    prepTime: '30 min (tempering)',
    servings: 1,
    difficulty: 'Easy',
    macros: { protein: 58, fat: 48, carbs: 0, calories: 680, servingSize: '12 oz ribeye (340g)' },
    ingredients: [
      { amount: '1', item: '12–16 oz ribeye steak', note: '1.5 inches thick minimum' },
      { amount: '1 tbsp', item: 'beef tallow or butter', note: 'for the pan' },
      { amount: '1 tsp', item: 'sea salt', note: 'or to taste' },
    ],
    instructions: [
      { step: 1, text: 'Remove the ribeye from the refrigerator 30–45 minutes before cooking. This is called "tempering" — it ensures even cooking from edge to center. A cold steak from the fridge will cook unevenly, leaving the outside overdone before the inside reaches temperature.' },
      { step: 2, text: 'Pat the steak completely dry with paper towels. Moisture is the enemy of a good sear — any surface moisture creates steam, which prevents the Maillard reaction (the browning that creates flavor). Season generously with salt on both sides and the edges.' },
      { step: 3, text: 'Heat a cast iron skillet over high heat for 3–4 minutes until smoking hot. A properly preheated cast iron is essential — if it\'s not hot enough, the steak will steam rather than sear.' },
      { step: 4, text: 'Add tallow or butter to the pan. It should sizzle and smoke immediately. Place the ribeye in the pan and press it flat with a spatula for the first 30 seconds to maximize surface contact.' },
      { step: 5, text: 'Sear for 3–4 minutes per side without moving the steak. Resist the urge to move it — you\'re building a crust. When the steak releases easily from the pan, it\'s ready to flip.' },
      { step: 6, text: 'Sear the fat cap (the edge) for 30–60 seconds by holding the steak on its side with tongs. This renders the fat and creates incredible flavor.' },
      { step: 7, text: 'Rest the steak for 5 minutes before cutting. Internal temperature targets: Rare = 120°F, Medium-Rare = 130°F (recommended for ribeye), Medium = 140°F. The steak will rise 5°F during resting.' },
    ],
    tips: [
      'Always use a cast iron skillet — no other pan retains heat well enough for a proper sear',
      'The 30-minute temper at room temperature is not optional — it\'s the single biggest factor in even cooking',
      'Pat dry before searing — surface moisture prevents browning and creates a gray, steamed texture instead of a crust',
      'Let the steak tell you when to flip — if it sticks, it\'s not ready. A properly seared steak releases cleanly',
      'A meat thermometer removes all guesswork: 130°F for medium-rare, which is the ideal for ribeye',
      'Ribeye is self-basting — the fat renders and bastes the meat as it cooks. You don\'t need to add extra fat if the steak is well-marbled',
    ],
    carnivoreNotes: 'On a strict carnivore diet, season with salt only — no pepper, herbs, or spices. Many carnivore veterans find that after a few months of eating clean meat, a well-seasoned ribeye with salt is more satisfying than any heavily spiced dish ever was. The flavor of a quality ribeye needs no enhancement.',
    variations: [
      { name: 'Reverse Sear', change: 'Cook in 250°F oven on a wire rack until internal temp hits 120°F (45–60 min), then sear in a smoking hot cast iron for 90 seconds per side. Best crust + most even interior.' },
      { name: 'Sous Vide + Sear', change: 'Vacuum seal and cook at 130°F for 1–4 hours, then sear hard for 60 seconds per side. Restaurant precision at home.' },
      { name: 'Bone-In Ribeye (Cowboy Cut)', change: 'Add 2–3 minutes per side. The bone conducts heat differently — use a thermometer to verify doneness near the bone.' },
      { name: 'Butter Baste', change: 'In the last 2 minutes, reduce heat to medium, add 2 tbsp butter, and tilt the pan to baste the steak continuously with the foaming butter.' },
    ],
    whyCarnivore: [
      'High in oleic acid (same heart-healthy fat as olive oil) from the intramuscular marbling',
      'Complete protein with all essential amino acids in optimal ratios for muscle protein synthesis',
      'Rich in B12, zinc, selenium, phosphorus, and creatine — all critical for cognitive and physical performance',
      'Zero carbohydrates — no insulin spike, no blood sugar crash, no hunger rebound',
      'The saturated fat in ribeye is primarily stearic acid, which the body immediately converts to oleic acid and is neutral on LDL cholesterol',
    ],
    faq: [
      { q: 'What internal temperature for carnivore ribeye?', a: 'Medium-rare (130°F / 54°C) is the classic choice for ribeye — the fat is properly rendered and the texture is optimal. Rare (120°F) preserves more myoglobin but the fat may be underdone. Anything above medium (140°F) risks the fat rendering out, making the steak drier and less flavorful.' },
      { q: 'Can I use butter instead of tallow?', a: 'Yes, but butter burns at lower temperatures than tallow. If your pan is very hot, use tallow for the initial sear, then add butter in the last 2 minutes for flavor (butter basting). Ghee (clarified butter) has a higher smoke point than regular butter and works well for high-heat searing.' },
      { q: 'How often should I eat ribeye on carnivore?', a: 'Many strict carnivore dieters eat ribeye daily. There\'s no upper limit to how often you can eat ribeye — it\'s complete nutrition. The main consideration is cost — ribeye is expensive. Many carnivores eat ribeye for dinner and ground beef for lunch to balance cost with enjoyment.' },
      { q: 'What\'s the difference between bone-in and boneless ribeye?', a: 'Bone-in ribeye (cowboy steak or tomahawk) takes slightly longer to cook near the bone but many argue the bone adds flavor. Boneless ribeye cooks more uniformly and is easier to eat. Nutritionally, they\'re identical. For pure carnivore eating, both are excellent.' },
    ],
    relatedRecipes: ['new-york-strip', 'ground-beef-bowl', 'bone-broth'],
  },

  'ground-beef-bowl': {
    name: 'Ground Beef Bowl',
    emoji: '🍖',
    badge: 'Budget Pick',
    title: 'Carnivore Ground Beef Bowl Recipe | 80/20 Ground Beef | CarnivoreCalc',
    description: 'The ultimate carnivore budget meal. 80/20 ground beef cooked perfectly in a skillet — crispy on the outside, juicy on the inside. Macros, tips, and carnivore variations.',
    keywords: ['carnivore ground beef recipe', 'carnivore diet ground beef bowl', '80/20 ground beef carnivore', 'carnivore budget meal ground beef', 'how to cook ground beef carnivore diet'],
    intro: 'Ground beef is the unsung hero of the carnivore diet. Per gram of protein, it\'s the most economical meat you can buy. 80/20 ground beef (80% lean, 20% fat) hits the ideal carnivore macros — high protein, high fat — and cooks in 15 minutes. Master the ground beef bowl and you have a meal you can eat twice a day, every day, without getting bored.',
    cookTime: '15 min',
    prepTime: '2 min',
    servings: 1,
    difficulty: 'Easy',
    macros: { protein: 45, fat: 35, carbs: 0, calories: 510, servingSize: '8 oz (225g) raw 80/20 ground beef' },
    ingredients: [
      { amount: '8 oz', item: '80/20 ground beef', note: 'Do not use leaner than 80/20 — you need the fat' },
      { amount: '½ tsp', item: 'sea salt' },
      { amount: '1 tsp', item: 'beef tallow', note: 'optional, only if using lean ground beef' },
    ],
    instructions: [
      { step: 1, text: 'Heat a cast iron or heavy-bottomed skillet over medium-high heat for 2 minutes. You don\'t need to add fat — 80/20 ground beef has enough fat to self-baste.' },
      { step: 2, text: 'Add the ground beef to the skillet. DO NOT break it up immediately. Let it sit undisturbed for 2–3 minutes until the bottom develops a brown crust. This is the single most important step — premature breaking creates gray, steamed meat instead of browned, flavorful meat.' },
      { step: 3, text: 'Once you see browning creeping up the sides (about 2–3 minutes), break the meat into large chunks — not fine crumbles. Larger chunks retain moisture and have better texture than fully broken-down meat.' },
      { step: 4, text: 'Continue cooking, turning occasionally, for another 5–7 minutes until cooked through. Season with salt. Taste for salt level — ground beef needs more salt than steak because of the greater surface area.' },
      { step: 5, text: 'Drain excess fat if desired — but on carnivore, many people keep the fat for caloric density. The rendered fat is nutritious and flavorful.' },
      { step: 6, text: 'Serve immediately or let cool for batch-cooking storage. Ground beef reheats well and can be refrigerated for 4–5 days.' },
    ],
    tips: [
      '80/20 is the carnivore-optimal fat ratio — don\'t use 90/10 or leaner (you\'ll need to add fat back anyway)',
      'Don\'t break up the meat too early — let it brown on one side before disturbing for maximum flavor',
      'Large chunks beat fine crumbles for texture and moisture retention',
      'Season with salt after cooking, not before — salt draws moisture out if added early',
      'Grass-fed 80/20 has a slightly higher omega-3 to omega-6 ratio than conventional — worth the premium if available',
      'For batch cooking: make 2–3 lbs at once and refrigerate. Reheats perfectly in 2 minutes',
    ],
    carnivoreNotes: 'Ground beef is the most versatile carnivore staple. It\'s perfect for two-meal-a-day (OMAD or 2MAD) carnivore protocols — calorie-dense enough to hit your targets without eating enormous quantities. For strict carnivore, salt only. For lion diet, use beef only (no pork, no poultry).',
    variations: [
      { name: 'Smash Burger Style', change: 'Press 4 oz balls flat on a screaming-hot cast iron with a spatula. Thin smash burgers have maximum crust-to-meat ratio and cook in 3 minutes total.' },
      { name: 'Meatball Form', change: 'Roll into 2 oz balls, sear on all sides for 8 minutes total. Good for variety without changing the recipe.' },
      { name: 'Ground Beef + Egg', change: 'After cooking the beef, make a well in the center and crack 2 eggs into the pan. Cook until set. Adds protein and fat.' },
      { name: 'Tallow-Fried Crumbles', change: 'Add 1 tbsp tallow and fully break down the beef into fine crumbles. Cook until crispy throughout. A different texture with more surface area browning.' },
    ],
    whyCarnivore: [
      'The most economical high-protein carnivore food — typically $4-6/lb vs $15-25/lb for ribeye',
      'Complete amino acid profile with high bioavailability — every gram of beef protein is usable by the body',
      'Rich in heme iron (the most absorbable form), zinc, B12, and creatine',
      'Zero carbohydrates and zero fiber — ideal for strict elimination phase',
      'The fat in 80/20 ground beef is predominantly saturated and monounsaturated — the same fat profile as ribeye',
    ],
    faq: [
      { q: 'Should I drain the fat from ground beef on carnivore?', a: 'Generally no. The fat that renders out of 80/20 ground beef is nutritious saturated and monounsaturated fat — exactly what your body needs on carnivore. Draining it reduces your calorie and fat intake, which may leave you hungry. Only drain fat if you\'re eating multiple servings and trying to control total calories.' },
      { q: 'What\'s better for carnivore, 80/20 or 70/30 ground beef?', a: '80/20 is the sweet spot for most carnivore dieters. 70/30 is higher fat but may feel too greasy for some. 80/20 provides excellent fat content, great flavor, and enough protein density. For those who need more fat (keto-carnivore or fat-adapted athletes), 70/30 with the fat kept in is a valid option.' },
      { q: 'How much ground beef should I eat per day on carnivore?', a: 'Depends on your protein targets. As a starting point: eat 1–1.5 lbs of 80/20 ground beef per day if it\'s your primary protein source. Use the CarnivoreCalc calculator to get your specific protein target, then divide by 45g (the protein in 8 oz of ground beef) to calculate servings.' },
      { q: 'Is grass-fed ground beef worth the extra cost on carnivore?', a: 'Grass-fed has a slightly higher omega-3 to omega-6 ratio and more CLA (conjugated linoleic acid), but the difference is modest for ground beef. The bigger nutritional wins come from the type of cut (organ meats > muscle meat for micronutrients) and overall diet consistency. Grass-fed is good if your budget allows; conventional 80/20 is perfectly adequate for carnivore.' },
    ],
    relatedRecipes: ['ribeye-steak', 'chuck-roast', 'scrambled-eggs'],
  },

  'bacon-and-eggs': {
    name: 'Bacon and Eggs',
    emoji: '🥓',
    badge: 'Breakfast Classic',
    title: 'Carnivore Bacon and Eggs Recipe | Perfect Carnivore Breakfast | CarnivoreCalc',
    description: 'The perfect carnivore diet breakfast. Thick-cut bacon plus pastured eggs cooked in bacon fat. Macros, timing, and tips for the ultimate carnivore morning meal.',
    keywords: ['carnivore bacon and eggs recipe', 'carnivore diet breakfast', 'bacon and eggs carnivore', 'carnivore breakfast recipe', 'how to cook bacon eggs carnivore'],
    intro: 'Bacon and eggs is the most iconic carnivore meal — and for good reason. It\'s fast, delicious, extremely satiating, and nutritionally complete. The key is using thick-cut bacon (not the paper-thin grocery store variety), cooking the eggs in the rendered bacon fat, and not overcooking either. This is a breakfast that will keep you full until dinner.',
    cookTime: '10 min',
    prepTime: '1 min',
    servings: 1,
    difficulty: 'Easy',
    macros: { protein: 28, fat: 42, carbs: 0, calories: 490, servingSize: '4 strips thick-cut bacon + 3 eggs' },
    ingredients: [
      { amount: '4 strips', item: 'thick-cut bacon', note: 'Not thin-cut — you need ¼ inch minimum thickness' },
      { amount: '3', item: 'large eggs', note: 'Pastured eggs preferred' },
      { amount: '1 pinch', item: 'sea salt', note: 'optional — bacon is already salty' },
    ],
    instructions: [
      { step: 1, text: 'Start the bacon in a COLD skillet. Place bacon strips in a cold cast iron or stainless pan, then turn the heat to medium. Starting cold allows the fat to render slowly and evenly, producing crispier bacon without burning. Do not preheat the pan.' },
      { step: 2, text: 'Cook bacon for 4–5 minutes per side for thick-cut, or until it reaches your preferred crispiness. Thick-cut bacon should have some give — fully crispy thick bacon is overcooked and loses its chew. For standard thickness, 3–4 minutes per side.' },
      { step: 3, text: 'Remove bacon to a plate. Leave ALL the rendered bacon fat in the pan — this is liquid gold for cooking the eggs.' },
      { step: 4, text: 'Reduce heat to medium-low. The bacon fat in the pan should be shimmering but not smoking. Crack eggs directly into the fat.' },
      { step: 5, text: 'For sunny side up: cook without flipping for 3–4 minutes until whites are set but yolk is runny. For over-easy: flip after 3 minutes and cook 30 more seconds. For scrambled: beat eggs first, pour into fat, and stir gently over low heat.' },
      { step: 6, text: 'Serve immediately. The yolk should be runny for maximum nutrient density — cooking yolks destroys some heat-sensitive vitamins. Season with a tiny pinch of salt if desired (the bacon fat provides most of the salt).' },
    ],
    tips: [
      'Cold pan start for bacon — it\'s the single biggest bacon technique upgrade',
      'Never rinse the pan — that rendered bacon fat is the best cooking fat in your kitchen',
      'Thick-cut bacon (¼ inch or more) is non-negotiable for texture and fat content',
      'Pastured eggs have deeper orange yolks and more omega-3s, vitamin D, and vitamin A than cage-free or conventional',
      'Don\'t overcook the yolk — runny yolks are more nutritious (heat-sensitive nutrients intact) and more satisfying',
      'If the eggs stick, your pan isn\'t hot enough or you used too little fat — add more bacon fat next time',
    ],
    carnivoreNotes: 'Strict carnivore: salt only, no black pepper, no herbs. The combination of bacon fat + egg yolk creates a natural rich flavor that needs nothing else. Many carnivores find this becomes their favorite meal after 2–3 weeks of eating clean — the flavors become incredibly vivid once you\'ve eliminated processed foods.',
    variations: [
      { name: 'Soft Scramble', change: 'Beat 3 eggs. Cook in bacon fat over very low heat, stirring constantly with a spatula. Remove from heat when just barely set — they continue cooking from residual heat. Creamiest eggs possible.' },
      { name: 'Fried Egg in Bacon Ring', change: 'Curl a bacon strip into a ring in the pan, hold with tongs, crack egg inside the ring. The bacon forms a natural egg holder. Looks impressive, tastes incredible.' },
      { name: 'Bacon Fat Poached', change: 'Fill a small saucepan with 1 inch of rendered bacon fat, heat to 160°F, and gently slip in eggs. Fat-poached eggs develop an extraordinary texture.' },
      { name: 'Beef Tallow Eggs', change: 'Replace bacon fat with beef tallow for a slightly different flavor profile. More neutral than bacon fat, allowing the egg flavor to shine.' },
    ],
    whyCarnivore: [
      'Eggs are one of the most nutrient-dense foods on the planet — complete protein, choline, lutein, vitamins A/D/E/K, B12',
      'Bacon provides sodium (critical on carnivore\'s natural diuretic effect) and satiating fat',
      'The bacon fat + egg combination provides both fast-acting (egg protein) and slow-releasing (bacon fat) energy',
      'Choline in egg yolks is critical for liver health, neurotransmitter production, and fat metabolism',
      'Zero carbohydrates — no insulin response, steady energy through the morning',
    ],
    faq: [
      { q: 'How many eggs per day is healthy on carnivore?', a: 'There\'s no established upper limit for carnivore diets. Many strict carnivore practitioners eat 4–6 eggs daily without issue. The cholesterol concern has been largely debunked — dietary cholesterol has minimal impact on blood cholesterol for most people. If you\'re concerned, monitor your lipid panel. The nutrient density of eggs (especially pastured eggs) makes them one of the best foods on carnivore.' },
      { q: 'What\'s the best bacon for carnivore?', a: 'Look for bacon with no added sugar, no nitrates (or use celery salt-cured), and the thickest cut you can find. Sugar-free or "no sugar added" bacon is best for strict carnivore. Thick-cut or butcher-cut bacon has better fat distribution and texture. Uncured bacon or bacon from pasture-raised pigs is the premium option.' },
      { q: 'Can I eat bacon and eggs every day on carnivore?', a: 'Yes — many long-term carnivore practitioners eat this combination daily without issue. Bacon provides sodium and fat; eggs provide complete protein and micronutrients. The main consideration is variety for different cuts and species of meat. If bacon and eggs is your go-to breakfast, add variety at other meals (ribeye for dinner, ground beef for lunch).' },
      { q: 'Should eggs be cooked or raw on carnivore?', a: 'Cooked is generally preferable. Raw egg whites contain avidin, a protein that blocks biotin absorption. Cooking denatures avidin. If you want the maximum nutritional benefit from eggs, cook the white fully while keeping the yolk runny — this maximizes biotin availability while preserving heat-sensitive yolk nutrients.' },
    ],
    relatedRecipes: ['scrambled-eggs', 'pork-belly', 'ribeye-steak'],
  },

  'salmon-fillet': {
    name: 'Butter-Basted Salmon',
    emoji: '🐟',
    badge: 'Omega-3 Rich',
    title: 'Carnivore Salmon Recipe | Butter-Basted Salmon | CarnivoreCalc',
    description: 'Perfect carnivore diet salmon recipe. Pan-seared butter-basted wild salmon with crispy skin. High in omega-3s, complete protein, and ready in 14 minutes.',
    keywords: ['carnivore salmon recipe', 'carnivore diet salmon', 'butter basted salmon recipe', 'wild salmon carnivore diet', 'how to cook salmon carnivore'],
    intro: 'Salmon is one of the most nutritionally complete foods on the carnivore diet. It\'s the richest dietary source of omega-3 fatty acids (DHA and EPA), provides complete protein, and is loaded with vitamin D, B12, selenium, and astaxanthin (a powerful antioxidant that gives salmon its pink color). Pan-searing with butter produces a perfectly crispy skin and silky interior in under 15 minutes.',
    cookTime: '12 min',
    prepTime: '2 min',
    servings: 1,
    difficulty: 'Easy',
    macros: { protein: 46, fat: 32, carbs: 0, calories: 470, servingSize: '7 oz (200g) wild salmon fillet' },
    ingredients: [
      { amount: '7 oz', item: 'wild-caught salmon fillet', note: 'Skin-on. King, sockeye, or coho preferred' },
      { amount: '2 tbsp', item: 'butter' },
      { amount: '½ tsp', item: 'sea salt' },
    ],
    instructions: [
      { step: 1, text: 'Pat the salmon completely dry with paper towels — on both sides and the skin. Dry skin is the secret to crispy skin. Any moisture = steamed skin instead of crispy skin. Season the flesh side with salt.' },
      { step: 2, text: 'Heat a stainless steel or cast iron skillet over medium-high heat for 2 minutes. Add 1 tbsp butter. When the butter foam subsides and turns golden, the pan is ready.' },
      { step: 3, text: 'Place salmon skin-side DOWN in the pan. Immediately press down firmly with a spatula for 30 seconds — this prevents the skin from curling and ensures full contact with the hot surface.' },
      { step: 4, text: 'Cook skin-side down for 7–8 minutes. Do not flip yet. Watch for the flesh to turn opaque from the bottom up — when it\'s about 70% opaque, it\'s nearly done. The skin should be deeply golden and crispy.' },
      { step: 5, text: 'Flip the salmon. Add the remaining 1 tbsp butter to the pan. As it melts and foams, tilt the pan and use a spoon to continuously baste the flesh with the butter for 1–2 minutes.' },
      { step: 6, text: 'Remove when the flesh is just opaque in the center (or a thermometer reads 125°F for medium / 130°F for medium-well). Salmon continues cooking after removing from heat — take it off slightly underdone.' },
    ],
    tips: [
      'Dry skin completely before cooking — this is non-negotiable for crispy skin',
      'The press-down with a spatula at the start prevents the skin from curling',
      'Start skin-side down and spend 80% of the cooking time on the skin side',
      'Wild-caught salmon (king, sockeye, coho) has much higher omega-3 content than farmed Atlantic salmon',
      'Pull it slightly early — salmon carryover cooks. 125°F in the pan = 130°F on the plate',
      'Don\'t overcook — overcooked salmon turns dry and chalky. The center can be slightly translucent',
    ],
    carnivoreNotes: 'For strict carnivore, use butter and salt only — no lemon, no herbs. Many carnivore practitioners include fatty fish like salmon 2–3 times per week for omega-3 balance. Wild-caught is strongly preferred over farmed — farmed Atlantic salmon has a much less favorable omega-3 to omega-6 ratio and is often fed grain-based feed.',
    variations: [
      { name: 'Tallow-Seared', change: 'Replace butter with beef tallow for higher smoke point. Finish with a tablespoon of butter at the end for flavor.' },
      { name: 'Oven-Roasted', change: 'Rub with butter and salt, place skin-up on a rack, roast at 400°F for 12–14 minutes. Less hands-on but no crispy skin.' },
      { name: 'Whole Side of Salmon', change: 'Scale up to a full 2 lb side of salmon. Same technique, just 15–18 minutes total. Great for batch cooking multiple days.' },
      { name: 'Cold Smoked Salmon', change: 'Buy pre-smoked wild salmon — zero cooking required. High protein, very high omega-3s, excellent as a quick carnivore meal or snack.' },
    ],
    whyCarnivore: [
      'Richest dietary source of long-chain omega-3s (DHA and EPA) — critical for brain function, inflammation control, and cardiovascular health',
      'Complete protein with a leucine content comparable to beef — fully muscle-protein-synthesis triggering',
      'Vitamin D content is exceptional — 3.5 oz of salmon provides over 100% of the daily vitamin D requirement',
      'Astaxanthin (the pink pigment in wild salmon) is one of the most potent natural antioxidants — 6,000x stronger than vitamin C',
      'Selenium content is extremely high — essential for thyroid function and immune defense',
    ],
    faq: [
      { q: 'How often should I eat salmon on carnivore?', a: 'Most carnivore practitioners include fatty fish 2–3 times per week. Salmon provides omega-3 DHA and EPA that complement the predominantly omega-6 profile of land animals (especially in grain-fed beef). For maximum omega-3 benefit, wild-caught salmon 2–3x weekly is the standard recommendation.' },
      { q: 'Wild-caught vs farmed salmon on carnivore — does it matter?', a: 'Yes, significantly. Wild-caught salmon (king, sockeye, coho, pink) has 2–3x more omega-3s per gram than farmed Atlantic salmon, much less omega-6, and no exposure to antibiotics or artificial coloring. Farmed salmon is often fed grain-based feed that dramatically lowers its omega-3 content. Wild-caught is worth the premium for carnivore.' },
      { q: 'Is the skin of salmon good to eat on carnivore?', a: 'Yes — salmon skin is nutrient-dense. It contains the highest concentration of omega-3 fatty acids in the fish, along with vitamins D and B12. The skin also provides collagen. Crispy salmon skin is a delicious and nutritious part of the meal on a carnivore diet.' },
      { q: 'Can I eat canned salmon on carnivore?', a: 'Yes — canned wild-caught salmon (in water or olive oil) is a valid carnivore food. It\'s shelf-stable, economical, and high in omega-3s. Look for canned wild salmon (red sockeye or pink) with bones and skin included — the canned bones are soft and edible, providing calcium. Avoid canned salmon in vegetable oils.' },
    ],
    relatedRecipes: ['ribeye-steak', 'chicken-thighs', 'bone-broth'],
  },

  'beef-liver': {
    name: 'Sautéed Beef Liver',
    emoji: '🫀',
    badge: 'Most Nutritious',
    title: 'Carnivore Beef Liver Recipe | How to Cook Liver Carnivore Diet | CarnivoreCalc',
    description: 'How to cook beef liver on the carnivore diet. Perfectly sautéed beef liver — the most nutrient-dense food on the planet. Macros, prep tips, and carnivore notes.',
    keywords: ['carnivore beef liver recipe', 'how to cook beef liver carnivore', 'beef liver carnivore diet', 'carnivore organ meat recipe', 'beef liver recipe simple'],
    intro: 'Beef liver is the most nutrient-dense food on the planet — not hyperbole, but a measurable fact. Ounce for ounce, beef liver has more Vitamin A, B12, folate, copper, riboflavin, and iron than any other food. Many long-term carnivore practitioners consider liver the non-negotiable weekly staple that prevents any risk of micronutrient deficiency. The challenge is that many people dislike the strong flavor — this recipe minimizes that while preserving all the nutrition.',
    cookTime: '8 min',
    prepTime: '30 min (milk soak optional)',
    servings: 1,
    difficulty: 'Medium',
    macros: { protein: 26, fat: 12, carbs: 4, calories: 230, servingSize: '4 oz (115g) beef liver' },
    ingredients: [
      { amount: '4 oz', item: 'beef liver', note: 'Sliced ¼ inch thick. Grass-fed preferred.' },
      { amount: '1 tbsp', item: 'butter or beef tallow' },
      { amount: '½ tsp', item: 'sea salt' },
    ],
    instructions: [
      { step: 1, text: 'OPTIONAL: Soak liver slices in cold water or milk for 30 minutes before cooking. This draws out some of the strong-flavored compounds (particularly the blood) and significantly reduces the "livery" taste. Pat completely dry afterward.' },
      { step: 2, text: 'Slice liver into pieces about ¼ inch thick if not already sliced. Thinner slices cook faster and have a milder, more palatable texture. Season lightly with salt.' },
      { step: 3, text: 'Heat a cast iron over medium-high heat. Add butter or tallow. When hot and shimmering, add the liver slices in a single layer — do not crowd.' },
      { step: 4, text: 'Sear for 2–3 minutes on the first side without moving. You want a brown crust. Flip.' },
      { step: 5, text: 'Cook 1–2 more minutes on the second side. This is critical: DO NOT OVERCOOK LIVER. Overcooked liver becomes grainy, dry, and much more bitter. It should be slightly pink inside — like a medium-well steak.' },
      { step: 6, text: 'Remove immediately. Internal temperature should be around 160°F. Let rest for 2 minutes. Serve immediately — liver does not reheat well without becoming rubbery.' },
    ],
    tips: [
      'Never overcook liver — it goes from perfect to terrible in 60 seconds. Pink inside is correct.',
      'The cold water or milk soak is optional but highly recommended for beginners — it meaningfully reduces the strong flavor',
      'Thin slices (¼ inch) are much more palatable than thick slices for people new to liver',
      'Cook on medium-high, not high — too-high heat toughens liver rapidly',
      'Liver is best eaten fresh — it does not reheat well and should be consumed immediately after cooking',
      'If you truly can\'t tolerate the taste, consider desiccated liver capsules — they provide all the nutrition without the flavor',
    ],
    carnivoreNotes: 'Liver is the only food on the carnivore diet that has carbohydrates (from glycogen stored in liver tissue) — approximately 3–4g carbs per 4 oz serving. This is still essentially zero-carb for practical purposes but worth noting for strict ketogenic-carnivore. Eat 4–8 oz of liver once or twice per week — this is the standard carnivore liver protocol for covering all micronutrients.',
    variations: [
      { name: 'Frozen Grated Liver', change: 'Freeze liver, then grate frozen liver into raw ground beef (1 oz liver per lb of ground beef). Taste is completely hidden. This is the most common technique for people who dislike liver.' },
      { name: 'Pâté Style', change: 'Cook as above, then blend with 2 tbsp butter while still warm into a smooth pâté. Spread and eat — the texture transformation makes it more appealing to many.' },
      { name: 'Beef Heart + Liver Combo', change: 'Combine 2 oz liver with 2 oz beef heart for variety. Heart is milder in flavor and provides CoQ10 and taurine alongside liver\'s B vitamins.' },
    ],
    whyCarnivore: [
      'Vitamin A content: 1 serving of beef liver = 5x the daily value — critical for vision, immune function, and skin health',
      'Vitamin B12: 1 serving = 1000% daily value — the highest B12 content of any food. Critical for neurological function.',
      'Copper: 1 serving = 700% daily value — required for iron metabolism, collagen synthesis, and connective tissue',
      'Folate: 1 serving = 65% daily value — from the most bioavailable food source of natural folate',
      'Heme iron: highest concentration of the most absorbable iron form — eliminates iron-deficiency risk',
    ],
    faq: [
      { q: 'How much liver should I eat per week on carnivore?', a: 'The standard carnivore recommendation is 4–8 oz (115–225g) of liver once or twice per week. More than that risks vitamin A toxicity over time (hypervitaminosis A), particularly from highly bioavailable animal-source vitamin A (retinol). 4–8 oz weekly provides all the micronutrient benefits without any risk.' },
      { q: 'What if I hate the taste of liver?', a: 'Three options: (1) Grate frozen liver into ground beef — the taste is completely undetectable at a 1:16 ratio; (2) Try lamb or chicken liver instead of beef liver — both are milder in flavor; (3) Use desiccated beef liver capsules — they provide the full nutritional benefit without any taste.' },
      { q: 'Should liver be cooked or eaten raw?', a: 'Cooked is safer and more digestible. Raw liver carries risk of E. coli, Salmonella, and parasites. The nutritional argument for raw liver is minimal — most nutrients survive light cooking. Cook to 160°F internal temperature for food safety while keeping it slightly pink inside.' },
      { q: 'Is beef liver high in carbs for carnivore?', a: 'Liver contains approximately 3–4g of carbohydrates per 4 oz serving — these come from glycogen stored in the liver. For practical purposes, this is negligible and almost all carnivore practitioners don\'t count it. However, strict zero-carb adherents note it. At 4–8 oz per week, the total carb contribution is minimal.' },
    ],
    relatedRecipes: ['ground-beef-bowl', 'bone-broth', 'ribeye-steak'],
  },

  'scrambled-eggs': {
    name: 'Butter Scrambled Eggs',
    emoji: '🥚',
    badge: 'Quick Meal',
    title: 'Carnivore Scrambled Eggs Recipe | Butter Scrambled Eggs | CarnivoreCalc',
    description: 'Perfect carnivore diet scrambled eggs. Low and slow in generous butter creates the creamiest, richest eggs you\'ve ever tasted. Fast, nutritious, and zero carb.',
    keywords: ['carnivore scrambled eggs recipe', 'butter scrambled eggs carnivore', 'carnivore diet eggs', 'how to make scrambled eggs carnivore', 'carnivore breakfast eggs butter'],
    intro: 'Carnivore scrambled eggs are a revelation if you\'ve only ever made scrambled eggs with oil or on high heat. The secret is low heat and generous butter. Low-heat scrambled eggs develop a silky, creamy, restaurant-quality texture that bears no resemblance to the dry, rubbery eggs most people grew up eating. These take 8 minutes, require 2 ingredients, and will change how you think about eggs.',
    cookTime: '8 min',
    prepTime: '1 min',
    servings: 1,
    difficulty: 'Easy',
    macros: { protein: 18, fat: 26, carbs: 1, calories: 310, servingSize: '3 eggs + 1.5 tbsp butter' },
    ingredients: [
      { amount: '3', item: 'large eggs', note: 'Pastured preferred for more vibrant yolks' },
      { amount: '1.5 tbsp', item: 'unsalted butter', note: 'This is generous — that\'s intentional' },
      { amount: '1 pinch', item: 'sea salt' },
    ],
    instructions: [
      { step: 1, text: 'Crack 3 eggs into a bowl and beat with a fork until fully combined — yolks and whites fully integrated. Add a pinch of salt and beat once more. Do not add milk or cream (this is carnivore, and it dilutes flavor).' },
      { step: 2, text: 'Add butter to a non-stick or well-seasoned cast iron skillet over MEDIUM-LOW heat. This is the critical step — medium-low, not medium, not medium-high. Low heat is what creates creamy eggs.' },
      { step: 3, text: 'When butter is melted but not yet foaming (just starting to bubble gently), pour in the eggs. Don\'t wait for the butter to foam or brown — add eggs when the butter is just melted.' },
      { step: 4, text: 'Using a rubber spatula, gently push the eggs from the edges toward the center, folding rather than stirring. Do this slowly and continuously. The eggs should form large, soft, glossy curds.' },
      { step: 5, text: 'CRITICAL: Remove the pan from heat when the eggs are STILL WET — they should look slightly underdone. They will continue cooking from residual heat for 30–60 seconds after you remove the pan. If they look perfect in the pan, they\'ll be overcooked on the plate.' },
      { step: 6, text: 'Slide onto a warm plate immediately and eat right away. Scrambled eggs do not hold or reheat — they must be eaten fresh.' },
    ],
    tips: [
      'Low heat is the entire secret — medium-low or lower, never higher',
      'Remove from heat while still slightly wet — carryover cooking finishes them',
      'More butter than you think — 1.5 tbsp for 3 eggs creates the silk texture',
      'Don\'t stir, fold — gentle folding creates large curds; vigorous stirring creates rubbery small curds',
      'Warm your plate before plating — cold plate = scrambled eggs cool and stiffen instantly',
      'Eat immediately — scrambled eggs are the most time-sensitive of all egg preparations',
    ],
    carnivoreNotes: 'Strict carnivore: eggs + butter + salt only. No herbs, no pepper, no hot sauce. The richness of slow-scrambled eggs in good butter is complete on its own. Many carnivore practitioners combine scrambled eggs with bacon or smoked salmon — the flavors complement each other naturally without any plant-based additions.',
    variations: [
      { name: 'French Soft Scramble', change: 'Ultra-slow over the lowest possible heat, stirring constantly with a silicone spatula for 10–12 minutes. Never stops moving. Result: a thick, pudding-like consistency — the most silky eggs possible.' },
      { name: 'Tallow Scramble', change: 'Replace butter with beef tallow. More neutral flavor, slightly different texture. Some carnivores prefer the cleaner taste.' },
      { name: 'Egg + Liver (Hidden Liver)', change: 'Add 1 tsp of freshly grated frozen liver to the egg mix before scrambling. Nutritional upgrade with zero flavor impact at this quantity.' },
      { name: '6-Egg Power Scramble', change: 'Double the recipe for a high-calorie, high-protein meal. Useful for OMAD (one meal a day) carnivore practitioners.' },
    ],
    whyCarnivore: [
      'Eggs are one of the most complete nutritional packages in nature — complete protein, choline, B vitamins, fat-soluble vitamins A/D/E/K',
      'Butter adds fat-soluble vitamins (A, D, K2) and satiating saturated fat',
      'Choline in egg yolks is essential for liver health, memory, and neurotransmitter (acetylcholine) production',
      'The fat in butter + eggs provides a slow-releasing energy source with no blood sugar spike',
      'Pastured eggs have 3–4x more omega-3s and 7x more beta-carotene than conventional caged eggs',
    ],
    faq: [
      { q: 'How many eggs per day is reasonable on carnivore?', a: 'There\'s no established limit. Many carnivore practitioners eat 4–8 eggs daily. The former concern about dietary cholesterol raising blood cholesterol has been substantially revised — for most people, dietary cholesterol has minimal impact on LDL. Eggs are a complete nutrient package. Eat as many as you feel good eating.' },
      { q: 'What\'s the difference between low and high heat scrambled eggs?', a: 'High heat creates small, dry, rubbery curds as the egg proteins contract rapidly. Low heat creates large, silky, creamy curds as the proteins set slowly while retaining moisture. The final texture and flavor are dramatically different. Low heat is objectively better — but it requires patience.' },
      { q: 'Can I add cheese to carnivore scrambled eggs?', a: 'Cheese is considered by many carnivore practitioners as acceptable — it\'s an animal product. However, some strict carnivore adherents exclude dairy during an elimination phase. If you tolerate dairy well, adding shredded aged cheese to scrambled eggs is a common carnivore variation.' },
      { q: 'Are scrambled eggs enough for a full carnivore meal?', a: 'Three eggs + 1.5 tbsp butter provides about 310 calories — appropriate for a light carnivore breakfast but insufficient as a main meal for most people. Pair with 4–6 strips of bacon for a full breakfast (490–650 calories) or with a small steak for a complete meal. Calculate your daily calorie and protein targets with CarnivoreCalc to see how eggs fit.' },
    ],
    relatedRecipes: ['bacon-and-eggs', 'ground-beef-bowl', 'beef-liver'],
  },

  'chuck-roast': {
    name: 'Slow Cooker Chuck Roast',
    emoji: '🍖',
    badge: 'Batch Cook',
    title: 'Carnivore Chuck Roast Recipe | Slow Cooker Carnivore Beef | CarnivoreCalc',
    description: 'Carnivore diet chuck roast in the slow cooker. Set and forget for 8 hours — fork-tender, highly nutritious, and feeds you for 3–4 days. The best carnivore batch cook.',
    keywords: ['carnivore chuck roast recipe', 'carnivore slow cooker beef', 'carnivore batch cook beef', 'chuck roast carnivore diet', 'slow cooker beef carnivore recipe'],
    intro: 'Chuck roast is the carnivore batch-cook champion. One 3 lb roast, a slow cooker, and 8 hours of hands-off cooking produces enough fork-tender beef for 3–4 days. Chuck roast comes from the shoulder — it\'s a well-worked muscle with abundant connective tissue that breaks down during slow cooking into rich gelatin, producing incredibly silky, collagen-rich beef that you can\'t replicate with faster cooking methods.',
    cookTime: '8 hr',
    prepTime: '10 min',
    servings: 4,
    difficulty: 'Easy',
    macros: { protein: 52, fat: 44, carbs: 0, calories: 620, servingSize: '8 oz (225g) cooked chuck roast' },
    ingredients: [
      { amount: '3 lb', item: 'chuck roast', note: 'Bone-in if available for extra flavor' },
      { amount: '1 tsp', item: 'sea salt', note: 'Plus more for seasoning' },
      { amount: '1 tbsp', item: 'beef tallow', note: 'For searing (optional but recommended)' },
    ],
    instructions: [
      { step: 1, text: 'OPTIONAL but recommended: Sear the chuck roast before slow cooking. Pat dry, season generously with salt. Heat tallow in a cast iron over high heat. Sear all sides of the roast — 3 minutes per side — until deeply browned. This Maillard reaction creates complex flavor that slow cooking alone cannot produce.' },
      { step: 2, text: 'Place the seared roast in the slow cooker. If you didn\'t sear, place raw directly in the slow cooker. Add ½ cup water to the bottom of the slow cooker (the meat will release significant liquid as it cooks).' },
      { step: 3, text: 'Season the top of the roast with salt. No other seasonings on strict carnivore.' },
      { step: 4, text: 'Cook on LOW for 8–10 hours (preferred) or HIGH for 5–6 hours. LOW and SLOW is far superior for chuck roast — it gives the collagen time to fully convert to gelatin, creating the signature silk texture. HIGH heat produces a less tender result.' },
      { step: 5, text: 'The roast is done when it falls apart when you press it with a fork — no resistance. If it\'s still firm, cook another hour.' },
      { step: 6, text: 'Remove the roast and shred or slice. Reserve ALL the cooking liquid — it\'s collagen-rich broth. Pour it over the meat for serving, or refrigerate separately (it will gel when cold). Season the shredded meat with additional salt to taste.' },
    ],
    tips: [
      'Searing before slow cooking is optional but adds 80% of the flavor — worth the 10 minutes',
      'LOW and SLOW (8+ hours) is objectively better than HIGH (5 hours) for chuck — give it time',
      'The cooking liquid is liquid gold — it\'s essentially bone broth. Drink it, pour it over the meat, or save it',
      'Chuck roast can be refrigerated for 5–6 days — batch cook Sunday, eat through Thursday',
      'The fat that rises to the top of the cooking liquid solidifies when cold — that\'s tallow. Use it for cooking',
      'Bone-in chuck roasts produce more collagen and flavor but are harder to find — worth seeking out',
    ],
    carnivoreNotes: 'Slow cooker chuck roast is the ideal carnivore batch-cook meal. Many practitioners make this every Sunday and eat from it all week. The gelatin produced from the collagen is exceptionally gut-healing — important during the carnivore adaptation period. The cooking juices, once chilled and the fat skimmed, are essentially bone broth and can be drunk as a hot beverage.',
    variations: [
      { name: 'Instant Pot Version', change: 'Pressure cook for 70 minutes on HIGH + 15-minute natural release. Same fork-tender result in a fraction of the time. Sear in the Instant Pot on Sauté mode before pressure cooking.' },
      { name: 'Oven Braised', change: 'In a Dutch oven with lid, at 275°F for 4–5 hours. Add water to the bottom as above. Produces excellent crust if you remove the lid for the last 30 minutes.' },
      { name: 'Short Ribs Version', change: 'Use beef short ribs instead of chuck roast. Same cooking method, 7–8 hours on low. Even richer from the rib bone marrow.' },
    ],
    whyCarnivore: [
      'Chuck roast is one of the highest collagen sources among beef cuts — essential for joint health, skin, and gut lining',
      'The slow cooking converts collagen to gelatin, which is directly gut-healing and reduces intestinal permeability',
      'High zinc content — essential for testosterone production, immune function, and wound healing',
      'Complete protein with all essential amino acids in optimal ratios',
      'Cost-effective — chuck roast is typically 40–60% the cost of ribeye per pound with comparable nutrition',
    ],
    faq: [
      { q: 'How long does slow cooker chuck roast last in the fridge?', a: '5–6 days refrigerated in an airtight container. This makes it perfect for weekly batch cooking. Reheat gently in a skillet with a splash of the reserved cooking liquid to prevent drying out. Do not microwave — it dries the meat.' },
      { q: 'Do I need to add liquid to the slow cooker?', a: 'A small amount (½ cup water) helps initially, but chuck roast releases significant liquid as it cooks — you often end up with 1–2 cups of cooking liquid by the end. This liquid is nutritious collagen-rich broth and should not be discarded.' },
      { q: 'What cut is chuck roast and why is it good for carnivore?', a: 'Chuck roast comes from the shoulder/neck area — a well-worked muscle group. The heavy use creates abundant connective tissue (collagen) and marbling. During slow cooking, the collagen melts into gelatin, making the meat fork-tender and the cooking liquid silky. This high collagen content makes chuck roast especially valuable for gut health, joint health, and skin on the carnivore diet.' },
      { q: 'Can I eat the fat from the cooking liquid?', a: 'Yes — the fat that floats to the top and solidifies when chilled is essentially beef tallow. It\'s a high-quality cooking fat. Skim it off, store it in a jar in the refrigerator, and use it for cooking other carnivore meals.' },
    ],
    relatedRecipes: ['ribeye-steak', 'bone-broth', 'ground-beef-bowl'],
  },

  'bone-broth': {
    name: 'Homemade Bone Broth',
    emoji: '🦴',
    badge: 'Gut Health',
    title: 'Carnivore Bone Broth Recipe | Homemade Beef Bone Broth | CarnivoreCalc',
    description: 'Homemade carnivore diet bone broth. Rich in collagen, glycine, and minerals. How to make beef bone broth at home — the carnivore gut-healing drink.',
    keywords: ['carnivore bone broth recipe', 'homemade bone broth carnivore', 'beef bone broth carnivore diet', 'carnivore gut health bone broth', 'how to make bone broth carnivore'],
    intro: 'Bone broth is the carnivore diet\'s primal healing drink. Slow-simmered bones release collagen, gelatin, glycine, glucosamine, and minerals that are difficult to obtain from muscle meat alone. It\'s the food most associated with gut healing, joint recovery, and the adaptation symptoms that new carnivore dieters often experience. Drink it as a warm beverage, use it as a cooking liquid, or sip it between meals.',
    cookTime: '12 hr',
    prepTime: '15 min',
    servings: 8,
    difficulty: 'Easy',
    macros: { protein: 10, fat: 5, carbs: 0, calories: 80, servingSize: '1 cup (240ml)' },
    ingredients: [
      { amount: '3–4 lbs', item: 'beef bones', note: 'Knuckles, marrow bones, neck bones — mix preferred' },
      { amount: '2 tbsp', item: 'apple cider vinegar', note: 'Optional — helps extract minerals from bones' },
      { amount: '1 tsp', item: 'sea salt' },
      { amount: '12 cups', item: 'cold water' },
    ],
    instructions: [
      { step: 1, text: 'OPTIONAL but recommended: Roast the bones first. Spread bones on a baking sheet and roast at 400°F for 30 minutes until browned. Roasting the bones produces a much deeper, richer flavor from Maillard reactions on the bone surface. This step is skippable but significantly improves flavor.' },
      { step: 2, text: 'Place bones in a large stockpot or slow cooker. Cover with 12 cups cold water. If using, add 2 tbsp apple cider vinegar — the acidity helps draw minerals out of the bone matrix. Wait 30 minutes before applying heat (allows acid to act on bones).' },
      { step: 3, text: 'Bring to a boil over medium-high heat. Skim any gray foam that rises to the top — this is proteins and impurities from the bones. Skim for the first 10–15 minutes until no more foam appears.' },
      { step: 4, text: 'Reduce to the lowest possible simmer — barely a bubble. A proper bone broth should simmer so gently that you question whether it\'s heating at all. Cover partially and simmer for 10–24 hours. Longer = more gelatin and mineral extraction.' },
      { step: 5, text: 'Strain through a fine mesh strainer. Discard the spent bones. Season the broth with salt to taste.' },
      { step: 6, text: 'Cool and refrigerate. When properly made, bone broth gels completely when cold — it becomes a solid, jiggly mass. This is the collagen/gelatin indicator. If it doesn\'t gel, you either cooked it too fast, used too much water, or used poor-quality bones. Still nutritious, but the gel indicates high collagen content.' },
    ],
    tips: [
      'Roasting bones before simmering creates dramatically better flavor — don\'t skip this',
      'The gel test: proper bone broth should solidify like Jell-O when refrigerated',
      'Lowest possible simmer — boiling degrades collagen into a cloudy, less nutritious broth',
      'Knuckle bones and feet (pork or chicken feet) produce the most collagen and the best gel',
      'The layer of fat that solidifies on top is tallow — save it for cooking',
      'Add salt only at the end — salt concentration increases as broth reduces',
    ],
    carnivoreNotes: 'Bone broth is particularly valuable during the first 2–4 weeks of carnivore eating — the adaptation period when some people experience electrolyte depletion, fatigue, and the "keto flu." The sodium, potassium, and magnesium in bone broth directly address these symptoms. Many practitioners drink 1–2 cups daily during adaptation and continue as a regular supplement indefinitely.',
    variations: [
      { name: 'Slow Cooker Method', change: 'Add everything to a slow cooker and cook on LOW for 24 hours. Completely hands-off. Same result as stovetop.' },
      { name: 'Instant Pot Method', change: 'Pressure cook on HIGH for 3 hours + natural release. Gets close to stovetop results in 1/4 of the time. Gel content is slightly lower.' },
      { name: 'Marrow Bone Focus', change: 'Use primarily femur and tibia marrow bones. Roast marrow-side-up until marrow is soft (15 min at 400°F), scoop marrow, then use bones for broth. Eat the marrow separately — it\'s the richest fat you can obtain.' },
      { name: 'Chicken Bone Broth', change: 'Use chicken carcasses, backs, and feet (feet are essential for gel). Simmer 6–8 hours. Lighter flavor, higher glucosamine content from cartilage.' },
    ],
    whyCarnivore: [
      'Glycine (the primary amino acid in collagen) supports sleep quality, muscle repair, and reduces inflammatory cytokines',
      'Glucosamine and chondroitin from joint cartilage support joint health and have clinical evidence for reducing arthritis symptoms',
      'Highly bioavailable minerals: calcium, phosphorus, magnesium, potassium — in forms the body can readily absorb',
      'The gelatin coats and soothes the gut lining — particularly valuable for people transitioning from a processed-food diet',
      'Electrolytes naturally replenish what\'s lost during the diuretic phase of early carnivore adaptation',
    ],
    faq: [
      { q: 'How do I know if my bone broth is good quality?', a: 'The gel test: refrigerate overnight. Good bone broth should gel completely — solidifying into a jiggly mass. This indicates adequate collagen extraction. Thin, watery broth has little collagen content. If your broth doesn\'t gel, use more knuckle bones (vs. straight bones), reduce water, or simmer longer.' },
      { q: 'How much bone broth should I drink per day on carnivore?', a: '1–2 cups daily is the most common recommendation for carnivore practitioners, especially during the first 4 weeks. During adaptation, electrolyte depletion can cause headaches, fatigue, and muscle cramps — bone broth\'s natural sodium, potassium, and magnesium content directly addresses these symptoms.' },
      { q: 'Can I buy bone broth instead of making it?', a: 'Yes — commercial bone broth is a valid shortcut. Look for brands that gel when refrigerated (Kettle & Fire, Epic, Bonafide Provisions). Many commercial "bone broths" are actually just diluted stock with little to no collagen — always check if the product gels in the refrigerator as the quality indicator.' },
      { q: 'Does bone broth break a carnivore fast?', a: 'Technically yes — it has protein and calories. However, many carnivore fasting practitioners use bone broth as a "fast extender" during prolonged fasts because the electrolytes support the process. For a strict zero-input fast, skip it. For an electrolyte-supported fast, bone broth is commonly used.' },
    ],
    relatedRecipes: ['chuck-roast', 'beef-liver', 'ribeye-steak'],
  },
}

// Default recipe for slugs not yet fully written
function getDefaultRecipe(slug: string): Recipe | null {
  const defaults: Record<string, Partial<Recipe>> = {
    'lamb-chops': { name: 'Pan-Seared Lamb Chops', emoji: '🫀', badge: 'Rich Flavor' },
    'pork-belly': { name: 'Crispy Pork Belly', emoji: '🐷', badge: 'High Fat' },
    'chicken-thighs': { name: 'Crispy Chicken Thighs', emoji: '🍗', badge: 'Lean Option' },
    'new-york-strip': { name: 'New York Strip Steak', emoji: '🥩', badge: 'Leaner Cut' },
  }
  return null // Return null to show notFound for unbuilt pages
}

export async function generateStaticParams() {
  return Object.keys(recipes).map((recipe) => ({ recipe }))
}

export async function generateMetadata({ params }: { params: Promise<{ recipe: string }> }): Promise<Metadata> {
  const { recipe } = await params
  const page = recipes[recipe]
  if (!page) return { title: 'Recipe Not Found' }
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://carnivorecalc.com/recipes/${recipe}`,
      siteName: 'CarnivoreCalc',
      type: 'article',
    },
  }
}

export default async function RecipePage({ params }: { params: Promise<{ recipe: string }> }) {
  const { recipe } = await params
  const page = recipes[recipe]
  if (!page) notFound()

  const availabilityColor = page.difficulty === 'Easy' ? '#16a34a' : page.difficulty === 'Medium' ? '#d97706' : '#dc2626'

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-stone-300 transition-colors">CarnivoreCalc</Link>
          <span>›</span>
          <Link href="/recipes" className="hover:text-stone-300 transition-colors">Recipes</Link>
          <span>›</span>
          <span className="text-stone-400">{page.name}</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{page.emoji}</span>
            <div>
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 border border-red-800/50 font-medium mb-2">{page.badge}</span>
              <h1 className="text-3xl md:text-4xl font-bold">{page.name}</h1>
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed">{page.intro}</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Cook Time', value: page.cookTime },
            { label: 'Prep Time', value: page.prepTime },
            { label: 'Servings', value: `${page.servings} serving${page.servings > 1 ? 's' : ''}` },
            { label: 'Difficulty', value: page.difficulty, color: availabilityColor },
          ].map(stat => (
            <div key={stat.label} className="bg-stone-800/50 rounded-xl p-3 text-center border border-stone-700/40">
              <div className="font-bold text-sm" style={stat.color ? { color: stat.color } : { color: '#f87171' }}>{stat.value}</div>
              <div className="text-stone-500 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Macros */}
        <div className="bg-stone-800/40 rounded-2xl border border-stone-700/40 p-5 mb-8">
          <h2 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Nutrition per serving <span className="text-stone-500 font-normal normal-case">({page.macros.servingSize})</span></h2>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold text-red-400">{page.macros.protein}g</div>
              <div className="text-stone-500 text-xs">Protein</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">{page.macros.fat}g</div>
              <div className="text-stone-500 text-xs">Fat</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-stone-400">{page.macros.carbs}g</div>
              <div className="text-stone-500 text-xs">Carbs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-stone-300">{page.macros.calories}</div>
              <div className="text-stone-500 text-xs">Calories</div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Ingredients</h2>
          <div className="space-y-2">
            {page.ingredients.map((ing, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-stone-800/30 border border-stone-700/30">
                <span className="text-red-400 mt-0.5 flex-shrink-0">·</span>
                <div>
                  <span className="font-semibold text-sm">{ing.amount} </span>
                  <span className="text-sm">{ing.item}</span>
                  {ing.note && <span className="text-stone-500 text-xs ml-2">({ing.note})</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <div className="space-y-4">
            {page.instructions.map((inst) => (
              <div key={inst.step} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{inst.step}</div>
                <p className="text-sm text-stone-300 leading-relaxed">{inst.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-stone-800/40 rounded-2xl border border-stone-700/40 p-5 mb-8">
          <h2 className="text-lg font-bold mb-3">💡 Pro Tips</h2>
          <ul className="space-y-2">
            {page.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-stone-300">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Carnivore notes */}
        <div className="bg-red-950/40 rounded-2xl border border-red-800/30 p-5 mb-8">
          <h2 className="text-lg font-bold mb-2 text-red-300">🥩 Carnivore Diet Notes</h2>
          <p className="text-sm text-stone-300 leading-relaxed">{page.carnivoreNotes}</p>
        </div>

        {/* Variations */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Variations</h2>
          <div className="space-y-3">
            {page.variations.map((v) => (
              <div key={v.name} className="p-4 rounded-xl bg-stone-800/30 border border-stone-700/30">
                <div className="font-semibold text-sm text-red-300 mb-1">{v.name}</div>
                <p className="text-sm text-stone-400 leading-relaxed">{v.change}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why carnivore */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Why This Food Is Carnivore Diet Gold</h2>
          <div className="space-y-2">
            {page.whyCarnivore.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-stone-800/30">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                <p className="text-sm text-stone-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <div key={item.q} className="p-4 rounded-xl bg-stone-800/30 border border-stone-700/30">
                <h3 className="font-semibold text-sm text-white mb-2">{item.q}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upsell */}
        <div className="rounded-2xl border border-red-800/40 bg-red-950/30 p-7 text-center mb-8">
          <div className="text-2xl mb-2">📋</div>
          <h2 className="text-xl font-bold mb-2">Want 30 Days of Carnivore Meals?</h2>
          <p className="text-stone-400 text-sm mb-5 max-w-lg mx-auto">
            Every meal, every day — optimized for your macros. Our 30-day carnivore meal plan tells you exactly what to eat for breakfast, lunch, and dinner.
          </p>
          <Link
            href="/#meal-plan"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 transition-colors"
          >
            Get the 30-Day Meal Plan — $17 →
          </Link>
          <p className="mt-2 text-stone-500 text-xs">One-time purchase · Instant download</p>
        </div>

        {/* Related recipes */}
        <div className="p-5 rounded-2xl border border-stone-700/40 bg-stone-800/30 mb-8">
          <h2 className="font-bold mb-3">More Carnivore Recipes</h2>
          <div className="flex flex-wrap gap-2">
            {page.relatedRecipes.map(r => (
              <Link key={r} href={`/recipes/${r}`} className="text-sm text-red-400 hover:underline capitalize">
                {r.replace(/-/g, ' ')} →
              </Link>
            ))}
            <Link href="/recipes" className="text-sm text-stone-500 hover:text-stone-300">All recipes →</Link>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="text-center p-4 rounded-xl bg-stone-800/30 border border-stone-700/40">
          <p className="text-stone-400 text-sm mb-2">Not sure how much to eat? Get your exact carnivore macros.</p>
          <Link href="/" className="text-red-400 font-semibold hover:underline text-sm">
            Use the free carnivore macro calculator →
          </Link>
        </div>
      </div>
    </main>
  )
}
