import { BookOpen, CalendarDays, GraduationCap, Users } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
// Flat "emoji-style" flags (Twemoji, CC-BY 4.0), shown as circular badges.
// viewBox is cropped to the flag's bounds (0 5 36 26) so object-cover fills the
// round frame with no transparent caps. China's stars are nudged right (in the
// SVG) so the canton isn't clipped by the circle.
import canadaFlag from '../assets/flags/ca-twemoji.svg';
import chinaFlag from '../assets/flags/cn-twemoji.svg';

const ROLE_STYLES = {
  instructor: {
    icon: BookOpen,
    label: 'Instructor',
    badgeClass:
      'inline-flex items-center gap-2 px-3 py-1 bg-primary-100/70 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium backdrop-blur-sm border border-primary-200/40 dark:border-primary-700/30',
  },
  ta: {
    icon: Users,
    label: 'Teaching Assistant',
    badgeClass:
      'inline-flex items-center gap-2 px-3 py-1 bg-slate-200/60 dark:bg-slate-700/35 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium backdrop-blur-sm border border-slate-300/40 dark:border-slate-600/30',
  },
};

// Teaching cards: three-step gradient for UBC (richest at top); SHUFE uses the top tier.
const TEACHING_CARD_GRADIENT = [
  [
    'border-primary-300/55 shadow-md shadow-primary-500/10',
    'bg-gradient-to-br from-[#b8dff5] to-[#dceefb]',
    'dark:!bg-gradient-to-br dark:!from-[#1e4a66] dark:!to-[#122a3d]',
    'dark:border-primary-400/45 dark:shadow-lg dark:shadow-primary-500/20',
  ].join(' '),
  [
    'border-primary-200/40 shadow-sm shadow-primary-500/5',
    'bg-gradient-to-br from-[#cce9f8] to-[#e8f4fc]',
    'dark:!bg-gradient-to-br dark:!from-[#18354a] dark:!to-[#101f2e]',
    'dark:border-primary-500/32 dark:shadow-md dark:shadow-primary-600/12',
  ].join(' '),
  [
    'border-primary-100/30',
    'bg-gradient-to-br from-[#e2f2fa] to-[#f1f8fc]',
    'dark:!bg-gradient-to-br dark:!from-[#142a3a] dark:!to-[#0c1520]',
    'dark:border-primary-600/22 dark:shadow-sm dark:shadow-primary-800/8',
  ].join(' '),
];

const UBC_COURSES = [
  { title: 'Urban Land Economics', term: '2022W, 2023W', role: 'instructor' },
  { title: 'International Economics (Undergraduate)', role: 'ta' },
  { title: 'Managerial Economics (MBA)', role: 'ta' },
];

const SHUFE_COURSES = [
  {
    title: 'International Economics II: International Finance (Undergraduate)',
    term: '2025W',
    role: 'instructor',
  },
];

function RoleBadge({ role }) {
  const { icon: Icon, label, badgeClass } = ROLE_STYLES[role];

  return (
    <div className={badgeClass}>
      <Icon className="w-4 h-4" />
      {label}
    </div>
  );
}

function TermBadge({ term }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200/45 text-stone-600 rounded-full text-sm font-medium backdrop-blur-sm border border-stone-300/25 dark:bg-slate-800/45 dark:text-slate-400 dark:border-slate-600/25">
      <CalendarDays className="w-4 h-4" />
      {term}
    </div>
  );
}

function CourseMeta({ role, term }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <RoleBadge role={role} />
      {term ? <TermBadge term={term} /> : null}
    </div>
  );
}

const Experience = () => {
  const headerRef = useScrollReveal();
  const setTeachingRef = useStaggerReveal(UBC_COURSES.length);
  const setRaRef = useStaggerReveal(SHUFE_COURSES.length);

  return (
    <div className="full-width-bg mesh-bg-2 pt-16 sm:pt-20">
      <div className="container-custom">
        <div ref={headerRef} className="reveal-fade-up text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100/80 dark:bg-primary-900/40 backdrop-blur-sm rounded-full icon-pulse">
              <GraduationCap className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Teaching
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 lg:items-start">
          {/* Shanghai University of Finance and Economics */}
          <div className="flex items-center gap-3 lg:col-start-1 lg:row-start-1">
            <img
              src={chinaFlag}
              alt="Flag of China"
              className="w-11 h-11 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10 dark:ring-white/15"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shanghai University of Finance and Economics</h2>
          </div>

          <div className="space-y-6 lg:col-start-1 lg:row-start-2">
            {SHUFE_COURSES.map((course, index) => (
              <div
                key={course.title}
                ref={setRaRef(index)}
                className={`stagger-item glass-card p-6 ${TEACHING_CARD_GRADIENT[0]}`}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <CourseMeta role={course.role} term={course.term} />
              </div>
            ))}
          </div>

          {/* University of British Columbia */}
          <div className="flex items-center gap-3 lg:col-start-2 lg:row-start-1">
            <img
              src={canadaFlag}
              alt="Flag of Canada"
              className="w-11 h-11 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10 dark:ring-white/15"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">University of British Columbia</h2>
              <p className="text-base font-medium text-gray-500 dark:text-gray-400 mt-0.5">Sauder School of Business</p>
            </div>
          </div>

          <div className="space-y-6 lg:col-start-2 lg:row-start-2">
            {UBC_COURSES.map((course, index) => (
              <div
                key={course.title}
                ref={setTeachingRef(index)}
                className={`stagger-item glass-card p-6 ${TEACHING_CARD_GRADIENT[index]}`}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                <CourseMeta role={course.role} term={course.term} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
