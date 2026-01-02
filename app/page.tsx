'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ar' | 'es' | 'fr' | 'de' | 'zh'>('en');

  const translations = {
    en: {
      title: "Welcome to Global Platform",
      subtitle: "Connect with the world - Your gateway to international opportunities",
      description: "A comprehensive platform designed to bring people, businesses, and ideas together from every corner of the globe.",
      features: {
        title: "Global Features",
        items: [
          { title: "Multi-Language Support", desc: "Access content in your preferred language" },
          { title: "Worldwide Network", desc: "Connect with users across continents" },
          { title: "24/7 Availability", desc: "Always accessible, no matter your timezone" },
          { title: "Secure & Reliable", desc: "Enterprise-grade security and performance" }
        ]
      },
      cta: "Get Started",
      learnMore: "Learn More",
      footer: "© 2024 Global Platform. Serving the world."
    },
    ar: {
      title: "مرحباً بك في المنصة العالمية",
      subtitle: "اتصل مع العالم - بوابتك إلى الفرص الدولية",
      description: "منصة شاملة مصممة لجمع الناس والشركات والأفكار من كل ركن في العالم.",
      features: {
        title: "ميزات عالمية",
        items: [
          { title: "دعم متعدد اللغات", desc: "الوصول إلى المحتوى بلغتك المفضلة" },
          { title: "شبكة عالمية", desc: "تواصل مع المستخدمين عبر القارات" },
          { title: "متاح 24/7", desc: "دائماً في متناول اليد، مهما كانت منطقتك الزمنية" },
          { title: "آمن وموثوق", desc: "أمان وأداء على مستوى المؤسسات" }
        ]
      },
      cta: "ابدأ الآن",
      learnMore: "اعرف المزيد",
      footer: "© 2024 المنصة العالمية. خدمة العالم."
    },
    es: {
      title: "Bienvenido a la Plataforma Global",
      subtitle: "Conéctate con el mundo - Tu puerta de entrada a oportunidades internacionales",
      description: "Una plataforma integral diseñada para unir personas, empresas e ideas de todos los rincones del mundo.",
      features: {
        title: "Características Globales",
        items: [
          { title: "Soporte Multilingüe", desc: "Accede al contenido en tu idioma preferido" },
          { title: "Red Mundial", desc: "Conéctate con usuarios de todos los continentes" },
          { title: "Disponible 24/7", desc: "Siempre accesible, sin importar tu zona horaria" },
          { title: "Seguro y Confiable", desc: "Seguridad y rendimiento de nivel empresarial" }
        ]
      },
      cta: "Comenzar",
      learnMore: "Saber Más",
      footer: "© 2024 Plataforma Global. Sirviendo al mundo."
    },
    fr: {
      title: "Bienvenue sur la Plateforme Mondiale",
      subtitle: "Connectez-vous au monde - Votre passerelle vers les opportunités internationales",
      description: "Une plateforme complète conçue pour rassembler les personnes, les entreprises et les idées des quatre coins du monde.",
      features: {
        title: "Fonctionnalités Mondiales",
        items: [
          { title: "Support Multilingue", desc: "Accédez au contenu dans votre langue préférée" },
          { title: "Réseau Mondial", desc: "Connectez-vous avec des utilisateurs de tous les continents" },
          { title: "Disponible 24/7", desc: "Toujours accessible, quel que soit votre fuseau horaire" },
          { title: "Sécurisé et Fiable", desc: "Sécurité et performances de niveau entreprise" }
        ]
      },
      cta: "Commencer",
      learnMore: "En Savoir Plus",
      footer: "© 2024 Plateforme Mondiale. Au service du monde."
    },
    de: {
      title: "Willkommen auf der Globalen Plattform",
      subtitle: "Verbinde dich mit der Welt - Dein Tor zu internationalen Möglichkeiten",
      description: "Eine umfassende Plattform, die Menschen, Unternehmen und Ideen aus allen Ecken der Welt zusammenbringt.",
      features: {
        title: "Globale Funktionen",
        items: [
          { title: "Mehrsprachige Unterstützung", desc: "Zugriff auf Inhalte in deiner bevorzugten Sprache" },
          { title: "Weltweites Netzwerk", desc: "Verbinde dich mit Benutzern auf allen Kontinenten" },
          { title: "24/7 Verfügbar", desc: "Immer erreichbar, unabhängig von deiner Zeitzone" },
          { title: "Sicher und Zuverlässig", desc: "Sicherheit und Leistung auf Unternehmensniveau" }
        ]
      },
      cta: "Loslegen",
      learnMore: "Mehr Erfahren",
      footer: "© 2024 Globale Plattform. Der Welt dienen."
    },
    zh: {
      title: "欢迎来到全球平台",
      subtitle: "连接世界 - 您通往国际机会的门户",
      description: "一个全面的平台，旨在将来自世界各个角落的人们、企业和想法汇聚在一起。",
      features: {
        title: "全球特性",
        items: [
          { title: "多语言支持", desc: "以您喜欢的语言访问内容" },
          { title: "全球网络", desc: "与各大洲的用户建立联系" },
          { title: "全天候可用", desc: "无论您的时区如何，始终可访问" },
          { title: "安全可靠", desc: "企业级安全性和性能" }
        ]
      },
      cta: "开始使用",
      learnMore: "了解更多",
      footer: "© 2024 全球平台。服务世界。"
    }
  };

  const content = translations[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-blue-900 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header with Language Selector */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌍</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">Global Platform</span>
          </div>
          
          <div className="flex gap-2">
            {(['en', 'ar', 'es', 'fr', 'de', 'zh'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto py-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                ✨ {language === 'en' ? 'Now Live Globally' : language === 'ar' ? 'متاح عالمياً الآن' : language === 'es' ? 'Ahora en vivo globalmente' : language === 'fr' ? 'Maintenant en direct dans le monde entier' : language === 'de' ? 'Jetzt weltweit live' : '现已全球上线'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {content.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              {content.subtitle}
            </p>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {content.description}
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                {content.cta}
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                {content.learnMore}
              </button>
            </div>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto my-16">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">195+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Countries' : language === 'ar' ? 'دولة' : language === 'es' ? 'Países' : language === 'fr' ? 'Pays' : language === 'de' ? 'Länder' : '国家'}
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Languages' : language === 'ar' ? 'لغة' : language === 'es' ? 'Idiomas' : language === 'fr' ? 'Langues' : language === 'de' ? 'Sprachen' : '语言'}
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Support' : language === 'ar' ? 'دعم' : language === 'es' ? 'Soporte' : language === 'fr' ? 'Support' : language === 'de' ? 'Support' : '支持'}
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Uptime' : language === 'ar' ? 'وقت التشغيل' : language === 'es' ? 'Tiempo activo' : language === 'fr' ? 'Disponibilité' : language === 'de' ? 'Verfügbarkeit' : '正常运行时间'}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {content.features.title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.features.items.map((feature, index) => (
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">
                      {index === 0 ? '🌐' : index === 1 ? '🤝' : index === 2 ? '⏰' : '🔒'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Map Representation */}
          <div className="max-w-6xl mx-auto my-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl text-white text-center">
            <div className="text-6xl mb-4">🌍 🌎 🌏</div>
            <h3 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'Serving Every Continent' : 
               language === 'ar' ? 'خدمة كل قارة' : 
               language === 'es' ? 'Sirviendo a todos los continentes' : 
               language === 'fr' ? 'Servir tous les continents' : 
               language === 'de' ? 'Alle Kontinente bedienen' : 
               '服务每个大陆'}
            </h3>
            <p className="text-xl opacity-90">
              {language === 'en' ? 'From Americas to Asia, Europe to Africa, and Oceania' : 
               language === 'ar' ? 'من الأمريكتين إلى آسيا وأوروبا إلى أفريقيا وأوقيانوسيا' : 
               language === 'es' ? 'Desde las Américas hasta Asia, Europa, África y Oceanía' : 
               language === 'fr' ? "Des Amériques à l'Asie, de l'Europe à l'Afrique et l'Océanie" : 
               language === 'de' ? 'Von Amerika bis Asien, Europa bis Afrika und Ozeanien' : 
               '从美洲到亚洲、欧洲到非洲和大洋洲'}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">{content.footer}</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
