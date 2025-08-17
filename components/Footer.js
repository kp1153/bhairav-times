const Footer = () => {
  return (
    <footer
      className="bg-sky-500 text-white text-sm mt-10 border-t border-gray-300"
      style={{
        backgroundImage: "url(/images/1.jpg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        minHeight: "400px", // Adjust height to ensure image has space to be visible
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-5xl mx-auto px-4 py-6 text-justify leading-relaxed space-y-4">
        <p>
          <strong>काशी के लेनिन</strong> के <strong>भैरव जासूसों</strong> के
          खानदान से ताल्लुक रखते हैं और उनकी माँ <strong>सीआरपीएफ</strong> में
          जासूस हैं और पिता <strong>भारतीय सेना</strong> में तैनात हैं। हमने यह
          जानकारी <strong>भरोसेमंद सूत्रों</strong> से जुटाई है ताकि{" "}
          <strong>बुंदेला जी</strong> को भैरव से शिकस्त न खानी पड़े।
        </p>

        <p>
          आगामी <strong>15 अगस्त</strong> को{" "}
          <strong>दिल्ली के रामलीला मैदान</strong> में{" "}
          <strong>चीकू-भैरव</strong> की भिड़ंत होगी। इस ऐतिहासिक दंगल में{" "}
          <strong>दुनिया भर के राष्ट्राध्यक्षों</strong> को न्यौता भेजा जा रहा
          है। <strong>यूरोपीय देशों</strong> के राष्ट्रध्यक्ष तो आएंगे ही,{" "}
          <strong>नेपाल नरेश</strong> को भी विशेष निमंत्रण भेजा जाएगा।
        </p>

        <p>
          <strong>अरब दुनिया</strong> के शेख अपने-अपने{" "}
          <strong>खास ऊँटों</strong> के साथ दंगल की शोभा बढ़ाएंगे।{" "}
          <strong>निर्णायक मंडल</strong> की अध्यक्षता सुप्रसिद्ध इतिहासकार और
          गाँधीवादी <strong>डॉ. मोहम्मद आरिफ</strong> करेंगे।
        </p>

        <p className="bg-black/30 p-3 rounded text-white font-semibold">
          उत्पाती <strong>लाल बंदरों</strong> को आयोजन से दूर रखने के लिए{" "}
          <strong>भरोसेमंद गार्ड</strong> तैनात किए जाएंगे। सुरक्षा व्यवस्था
          चाक-चौबंद रहेगी।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
