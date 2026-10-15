export const skills = [
  { title: 'Programming & Backend', items: ['Python', 'Django', 'Django REST Framework', 'RESTful APIs', 'PHP fundamentals'] },
  { title: 'Frontend Development', items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Next.js APIs'] },
  { title: 'Database', items: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'SQL joins', 'Subqueries'] },
  { title: 'AI & Machine Learning', items: ['AI/ML fundamentals', 'Scikit-learn', 'Natural Language Processing', 'Generative AI & LLMs', 'Prompt engineering', 'Data preprocessing', 'Model training & evaluation'] },
  { title: 'Tools & Concepts', items: ['Git & GitHub', 'Docker', 'Linux', 'Django ORM', 'Models, Views, Templates & Forms', 'Authentication & Authorization', 'Middleware', 'OOP', 'Data Structures & Algorithms'] },
]

export const experience = [{
  title: 'Software Developer', company: 'Unizen Technologies', period: 'August 2024 - October 2026',
  highlights: [
    'Worked on web applications and business management systems.',
    'Developed CRUD functionality, REST APIs, database operations, authentication, and authorization.',
    'Contributed to payroll, inventory, booking, and institutional management systems.',
    'Implemented business workflows and reporting features, and optimized database queries.',
  ],
  technologies: ['Python', 'Django', 'Django ORM', 'Django REST Framework', 'JavaScript', 'SQL'],
}]

export const projects = [
  {
    title: 'AI-Powered Enterprise Operations & Workforce Intelligence Platform', featured: true,
    description: 'An AI-focused enterprise platform concept connecting operational workflows with predictive insights and natural-language assistance.',
    features: ['REST APIs for projects, employee tasks, inventory, and business analytics.', 'ML predictions for potential task delays and inventory shortages.', 'Authorized-data assistant, JWT authentication, and role-based access control.', 'Input validation, API testing, optimized queries, Docker, Gunicorn, and Nginx.'],
    technologies: ['Python', 'Django REST Framework', 'PostgreSQL', 'React.js', 'Scikit-learn', 'LLM APIs', 'Docker', 'Linux'], github: null, demo: null,
  },
  { title: 'Resort Booking Management System', description: 'A booking and operations system for managing guest reservations and resort transport workflows.', features: ['Resort booking CRUD and pickup/drop management.', 'Month-wise and year-wise booking reports.', 'Automated booking notifications through MSG91 WhatsApp API.'], technologies: ['Python', 'Django', 'MSG91 WhatsApp API'], github: null, demo: null },
  { title: 'Inventory Management System', description: 'A database-driven system for keeping inventory masters and item movement records organized.', features: ['Inventory master and transaction modules.', 'Item receipt and issue operations.', 'CRUD functionality for inventory records.'], technologies: ['Python', 'Django', 'SQL'], github: null, demo: null },
  { title: 'Payroll Management System', description: 'An employee payroll system with salary processing based on attendance and leave factors.', features: ['Salary calculations based on medical leave, vacation leave, and attendance.', 'Payroll generation and employee salary management.'], technologies: ['Python', 'Django', 'SQL'], github: null, demo: null },
  { title: 'Vehicle Detection and Counting System', description: 'A computer vision application that detects and tracks vehicles across a defined counting line.', features: ['Vehicle detection and tracking.', 'Counts vehicles crossing a predefined line.', 'Displays the real-time vehicle count.'], technologies: ['Python', 'Django', 'OpenCV'], github: null, demo: null },
  { title: 'Employee Task and Project Management System', description: 'A business application for assigning employee tasks and monitoring project progress.', features: ['Employee task assignment.', 'Project progress tracking.', 'Reporting and task management.'], technologies: ['Python', 'Django', 'SQL'], github: null, demo: null },
  { title: 'Paid Library Management System', description: 'A subscription-based library system for coordinating members, seats, and payments.', features: ['User registration and seat allocation.', 'Payment tracking and subscription duration management.', 'Available and occupied seat tracking.'], technologies: ['Python', 'Django', 'SQL'], github: null, demo: null },
]

export const education = [
  { qualification: 'Bachelor of Engineering', school: 'Gogte Institute of Technology', period: 'Jul 2020 - Apr 2024' },
  { qualification: 'Pre-University Education', school: "Alva's PU College, Moodbidri", period: 'Jul 2017 - Mar 2019' },
  { qualification: 'SSLC', school: 'Parivarthan Elite Residential School, Hubli', period: 'Jul 2016 - Mar 2017' },
]

export const certifications = [
  { name: 'Python Full Stack Development Training', provider: 'PySpiders, Basavanagudi, Bengaluru' },
  { name: 'Python for Data Science', provider: 'IBM' },
  { name: 'SQL and Relational Databases', provider: 'IBM' },
]