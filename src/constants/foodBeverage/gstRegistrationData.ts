export const gstRegistrationData: Record<
  Language,
  {
    title: string;
    description: string;
    steps: { step: number; title: string; details: string }[];
  }
> = {
  en: {
    title: "GST Registration",
    description:
      "GST registration is required for businesses whose turnover exceeds the specified threshold or for those involved in interstate supply, e-commerce, or other mandatory categories.",
    steps: [
      {
        step: 1,
        title: "PAN Card",
        details:
          "PAN card of the business or individual is mandatory for GST registration.",
      },
      {
        step: 2,
        title: "Aadhaar Card",
        details:
          "Applicant's Aadhaar card is required for identity verification.",
      },
      {
        step: 3,
        title: "Business Registration Proof",
        details:
          "Documents like incorporation certificate, partnership deed, or business registration proof are required.",
      },
      {
        step: 4,
        title: "Promoter Identity Proof",
        details:
          "Identity and address proof of promoters or directors with photographs.",
      },
      {
        step: 5,
        title: "Address Proof of Business",
        details:
          "Rental agreement, electricity bill, or property tax receipt for the place of business.",
      },
      {
        step: 6,
        title: "Bank Proof",
        details:
          "Bank statement or a cancelled cheque is needed for verification.",
      },
      {
        step: 7,
        title: "Digital Signature (DSC)",
        details:
          "DSC is mandatory for companies, LLPs, and certain business categories.",
      },
      {
        step: 8,
        title: "Authorization Letter",
        details:
          "Letter of authorization or board resolution for the authorized signatory.",
      },
    ],
  },
  hi: {
    title: "जीएसटी पंजीकरण",
    description:
      "जीएसटी पंजीकरण उन व्यवसायों के लिए आवश्यक है जिनका टर्नओवर निर्धारित सीमा से अधिक है या जो अंतर्राज्यीय व्यापार, ई-कॉमर्स आदि में शामिल हैं।",
    steps: [
      {
        step: 1,
        title: "पैन कार्ड",
        details:
          "व्यवसाय या व्यक्ति का पैन कार्ड जीएसटी पंजीकरण के लिए अनिवार्य है।",
      },
      {
        step: 2,
        title: "आधार कार्ड",
        details: "आवेदक की पहचान सत्यापन के लिए आधार कार्ड आवश्यक है।",
      },
      {
        step: 3,
        title: "व्यवसाय पंजीकरण प्रमाण",
        details:
          "इन्कॉर्पोरेशन सर्टिफिकेट, पार्टनरशिप डीड या पंजीकरण प्रमाण आवश्यक है।",
      },
      {
        step: 4,
        title: "प्रमोटर पहचान प्रमाण",
        details: "प्रमोटर/डायरेक्टर की पहचान व पते का प्रमाण (फोटो सहित)।",
      },
      {
        step: 5,
        title: "व्यवसाय स्थल का पता प्रमाण",
        details: "किराया अनुबंध, बिजली का बिल, या संपत्ति कर रसीद।",
      },
      {
        step: 6,
        title: "बैंक प्रमाण",
        details: "बैंक स्टेटमेंट या रद्द किया हुआ चेक आवश्यक है।",
      },
      {
        step: 7,
        title: "डिजिटल सिग्नेचर (DSC)",
        details: "कंपनी और LLP के लिए DSC अनिवार्य है।",
      },
      {
        step: 8,
        title: "अधिकृत पत्र",
        details: "अधिकृत हस्ताक्षरी के लिए प्राधिकरण पत्र या बोर्ड संकल्प।",
      },
    ],
  },
  gu: {
    title: "જીએસટી નોંધણી",
    description:
      "જીએસટી નોંધણી તે વ્યવસાયો માટે જરૂરી છે જેમનો ટેર્નઓવર નિર્ધારિત મર્યાદાથી વધુ છે અથવા ઇન્ટર-સ્ટેટ સપ્લાય/E-કોમર્સ સાથે જોડાયેલા છે.",
    steps: [
      {
        step: 1,
        title: "PAN કાર્ડ",
        details: "વ્યવસાય/વ્યક્તિનું PAN કાર્ડ અનિવાર્ય છે.",
      },
      {
        step: 2,
        title: "આધાર કાર્ડ",
        details: "ઓળખ ચકાસણી માટે આધાર કાર્ડ જરૂરી છે.",
      },
      {
        step: 3,
        title: "વ્યવસાય નોંધણી પુરાવો",
        details: "ઇન્કૉર્પોરેશન સર્ટિફિકેટ, પાર્ટનરશિપ ડીડ વગેરે.",
      },
      {
        step: 4,
        title: "પ્રમોટર ઓળખ પુરાવો",
        details: "પ્રમોટર/ડિરેક્ટરના ઓળખ અને સરનામા પુરાવા.",
      },
      {
        step: 5,
        title: "વ્યવસાય સ્થળનો પુરાવો",
        details: "ભાડા કરાર, ઇલેક્ટ્રિસિટી બિલ અથવા પ્રોપર્ટી ટેક્સ બિલ.",
      },
      {
        step: 6,
        title: "બેંક પુરાવો",
        details: "બેંક સ્ટેટમેન્ટ અથવા રદ્દ ચેક.",
      },
      {
        step: 7,
        title: "ડિજિટલ સહી (DSC)",
        details: "કંપની અને LLP માટે DSC જરૂરી છે.",
      },
      {
        step: 8,
        title: "અધિકૃત પત્ર",
        details: "અધિકૃત સહીદાર માટે ઓથોરાઇઝેશન લેટર.",
      },
    ],
  },
  bn: {
    title: "জিএসটি নিবন্ধন",
    description:
      "যে ব্যবসার বার্ষিক টার্নওভার নির্ধারিত সীমার উপরে, বা ইন্টারস্টেট সরবরাহ/E-commerce যুক্ত, তাদের জন্য GST নিবন্ধন বাধ্যতামূলক।",
    steps: [
      {
        step: 1,
        title: "PAN কার্ড",
        details: "ব্যবসা বা ব্যক্তির PAN কার্ড আবশ্যক।",
      },
      {
        step: 2,
        title: "আধার কার্ড",
        details: "পরিচয় যাচাইয়ের জন্য আধার কার্ড প্রয়োজন।",
      },
      {
        step: 3,
        title: "ব্যবসা নিবন্ধন প্রমাণ",
        details: "Incorporation certificate বা partnership deed.",
      },
      {
        step: 4,
        title: "প্রমোটর পরিচয় প্রমাণ",
        details: "প্রমোটর/ডিরেক্টরের পরিচয় ও ঠিকানা সংক্রান্ত নথি।",
      },
      {
        step: 5,
        title: "ব্যবসা স্থানের ঠিকানা",
        details: "বাড়িভাড়া চুক্তি, বিদ্যুৎ বিল বা কর রসিদ।",
      },
      {
        step: 6,
        title: "ব্যাংক প্রমাণ",
        details: "ব্যাংক স্টেটমেন্ট বা বাতিল চেক।",
      },
      {
        step: 7,
        title: "ডিজিটাল স্বাক্ষর (DSC)",
        details: "কোম্পানি বা LLP-র জন্য DSC আবশ্যক।",
      },
      {
        step: 8,
        title: "অনুমোদন পত্র",
        details: "Authorized signatory-এর জন্য অনুমতি চিঠি।",
      },
    ],
  },
  mr: {
    title: "जीएसटी नोंदणी",
    description:
      "निर्धारित मर्यादेपेक्षा अधिक उलाढाल असलेल्या किंवा आंतरराज्य व्यापार व ई-कॉमर्समध्ये सहभागी व्यवसायांसाठी GST नोंदणी आवश्यक आहे.",
    steps: [
      {
        step: 1,
        title: "PAN कार्ड",
        details: "व्यवसाय किंवा व्यक्तीचे PAN कार्ड आवश्यक आहे.",
      },
      {
        step: 2,
        title: "आधार कार्ड",
        details: "ओळख पडताळणीसाठी आधार कार्ड अनिवार्य आहे.",
      },
      {
        step: 3,
        title: "व्यवसाय नोंदणी पुरावा",
        details: "इन्कॉर्पोरेशन प्रमाणपत्र किंवा भागीदारी कागदपत्रे.",
      },
      {
        step: 4,
        title: "प्रमोटर ओळख पुरावा",
        details: "प्रमोटर/संचालक यांच्या ओळख आणि पत्ता पुरावा.",
      },
      {
        step: 5,
        title: "व्यवसाय पत्ता पुरावा",
        details: "भाडेकरार, वीजबिल किंवा मालमत्ता कर पावती.",
      },
      {
        step: 6,
        title: "बँक पुरावा",
        details: "बँक स्टेटमेंट किंवा रद्द चेक.",
      },
      {
        step: 7,
        title: "DSC डिजिटल स्वाक्षरी",
        details: "कंपनी व LLP साठी DSC आवश्यक आहे.",
      },
      {
        step: 8,
        title: "अधिकृत पत्र",
        details: "अधिकृत स्वाक्षरीदारासाठी प्राधिकरण पत्र.",
      },
    ],
  },
  ta: {
    title: "GST பதிவு",
    description:
      "வணிகத்தின் வருமானம் நிர்ணயிக்கப்பட்ட வரம்பை மீறினால் அல்லது இடமாற்ற விற்பனை/E-commerce நடப்பதால் GST பதிவு அவசியம்.",
    steps: [
      {
        step: 1,
        title: "PAN அட்டை",
        details: "தொழில்/நபரின் PAN அட்டை தேவை.",
      },
      {
        step: 2,
        title: "ஆதார் அட்டை",
        details: "அடையாள சரிபார்ப்புக்கு ஆதார் அவசியம்.",
      },
      {
        step: 3,
        title: "தொழில் பதிவு சான்று",
        details: "Incorporation certificate அல்லது partnership deed.",
      },
      {
        step: 4,
        title: "முனைப்பாளர் அடையாளம்",
        details: "இயக்குநர்/முனைப்பாளரின் அடையாள & முகவரி சான்றுகள்.",
      },
      {
        step: 5,
        title: "வணிக முகவரி",
        details: "வாடகை ஒப்பந்தம், மின்சார பில், சொத்து வரி ரசீது.",
      },
      {
        step: 6,
        title: "வங்கி ஆதாரம்",
        details: "வங்கி அறிக்கை அல்லது ரத்து செய்யப்பட்ட காசோலை.",
      },
      {
        step: 7,
        title: "DSC டிஜிட்டல் கையொப்பம்",
        details: "கம்பனி/LLP க்கு DSC அவசியம்.",
      },
      {
        step: 8,
        title: "அங்கீகார பத்திரம்",
        details: "Authorized signatory க்கு அங்கீகாரம்.",
      },
    ],
  },
  te: {
    title: "జీఎస్టీ నమోదు",
    description:
      "పరిమితిని మించిన టర్నోవర్ గల వ్యాపారాలు లేదా ఇంటర్-స్టేట్/ఈ-కామర్స్ వ్యాపారాలకు GST నమోదు తప్పనిసరి.",
    steps: [
      {
        step: 1,
        title: "PAN కార్డ్",
        details: "వ్యాపారి/వ్యక్తి యొక్క PAN కార్డు అవసరం.",
      },
      {
        step: 2,
        title: "ఆధార్ కార్డ్",
        details: "గుర్తింపు ధృవీకరణ కోసం ఆధార్ అవసరం.",
      },
      {
        step: 3,
        title: "వ్యాపార రిజిస్ట్రేషన్ పత్రం",
        details: "Incorporation certificate లేదా partnership deed అవసరం.",
      },
      {
        step: 4,
        title: "ప్రొమోటర్ గుర్తింపు రుజువు",
        details: "ప్రొమోటర్/డైరెక్టర్ యొక్క ID & చిరునామా రుజువులు.",
      },
      {
        step: 5,
        title: "వ్యాపార చిరునామా రుజువు",
        details: "ఇంటి అద్దె ఒప్పందం, విద్యుత్ బిల్లు, ప్రాపర్టీ ట్యాక్స్.",
      },
      {
        step: 6,
        title: "బ్యాంక్ రుజువు",
        details: "బ్యాంక్ స్టేట్‌మెంట్ లేదా రద్దు చేసిన చెక్కు.",
      },
      {
        step: 7,
        title: "DSC డిజిటల్ సంతకం",
        details: "కంపెనీలు & LLPలకు DSC తప్పనిసరి.",
      },
      {
        step: 8,
        title: "అధికార పత్రం",
        details: "అధికార ప్రతినిధికి authorization letter.",
      },
    ],
  },
  kn: {
    title: "GST ನೋಂದಣಿ",
    description:
      "ನಿಗದಿತ ಮಿತಿಗಿಂತ ಹೆಚ್ಚು ವಹಿವಾಟು ಇರುವ ಅಥವಾ ಇಂಟರ್-ಸ್ಟೇಟ್/E-commerce ವ್ಯವಹಾರಗಳಿಗೆ GST ನೋಂದಣಿ ಅಗತ್ಯ.",
    steps: [
      {
        step: 1,
        title: "PAN ಕಾರ್ಡ್",
        details: "ವ್ಯವಹಾರ ಅಥವಾ ವ್ಯಕ್ತಿಯ PAN ಕಾರ್ಡ್ ಕಡ್ಡಾಯ.",
      },
      {
        step: 2,
        title: "ಆಧಾರ್ ಕಾರ್ಡ್",
        details: "ಗುರುತಿನ ಪರಿಶೀಲನೆಗಾಗಿ ಆಧಾರ್ ಅಗತ್ಯ.",
      },
      {
        step: 3,
        title: "ವ್ಯವಹಾರ ನೋಂದಣಿ ದಾಖಲೆ",
        details: "Incorporation certificate ಅಥವಾ partnership deed.",
      },
      {
        step: 4,
        title: "ಪ್ರಮೋಟರ್ ಗುರುತು ದಾಖಲೆ",
        details: "ಪ್ರಮೋಟರ್/ಡೈರೆಕ್ಟರ್‌ನ ID ಮತ್ತು ವಿಳಾಸ.",
      },
      {
        step: 5,
        title: "ವ್ಯವಹಾರ ವಿಳಾಸ",
        details: "ಕಿರಾಯದ ಒಪ್ಪಂದ, ವಿದ್ಯುತ್ ಬಿಲ್, ಪ್ರಾಪರ್ಟಿ ತೆರಿಗೆ.",
      },
      {
        step: 6,
        title: "ಬ್ಯಾಂಕ್ ದಾಖಲೆ",
        details: "ಬ್ಯಾಂಕ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ ಅಥವಾ ರದ್ದು ಮಾಡಿದ ಚೆಕ್.",
      },
      {
        step: 7,
        title: "DSC ಡಿಜಿಟಲ್ ಸಹಿ",
        details: "ಕಂಪನಿಗಳು & LLPಗಳಿಗೆ DSC ಅಗತ್ಯ.",
      },
      {
        step: 8,
        title: "ಅಧಿಕಾರ ಪತ್ರ",
        details: "Authorized signatory ಗೆ authorization letter.",
      },
    ],
  },
  ml: {
    title: "GST രജിസ്ട്രേഷൻ",
    description:
      "നിശ്ചിത പരിധിയിലധികം വരുമാനമുള്ള ബിസിനസുകൾക്കും ഇന്റർസ്റ്റേറ്റ്/E-commerce ഇടപാടുകൾ നടത്തുന്നവർക്കും GST രജിസ്ട്രേഷൻ നിർബന്ധമാണ്.",
    steps: [
      {
        step: 1,
        title: "PAN കാർഡ്",
        details: "ബിസിനസ്/വ്യക്തിയുടെ PAN കാർഡ് നിർബന്ധമാണ്.",
      },
      {
        step: 2,
        title: "ആധാർ കാർഡ്",
        details: "തിരിച്ചറിയൽ പരിശോധനയ്ക്കായി ആധാർ ആവശ്യമാണ്.",
      },
      {
        step: 3,
        title: "ബിസിനസ് രജിസ്ട്രേഷൻ തെളിവ്",
        details: "Incorporation certificate അല്ലെങ്കിൽ partnership deed.",
      },
      {
        step: 4,
        title: "പ്രമോട്ടർ തിരിച്ചറിയൽ തെളിവ്",
        details: "പ്രമോട്ടർ/ഡയറക്ടറുടെ IDയും വിലാസവും.",
      },
      {
        step: 5,
        title: "ബിസിനസ് വിലാസം",
        details: "വാടക കരാർ, വൈദ്യുതി ബിൽ, പ്രോപ്പർട്ടി ടാക്സ് രസീത്.",
      },
      {
        step: 6,
        title: "ബാങ്ക് തെളിവ്",
        details: "ബാങ്ക് സ്റ്റേറ്റ്മെന്റ് അല്ലെങ്കിൽ റദ്ദാക്കിയ ചെക്ക്.",
      },
      {
        step: 7,
        title: "DSC ഡിജിറ്റൽ ഒപ്പ്",
        details: "കമ്പനി/LLP-കൾക്ക് നിർബന്ധം.",
      },
      {
        step: 8,
        title: "അധികാര പത്രം",
        details: "Authorized signatory-നുള്ള authorization letter.",
      },
    ],
  },
  or: {
    title: "ଜିଏସଟି ରେଜିଷ୍ଟ୍ରେସନ",
    description:
      "ନିର୍ଦ୍ଧାରିତ ସୀମାରୁ ଅଧିକ ଟର୍ନଓଭର ବା ଇଣ୍ଟର-ଷ୍ଟେଟ୍/E-commerce କାରବାର ପାଇଁ GST ରେଜିଷ୍ଟ୍ରେସନ ଆବଶ୍ୟକ।",
    steps: [
      {
        step: 1,
        title: "PAN କାର୍ଡ",
        details: "ବ୍ୟବସାୟ/ବ୍ୟକ୍ତିଙ୍କର PAN କାର୍ଡ ଆବଶ୍ୟକ।",
      },
      {
        step: 2,
        title: "ଆଧାର କାର୍ଡ",
        details: "ପରିଚୟ ପ୍ରମାଣ ପାଇଁ ଆଧାର ଆବଶ୍ୟକ।",
      },
      {
        step: 3,
        title: "ବ୍ୟବସାୟ ରେଜିଷ୍ଟ୍ରେସନ ପ୍ରମାଣ",
        details: "Incorporation certificate ଅଥବା partnership deed।",
      },
      {
        step: 4,
        title: "ପ୍ରମୋଟର ID ପ୍ରମାଣ",
        details: "ପ୍ରମୋଟର/ଡାଇରେକ୍ଟରଙ୍କ ID ଏବଂ ଠିକଣା।",
      },
      {
        step: 5,
        title: "ବ୍ୟବସାୟ ଠିକଣା ପ୍ରମାଣ",
        details: "ଭଡା ଚୁକ୍ତି, ବିଜୁଳି ବିଲ୍, ଟାକ୍ସ ରସିଦ।",
      },
      {
        step: 6,
        title: "ବ୍ୟାଙ୍କ ପ୍ରମାଣ",
        details: "ବ୍ୟାଙ୍କ ଷ୍ଟେଟମେଣ୍ଟ କିମ୍ବା କ୍ୟାନ୍ସେଲ୍ ଚେକ୍।",
      },
      {
        step: 7,
        title: "DSC ଡିଜିଟାଲ ସଇନ୍",
        details: "କମ୍ପାନୀ ଏବଂ LLP ପାଇଁ ଆବଶ୍ୟକ।",
      },
      {
        step: 8,
        title: "ଅଧିକାର ପତ୍ର",
        details: "Authorized signatory ପାଇଁ authorization letter।",
      },
    ],
  },
  kok: {
    title: "GST नोंद",
    description:
      "ठरविल्लो मर्यादेच्या वयर वळवळ असल्ली वा इंटर-स्टेट/E-commerce करतात तें व्यवसायांसाठी GST नोंद जरूरी.",
    steps: [
      {
        step: 1,
        title: "PAN कार्ड",
        details: "व्यवसाय वा व्यक्तीचें PAN कार्ड जरूरी.",
      },
      {
        step: 2,
        title: "आधार कार्ड",
        details: "ओळख खात्रीखातीर आधार कार्ड जरूरी.",
      },
      {
        step: 3,
        title: "व्यवसाय नोंद पुरावो",
        details: "Incorporation certificate वा partnership deed.",
      },
      {
        step: 4,
        title: "प्रमोटर ओळख पुरावो",
        details: "प्रमोटर/डायरेक्टरांचो ID आणि वसवणुकीचो पुरावो.",
      },
      {
        step: 5,
        title: "व्यवसायाचो वसवणुकीचो पुरावो",
        details: "भाडे करार, विजेचो बिल वा मालकी कर पावती.",
      },
      {
        step: 6,
        title: "बँक पुरावो",
        details: "बँक स्टेटमेंट वा रद्द केल्लो चेक.",
      },
      {
        step: 7,
        title: "DSC डिजिटल सही",
        details: "कंपनी आणि LLP खातीर जरूरी.",
      },
      {
        step: 8,
        title: "अधिकार पत्र",
        details: "Authorized signatory खातीर पत्र.",
      },
    ],
  },
};
