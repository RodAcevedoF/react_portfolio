import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionKey } from "../types";

export const useActiveSectionObserver = () => {
  const bioRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const techRef = useRef<HTMLElement | null>(null);

  const [bioEntry, setBioEntry] = useState<IntersectionObserverEntry | null>(
    null
  );
  const [eduEntry, setEduEntry] = useState<IntersectionObserverEntry | null>(
    null
  );
  const [expEntry, setExpEntry] = useState<IntersectionObserverEntry | null>(
    null
  );
  const [techEntry, setTechEntry] = useState<IntersectionObserverEntry | null>(
    null
  );

  const { ref: bioInViewRef } = useInView({
    threshold: Array.from(Array(101).keys(), (x) => x / 100),
    onChange: (_, entry) => setBioEntry(entry)
  });
  const { ref: eduInViewRef } = useInView({
    threshold: Array.from(Array(101).keys(), (x) => x / 100),
    onChange: (_, entry) => setEduEntry(entry)
  });
  const { ref: expInViewRef } = useInView({
    threshold: Array.from(Array(101).keys(), (x) => x / 100),
    onChange: (_, entry) => setExpEntry(entry)
  });
  const { ref: techInViewRef } = useInView({
    threshold: Array.from(Array(101).keys(), (x) => x / 100),
    onChange: (_, entry) => setTechEntry(entry)
  });

  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  const setBioRef = useCallback(
    (node: HTMLElement | null) => {
      bioRef.current = node;
      bioInViewRef(node);
    },
    [bioInViewRef]
  );
  const setEducationRef = useCallback(
    (node: HTMLElement | null) => {
      educationRef.current = node;
      eduInViewRef(node);
    },
    [eduInViewRef]
  );
  const setExperienceRef = useCallback(
    (node: HTMLElement | null) => {
      experienceRef.current = node;
      expInViewRef(node);
    },
    [expInViewRef]
  );
  const setTechRef = useCallback(
    (node: HTMLElement | null) => {
      techRef.current = node;
      techInViewRef(node);
    },
    [techInViewRef]
  );

  useEffect(() => {
    const entries = [
      { key: "bio" as SectionKey, entry: bioEntry },
      { key: "education" as SectionKey, entry: eduEntry },
      { key: "experience" as SectionKey, entry: expEntry },
      { key: "tech" as SectionKey, entry: techEntry }
    ];

    const visibleEntries = entries.filter((e) => e.entry?.isIntersecting);
    if (visibleEntries.length === 0) {
      setActiveSection(null);
      return;
    }

    visibleEntries.sort(
      (a, b) =>
        (b.entry?.intersectionRatio ?? 0) - (a.entry?.intersectionRatio ?? 0)
    );
    setActiveSection(visibleEntries[0].key);
  }, [bioEntry, eduEntry, expEntry, techEntry]);

  return {
    sectionRefs: {
      bio: bioRef,
      education: educationRef,
      experience: experienceRef,
      tech: techRef
    },
    observerRefs: {
      bio: setBioRef,
      education: setEducationRef,
      experience: setExperienceRef,
      tech: setTechRef
    },
    activeSection
  };
};
