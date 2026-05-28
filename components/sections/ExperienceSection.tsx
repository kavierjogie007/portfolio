'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { EXPERIENCE } from '@/lib/data';
import { staggerContainer, fadeUp } from '@/lib/utils';

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="// 04. experience"
        title="Where I&apos;ve Been"
        subtitle="Roles that have shaped my technical and professional growth."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border-subtle hidden md:block" />

        <div className="space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring' }}
                className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-bg-primary border-2 border-accent-cyan/60 hidden md:flex items-center justify-center text-sm -translate-y-1/2"
              >
                <span className="text-xs">{exp.icon}</span>
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ borderColor: 'rgba(0,229,255,0.25)', x: 4 }}
                className="glass-card rounded-2xl p-6 border border-border-subtle transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-xl">{exp.title}</h3>
                    <p className="text-accent-cyan text-sm font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="text-xs font-mono text-text-secondary bg-bg-elevated px-3 py-1 rounded-full border border-border-subtle">
                      {exp.period}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded border border-border-subtle hover:text-accent-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
