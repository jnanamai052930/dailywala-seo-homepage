'use client';

import { useEffect, useState } from 'react';

type LegalSection = readonly [id: string, label: string];

export function LegalTableOfContents({ sections }: { sections: readonly LegalSection[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.[0] ?? '');

  useEffect(() => {
    const sectionFromHash = window.location.hash.slice(1);

    if (sections.some(([id]) => id === sectionFromHash)) {
      setActiveSection(sectionFromHash);
    }

    const updateFromHash = () => {
      const nextSection = window.location.hash.slice(1);

      if (sections.some(([id]) => id === nextSection)) {
        setActiveSection(nextSection);
      }
    };

    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, [sections]);

  return (
    <aside className="legal-toc" aria-label="Terms contents">
      <strong>Terms &amp; Policies</strong>
      <ol>
        {sections.map(([id, label]) => {
          const isActive = activeSection === id;

          return (
            <li key={id}>
              <a
                className={isActive ? 'is-active' : undefined}
                href={`#${id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setActiveSection(id)}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
