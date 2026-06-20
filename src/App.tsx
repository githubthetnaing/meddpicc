/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import OrchestrationBoard from "./components/OrchestrationBoard";
import StoryViewer from "./components/StoryViewer";
import RoiCalculator from "./components/RoiCalculator";
import {
  Dribbble, 
  Layers, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Flame, 
  Tv, 
  MapPin, 
  TrendingUp, 
  Trophy,
  Activity,
  Coins
} from "lucide-react";

type Language = "en" | "es";

const translations = {
  en: {
    languageLabel: "Language",
    intro: "Sales Architecture Interface",
    title: "MEDDPICC Boardroom Orchestrator",
    version: "v4.0",
    client: "Client Account",
    footprint: "Total Footprint",
    solution: "Solution Suite",
    score: "Deal Scorecard",
    chessboard: "MEDDPICC Chessboard",
    roi: "Microsoft Stack ROI Model",
    expand: "Expand Case Narrative",
    session: "SESSION",
    active: "ACTIVE",
    target: "TARGET: ENTERPRISE SEGMENT",
    footer: "Mastering the MEDDPICC Framework with Precision.",
  },
  es: {
    languageLabel: "Idioma",
    intro: "Interfaz de Arquitectura de Ventas",
    title: "Orquestador del Salón de MEDDPICC",
    version: "v4.0",
    client: "Cuenta del Cliente",
    footprint: "Huella Total",
    solution: "Suite de Soluciones",
    score: "Panel de Oportunidad",
    chessboard: "Tablero MEDDPICC",
    roi: "Modelo ROI de Microsoft Stack",
    expand: "Ampliar Narrativa del Caso",
    session: "SESIÓN",
    active: "ACTIVA",
    target: "OBJETIVO: SEGMENTO EMPRESARIAL",
    footer: "Dominando el marco MEDDPICC con precisión.",
  },
};

export default function App() {
  const [highlightKeywords, setHighlightKeywords] = useState<string[]>([]);
  const [activeParagraphId, setActiveParagraphId] = useState<string | null>(null);
  const [isStoryMinimized, setIsStoryMinimized] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"chessboard" | "roi">("chessboard");
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  const handleItemClick = (keywords: string[]) => {
    setHighlightKeywords(keywords);
    setActiveParagraphId(null); // Clear manual ID to search by keyword list
    setIsStoryMinimized(false); // Auto-expand when a reference card is clicked
    setActiveTab("chessboard"); // Auto-switch context to chessboard tracing mode
  };

  const handleClearHighlight = () => {
    setHighlightKeywords([]);
    setActiveParagraphId(null);
  };

  // Quick navigation helpers to jump directly to sections of the story
  const handleQuickNav = (paraId: string, sectionKeywords: string[]) => {
    setActiveParagraphId(paraId);
    setHighlightKeywords(sectionKeywords);
    setIsStoryMinimized(false); // Auto-expand on quick navigation trigger
    setActiveTab("chessboard"); // Auto-switch context to chessboard tracing mode
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-[#0c0d10] text-slate-200 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Navigation HUD */}
      <header className="bg-[#0e1015]/90 border-b border-slate-800/80 sticky top-0 z-50 backdrop-blur shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-1">{t.intro}</h1>
            <div className="text-3xl font-serif italic text-white tracking-tight">
              {t.title} <span className="text-sky-500 text-lg not-italic font-sans font-bold ml-2">{t.version}</span>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-3">
            <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400">
              <span>{t.languageLabel}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as Language)}
                className="rounded-full border border-slate-700 bg-[#0f1218] px-3 py-1.5 text-[11px] font-semibold text-slate-200 outline-none ring-0"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </label>

            {/* Deal Metadata Hud */}
            <div className="flex items-center gap-3 bg-[#13161e]/80 p-2.5 rounded-2xl border border-slate-800/90 text-[10px] sm:text-xs">
              <div className="px-3 py-1 text-center border-r border-slate-800">
                <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-wider">{t.client}</span>
                <span className="font-semibold text-sky-400">Coca-Cola HBC</span>
              </div>
              <div className="px-3 py-1 text-center border-r border-slate-800">
                <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-wider">{t.footprint}</span>
                <span className="font-semibold text-slate-200">29 Warehouses, 17 Countries</span>
              </div>
              <div className="px-3 py-1 text-center border-r border-slate-800">
                <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-wider">{t.solution}</span>
                <span className="font-semibold text-slate-200">Microsoft Security Stack</span>
              </div>
              <div className="px-3 py-1 text-center">
                <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-wider">{t.score}</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  36/40 (90%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Orchestration Workspace split */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6 min-h-0 overflow-hidden">
        {/* Left pane: Orchestration Chessboard or ROI Configurator */}
        <section id="orchestration-panel" className="flex-1 flex flex-col min-h-0 min-w-0" aria-label="MEDDPICC Orchestration Table">
          {/* Dashboard Mode Selector Tabs */}
          <div className="flex bg-[#0d0e12]/80 border border-slate-800/80 p-1 rounded-2xl mb-4 gap-1.5 select-none shrink-0 max-w-fit shadow-inner">
            <button
              onClick={() => setActiveTab("chessboard")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "chessboard"
                  ? "bg-slate-850 border border-slate-800/50 text-sky-400 font-extrabold"
                  : "border border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#13161e]/40"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.chessboard}</span>
            </button>
            <button
              onClick={() => setActiveTab("roi")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "roi"
                  ? "bg-slate-850 border border-slate-800/50 text-orange-400 font-extrabold"
                  : "border border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#13161e]/40"
              }`}
            >
              <Coins className="w-3.5 h-3.5" />
              <span>{t.roi}</span>
            </button>
          </div>

          <div className="flex-1 min-h-0">
            {activeTab === "chessboard" ? (
              <OrchestrationBoard onItemClick={handleItemClick} />
            ) : (
              <RoiCalculator />
            )}
          </div>
        </section>

        {/* Right pane: Dynamic Success Story Document Viewer */}
        {isStoryMinimized ? (
          <button
            onClick={() => setIsStoryMinimized(false)}
            className="flex lg:flex-col items-center justify-center gap-2.5 p-3 lg:py-8 lg:px-3.5 bg-[#0e1015]/90 border border-slate-800/80 hover:border-sky-500/50 hover:bg-[#13161f]/90 text-slate-400 hover:text-sky-400 rounded-2xl transition-all cursor-pointer select-none shrink-0 group border-dashed"
            title="Expand Case Narrative Reference"
          >
            <BookOpen className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-extrabold lg:[writing-mode:vertical-lr] lg:rotate-180 whitespace-nowrap">
              {t.expand}
            </span>
          </button>
        ) : (
          <section id="document-viewer-panel" className="w-full lg:w-[460px] xl:w-[500px] flex flex-col min-h-[450px] lg:min-h-0 shrink-0" aria-label="Success Story Text References">
            <StoryViewer
              highlightKeywords={highlightKeywords}
              activeParagraphId={activeParagraphId}
              onClearHighlight={handleClearHighlight}
              onMinimize={() => setIsStoryMinimized(true)}
            />
          </section>
        )}
      </main>

      {/* Footer Info HUD */}
      <footer className="bg-[#07080b] border-t border-slate-900 py-4 text-center shrink-0">
        <div className="max-w-7xl mx-auto px-4 text-[10px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 tracking-widest uppercase">
          <div className="flex gap-4 items-center">
            <span className="text-slate-400">{t.session}: <span className="text-emerald-400">{t.active}</span></span>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
            <span>{t.target}</span>
          </div>
          <div className="font-serif italic lowercase tracking-normal text-slate-400 text-xs">
            {t.footer}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-slate-600 font-sans tracking-tight">Quick Story:</span>
            <button
              onClick={() => handleQuickNav("p-1-1", ["Thessaloniki", "Greece", "pilot"])}
              className="px-1.5 py-0.5 bg-[#12151d] border border-slate-850 rounded hover:border-sky-500 hover:text-sky-400 text-slate-400 font-mono transition-colors cursor-pointer tracking-normal normal-case text-[10px]"
            >
              Pilot
            </button>
            <button
              onClick={() => handleQuickNav("p-3-1-2", ["Suzana Rari", "0.1%"])}
              className="px-1.5 py-0.5 bg-[#12151d] border border-slate-850 rounded hover:border-sky-500 hover:text-sky-400 text-slate-400 font-mono transition-colors cursor-pointer tracking-normal normal-case text-[10px]"
            >
              Rari
            </button>
            <button
              onClick={() => handleQuickNav("p-3-7-2", ["Angel Boyanov", "Digital Product Manager"])}
              className="px-1.5 py-0.5 bg-[#12151d] border border-slate-850 rounded hover:border-sky-500 hover:text-sky-400 text-slate-400 font-mono transition-colors cursor-pointer tracking-normal normal-case text-[10px]"
            >
              Boyanov
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
