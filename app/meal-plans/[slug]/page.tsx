import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Day = { day: string; breakfast: string; lunch: string; dinner: string }
type Week = { week: string; theme: string; focus: string; meals: string }
type ShoppingList = { category: string; items: string[] }

type MealPlan = {
  slug: string
  title: string
  h1: string
  badge: string
  emoji: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  intro: string
  scheduleType: 'days' | 'weeks'
  days?: Day[]
  weeks?: Week[]
  shoppingList: ShoppingList[]
  weeklyCost: string
  macros: { protein: string; fat: string; calories: string; note: string }
  tips: string[]
  faq: { q: string; a: string }[]
}

const mealPlans: Record<string, MealPlan> = {
  'week-1-meal-plan': {
    slug: 'week-1-meal-plan',
    title: 'Carnivore Diet Week 1 Meal Plan',
    h1: 'Carnivore Diet Week 1 Meal Plan',
    badge: 'Start Here',
    emoji: '🗓️',
    metaTitle: 'Carnivore Diet Week 1 Meal Plan | First 7 Days What to Eat | CarnivoreCalc',
    metaDescription: 'Complete carnivore diet week 1 meal plan. Exactly what to eat for breakfast, lunch, and dinner every day of your first week. Shopping list, macros, and tips included.',
    keywords: ['carnivore diet week 1 meal plan', 'carnivore diet first week what to eat', 'carnivore week 1 meal plan free', 'carnivore diet day 1', 'what to eat first week carnivore diet'],
    intro: 'Your first week on the carnivore diet is the most important — and the hardest. Days 1–3 feel fine. Days 3–5 are the rough patch (fatigue, headaches, cravings) as your body burns through its glycogen stores and begins shifting to fat as fuel. Days 6–7, most people start feeling noticeably better. This week 1 meal plan is designed to be simple, satisfying, and strategic — keeping you fed enough that the adaptation symptoms don\'t derail you before the benefits begin.',
    scheduleType: 'days',
    days: [
      { day: 'Monday', breakfast: 'Bacon and eggs (4 strips bacon, 3 eggs in bacon fat)', lunch: 'Ground beef bowl (8 oz 80/20 ground beef, salted)', dinner: 'Ribeye steak (12 oz, cooked in tallow)' },
      { day: 'Tuesday', breakfast: 'Scrambled eggs (3 eggs in 1.5 tbsp butter)', lunch: 'Ground beef bowl (8 oz 80/20 ground beef)', dinner: 'NY strip steak (10 oz) + 2 oz beef liver (optional)' },
      { day: 'Wednesday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Leftover steak from Tuesday sliced cold', dinner: 'Chuck roast (8 oz, pre-cooked in slow cooker)' },
      { day: 'Thursday', breakfast: 'Scrambled eggs in butter (4 eggs — eat more today)', lunch: 'Chuck roast (8 oz from batch cook)', dinner: 'Ground beef patties (10 oz 80/20, pan-seared)' },
      { day: 'Friday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Butter-basted salmon (7 oz wild-caught)', dinner: 'Ribeye steak (12 oz) — treat yourself at end of week' },
      { day: 'Saturday', breakfast: '3 eggs scrambled + 3 strips bacon', lunch: 'Ground beef bowl (8 oz)', dinner: 'Pork ribs or pork shoulder (8 oz)' },
      { day: 'Sunday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Chuck roast (start new batch in slow cooker for week 2)', dinner: 'NY strip steak (10 oz)' },
    ],
    shoppingList: [
      { category: '🥩 Beef', items: ['2 ribeye steaks (12 oz each)', '2 NY strip steaks (10 oz each)', '3 lbs 80/20 ground beef', '1 chuck roast (3 lbs)', '2 oz beef liver (optional)'] },
      { category: '🐷 Pork', items: ['1 pack thick-cut bacon (16 oz)', '8 oz pork ribs or pork shoulder'] },
      { category: '🐟 Seafood', items: ['7 oz wild-caught salmon fillet'] },
      { category: '🥚 Eggs & Dairy', items: ['24 large eggs', '1 stick unsalted butter', '1 small jar beef tallow'] },
      { category: '🧂 Basics', items: ['Sea salt (coarse preferred)', 'Black pepper (optional for some)', 'Sparkling water or plain water'] },
    ],
    weeklyCost: '$80–$110 (varies by region and whether you buy grass-fed)',
    macros: {
      protein: '160–200g/day',
      fat: '120–160g/day',
      calories: '1,800–2,200/day',
      note: 'Week 1 macros are intentionally liberal — eat until satisfied. Do not restrict calories during adaptation.',
    },
    tips: [
      'Do NOT calorie-restrict in week 1. Your body is stressed adapting — undereating makes symptoms worse and increases dropout risk.',
      'If you get headaches, drink more salt water or bone broth. The carnivore diet is diuretic — you lose electrolytes rapidly in week 1.',
      'Days 3–5 are the hardest for most people. This is normal. The symptoms peak and then pass. Don\'t quit before day 6.',
      'Eat when hungry, stop when full. Don\'t force meals. Some days you\'ll eat twice, some days three times — both are fine.',
      'Batch-cook the chuck roast on Sunday so you have quick, ready food on the hard middle days (Wed–Thu).',
    ],
    faq: [
      {
        q: 'How bad are week 1 carnivore symptoms?',
        a: 'Most people experience 2–4 days of fatigue, brain fog, and sometimes headaches or loose stools between days 2–5. This is the "keto flu" phase as your body switches fuel sources. Severity varies — some people feel fine, others feel rough for a full week. Electrolytes (salt, potassium, magnesium) dramatically reduce symptoms. If you\'re miserable, drink salted bone broth and push through to day 7.',
      },
      {
        q: 'Can I eat as much as I want in week 1?',
        a: 'Yes — and you should. Week 1 is not the time to restrict. Eat until full at every meal. Your hunger signals will naturally recalibrate over weeks 2–4 as your body becomes fat-adapted. Restricting calories during adaptation is a common mistake that makes the transition harder and increases the likelihood of quitting.',
      },
      {
        q: 'What if I get constipated in week 1?',
        a: 'Constipation is common in week 1 as your body adjusts to zero-fiber eating. Your bowel movement frequency will decrease — this is normal and not a problem. Stay hydrated, eat plenty of fat (not just lean protein), and give it 2 weeks. Most people normalize by week 3. If truly uncomfortable, a small amount of mineral water with magnesium can help.',
      },
      {
        q: 'Do I need to track macros in week 1?',
        a: 'No — just eat from the meal plan and don\'t overthink it. Week 1 is about getting through adaptation, not optimizing numbers. If you want a target, aim for 1g of protein per pound of body weight and fill the rest of your calories with fat. Use the CarnivoreCalc calculator to get your specific targets once you\'re through the first week.',
      },
    ],
  },

  'week-2-meal-plan': {
    slug: 'week-2-meal-plan',
    title: 'Carnivore Diet Week 2 Meal Plan',
    h1: 'Carnivore Diet Week 2 Meal Plan',
    badge: 'Most Critical',
    emoji: '📈',
    metaTitle: 'Carnivore Diet Week 2 Meal Plan | What to Expect Week 2 | CarnivoreCalc',
    metaDescription: 'Carnivore diet week 2 meal plan with full 7-day schedule. Week 2 is when energy returns and fat adaptation deepens. Exactly what to eat to push through.',
    keywords: ['carnivore diet week 2 meal plan', 'carnivore week 2 what to expect', 'carnivore diet week 2 energy', 'week 2 carnivore what to eat', 'carnivore diet day 8 14'],
    intro: 'Week 2 of the carnivore diet is the turning point. The adaptation symptoms from week 1 start fading — energy returns, brain fog lifts, and many people experience their first "carnivore high" day (unusual mental clarity and calm energy). This week, you can start being slightly more structured: two meals a day if appetite allows, and experimenting with organ meats. The goal is to deepen fat adaptation while keeping meals satisfying and diverse enough that you don\'t feel deprived.',
    scheduleType: 'days',
    days: [
      { day: 'Monday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Ground beef bowl (8 oz) — eat from week 1 batch or fresh', dinner: 'Chuck roast (8 oz, from Sunday batch cook)' },
      { day: 'Tuesday', breakfast: 'Scrambled eggs (4 eggs in butter)', lunch: 'Beef liver (4 oz sautéed in tallow) — first liver experience', dinner: 'Ribeye steak (12 oz)' },
      { day: 'Wednesday', breakfast: 'Consider skipping breakfast if not hungry — this is normal in week 2', lunch: 'Ground beef patties (10 oz) with salt', dinner: 'NY strip steak (10 oz)' },
      { day: 'Thursday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Butter-basted salmon (7 oz)', dinner: 'Chuck roast (8 oz)' },
      { day: 'Friday', breakfast: '3 eggs in tallow + 3 strips bacon', lunch: 'Ground beef bowl (8 oz)', dinner: 'Pork ribs (8 oz) or pork belly (6 oz)' },
      { day: 'Saturday', breakfast: 'Scrambled eggs (3 eggs in butter)', lunch: 'Ribeye steak (8 oz — slightly smaller if appetite is reduced)', dinner: 'Ground beef (10 oz) + 2 oz beef heart (if available)' },
      { day: 'Sunday', breakfast: 'Bacon and eggs (4 strips, 4 eggs)', lunch: 'Start slow cooker chuck roast for the week (eat first serving)', dinner: 'NY strip steak (10 oz) — week 2 celebration meal' },
    ],
    shoppingList: [
      { category: '🥩 Beef', items: ['2 ribeye steaks (12 oz each)', '2 NY strip steaks (10 oz each)', '2.5 lbs 80/20 ground beef', '1 chuck roast (3 lbs)', '4–8 oz beef liver', '4 oz beef heart (optional)'] },
      { category: '🐷 Pork', items: ['1 pack thick-cut bacon', '8 oz pork ribs or pork belly'] },
      { category: '🐟 Seafood', items: ['7 oz wild salmon'] },
      { category: '🥚 Eggs & Dairy', items: ['2 dozen large eggs', '1 stick butter'] },
      { category: '🧂 Basics', items: ['Sea salt', 'Beef tallow for cooking'] },
    ],
    weeklyCost: '$85–$115',
    macros: {
      protein: '150–190g/day',
      fat: '130–170g/day',
      calories: '1,800–2,100/day',
      note: 'Week 2 — natural appetite reduction begins. Don\'t force food. Eat when hungry.',
    },
    tips: [
      'If you\'re not hungry for breakfast in week 2, that\'s a sign of fat adaptation starting. Skip it and eat your first meal at noon — this is your body becoming efficient at burning fat.',
      'Introduce liver this week — even 2–4 oz once or twice. It\'s the most nutritious food on carnivore and prevents micronutrient gaps long-term.',
      'Mental clarity often peaks in week 2 for the first time. Notice it — it\'s your brain running on ketones for the first time.',
      'Drink bone broth daily if you\'re still experiencing fatigue, headaches, or muscle cramps. Electrolytes are still being recalibrated.',
      'Weigh yourself once at the start of week 2. Many people see a large drop from week 1 (mostly water weight). Don\'t be discouraged if it slows — real fat loss starts in weeks 3–4.',
    ],
    faq: [
      {
        q: 'Why am I less hungry in week 2?',
        a: 'Reduced hunger in week 2 is a feature, not a bug. As your body becomes fat-adapted, it gains efficient access to your stored body fat as fuel. This suppresses hunger signaling — your body literally has fuel available and stops asking for more. This is one of the most commonly cited benefits of carnivore: natural appetite suppression without calorie counting.',
      },
      {
        q: 'Is it normal to feel great in week 2 after feeling terrible in week 1?',
        a: 'Yes — this is the classic carnivore pattern. Week 1 is the adaptation valley. Week 2 is the first emergence. Many people describe a feeling of unusual mental clarity and calm, steady energy — this is the early carnivore "flow state." It comes and goes as fat adaptation deepens. By week 4–6, most people report consistent energy without spikes or crashes.',
      },
      {
        q: 'Should I start exercising in week 2?',
        a: 'Light activity (walking, bodyweight work) is fine in week 2. Avoid high-intensity training until at least week 3–4. Your muscles are still adapting to using fat and ketones as fuel rather than glycogen — intense workouts before adaptation can cause excessive fatigue and poor recovery. Week 3 is the better start point for resistance training.',
      },
      {
        q: 'What if my energy crashes again on certain days in week 2?',
        a: 'Dips in energy during week 2 are normal — fat adaptation is not a linear process. If you crash, eat more fat (not more protein), drink salted water or bone broth, and rest. Energy fluctuations in weeks 1–3 are part of the metabolic transition. The crashes become shorter and less frequent as weeks pass.',
      },
    ],
  },

  '30-day-meal-plan': {
    slug: '30-day-meal-plan',
    title: '30 Day Carnivore Meal Plan',
    h1: '30 Day Carnivore Diet Meal Plan',
    badge: 'Complete Plan',
    emoji: '📅',
    metaTitle: '30 Day Carnivore Meal Plan | One Month Carnivore Diet Plan | CarnivoreCalc',
    metaDescription: 'Complete 30-day carnivore diet meal plan. Four weeks of structured eating with weekly themes, shopping lists, macros, and tips. Free printable guide.',
    keywords: ['30 day carnivore meal plan', 'carnivore diet one month plan', 'carnivore diet 30 days', '30 day carnivore diet results', 'one month carnivore diet plan free'],
    intro: 'Thirty days is the minimum commitment to truly experience the carnivore diet. The first week is adaptation. Week 2 brings the first glimpse of fat adaptation. Week 3 is when most people feel the full effect — steady energy, reduced inflammation, and natural appetite control. Week 4 is consolidation — locking in the habits and discovering your ideal meal frequency and food preferences. This 30-day plan gives each week a theme to make the journey structured and intentional.',
    scheduleType: 'weeks',
    weeks: [
      {
        week: 'Week 1: Survival Mode',
        theme: 'Get through adaptation at any cost',
        focus: 'Eat freely, don\'t restrict, survive the keto flu. Priority: beef, bacon, and eggs. Eat 3 meals if needed.',
        meals: 'Breakfast: Bacon & eggs daily. Lunch: Ground beef bowl. Dinner: Steak (ribeye or NY strip) or chuck roast. Snack if needed: hard-boiled eggs.',
      },
      {
        week: 'Week 2: Stabilize',
        theme: 'Let natural hunger emerge',
        focus: 'Introduce organ meats (4 oz liver once). Allow natural appetite to guide meal timing. First attempt at 2 meals/day if not hungry at breakfast.',
        meals: 'Breakfast: Skip if not hungry, otherwise eggs. Lunch: Ground beef or leftover roast. Dinner: Steak or salmon. Add liver 1–2x this week.',
      },
      {
        week: 'Week 3: Optimize',
        theme: 'Find your ideal food rotation',
        focus: 'Settle into 2 meals/day if appetite allows. Identify your 4–5 favorite carnivore meals and rotate them. Add variety: lamb, oysters, bone broth.',
        meals: 'Breakfast: Eggs + butter or skip. Lunch: Ground beef, salmon, or liver + egg combo. Dinner: Ribeye, lamb chops, or chuck roast. Drink bone broth daily.',
      },
      {
        week: 'Week 4: Lock It In',
        theme: 'Build the habits, not just the meals',
        focus: 'This is carnivore as your lifestyle. Batch cook Sunday. Shop once per week. Eat simply. Add beef tallow to your cooking routine.',
        meals: 'Same rotation as week 3. Batch-cook chuck roast Sunday. Ground beef for quick weekday lunches. Premium steak on Friday/Saturday. Liver once weekly.',
      },
    ],
    shoppingList: [
      { category: '🥩 Beef (Monthly)', items: ['4–5 ribeye or NY strip steaks', '8–10 lbs 80/20 ground beef', '2 chuck roasts (3 lbs each)', '8 oz beef liver', '8 oz beef heart (optional)'] },
      { category: '🐷 Pork', items: ['4 packs thick-cut bacon', 'Pork shoulder or ribs (2 lbs)'] },
      { category: '🐟 Seafood', items: ['4 wild salmon fillets (7 oz each)', '1 can oysters (optional for micronutrients)'] },
      { category: '🥚 Eggs & Dairy', items: ['8 dozen eggs', '4 sticks butter', 'Heavy cream (optional)'] },
      { category: '🧂 Basics', items: ['Large sea salt', 'Beef tallow (jar)', 'Bone broth (or bones to make your own)'] },
    ],
    weeklyCost: '$90–$130/week ($360–$520/month)',
    macros: {
      protein: '150–200g/day',
      fat: '120–160g/day',
      calories: '1,800–2,200/day',
      note: 'Macros naturally regulate over 30 days. Appetite decreases in weeks 2–4. Use CarnivoreCalc to personalize.',
    },
    tips: [
      'Plan your shopping once per week — Sunday works best. This one habit prevents the "I have nothing to eat" emergency that kills carnivore attempts.',
      'Batch cook a chuck roast every Sunday. It takes 10 minutes of active work and feeds you Mon–Thu with zero cooking effort.',
      'Take photos of yourself at day 1, day 15, and day 30. The visual changes are often more dramatic than the scale shows.',
      'After 30 days, get a blood panel. Most people see improved HDL, lower triglycerides, and normalized blood glucose. Having data keeps you motivated.',
      'By day 30, you should have 4–5 meals you love and can rotate indefinitely. Simplicity is the long-term sustainability strategy.',
    ],
    faq: [
      {
        q: 'What can I expect after 30 days on carnivore?',
        a: 'Most 30-day carnivore results: 8–15 lbs of weight loss (more in the first week from water weight), significant reduction in bloating, clearer skin, improved sleep quality, and noticeably more stable energy without afternoon crashes. Mental clarity improvements are frequently cited. Many people also report reduced joint pain and reduced sugar/carb cravings.',
      },
      {
        q: 'Is 30 days enough to see carnivore results?',
        a: '30 days shows meaningful results for most people, but full fat adaptation takes 6–12 weeks. Think of 30 days as completing the adaptation phase and getting the first data point. Athletic performance usually doesn\'t fully recover until 6–8 weeks. If you feel good at 30 days, commit to 60 or 90 days before making a final judgment.',
      },
      {
        q: 'Should I do a strict 30 days or can I have occasional deviations?',
        a: 'For the first 30 days, strict is strongly recommended. Every deviation resets some of the metabolic adaptation you\'ve built. Even one high-carb meal can set you back 3–5 days in fat adaptation. Do it clean the first 30 days, get your results, then make informed decisions about strictness going forward from a position of knowledge.',
      },
      {
        q: 'What do I do after 30 days on carnivore?',
        a: 'Three options: (1) Continue strictly — many people find carnivore is their permanent diet; (2) Add strategic foods back one at a time to identify tolerances (dairy, eggs separate from beef, etc.); (3) Transition to a carnivore-leaning diet — 80% carnivore with occasional additions. The 30-day baseline gives you a clean slate to understand your body\'s response to specific foods.',
      },
    ],
  },

  'beginner-meal-plan': {
    slug: 'beginner-meal-plan',
    title: 'Carnivore Diet Beginner Meal Plan',
    h1: 'Carnivore Diet Beginner Meal Plan',
    badge: 'Simplest',
    emoji: '🥩',
    metaTitle: 'Carnivore Diet Beginner Meal Plan | Simple Carnivore Start | CarnivoreCalc',
    metaDescription: 'The simplest carnivore diet meal plan for beginners. 5 foods, repeatable meals, zero complexity. Perfect for people new to carnivore who want a foolproof start.',
    keywords: ['carnivore diet beginner meal plan', 'simple carnivore meal plan', 'carnivore diet for beginners what to eat', 'easiest carnivore meal plan', 'carnivore diet starter plan'],
    intro: 'The biggest mistake new carnivore dieters make is overcomplicating it. You don\'t need exotic cuts, organ meats, or elaborate cooking on day one. The beginner meal plan is built on 5 foods: ground beef, eggs, bacon, butter, and salt. That\'s it. Master these five, eat them consistently for 2 weeks, and you\'ll have completed adaptation without decision fatigue or culinary failure. Simplicity is the most powerful carnivore strategy.',
    scheduleType: 'days',
    days: [
      { day: 'Monday', breakfast: 'Bacon and eggs (4 strips, 3 eggs cooked in bacon fat)', lunch: 'Ground beef bowl (8 oz 80/20, salted)', dinner: 'Ground beef bowl (10 oz 80/20, salted)' },
      { day: 'Tuesday', breakfast: 'Scrambled eggs (3–4 eggs in butter)', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef (10 oz) + 3 eggs if still hungry' },
      { day: 'Wednesday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef (10 oz)' },
      { day: 'Thursday', breakfast: 'Eggs (4 eggs scrambled in butter)', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef (10 oz) + bacon (3 strips)' },
      { day: 'Friday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef (10 oz)' },
      { day: 'Saturday', breakfast: 'Scrambled eggs (3 eggs in butter)', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef (10 oz) — add a steak if you want a treat' },
      { day: 'Sunday', breakfast: 'Bacon and eggs (4 strips, 3 eggs)', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef (10 oz)' },
    ],
    shoppingList: [
      { category: '🥩 Beef', items: ['4 lbs 80/20 ground beef (entire week)', 'Optional: 1 steak (any cut) for variety'] },
      { category: '🐷 Pork', items: ['2 packs thick-cut bacon'] },
      { category: '🥚 Eggs & Dairy', items: ['2 dozen eggs', '1 stick unsalted butter'] },
      { category: '🧂 Basics', items: ['Sea salt (this is your only seasoning)', 'Water'] },
    ],
    weeklyCost: '$45–$65 (the most affordable carnivore plan)',
    macros: {
      protein: '160–200g/day',
      fat: '120–150g/day',
      calories: '1,800–2,100/day',
      note: 'Ground beef + eggs + bacon naturally hits ideal carnivore macros. No tracking needed.',
    },
    tips: [
      'Don\'t try to eat interesting — just eat. The simplicity is the point. Decision fatigue kills diets more than boredom.',
      '80/20 ground beef is non-negotiable. Do not use leaner ground beef — you need the fat ratio to feel satiated.',
      'Cook ground beef in batches — cook 2 lbs at once on Sunday and Monday, refrigerate, and reheat for lunches all week.',
      'Add salt generously. Carnivore requires more sodium than a standard diet because of the diuretic effect of ketosis.',
      'If you get bored by day 10, that\'s when you graduate to the week 2 or 30-day plan with more variety.',
    ],
    faq: [
      {
        q: 'Is eating the same thing every day OK on carnivore?',
        a: 'Yes — and many experienced carnivore practitioners eat the same 3–5 meals indefinitely. The psychological need for food variety is largely a conditioned response to modern food environments. Most people find that after 2 weeks of eating simply, their relationship with food changes dramatically — food becomes fuel rather than entertainment, and the simplicity feels liberating rather than restrictive.',
      },
      {
        q: 'What if I run out of ideas after a few days?',
        a: 'The answer is in the plan: you don\'t need ideas, you need consistency. But if you genuinely want variety, the next step from this beginner plan is to add: (1) a different cut of steak once per week, (2) salmon once per week, (3) pork ribs on weekends. These three additions create a rotation without complexity.',
      },
      {
        q: 'Do I need to track anything as a carnivore beginner?',
        a: 'No. Eat when hungry, stop when full, eat only from your carnivore food list. The plan handles macros automatically. If you want a benchmark, use CarnivoreCalc to calculate your protein target (typically 1g per pound of body weight) and mentally note whether you\'re reaching it — but don\'t weigh and measure food in the first two weeks.',
      },
      {
        q: 'What drinks are allowed on the beginner carnivore plan?',
        a: 'Water (still or sparkling), black coffee (technically not carnivore but most practitioners allow it), and plain bone broth. Avoid juice, diet soda, flavored waters, and anything with sweeteners. Salt your water lightly if you\'re experiencing headaches or fatigue — this is the fastest electrolyte fix for adaptation.',
      },
    ],
  },

  'budget-meal-plan': {
    slug: 'budget-meal-plan',
    title: 'Budget Carnivore Diet Meal Plan',
    h1: 'Carnivore Diet on a Budget Meal Plan',
    badge: 'Under $75/wk',
    emoji: '💰',
    metaTitle: 'Budget Carnivore Diet Meal Plan | Cheap Carnivore Diet Under $75/Week | CarnivoreCalc',
    metaDescription: 'Complete budget carnivore diet meal plan under $75/week. Ground beef, eggs, and smart cuts. Cheap carnivore diet that doesn\'t sacrifice nutrition.',
    keywords: ['carnivore diet on a budget meal plan', 'cheap carnivore diet', 'carnivore diet budget', 'carnivore diet under $100 a week', 'budget carnivore meal plan'],
    intro: 'The carnivore diet has a reputation for being expensive, but it doesn\'t have to be. The budget carnivore plan centers on three foods: 80/20 ground beef, eggs, and bacon. Ground beef is the most economical high-protein food available — at $4–6/lb, it delivers superior nutrition to chicken breast at the same price. Add eggs (the cheapest complete protein on Earth) and you have a nutritionally complete carnivore diet well under $75/week for one person.',
    scheduleType: 'days',
    days: [
      { day: 'Monday', breakfast: 'Eggs (4 scrambled in butter)', lunch: 'Ground beef (8 oz 80/20)', dinner: 'Ground beef (10 oz) + 3 eggs' },
      { day: 'Tuesday', breakfast: 'Bacon (3 strips) + 3 eggs', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef patties (10 oz) — smash burger style' },
      { day: 'Wednesday', breakfast: 'Eggs (4 scrambled)', lunch: 'Ground beef (8 oz) — from batch cook', dinner: 'Pork shoulder (8 oz) — slow-cooked, very cheap cut' },
      { day: 'Thursday', breakfast: 'Bacon (3 strips) + 3 eggs', lunch: 'Pork shoulder (leftover, 8 oz)', dinner: 'Ground beef (10 oz)' },
      { day: 'Friday', breakfast: 'Eggs (4 scrambled in butter)', lunch: 'Ground beef (8 oz)', dinner: 'Chicken thighs (skin-on, bone-in, 2 thighs) — budget protein option' },
      { day: 'Saturday', breakfast: 'Bacon (4 strips) + 3 eggs', lunch: 'Ground beef (8 oz)', dinner: 'Ground beef + egg stir — ground beef with 2 eggs cooked on top' },
      { day: 'Sunday', breakfast: 'Eggs (3) + bacon (3 strips)', lunch: 'Batch cook pork shoulder for the week (first serving)', dinner: 'Ground beef (10 oz)' },
    ],
    shoppingList: [
      { category: '🥩 Beef', items: ['3.5 lbs 80/20 ground beef (~$18–22)', '4 oz beef liver (~$2 — cheapest organ, most nutritious)'] },
      { category: '🐷 Pork', items: ['1.5 lb pork shoulder (~$5–7)', '1 pack bacon (~$8)', '4 bone-in skin-on chicken thighs (~$5)'] },
      { category: '🥚 Eggs & Dairy', items: ['3 dozen eggs (~$9–12)', '1 stick butter (~$3)'] },
      { category: '🧂 Basics', items: ['Sea salt', 'Beef tallow (make your own from ground beef fat)'] },
    ],
    weeklyCost: '$50–$65 per week (aggressive budget, single person)',
    macros: {
      protein: '150–185g/day',
      fat: '110–140g/day',
      calories: '1,700–2,000/day',
      note: 'Budget plan is slightly lower calorie — adjust ground beef portions up if you need more energy.',
    },
    tips: [
      'Buy ground beef in bulk (3–5 lb packages). It\'s cheaper per pound and freezes perfectly. Defrost in the fridge overnight.',
      'Eggs are your secret weapon — at $3–4/dozen, they\'re the cheapest protein per gram of any animal food. Eat them freely.',
      'Pork shoulder is the budget steak — it\'s cheap, fatty, protein-dense, and tastes incredible after 8 hours in a slow cooker.',
      'Skip grass-fed on a budget. Conventional 80/20 ground beef from Costco or Walmart is still excellent carnivore food.',
      'Make your own tallow: after cooking ground beef, pour off the rendered fat and refrigerate it. Use it to cook eggs and other meats — free cooking fat.',
    ],
    faq: [
      {
        q: 'What are the cheapest carnivore-approved foods?',
        a: 'In order of cost per gram of protein: eggs (~$0.07/g), 80/20 ground beef (~$0.10/g), pork shoulder (~$0.08/g), chicken thighs (~$0.07/g), beef liver (~$0.04/g). For budget carnivore, build your diet around these five foods. Ribeye and salmon are nutritionally excellent but not needed for a cheap carnivore diet.',
      },
      {
        q: 'Is the budget carnivore plan nutritionally complete?',
        a: 'Yes, with one addition: include 4 oz of beef liver once per week. Liver is one of the cheapest meats per pound (~$2–3/lb) and the most nutrient-dense food on the planet. It covers vitamin A, B12, folate, copper, and iron that muscle meat alone can\'t fully supply. Budget + liver = nutritionally complete carnivore.',
      },
      {
        q: 'Where should I shop for the cheapest carnivore groceries?',
        a: 'Best options: Costco/Sam\'s Club (bulk ground beef and eggs are significantly cheaper), Walmart (competitive ground beef and egg prices), ethnic grocery stores (often have cheap organ meats, pork cuts, and chicken), and local butchers for bulk buys. Avoid Whole Foods and Sprouts for staples — they charge significant premiums.',
      },
      {
        q: 'Can I do carnivore cheaply long-term?',
        a: 'Yes — many long-term carnivore practitioners live on a rotation of ground beef, eggs, bacon, and occasional cheap cuts. The key is buying in bulk, batch cooking (especially pork shoulder and ground beef), and having a consistent shopping list that doesn\'t deviate. Budget carnivore dieters often report lower total food spending than before carnivore because they stop buying expensive packaged foods, snacks, and beverages.',
      },
    ],
  },

  'shopping-list': {
    slug: 'shopping-list',
    title: 'Carnivore Diet Shopping List',
    h1: 'Carnivore Diet Shopping List',
    badge: 'Printable',
    emoji: '🛒',
    metaTitle: 'Carnivore Diet Shopping List | What to Buy on Carnivore | CarnivoreCalc',
    metaDescription: 'Complete carnivore diet shopping list. Everything you need to buy at the grocery store for carnivore — categorized by meat, seafood, dairy, and basics. Printable guide.',
    keywords: ['carnivore diet shopping list', 'what to buy on carnivore diet', 'carnivore diet grocery list', 'carnivore diet what to buy', 'carnivore shopping list printable'],
    intro: 'The carnivore diet has the simplest shopping list in the world: meat, seafood, eggs, and animal fats. That\'s the entire store you need. This shopping list is organized to make your weekly grocery trip as efficient as possible — from the basics you need every week to the premium options for when you want variety. Print this list and take it with you. The goal is to spend 15 minutes in the store and come home with a week\'s worth of nutrition.',
    scheduleType: 'days',
    days: [
      { day: 'Weekly Staples (Always Buy)', breakfast: '80/20 ground beef (2–3 lbs)', lunch: 'Eggs (2–3 dozen)', dinner: 'Thick-cut bacon (1–2 packs)' },
      { day: 'Weekly Protein Rotation', breakfast: 'Ribeye or NY strip steak (1–2)', lunch: 'Butter (1–2 sticks)', dinner: 'Sea salt (refill as needed)' },
      { day: 'Weekly Variety (Optional)', breakfast: 'Wild salmon fillet (1–2)', lunch: 'Pork ribs or pork shoulder', dinner: 'Beef liver (4–8 oz) — once per week' },
      { day: 'Batch Cook Items', breakfast: 'Chuck roast (3 lb) for slow cooker', lunch: 'Beef bones or bone broth', dinner: 'Beef tallow (jar or render from ground beef)' },
      { day: 'Premium Options', breakfast: 'Grass-fed ribeye or tomahawk', lunch: 'Lamb chops or rack of lamb', dinner: 'Oysters (canned or fresh for micronutrients)' },
      { day: 'Pantry Staples', breakfast: 'Electrolyte powder (salt-based, no sugar)', lunch: 'Sparkling water', dinner: 'Coffee (optional — black only)' },
      { day: 'Foods to AVOID', breakfast: 'NO grains, bread, pasta, rice', lunch: 'NO fruits, vegetables, legumes', dinner: 'NO sauces, condiments with sugar or seed oils' },
    ],
    shoppingList: [
      { category: '🥩 Beef (Core)', items: ['80/20 ground beef (bulk — 3–5 lbs)', 'Ribeye steak (12–16 oz)', 'NY strip steak (10 oz)', 'Chuck roast (3 lbs) for batch cooking', 'Beef liver (4–8 oz, once/week)'] },
      { category: '🐷 Pork', items: ['Thick-cut bacon (no added sugar)', 'Pork shoulder or pork ribs', 'Pork belly (optional)'] },
      { category: '🐟 Seafood', items: ['Wild-caught salmon (skin-on)', 'Canned sardines in water (cheap omega-3s)', 'Canned oysters (zinc + B12)'] },
      { category: '🥚 Eggs & Dairy', items: ['Large eggs (pastured preferred)', 'Unsalted butter (Kerry Gold or similar)', 'Heavy cream (optional, strict carnivore only)'] },
      { category: '🧂 Fats & Basics', items: ['Beef tallow (jar)', 'Sea salt (coarse)', 'Bone broth (or bones to make your own)'] },
    ],
    weeklyCost: '$70–$130 depending on cuts and whether grass-fed',
    macros: {
      protein: '150–200g/day',
      fat: '120–160g/day',
      calories: '1,800–2,200/day',
      note: 'These macros assume you\'re eating from this shopping list and following a full week plan.',
    },
    tips: [
      'Shop the perimeter of the grocery store — the meat, seafood, and dairy sections are on the outside walls of every major supermarket. You never need to enter the center aisles.',
      'Buy ground beef and eggs in bulk once per week. These two items alone can sustain you if the rest of your list runs out.',
      'Costco and Sam\'s Club cut costs by 20–40% on carnivore staples — bulk ground beef, eggs, and butter are significantly cheaper.',
      'Read bacon labels carefully — most supermarket bacon contains sugar (brown sugar, honey). Look for "no sugar added" or "uncured" options.',
      'Freeze excess meat immediately. Buy when on sale and freeze in meal-sized portions. Most carnivore meats freeze for 3–6 months without quality loss.',
    ],
    faq: [
      {
        q: 'What is the most important thing to buy on carnivore?',
        a: 'Ground beef (80/20) and eggs. These two foods provide complete protein, ideal fat ratios, and nearly all micronutrients needed for carnivore. If your budget or access is limited, you can sustain a complete carnivore diet on just ground beef, eggs, butter, salt, and water. Everything else is optimization.',
      },
      {
        q: 'Should I buy grass-fed or conventional meat?',
        a: 'Grass-fed is nutritionally superior (higher omega-3s, more CLA, better fatty acid profile) but typically costs 30–50% more. For budget carnivore, conventional is perfectly acceptable — it\'s still nutritionally excellent. If budget allows, prioritize grass-fed for ground beef and butter, and conventional is fine for steaks and organ meats.',
      },
      {
        q: 'How often should I grocery shop on carnivore?',
        a: 'Once per week is the standard. Create a fixed shopping list, buy everything Sunday, batch cook what needs it, and you\'re set for the week. Some carnivore practitioners shop every 10–14 days by freezing half their weekly meat purchase and thawing as needed.',
      },
      {
        q: 'What\'s the biggest shopping mistake carnivore beginners make?',
        a: 'Under-buying. Most beginners underestimate how much meat they\'ll eat, especially in week 1. Buy 20% more than you think you\'ll need — running out of carnivore food leads to off-plan eating. A surplus of ground beef in the fridge is never a problem. Running out at 8 PM is.',
      },
    ],
  },

  'meal-prep-guide': {
    slug: 'meal-prep-guide',
    title: 'Carnivore Diet Meal Prep Guide',
    h1: 'Carnivore Diet Meal Prep Guide',
    badge: 'Time-Saver',
    emoji: '🍳',
    metaTitle: 'Carnivore Diet Meal Prep Guide | Batch Cooking Carnivore | CarnivoreCalc',
    metaDescription: 'Complete carnivore diet meal prep guide. How to batch cook beef, prep eggs, and stock your fridge for a full week of carnivore in 2 hours on Sunday.',
    keywords: ['carnivore diet meal prep', 'carnivore diet batch cooking', 'carnivore meal prep sunday', 'how to meal prep carnivore diet', 'carnivore diet prep for the week'],
    intro: 'The secret to long-term carnivore success isn\'t willpower — it\'s having food ready when hunger strikes. Carnivore meal prep takes 90–120 minutes on Sunday and eliminates every "what do I eat?" moment for the entire week. The system is simple: batch-cook a chuck roast (set-and-forget), pre-portion ground beef, hard-boil a dozen eggs, and render your cooking fat from the ground beef runoff. Come Monday morning, you have 5 days of food ready with 5 minutes of reheating per meal.',
    scheduleType: 'days',
    days: [
      { day: 'Sunday Prep (2 hours)', breakfast: 'Start slow cooker chuck roast (10 min active work, 8 hrs hands-off)', lunch: 'Cook 2–3 lbs ground beef in a large skillet, portion into containers', dinner: 'Hard-boil 12 eggs, refrigerate in shell until needed' },
      { day: 'Monday (Cook Fresh)', breakfast: 'Bacon and eggs (10 min cook — always fresher cooked same-day)', lunch: 'Ground beef from batch (2 min reheat)', dinner: 'Chuck roast from batch (2 min reheat) or fresh steak if desired' },
      { day: 'Tuesday', breakfast: 'Scrambled eggs (8 min)', lunch: 'Ground beef from batch (2 min)', dinner: 'Fresh steak — cook once mid-week for variety and morale' },
      { day: 'Wednesday', breakfast: 'Hard-boiled eggs (from Sunday prep, 0 min)', lunch: 'Chuck roast (2 min reheat)', dinner: 'Ground beef from batch + 2 fresh eggs on top' },
      { day: 'Thursday', breakfast: 'Bacon and eggs (10 min)', lunch: 'Chuck roast or ground beef (whichever you have left)', dinner: 'Butter-basted salmon (14 min — always cook fish fresh)' },
      { day: 'Friday', breakfast: 'Scrambled eggs in butter', lunch: 'Hard-boiled eggs + ground beef (from batch if any left)', dinner: 'Fresh ribeye steak — Friday treat' },
      { day: 'Saturday/Sunday', breakfast: 'Cook fresh — weekend cooking is enjoyable', lunch: 'Use up any remaining batch food', dinner: 'Start next week\'s chuck roast Sunday evening' },
    ],
    shoppingList: [
      { category: '🥩 Batch Cook Meats', items: ['1 chuck roast (3 lbs) — slow cooker all week', '2–3 lbs 80/20 ground beef — bulk cook for lunches', '1 salmon fillet (7 oz) — cook Thursday fresh'] },
      { category: '🥩 Fresh Cook Meats', items: ['1–2 ribeye steaks (for Tue/Fri dinners)', '1 pack thick-cut bacon'] },
      { category: '🥚 Eggs & Dairy', items: ['2 dozen eggs', '2 sticks butter', 'Heavy cream (optional)'] },
      { category: '🧂 Basics', items: ['Sea salt', 'Beef tallow (for cooking)', 'Storage containers (glass preferred)'] },
    ],
    weeklyCost: '$80–$110',
    macros: {
      protein: '160–200g/day',
      fat: '120–160g/day',
      calories: '1,900–2,200/day',
      note: 'Batch cooking doesn\'t change macros — same food, less friction.',
    },
    tips: [
      'The slow cooker is your best carnivore investment — it turns $10 of chuck roast into 4 days of premium meals with 10 minutes of active effort.',
      'Glass containers keep batch-cooked meat fresh longer and reheat better than plastic. Invest in a set of 4–6 glass containers.',
      'Reheat ground beef in a dry cast iron skillet — 2 minutes on medium-high refreshes the texture far better than a microwave.',
      'Never batch-cook eggs for scrambling — scrambled eggs are always better fresh and take 8 minutes. Hard-boiled eggs are the only egg batch item.',
      'Label your containers with the day they were cooked. Chuck roast lasts 5–6 days refrigerated, ground beef 4–5 days.',
    ],
    faq: [
      {
        q: 'How long does batch-cooked carnivore food last in the fridge?',
        a: 'Chuck roast: 5–6 days. Ground beef: 4–5 days. Hard-boiled eggs: 7 days (in shell, refrigerated). Cooked bacon: 4–5 days. Salmon: 3–4 days (always best fresh). General rule: cook on Sunday, eat by Friday for all batch items.',
      },
      {
        q: 'Is it better to freeze or refrigerate carnivore meal prep?',
        a: 'Refrigerate for the current week, freeze for the following week. A great system: batch-cook double quantities on Sunday, refrigerate one week\'s worth, and freeze the second week. Defrost frozen portions Wednesday–Thursday for next week. This system means you always have a backup supply and take advantage of bulk discounts.',
      },
      {
        q: 'Does reheated meat taste as good as fresh-cooked?',
        a: 'Chuck roast and ground beef reheat very well — the texture holds. Steak does not reheat well (becomes rubbery) — always cook steak fresh. Salmon should always be cooked fresh — reheated fish degrades significantly. The meal prep strategy accounts for this: batch items are inherently reheat-friendly cuts.',
      },
      {
        q: 'How do I reheat carnivore food without drying it out?',
        a: 'Best method: cast iron skillet with a teaspoon of tallow or butter on medium heat, 2–3 minutes with a lid. The fat prevents drying and the lid traps steam to re-moisturize the meat. Never microwave steak or chuck roast — the uneven heat creates tough spots. Ground beef can be microwaved in 60-second bursts if you\'re in a hurry.',
      },
    ],
  },
}

const mealPlanSlugs = Object.keys(mealPlans)

export async function generateStaticParams() {
  return mealPlanSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const plan = mealPlans[slug]
  if (!plan) return { title: 'Meal Plan Not Found' }
  return {
    title: plan.metaTitle,
    description: plan.metaDescription,
    keywords: plan.keywords,
    openGraph: {
      title: plan.metaTitle,
      description: plan.metaDescription,
      url: `https://carnivorecalc.com/meal-plans/${slug}`,
      siteName: 'CarnivoreCalc',
      type: 'article',
    },
  }
}

export default async function MealPlanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const plan = mealPlans[slug]
  if (!plan) notFound()

  const isShoppingList = slug === 'shopping-list'
  const isMealPrep = slug === 'meal-prep-guide'

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 to-red-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-stone-300 transition-colors">CarnivoreCalc</Link>
          <span>›</span>
          <Link href="/meal-plans" className="hover:text-stone-300 transition-colors">Meal Plans</Link>
          <span>›</span>
          <span className="text-stone-400">{plan.title}</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{plan.emoji}</span>
            <div>
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-300 border border-red-800/50 font-medium mb-2">{plan.badge}</span>
              <h1 className="text-3xl md:text-4xl font-bold">{plan.h1}</h1>
            </div>
          </div>
          <p className="text-stone-400 leading-relaxed">{plan.intro}</p>
        </div>

        {/* Schedule */}
        {plan.scheduleType === 'days' && plan.days && !isShoppingList && !isMealPrep && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              {slug.includes('week') ? '7-Day Meal Schedule' : 'Daily Meal Schedule'}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-stone-700/40">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-stone-800/60">
                    <th className="text-left p-3 text-stone-400 font-semibold w-24">Day</th>
                    <th className="text-left p-3 text-stone-400 font-semibold">Breakfast</th>
                    <th className="text-left p-3 text-stone-400 font-semibold">Lunch</th>
                    <th className="text-left p-3 text-stone-400 font-semibold">Dinner</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.days.map((day, i) => (
                    <tr key={day.day} className={i % 2 === 0 ? 'bg-stone-800/20' : 'bg-stone-800/40'}>
                      <td className="p-3 font-semibold text-red-400">{day.day}</td>
                      <td className="p-3 text-stone-300">{day.breakfast}</td>
                      <td className="p-3 text-stone-300">{day.lunch}</td>
                      <td className="p-3 text-stone-300">{day.dinner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Shopping List or Meal Prep special table */}
        {(isShoppingList || isMealPrep) && plan.days && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">{isShoppingList ? 'Complete Shopping Reference' : 'Weekly Prep & Cook Schedule'}</h2>
            <div className="space-y-3">
              {plan.days.map((day, i) => (
                <div key={i} className="bg-stone-800/40 rounded-xl border border-stone-700/40 p-4">
                  <div className="font-semibold text-amber-400 mb-2">{day.day}</div>
                  <div className="grid sm:grid-cols-3 gap-2 text-sm text-stone-300">
                    <div><span className="text-stone-500 text-xs">①</span> {day.breakfast}</div>
                    <div><span className="text-stone-500 text-xs">②</span> {day.lunch}</div>
                    <div><span className="text-stone-500 text-xs">③</span> {day.dinner}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 30-day weekly overview */}
        {plan.scheduleType === 'weeks' && plan.weeks && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">4-Week Overview</h2>
            <div className="space-y-4">
              {plan.weeks.map((week, i) => (
                <div key={i} className="bg-stone-800/40 rounded-2xl border border-stone-700/40 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <div className="font-bold text-white">{week.week}</div>
                      <div className="text-red-400 text-xs">{week.theme}</div>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400 mb-2 leading-relaxed"><span className="text-stone-300 font-medium">Focus: </span>{week.focus}</p>
                  <p className="text-sm text-stone-400 leading-relaxed"><span className="text-stone-300 font-medium">Meals: </span>{week.meals}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shopping list */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {isShoppingList ? 'Master Carnivore Shopping List' : 'Weekly Shopping List'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {plan.shoppingList.map((section) => (
              <div key={section.category} className="bg-stone-800/40 rounded-xl border border-stone-700/40 p-4">
                <h3 className="font-semibold text-sm mb-3 text-amber-400">{section.category}</h3>
                <ul className="space-y-1.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-300">
                      <span className="text-stone-600 flex-shrink-0 mt-0.5">□</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cost + Macros */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-stone-800/40 rounded-xl border border-stone-700/40 p-5">
            <h3 className="font-semibold text-sm text-stone-400 mb-1">💰 Estimated Weekly Cost</h3>
            <div className="text-lg font-bold text-green-400">{plan.weeklyCost}</div>
          </div>
          <div className="bg-stone-800/40 rounded-xl border border-stone-700/40 p-5">
            <h3 className="font-semibold text-sm text-stone-400 mb-2">📊 Daily Macro Overview</h3>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <div className="font-bold text-red-400">{plan.macros.protein}</div>
                <div className="text-stone-500 text-xs">Protein</div>
              </div>
              <div>
                <div className="font-bold text-amber-400">{plan.macros.fat}</div>
                <div className="text-stone-500 text-xs">Fat</div>
              </div>
              <div>
                <div className="font-bold text-stone-300">{plan.macros.calories}</div>
                <div className="text-stone-500 text-xs">Calories</div>
              </div>
            </div>
            <p className="text-stone-500 text-xs mt-2 leading-relaxed">{plan.macros.note}</p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-stone-800/40 rounded-2xl border border-stone-700/40 p-5 mb-8">
          <h2 className="text-lg font-bold mb-3">💡 5 Tips for This Plan</h2>
          <ul className="space-y-3">
            {plan.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
                <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {plan.faq.map((item) => (
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
          <h2 className="text-xl font-bold mb-2">Get the Complete 30-Day PDF Meal Plan</h2>
          <p className="text-stone-400 text-sm mb-5 max-w-lg mx-auto">
            Every meal, every day — macro-personalized and print-ready. Includes shopping lists, restaurant guides, and the full 30-day schedule in one clean PDF.
          </p>
          <Link
            href="/#meal-plan"
            className="inline-block px-8 py-3 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 transition-colors"
          >
            Get the Meal Plan PDF — $17 →
          </Link>
          <p className="mt-2 text-stone-500 text-xs">One-time purchase · Instant download · 30-day guarantee</p>
        </div>

        {/* Related plans */}
        <div className="p-5 rounded-2xl border border-stone-700/40 bg-stone-800/30 mb-8">
          <h2 className="font-bold mb-3">More Carnivore Meal Plans</h2>
          <div className="flex flex-wrap gap-2">
            {mealPlanSlugs.filter(s => s !== slug).map(s => (
              <Link key={s} href={`/meal-plans/${s}`} className="text-sm text-red-400 hover:underline capitalize">
                {s.replace(/-/g, ' ')} →
              </Link>
            ))}
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
