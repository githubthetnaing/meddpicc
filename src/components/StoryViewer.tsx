/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { SUCCESS_STORY } from "../data/successStory";
import { Minimize2 } from "lucide-react";

interface StoryViewerProps {
  highlightKeywords: string[];
  activeParagraphId: string | null;
  onClearHighlight: () => void;
  onMinimize?: () => void;
}

export default function StoryViewer({
  highlightKeywords,
  activeParagraphId,
  onClearHighlight,
  onMinimize,
}: StoryViewerProps) {
  const paragraphRefs = useRef<{ [id: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (activeParagraphId) {
      const element = paragraphRefs.current[activeParagraphId];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (highlightKeywords && highlightKeywords.length > 0) {
      // Find the first paragraph that contains any of the keywords
      const firstMatchingParagraph = SUCCESS_STORY.flatMap((s) => s.paragraphs).find(
        (p) =>
          highlightKeywords.some((keyword) =>
            p.text.toLowerCase().includes(keyword.toLowerCase())
          )
      );

      if (firstMatchingParagraph) {
        const element = paragraphRefs.current[firstMatchingParagraph.id];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [highlightKeywords, activeParagraphId]);

  // Helper to highlight words in text
  const renderHighlightedText = (text: string) => {
    if (!highlightKeywords || highlightKeywords.length === 0) return text;

    // Build a regex that matches any of the keywords
    // Sort longer keywords first to avoid sub-match conflicts
    const sortedKeywords = [...highlightKeywords]
      .filter((k) => k.length > 2) // avoid highlighting ultra short words like 'or', 'in'
      .sort((a, b) => b.length - a.length);

    if (sortedKeywords.length === 0) return text;

    const escapedKeywords = sortedKeywords.map((k) =>
      k.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    );
    const pattern = new RegExp(`(${escapedKeywords.join("|")})`, "gi");

    const parts = text.split(pattern);
    return parts.map((part, index) => {
      const isMatch = sortedKeywords.some(
        (keyword) => part.toLowerCase() === keyword.toLowerCase()
      );
      return isMatch ? (
        <mark
          key={index}
          className="bg-sky-500/20 text-sky-300 font-semibold px-1 rounded transition-all duration-300 shadow-sm border-b border-sky-400"
        >
          {part}
        </mark>
      ) : (
        part
      );
    });
  };

  // Helper to determine if a paragraph is highlighted
  const isParagraphHighlighted = (paragraphText: string, paragraphId: string) => {
    if (activeParagraphId === paragraphId) return true;
    if (!highlightKeywords || highlightKeywords.length === 0) return false;
    return highlightKeywords.some((keyword) =>
      paragraphText.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  return (
    <div id="story-viewer-container" className="flex flex-col h-full bg-[#0e1015]/80 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-[#12151d] border-b border-slate-800/80 py-4 px-5 flex justify-between items-center shrink-0">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-extrabold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            Case Narrative Reference
          </h2>
          <p className="text-[10px] text-slate-500 mt-0.5">
            Click any deal option to dynamically trace and match its source text context.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {(highlightKeywords.length > 0 || activeParagraphId) && (
            <button
              onClick={onClearHighlight}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-750 rounded-lg transition-colors cursor-pointer border border-slate-700/60 whitespace-nowrap"
            >
              Clear Pins
            </button>
          )}
          {onMinimize && (
            <button
              onClick={onMinimize}
              className="p-1.5 bg-slate-800/70 hover:bg-slate-750 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer border border-slate-700/60"
              title="Minimize Case Narrative"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Story Panel */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 scroll-smooth select-text bg-[#090a0f]/60 scrollbar-thin">
        {SUCCESS_STORY.map((section) => (
          <div key={section.id} className="space-y-3.5">
            {section.id !== "header" && (
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-800/50 pb-2 flex items-center">
                <span className="w-1.5 h-3 bg-sky-500 rounded-full mr-2"></span>
                {section.title}
              </h3>
            )}
            {section.id === "header" && (
              <div className="pb-4 border-b border-slate-800/40 text-center" style={{ color: "#efe2f0" }}>
                <h1 className="text-2xl font-serif italic text-white tracking-tight">
                  {section.title}
                </h1>
                <p className="text-[9px] font-extrabold text-sky-500 mt-1.5 uppercase tracking-[0.25em]">
                  Unified Deal Dossier
                </p>
              </div>
            )}
            <div className="space-y-3">
              {section.paragraphs.map((para) => {
                const highlighted = isParagraphHighlighted(para.text, para.id);
                return (
                  <div
                    key={para.id}
                    ref={(el) => {
                      paragraphRefs.current[para.id] = el;
                    }}
                    className={`p-4 rounded-xl transition-all duration-300 border leading-relaxed text-xs font-light ${
                      highlighted
                        ? "bg-sky-950/20 border-sky-500/50 text-slate-200 shadow-lg shadow-sky-950/30 scale-[1.01] ring-1 ring-sky-500/25"
                        : "bg-[#0f1118]/45 border-slate-800/40 text-slate-400 hover:bg-[#12151d] hover:border-slate-800"
                    }`}
                  >
                    <p style={para.id === "p-subtitle" ? { color: "#b990b4" } : undefined}>
                      {renderHighlightedText(para.text)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
