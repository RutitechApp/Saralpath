export const fssaiLicenseData: Record<
  Language,
  {
    title: string;
    description: string;
    steps: { step: number; title: string; details: string }[];
  }
> = {
  en: {
    title: "FSSAI License",
    description:
      "An FSSAI License is mandatory for all food-related businesses in India, issued by the Food Safety and Standards Authority of India. It ensures food safety compliance and legal authorization to operate a food business.",
    steps: [
      {
        step: 1,
        title: "Identity Proof",
        details:
          "Provide valid ID proof such as Aadhaar card, PAN card, Voter ID, or Passport.",
      },
      {
        step: 2,
        title: "Address Proof",
        details:
          "Submit proof of business address such as electricity bill, rental agreement, or property tax receipt.",
      },
      {
        step: 3,
        title: "Business Registration Proof",
        details:
          "Include documents like partnership deed, incorporation certificate, shop act license, or GST registration.",
      },
      {
        step: 4,
        title: "Food Business Details",
        details:
          "Provide details about food business type, product list, and category (manufacturer, trader, transporter, etc.).",
      },
      {
        step: 5,
        title: "Photographs",
        details:
          "Submit recent passport-size photographs of the applicant or business owner.",
      },
      {
        step: 6,
        title: "Premises Layout Plan",
        details:
          "Provide a layout or blueprint of the food processing/storage unit.",
      },
      {
        step: 7,
        title: "Proof of Premises Possession",
        details:
          "Documents like rent agreement, property documents, or NOC from owner.",
      },
      {
        step: 8,
        title: "FSMS Plan",
        details:
          "Submit Food Safety Management System plan as per FSSAI guidelines.",
      },
      {
        step: 9,
        title: "Declaration Form",
        details: "Signed declaration stating compliance with FSSAI rules.",
      },
      {
        step: 10,
        title: "Application Fee",
        details:
          "Pay required fee based on license type (Basic, State, Central).",
      },
    ],
  },
  hi: {
    title: "एफएसएसएआई लाइसेंस",
    description:
      "एफएसएसएआई लाइसेंस भारत में सभी खाद्य व्यवसायों के लिए अनिवार्य है। यह खाद्य सुरक्षा और कानूनी अनुमोदन सुनिश्चित करता है।",
    steps: [
      {
        step: 1,
        title: "पहचान प्रमाण",
        details:
          "आधार कार्ड, पैन कार्ड, वोटर आईडी या पासपोर्ट जैसे पहचान प्रमाण दें।",
      },
      {
        step: 2,
        title: "पता प्रमाण",
        details:
          "व्यवसाय पते का प्रमाण दें जैसे बिजली बिल, किरायानामा या प्रॉपर्टी टैक्स रसीद।",
      },
      {
        step: 3,
        title: "व्यवसाय पंजीकरण प्रमाण",
        details:
          "साझेदारी डीड, पंजीकरण प्रमाणपत्र, दुकान लाइसेंस या GST पंजीकरण शामिल करें।",
      },
      {
        step: 4,
        title: "खाद्य व्यवसाय विवरण",
        details:
          "व्यवसाय के प्रकार, उत्पाद सूची और श्रेणी (निर्माता, व्यापारी आदि) का विवरण दें।",
      },
      {
        step: 5,
        title: "फोटो",
        details: "आवेदक की हाल की पासपोर्ट साइज तस्वीरें दें।",
      },
      {
        step: 6,
        title: "प्रांगण लेआउट योजना",
        details: "यूनिट का लेआउट या ब्लूप्रिंट प्रदान करें।",
      },
      {
        step: 7,
        title: "प्रांगण स्वामित्व प्रमाण",
        details: "किरायानामा, संपत्ति दस्तावेज या मालिक से NOC दें।",
      },
      {
        step: 8,
        title: "FSMS योजना",
        details: "FSSAI दिशानिर्देशों के अनुसार FSMS योजना दें।",
      },
      {
        step: 9,
        title: "घोषणा पत्र",
        details: "नियमों का पालन करने की हस्ताक्षरित घोषणा दें।",
      },
      {
        step: 10,
        title: "आवेदन शुल्क",
        details: "लाइसेंस प्रकार के अनुसार शुल्क जमा करें।",
      },
    ],
  },
  gu: {
    title: "FSSAI લાઈસન્સ",
    description:
      "ભારતમાં તમામ ફૂડ બિઝનેસ માટે FSSAI લાઈસન્સ ફરજિયાત છે. તે ખોરાક સુરક્ષા અને કાનૂની પાલન સુનિશ્ચિત કરે છે.",
    steps: [
      {
        step: 1,
        title: "ઓળખનો પુરાવો",
        details:
          "આધાર કાર્ડ, PAN કાર્ડ, મતદાર કાર્ડ અથવા પાસપોર્ટ જેવા ઓળખ પુરાવા આપો.",
      },
      {
        step: 2,
        title: "સરનામાનો પુરાવો",
        details: "બિલ, ભાડા કરાર અથવા પ્રોપર્ટી ટેક્સ રસીદ આપો.",
      },
      {
        step: 3,
        title: "વ્યવસાય નોંધણી",
        details:
          "પાર્ટનરશિપ ડીડ, રજીસ્ટ્રેશન સર્ટિફિકેટ, દુકાન લાઈસન્સ અથવા GST નંબર આપો.",
      },
      {
        step: 4,
        title: "ફૂડ બિઝનેસ વિગતો",
        details: "બિઝનેસ પ્રકાર, પ્રોડક્ટ યાદી અને કેટેગરીની વિગતો આપો.",
      },
      {
        step: 5,
        title: "ફોટોગ્રાફ",
        details: "તાજેતરના પાસપોર્ટ સાઈઝના ફોટો આપો.",
      },
      {
        step: 6,
        title: "લેઆઉટ પ્લાન",
        details: "પ્રોસેસિંગ યુનિટનો નકશો અથવા લેઆઉટ આપો.",
      },
      {
        step: 7,
        title: "જમીનનો પુરાવો",
        details: "ભાડા કરાર, મિલ્કતના કાગળ અથવા NOC આપો.",
      },
      {
        step: 8,
        title: "FSMS યોજના",
        details: "FSMS યોજના FSSAI મુજબ રજૂ કરો.",
      },
      { step: 9, title: "ઘોષણાપત્ર", details: "નિયમોનું પાલન કરવા સંમતિ આપો." },
      { step: 10, title: "ફી", details: "લાઈસન્સના પ્રકાર મુજબ ફી ભરો." },
    ],
  },
  bn: {
    title: "FSSAI লাইসেন্স",
    description:
      "ভারতের সমস্ত খাদ্য ব্যবসার জন্য FSSAI লাইসেন্স বাধ্যতামূলক। এটি খাদ্য সুরক্ষা এবং আইনি অনুমোদন নিশ্চিত করে।",
    steps: [
      {
        step: 1,
        title: "পরিচয় প্রমাণ",
        details: "আধার কার্ড, PAN কার্ড, ভোটার আইডি অথবা পাসপোর্ট জমা দিন।",
      },
      {
        step: 2,
        title: "ঠিকানা প্রমাণ",
        details:
          "ইলেকট্রিসিটি বিল, ভাড়া চুক্তি অথবা প্রোপার্টি ট্যাক্স রশিদ দিন।",
      },
      {
        step: 3,
        title: "ব্যবসা নিবন্ধন",
        details: "পার্টনারশিপ ডিড, রেজিস্ট্রেশন সার্টিফিকেট বা GST কপি দিন।",
      },
      {
        step: 4,
        title: "খাদ্য ব্যবসা বিবরণ",
        details: "ব্যবসার ধরন, পণ্যের তালিকা ও বিভাগ উল্লেখ করুন।",
      },
      {
        step: 5,
        title: "ফটোগ্রাফ",
        details: "সাম্প্রতিক পাসপোর্ট সাইজ ছবি দিন।",
      },
      {
        step: 6,
        title: "প্রাঙ্গণ নকশা",
        details: "প্রসেসিং ইউনিটের নকশা বা ব্লুপ্রিন্ট দিন।",
      },
      {
        step: 7,
        title: "প্রাঙ্গণ মালিকানার প্রমাণ",
        details: "ভাড়া চুক্তি, সম্পত্তির দলিল বা NOC দিন।",
      },
      {
        step: 8,
        title: "FSMS প্ল্যান",
        details: "FSSAI অনুযায়ী FSMS প্ল্যান দিন।",
      },
      { step: 9, title: "ঘোষণা পত্র", details: "নিয়ম মানার লিখিত ঘোষণা দিন।" },
      {
        step: 10,
        title: "ফি",
        details: "লাইসেন্সের ধরন অনুযায়ী ফি প্রদান করুন।",
      },
    ],
  },
  kok: {
    title: "FSSAI लाइसेंस",
    description:
      "भारतांतल्या सगळ्या खाद्य व्यवसायाक FSSAI लाइसेंस गरजेचें आसता. हे खाद्य सुरक्षा आनी कायदेशीर मान्यता सुनिश्चित करता.",
    steps: [
      {
        step: 1,
        title: "ओळख पुरावो",
        details: "आधार, PAN, वोटर ID वा पासपोर्ट दिल्ल्यो.",
      },
      {
        step: 2,
        title: "वसलो पुरावो",
        details: "वीज बिल, भाड्याचो करार वा प्रॉपर्टी टैक्सची रसीद.",
      },
      {
        step: 3,
        title: "व्यवसाय नोंदणी",
        details: "पार्टनरशिप डीड, रजिस्ट्रेशन सर्टिफिकेट, GST वगैरे.",
      },
      {
        step: 4,
        title: "फूड व्यवसाय विवरण",
        details: "उद्योगाचो प्रकार, उत्पादनांची लयिस्ट.",
      },
      { step: 5, title: "छायाचित्र", details: "नवीन पासपोर्ट सायझ फोटो." },
      {
        step: 6,
        title: "ठिकाणाचो प्लान",
        details: "प्रोसेसिंग यूनिटचो नकाशो.",
      },
      {
        step: 7,
        title: "जागेचो पुरावो",
        details: "भाडो करार, मालकी कागद वा NOC.",
      },
      {
        step: 8,
        title: "FSMS योजना",
        details: "FSSAI मार्गदर्शनांतलें FSMS प्लान.",
      },
      { step: 9, title: "घोषणा", details: "नियम पाळची सहीत घोषणा." },
      { step: 10, title: "फी", details: "लाइसेंस प्रकारानुसार फी." },
    ],
  },
  kn: {
    title: "FSSAI ಪರವಾನಗಿ",
    description:
      "ಭಾರತದ ಎಲ್ಲಾ ಆಹಾರ ವ್ಯವಹಾರಗಳಿಗೆ FSSAI ಪರವಾನಗಿ ಕಡ್ಡಾಯವಾಗಿದೆ. ಇದು ಆಹಾರ ಸುರಕ್ಷತೆ ಮತ್ತು ಕಾನೂನು ಪಾಲನೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.",
    steps: [
      {
        step: 1,
        title: "ಗುರುತುಪತ್ರ",
        details: "ಆಧಾರ, PAN, ಮತದಾರ ಗುರುತು, ಪಾಸ್‌ಪೋರ್ಟ್ ಕೊಡಿ.",
      },
      {
        step: 2,
        title: "ವಾಸದ ಪ್ರಮಾಣ",
        details: "ವಿದ್ಯುತ್ ಬಿಲ್, ಬಾಡಿಗೆ ಒಪ್ಪಂದ ಅಥವಾ ಪ್ರಾಪರ್ಟಿ ಟೆಕ್ಸ್ ರಸಿತು.",
      },
      {
        step: 3,
        title: "ವ್ಯವಸ್ಥೆಯ ನೋಂದಣಿ",
        details: "ಪಾರ್ಟ್ನರ್‌ಶಿಪ್ ಡೀಡ್, ರಿಜಿಸ್ಟ್ರೇಶನ್, GST ಪ್ರತಿಗಳು.",
      },
      {
        step: 4,
        title: "ಅಹಾರ ವ್ಯವಹಾರ ವಿವರ",
        details: "ವ್ಯವಸ್ಥೆಯ ಪ್ರಕಾರ, ಉತ್ಪನ್ನ ಪಟ್ಟಿ.",
      },
      { step: 5, title: "ಫೋಟೋ", details: "ಇತ್ತೀಚಿನ ಪಾಸ್‌ಪೋರ್ಟ್ ಗಾತ್ರದ ಫೋಟೋ." },
      { step: 6, title: "ನಕ್ಷೆ/ಲೇಔಟ್", details: "ಯೂನಿಟ್‌ನ ನಕ್ಷೆ ಅಥವಾ ಪ್ಲಾನ್." },
      {
        step: 7,
        title: "ಸ್ವತ್ತಿನ ದಾಖಲೆ",
        details: "ಬಾಡಿಗೆ ಒಪ್ಪಂದ, ಹಕ್ಕುಪತ್ರ ಅಥವಾ NOC.",
      },
      {
        step: 8,
        title: "FSMS ಯೋಜನೆ",
        details: "FSSAI ಮಾರ್ಗಸೂಚಿಯ ಪ್ರಕಾರ FSMS ಯೋಜನೆ.",
      },
      { step: 9, title: "ಘೋಷಣಾಪತ್ರ", details: "ನಿಯಮ ಪಾಲನೆ ಕುರಿತು ಘೋಷಣೆ." },
      {
        step: 10,
        title: "ಶುಲ್ಕ",
        details: "ಪರವಾನಗಿ ಪ್ರಕಾರಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಶುಲ್ಕ.",
      },
    ],
  },
  ml: {
    title: "FSSAI ലൈസൻസ്",
    description:
      "ഇന്ത്യയിലെ എല്ലാ ഭക്ഷണ ബിസിനസുകൾക്കും FSSAI ലൈസൻസ് നിർബന്ധമാണ്. ഇത് ഭക്ഷ്യസുരക്ഷയും നിയമാനുസൃതതയും ഉറപ്പാക്കുന്നു.",
    steps: [
      {
        step: 1,
        title: "തിരിച്ചറിയൽ തെളിവ്",
        details: "ആധാർ, PAN, വോട്ടർ ഐഡി, പാസ്പോർട്ട് എന്നിവ നൽകുക.",
      },
      {
        step: 2,
        title: "വിലാസ തെളിവ്",
        details:
          "വൈദ്യുതി ബിൽ, വാടക കരാർ അല്ലെങ്കിൽ പ്രോപ്പർട്ടി ടാക്സ് രസീത്.",
      },
      {
        step: 3,
        title: "ബിസിനസ് രജിസ്ട്രേഷൻ",
        details:
          "പാർട്ട്ണർഷിപ്പ് ഡീഡ്, രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ് അല്ലെങ്കിൽ GST.",
      },
      {
        step: 4,
        title: "ഭക്ഷണ ബിസിനസ്സ് വിശദാംശങ്ങൾ",
        details: "ബിസിനസ്സ് തരം, ഉൽപ്പന്ന ലിസ്റ്റ്.",
      },
      {
        step: 5,
        title: "ഫോട്ടോ",
        details: "അപേക്ഷകന്റെ പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ.",
      },
      {
        step: 6,
        title: "ലെഔട്ട് പ്ലാൻ",
        details: "പ്രോസസ്സിംഗ് യൂണിറ്റിന്റെ പ്ലാൻ/നക്ഷ.",
      },
      {
        step: 7,
        title: "സ്ഥലത്തിന്റെ തെളിവ്",
        details: "വാടക കരാർ, പ്രോപ്പർട്ടി ഡോക്യുമെന്റുകൾ, NOC.",
      },
      {
        step: 8,
        title: "FSMS പ്ലാൻ",
        details: "FSSAI പ്രകാരം FSMS പ്ലാൻ സമർപ്പിക്കുക.",
      },
      {
        step: 9,
        title: "ഡിക്ലറേഷൻ",
        details: "നിയമങ്ങൾ പാലിക്കുമെന്ന് ഒപ്പിട്ട പ്രഖ്യാപനം.",
      },
      { step: 10, title: "ഫീസ്", details: "ലൈസൻസ് തരം അനുസരിച്ച് ഫീസ്." },
    ],
  },
  mr: {
    title: "FSSAI परवाना",
    description:
      "भारतातील सर्व खाद्य व्यवसायांसाठी FSSAI परवाना अनिवार्य आहे. हे खाद्य सुरक्षा आणि कायदेशीर मान्यता सुनिश्चित करते.",
    steps: [
      {
        step: 1,
        title: "ओळखपत्र",
        details: "आधार कार्ड, PAN कार्ड, मतदान ओळखपत्र किंवा पासपोर्ट.",
      },
      {
        step: 2,
        title: "पत्त्याचा पुरावा",
        details: "वीज बिल, भाडे करार, प्रॉपर्टी टॅक्स रसीद.",
      },
      {
        step: 3,
        title: "व्यवसाय नोंदणी",
        details: "भागीदारी करार, नोंदणी प्रमाणपत्र, GST.",
      },
      {
        step: 4,
        title: "खाद्य व्यवसाय तपशील",
        details: "उद्योगाचा प्रकार, उत्पादनांची यादी.",
      },
      { step: 5, title: "छायाचित्र", details: "पासपोर्ट आकाराचे फोटो." },
      { step: 6, title: "लेआउट प्लॅन", details: "प्रोसेसिंग युनिटचा नकाशा." },
      {
        step: 7,
        title: "जागेचे पुरावे",
        details: "भाडे करार, मालकी कागद, NOC.",
      },
      {
        step: 8,
        title: "FSMS योजना",
        details: "FSSAI मार्गदर्शकानुसार FSMS योजना.",
      },
      { step: 9, title: "घोषणापत्र", details: "नियमांचे पालन करण्याची घोषणा." },
      { step: 10, title: "फी", details: "परवान्याच्या प्रकारानुसार फी." },
    ],
  },
  or: {
    title: "FSSAI ଲାଇସେନ୍ସ",
    description:
      "ଭାରତର ସମସ୍ତ ଖାଦ୍ୟ ବ୍ୟବସାୟ ପାଇଁ FSSAI ଲାଇସେନ୍ସ ଆବଶ୍ୟକ। ଏହା ଖାଦ୍ୟ ସୁରକ୍ଷା ଏବଂ କାନୁନିକ ଅନୁମୋଦନ ନିଶ୍ଚିତ କରେ।",
    steps: [
      {
        step: 1,
        title: "ପରିଚୟ ପ୍ରମାଣ",
        details: "ଆଧାର, PAN, ଭୋଟର ID, ପାସପୋର୍ଟ।",
      },
      {
        step: 2,
        title: "ଠିକଣା ପ୍ରମାଣ",
        details: "ବିଦ୍ୟୁତ ବିଲ୍, ଭଡା ଚୁକ୍ତି, ପ୍ରୋପର୍ଟି ଟ୍ୟାକ୍ସ।",
      },
      {
        step: 3,
        title: "ବ୍ୟବସାୟ ନୋଟିକରଣ",
        details: "ପାର୍ଟନରଶିପ୍, ରେଜିଷ୍ଟ୍ରେସନ୍, GST।",
      },
      {
        step: 4,
        title: "ଖାଦ୍ୟ ବ୍ୟବସାୟ ତଥ୍ୟ",
        details: "ପ୍ରକାର, ପ୍ରୋଡକ୍ଟ ତାଲିକା।",
      },
      { step: 5, title: "ଫଟୋ", details: "ପାସପୋର୍ଟ ସାଇଜ ଫଟୋ।" },
      { step: 6, title: "ନକଶା", details: "ଯନ୍ତ୍ର/ଘରର ନକଶା।" },
      {
        step: 7,
        title: "ସମ୍ପତ୍ତି ପ୍ରମାଣ",
        details: "ଭଡା ଚୁକ୍ତି, ସମ୍ପତ୍ତି କାଗଜ।",
      },
      { step: 8, title: "FSMS ପ୍ଲାନ୍", details: "FSSAI ଅନୁସାରେ FSMS ପ୍ଲାନ୍।" },
      { step: 9, title: "ଘୋଷଣା", details: "ନିୟମ ପାଳନ ଘୋଷଣା।" },
      { step: 10, title: "ଶୁଳ୍କ", details: "ଲାଇସେନ୍ସ ପ୍ରକାର ଅନୁଯାୟୀ ଶୁଳ୍କ।" },
    ],
  },
  te: {
    title: "FSSAI లైసెన్స్",
    description:
      "భారతదేశంలోని ప్రతి ఆహార వ్యాపారానికి FSSAI లైసెన్స్ తప్పనిసరి. ఇది ఆహార భద్రత మరియు చట్టబద్ధతను నిర్ధారిస్తుంది.",
    steps: [
      {
        step: 1,
        title: "గుర్తింపు రుజువు",
        details: "ఆధార్, PAN, ఓటర్ ID, పాస్‌పోర్ట్.",
      },
      {
        step: 2,
        title: "చిరునామా రుజువు",
        details: "ప్రస్తుత బిల్, అద్దె ఒప్పందం, ప్రాపర్టీ ట్యాక్స్.",
      },
      {
        step: 3,
        title: "వ్యాపార రిజిస్ట్రేషన్",
        details: "పార్ట్నర్‌షిప్ డీడ్, రిజిస్ట్రేషన్ సర్టిఫికేట్, GST.",
      },
      {
        step: 4,
        title: "ఆహార వ్యాపార వివరాలు",
        details: "వ్యాపార రకం, ఉత్పత్తుల జాబితా.",
      },
      { step: 5, title: "ఫోటోలు", details: "పాస్‌పోర్ట్ సైజు ఫోటోలు." },
      { step: 6, title: "లేఅవుట్ ప్లాన్", details: "యూనిట్ పథకం/డ్రాయింగ్." },
      {
        step: 7,
        title: "స్థలం రుజువు",
        details: "అద్దె ఒప్పందం, స్వంత కాగితాలు, NOC.",
      },
      {
        step: 8,
        title: "FSMS ప్రణాళిక",
        details: "FSSAI మార్గదర్శకాలకు అనుగుణంగా.",
      },
      { step: 9, title: "డిక్లరేషన్", details: "నిబంధనలు పాటించాలనే ప్రకటన." },
      { step: 10, title: "ఫీజు", details: "లైసెన్స్ రకం ప్రకారం." },
    ],
  },
  ta: {
    title: "FSSAI உரிமம்",
    description:
      "இந்தியாவில் அனைத்து உணவு தொழில்களுக்கும் FSSAI உரிமம் கட்டாயம். இது உணவு பாதுகாப்பையும் சட்டபூர்வ அனுமதியையும் உறுதி செய்கிறது.",
    steps: [
      {
        step: 1,
        title: "அடையாள சான்று",
        details: "ஆதார், PAN, வாக்காளர் அட்டை, பாஸ்போர்ட்.",
      },
      {
        step: 2,
        title: "முகவரி சான்று",
        details: "மின்சாரம் பில், வாடகை ஒப்பந்தம், சொத்து வரி ரசீது.",
      },
      {
        step: 3,
        title: "வணிக பதிவு",
        details: "கூட்டாளி ஒப்பந்தம், பதிவு சான்று, GST.",
      },
      {
        step: 4,
        title: "உணவு வணிக விவரங்கள்",
        details: "வணிக வகை, பொருட்களின் பட்டியல்.",
      },
      {
        step: 5,
        title: "புகைப்படங்கள்",
        details: "பாஸ்போர்ட் அளவு புகைப்படம்.",
      },
      {
        step: 6,
        title: "லேஅவுட் திட்டம்",
        details: "திட்ட வரைபடம் அல்லது ப்ளூபிரிண்ட்.",
      },
      {
        step: 7,
        title: "சொத்து சான்று",
        details: "வாடகை ஒப்பந்தம், உரிமை ஆவணங்கள், NOC.",
      },
      { step: 8, title: "FSMS திட்டம்", details: "FSSAI விதிகளின்படி FSMS." },
      {
        step: 9,
        title: "அறிக்கை",
        details: "விதிகளைப் பின்பற்றுவதாக அறிவிப்பு.",
      },
      { step: 10, title: "கட்டணம்", details: "உரிம வகை அடிப்படையில்." },
    ],
  },
};
