'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROJECTS } from '@/lib/data';
import { staggerContainer, fadeUp } from '@/lib/utils';

/* Decorative placeholder image for each project */
function ProjectImagePlaceholder({ accent, category }: { accent: string; category: string }) {
  return (
    <div
      className="relative h-44 rounded-xl overflow-hidden mb-6 flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${accent}10, ${accent}05)` }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${accent}30 1px, transparent 1px), linear-gradient(90deg, ${accent}30 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Center dot */}
      <div
        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-display font-black"
        style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
      >
        {category.charAt(0)}
      </div>
      {/* Corner accent */}
      <div
        className="absolute top-3 right-3 text-xs font-mono tracking-widest"
        style={{ color: accent }}
      >
        {category.toUpperCase()}
      </div>
    </div>
  );
}

/* Single project card */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-accent-cyan/20 transition-all duration-300 group flex flex-col"
    >
      <ProjectImagePlaceholder accent={project.accent} category={project.category} />

      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border"
          style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
        >
          {project.category}
        </span>
        {project.featured && (
          <span className="text-[10px] font-mono tracking-widest text-accent-teal">
            ★ FEATURED
          </span>
        )}
      </div>

      <h3 className="font-display font-bold text-text-primary text-lg mb-3 leading-tight group-hover:text-accent-cyan transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded border border-border-subtle"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary border border-border-subtle px-3 py-2 rounded hover:border-text-muted transition-all duration-200"
        >
          <Github size={13} /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium flex-1 justify-center transition-all duration-200 rounded py-2 px-3"
          style={{ color: project.accent, background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
        >
          <ExternalLink size={13} /> Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="// 03. projects"
        title="Things I've Built"
        subtitle="A selection of academic and personal projects that demonstrate my technical range."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-sm text-text-muted font-mono"
      >
        More projects on{' '}
        <a
          href="#contact"
          className="text-accent-cyan hover:underline"
        >
          GitHub ↗
        </a>
      </motion.p>
    </SectionWrapper>
  );
}
