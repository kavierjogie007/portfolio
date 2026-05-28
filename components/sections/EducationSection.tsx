'use client';

import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { fadeUp } from '@/lib/utils';

const EDUCATION = [
  {
    institution: 'Nelson Mandela University',
    qualification:
      'Bachelor of Science Honours (BScHons), Computer Science and Information Systems',
    period: 'Feb 2025 — Dec 2025',
    location: 'Gqeberha, South Africa',
    modules: [
      'Data Warehousing',
      'Usability Engineering',
      'Project Management',
      'Advanced Functional Programming',
      'Artificial Intelligence',
      'E-Commerce',
      'Evolutionary Computing',
      'Virtual Reality',
    ],
  },
  {
    institution: 'Nelson Mandela University',
    qualification:
      'Bachelor of Science (BSc), Computer Science and Mathematical Statistics',
    period: 'Feb 2022 — Dec 2024',
    location: 'Gqeberha, South Africa',
  },
  {
    institution: 'Pinelands High School',
    qualification: 'National Senior Certificate (Matric)',
    period: 'Jan 2017 — Dec 2021',
    location: 'Cape Town, South Africa',
    activities: 'Custodian',
    modules: [
      'Mathematics',
      'Physical Science',
      'Information Technology',
      'Accounting',
      'Engineering Graphic Design',
      'English Home Language',
      'Afrikaans First Additional Language',
      'Life Orientation',
    ],
  },
];

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        label="// 05. education"
        title="Education"
        subtitle="My academic journey in computer science, software engineering, and technology."
      />

      <div className="space-y-8 max-w-4xl">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.qualification}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ borderColor: 'rgba(0,229,255,0.25)' }}
            className="glass-card rounded-2xl p-8 border border-border-subtle transition-all duration-300 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                  <GraduationCap size={28} className="text-accent-cyan" />
                </div>

                <div className="flex-1">
                  <p className="section-label mb-1">Institution</p>

                  <h3 className="font-display font-bold text-text-primary text-2xl mb-2">
                    {edu.institution}
                  </h3>

                  <p className="text-accent-cyan font-medium leading-relaxed">
                    {edu.qualification}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="flex items-center gap-2 text-xs font-mono text-text-muted bg-bg-elevated px-3 py-1 rounded-full border border-border-subtle">
                      <CalendarDays size={14} />
                      {edu.period}
                    </span>

                    <span className="flex items-center gap-2 text-xs font-mono text-text-muted bg-bg-elevated px-3 py-1 rounded-full border border-border-subtle">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modules */}
              {edu.modules && (
                <>
                  <div className="my-6 h-px bg-border-subtle" />

                  <div>
                    <p className="section-label mb-4">
                      {edu.institution === 'Pinelands High School'
                        ? 'Matric Subjects'
                        : 'Modules'}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {edu.modules.map((module) => (
                        <div
                          key={module}
                          className="flex items-center gap-2 text-text-secondary text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/60 shrink-0" />
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Activities */}
              {edu.activities && (
                <>
                  <div className="my-6 h-px bg-border-subtle" />

                  <div>
                    <p className="section-label mb-2">
                      Activities & Societies
                    </p>

                    <p className="text-text-secondary text-sm">
                      {edu.activities}
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}