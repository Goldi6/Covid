import { useCallback, useEffect, useState } from "react";

export default function useSectionObserver(
    mainRef: React.RefObject<HTMLElement>,
    sectionRefs: React.RefObject<HTMLElement>[]
  ): string | null {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const observerCallback = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const sectionId = entry.target.getAttribute("id");
            setActiveSectionId(sectionId);
            
          }
        });
      },
      []
    );
  
    const observerOptions: IntersectionObserverInit = {
      root: mainRef.current,
      threshold: 0.75,
    };
  
    useEffect(() => {
      if (!mainRef.current) return;
      const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
          );
          
          sectionRefs.forEach((sectionRef) => {
              if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
      });
  
      return () => {
        observer.disconnect();
      };
    }, [mainRef, sectionRefs, observerCallback, ]);
  
    return activeSectionId;
  }