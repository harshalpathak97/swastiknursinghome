// Patient-education pages (NMC permits non-promotional health information).
// reviewed: set to 'YYYY-MM-DD' once the treating doctor has read and approved
// the page; until then the page shows a "draft" notice.

export const conditions = [
  // ── Orthopedics ─────────────────────────────────────────────
  {
    slug: 'knee-pain-arthritis',
    doctor: 'dr-swapnil-shah',
    reviewed: null,
    title: { en: 'Knee pain and arthritis', hi: 'घुटने का दर्द और गठिया' },
    summary: {
      en: 'Knee pain that builds up over months is most often osteoarthritis, wear of the cartilage inside the joint. It is common after 45, and much of it can be managed without surgery.',
      hi: 'महीनों में धीरे-धीरे बढ़ने वाला घुटने का दर्द अक्सर ऑस्टियोआर्थराइटिस होता है, यानी जोड़ के अंदर की कार्टिलेज का घिसना। 45 की उम्र के बाद यह आम है, और ज़्यादातर बिना ऑपरेशन संभाला जा सकता है।',
    },
    signs: {
      en: ['Pain when climbing stairs or getting up from the floor', 'Stiffness in the morning that eases within half an hour', 'Swelling or a creaking feel in the knee', 'Knees slowly bowing outward'],
      hi: ['सीढ़ियाँ चढ़ते या ज़मीन से उठते समय दर्द', 'सुबह जकड़न जो आधे घंटे में कम हो जाती है', 'घुटने में सूजन या चटकने की आवाज़', 'घुटनों का धीरे-धीरे बाहर की ओर मुड़ना'],
    },
    see: {
      en: ['Pain lasting more than a few weeks', 'Pain that disturbs sleep or daily work', 'Swelling that keeps coming back', 'The knee locks or gives way'],
      hi: ['कुछ हफ़्तों से ज़्यादा दर्द', 'दर्द से नींद या रोज़ का काम बिगड़ना', 'बार-बार सूजन आना', 'घुटना अटकना या अचानक मुड़ जाना'],
    },
    urgent: {
      en: ['A hot, red, swollen knee with fever', 'You cannot put any weight on the leg after an injury'],
      hi: ['बुखार के साथ गर्म, लाल, सूजा हुआ घुटना', 'चोट के बाद पैर पर बिल्कुल वज़न न डाल पाना'],
    },
    visit: {
      en: 'The doctor examines the knee and may ask for a standing X-ray. Treatment usually starts with thigh-muscle exercises, weight control, physiotherapy and pain relief. Injections or surgery, including knee replacement, are discussed only if these do not help.',
      hi: 'डॉक्टर घुटने की जाँच करते हैं और खड़े होकर X-ray करवाने को कह सकते हैं। इलाज आमतौर पर जाँघ की मांसपेशियों के व्यायाम, वज़न नियंत्रण, फ़िज़ियोथेरेपी और दर्द की दवा से शुरू होता है। इंजेक्शन या ऑपरेशन (घुटना बदलना भी) की बात तभी होती है जब इनसे फ़ायदा न हो।',
    },
  },
  {
    slug: 'back-neck-pain',
    doctor: 'dr-swapnil-shah',
    reviewed: null,
    title: { en: 'Back and neck pain', hi: 'कमर और गर्दन का दर्द' },
    summary: {
      en: 'Most back and neck pain comes from strained muscles and joints, often after lifting, long hours at a desk or long commutes. It usually improves within a few weeks with movement and exercise.',
      hi: 'ज़्यादातर कमर और गर्दन का दर्द मांसपेशियों और जोड़ों के खिंचाव से होता है, अक्सर वज़न उठाने, देर तक डेस्क पर बैठने या लंबे सफ़र के बाद। यह आमतौर पर हिलने-डुलने और व्यायाम से कुछ हफ़्तों में ठीक हो जाता है।',
    },
    signs: {
      en: ['Pain and stiffness after lifting or sitting for long', 'Pain spreading down a leg (sciatica) or an arm', 'Tingling or numbness in the hands or feet'],
      hi: ['वज़न उठाने या देर तक बैठने के बाद दर्द और जकड़न', 'दर्द का पैर (साइटिका) या हाथ तक जाना', 'हाथ-पैरों में झनझनाहट या सुन्नपन'],
    },
    see: {
      en: ['Pain lasting more than 4 to 6 weeks', 'Pain shooting down a leg or arm with numbness', 'Back pain after a fall', 'Pain at night that rest does not ease'],
      hi: ['4 से 6 हफ़्ते से ज़्यादा दर्द', 'सुन्नपन के साथ पैर या हाथ में तेज़ दर्द', 'गिरने के बाद कमर दर्द', 'रात में दर्द जो आराम से भी कम न हो'],
    },
    urgent: {
      en: ['Loss of control over urine or stool', 'Numbness between the legs, or sudden weakness in a leg', 'Back pain with fever or unexplained weight loss'],
      hi: ['पेशाब या शौच पर नियंत्रण न रहना', 'जांघों के बीच सुन्नपन, या पैर में अचानक कमज़ोरी', 'बुखार या बिना वजह वज़न घटने के साथ कमर दर्द'],
    },
    visit: {
      en: 'The doctor checks your posture, movement and nerves. Most people do not need an X-ray or MRI on the first visit. Treatment is usually exercises, physiotherapy and short-term pain relief.',
      hi: 'डॉक्टर आपकी मुद्रा, हिलने-डुलने और नसों की जाँच करते हैं। ज़्यादातर लोगों को पहली विज़िट में X-ray या MRI की ज़रूरत नहीं होती। इलाज आमतौर पर व्यायाम, फ़िज़ियोथेरेपी और कुछ दिनों की दर्द की दवा है।',
    },
  },
  {
    slug: 'fractures',
    doctor: 'dr-swapnil-shah',
    reviewed: null,
    title: { en: 'Fractures (broken bones)', hi: 'फ़्रैक्चर (हड्डी टूटना)' },
    summary: {
      en: 'A fracture is a crack or break in a bone. Children’s bones, wrists after a fall, and the hips of older adults break most often.',
      hi: 'फ़्रैक्चर यानी हड्डी में दरार या टूटना। बच्चों की हड्डियाँ, गिरने पर कलाई, और बुज़ुर्गों का कूल्हा सबसे ज़्यादा टूटते हैं।',
    },
    signs: {
      en: ['Pain when the bone is touched', 'Swelling and bruising', 'Cannot move or use the arm or leg', 'The limb looks bent or out of shape'],
      hi: ['हड्डी को छूने पर दर्द', 'सूजन और नील पड़ना', 'हाथ या पैर हिला या इस्तेमाल न कर पाना', 'हाथ-पैर टेढ़ा दिखना'],
    },
    see: {
      en: ['Keep the limb still. Support it with a folded newspaper or cardboard and a cloth', 'Apply ice wrapped in a cloth', 'Do not try to straighten it, and do not let anyone massage it', 'Remove rings and bangles before swelling starts'],
      hi: ['हाथ-पैर को स्थिर रखें। मुड़े अख़बार या गत्ते और कपड़े से सहारा दें', 'कपड़े में लपेटकर बर्फ़ लगाएँ', 'सीधा करने की कोशिश न करें, और मालिश न करवाएँ', 'सूजन से पहले अंगूठी और चूड़ियाँ उतार दें'],
    },
    seeHeading: { en: 'First aid on the way', hi: 'रास्ते में प्राथमिक उपचार' },
    urgent: {
      en: ['Bone visible through the skin', 'The hand or foot is cold, blue or numb', 'Injury to the head, neck or back: do not move the person, call 108'],
      hi: ['त्वचा से हड्डी दिखना', 'हाथ या पैर ठंडा, नीला या सुन्न होना', 'सिर, गर्दन या कमर में चोट: व्यक्ति को न हिलाएँ, 108 पर कॉल करें'],
    },
    visit: {
      en: 'An X-ray confirms the fracture. Many are treated with a plaster or splint; some need an operation to fix the bone. Follow-up X-rays check healing, and physiotherapy after the plaster brings back strength and movement.',
      hi: 'X-ray से फ़्रैक्चर पक्का होता है। कई फ़्रैक्चर प्लास्टर या स्प्लिंट से ठीक होते हैं; कुछ में हड्डी जोड़ने के लिए ऑपरेशन चाहिए। बाद के X-ray से जुड़ने की जाँच होती है, और प्लास्टर के बाद फ़िज़ियोथेरेपी से ताक़त और हरकत लौटती है।',
    },
  },
  {
    slug: 'sports-injuries',
    doctor: 'dr-swapnil-shah',
    reviewed: null,
    title: { en: 'Sports injuries and sprains', hi: 'खेल की चोट और मोच' },
    summary: {
      en: 'Twisted ankles, knee ligament tears and pulled muscles are common in cricket, football, badminton and running. Early care decides how quickly you return to play.',
      hi: 'क्रिकेट, फ़ुटबॉल, बैडमिंटन और दौड़ में टखना मुड़ना, घुटने के लिगामेंट फटना और मांसपेशी खिंचना आम है। शुरुआती देखभाल से तय होता है कि आप कितनी जल्दी खेल में लौटेंगे।',
    },
    signs: {
      en: ['A “pop” at the moment of injury', 'Swelling within a few hours', 'The knee feels unstable or gives way', 'Pain when putting weight on the leg'],
      hi: ['चोट के समय “पॉप” जैसी आवाज़', 'कुछ घंटों में सूजन', 'घुटना ढीला लगना या मुड़ जाना', 'पैर पर वज़न डालने पर दर्द'],
    },
    see: {
      en: ['You cannot walk four steps', 'Swelling has not settled in 2 to 3 days', 'The knee locks, clicks or gives way', 'Pain returns every time you play'],
      hi: ['चार क़दम भी न चल पाना', '2 से 3 दिन में सूजन कम न होना', 'घुटना अटकना, क्लिक होना या मुड़ जाना', 'हर बार खेलने पर दर्द लौटना'],
    },
    urgent: {
      en: ['The joint looks out of place', 'The foot or hand is numb or cold'],
      hi: ['जोड़ अपनी जगह से हटा दिखे', 'पैर या हाथ सुन्न या ठंडा हो'],
    },
    visit: {
      en: 'For the first two days: rest, ice for 15 to 20 minutes at a time, a crepe bandage and keeping the leg raised. At the clinic the doctor examines the joint and may order an X-ray or MRI. Treatment ranges from a brace and physiotherapy to surgery for some ligament tears, with a plan for returning to sport.',
      hi: 'पहले दो दिन: आराम, 15 से 20 मिनट बर्फ़, क्रेप पट्टी और पैर ऊँचा रखें। क्लिनिक में डॉक्टर जोड़ की जाँच करते हैं और X-ray या MRI करवा सकते हैं। इलाज ब्रेस और फ़िज़ियोथेरेपी से लेकर कुछ लिगामेंट चोटों में ऑपरेशन तक हो सकता है, साथ में खेल में लौटने की योजना।',
    },
  },
  {
    slug: 'frozen-shoulder',
    doctor: 'dr-swapnil-shah',
    reviewed: null,
    title: { en: 'Frozen shoulder', hi: 'फ़्रोज़न शोल्डर (कंधे की जकड़न)' },
    summary: {
      en: 'The shoulder slowly becomes painful and stiff over weeks to months. It is most common between 40 and 60, and in people with diabetes or thyroid problems.',
      hi: 'कंधा हफ़्तों से महीनों में धीरे-धीरे दर्दनाक और जकड़ा हुआ हो जाता है। यह 40 से 60 की उम्र में, और डायबिटीज़ या थायरॉइड वालों में ज़्यादा होता है।',
    },
    signs: {
      en: ['Trouble reaching behind your back or combing your hair', 'Pain that is worse at night, especially lying on that side', 'The arm will not lift fully even when someone helps'],
      hi: ['पीठ के पीछे हाथ ले जाने या बाल बनाने में दिक़्क़त', 'रात में ज़्यादा दर्द, ख़ासकर उसी तरफ़ लेटने पर', 'किसी की मदद से भी हाथ पूरा ऊपर न उठना'],
    },
    see: {
      en: ['Stiffness lasting more than a few weeks', 'You cannot lift the arm above your shoulder'],
      hi: ['कुछ हफ़्तों से ज़्यादा जकड़न', 'हाथ कंधे से ऊपर न उठा पाना'],
    },
    urgent: {
      en: ['Left shoulder or arm pain with chest pain, breathlessness or sweating can be a heart attack. Call 108 at once'],
      hi: ['सीने में दर्द, साँस फूलने या पसीने के साथ बाएँ कंधे या हाथ में दर्द हार्ट अटैक हो सकता है। तुरंत 108 पर कॉल करें'],
    },
    visit: {
      en: 'The doctor examines the shoulder and may take an X-ray to rule out other causes. Treatment is regular stretching with a physiotherapist, pain relief and sometimes an injection. Recovery is slow, often several months.',
      hi: 'डॉक्टर कंधे की जाँच करते हैं और दूसरे कारणों को देखने के लिए X-ray करवा सकते हैं। इलाज है फ़िज़ियोथेरेपिस्ट के साथ नियमित स्ट्रेचिंग, दर्द की दवा और कभी-कभी इंजेक्शन। ठीक होने में समय लगता है, अक्सर कई महीने।',
    },
  },
  {
    slug: 'osteoporosis',
    doctor: 'dr-swapnil-shah',
    reviewed: null,
    title: { en: 'Osteoporosis (weak bones)', hi: 'ऑस्टियोपोरोसिस (कमज़ोर हड्डियाँ)' },
    summary: {
      en: 'Bones lose strength silently, often with no pain until one breaks after a minor fall. Low vitamin D is very common in India and adds to the risk.',
      hi: 'हड्डियाँ चुपचाप कमज़ोर होती हैं, अक्सर तब तक कोई दर्द नहीं होता जब तक मामूली गिरने पर हड्डी न टूट जाए। भारत में विटामिन D की कमी बहुत आम है, जो जोखिम बढ़ाती है।',
    },
    signs: {
      en: ['A wrist, hip or spine fracture after a minor fall', 'Losing height or a stooping back', 'Who is at risk: women after menopause, adults over 60, long-term steroid use, smoking, a thin build'],
      hi: ['मामूली गिरने पर कलाई, कूल्हे या रीढ़ में फ़्रैक्चर', 'क़द घटना या कमर झुकना', 'किसे ख़तरा है: मेनोपॉज़ के बाद महिलाएँ, 60 से ऊपर, लंबे समय तक स्टेरॉयड, धूम्रपान, दुबला शरीर'],
    },
    see: {
      en: ['You have any of the risk factors above', 'You broke a bone in a minor fall'],
      hi: ['ऊपर दिया कोई भी जोखिम हो', 'मामूली गिरने पर हड्डी टूटी हो'],
    },
    urgent: {
      en: ['Sudden severe back pain or inability to stand after a fall'],
      hi: ['गिरने के बाद अचानक तेज़ कमर दर्द या खड़े न हो पाना'],
    },
    visit: {
      en: 'The doctor may advise a bone density (DEXA) scan and a vitamin D test. Treatment is calcium and vitamin D, weight-bearing exercise, medicines when needed, and making the home safer against falls.',
      hi: 'डॉक्टर बोन डेंसिटी (DEXA) स्कैन और विटामिन D जाँच की सलाह दे सकते हैं। इलाज है कैल्शियम और विटामिन D, वज़न उठाने वाले व्यायाम, ज़रूरत हो तो दवा, और घर को गिरने से सुरक्षित बनाना।',
    },
  },

  // ── Pediatrics ──────────────────────────────────────────────
  {
    slug: 'fever-in-children',
    doctor: 'dr-amit-shah',
    reviewed: null,
    title: { en: 'Fever in children', hi: 'बच्चों में बुखार' },
    summary: {
      en: 'A temperature of 100.4°F (38°C) or more is a fever. Most fevers in children are caused by viral infections and settle in 2 to 3 days. How the child is behaving matters more than the number on the thermometer.',
      hi: '100.4°F (38°C) या उससे ज़्यादा तापमान बुखार है। बच्चों में ज़्यादातर बुखार वायरल इन्फ़ेक्शन से होता है और 2 से 3 दिन में उतर जाता है। थर्मामीटर के नंबर से ज़्यादा ज़रूरी है कि बच्चा कैसा व्यवहार कर रहा है।',
    },
    signs: {
      en: ['Give paracetamol only in the dose your doctor gave for your child’s weight', 'Plenty of fluids and light clothing', 'Do not give aspirin, do not sponge with cold water, and do not start antibiotics on your own'],
      hi: ['पैरासिटामोल सिर्फ़ उतनी ही दें जितनी डॉक्टर ने बच्चे के वज़न के हिसाब से बताई है', 'ख़ूब पानी-तरल और हल्के कपड़े', 'एस्पिरिन न दें, ठंडे पानी से पट्टी न करें, और अपने मन से एंटीबायोटिक शुरू न करें'],
    },
    signsHeading: { en: 'At home', hi: 'घर पर' },
    see: {
      en: ['Fever for more than 2 to 3 days', 'Not drinking, or passing much less urine', 'Ear pain, a rash, or burning while passing urine', 'During monsoon: fever with body ache, vomiting or stomach pain, since dengue and malaria are common'],
      hi: ['2 से 3 दिन से ज़्यादा बुखार', 'पानी न पीना, या पेशाब बहुत कम होना', 'कान में दर्द, दाने, या पेशाब में जलन', 'मानसून में: बदन दर्द, उल्टी या पेट दर्द के साथ बुखार, क्योंकि डेंगू और मलेरिया आम हैं'],
    },
    urgent: {
      en: ['Any fever in a baby under 3 months', 'A fit (convulsion)', 'Fast or difficult breathing', 'Very drowsy or hard to wake', 'A rash that does not fade when pressed with a glass', 'Bleeding from gums or nose, or black stools'],
      hi: ['3 महीने से छोटे बच्चे को कोई भी बुखार', 'झटके (दौरा) आना', 'तेज़ या मुश्किल से साँस लेना', 'बहुत सुस्त या मुश्किल से जागना', 'दाने जो गिलास से दबाने पर फीके न हों', 'मसूड़ों या नाक से ख़ून, या काला मल'],
    },
    visit: {
      en: 'The doctor examines the child to find the cause, and orders blood tests only when they will change the treatment. Bring a note of the temperatures and the medicines already given.',
      hi: 'डॉक्टर कारण जानने के लिए बच्चे की जाँच करते हैं, और ख़ून की जाँच तभी करवाते हैं जब उससे इलाज बदले। तापमान और दी गई दवाइयों का नोट साथ लाएँ।',
    },
  },
  {
    slug: 'newborn-care',
    doctor: 'dr-amit-shah',
    reviewed: null,
    title: { en: 'Newborn care', hi: 'नवजात शिशु की देखभाल' },
    summary: {
      en: 'The first weeks bring a lot of questions. These are the points parents ask about most.',
      hi: 'शुरुआती हफ़्तों में बहुत सवाल आते हैं। ये वे बातें हैं जिनके बारे में माता-पिता सबसे ज़्यादा पूछते हैं।',
    },
    signs: {
      en: ['Only breast milk for the first 6 months: no water, ghutti or honey', 'Feeds 8 to 12 times a day; 6 or more wet nappies a day after the first week', 'Keep the cord stump clean and dry; do not apply oil, powder or anything else', 'Do not put kajal in the eyes', 'Birth vaccines: BCG, OPV and Hepatitis B. Next due at 6 weeks'],
      hi: ['पहले 6 महीने सिर्फ़ माँ का दूध: पानी, घुट्टी या शहद नहीं', 'दिन में 8 से 12 बार दूध; पहले हफ़्ते के बाद रोज़ 6 या ज़्यादा गीले नैपी', 'नाल को साफ़ और सूखा रखें; तेल, पाउडर या कुछ भी न लगाएँ', 'आँखों में काजल न लगाएँ', 'जन्म के टीके: BCG, OPV और हेपेटाइटिस B। अगले 6 हफ़्ते पर'],
    },
    signsHeading: { en: 'The basics', hi: 'बुनियादी बातें' },
    see: {
      en: ['Yellow skin in the first 24 hours, on the palms and soles, or lasting beyond 2 weeks', 'Not gaining weight by the 2-week check', 'Redness or pus around the cord'],
      hi: ['पहले 24 घंटे में, या हथेली-तलवों पर पीलापन, या 2 हफ़्ते से ज़्यादा', '2 हफ़्ते की जाँच तक वज़न न बढ़ना', 'नाल के आसपास लाली या मवाद'],
    },
    urgent: {
      en: ['Not sucking or feeding poorly', 'Fever, or the body feels cold', 'Fast breathing or the chest pulling in', 'A fit, bluish lips, or very floppy and sleepy'],
      hi: ['दूध न खींचना या ठीक से न पीना', 'बुखार, या शरीर ठंडा लगना', 'तेज़ साँस या साँस लेते समय छाती अंदर धँसना', 'झटके, नीले होंठ, या बहुत ढीला और सुस्त होना'],
    },
    visit: {
      en: 'At each visit the baby is weighed and measured, feeding is reviewed and the next vaccines are planned. Bring the discharge card from the hospital of birth.',
      hi: 'हर विज़िट पर बच्चे का वज़न और लंबाई नापी जाती है, दूध पिलाने की समीक्षा होती है और अगले टीके तय होते हैं। जन्म वाले अस्पताल का डिस्चार्ज कार्ड साथ लाएँ।',
    },
  },
  {
    slug: 'growth-and-nutrition',
    doctor: 'dr-amit-shah',
    reviewed: null,
    title: { en: 'Growth and nutrition', hi: 'बढ़त और पोषण' },
    summary: {
      en: 'A child’s weight, height and head size are plotted on growth charts at each visit. One reading matters less than the direction the line is going.',
      hi: 'हर विज़िट पर बच्चे का वज़न, लंबाई और सिर का माप ग्रोथ चार्ट पर दर्ज किया जाता है। एक बार के माप से ज़्यादा ज़रूरी है कि लाइन किस दिशा में जा रही है।',
    },
    signs: {
      en: ['Start other foods at 6 months: dal, khichdi, mashed fruit, ragi', 'Continue breastfeeding up to 2 years if possible', 'Limit biscuits, packaged juice and sugary drinks', 'No screens while eating'],
      hi: ['6 महीने पर दूसरा खाना शुरू करें: दाल, खिचड़ी, मसले फल, रागी', 'हो सके तो 2 साल तक माँ का दूध जारी रखें', 'बिस्किट, पैकेट वाले जूस और मीठे पेय कम करें', 'खाते समय स्क्रीन नहीं'],
    },
    signsHeading: { en: 'Everyday feeding', hi: 'रोज़ का खान-पान' },
    see: {
      en: ['Weight not increasing, or dropping across the chart lines', 'Fussy eating along with weight loss', 'Late milestones such as sitting, walking or talking', 'Gaining weight much faster than height'],
      hi: ['वज़न न बढ़ना, या चार्ट की लाइनों से नीचे गिरना', 'खाने में नख़रे के साथ वज़न घटना', 'बैठना, चलना या बोलना देर से शुरू होना', 'लंबाई से बहुत ज़्यादा तेज़ी से वज़न बढ़ना'],
    },
    urgent: {
      en: ['Refusing all feeds with vomiting or very few wet nappies'],
      hi: ['उल्टी के साथ कुछ भी न खाना-पीना, या बहुत कम गीले नैपी'],
    },
    visit: {
      en: 'The doctor measures and plots growth, goes through what the child eats in a day, and checks for iron or vitamin D deficiency when needed. Deworming is planned as per age.',
      hi: 'डॉक्टर माप लेकर चार्ट पर दर्ज करते हैं, बच्चा दिन भर क्या खाता है यह देखते हैं, और ज़रूरत हो तो आयरन या विटामिन D की कमी जाँचते हैं। उम्र के हिसाब से पेट के कीड़ों की दवा तय होती है।',
    },
  },
  {
    slug: 'cough-cold-asthma',
    doctor: 'dr-amit-shah',
    reviewed: null,
    title: { en: 'Cough, cold and asthma in children', hi: 'बच्चों में खाँसी, सर्दी और अस्थमा' },
    summary: {
      en: 'Young children catch several colds a year, and most clear up in 7 to 10 days. A cough that keeps returning at night or with play can be asthma, which is treatable.',
      hi: 'छोटे बच्चों को साल में कई बार सर्दी होती है, और ज़्यादातर 7 से 10 दिन में ठीक हो जाती है। रात में या खेलते समय बार-बार लौटने वाली खाँसी अस्थमा हो सकती है, जिसका इलाज है।',
    },
    signs: {
      en: ['Saline nose drops and warm fluids help', 'Do not give cough and cold syrups to children under 4 without the doctor’s advice', 'Signs of asthma: wheezing, cough at night, or cough with running or cold air'],
      hi: ['सलाइन नेज़ल ड्रॉप और गर्म तरल पदार्थ मदद करते हैं', '4 साल से छोटे बच्चों को डॉक्टर की सलाह के बिना खाँसी-सर्दी का सिरप न दें', 'अस्थमा के लक्षण: घरघराहट, रात में खाँसी, या दौड़ने या ठंडी हवा से खाँसी'],
    },
    signsHeading: { en: 'What helps', hi: 'क्या मदद करता है' },
    see: {
      en: ['Cough lasting more than 2 to 3 weeks', 'Wheezing that keeps coming back', 'Fever with cough for more than 3 days', 'Night cough that disturbs sleep'],
      hi: ['2 से 3 हफ़्ते से ज़्यादा खाँसी', 'बार-बार घरघराहट', '3 दिन से ज़्यादा खाँसी के साथ बुखार', 'रात की खाँसी से नींद टूटना'],
    },
    urgent: {
      en: ['Fast or hard breathing, or the ribs pulling in', 'Bluish lips', 'Too breathless to talk or feed', 'Very drowsy'],
      hi: ['तेज़ या मुश्किल से साँस, या पसलियाँ अंदर धँसना', 'नीले होंठ', 'इतनी साँस फूलना कि बोल या पी न सके', 'बहुत सुस्ती'],
    },
    visit: {
      en: 'The doctor listens to the chest and, if it is asthma, shows you how to use an inhaler with a spacer. Inhalers are the standard, safe treatment for children; they are not habit-forming.',
      hi: 'डॉक्टर छाती की जाँच करते हैं और अस्थमा होने पर स्पेसर के साथ इनहेलर का सही इस्तेमाल सिखाते हैं। बच्चों के लिए इनहेलर ही मानक और सुरक्षित इलाज है; इसकी आदत नहीं पड़ती।',
    },
  },
]

export const conditionBySlug = Object.fromEntries(conditions.map((c) => [c.slug, c]))
