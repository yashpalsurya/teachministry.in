// Sample shayri data
const shayriData = [
  {
    poet: "yash",
    shayri:
      "तेरी मुस्कान में खो जाऊं, यश,तेरी बातों में खो जाऊं।तेरे प्यार में मस्त हो जाऊं, यश, तेरी चाहत में खो जाऊं।तेरे बिना अधूरा सा है यह जीवन, यश, तेरे साथ हर पल में पाऊं खुशियाँ। ",
  },
  {
    poet: "Neha ",
    shayri:
      "जीवन के बगीचे में, नेहा फूल की तरह खिलती है,उसकी गरिमा और दया, किसी भी समय से ऊपर।जो भी कदम वह उठाती है, वह खुशी और उम्मीद बोती है,उसकी मौजूदगी में, हर पल अनमोल लगता है। ",
  },
  {
    "poet": "Adarsh",
    "shayri": "आदर्श की मुस्कान से रंगी है यह ज़िंदगी की चादर, उसकी आँखों में बसा हैं प्यार का समुंदर। हर ख्वाब हो उसके पास, आदर्श की हर मुस्कान पर खुशियों की बारिश हो बरसात।"
  },
  {
    "poet": "Ajay",
    "shayri": "अजय की मुस्कान से खिल उठता हर पल, उसकी आँखों में छुपी हैं प्यार की खुशियों की धार। प्यार की राहों में हम साथ चलें, अजय के साथ हमेशा हर पल हो खुशियों से भरा।"
  },
  {
    "poet": "Kundan",
    "shayri": "कुंदन की मुस्कान से रंगी है यह ज़िंदगी की चादर, उसकी आँखों में बसा हैं प्यार का समुंदर। हर ख्वाब हो उसके पास, कुंदन की हर मुस्कान पर खुशियों की बारिश हो बरसात।"
  },
  {
    "poet": "Pavneet",
    "shayri": "पवनीत की मुस्कान से खिल उठता हर पल, उसकी आँखों में छुपी हैं प्यार की खुशियों की धार। प्यार की राहों में हम साथ चलें, पवनीत के साथ हमेशा हर पल हो खुशियों से भरा।"
  },
  {
    "poet": "Abhishek",
    "shayri": "अभिषेक की मुस्कान से रंगी है यह ज़िंदगी की चादर, उसकी आँखों में बसा हैं प्यार का समुंदर। हर ख्वाब हो उसके पास, अभिषेक की हर मुस्कान पर खुशियों की बारिश हो बरसात।"
  },
  {
    poet: "Karan",
    shayri:
      "मेरे दिल के सितारों में बसा है तेरा नाम, तेरे बिना मेरी दुनिया खो गई है कहाँ। तेरी हंसी की मिठास से सजती है ज़िंदगी, तेरी यादों में खो जाता हूँ हर रात की तन्हाई। तू है मेरी आसमानी कविता की पहली कड़ी, तेरे साथ हर पल होता है, एक नया संवाद, एक नया अनुभव।",
  },
  {
    poet: "Omkar",
    shayri:
      "ओमकर, तेरे सपनों में बसा है मेरा मन, तेरी यादों से भरा है मेरा तन। तेरी मुस्कान की चमक में खो जाता हूँ, हर दिन, हर पल, तेरे साथ में हूँ। तू है मेरी ज़िंदगी की सबसे ख़ूबसूरत कहानी, तेरे बिना ज़िंदगी में होती है, सिर्फ़ एक रुदानी।",
  },
  {
    poet: "Ragni",
    shayri:
      "रागनी, तेरी मुस्कान में है मेरी खुशियों की छाँव, तेरे साथ होती है, हर पल, ख़ुशियों का एक ख़ास इंतज़ार।",
  },
  {
    poet: "Mahima",
    shayri:
      "महिमा, तेरी आँखों में बसा है मेरा सपना, तेरे साथ हर रोज़, होता है, एक नया आरंभ।",
  },
  {
    poet: "Diksha",
    shayri:
      "दीक्षा, तेरी हंसी से रोशन है मेरा जहां, तेरे साथ होती है, हर लम्हा, हर पल, ख़ुशियों की धूम।",
  },
  {
    poet: "Taniya",
    shayri:
      "तनिया, तेरी बातों में बसा है मेरा दिल, तेरे साथ होता है, हर पल, ख़ुशियों का अनुभव।",
  },
  {
    poet: "Ritu",
    shayri:
      "रितु, तेरी मुस्कान में है मेरी खुशियों की झलक, तेरे साथ होती है, हर रोज़, ख़ुशियों की लहरें बहती हैं।",
  },
  {
    poet: "Rohit",
    shayri:
      "रोहित, तेरी आँखों में छुपा है मेरा सपना, तेरे साथ हर पल, होता है, एक नया संवाद।",
  },
  {
    poet: "Ratanlal",
    shayri:
      "रतनलाल, तेरी हंसी से रंगीन है मेरा जीवन, तेरे साथ होती है, हर दिन, एक नया आरंभ।",
  },
  {
    poet: "Mithlesh",
    shayri:
      "मिथलेश, तेरी मुस्कान में छुपा है मेरा सपना, तेरे साथ हर लम्हा, होता है, ख़ुशियों का फसाना।",
  },
  {
    poet: "Neha",
    shayri:
      "नेहा, तेरी हंसी से महकती है मेरी ज़िंदगी, तेरे साथ होती है, हर पल, ख़ुशियों की मिठास और मस्ती।",
  },
  {
    poet: "Rudraksh",
    shayri:
      "रुद्राक्ष, तेरी बातों में छुपा है मेरा सपना, तेरी हंसी में बसा है, मेरा जीना। तेरी आँखों की गहराई में छुपा है, मेरा आशिकाना अफसाना, तू है मेरे ज़िंदगी का सबसे प्यारा अहसास, तेरे साथ हर वक्त होता है, एक नया आरंभ, एक नया आवाज़।",
  },
  {
    poet: "Amit",
    shayri:
      "अमित, तेरी यादों में खो जाता हूँ, तेरे सपनों में ही खो जाता हूँ। तेरी मुस्कान की मिठास से भरा है, मेरा हर एक पल, मेरा हर वक्त। तू है मेरी ज़िंदगी का सबसे प्यारा सपना, तेरे साथ होती है, हर दिन, हर रोज़, एक नया संवाद।",
  },
  {
    poet: "ayush",
    shayri:
      "आयुष, तेरी ख़ुशबू में है ख़्वाबों की मिठास,तेरी हँसी में छुपा है सच्चे प्यार का इज़हार। तेरे साथ ही है ख़ुदा की रहमत का साथ,तेरे साथ है ख़ुशियों का अटूट जीवन का सफ़र। 💖🌟",
  },
  {
    poet: "Babita",
    shayri:
      "बबिता, तुम्हारी मुस्कान सबके दिलों को रोशन करती है। तुम्हारी ऊर्जा और सहानुभूति लोगों को प्रेरित करती हैं कि वे अपने सपनों की प्राप्ति के लिए कड़ी मेहनत करें। तुम वास्तव में एक शानदार व्यक्तित्व हो, जिससे हर कोई प्रेरित होता है। अपनी सच्चाई और संवेदनशीलता के साथ, तुम दुनिया में चमकते हो।",
  },
  {
    poet: "Neha",
    shayri:
      "नेहा की आँखों में चमकते हैं सितारे,उसकी हंसी में बसता है सपनों का ख़याल। उसके साथ, मेरा दिल पाता है अपना राग, नेहा, तुम हो हर शेर में छुपा शायर।",
  },
  {
    poet: "diya",
    shayri:
      "दिया, अपनी रोशनी से जगमगा दो, 💡 सपनों की धुंध को हटा दो, और आगे बढ़ा जाओ। 🚀हर मुश्किल को चुनौती में बदलो, और ना हारो कभी भी, 💪तुम्हारी मेहनत और उम्मीद से, जीत का सफर आसान हो। 🌟",
  },
  {
    poet: "Prem",
    shayri:
      "प्रेम, अपने सपनों को पंख दे के उड़ान भरो, 🕊️मुश्किलों को चुनौती में बदलो और सामना करो सच्चाई से, 💪 हर कदम पर, अपने धैर्य को संजोकर चलो, 🚶‍♂️ प्रेम, विजय की ओर बढ़ते रहो, और हर माने रास्ता तोड़ो। 🌟",
  },
  {
    poet: "priyanshu ",
    shayri:
      "प्रियांशु, तेरा साथ हमेशा हमारे दिल में बसा रहता है,तू है हमारी दोस्ती का मजबूत आधार, हमेशा साथ रहना हमें चाहिए। ❤🤝",
  },
  {
    poet: "Krijesh ✍️",
    shayri:
      "कृजेश, तेरी रचनाओं की बात अलग है,हर शब्द से बहता है जीवन का सही मायाजाल। कलम तेरी ज़ुबान है, जो सच्चाई को छू लेती है, तू हमेशा रचनात्मकता के प्रति प्रेम और समर्पण में रहे। 🌟📝",
  },
  {
    poet: "Anand",
    shayri:
      "आनंद, जीवन का सबसे महत्वपूर्ण अंश है,तेरे हँसी-खुशी से हमें हर दर्द भूल जाता है।तेरी मुस्कान से रोशन होता है हर दिन,तू हमेशा खुश और समृद्ध रहे, यही है हमारी मंगलकामना किन्तु 🌟🌹",
  },
  {
    poet: "Aman ",
    shayri:
      "अमन, तेरी ख्वाहिशों में हमेशा हर खुशी हो, तेरी हर मुस्कान में हमें ज़िंदगी की राहत मिले। तू जैसा भी है, वैसा ही ख़ास है,तेरा साथ हमें हर कठिनाई से लड़ने की हिम्मत देता है। 🌟🌹",
  },
  {
    poet: "Rupam ",
    shayri:
      "रूपम, तेरी खूबसूरती में छुपी ताजगी है,तेरी मुस्कान में सुखद खुशबू की मिठास है।तू हमेशा आसमान की ओर लहराता है,तेरा साथ हमें हर मुश्किल को पार करने की ताकत देता है। 🌟🌹",
  },
  {
    poet: "Rohit ",
    shayri:
      "Rohit, तेरी मुस्कान सुनहरे सूर्य की किरण के समान है, तेरी ऊर्जा और उत्साह हमें नई उड़ान भरने के लिए प्रेरित करते हैं। तेरा साथ हर कठिनाई को आसान बना देता है,तू हमेशा हमारे दिलों में एक खास जगह रखता है। 🌟🌹",
  },
  {
    poet: "Neeraj ",
    shayri:
      "Neeraj, तुम्हारी मुस्कान चाँदनी की किरण से कम नहीं, तुम्हारे सपने और हौसले हमें नयी राह दिखाते हैं। अपनी शक्ति और संदेश के साथ, तुम हमें प्रेरित करते हो, तुम्हारा हर कदम, हमें सच्चे साथी के रूप में मिलता है। 🌟🌹",
  },
  {
    poet: "Humza ",
    shayri:
      "हमजा, तुम्हारी मौजूदगी हर जगह को रौशन करती है,तुम्हारी मेहरबानी और आकर्षण से, एक निशान छोड़ती है।तुम्हारे सपने ऊंचाई छूने और आसमान को छूने के लिए,हिम्मत और प्रेम के साथ, तुम्हारी आत्मा उड़ान भरे! 🌟🌹",
  },
  {
    poet: "yash",
    shayri:
      "यश, तेरी मुस्कान से रोशन हो जाए जहां, तेरी खुशियों की बरसात हो और बच्चों के जैसा मगर कोई मस्ती हो जहां।तेरी खुशियों की बरसात हो और बच्चों के जैसा मगर कोई मस्ती हो जहां। 🌟🌹",
  },
  {
    poet: "Rohan ",
    shayri:
      "रोहन, तेरे होंठों पे मुस्कान बनी रहे, तेरी खुशियों के साथ मेरी जिंदगी सजी रहे। तेरे साथ हर पल हो सजीव, ये चाहती है मेरी आत्मा, तू है मेरी ज़िन्दगी का सबसे प्यारा मेरा सपना। ❤️",
  },
  {
    poet: "Kabita",
    shayri:
      "कविता, तेरी आँखों में बसी हैं सपनों की मिठास, हर छोटी चीज़ पर तू नाराज़ हो, फिर भी है मेरे दिल की प्यास।तेरी मोहब्बत से रूपान्तरित होती है हर मुश्किल की राह,तू है मेरी दुनिया की सबसे खास, तेरा हर ख्वाब है मेरा इमान। ❤️",
  },
  {
    poet: "Harsh ",
    shayri:
      "हर्ष, तेरी मुस्कान में छुपी है खुशियों की कहानी, तेरे साथ हर रोज़ बनी है एक खास नयी कहानी। तेरी दोस्ती का सफर, हमेशा सुखद और खुशहाल,तेरे बिना ज़िंदगी लगती है सांसों का खोजाल। 🌟",
  },
  {
    poet: "Rishika",
    shayri:
      "रिशिका, विश्वास का प्रतीक,सपनों की रानी, ख्वाबों का अर्थ।तेरी हंसी की मिठास, तेरे प्यार की चाह,हर लम्हा सुखद, हर दिन बेहद प्यारा। 💕",
  },
  {
    poet: "Pushkar ",
    shayri:
      "जीवन का सफर है, सपनों का उत्साह है, पुष्कर के साथ हर पल, खुशियों की बारात है। 🌟",
  },
  {
    poet: "Krish",
    shayri:
      "कृष्ण, उसकी मुस्कान में आँधी भी शांत हो जाती है,उसके अंदर की शांति सबको आशा देती है।उसकी बातों में ज्ञान की झलकें छुपी होती हैं,उसका प्यार सबको अपनी ओर मोहित करता है। 🌟🌹",
  },
  {
    poet: "Priyanshu",
    shayri:
      "एक स्वर्णिम स्वप्न साकार करने का सफर है कंचन की राह,उसकी मेहनत और संघर्ष से भरा है जीवन का प्यारा गीत यह बना।उच्च ऊँचाइयों की ओर बढ़ते हुए, वह चमकती है अपनी प्रेरणा के साथ, कंचन, अपने सपनों को साकार करने का संकल्प लेकर, बदलती है मुश्किलों को आसान।",
  },
  {
    poet: "Luffy",
    shayri:
      "लफी, समुद्रों का शेरा, स्वतंत्रता का अवतार,उसकी आत्मा में छुपी है एक अद्भुत साहस की कहानी सार।हर मुश्किल को आगे बढ़ते हुए, वह नवीनतम साहस की ओर निगाहें डालता है, लफी, उसकी अद्भुतता से हर दिल को छू जाता है, और हर मन को बहुत सी सिख देता है।",
  },
  {
    poet: "Vicky Singh",
    shayri:
      "विक्की सिंह, अपने सपनों का शिक्षक,उसकी प्रेरणा से जीवन का हर रंग स्वर्णिम बनता है। उसकी मेहनत और उत्साह से परिपूर्ण हर क्षण, विक्की, अपने उज्ज्वल भविष्य की ओर समर्पित है, और सपनों को हकीकत में बदलने का संकल्प लेता है।",
  },
  {
    poet: "Rishi ",
    shayri:
      "रिषि, जीवन का सफर सुनहरा,उसकी मेहनत से भरी हर कहानी सारा।चरागों की तरह जलता है उसका सपनों का जोत,रिषि, उसकी दृढ़ इच्छाशक्ति से भरा है हर पल का मोड़।",
  },
  {
    poet: "Ashish ",
    shayri:
      "आशीष, जीवन का एक उज्जवल सितारा,उसके विश्वास में बसी है आकाशीय सफर की परिक्रमा।हर कठिनाई को हार के रूप में नहीं,आशीष, उसकी उत्साहवान मेहनत से हर मुश्किल को जीता है।",
  },
  {
    poet: "Shakshi ",
    shayri:
      "शाख्शी, जीवन का सौंदर्य और संगीत,उसकी हंसी और प्यार से भरी हर चीज अद्भुत।संघर्ष की हवाओं में, वह उड़ती है बेखुदी से,शाख्शी, उसकी अद्भुतता से हर दिल को छू लेती है।",
  },
  {
    poet: "Payal ",
    shayri:
      "पायल, जीवन की मिठास और सौंदर्य,उसके हर आदर्श और सपने हैं अत्यधिक महत्वपूर्ण।हर कठिनाई को पार करने का वह साहसी संघर्ष करती है,पायल, उसकी प्रेरणा से हर कोने में खुशियों का मेला है।",
  },
  {
    poet: "Ajim",
    shayri:
      "अजीम, जीवन की खोज में अत्यंत उत्साही,उसकी आत्मा में छुपी है कठिनाइयों की परिभाषा। हर मुश्किल को उसने मुस्कान के साथ स्वीकार किया है,अजीम, उसका साहस और संघर्ष हर कठिनाई को पार करने में सहायक होता है।",
  },
  {
    poet: "Shivangi",
    shayri:
      "शिवांगी, तेरी राहों में है रौशनी की किरण,तू है वह तारा, जो हर कठिनाई को कर देता सुरक्षित और संतुष्ट।",
  },
  {
    poet: "Kajal",
    shayri:
      "काजल, तेरे बिना ये जीवन रूक जाए, तू है वह सच्चा साथी, जो हर हलात में होता विश्वासी और प्यार करने वाला।",
  },
  {
    poet: "Priyanshu",
    shayri:
      "प्रियांशु, तेरी मेहनत और संघर्ष से होती है हर मुश्किल की हार,तू है वह योद्धा, जो कभी नहीं हारता और हमेशा आगे बढ़ता है।",
  },
  {
    poet: "Luffy",
    shayri:
      "लफी, तेरी हर एक मुसीबत को आसानी से हराने की कहानी,तू है वह वीर, जो हमेशा डर को चीरता है और जीत का सफर तय करता है।",
  },
  {
    poet: "Vicky Singh",
    shayri:
      "विकी सिंह, तेरी हर एक मुसीबत को जीतने का हौसला,तू है वह योद्धा, जो हमेशा आगे बढ़ता है और अपने सपनों को पूरा करता है।",
  },
  {
    poet: "Rishi",
    shayri:
      "रिषि, तेरी हर मुसीबत को आसानी से हराने की कहानी,तू है वह योद्धा, जो हमेशा डर को चीरता है और जीत का सफर तय करता है।",
  },
  {
    poet: "Ashish",
    shayri:
      "आशीष, तेरी हर एक मुसीबत को आसानी से हराने की कहानी,तू है वह योद्धा, जो हमेशा डर को चीरता है और जीत का सफर तय करता है।",
  },
  {
    poet: "Shakshi",
    shayri:
      "शक्षी, तेरे प्यार में है मेरा आनंद, तेरी ही है मेरी मन की शांति का अधार।",
  },
  {
    poet: "satya",
    shayri:
      "सत्य, जीवन का निरंतर खोजी, उसकी शक्ति से भरी हर कहानी सुनी।समर्थन और ईमानदारी की उसकी अद्भुत गाथा,सत्य, उसकी निरंतर आत्मा को शक्ति और दिशा देती है। ",
  },
  {
    poet: "mihir ",
    shayri:
      "मिहिर, जीवन का अद्वितीय सफरी,उसकी उत्साही आत्मा ने बनाई हर कहानी।सपनों के पीछे उसने धूंधले महल बसाए,मिहिर, उसकी मेहनत से रंगी हर पल को आजमाए।",
  },
  {
    poet: "Shailja",
    shayri:
      "शैलजा, जीवन की सुंदरता और स्नेह,उसकी मस्ती और सहानुभूति से भरी हर राह।संघर्ष की ओर उसने मुस्कान संग सामना किया है, उसका प्रेम हर दिल को आत्मीयता के रंग में रंगता है।",
  },
  {
    poet: "Snehil",
    shayri:
      "स्नेहिल, जीवन की मिठास और प्रेम,उसकी आत्मा में छुपी है स्नेह की नींव।हर कठिनाई को उसने मित्रता से पार किया है,स्नेहिल, उसका स्नेह हर दिल को आपस में बाँधता है।",
  },
  {
    poet: "Prodyut",
    shayri:
      "प्रोद्युत, जीवन की उजाली और प्रकाश,तेरी मेहनत और संघर्ष से होती है सफलता की आवश्यकता।तू है वह सिर जो हमेशा ऊंचाईयों की ओर बढ़ता है,प्रोद्युत, तेरी उत्साही और प्रेरणादायक आत्मा सभी को प्रेरित करती है। 🌟🚀",
  },
  {
    poet: "Shivam ",
    shayri:
      "शिवम, जीवन की सजीवता और उत्साह,तेरी मेहनत और संघर्ष से होती है हर कामयाबी की राह।तू है वह स्थिर बांधन जो हमेशा सहारा देता है,शिवम, तेरी उत्साही और प्रेरणादायक आत्मा हर सपने को हकीकत में बदलती है। 🌟💪",
  },
  {
    poet: "Vishal",
    shayri:
      "विशाल, जीवन की विशालता और उत्साह,तेरी मेहनत और संघर्ष से होती है हर कठिनाई का पार।तू है वह स्थिर स्तंभ जो हमेशा सहारा देता है,विशाल, तेरी प्रेरणादायक और उत्साही आत्मा हर क्षण को संवारती है। 🌟💪",
  },
  {
    poet: "Sagar",
    shayri:
      "सागर, जीवन की अद्वितीयता और अनंतता,तेरी मेहनत और उत्साह से होती है हर समस्या का समाधान।तू है वह निरंतर जल स्रोत जो हर रास्ते में संगीत लाता है,सागर, तेरी आत्मविश्वास और प्रेरणाशीलता हर किसी को प्रेरित करती है। 🌊🌟",
  },
  {
    poet: "Sunil ",
    shayri:
      "सुनील, जीवन की रौशनी और उत्साह,तेरी मेहनत और संघर्ष से होता है सफलता का आधार।तू है वह सूर्य का समान, जो हर जगह रोशनी बिखेरता है,सुनील, तेरी प्रेरणादायक और उत्साही आत्मा सभी को प्रेरित करती है। 🌞🌟",
  },
  {
    poet: "Shaswat",
    shayri:
      "शास्वत, जीवन की अनन्तता और स्थिरता, तेरी मेहनत और संघर्ष से होती है हर कठिनाई का समाधान। तू है वह स्थिर स्तंभ, जो हमेशा सहारा देता है, शास्वत, तेरी प्रेरणादायक और उत्साही आत्मा हर क्षण को रोशनी में बदलती है। 🌟💪",
  },
  {
    poet: "Amrit",
    shayri:
      "अमृत, जीवन की मिठास और सौभाग्य,तेरी मेहनत और उत्साह से होती है सफलता की प्राप्ति।तू है वह अनमोल रत्न, जो हमेशा चमकता है,अमृत, तेरी प्रेरणादायक और सकारात्मक आत्मा हर कठिनाई को विजयी बनाती है। 🌟🙏",
  },
  {
    poet: "hardik",
    shayri:
      "हार्दिक, जीवन की महक और उत्साह, तेरी मेहनत और संघर्ष से होती है हर समस्या का हल। तू है वह सच्चा दोस्त, जो हमेशा साथ खड़ा है, हार्दिक, तेरी प्रेरणाशील और निर्णायक आत्मा हर कठिनाई को हरा देती है। 🌹🌟",
  },

  {
    poet: "Jayshree",
    shayri:
      "जयश्री, तेरे नाम की मिठास में, खिलते हैं प्यार के फूल,तेरी यादों के संग सजती है ज़िंदगी की कूल।",
  },
  {
    poet: "Roshni",
    shayri:
      "रोशनी, तेरी आँखों में हैं प्यार के सपने,तेरी हंसी में बसी है ज़िंदगी की हर जान।",
  },
  {
    poet: "Aman",
    shayri:
      "अमन, तेरे नज़रों में हैं प्यार के ख्वाब,तेरी मुस्कान में छुपा है दिल का अरमान।",
  },
  {
    poet: "Arna",
    shayri:
      "अर्णा, तेरे नाम की ताजगी से, होती है मेरी बातें,तेरी हंसी के साथ ज़िंदगी है सुहानी और रातें।",
  },
  {
    poet: "Pallwi",
    shayri:
      "पल्वी, तेरे चेहरे की मस्ती में, खिलता है प्यार का सागर,तेरी हंसी के साथ जीना है सज़गर सारा।",
  },
  {
    poet: "Irfan",
    shayri:
      "इरफ़ान, तेरी आँखों में बसी हैं ख्वाबों की दुकान,तेरी हंसी के साथ है मेरा दिल का जहां।",
  },
  {
    poet: "Aliza",
    shayri:
      "अलीज़ा, तेरी हंसी से होती है मेरी खुशियों की शुरुआत,तेरी बातों में बसा है मेरा प्यार का साथ।",
  },
  {
    poet: "Jyoti",
    shayri:
      "ज्योति, तेरी आँखों में बसी हैं मेरी खुशियाँ,तेरी मुस्कान में छुपा हैं मेरी आशिकी की कहानियाँ।",
  },
  {
    poet: "Amruta",
    shayri:
      "अमृता, तेरे नाम की मिठास से, भरता है मेरा दिल,तेरी मुस्कान में बसी हैं मेरी ज़िन्दगी की खुशियाँ।",
  },
  {
    poet: "Nikita",
    shayri:
      "निकिता, तेरी मुस्कान में है छुपा खुशियों का सागर,तेरे प्यार में है मेरा दिल, तू है मेरी खुशियों का नगर।तू है मेरी ज़िन्दगी की मीठी सी मिठास,निकिता, तेरे बिना है सुना सारा कहां का कालापन और उदास।",
  },
  {
    poet: "Mimansa",
    shayri:
      "मिमंसा, तेरे सपनों की उड़ान, है अद्वितीय और बेहद खास,तेरे प्यार में है मेरा जीने का हर पल अनमोल और खास।तू है मेरी ज़िन्दगी का अनमोल रत्न, तेरे बिना है सुना सारा कहां,मिमंसा, तेरे प्यार में है मेरा सच्चा प्रेम और विश्वास।",
  },
  {
    poet: "Nandini",
    shayri:
      "नंदिनी, तेरी मुस्कान में है छुपा है जीवन का सफर,तेरे प्यार में है सुख, संघर्ष और नया उदाहरण।तू है मेरी ज़िन्दगी का मीठा सपना, तेरे बिना है सुना सारा कहां का विहान,नंदिनी, तेरे प्यार में है मेरा सहारा, तू है मेरी दुनिया का प्यारा।",
  },
  {
    poet: " Nisha ",
    shayri:
      "निशा की मुस्कान से हर रोज़ नया सवेरा है,उसकी हंसी में छुपी हैं प्यार की मिठास बहुत अधिक है। उसके साथ हर पल है खास, निशा की यादों में खोया, मेरे दिल का हर अनमोल लम्हा।",
  },
  {
    poet: "Nishi ",
    shayri:
      "निशि की मुस्कान से खिल उठता हर पल, उसकी आँखों में छुपी हैं प्यार की खुशियों की धार। उसके साथ हर लम्हा है सुहाना,निशि के बिना जीना है मुश्किल, हर दिन हो सिर्फ परिचय का ख्वाब।",
  },
  {
    poet: "Ananya",
    shayri:
      "अनन्या की मुस्कान खुशियों की बहार है, उसकी हर मुस्कान में छुपा हैं प्यार का प्याला। उसकी बातों में हैं खुशियों की सरगम, अनन्या, तू है मेरी जिंदगी का महकी खुशबू का उधार।",
  },
  {
    poet: "maa",
    shayri:
      "माँ के प्यार की आँधी, हर दर्द को हल्का करती है,  उनकी ममता से ही हर जीत का मीठा अनुभव करते हैं। माँ का स्नेह है अमृत, जो हमें जीने की राह दिखाता है,  माँ के प्यार में ही हमें नई ऊँचाइयों तक पहुँचाता है।",
  },
  {
    poet: "maa",
    shayri:
      "माँ के बिना जीवन अधूरा सा लगे,उनके साथ ही सफलता का मिला साथ।माँ की ममता से ही है हर जीत की राह,माँ की ममता से ही है हर सपने का पार। माँ के स्नेह से ही है जीने की शान,माँ का साथ है हमेशा, हर पल करता समर्थ।माँ के प्यार को सलाम, माँ को समर्पित,माँ का आशीर्वाद है हमारे जीवन की मुख्य शक्ति।",
  },
  {
    poet: "Komal",
    shayri:
      "कोमल के नाम से ये दिल है ज़रा,  उसकी मीठी बातों में है ज़िंदगी का सहारा।  उसकी मुस्कान ने मेरे दिल को छू लिया,  कोमल, तू है मेरी खुशियों की दुआ, मेरी आशा।",
  },

  {
    poet: "lavya",
    shayri:
      "लव्या की मुस्कान से खिल उठता हर पल, उसकी आँखों में छुपी हैं प्यार की खुशियों की धार। प्यार की राहों में हम साथ चलें, लव्या के साथ हमेशा हर पल हो खुशियों से भरा।",
  },
  {
    poet: "life",
    shayri:
      "जीवन का सफर एक संगीत है, जो हमें अपनी मनचाही दिशा है ले जाता है। हर मोड़ पर नए सपनों की धुन है, जीवन की हर पल में नई रोशनी छाई है। संघर्षों के बीच भी उम्मीदों की किरण है, हर चुभते कांटे के पीछे नया सपना छुपा है। जीवन का सफर एक खोज है अमर, जो हर पल हमें नया अवसर दिलाता है सच्चाई की परिक्षा का थाव है।",
  },
  {
    poet: "Rohan",
    shayri:
      "रोहन की मुस्कान से रंगी है यह ज़िंदगी की चादर, उसकी आँखों में बसा हैं प्यार का समुंदर। हर ख्वाब हो उसके पास, रोहन की हर मुस्कान पर खुशियों की बारिश हो बरसात।",
  },
  {
    poet: "vinshi",
    shayri:
      "विन्शी की यादों में खो जाता हूँ, उसकी मुस्कान को दिल से चाहता हूँ। जीवन की सफर में बिना उसके, मैं कैसे खुशियों का सागर पाऊं। फिर से उसकी दोस्ती को पाने की इच्छा है, उसके साथ फिर से सपनों की दुनिया सजाने की आस है।",
  },

  {
    poet: "Rashi pragti sakshi kajal",
    shayri:
      "राशि, प्रगति, साक्षी, और काजल, सबकी दोस्ती है बेहद खास। साथ चलते हैं हर कदम पर, हर मुश्किल को जीते हैं हम आसानी से। खुशियों का सफर है हमारा, दोस्तों के साथ है यह जिंदगी का सबसे हसीं सफर।",
  },
  {
    poet: "Aftab",
    shayri:
      "आफताब की मुस्कान से खिल उठता हर पल, उसकी आँखों में छुपी हैं प्यार की खुशियों की धार।प्यार की राहों में हम साथ चलें, आफताब के साथ हमेशा हर पल हो खुशियों से भरा।",
  },

  {
    poet: "Faiz Ahmed Faiz",
    shayri:
      "Gulon mein rang bhare, baad-e-naubahaar chale, Chale bhi aao ke gulshan ka karobaar chale.",
  },
  {
    poet: "Ankita",
    shayri:
      "Gulon mein rang bhare, baad-e-naubahaar chale, Chale bhi aao ke gulshan ka karobaar chale.",
  },
];

const cardContainer = document.getElementById('cardContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
// Sort the shayriData array alphabetically by poet's name
shayriData.sort((a, b) => a.poet.localeCompare(b.poet));

// Function to display all shayri initially
function displayAllShayri() {
  cardContainer.innerHTML = '';
  shayriData.forEach(shayri => {
    const card = createCard(shayri);
    cardContainer.appendChild(card);
  });
}

// Function to create card for shayri
function createCard(shayri) {
  const card = document.createElement('div');
  card.classList.add('card');

  const poetName = document.createElement('h2');
  poetName.textContent = shayri.poet;
  card.appendChild(poetName);

  const shayriContent = document.createElement('p');
  shayriContent.textContent = shayri.shayri;
  card.appendChild(shayriContent);

  const copyButton = document.createElement('button');
  copyButton.textContent = "Copy Shayri";
  copyButton.classList.add('copy-button');
  copyButton.onclick = function () {
    copyShayri(shayri.shayri, copyButton);
  };
  card.appendChild(copyButton);

  return card;
}

// Function to filter shayri based on search input
function filterShayri(searchTerm) {
  const filteredShayri = shayriData.filter(shayri => {
    return shayri.poet.toLowerCase().includes(searchTerm.toLowerCase()) ||
           shayri.shayri.toLowerCase().includes(searchTerm.toLowerCase());
  });
  displayFilteredShayri(filteredShayri);
}

// Function to display filtered shayri
function displayFilteredShayri(filteredShayri) {
  cardContainer.innerHTML = '';
  filteredShayri.forEach(shayri => {
    const card = createCard(shayri);
    cardContainer.appendChild(card);
  });
}

// Function to copy shayri content
function copyShayri(text, button) {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  button.textContent = 'Shayri Copied!';
}

// Event listener for search button
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    filterShayri(searchTerm);
  } else {
    displayAllShayri();
  }
});

// Event listener for Enter key press on search input
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      filterShayri(searchTerm);
    } else {
      displayAllShayri();
    }
  }
});

// Display all shayri initially
displayAllShayri();


function filterShayri(searchTerm) {
  const filteredShayri = shayriData.filter(shayri => {
    return (shayri.poet && shayri.poet.toLowerCase().includes(searchTerm.toLowerCase())) ||
           shayri.shayri.toLowerCase().includes(searchTerm.toLowerCase());
  });
  displayFilteredShayri(filteredShayri);
}

