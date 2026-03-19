import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type ComparisonPage = {
  title: string
  description: string
  keywords: string[]
  h1: string
  emoji: string
  intro: string
  quickVerdict: { winner: string; reason: string }
  comparison: {
    category: string
    carnivore: string
    other: string
    winner: 'carnivore' | 'other' | 'tie'
  }[]
  otherDietName: string
  carnivoreAdvantages: string[]
  otherAdvantages: string[]
  whoShouldChooseCarnivore: string[]
  whoShouldChooseOther: string[]
  canYouCombine: string
  macroComparison: {
    metric: string
    carnivore: string
    other: string
  }[]
  faq: { q: string; a: string }[]
}

const comparisons: Record<string, ComparisonPage> = {
  'carnivore-vs-keto': {
    title: 'Carnivore Diet vs Keto Diet 2025 | Which Is Better? | CarnivoreCalc',
    description: 'Carnivore vs keto: a detailed comparison of macros, food lists, benefits, and results. Which low-carb diet is right for your goal in 2025?',
    keywords: ['carnivore vs keto', 'carnivore diet vs ketogenic diet', 'is carnivore better than keto', 'carnivore keto difference', 'carnivore vs keto for weight loss'],
    h1: 'Carnivore Diet vs Keto: What\'s the Difference?',
    emoji: '🥩⚡',
    intro: 'Carnivore and keto are the two most popular low-carb approaches — and they share a lot. Both eliminate sugar and most carbohydrates, both put the body into ketosis, and both have devoted communities with impressive transformation stories. The difference is what you eat beyond meat and fat. Keto allows low-carb vegetables, nuts, seeds, and dairy. Carnivore eliminates everything except animal foods. Which is right for you depends on your goals, your gut, and your personality.',
    quickVerdict: { winner: 'Depends on your goal', reason: 'Keto offers more dietary variety and is easier to sustain long-term for most people. Carnivore produces faster initial results, is more effective for gut and autoimmune conditions, and eliminates all plant-based variables that can interfere with results.' },
    otherDietName: 'Keto',
    comparison: [
      { category: 'Carbohydrate intake', carnivore: '0–5g/day (from trace amounts in meat)', other: '20–50g/day (from low-carb vegetables, nuts)', winner: 'carnivore' },
      { category: 'Food variety', carnivore: 'Meat, fish, eggs, organs, some dairy', other: 'Meat, vegetables, nuts, seeds, dairy, oils', winner: 'other' },
      { category: 'Ketosis depth', carnivore: 'Deeper, more consistent ketosis', other: 'Variable — depends on carb management', winner: 'carnivore' },
      { category: 'Simplicity', carnivore: 'Extremely simple — eat meat', other: 'Requires macro tracking and label reading', winner: 'carnivore' },
      { category: 'Gut healing', carnivore: 'Eliminates all plant compounds (lectins, oxalates)', other: 'Still includes some plant-based irritants', winner: 'carnivore' },
      { category: 'Micronutrients from food', carnivore: 'Animal-only sources (liver is essential)', other: 'More diverse sources including vegetables', winner: 'other' },
      { category: 'Social flexibility', carnivore: 'Very limited — restaurant options are scarce', other: 'Better — many restaurants have keto options', winner: 'other' },
      { category: 'Speed of initial results', carnivore: 'Faster water weight and inflammation reduction', other: 'Good but slightly slower than carnivore', winner: 'carnivore' },
    ],
    carnivoreAdvantages: [
      'Eliminates all plant-based compounds (lectins, oxalates, phytates) that can cause inflammation or gut issues',
      'Deeper and more consistent ketosis due to near-zero carbohydrates',
      'Simpler — no macro tracking, no label reading, no measuring vegetables',
      'More effective for autoimmune conditions and inflammatory conditions',
      'Eliminates all potential food sensitivities systematically',
      'Often produces faster initial weight loss and inflammation reduction',
    ],
    otherAdvantages: [
      'Greater food variety makes it easier to sustain long-term for most people',
      'More flexibility in social situations — restaurants, events, travel',
      'Easier to get a wider range of micronutrients from diverse plant foods',
      'More research backing (keto has decades of clinical research; carnivore is newer)',
      'Lower environmental impact for those who care about that consideration',
      'Can be adapted for vegetarians (though poorly)',
    ],
    whoShouldChooseCarnivore: [
      'You have an autoimmune condition, inflammatory bowel disease, or known gut issues',
      'You\'ve tried keto and hit a plateau or had persistent inflammation',
      'You want maximum simplicity — no measuring, no tracking, just meat',
      'You suspect plant foods are contributing to symptoms (bloating, skin issues, joint pain)',
      'You want to run a systematic elimination to identify food sensitivities',
      'You respond better to very clear rules than flexible guidelines',
    ],
    whoShouldChooseOther: [
      'You want long-term dietary sustainability and variety',
      'You have no specific inflammatory or autoimmune conditions to address',
      'You eat out frequently and need restaurant flexibility',
      'You prefer a well-researched approach with decades of clinical data',
      'You don\'t thrive eating only animal foods (some people genuinely don\'t)',
      'You have a high-fiber microbiome that responds poorly to total fiber elimination',
    ],
    canYouCombine: 'Yes — "keto carnivore" (eating primarily animal foods while staying under 50g carbs) is a natural transition zone. Many people start with standard keto, move to strict keto, then to carnivore. Others use carnivore as a 30-day reset and return to a more flexible keto approach. The protocols are compatible and many people cycle between them.',
    macroComparison: [
      { metric: 'Protein (% calories)', carnivore: '30–35%', other: '20–25%' },
      { metric: 'Fat (% calories)', carnivore: '65–70%', other: '70–75%' },
      { metric: 'Carbohydrates', carnivore: '<5g/day', other: '20–50g/day' },
      { metric: 'Fiber', carnivore: '0g', other: '10–20g' },
      { metric: 'Typical daily calories', carnivore: '1,800–2,500', other: '1,600–2,400' },
    ],
    faq: [
      { q: 'Can you go from keto to carnivore?', a: 'Yes — and it\'s a very common progression. People who do well on keto often find carnivore provides an extra level of simplicity and results, especially for inflammation and autoimmune issues. The transition is usually straightforward since you\'re already fat-adapted.' },
      { q: 'Is carnivore just strict keto?', a: 'Carnivore is stricter than keto in terms of food elimination, but they work differently in practice. Keto is defined by macronutrient ratios (high fat, very low carb). Carnivore is defined by food exclusion (only animal foods). The result is deeper ketosis on carnivore, but the mechanism of restriction is different.' },
      { q: 'Which is better for weight loss: carnivore or keto?', a: 'Both produce weight loss, typically faster than standard diets. Carnivore often shows faster initial results (less water retention, more insulin sensitivity). Long-term results are similar for people who stick with either approach. The "best" one is the one you can maintain consistently.' },
      { q: 'Can you eat dairy on carnivore diet?', a: 'Opinions vary in the carnivore community. Strict carnivore excludes dairy (it\'s not muscle meat or organs). A more permissive approach allows butter, heavy cream, and hard cheese. The lion diet (the strictest form) is only beef, salt, and water. Most beginners start with allowing some dairy and eliminate it if results stall.' },
    ],
  },

  'carnivore-vs-paleo': {
    title: 'Carnivore Diet vs Paleo Diet 2025 | Which Is Right for You? | CarnivoreCalc',
    description: 'Carnivore vs paleo: comparing food lists, macros, benefits, and who each diet works best for. Both focus on ancestral eating — but differ significantly in what you eat.',
    keywords: ['carnivore vs paleo', 'carnivore diet vs paleo diet', 'is carnivore the same as paleo', 'carnivore paleo difference', 'ancestral diet comparison'],
    h1: 'Carnivore Diet vs Paleo: How Are They Different?',
    emoji: '🥩🫐',
    intro: 'Paleo and carnivore share a foundational philosophy: eat what your ancestors ate, eliminate modern processed foods, and return to whole foods. Where they diverge is significant. Paleo includes fruits, vegetables, nuts, and seeds alongside animal foods. Carnivore eliminates all plant foods entirely. Think of carnivore as paleo taken to its logical extreme — only the animal kingdom remains.',
    quickVerdict: { winner: 'Goal-dependent', reason: 'Paleo is better for general health, sustainability, and food variety. Carnivore is better for eliminating all potential food sensitivities, autoimmune conditions, and those who do best with absolute simplicity.' },
    otherDietName: 'Paleo',
    comparison: [
      { category: 'Plant foods allowed', carnivore: 'None', other: 'Vegetables, fruits, nuts, seeds, tubers', winner: 'other' },
      { category: 'Carbohydrate intake', carnivore: '0–5g/day', other: '50–150g/day (natural carbs)', winner: 'carnivore' },
      { category: 'Simplicity', carnivore: 'Extreme — only animal foods', other: 'Moderate — avoid grains, dairy, legumes', winner: 'carnivore' },
      { category: 'Micronutrient variety', carnivore: 'Limited to animal sources (liver critical)', other: 'Wide variety from diverse plant and animal foods', winner: 'other' },
      { category: 'Weight loss speed', carnivore: 'Typically faster initial loss', other: 'Steady, sustainable weight loss', winner: 'carnivore' },
      { category: 'Gut healing', carnivore: 'Eliminates all plant irritants', other: 'Eliminates grains/legumes but retains some plant foods', winner: 'carnivore' },
      { category: 'Sustainability long-term', carnivore: 'Challenging for most people', other: 'More sustainable with food variety', winner: 'other' },
      { category: 'Social flexibility', carnivore: 'Very limited', other: 'Reasonable at most restaurants', winner: 'other' },
    ],
    carnivoreAdvantages: [
      'Eliminates all plant compounds including those in "healthy" paleo foods (lectins in nuts, oxalates in vegetables)',
      'Much simpler — no need to evaluate whether a plant food is paleo-approved',
      'Faster initial weight loss and inflammation reduction',
      'More effective for autoimmune and inflammatory conditions',
      'Consistent deep ketosis (paleo is not a ketogenic diet)',
      'Easiest elimination diet for identifying food sensitivities',
    ],
    otherAdvantages: [
      'Richer micronutrient profile from diverse plant foods',
      'More sustainable as a long-term lifestyle for most people',
      'Easier to follow in social situations — more restaurant flexibility',
      'Better gut microbiome diversity from fiber and plant variety',
      'More research and longer history as a dietary approach',
      'Natural carbohydrates support thyroid function and active lifestyles better',
    ],
    whoShouldChooseCarnivore: [
      'You have autoimmune conditions (Hashimoto\'s, rheumatoid arthritis, lupus, IBD)',
      'You\'ve tried paleo and still have persistent inflammation or gut issues',
      'You suspect specific plant foods (nuts, nightshades, high-oxalate vegetables) are causing problems',
      'You want the maximum simplicity of a diet — no evaluating foods, no recipes needed',
      'You want to use diet as a systematic elimination protocol',
    ],
    whoShouldChooseOther: [
      'You want a sustainable long-term approach with food variety',
      'You thrive on fruits and vegetables and have no gut or autoimmune issues',
      'You\'re physically active and need carbohydrates for athletic performance',
      'You want a well-documented ancestral approach without extremes',
      'You value gut microbiome diversity from plant fiber',
    ],
    canYouCombine: 'Many people cycle between paleo and carnivore — eating primarily paleo with periodic carnivore "resets" (30 days of strict carnivore to address inflammation, then returning to paleo). This can provide the best of both approaches: the sustainability of paleo with the therapeutic reset of carnivore.',
    macroComparison: [
      { metric: 'Protein (% calories)', carnivore: '30–35%', other: '25–30%' },
      { metric: 'Fat (% calories)', carnivore: '65–70%', other: '40–50%' },
      { metric: 'Carbohydrates', carnivore: '<5g/day', other: '50–150g/day' },
      { metric: 'Fiber', carnivore: '0g', other: '20–35g' },
      { metric: 'Typical daily calories', carnivore: '1,800–2,500', other: '1,800–2,600' },
    ],
    faq: [
      { q: 'Is carnivore diet just paleo without plants?', a: 'That\'s a reasonable summary. Carnivore is what paleo looks like when you take it to its logical conclusion — if ancestral humans thrived on animal foods, what happens if that\'s all you eat? The philosophy is similar but carnivore is dramatically more restrictive in food selection.' },
      { q: 'Does carnivore or paleo work better for autoimmune conditions?', a: 'Carnivore is generally more effective for autoimmune conditions because it eliminates all plant compounds that can trigger immune reactions — including those in paleo-approved foods like nightshades, nuts, and seeds. Many autoimmune patients who didn\'t fully resolve on paleo find carnivore provides additional benefit.' },
      { q: 'Can you be in ketosis on paleo?', a: 'Only with deliberate effort. Standard paleo is not a ketogenic diet — natural fruits and tubers can bring daily carbs to 100-150g. To achieve ketosis on paleo requires actively limiting carb sources, essentially creating a keto-paleo hybrid. Carnivore naturally produces ketosis without any active management.' },
      { q: 'Which is better for long-term sustainability?', a: 'Paleo is more sustainable for most people because it includes food variety, is easier in social situations, and allows a wider range of cooking and flavor. Carnivore requires a level of dietary commitment that many people find challenging beyond 30-90 days. That said, some people genuinely prefer the simplicity of carnivore and maintain it for years.' },
    ],
  },

  'carnivore-vs-low-carb': {
    title: 'Carnivore Diet vs Low Carb Diet 2025 | Which Should You Choose? | CarnivoreCalc',
    description: 'Carnivore vs low carb: how much restriction is optimal? Compare the zero-carb carnivore approach to standard low carb diets for weight loss, blood sugar, and health.',
    keywords: ['carnivore vs low carb', 'zero carb vs low carb', 'carnivore diet vs low carb diet', 'how low carb is carnivore', 'should i go carnivore or low carb'],
    h1: 'Carnivore Diet vs Low Carb: How Strict Should You Go?',
    emoji: '🥩🥦',
    intro: 'Low carb is a spectrum. At one end: eating under 150g of carbs per day (lower than standard American diet). In the middle: keto at under 50g. At the far end: carnivore at zero carbs. Each level of restriction produces different results. The question isn\'t just "which is better?" — it\'s "how much restriction do you need to achieve your goal?"',
    quickVerdict: { winner: 'Use carnivore when low carb stops working', reason: 'Low carb is a solid starting point with good evidence for weight loss and metabolic health. Carnivore is the next step when you need deeper restriction — for plateaus, inflammation, gut issues, or autoimmune conditions.' },
    otherDietName: 'Low Carb',
    comparison: [
      { category: 'Carbohydrate intake', carnivore: '0–5g/day', other: '50–150g/day', winner: 'carnivore' },
      { category: 'Ketosis', carnivore: 'Deep, consistent ketosis', other: 'Variable — may or may not achieve ketosis', winner: 'carnivore' },
      { category: 'Food variety', carnivore: 'Only animal foods', other: 'Most whole foods except grains/sugar', winner: 'other' },
      { category: 'Metabolic effect', carnivore: 'Insulin minimized, fat burning maximized', other: 'Insulin reduced, fat burning improved', winner: 'carnivore' },
      { category: 'Simplicity', carnivore: 'Extreme simplicity', other: 'Requires ongoing carb counting', winner: 'carnivore' },
      { category: 'Sustainability', carnivore: 'Challenging for variety-seeking eaters', other: 'Much more sustainable long-term', winner: 'other' },
      { category: 'Blood sugar control', carnivore: 'Near-zero glucose response from food', other: 'Significantly improved vs standard diet', winner: 'carnivore' },
      { category: 'Weight loss plateau treatment', carnivore: 'Often breaks plateaus', other: 'May plateau at low carb level', winner: 'carnivore' },
    ],
    carnivoreAdvantages: [
      'Zero glucose from food — maximum insulin sensitivity and fat burning',
      'Automatically eliminates all food sensitivities and inflammatory compounds',
      'No carb counting, no tracking — just eat meat',
      'Breaks through weight loss plateaus that persist on low-carb approaches',
      'Deep consistent ketosis without active management',
      'Maximum simplicity — the strictest rules are also the easiest to follow',
    ],
    otherAdvantages: [
      'Easier to maintain long-term with food variety',
      'Sufficient for most people\'s weight loss and metabolic goals',
      'Better supported by decades of clinical research',
      'More flexibility in social situations and travel',
      'Allows beneficial plant foods (leafy greens, cruciferous vegetables)',
      'Less extreme transition required — easier to start',
    ],
    whoShouldChooseCarnivore: [
      'You\'ve been eating low carb for 3+ months and hit a plateau',
      'You have persistent inflammation that hasn\'t fully resolved on low carb',
      'You have type 2 diabetes or insulin resistance and need maximum glucose control',
      'You have an autoimmune condition requiring an elimination approach',
      'You want the simplest possible dietary rules',
      'You suspect specific plant foods are causing you problems',
    ],
    whoShouldChooseOther: [
      'You\'re new to low carb and want to start with a less extreme approach',
      'You\'re losing weight and feeling good on standard low carb',
      'You don\'t have specific inflammatory or autoimmune conditions',
      'You value food variety and social flexibility',
      'You\'re athletic and need some carbohydrates for performance',
    ],
    canYouCombine: 'Many people use carnivore as a reset or intervention within a broader low-carb lifestyle. Typical pattern: eat low carb most of the time → do a 30-day carnivore reset when plateaued or inflamed → return to low carb with the benefits of the reset (lower baseline inflammation, better insulin sensitivity, broken plateau). This cycling is common and works well.',
    macroComparison: [
      { metric: 'Protein (% calories)', carnivore: '30–35%', other: '20–30%' },
      { metric: 'Fat (% calories)', carnivore: '65–70%', other: '40–60%' },
      { metric: 'Carbohydrates', carnivore: '<5g/day', other: '50–150g/day' },
      { metric: 'Fiber', carnivore: '0g', other: '10–25g' },
      { metric: 'Blood glucose effect', carnivore: 'Near zero from food', other: 'Moderate — better than standard diet' },
    ],
    faq: [
      { q: 'Is carnivore diet the same as zero carb?', a: 'Essentially yes. Carnivore is the most common implementation of a zero-carb diet. Animal foods contain negligible carbohydrates (some from dairy, trace amounts in muscle meat), so a carnivore diet is effectively zero-carb in practice.' },
      { q: 'When should I switch from low carb to carnivore?', a: 'Consider the switch if: you\'ve plateaued for more than 4-6 weeks on low carb; you have persistent inflammation, gut issues, or autoimmune symptoms; you suspect specific plant foods are causing problems; or you simply want maximum simplicity. Carnivore is often the next logical step when low carb isn\'t producing the desired results.' },
      { q: 'How long should you try low carb before trying carnivore?', a: 'Give low carb a genuine 60-90 day trial before switching. Many people don\'t give dietary approaches enough time to fully adapt. If you\'ve been truly low carb (under 50g/day) for 90 days without the results you want, that\'s a reasonable time to consider carnivore.' },
      { q: 'Does carnivore help with blood sugar better than low carb?', a: 'Yes, significantly. Carnivore produces near-zero glucose from food, which minimizes insulin response to an extreme degree. Low carb reduces glucose response substantially from standard eating, but even 50-100g of carbohydrates still produces some insulin response. For type 2 diabetes and insulin resistance, carnivore typically produces faster and more dramatic improvements.' },
    ],
  },

  'carnivore-vs-vegan': {
    title: 'Carnivore Diet vs Vegan Diet 2025 | Opposite Extremes Compared | CarnivoreCalc',
    description: 'Carnivore vs vegan: the two most extreme dietary approaches compared. Macros, nutrients, environmental impact, and who thrives on each. An honest comparison.',
    keywords: ['carnivore vs vegan', 'carnivore diet vs vegan diet', 'is carnivore or vegan healthier', 'meat only vs plant only diet', 'carnivore vegan comparison 2025'],
    h1: 'Carnivore Diet vs Vegan Diet: The Two Extremes',
    emoji: '🥩🌱',
    intro: 'Carnivore and vegan are the opposite ends of the dietary spectrum — one eats only animals, the other eats nothing from animals. It\'s a fascinating comparison because both have passionate advocates, real success stories, and real failure rates. The truth: both can work for some people and fail for others. Understanding why requires looking at how each diet affects your specific biochemistry, goals, and health conditions.',
    quickVerdict: { winner: 'Carnivore for metabolic and autoimmune; Vegan for certain cardiovascular markers', reason: 'Carnivore consistently outperforms vegan for weight loss, blood sugar, and autoimmune conditions. Vegan can outperform for certain cholesterol markers and has environmental advantages. Neither works universally well for everyone.' },
    otherDietName: 'Vegan',
    comparison: [
      { category: 'Weight loss results', carnivore: 'Typically faster, more consistent', other: 'Variable — can work well or poorly', winner: 'carnivore' },
      { category: 'Blood sugar control', carnivore: 'Near-zero glucose from food', other: 'Can worsen with high-carb plant foods', winner: 'carnivore' },
      { category: 'Protein bioavailability', carnivore: 'Highest — complete animal proteins', other: 'Lower — requires careful combining', winner: 'carnivore' },
      { category: 'Vitamin B12', carnivore: 'Abundant in animal foods', other: 'Must supplement — not in plant foods', winner: 'carnivore' },
      { category: 'Saturated fat & cholesterol', carnivore: 'High — may raise LDL', other: 'Very low', winner: 'other' },
      { category: 'Fiber & gut microbiome', carnivore: 'Zero fiber — changes microbiome significantly', other: 'High fiber — diverse plant microbiome', winner: 'other' },
      { category: 'Autoimmune conditions', carnivore: 'Strong evidence of improvement', other: 'Mixed evidence — some improve, some worsen', winner: 'carnivore' },
      { category: 'Environmental impact', carnivore: 'Higher carbon footprint per calorie', other: 'Lower carbon footprint typically', winner: 'other' },
    ],
    carnivoreAdvantages: [
      'Complete protein with all essential amino acids in optimal ratios',
      'Abundant bioavailable B12, iron, zinc, and omega-3s',
      'Near-zero glucose response — ideal for blood sugar and insulin management',
      'Eliminates all plant compounds that can cause immune activation',
      'Strong evidence for autoimmune condition improvement',
      'Typically produces faster weight loss and body composition changes',
    ],
    otherAdvantages: [
      'Typically lower in saturated fat — beneficial for some cardiovascular risk profiles',
      'High fiber supports certain gut bacteria populations',
      'Lower environmental impact for those who prioritize that factor',
      'Rich in plant antioxidants and polyphenols',
      'Can reduce certain cancer risk markers (though evidence is mixed)',
      'May improve certain cardiovascular markers (LDL-C, though context matters)',
    ],
    whoShouldChooseCarnivore: [
      'You have type 2 diabetes, insulin resistance, or metabolic syndrome',
      'You have autoimmune conditions (IBD, Hashimoto\'s, rheumatoid arthritis)',
      'You\'ve tried vegan and experienced nutritional deficiencies or worsening health',
      'You need to lose significant weight and haven\'t succeeded on other approaches',
      'You have documented plant food sensitivities or allergies',
    ],
    whoShouldChooseOther: [
      'You have strong ethical or environmental motivations for veganism',
      'You have familial hypercholesterolemia or specific cardiovascular conditions requiring low saturated fat',
      'You thrive on plant foods and have excellent energy, body composition, and health markers',
      'You prefer plant-based cooking and cuisine',
      'You have no metabolic or autoimmune conditions that carnivore specifically addresses',
    ],
    canYouCombine: 'These two approaches are genuinely incompatible — you cannot be both carnivore and vegan. However, some people use carnivore as a temporary therapeutic intervention (30-90 days) even if their philosophical leanings are toward plant-based eating. The goal would be to address a specific health condition, then transition to a less extreme animal-inclusive approach.',
    macroComparison: [
      { metric: 'Protein (% calories)', carnivore: '30–35%', other: '10–15%' },
      { metric: 'Fat (% calories)', carnivore: '65–70%', other: '15–30%' },
      { metric: 'Carbohydrates', carnivore: '<5g/day', other: '50–70% of calories' },
      { metric: 'Fiber', carnivore: '0g', other: '40–60g/day' },
      { metric: 'B12 supplementation', carnivore: 'Not needed', other: 'Required' },
    ],
    faq: [
      { q: 'Is carnivore or vegan healthier?', a: 'Neither is universally healthier — it depends on the individual\'s genetics, health conditions, and goals. Carnivore outperforms vegan for blood sugar, insulin resistance, and autoimmune conditions. Vegan may outperform for certain cholesterol markers and environmental impact. Both can produce excellent health outcomes in the right person; both can cause deficiencies or decline in the wrong person.' },
      { q: 'Can you get all nutrients on a carnivore diet without plants?', a: 'Yes, if you include organ meats — particularly liver. Liver is the most nutrient-dense food on earth and provides vitamins A, B12, folate, iron, copper, and zinc in highly bioavailable forms. A carnivore diet without organ meats requires more careful planning. A carnivore diet that includes liver regularly (2-3x per week) typically covers all nutritional needs.' },
      { q: 'What about fiber on carnivore — don\'t you need it?', a: 'This is one of the most debated questions in nutrition. Conventional wisdom says fiber is essential for gut health. Carnivore advocates argue that gut health can be excellent without fiber — the microbiome adapts to digest proteins and fats rather than plant fiber. Short-term carnivore trials show mixed gut microbiome results; long-term data is limited. Many carnivore dieters report improved gut symptoms despite zero fiber.' },
      { q: 'Do vegans or carnivore dieters lose more weight?', a: 'Carnivore dieters typically lose weight faster in the short term, primarily due to very low carbohydrate intake reducing water retention and insulin levels. Both diets can produce long-term weight loss when maintained consistently. The "best" weight loss diet is the one a person can actually adhere to — which varies enormously by individual.' },
    ],
  },

  'carnivore-vs-mediterranean': {
    title: 'Carnivore Diet vs Mediterranean Diet 2025 | CarnivoreCalc',
    description: 'Carnivore vs Mediterranean diet: comparing the two most debated ancestral diets. Macros, food lists, health outcomes, and who each approach works best for.',
    keywords: ['carnivore vs mediterranean diet', 'carnivore diet vs mediterranean', 'is carnivore better than mediterranean', 'high fat vs mediterranean diet comparison', 'carnivore mediterranean which is healthier'],
    h1: 'Carnivore Diet vs Mediterranean Diet: Ancestral Eating Compared',
    emoji: '🥩🫒',
    intro: 'Both the carnivore diet and the Mediterranean diet claim inspiration from ancestral eating patterns — but they land on very different conclusions. The Mediterranean diet emphasizes fish, olive oil, vegetables, legumes, and whole grains from the coastal Mediterranean. Carnivore looks to pre-agricultural human ancestors and concludes that animals were the foundation of the optimal diet. Both have devoted communities and real evidence. The comparison is more interesting than most dietary debates because both frameworks are internally consistent.',
    quickVerdict: { winner: 'Mediterranean for general population; Carnivore for metabolic and autoimmune', reason: 'Mediterranean has the strongest evidence base of any dietary pattern and works well for general cardiovascular health. Carnivore outperforms for blood sugar control, weight loss speed, and autoimmune conditions.' },
    otherDietName: 'Mediterranean',
    comparison: [
      { category: 'Evidence base', carnivore: 'Emerging — limited long-term RCTs', other: 'Decades of large-scale observational studies', winner: 'other' },
      { category: 'Blood sugar control', carnivore: 'Excellent — near-zero carb', other: 'Moderate — whole grains and legumes included', winner: 'carnivore' },
      { category: 'Cardiovascular markers', carnivore: 'Variable — LDL may rise', other: 'Generally favorable', winner: 'other' },
      { category: 'Weight loss speed', carnivore: 'Faster initial loss', other: 'Moderate, sustainable weight management', winner: 'carnivore' },
      { category: 'Anti-inflammatory', carnivore: 'Eliminates all plant irritants', other: 'Anti-inflammatory from olive oil, fish, vegetables', winner: 'tie' },
      { category: 'Sustainability / lifestyle', carnivore: 'Difficult for most long-term', other: 'One of the most sustainable dietary patterns', winner: 'other' },
      { category: 'Social flexibility', carnivore: 'Very limited', other: 'Excellent — works at most restaurants worldwide', winner: 'other' },
      { category: 'Autoimmune conditions', carnivore: 'Strong benefit from elimination approach', other: 'Mild benefit from anti-inflammatory foods', winner: 'carnivore' },
    ],
    carnivoreAdvantages: [
      'Superior blood sugar and insulin management with near-zero carbohydrates',
      'Faster weight loss and body composition changes',
      'Eliminates all potential food sensitivities systematically',
      'More effective for autoimmune and inflammatory conditions',
      'Maximum simplicity — no recipe or variety needed',
      'Deeper, more consistent ketosis',
    ],
    otherAdvantages: [
      'Strongest evidence base of any dietary pattern in nutrition science',
      'Excellent long-term sustainability and quality of life',
      'Favorable cardiovascular markers — particularly LDL and triglycerides',
      'Social and cultural compatibility — works worldwide',
      'Rich in polyphenols, antioxidants, and plant micronutrients',
      'Associated with longevity in multiple Blue Zone populations',
    ],
    whoShouldChooseCarnivore: [
      'You have type 2 diabetes or significant insulin resistance needing aggressive management',
      'You have autoimmune conditions where elimination is therapeutic',
      'You\'ve tried Mediterranean and still have inflammation or weight issues',
      'You prefer radical simplicity over dietary variety',
      'You want to identify food sensitivities through elimination',
    ],
    whoShouldChooseOther: [
      'You want a sustainable, enjoyable long-term lifestyle with evidence backing',
      'You have good metabolic health and want to maintain it',
      'You value food culture, variety, and social eating',
      'You have favorable cardiovascular risk factors to protect',
      'You thrive on vegetables, fish, and olive oil as dietary staples',
    ],
    canYouCombine: 'You can use elements of both — a "Mediterranean carnivore" approach might emphasize fish, olive oil, and some fermented dairy while eliminating grains and legumes. This isn\'t either diet strictly, but can work as a middle path. Some people use carnivore as a 30-day intervention and then adopt a Mediterranean-paleo hybrid as their long-term pattern.',
    macroComparison: [
      { metric: 'Protein (% calories)', carnivore: '30–35%', other: '15–20%' },
      { metric: 'Fat (% calories)', carnivore: '65–70%', other: '35–40%' },
      { metric: 'Carbohydrates', carnivore: '<5g/day', other: '45–55% of calories' },
      { metric: 'Fiber', carnivore: '0g', other: '25–35g/day' },
      { metric: 'Primary fat source', carnivore: 'Animal fats (tallow, lard)', other: 'Olive oil, fish' },
    ],
    faq: [
      { q: 'Is the carnivore diet or Mediterranean diet better for heart health?', a: 'Mediterranean has significantly more evidence for cardiovascular health, and most cardiologists would recommend it over carnivore. However, "heart health" is more nuanced than LDL-C alone — carnivore often improves triglycerides, HDL, blood pressure, and insulin resistance, all of which are cardiovascular risk factors. If you have familial hypercholesterolemia or significantly elevated LDL, Mediterranean is the safer choice.' },
      { q: 'Which diet is associated with longer life?', a: 'The Mediterranean diet has the most population-level evidence for longevity, particularly from Blue Zone research and large observational studies. Carnivore is too new to have long-term population health data. Many longest-lived populations globally ate predominantly plant-based diets with small amounts of fish and animal foods — closer to Mediterranean than carnivore.' },
      { q: 'Can carnivore diet be anti-inflammatory like Mediterranean?', a: 'Yes, but through different mechanisms. Mediterranean uses plant polyphenols and omega-3 fatty acids to reduce inflammation. Carnivore eliminates all potential inflammatory triggers from plant foods. Both can produce low-inflammation states, but they get there differently. For people who react to specific plant compounds, carnivore can be more powerfully anti-inflammatory despite having fewer "anti-inflammatory foods."' },
      { q: 'What does the science say about carnivore vs Mediterranean?', a: 'Mediterranean has decades of large-scale evidence including randomized controlled trials. Carnivore has a growing body of case reports, smaller studies, and anecdotal evidence, but lacks the large RCTs that Mediterranean has accumulated. This doesn\'t mean carnivore doesn\'t work — it means the evidence hierarchy currently favors Mediterranean for those who need high certainty from clinical data.' },
    ],
  },

  'carnivore-vs-intermittent-fasting': {
    title: 'Carnivore Diet vs Intermittent Fasting 2025 | Better Together? | CarnivoreCalc',
    description: 'Carnivore vs intermittent fasting: which produces better results? Can you combine them? Comparing weight loss, metabolic effects, and who each approach works best for.',
    keywords: ['carnivore vs intermittent fasting', 'carnivore diet and intermittent fasting', 'can you do carnivore and IF together', 'carnivore intermittent fasting results', 'OMAD carnivore comparison'],
    h1: 'Carnivore Diet vs Intermittent Fasting: Better Apart or Together?',
    emoji: '🥩⏱️',
    intro: 'Carnivore and intermittent fasting (IF) are not opposites — they\'re often stacked together. Carnivore defines what you eat; IF defines when you eat. Many carnivore practitioners naturally fall into an IF pattern because high protein and fat meals produce strong satiety that extends the time between meals. The comparison is less "which is better?" and more "how do these two tools interact, and when should you use each?"',
    quickVerdict: { winner: 'Carnivore + IF combined', reason: 'For most people, combining carnivore with a natural eating window (16:8 or OMAD) produces the best results. Carnivore alone outperforms IF alone for food sensitivity and autoimmune work. IF alone outperforms for those who eat well but need to manage eating windows.' },
    otherDietName: 'Intermittent Fasting',
    comparison: [
      { category: 'Ketosis induction', carnivore: 'Fast and deep from diet alone', other: 'Only during fasting window — not during eating', winner: 'carnivore' },
      { category: 'Metabolic flexibility', carnivore: 'Very high — fat-adapted metabolism', other: 'Good — time-restricted feeding improves insulin', winner: 'carnivore' },
      { category: 'Autophagy (cellular cleanup)', carnivore: 'Moderate — protein stimulates mTOR', other: 'Higher during fasting windows', winner: 'other' },
      { category: 'Muscle preservation', carnivore: 'Excellent — high protein prevents muscle loss', other: 'Can risk muscle loss with extended fasts', winner: 'carnivore' },
      { category: 'Ease of compliance', carnivore: 'High satiety makes compliance natural', other: 'Hunger management during fasting window', winner: 'carnivore' },
      { category: 'Gut healing', carnivore: 'Strong — eliminates food triggers', other: 'Moderate — rest period benefits gut', winner: 'carnivore' },
      { category: 'Cognitive flexibility', carnivore: 'No eating window restriction', other: 'Requires managing eating schedule', winner: 'carnivore' },
      { category: 'Longevity pathways', carnivore: 'Moderate — some mTOR activation', other: 'Strong — activates autophagy and AMPK', winner: 'other' },
    ],
    carnivoreAdvantages: [
      'Addresses what you eat — important when food quality is the problem',
      'Eliminates food sensitivities and inflammatory triggers',
      'High protein preserves muscle mass better than fasting-only approaches',
      'Deep, consistent ketosis without requiring fasting periods',
      'No hunger management required — satiety is built into the diet',
      'More effective for autoimmune and gut conditions than IF alone',
    ],
    otherAdvantages: [
      'Doesn\'t require changing what you eat — only when',
      'Activates autophagy (cellular cleanup) more strongly than eating windows',
      'Can work with any dietary approach including standard diets',
      'Reduces total caloric intake naturally for many people',
      'More research on longevity mechanisms (AMPK, mTOR modulation)',
      'Easier entry point — most people find a 16:8 window easier than carnivore',
    ],
    whoShouldChooseCarnivore: [
      'You eat within a normal time window but your food choices are the problem',
      'You have gut issues, autoimmune conditions, or food sensitivities',
      'You need to eliminate potential dietary triggers systematically',
      'You need to build a foundation of metabolic health before addressing timing',
      'Hunger is not a primary issue for you — what you eat is the issue',
    ],
    whoShouldChooseOther: [
      'Your diet is already reasonably clean but you eat too frequently',
      'You want to activate autophagy for longevity benefits',
      'You want to lose weight through caloric reduction without changing food choices',
      'You already feel good and want to add a metabolic tool without radical dietary change',
      'You respond well to time-restricted eating and don\'t have food sensitivity issues',
    ],
    canYouCombine: 'Absolutely — and most serious carnivore practitioners do combine them. Carnivore naturally produces satiety that extends to 16:8, 18:6, or OMAD (One Meal A Day) patterns. OMAD carnivore is one of the most powerful combinations for weight loss and metabolic reset: eating one large meal of meat, organs, and fat per day within a 1-2 hour window. The combination produces both the food-quality benefits of carnivore and the timing benefits of fasting.',
    macroComparison: [
      { metric: 'Eating window', carnivore: 'Typically 8–16 hours (unrestricted)', other: '4–8 hours typically (16:8 to 20:4)' },
      { metric: 'Meal frequency', carnivore: '1–3 meals/day naturally', other: '1–2 meals within window' },
      { metric: 'Ketosis timing', carnivore: 'Continuous (diet-induced)', other: 'During fasting window only' },
      { metric: 'Caloric intake effect', carnivore: 'Satiety reduces intake naturally', other: 'Window restriction reduces intake' },
      { metric: 'Best combination', carnivore: 'Carnivore + 16:8 or OMAD', other: 'IF + whole food or carnivore' },
    ],
    faq: [
      { q: 'Does carnivore naturally lead to intermittent fasting?', a: 'Often yes. High-protein, high-fat carnivore meals produce very strong satiety that naturally extends the time between meals. Many carnivore dieters find themselves eating only 1-2 meals per day without deliberately trying to fast — the satiety from meat simply doesn\'t require eating as frequently as carbohydrate-based diets.' },
      { q: 'What is OMAD carnivore?', a: 'OMAD (One Meal A Day) carnivore means eating all daily calories in one large meal of animal foods. This is one of the most effective combinations for weight loss and metabolic reset: you get the food quality benefits of carnivore plus the maximum fasting window of OMAD. It requires eating a large, nutrient-dense meal — typically 1.5-2 lbs of fatty meat, some organs, and possibly eggs.' },
      { q: 'Can you break a carnivore fast with anything?', a: 'When breaking a fast on carnivore, stick to easy-to-digest animal foods: eggs, fatty fish, or lean meat are good options. Avoid breaking a fast with large amounts of liver or tough red meat immediately — digestion works better when eased back in. Keep dairy minimal when first eating after a fasting window if you have any dairy sensitivity.' },
      { q: 'Is intermittent fasting unnecessary on carnivore?', a: 'Not unnecessary — but often natural. The combination produces synergistic benefits. Even without deliberately fasting, many carnivore dieters end up in a de facto intermittent fasting pattern. If you add deliberate fasting windows to carnivore, you can enhance autophagy, accelerate fat loss, and improve insulin sensitivity beyond what carnivore alone produces.' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = comparisons[slug]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://carnivorecalc.com/compare/${slug}`,
      siteName: 'CarnivoreCalc',
      type: 'website',
    },
  }
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = comparisons[slug]
  if (!page) notFound()

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="font-bold text-lg text-white">CarnivoreCalc</Link>
          <div className="flex items-center gap-4 text-sm text-stone-400">
            <Link href="/compare" className="hover:text-white transition-colors">Comparisons</Link>
            <Link href="/goals" className="hover:text-white transition-colors">By Goal</Link>
            <Link href="/" className="bg-red-600 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg transition-colors font-medium text-sm">
              Free Calculator
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">{page.emoji}</div>
          <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-800/50 rounded-full px-4 py-1.5 text-sm text-red-300 mb-5">
            <Link href="/compare" className="hover:text-white transition-colors">Diet Comparisons</Link>
            <span>›</span>
            <span>Carnivore vs {page.otherDietName}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">{page.h1}</h1>
          <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto">{page.intro}</p>
        </div>

        {/* Quick verdict */}
        <div className="bg-stone-800/60 border border-stone-600 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-white mb-2">⚡ Quick Verdict</h2>
          <p className="text-red-300 font-semibold mb-1">{page.quickVerdict.winner}</p>
          <p className="text-stone-400 text-sm">{page.quickVerdict.reason}</p>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5 text-center">Head-to-Head Comparison</h2>
          <div className="bg-stone-900/60 border border-stone-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="px-4 py-3 text-left text-stone-400 text-xs uppercase">Category</th>
                    <th className="px-4 py-3 text-left text-red-400 text-xs uppercase">🥩 Carnivore</th>
                    <th className="px-4 py-3 text-left text-stone-300 text-xs uppercase">🔄 {page.otherDietName}</th>
                    <th className="px-4 py-3 text-center text-stone-400 text-xs uppercase">Edge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800">
                  {page.comparison.map((row) => (
                    <tr key={row.category} className="hover:bg-stone-800/50">
                      <td className="px-4 py-3 text-stone-300 font-medium text-xs">{row.category}</td>
                      <td className="px-4 py-3 text-stone-400 text-xs">{row.carnivore}</td>
                      <td className="px-4 py-3 text-stone-400 text-xs">{row.other}</td>
                      <td className="px-4 py-3 text-center">
                        {row.winner === 'carnivore' && <span className="text-red-400 text-xs font-medium">🥩 Carnivore</span>}
                        {row.winner === 'other' && <span className="text-blue-400 text-xs font-medium">{page.otherDietName}</span>}
                        {row.winner === 'tie' && <span className="text-stone-400 text-xs">Tie</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Macro comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5 text-center">Macro Comparison</h2>
          <div className="bg-stone-900/60 border border-stone-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-700">
                    <th className="px-4 py-3 text-left text-stone-400 text-xs uppercase">Metric</th>
                    <th className="px-4 py-3 text-left text-red-400 text-xs uppercase">🥩 Carnivore</th>
                    <th className="px-4 py-3 text-left text-stone-300 text-xs uppercase">{page.otherDietName}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800">
                  {page.macroComparison.map((row) => (
                    <tr key={row.metric} className="hover:bg-stone-800/50">
                      <td className="px-4 py-3 text-stone-300 font-medium text-sm">{row.metric}</td>
                      <td className="px-4 py-3 text-red-300 text-sm">{row.carnivore}</td>
                      <td className="px-4 py-3 text-stone-400 text-sm">{row.other}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-stone-900/50 border border-red-900/40 rounded-2xl p-6">
            <h3 className="font-bold text-red-400 mb-4">🥩 Why Carnivore Wins Here</h3>
            <ul className="space-y-2">
              {page.carnivoreAdvantages.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-stone-300">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">+</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-900/50 border border-blue-900/40 rounded-2xl p-6">
            <h3 className="font-bold text-blue-400 mb-4">Why {page.otherDietName} Has Advantages</h3>
            <ul className="space-y-2">
              {page.otherAdvantages.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-stone-300">
                  <span className="text-blue-400 flex-shrink-0 mt-0.5">+</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who should choose which */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-stone-900/50 border border-stone-700 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Choose Carnivore if...</h3>
            <ul className="space-y-2">
              {page.whoShouldChooseCarnivore.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-400">
                  <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-900/50 border border-stone-700 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4">Choose {page.otherDietName} if...</h3>
            <ul className="space-y-2">
              {page.whoShouldChooseOther.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-400">
                  <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Can you combine */}
        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-3">🔄 Can You Combine Them?</h2>
          <p className="text-stone-400 text-sm leading-relaxed">{page.canYouCombine}</p>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-5 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <div key={item.q} className="bg-stone-900/60 border border-stone-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-sm">{item.q}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-stone-800/50 border border-stone-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Calculate Your Carnivore Macros Free</h2>
          <p className="text-stone-400 text-sm mb-6">Know exactly how much protein and fat you need — takes 30 seconds.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors">
            Use the Free Macro Calculator →
          </Link>
          <p className="text-stone-600 text-xs mt-3">
            Also: <Link href="/compare" className="underline hover:text-stone-400">More comparisons</Link>
            {' · '}
            <Link href="/goals" className="underline hover:text-stone-400">Calculator by goal</Link>
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-600 text-xs">
          <p>© 2025 CarnivoreCalc · Not medical advice · Consult a healthcare provider</p>
        </footer>
      </div>
    </main>
  )
}
