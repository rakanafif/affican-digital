import React, { useState, useEffect } from 'react';
import {
Target,
Layers,
Cpu,
Eye,
ArrowUpRight,
Zap,
Hexagon,
Maximize2,
ChevronRight,
Shield,
MousePointer2
} from 'lucide-react';

const App = () => {
const [activeSection, setActiveSection] = useState('identity');
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
setIsLoaded(true);
}, []);

const sections = {
identity: {
title: "رصد الكيان",
subtitle: "Identity Monitoring",
content: "Affican Digital ليست مجرد وكالة تسويق، بل هي مختبر لرصد 'تصدع الثبات'. نحن نؤمن أن الماضي لا يموت، بل يتجلى في كل استراتيجية رقمية نبنيها. نحن هنا لنحول الركود المادي إلى سيولة رقمية تخترق الفراغ.",
points: ["الموضوعية الجسدية في الطرح", "استهداف الشقوق في السوق", "بناء الجسور بين القديم والحديث"]
},
mechanisms: {
title: "الآليات المادية",
subtitle: "Material Mechanisms",
content: "نحن لا نصمم حملات، نحن نفتح 'ثقوباً' في جدار الصمت التسويقي. أدواتنا ليست مجرد برمجيات، بل هي امتداد لحس المراقبة البارد الذي يسعى لتحويل مركز القوة دون إعلان مسبق.",
services: [
{ name: "تحليل البيانات الصلبة", icon: <Cpu className="w-5 h-5" /> },
{ name: "هندسة المحتوى السيال", icon: <Layers className="w-5 h-5" /> },
{ name: "رصد السلوك الرقمي", icon: <Eye className="w-5 h-5" /> },
{ name: "إدارة الثغرات التسويقية", icon: <Zap className="w-5 h-5" /> }
]
},
philosophy: {
title: "فلسفة الأثر",
subtitle: "The Trace Philosophy",
content: "كل علامة تجارية هي جسد له تاريخ. نحن نقترب من التفاصيل كما لو كنا نراقب بلا حكم أخلاقي، نرى الجمال في 'التصدع' ونستغل لحظات الضعف لنحولها إلى قوة ناعمة تخترق الوعي الجمعي.",
quote: "الماضي هو الشيفرة، والحاضر هو الأثر المتروك في الفراغ."
}
};

return (
<div className={`min-h-screen bg-[#050505] text-neutral-300 font-sans transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>  

{/* Background Grid Pattern */}  
  <div className="fixed inset-0 pointer-events-none opacity-20"   
       style={{ backgroundImage: `radial-gradient(circle, #1e1e1e 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>  

  {/* Main Container */}  
  <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col lg:flex-row gap-16">  
      
    {/* Sidebar Navigation */}  
    <aside className="lg:w-1/4 space-y-12">  
      <div className="space-y-2">  
        <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">  
          Affican <span className="text-orange-500">Biz</span>  
        </h1>  
        <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">Digital Marketing Solutions</p>  
      </div>  

      <nav className="flex flex-col gap-4">  
        {Object.keys(sections).map((key) => (  
          <button  
            key={key}  
            onClick={() => setActiveSection(key)}  
            className={`flex items-center justify-between p-4 border transition-all duration-500 ${  
              activeSection === key   
              ? 'border-orange-500/50 bg-orange-500/5 text-white translate-x-2'   
              : 'border-neutral-900 hover:border-neutral-700 bg-transparent'  
            }`}  
          >  
            <div className="text-right">  
              <div className="text-xs uppercase tracking-widest block mb-1 opacity-50">{sections[key].subtitle}</div>  
              <div className="text-sm font-medium">{sections[key].title}</div>  
            </div>  
            <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === key ? 'rotate-90 text-orange-500' : 'text-neutral-700'}`} />  
          </button>  
        ))}  
      </nav>  

      <div className="pt-12 border-t border-neutral-900">  
        <div className="flex items-center gap-3 text-neutral-500 hover:text-orange-500 transition-colors cursor-pointer group">  
          <div className="p-2 border border-neutral-800 rounded group-hover:border-orange-500">  
            <Target className="w-4 h-4" />  
          </div>  
          <span className="text-[10px] uppercase tracking-widest font-bold">بداية الرصد</span>  
        </div>  
      </div>  
    </aside>  

    {/* Content Area */}  
    <main className="flex-1 space-y-12">  
        
      {/* Hero Section of Content */}  
      <div className="relative p-10 border border-neutral-900 bg-neutral-900/10 backdrop-blur-sm overflow-hidden">  
         <div className="absolute top-0 right-0 p-4 opacity-10">  
            <Maximize2 className="w-32 h-32" />  
         </div>  
           
         <div className="relative z-10 space-y-8">  
           <div className="inline-block p-1 px-3 border border-orange-900/30 bg-orange-900/10 text-orange-500 text-[10px] uppercase tracking-widest">  
             {sections[activeSection].subtitle}  
           </div>  
             
           <h2 className="text-5xl font-light tracking-tighter text-white leading-tight">  
             {sections[activeSection].title}  
           </h2>  
             
           <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">  
             {sections[activeSection].content}  
           </p>  

           {activeSection === 'identity' && (  
             <ul className="space-y-4 pt-4">  
               {sections.identity.points.map((p, i) => (  
                 <li key={i} className="flex items-center gap-4 text-sm text-neutral-500">  
                   <div className="w-1.5 h-1.5 bg-orange-500 rotate-45"></div>  
                   {p}  
                 </li>  
               ))}  
             </ul>  
           )}  

           {activeSection === 'mechanisms' && (  
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">  
               {sections.mechanisms.services.map((s, i) => (  
                 <div key={i} className="p-6 border border-neutral-800 bg-black/40 hover:border-teal-900/50 transition-colors group">  
                   <div className="mb-4 text-teal-600 group-hover:text-teal-400 transition-colors">{s.icon}</div>  
                   <div className="text-sm font-medium text-neutral-300">{s.name}</div>  
                 </div>  
               ))}  
             </div>  
           )}  

           {activeSection === 'philosophy' && (  
             <div className="relative p-8 mt-8 border-l-2 border-orange-500 bg-neutral-900/20 italic text-xl text-neutral-300 font-light leading-relaxed">  
               "{sections.philosophy.quote}"  
             </div>  
           )}  
         </div>  
      </div>  

      {/* Footer Info / Contact Call */}  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
        <div className="p-6 border border-neutral-900 space-y-3 hover:bg-neutral-900/10 transition-colors">  
          <Shield className="w-5 h-5 text-neutral-600" />  
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-white">الخصوصية المادية</h4>  
          <p className="text-[10px] text-neutral-500 leading-relaxed">نحمي بياناتك ككتلة صلبة غير قابلة للاختراق.</p>  
        </div>  
        <div className="p-6 border border-neutral-900 space-y-3 hover:bg-neutral-900/10 transition-colors">  
          <Hexagon className="w-5 h-5 text-neutral-600" />  
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-white">الهيكلية الذكية</h4>  
          <p className="text-[10px] text-neutral-500 leading-relaxed">بناء الأنظمة التي تستجيب لكل نبضة رقمية.</p>  
        </div>  
        <div className="p-6 border border-neutral-900 space-y-3 hover:bg-neutral-900/10 transition-colors">  
          <MousePointer2 className="w-5 h-5 text-neutral-600" />  
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-white">الأثر السريع</h4>  
          <p className="text-[10px] text-neutral-500 leading-relaxed">تصدع في الركود وتدفق في النتائج.</p>  
        </div>  
      </div>  

    </main>  
  </div>  

  {/* Corporate Legacy Footer */}  
  <footer className="mt-20 border-t border-neutral-900 p-12 text-center">  
    <div className="flex justify-center gap-12 mb-8 opacity-50">  
       <span className="text-[9px] uppercase tracking-[0.6em]">Precision</span>  
       <span className="text-[9px] uppercase tracking-[0.6em]">Observation</span>  
       <span className="text-[9px] uppercase tracking-[0.6em]">Affican</span>  
    </div>  
    <div className="text-[10px] text-neutral-700 max-w-xl mx-auto leading-loose uppercase tracking-[0.2em]">  
      Affican Digital Marketing Biz — رصد التحولات المادية وتثبيت الأثر الرقمي. <br/>  
      جميع الحقوق محفوظة ضمن "تصدع الثبات" © 2026.  
    </div>  
  </footer>  
</div>
);
};

export default App;