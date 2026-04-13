// Site configuration
export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "ru",
  title: "Максим Белугин | Руководитель риск-аналитики | DWH & BI",
  description:
    "Руководитель риск-аналитики с 20+ годами опыта в банковском секторе. Эксперт в DWH, BI-отчётности, SQL, Python, PostgreSQL, Tableau. Управление командой, риск-аналитика кредитного портфеля.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Резюме",
  links: [
    { label: "Обо мне", href: "#about" },
    { label: "Опыт", href: "#experience" },
    { label: "Навыки", href: "#skills" },
    { label: "Проекты", href: "#projects" },
    { label: "Контакты", href: "#contact-title" },
  ],
  contactLabel: "Связаться",
  contactHref: "#contact-title",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Максим Белугин",
  roles: [
    "Руководитель риск-аналитики",
    "DWH & BI Эксперт",
    "SQL & Python",
  ],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "О себе",
  description:
    "Руководитель риск-аналитики с 20+ годами опыта в банковском секторе, включая 3+ года в банковских рисках. Организую Риск-кластеры на DWH, создаю витрины данных для BI-отчётности. Занимаюсь риск-аналитикой кредитного портфеля, строю модели планирования и прогнозирования кредитного портфеля и резервов. Веду регулярную отчётность по метрикам риска и структуре портфеля. Навыки дистанционного управления командой, SQL, Python, PostgreSQL, Tableau. Выпускник программы Sber 500 / INSEAD.",
  experienceValue: "20+",
  experienceLabel: "лет\nопыта",
  stats: [
    { value: "3+", label: "года в\nбанковских рисках" },
    { value: "5", label: "Банков" },
    { value: "50+", label: "Обучено\nв ПСБ Академии" },
  ],
  images: [
    { src: "/images/photo.png", alt: "Максим Белугин" },
    { src: "/images/photo.png", alt: "Максим Белугин" },
    { src: "/images/photo.png", alt: "Максим Белугин" },
    { src: "/images/photo.png", alt: "Максим Белугин" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Компетенции",
  heading: "Ключевые навыки",
  services: [
    {
      iconName: "Database",
      title: "DWH & Витрины данных",
      description:
        "Организация Риск-кластеров на DWH, создание витрин данных для BI-отчётности",
      image: "/images/hero-bg.jpg",
    },
    {
      iconName: "BarChart3",
      title: "Риск-аналитика",
      description:
        "Анализ кредитного портфеля, модели планирования и прогнозирования резервов",
      image: "/images/hero-bg.jpg",
    },
    {
      iconName: "Users",
      title: "Управление командой",
      description:
        "Навыки дистанционного управления командой аналитиков",
      image: "/images/hero-bg.jpg",
    },
    {
      iconName: "Code2",
      title: "SQL & Python",
      description:
        "Продвинутый SQL, Python для данных, PostgreSQL, Tableau",
      image: "/images/hero-bg.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Проекты",
  heading: "Опыт работы",
  description:
    "Разработал и внедрил множество аналитических сервисов и BI-решений для крупнейших банков России",
  projects: [
    {
      title: "Риск-кластер на DWH",
      category: "DWH & BI",
      year: "2024",
      image: "/images/hero-bg.jpg",
      featured: true,
    },
    {
      title: "Модели прогнозирования кредитного портфеля",
      category: "Risk Management",
      year: "2024",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Витрины данных для BI-отчётности",
      category: "BI Solutions",
      year: "2023",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Отчётность по метрикам риска",
      category: "Risk Analytics",
      year: "2023",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Макропрогнозы на Tableau",
      category: "BI Solutions",
      year: "2023",
      image: "/images/hero-bg.jpg",
    },
  ],
  cta: {
    label: "Обучение",
    heading: "ПСБ Академия",
    linkText: "50+ сотрудников обучено",
    linkHref: "#",
  },
  viewAllLabel: "Все проекты",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Образование",
  heading: "Сертификаты и курсы",
  testimonials: [
    {
      quote:
        "Престижная программа развития лидеров совместно с ведущей бизнес-школой мира",
      author: "Sber 500",
      role: "Выпускник",
      company: "INSEAD",
      image: "/images/photo.png",
      rating: 5,
    },
    {
      quote:
        "Профессиональная программа подготовки аналитиков данных с фокусом на Python",
      author: "Аналитик данных",
      role: "Сертификат",
      company: "Карпов курсы",
      image: "/images/photo.png",
      rating: 5,
    },
    {
      quote: "Разработка и проведение авторского курса по банковской аналитике",
      author: "Преподаватель",
      role: "ПСБ Академия",
      company: "Промсвязьбанк",
      image: "/images/photo.png",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: [
    "Руководитель риск-аналитики",
    "DWH & BI",
    "SQL & Python",
    "PostgreSQL",
    "Tableau",
  ],
  heading: "Готов к новым вызовам",
  description:
    "Ищу позицию Руководителя риск-аналитики в банковском секторе. Опыт работы с DWH, BI-отчётностью, SQL, Python, PostgreSQL, Tableau. Навыки дистанционного управления командой.",
  buttonText: "Связаться со мной",
  buttonHref: "mailto:m.8elugin@yandex.ru",
  email: "m.8elugin@yandex.ru",
  backgroundImage: "/images/hero-bg.jpg",
};

// Footer configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Макс Белугин",
  description:
    "Руководитель риск-аналитики с 20+ годами опыта в банковском секторе. Эксперт в DWH, BI-отчётности, SQL, Python, PostgreSQL, Tableau.",
  columns: [
    {
      title: "Навигация",
      links: [
        { label: "Обо мне", href: "#about" },
        { label: "Опыт работы", href: "#experience" },
        { label: "Навыки", href: "#skills" },
        { label: "Проекты", href: "#projects" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { label: "m.8elugin@yandex.ru", href: "mailto:m.8elugin@yandex.ru" },
        { label: "@Belugin_ma", href: "https://t.me/Belugin_ma" },
        { label: "Москва, Россия", href: "#" },
      ],
    },
  ],
  socialLinks: [
    {
      iconName: "Linkedin",
      href: "https://www.linkedin.com/in/maksim-belugin-b061443a",
      label: "LinkedIn",
    },
    { iconName: "Send", href: "https://t.me/data_fish", label: "Telegram" },
  ],
  newsletterHeading: "Telegram-канал",
  newsletterDescription:
    "Подписывайтесь на @data_fish — тренды и новинки в области ИИ",
  newsletterButtonText: "Подписаться",
  newsletterPlaceholder: "",
  copyright: "© 2025 Максим Белугин. Все права защищены.",
  credit: "Sber 500 × INSEAD | Карпов курсы | ПСБ Академия",
};
