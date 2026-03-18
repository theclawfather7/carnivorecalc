export interface GoalData {
  slug: string
  title: string
  description: string
  keywords: string
  h1: string
  subtitle: string
  goal: string // maps to calculator goal
  proteinMultiplier: number
  fatMultiplier: number
  intro: string
  whyWorks: string[]
  tips: string[]
  faqs: { q: string; a: string }[]
  benchmarks: {
    example: string
    calories: number
    proteinG: number
    fatG: number
  }[]
  cta: string
}

export const goals: GoalData[] = [
  {
    slug: 'weight-loss',
    title: 'Carnivore Diet for Weight Loss Calculator | CarnivoreCalc',
    description: 'Free carnivore diet weight loss calculator. Get your exact protein and fat targets to lose weight on the carnivore diet — no guessing required.',
    keywords: 'carnivore diet for weight loss, carnivore weight loss calculator, how much to eat on carnivore to lose weight, carnivore diet fat loss',
    h1: 'Carnivore Diet Weight Loss Calculator',
    subtitle: 'Find your exact macros to lose fat on the carnivore diet — without counting calories or going hungry.',
    goal: 'Weight Loss',
    proteinMultiplier: 1.0,
    fatMultiplier: 0.7,
    intro: `The carnivore diet is one of the most effective tools for fat loss — but only if you eat the right amounts. Too much fat and you stall. Too little protein and you lose muscle. This calculator gives you the exact targets for your body weight and activity level so you can lose fat confidently on the carnivore diet.`,
    whyWorks: [
      'Carnivore eliminates all carbohydrates, forcing your body into fat-burning mode (ketosis)',
      'Protein is the most satiating macronutrient — carnivore keeps you full for hours',
      'No blood sugar spikes means no cravings or afternoon crashes',
      'Eating only animal foods naturally reduces calorie intake without counting anything',
      'High protein intake preserves lean muscle mass while in a caloric deficit',
    ],
    tips: [
      'For weight loss, prioritize leaner cuts like sirloin, chicken, and ground beef 85/15 or 90/10',
      'Keep fat slightly lower than your calculator result — let your body burn stored body fat for the difference',
      'Eat 2 meals per day (no snacking) to let insulin drop between meals',
      'Add salt and electrolytes — keto flu is usually just sodium depletion',
      'Weigh yourself weekly, not daily — weight fluctuates ±3-5 lbs due to water retention',
    ],
    faqs: [
      {
        q: 'How fast will I lose weight on carnivore?',
        a: 'Most people lose 1-2 lbs per week after the first week (which drops 5-10 lbs of water weight). Individual results depend on your starting weight, activity level, and how strictly you stick to the diet.',
      },
      {
        q: 'Should I count calories on carnivore for weight loss?',
        a: 'Most people don\'t need to count calories on carnivore — protein and fat naturally regulate appetite. However, if you\'re stalling, tracking for 1-2 weeks can reveal if you\'re overeating fat. Use this calculator to know your ballpark targets.',
      },
      {
        q: 'Can I eat too much on carnivore and not lose weight?',
        a: 'Yes. Carnivore is not magic — calories still matter. The advantage is that carnivore naturally suppresses appetite, making it hard to overeat. But if you\'re adding excessive butter, eating back-to-back meals, or drinking heavy cream all day, you can stall.',
      },
      {
        q: 'What\'s the best carnivore cut for weight loss?',
        a: 'Lean-to-moderate cuts work best: sirloin, ground beef 85/15, chicken thighs, and salmon. Ribeye every meal is great for maintenance — for fat loss, dial back the pure fat a bit.',
      },
    ],
    benchmarks: [
      { example: '200 lb sedentary woman (fat loss)', calories: 1580, proteinG: 91, fatG: 97 },
      { example: '220 lb moderately active man (fat loss)', calories: 2310, proteinG: 100, fatG: 141 },
      { example: '175 lb lightly active woman (fat loss)', calories: 1780, proteinG: 79, fatG: 109 },
    ],
    cta: 'Get your exact weight loss macros',
  },
  {
    slug: 'muscle-gain',
    title: 'Carnivore Diet for Muscle Gain Calculator | CarnivoreCalc',
    description: 'Build muscle on the carnivore diet. Calculate your protein and fat targets for maximum muscle growth — without carbs or supplements.',
    keywords: 'carnivore diet muscle gain, carnivore diet for building muscle, carnivore bulking calculator, how much protein on carnivore for muscle',
    h1: 'Carnivore Diet Muscle Building Calculator',
    subtitle: 'Calculate your exact protein and fat targets to build muscle on the carnivore diet — no carbs, no supplements, just meat.',
    goal: 'Muscle Gain',
    proteinMultiplier: 1.4,
    fatMultiplier: 0.9,
    intro: `You can absolutely build muscle on the carnivore diet — in fact, animal protein is the highest-quality protein source available. The key is eating enough protein (which most people underestimate) and enough total calories to support muscle growth. This calculator gives you the exact targets for your weight and training level.`,
    whyWorks: [
      'Animal protein has the highest bioavailability of any protein source (~95% vs ~70% for plant proteins)',
      'Red meat is rich in creatine — the same compound in popular pre-workout supplements',
      'Cholesterol and saturated fat from meat support testosterone production',
      'Beef contains leucine, the amino acid that triggers muscle protein synthesis',
      'No inflammation from plant toxins means faster recovery between workouts',
    ],
    tips: [
      'For muscle gain, eat more — aim for the higher end of your calorie range',
      'Ground beef 70/30 or ribeye are great for bulking: high protein + high calories',
      'Eat 3 meals per day (vs 2 for weight loss) to maintain positive nitrogen balance',
      'Post-workout protein matters — eat a substantial meal within 2 hours of training',
      'Track total protein consumed — it\'s easy to undereat protein when eating fatty cuts',
    ],
    faqs: [
      {
        q: 'How much protein do I need to build muscle on carnivore?',
        a: 'Research suggests 0.7-1g of protein per pound of body weight for muscle gain. On carnivore, this usually means eating 1.4x your body weight in kilograms in grams of protein. This calculator sets your target automatically based on your weight and goals.',
      },
      {
        q: 'Can you build muscle without carbs on carnivore?',
        a: 'Yes. Carbohydrates are not required for muscle growth. Protein provides the building blocks (amino acids) and your body can synthesize glycogen from gluconeogenesis. Many athletes and bodybuilders have built impressive physiques on carnivore/zero carb.',
      },
      {
        q: 'Should I eat fat or protein to build muscle on carnivore?',
        a: 'Prioritize protein first — muscle is built from amino acids, not fat. Then add enough fat to hit your calorie targets. For most people, this means a 60/40 protein-to-fat calorie split on carnivore while bulking.',
      },
      {
        q: 'What\'s the best carnivore food for muscle gain?',
        a: 'Ground beef (80/20), ribeye, New York strip, eggs, and salmon are the best for muscle building. Organ meats like liver add micronutrients that support anabolic processes. Whole eggs are calorie-dense and packed with muscle-building nutrients.',
      },
    ],
    benchmarks: [
      { example: '180 lb moderately active man (bulking)', calories: 3200, proteinG: 140, fatG: 196 },
      { example: '145 lb woman (lean muscle gain)', calories: 2200, proteinG: 101, fatG: 135 },
      { example: '200 lb very active man (hard training)', calories: 3800, proteinG: 151, fatG: 233 },
    ],
    cta: 'Calculate your muscle-building macros',
  },
  {
    slug: 'women',
    title: 'Carnivore Diet for Women Calculator | CarnivoreCalc',
    description: 'Carnivore diet macros tailored for women. Calculate your protein and fat targets based on your goals, weight, and activity level.',
    keywords: 'carnivore diet for women, carnivore diet women weight loss, carnivore diet women over 40, carnivore macros for women',
    h1: 'Carnivore Diet Calculator for Women',
    subtitle: 'Get your personalized carnivore macros — sized for women\'s bodies, hormones, and health goals.',
    goal: 'Weight Loss',
    proteinMultiplier: 1.0,
    fatMultiplier: 0.75,
    intro: `Women have different hormonal profiles, different muscle mass distributions, and different caloric needs than men. A generic calculator won't cut it. This page walks you through the carnivore diet for women specifically — including how it affects hormones, weight loss, and energy — plus a calculator to get your exact targets.`,
    whyWorks: [
      'Carnivore naturally lowers insulin, which is critical for women with PCOS and insulin resistance',
      'Animal fats support estrogen and progesterone balance — critical for hormonal health',
      'Eliminating plant toxins can reduce endometriosis, bloating, and menstrual symptoms',
      'High protein intake on carnivore prevents muscle loss during menopause',
      'Consistent energy levels eliminate PMS-related mood swings driven by blood sugar crashes',
    ],
    tips: [
      'Women generally need fewer calories than men of the same weight — trust your hunger cues',
      'If your cycle is disrupted early on, add more fat to your diet temporarily',
      'Liver once a week provides the iron, folate, and B12 critical for women\'s health',
      'Don\'t under-eat — chronic caloric restriction raises cortisol and impairs thyroid function',
      'Track your cycle: many women report dramatic menstrual improvements within 2-3 months',
    ],
    faqs: [
      {
        q: 'Is the carnivore diet safe for women hormonally?',
        a: 'For most women, yes. Animal fats provide the cholesterol needed to synthesize sex hormones. Many women report improved cycles, reduced PMS, and better energy. However, women with specific thyroid conditions should work with a doctor before making major dietary changes.',
      },
      {
        q: 'Will carnivore help women lose belly fat?',
        a: 'Yes. Belly fat in women is often driven by elevated cortisol and insulin. Carnivore lowers both by eliminating carbohydrates and reducing inflammatory foods. Most women see significant waist reduction within 4-8 weeks.',
      },
      {
        q: 'How much should a woman eat on carnivore?',
        a: 'It depends on weight, height, and activity level — which is why you should use the calculator above. A rough starting point for a 150 lb moderately active woman is 1,800-2,100 calories, 80-100g protein, and 110-130g fat.',
      },
      {
        q: 'Can women over 40 do the carnivore diet?',
        a: 'Absolutely. Many women find carnivore especially effective after 40 when estrogen declines and insulin sensitivity decreases. The high protein and fat content supports muscle preservation and hormonal balance during perimenopause and beyond.',
      },
    ],
    benchmarks: [
      { example: '140 lb sedentary woman (fat loss)', calories: 1450, proteinG: 64, fatG: 89 },
      { example: '165 lb moderately active woman (maintenance)', calories: 2100, proteinG: 75, fatG: 129 },
      { example: '180 lb active woman (muscle gain)', calories: 2600, proteinG: 114, fatG: 160 },
    ],
    cta: 'Get your personalized carnivore macros',
  },
  {
    slug: 'beginners',
    title: 'Carnivore Diet for Beginners Calculator | CarnivoreCalc',
    description: 'Just starting the carnivore diet? Get your exact protein and fat targets plus a simple beginner guide to getting started right.',
    keywords: 'carnivore diet for beginners, how to start carnivore diet, carnivore diet beginner guide, carnivore diet what to eat to start',
    h1: 'Carnivore Diet Beginner Calculator',
    subtitle: 'Calculate your starting macros and learn exactly how to do carnivore diet correctly from day one.',
    goal: 'Maintenance',
    proteinMultiplier: 1.2,
    fatMultiplier: 0.85,
    intro: `Starting the carnivore diet doesn't have to be complicated. Eat meat. Salt your food. Drink water. That's essentially it. But knowing your specific targets — how much protein, how much fat — removes all the guesswork and dramatically increases your chances of sticking with it past the first week.`,
    whyWorks: [
      'Carnivore is the simplest diet that exists — no macros to count, no labels to read',
      'Animal foods provide every nutrient your body needs (despite what you\'ve heard)',
      'Most people feel dramatically better within 2-4 weeks once fat adaptation kicks in',
      'Eliminating processed food and seed oils alone explains much of the benefit',
      'High satiety means you naturally eat less without feeling deprived',
    ],
    tips: [
      'Start with just beef, salt, and water for the first 30 days — then experiment',
      'Eat until full. Don\'t restrict. Your hunger will naturally calibrate after 2-3 weeks.',
      'Expect 3-7 days of "keto flu" — fatigue, headaches, brain fog. It passes.',
      'Salt aggressively — you lose sodium faster when eliminating carbs',
      'Organ meats (especially liver) once a week = no supplements needed',
    ],
    faqs: [
      {
        q: 'What do I eat on day 1 of carnivore?',
        a: 'Ribeye or ground beef for breakfast, lunch, and dinner. That\'s it. Add salt. Drink water. The simpler you start, the easier the adaptation. Don\'t overthink the first week — just eliminate everything except meat.',
      },
      {
        q: 'How long does it take to adapt to the carnivore diet?',
        a: 'Most people feel rough the first 3-7 days (keto flu). By week 2, energy starts returning. Full fat adaptation typically takes 4-8 weeks. The first month is the hardest — after that, most people feel better than they ever have.',
      },
      {
        q: 'Do I need supplements on the carnivore diet?',
        a: 'No — if you eat organ meats. Beef liver weekly provides vitamin A, B vitamins, iron, zinc, and copper. Fatty fish provides omega-3s. If you\'re not eating organs, a beef organ supplement is the one thing worth considering.',
      },
      {
        q: 'How often should I eat on carnivore?',
        a: 'Most people naturally settle into 2 meals per day on carnivore. The high protein and fat keep you full for 4-6 hours. Don\'t force three meals if you\'re not hungry — let your body adapt.',
      },
    ],
    benchmarks: [
      { example: '185 lb sedentary beginner (starting out)', calories: 2000, proteinG: 100, fatG: 123 },
      { example: '155 lb moderately active beginner', calories: 2300, proteinG: 84, fatG: 141 },
      { example: '210 lb active beginner (learning)', calories: 3000, proteinG: 114, fatG: 184 },
    ],
    cta: 'Calculate your beginner carnivore macros',
  },
  {
    slug: 'lion-diet',
    title: 'Lion Diet Calculator | CarnivoreCalc',
    description: 'The lion diet calculator — get your exact beef, salt, and water macros for the strictest form of the carnivore diet.',
    keywords: 'lion diet calculator, lion diet macros, lion diet protein fat, mikhaila peterson lion diet, lion diet what to eat',
    h1: 'Lion Diet Calculator',
    subtitle: 'Calculate your exact protein and fat needs for the lion diet — the strictest elimination version of carnivore.',
    goal: 'Strict Carnivore (fat adaptation)',
    proteinMultiplier: 0.8,
    fatMultiplier: 1.2,
    intro: `The lion diet is the most restrictive form of the carnivore diet: beef, salt, and water only. Made famous by Mikhaila Peterson, it was developed as an extreme elimination protocol for autoimmune conditions, chronic illness, and inflammation. This calculator helps you determine how much beef and fat to eat to thrive on the lion diet.`,
    whyWorks: [
      'Eliminating all but beef removes every potential food trigger — the ultimate elimination diet',
      'Ruminant meat (beef) is the most digestible food source for humans',
      'Most autoimmune and inflammation conditions are driven by gut permeability — the lion diet removes all gut irritants',
      'Fatty beef provides a complete nutrient profile without any supplements',
      'Many people with decades of chronic illness have reported remission on the lion diet',
    ],
    tips: [
      'Ribeye is the ideal lion diet cut: high fat, high protein, low connective tissue',
      'Ground beef 70/30 is more economical and works excellently for the lion diet',
      'Add tallow if you need more fat without more protein (pure beef fat)',
      'Eat until completely satisfied — hunger signals normalize after 2-4 weeks',
      'Reintroduce foods slowly after 90+ days to identify your specific triggers',
    ],
    faqs: [
      {
        q: 'What is the lion diet exactly?',
        a: 'The lion diet is a strict elimination protocol: ruminant meat (primarily beef), salt, and water only. No pork, no poultry, no fish, no eggs, no dairy. The strictness is intentional — it eliminates every potential food sensitivity to find a symptom-free baseline.',
      },
      {
        q: 'Who created the lion diet?',
        a: 'The lion diet was popularized by Mikhaila Peterson, who used it to reverse multiple autoimmune conditions including juvenile rheumatoid arthritis, depression, and skin disorders. Her father, Jordan Peterson, also reported significant health improvements following the same protocol.',
      },
      {
        q: 'How long do you do the lion diet before reintroducing foods?',
        a: 'Most protocols recommend 30-90 days minimum before reintroduction. The longer you stick to the elimination phase, the cleaner your baseline becomes. Then reintroduce one food at a time, waiting 3-5 days to observe any reactions.',
      },
      {
        q: 'How much beef should I eat on the lion diet?',
        a: 'Use the calculator above to get your specific targets. A rough starting point: 1-1.5 lbs of ground beef or ribeye per day for a 150-180 lb person. On the lion diet, fat is your primary energy source, so don\'t trim the fat off your cuts.',
      },
    ],
    benchmarks: [
      { example: '160 lb person (fat adaptation focus)', calories: 2200, proteinG: 73, fatG: 135 },
      { example: '200 lb person (strict lion diet)', calories: 2750, proteinG: 91, fatG: 169 },
      { example: '130 lb woman (autoimmune protocol)', calories: 1800, proteinG: 59, fatG: 110 },
    ],
    cta: 'Calculate your lion diet targets',
  },
  {
    slug: 'diabetes',
    title: 'Carnivore Diet for Diabetics Calculator | CarnivoreCalc',
    description: 'Carnivore diet macros for blood sugar control. Calculate your protein and fat targets — the most effective diet for reversing type 2 diabetes and insulin resistance.',
    keywords: 'carnivore diet for diabetes, carnivore diet blood sugar, carnivore diet insulin resistance, carnivore diet type 2 diabetes',
    h1: 'Carnivore Diet Calculator for Blood Sugar & Diabetes',
    subtitle: 'The most effective dietary intervention for type 2 diabetes and insulin resistance — calculate your exact carnivore macros.',
    goal: 'Weight Loss',
    proteinMultiplier: 0.9,
    fatMultiplier: 0.8,
    intro: `The carnivore diet eliminates all carbohydrates — making it the single most powerful dietary intervention for type 2 diabetes and insulin resistance. Many people on carnivore see dramatic blood sugar improvements within days, not months. This calculator gives you your exact protein and fat targets, optimized for blood sugar stability.`,
    whyWorks: [
      'Zero carbohydrates = zero blood sugar spikes. It\'s that simple.',
      'Lowering insulin allows your body to access and burn stored body fat',
      'Rapid reduction in HbA1c (the 3-month blood sugar average) reported in most studies',
      'Weight loss (common on carnivore) further improves insulin sensitivity',
      'Removing inflammatory foods reduces the chronic inflammation that drives diabetes',
    ],
    tips: [
      '⚠️ If you take diabetes medication, work with your doctor — carnivore works so well you may need to reduce medication quickly',
      'Moderate protein intake (not excessive) to minimize gluconeogenesis effects on blood sugar',
      'Check blood sugar more frequently in the first 2 weeks — it will likely drop fast',
      'Focus on fattier cuts initially to keep protein-to-fat ratio favorable',
      'Track HbA1c before and after 90 days — the results are usually dramatic',
    ],
    faqs: [
      {
        q: 'Can the carnivore diet reverse type 2 diabetes?',
        a: 'Many people have put type 2 diabetes into remission using carnivore or ketogenic diets. By eliminating all carbohydrates, you remove the primary driver of blood sugar elevation. Results vary, but multiple clinical studies show dramatic HbA1c reductions within 90 days on zero-carb diets.',
      },
      {
        q: 'Is carnivore safe if I\'m on metformin or insulin?',
        a: 'It can be highly effective, but work with your doctor. Carnivore lowers blood sugar rapidly — which means medications that lower blood sugar (especially insulin) may cause hypoglycemia if you don\'t reduce the dose. This is a good problem to have, but requires medical supervision.',
      },
      {
        q: 'How quickly does blood sugar drop on carnivore?',
        a: 'Most people see fasting blood sugar drop within the first 3-5 days. After 30 days, postprandial (after eating) spikes are typically eliminated. HbA1c usually drops measurably within 60-90 days.',
      },
      {
        q: 'Should I limit protein for diabetes on carnivore?',
        a: 'Moderate protein is generally better than very high protein for blood sugar control, because excess protein can trigger gluconeogenesis (conversion to glucose). This calculator uses a moderate protein ratio. Focus on getting enough fat to keep total calories up.',
      },
    ],
    benchmarks: [
      { example: '220 lb diabetic man (blood sugar control)', calories: 2400, proteinG: 90, fatG: 147 },
      { example: '170 lb woman (insulin resistance)', calories: 1900, proteinG: 69, fatG: 116 },
      { example: '250 lb man (reversing T2D)', calories: 2700, proteinG: 102, fatG: 166 },
    ],
    cta: 'Calculate your blood sugar–optimized macros',
  },
  {
    slug: 'athletes',
    title: 'Carnivore Diet for Athletes Calculator | CarnivoreCalc',
    description: 'Carnivore diet macros for athletic performance. Calculate your protein and fat targets to fuel training and competition without carbs.',
    keywords: 'carnivore diet for athletes, carnivore diet performance, carnivore diet crossfit, zero carb athlete diet, carnivore diet endurance',
    h1: 'Carnivore Diet Calculator for Athletes',
    subtitle: 'Fuel your training and performance with animal protein and fat — no carbs, no glycogen crashes.',
    goal: 'Muscle Gain',
    proteinMultiplier: 1.3,
    fatMultiplier: 1.0,
    intro: `Athletes have unique demands: high calorie output, fast recovery, and the need to maintain strength and lean mass. The carnivore diet meets all of these when done correctly — but you need to eat more than sedentary folks. This calculator is calibrated for athletes and active individuals who need maximum output from their food.`,
    whyWorks: [
      'Fat is a virtually unlimited fuel source — no bonking, no wall-hitting mid-race',
      'Animal protein has superior amino acid profiles for muscle repair vs plant alternatives',
      'Creatine from red meat directly fuels short-burst, high-intensity efforts',
      'Reduced inflammation means faster recovery between training sessions',
      'Stable energy (no blood sugar spikes/crashes) means consistent performance all day',
    ],
    tips: [
      'Eat more than you think you need — athletes often undereat on carnivore initially',
      'Pre-workout: a fatty meal 2-3 hours before trains the body to use fat efficiently',
      'Post-workout: prioritize protein (large beef meal) within 90 minutes of training',
      'Electrolytes are critical for athletes — sodium, potassium, magnesium daily',
      'High-intensity work may benefit from a brief adaptation period (4-6 weeks) before peak performance returns',
    ],
    faqs: [
      {
        q: 'Can athletes perform at high intensity on carnivore?',
        a: 'Yes, after full fat adaptation (4-8 weeks). Initial adaptation may feel rough as your body shifts fuel sources. After adaptation, most athletes report equal or better performance, especially in endurance events. Short-burst power sports may see a slightly longer adaptation curve.',
      },
      {
        q: 'How many calories do athletes need on carnivore?',
        a: 'Depends on sport and training volume. Use the calculator above with "Very Active" selected. An endurance athlete training 10+ hours per week may need 3,500-5,000 calories from mostly fat. Strength athletes may need 3,000-4,500 calories.',
      },
      {
        q: 'Do athletes need carbs for glycogen replenishment?',
        a: 'Fat-adapted athletes replenish glycogen efficiently via gluconeogenesis. Research on keto-adapted athletes shows comparable muscle glycogen levels to carb-based athletes. Your body learns to be highly efficient with glycogen when fat is the primary fuel.',
      },
      {
        q: 'What carnivore foods are best for athletic recovery?',
        a: 'Fatty ground beef and ribeye for calorie density. Salmon for omega-3s that reduce inflammation. Eggs for rapid amino acid delivery. Bone broth for collagen and electrolytes. Liver weekly for micronutrient density that supports hormonal function.',
      },
    ],
    benchmarks: [
      { example: '195 lb male athlete (hard training)', calories: 3700, proteinG: 129, fatG: 227 },
      { example: '155 lb female athlete (endurance)', calories: 2800, proteinG: 102, fatG: 172 },
      { example: '225 lb male powerlifter', calories: 4200, proteinG: 148, fatG: 258 },
    ],
    cta: 'Calculate your athlete carnivore macros',
  },
  {
    slug: 'autoimmune',
    title: 'Carnivore Diet for Autoimmune Conditions Calculator | CarnivoreCalc',
    description: 'Use the carnivore diet to reduce autoimmune symptoms. Calculate your protein and fat targets for the most effective elimination protocol.',
    keywords: 'carnivore diet autoimmune, carnivore diet autoimmune protocol, carnivore diet lupus rheumatoid arthritis, AIP carnivore diet',
    h1: 'Carnivore Diet for Autoimmune Conditions',
    subtitle: 'The most powerful elimination diet for autoimmune conditions — calculate your macros for the AIP-carnivore protocol.',
    goal: 'Strict Carnivore (fat adaptation)',
    proteinMultiplier: 0.85,
    fatMultiplier: 1.15,
    intro: `Autoimmune conditions are driven by gut permeability ("leaky gut"), chronic inflammation, and immune dysregulation. The carnivore diet addresses all three by removing every plant-based gut irritant, dramatically reducing inflammation, and providing a micronutrient-dense baseline of animal foods. Many people with lupus, rheumatoid arthritis, psoriasis, MS, and Crohn's disease have experienced significant remission on carnivore.`,
    whyWorks: [
      'Eliminates lectins, oxalates, phytates, and other plant compounds that irritate the gut lining',
      'Dramatically reduces systemic inflammation within weeks',
      'Animal fat supports cell membrane integrity and immune regulation',
      'Organ meats provide zinc, copper, and vitamin A critical for immune function',
      'Removing all potential food triggers identifies what the immune system is reacting to',
    ],
    tips: [
      'Use the lion diet (beef, salt, water) for the first 30 days for maximum elimination',
      'Avoid dairy initially — reintroduce after 60+ days to test tolerance',
      'Liver weekly is non-negotiable for autoimmune healing — the micronutrients matter',
      'Keep a symptom journal — track inflammation markers, energy, and symptoms daily',
      'Work with a doctor for any condition that required medication before starting carnivore',
    ],
    faqs: [
      {
        q: 'Can carnivore diet put autoimmune conditions in remission?',
        a: 'Many people report significant symptom reduction and some report full remission. Carnivore addresses the root causes of autoimmune disease (gut permeability, inflammation, nutrient deficiency) rather than just managing symptoms. Results vary, but anecdotal reports are compelling across many conditions.',
      },
      {
        q: 'Which autoimmune conditions respond best to carnivore?',
        a: 'The strongest anecdotal evidence is for rheumatoid arthritis, psoriasis, psoriatic arthritis, inflammatory bowel disease (Crohn\'s, UC), and depression/anxiety associated with inflammation. Many cases of lupus and MS improvement have been reported, though individual results vary.',
      },
      {
        q: 'How long before autoimmune symptoms improve on carnivore?',
        a: 'Some people notice reduced pain and inflammation within 2 weeks. Full remission (when it happens) typically takes 3-6 months. Stick with strict elimination for at least 90 days before concluding it doesn\'t work.',
      },
      {
        q: 'Should I do the lion diet or full carnivore for autoimmune?',
        a: 'Start with lion diet (beef, salt, water) for the first 30-60 days. It\'s the strictest elimination possible. Then slowly reintroduce eggs, then fish, then dairy — waiting 5+ days between each to observe reactions.',
      },
    ],
    benchmarks: [
      { example: '165 lb woman (autoimmune protocol)', calories: 2100, proteinG: 80, fatG: 129 },
      { example: '190 lb man (inflammation reduction)', calories: 2600, proteinG: 92, fatG: 160 },
      { example: '150 lb woman (lion diet start)', calories: 1900, proteinG: 73, fatG: 117 },
    ],
    cta: 'Get your autoimmune carnivore macros',
  },
]

export function getGoal(slug: string): GoalData | undefined {
  return goals.find((g) => g.slug === slug)
}
