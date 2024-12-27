import React from "react";
import ActivityList from "./ActivityList";

import scrollImg from "@/assets/images/scrollCourses.png";

import lec1 from "@/assets/images/orshka.png";
import lec2 from "@/assets/images/len.jpg";
import lec3 from "@/assets/images/goncalo.jpg";
import lec4 from "@/assets/images/mat.jpg";
import lec5 from "@/assets/images/genever.png";

import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
import w4 from "@/assets/images/w4.png";
import w5 from "@/assets/images/w5.png";
import w6 from "@/assets/images/w6.png";
import w7 from "@/assets/images/w7.png";
import w8 from "@/assets/images/w8.png";
import Image from "next/image";

const Activities = () => {
  const lectures = [
    {
      image: lec1,
      title: "أساسيات تغذية الحيوان الأليف (القطط والكلاب)",
      lecturer: "د/ أورشكا سكوفكا",
      location: "سلوفينيا",
      des: `حاصلة على درجة الدكتوراه في الطب البيطري من جامعة ليوبليانا عام 2016، وبدأ اهتمامها في مجال تغذية الحيوانات الأليفة أثناء دراستها الجامعية عندما كانت تعمل في متجر صغير لبيع مستلزمات الحيوانات الأليفة، حيث ركزت اهتماهما على التغذية السريرية إلى جانب مواضيع أخرى.
القت الدكتورة أورشكا سكوفكا العديد من المحاضرات في مجال تغذية الحيوانات الأليفة من خلال مشاركتها في مؤتمرات بيطرية متعددة، كما تنشط اكاديميا من خلال كتابتها ونشرها للعديد من المقالات في هذا المجال. تختص الدكتورة أورشكا سكوفكا في طب وجراحة الحيوانات الصغيرة وتمارس منهجية دمج تغذية الحيوانات الأليفة في ممارستها اليومية، معتبرة إياها عنصرًا أساسيًا في العلاج بشكل فاعل.
`,
      social:
        "https://www.linkedin.com/in/ur%C5%A1ka-%C5%A1kufca-30b7a6109/?originalSubdomain=si",
    },
    {
      image: lec2,
      title: "كشف أسرار زيادة الإيرادات و مضاعفة الارباح",
      lecturer: "لين سويتانوفسكي",
      location: "الولايات المتحدة",
      des: `حاصلة على درجة علمية متقدمة في قطاع الأزياء والبيع بالتجزئة، وتمتلك خبرة تمتد لما يقارب 30 عامًا في العمل مع منشآت قطاع التجزئة، بدءًا من شركات الفورتشن 500 وانتهاء بالمتاجر الصغيرة المستقلة، السيدة لين هي شريك مؤسس لـ "  Pet Retail Helper"، ولديها سجل حافل من الإنجازات في مجال المساهمة في زيادة المبيعات ، تحسين الأرباح ، وإعادة هيكلة نماذج الأعمال لمواكبة تغييرات سوق المستهلك، مع التركيز المستمر على تحسين الأرباح.
ساهمت مهاراتها الإدارية والقيادية، إلى جانب حبها للحيوانات الأليفة في تحقيق نمو ملحوظ لمجموعة متنوعة من الأعمال التجارية المستقلة في قطاع الحيوانات الأليفة، كما نجحت في بناء مسار جديد يهتم بوضع استراتيجيات للشركات التي تنوي إطلاق علامات تجارية جديدة بالتزامن مع تنشيط أعمال المبيعات.
تعد السيدة لين متحدثًا محترفًا ولها عدة مشاركات في المعارض الدولية في قطاع الحيوانات الاليفة والبيع بالتجزئة، كما أنها أيضًا كاتبة ومساهمة منتظمة في العديد من المنشورات المتخصصة في قطاع التجزئة.
`,
      social: "https://www.linkedin.com/in/lynnswitanowski/",
    },
    {
      image: lec3,
      title: "ماذا تريد القطط ايصالها لنا بخصوص سلوكها وطباعها؟",
      lecturer: "د/ غونسالو بيريرا",
      location: "البرتغال",
      des: `حاصل على درجة الدكتوراه في الطب البيطري من كلية الطب البيطري في لشبونة، دكتوراه في العلوم البيطرية من معهد العلوم الطبية الحيوية من أبيل سالازار جامعة بورتو، ودرجة الماجستير في علم السلوك السريري ورفاهية الحيوانات من كلية الطب البيطري بجامعة كومبلوتنسي في مدريد.
يشغل منصب أمين اللجنة التنفيذية للمجلس الأوروبي لتخصصات الطب البيطري ونائب رئيس الجمعية الأوروبية لعلم السلوك البيطري السريري "ESVCE" ، وكان رئيسًا للكلية الأوروبية لرفاهية الحيوان والطب السلوكي "ECAWBM" خلال الفترة من 2017 إلى 2020.
مؤسس ورئيس جمعية "  "  PsiAnimal البرتغالية للعلاج السلوكي ورفاهية الحيوانات خلال الفترة 2011 إلى 2017. يعمل أستاذًا لسلوك الحيوان ورفاهيته في مدرسة إيغاز مونيش للعلوم الصحية. قدم العديد من المحاضرات والدراسات، وله مشاركات متعددة في المؤتمرات على المستوى المحلي والدولي.
`,
      social:
        "https://www.linkedin.com/in/gon%C3%A7alo-da-gra%C3%A7a-pereira-9499b245/?originalSubdomain=pt",
    },
    {
      image: lec2,
      title: "تأثير المنتجات ذات الجودة العالية على تعظيم الأرباح",
      lecturer: "لين سويتانوفسكي",
      location: "الولايات المتحدة",
      des: `حاصلة على درجة علمية متقدمة في قطاع الأزياء والبيع بالتجزئة، وتمتلك خبرة تمتد لما يقارب 30 عامًا في العمل مع منشآت قطاع التجزئة، بدءًا من شركات الفورتشن 500 وانتهاء بالمتاجر الصغيرة المستقلة، السيدة لين هي شريك مؤسس لـ "  Pet Retail Helper"، ولديها سجل حافل من الإنجازات في مجال المساهمة في زيادة المبيعات ، تحسين الأرباح ، وإعادة هيكلة نماذج الأعمال لمواكبة تغييرات سوق المستهلك، مع التركيز المستمر على تحسين الأرباح.
ساهمت مهاراتها الإدارية والقيادية، إلى جانب حبها للحيوانات الأليفة في تحقيق نمو ملحوظ لمجموعة متنوعة من الأعمال التجارية المستقلة في قطاع الحيوانات الأليفة، كما نجحت في بناء مسار جديد يهتم بوضع استراتيجيات للشركات التي تنوي إطلاق علامات تجارية جديدة بالتزامن مع تنشيط أعمال المبيعات.
تعد السيدة لين متحدثًا محترفًا ولها عدة مشاركات في المعارض الدولية في قطاع الحيوانات الاليفة والبيع بالتجزئة، كما أنها أيضًا كاتبة ومساهمة منتظمة في العديد من المنشورات المتخصصة في قطاع التجزئة.
`,
      social: "https://www.linkedin.com/in/lynnswitanowski/",
    },
    {
      image: lec2,
      title: "تصميم برنامج ولاء ناجح لعملاءك",
      lecturer: "لين سويتانوفسكي",
      location: " الولايات المتحدة",
      des: `حاصلة على درجة علمية متقدمة في قطاع الأزياء والبيع بالتجزئة، وتمتلك خبرة تمتد لما يقارب 30 عامًا في العمل مع منشآت قطاع التجزئة، بدءًا من شركات الفورتشن 500 وانتهاء بالمتاجر الصغيرة المستقلة، السيدة لين هي شريك مؤسس لـ "  Pet Retail Helper"، ولديها سجل حافل من الإنجازات في مجال المساهمة في زيادة المبيعات ، تحسين الأرباح ، وإعادة هيكلة نماذج الأعمال لمواكبة تغييرات سوق المستهلك، مع التركيز المستمر على تحسين الأرباح.
ساهمت مهاراتها الإدارية والقيادية، إلى جانب حبها للحيوانات الأليفة في تحقيق نمو ملحوظ لمجموعة متنوعة من الأعمال التجارية المستقلة في قطاع الحيوانات الأليفة، كما نجحت في بناء مسار جديد يهتم بوضع استراتيجيات للشركات التي تنوي إطلاق علامات تجارية جديدة بالتزامن مع تنشيط أعمال المبيعات.
تعد السيدة لين متحدثًا محترفًا ولها عدة مشاركات في المعارض الدولية في قطاع الحيوانات الاليفة والبيع بالتجزئة، كما أنها أيضًا كاتبة ومساهمة منتظمة في العديد من المنشورات المتخصصة في قطاع التجزئة.
`,
      social: "https://www.linkedin.com/in/lynnswitanowski/",
    },
    {
      image: lec3,
      title: "خلق بيئة مثالية ومناسبة للقطط",
      lecturer: "د/ غونسالو بيريرا",
      location: "البرتغال",
      des: `حاصل على درجة الدكتوراه في الطب البيطري من كلية الطب البيطري في لشبونة، دكتوراه في العلوم البيطرية من معهد العلوم الطبية الحيوية من أبيل سالازار جامعة بورتو، ودرجة الماجستير في علم السلوك السريري ورفاهية الحيوانات من كلية الطب البيطري بجامعة كومبلوتنسي في مدريد.
يشغل منصب أمين اللجنة التنفيذية للمجلس الأوروبي لتخصصات الطب البيطري " " EBVSونائب رئيس الجمعية الأوروبية لعلم السلوك البيطري السريري "ESVCE" ، وكان رئيسًا للكلية الأوروبية لرفاهية الحيوان والطب السلوكي "ECAWBM" خلال الفترة من 2017 إلى 2020.
مؤسس ورئيس جمعية "  "  PsiAnimal البرتغالية للعلاج السلوكي ورفاهية الحيوانات خلال الفترة 2011 إلى 2017. يعمل أستاذًا لسلوك الحيوان ورفاهيته في مدرسة إيغاز مونيش للعلوم الصحية. قدم العديد من المحاضرات والدراسات، وله مشاركات متعددة في المؤتمرات على المستوى المحلي والدولي.
`,
      social:
        "https://www.linkedin.com/in/gon%C3%A7alo-da-gra%C3%A7a-pereira-9499b245/?originalSubdomain=pt",
    },
    {
      image: lec4,
      title: "التميز في تطبيق اساسيات التجارة الإلكترونية",
      lecturer: "مات الدرش",
      location: "الولايات المتحدة",
      des: `يمتلك السيد مات الدرش خبرة واسعة في مجال المبيعات والتسويق الرقمي في قطاع الحيوانات الأليفة وبالأخص على نطاق المبيعات بالتجزئة، يتمتع بمهارات عالية في تصميم الحملات الترويجية ، تعزيز العلامة التجارية وتقديم الحلول الإدارية للتحديات التي تواجه المنشآت التجارية. السيد مات الدرش هو شريك مؤسس لوكالة   Pet Engine Marketing"" وهي عبارة عن منصة تسويق رقمي متخصصة ولها مساهمات ملموسة في تحقيق النمو ورفع المبيعات لعدة منشآت تعمل في قطاع الحيوانات الأليفة. السيد مات الدرش أيضا شريك مؤسس لشبكة " Pet Industry Network"، وله عدة مقالات منشورة في مجلة PETS + ، وعضو نشط في منظمة "  American Pet Professionals"`,
      social: "https://www.linkedin.com/in/mjaldrich13/",
    },
    {
      image: lec1,
      title: "الوصفة السحرية لطعام الحيوان الأليف",
      lecturer: "د/ أورشكا سكوفكا",
      location: "سلوفينيا",
      des: `حاصلة على درجة الدكتوراه في الطب البيطري من جامعة ليوبليانا عام 2016، وبدأ اهتمامها في مجال تغذية الحيوانات الأليفة أثناء دراستها الجامعية عندما كانت تعمل في متجر صغير لبيع مستلزمات الحيوانات الأليفة، حيث ركزت اهتماهما على التغذية السريرية إلى جانب مواضيع أخرى.
القت الدكتورة أورشكا سكوفكا العديد من المحاضرات في مجال تغذية الحيوانات الأليفة من خلال مشاركتها في مؤتمرات بيطرية متعددة، كما تنشط اكاديميا من خلال كتابتها ونشرها للعديد من المقالات في هذا المجال. تختص الدكتورة أورشكا سكوفكا في طب وجراحة الحيوانات الصغيرة وتمارس منهجية دمج تغذية الحيوانات الأليفة في ممارستها اليومية، معتبرة إياها عنصرًا أساسيًا في العلاج بشكل فاعل.
`,
      social:
        "https://www.linkedin.com/in/ur%C5%A1ka-%C5%A1kufca-30b7a6109/?originalSubdomain=si",
    },
  ];
  const courses = [
    {
      image: lec5,
      title: "دليل الرعاية الصحية لجلد وشعر القطط والكلاب",
      lecturer: "د/ جينيفر بيشوب",
      location: " الولايات المتحدة",
      des: `
  تتمتع السيدة جينيفر بيشوب بخبرة تزيد عن أربعة عقود في مجال تجميل ورعاية الحيوانات الأليفة، مع عملها على إنتاج سلالات متعددة من الكلاب والقطط.
  تحمل شهادة خبيرة تجميل دولية معتمدة في مجال الحيوانات الأليفة، ولديها خبرة واسعة في علم وتاريخ الكلاب واحتياجات رعاية الحيوانات الأليفة ذات الصلة بأنواع الجلد والفراء المختلفة.
  لها مشاركات إعلامية مميزة، من ضمنها ظهورها في الموسم الثالث من السلسلة التلفزيونية "Small Business Revolution" على منصة هولو كخبيرة معتمدة في مجال الرعاية والتجميل.
  في عام 2014، افتتحت السيدة جينيفر صالون التجميل "Love Fur Dogs"، الذي حاز على عدة جوائز محلية، منها لقب "أفضل محل تجميل للحيوانات الأليفة في شيكاغو" من قبل مجلة Chicago Tribune.
  بالإضافة إلى ذلك، كتبت مقالات عديدة في المجلات المحلية، وتقدم الآن بودكاست شهري تحت عنوان "Groomers Guide Podcast".
  لها مساهمات بارزة في تنظيم التشريعات المتعلقة برعاية وتجميل الحيوانات الأليفة، وأسست جمعيات خيرية على النطاقين الوطني والمحلي. كما ساعدت في تطوير برامج اعتماد المهنة، وألفت كتاباً بعنوان "A Groomers Guide to the Fifteen Coat Types".
  `,
      social: "https://www.linkedin.com/in/jenniferbishopjenkins/",
    },
  ];
  const workShops = [
    {
      image: w5,
      title: "إعادة تعريف رعاية الحيوانات الأليفة في المملكة العربية السعودية",
    },
    {
      image: w6,
      title:
        "الاتجاهات الناشئة في التغذية البيطرية: معيار جديد للأنظمة الغذائية العلاجية",
    },
    {
      image: w7,
      title: "الأمراض الجلدية والإدارة الغذائية لاضطرابات الجلد",
    },
    {
      image: w4,
      title: "اعتلال الأمعاء المزمن لدى القطط",
    },
    {
      image: w8,
      title: "مقدمة في العلاج الطبيعي وإعادة التأهيل للحيوانات الصغيرة",
    },

    {
      image: w1,
      title: "إدارة اعاقات القطط في حالات الطوارئ",
    },
    {
      image: w2,
      title: "أنظمة الموجات فوق الصوتية (POCUS) في حالات الطوارئ",
    },
    {
      image: w3,
      title: "التعامل مع حصوات المسالك البولية للقطط والكلاب",
    },
    {
      image: w4,
      title: "اعتلال الكلى المزمن لدى القطط",
    },
  ];
  return (
    <div id="events" className="Activities mb-20 relative">
      <div className="scrollCourses hidden lg:block absolute right-0 top-[100px]">
        <Image src={scrollImg} alt="" />
        <Image src={scrollImg} alt="" />
        <Image src={scrollImg} alt="" />
        <Image src={scrollImg} alt="" />
      </div>
      <div className="container">
        <div className="headerDate mb-5 flex flex-col gap-4">
          {/* <span className="text-textPrimary font-normal text-sm lg:text-[20px]">
            مناسبات خاصة
          </span> */}
          <h2 className="text-textPrimary font-bold lg:font-extrabold text-2xl lg:text-[40px] text-center lg:text-right">
            الأنشطة المصاحبة
          </h2>
        </div>
        <div className="activitiesList flex flex-col items-start gap-7 mt-5 lg:mt-16">
          <ActivityList label="المحاضرات" data={lectures} />
          <ActivityList label="الدورات" data={courses} />
          <ActivityList label="ورش العمـل" data={workShops} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
