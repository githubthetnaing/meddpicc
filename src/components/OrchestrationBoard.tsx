/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MEDDPICC_TABLES } from "../data/meddpiccData";
import { TableConfig, TableCell } from "../types";
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Sparkles, 
  Trash2, 
  Check, 
  Undo,
  ArrowRight,
  Shuffle
} from "lucide-react";

interface OrchestrationBoardProps {
  onItemClick: (keywords: string[]) => void;
}

export default function OrchestrationBoard({ onItemClick }: OrchestrationBoardProps) {
  // Active table selection state
  const [activeTableId, setActiveTableId] = useState<string>("table3_1");
  
  // Placements state: maps tableId -> { "row-col": CellID / null }
  const [placements, setPlacements] = useState<{
    [tableId: string]: { [slotId: string]: string | null };
  }>({});

  // Active validation mode state (controls background colors of placed items)
  const [validationMode, setValidationMode] = useState<{ [tableId: string]: boolean }>({});

  // Selected tool/button from the bank
  const [selectedCellId, setSelectedCellId] = useState<string | null>(null);

  // Drag and Drop States
  const [draggedItem, setDraggedItem] = useState<{
    type: "bank" | "board";
    id: string;
    sourceSlot?: string;
  } | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<string | null>(null);
  const [bankDragOver, setBankDragOver] = useState<boolean>(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("meddpicc_board_placements");
      if (saved) {
        setPlacements(JSON.parse(saved));
      } else {
        // Initialize with empty placements for all tables
        const initialPlacements: typeof placements = {};
        MEDDPICC_TABLES.forEach((table) => {
          initialPlacements[table.id] = {};
          // Fill each cell coordinate with null
          table.rows.forEach((_, rowIndex) => {
            for (let c = 1; c < table.columns.length; c++) {
              initialPlacements[table.id][`${rowIndex}-${c}`] = null;
            }
          });
        });
        setPlacements(initialPlacements);
      }
    } catch (e) {
      console.error("Failed to load placements from storage", e);
    }
  }, []);

  // Save placements on changes
  const savePlacements = (newPlacements: typeof placements) => {
    setPlacements(newPlacements);
    try {
      localStorage.setItem("meddpicc_board_placements", JSON.stringify(newPlacements));
    } catch (e) {
      console.error("Failed to save placements", e);
    }
  };

  const activeTable = MEDDPICC_TABLES.find((t) => t.id === activeTableId) || MEDDPICC_TABLES[0];

  // Get current state for active table
  const activePlacements = placements[activeTableId] || {};

  // Find which cells are already placed on the board of the active table
  const placedIds = new Set(Object.values(activePlacements).filter(Boolean) as string[]);

  // Bank contains cells of the active table that are NOT placed yet
  const bankItems = activeTable.cells.filter((cell) => !placedIds.has(cell.id));

  // Determine scoring metrics
  const getTableStats = (table: TableConfig) => {
    const tablePlacements = placements[table.id] || {};
    let correct = 0;
    let placedCount = 0;
    const totalSlots = table.rows.length * (table.columns.length - 1);

    table.rows.forEach((_, rIndex) => {
      for (let cIndex = 1; cIndex < table.columns.length; cIndex++) {
        const placedId = tablePlacements[`${rIndex}-${cIndex}`];
        if (placedId) {
          placedCount++;
          // Find standard correct answer for this coordinate
          const correctCellDefault = table.cells.find(
            (cell) => cell.correctRow === rIndex && cell.correctCol === cIndex
          );
          const currentPlacedCell = table.cells.find((cell) => cell.id === placedId);
          
          if (correctCellDefault && currentPlacedCell && currentPlacedCell.text === correctCellDefault.text) {
            correct++;
          }
        }
      }
    });

    return { correct, placedCount, totalSlots, scorePercentage: Math.round((correct / totalSlots) * 100) };
  };

  const activeStats = getTableStats(activeTable);

  // Handle slot clicked in table grid
  const handleSlotClick = (rowIndex: number, colIndex: number) => {
    // If validation mode is on, turn it off so they can make modifications
    if (validationMode[activeTableId]) {
      setValidationMode({ ...validationMode, [activeTableId]: false });
    }

    const slotId = `${rowIndex}-${colIndex}`;
    const preexistingId = activePlacements[slotId];

    // Case 1: We have an item selected from the bank, and we want to place it here
    if (selectedCellId) {
      const updatedTablePlacements = { ...activePlacements };
      
      // If we are moving a cell that was ALREADY on the board to another slot
      // We must find its prior slot and empty it
      let priorSlotId: string | null = null;
      for (const [key, val] of Object.entries(activePlacements)) {
        if (val === selectedCellId) {
          priorSlotId = key;
          break;
        }
      }

      if (priorSlotId) {
        // Swap or move
        updatedTablePlacements[priorSlotId] = preexistingId || null;
      }

      updatedTablePlacements[slotId] = selectedCellId;
      
      const newPlacements = { ...placements, [activeTableId]: updatedTablePlacements };
      savePlacements(newPlacements);
      
      // Highlight coordinates in story if item has keywords
      const placedItem = activeTable.cells.find((c) => c.id === selectedCellId);
      if (placedItem) {
        onItemClick(placedItem.keywords);
      }

      setSelectedCellId(null);
    } 
    // Case 2: No bank item selected, but slot contains a preexisting card. Click it to select/move it!
    else if (preexistingId) {
      setSelectedCellId(preexistingId);
      const placedItem = activeTable.cells.find((c) => c.id === preexistingId);
      if (placedItem) {
        onItemClick(placedItem.keywords);
      }
    }
  };

  // Drag and drop event handlers
  const handleDragStart = (e: React.DragEvent, data: typeof draggedItem) => {
    if (!data) return;
    if (validationMode[activeTableId]) {
      setValidationMode({ ...validationMode, [activeTableId]: false });
    }
    setDraggedItem(data);
    e.dataTransfer.setData("text/plain", data.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, slotKey: string) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent, slotKey: string) => {
    e.preventDefault();
    setDragOverSlot(slotKey);
  };

  const handleDragLeave = (e: React.DragEvent, slotKey: string) => {
    if (dragOverSlot === slotKey) {
      setDragOverSlot(null);
    }
  };

  const handleDrop = (e: React.DragEvent, rowIndex: number, colIndex: number) => {
    e.preventDefault();
    setDragOverSlot(null);
    
    const itemId = e.dataTransfer.getData("text/plain") || draggedItem?.id;
    if (!itemId) return;

    const targetSlotKey = `${rowIndex}-${colIndex}`;
    const preexistingId = activePlacements[targetSlotKey];
    const updatedTablePlacements = { ...activePlacements };

    if (draggedItem?.type === "board" && draggedItem.sourceSlot) {
      // Swapping or moving within the board
      const sourceSlot = draggedItem.sourceSlot;
      if (sourceSlot !== targetSlotKey) {
        updatedTablePlacements[sourceSlot] = preexistingId || null;
        updatedTablePlacements[targetSlotKey] = itemId;
      }
    } else {
      // Dragging a clean item from the selection bank
      updatedTablePlacements[targetSlotKey] = itemId;
    }

    const newPlacements = { ...placements, [activeTableId]: updatedTablePlacements };
    savePlacements(newPlacements);

    // Dynamic highlight linkage to story text
    const placedItem = activeTable.cells.find((c) => c.id === itemId);
    if (placedItem) {
      onItemClick(placedItem.keywords);
    }

    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverSlot(null);
    setBankDragOver(false);
  };

  const handleBankDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleBankDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedItem?.type === "board") {
      setBankDragOver(true);
    }
  };

  const handleBankDragLeave = () => {
    setBankDragOver(false);
  };

  const handleBankDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setBankDragOver(false);
    if (draggedItem?.type === "board" && draggedItem.sourceSlot) {
      // Reclaim board item back to bank by setting slot placement to null
      const sourceSlot = draggedItem.sourceSlot;
      const updatedTablePlacements = { ...activePlacements };
      updatedTablePlacements[sourceSlot] = null;
      
      const newPlacements = { ...placements, [activeTableId]: updatedTablePlacements };
      savePlacements(newPlacements);
    }
    setDraggedItem(null);
  };

  // Reclaim an item from table slot back to the bank
  const handleRemoveFromSlot = (slotId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Avoid slot trigger
    
    if (validationMode[activeTableId]) {
      setValidationMode({ ...validationMode, [activeTableId]: false });
    }

    const updatedTablePlacements = { ...activePlacements };
    updatedTablePlacements[slotId] = null;

    const newPlacements = { ...placements, [activeTableId]: updatedTablePlacements };
    savePlacements(newPlacements);

    if (selectedCellId === activePlacements[slotId]) {
      setSelectedCellId(null);
    }
  };

  // Clicking an item in the bank
  const handleBankItemClick = (cell: TableCell) => {
    if (selectedCellId === cell.id) {
      setSelectedCellId(null); // Deselect if tapped again
    } else {
      setSelectedCellId(cell.id);
      onItemClick(cell.keywords); // Highlight in story
    }
  };

  // Auto-fill correctly (Auto-Solve)
  const handleAutoSolve = () => {
    const updatedTablePlacements: { [key: string]: string } = {};
    activeTable.cells.forEach((cell) => {
      updatedTablePlacements[`${cell.correctRow}-${cell.correctCol}`] = cell.id;
    });

    const newPlacements = { ...placements, [activeTableId]: updatedTablePlacements };
    savePlacements(newPlacements);
    setSelectedCellId(null);
    setValidationMode({ ...validationMode, [activeTableId]: false });
  };

  // Reset/Clear board
  const handleClearBoard = () => {
    const updatedTablePlacements: { [key: string]: null } = {};
    activeTable.rows.forEach((_, rowIndex) => {
      for (let c = 1; c < activeTable.columns.length; c++) {
        updatedTablePlacements[`${rowIndex}-${c}`] = null;
      }
    });

    const newPlacements = { ...placements, [activeTableId]: updatedTablePlacements };
    savePlacements(newPlacements);
    setSelectedCellId(null);
    setValidationMode({ ...validationMode, [activeTableId]: false });
  };

  // Toggle check/validation mode
  const handleToggleVerify = () => {
    setValidationMode({
      ...validationMode,
      [activeTableId]: !validationMode[activeTableId]
    });
  };

  // Helper score categorization with "Artistic Flair" dark premium palette
  const getEvaluationTag = (percent: number) => {
    if (percent === 100) return { label: "Sales Architect Expert", color: "bg-emerald-950/40 text-emerald-300 border-emerald-500/40" };
    if (percent >= 75) return { label: "Senior Director", color: "bg-sky-950/40 text-sky-300 border-sky-500/40" };
    if (percent >= 40) return { label: "Enterprise Account Manager", color: "bg-amber-950/40 text-amber-300 border-amber-500/40" };
    return { label: "MEDDPICC Trainee", color: "bg-slate-900/40 text-slate-400 border-slate-700/40" };
  };

  const evalTag = getEvaluationTag(activeStats.scorePercentage);

  return (
    <div className="flex flex-col h-full bg-[#0e1015]/80 text-slate-100 border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden">
      {/* Table Dropdown Selection List & Controls */}
      <div className="bg-[#090b10] border-b border-slate-800/80 p-3 select-none shrink-0 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 w-full md:w-auto flex-1">
          <label htmlFor="table-selector" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
            Active Sub-Table:
          </label>
          <div className="relative flex-1 md:max-w-md">
            <select
              id="table-selector"
              value={activeTableId}
              onChange={(e) => {
                setActiveTableId(e.target.value);
                setSelectedCellId(null);
              }}
              className="w-full bg-[#0c0d12] border border-slate-800 hover:border-sky-500/50 text-slate-100 pl-3 pr-10 py-2 text-xs sm:text-sm font-bold rounded-xl cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500/40 transition-all appearance-none text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {MEDDPICC_TABLES.map((table) => {
                const stats = getTableStats(table);
                const isComplete = stats.placedCount === stats.totalSlots;
                const isPerfect = stats.correct === stats.totalSlots;
                const statusSymbol = isPerfect && isComplete ? "✅ " : isComplete ? "📝 " : "⏳ ";
                const statusText = isPerfect && isComplete ? "Perfect Alignment" : isComplete ? `Placed (${stats.correct}/${stats.totalSlots})` : `Progress (${stats.placedCount}/${stats.totalSlots})`;
                
                return (
                  <option key={table.id} value={table.id} className="bg-[#0c0d12] text-slate-200">
                    {statusSymbol} {table.title.split(":")[0]} - {table.title.split(":").slice(1).join(":")} ({statusText})
                  </option>
                );
              })}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2.5 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0">
          <button
            type="button"
            id="prev-table-btn"
            onClick={() => {
              const activeIndex = MEDDPICC_TABLES.findIndex(t => t.id === activeTableId);
              if (activeIndex > 0) {
                setActiveTableId(MEDDPICC_TABLES[activeIndex - 1].id);
                setSelectedCellId(null);
              }
            }}
            disabled={activeTableId === MEDDPICC_TABLES[0].id}
            className="px-3 py-1.5 text-xs font-bold border border-slate-800/80 rounded-xl bg-[#0c0d12] text-slate-400 hover:text-slate-100 hover:border-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer flex-1 md:flex-none text-center"
          >
            &larr; Prev Sub-Table
          </button>
          <button
            type="button"
            id="next-table-btn"
            onClick={() => {
              const activeIndex = MEDDPICC_TABLES.findIndex(t => t.id === activeTableId);
              if (activeIndex < MEDDPICC_TABLES.length - 1) {
                setActiveTableId(MEDDPICC_TABLES[activeIndex + 1].id);
                setSelectedCellId(null);
              }
            }}
            disabled={activeTableId === MEDDPICC_TABLES[MEDDPICC_TABLES.length - 1].id}
            className="px-3 py-1.5 text-xs font-bold border border-[#1c223c]/40 rounded-xl bg-[#0c0d12] text-slate-400 hover:text-slate-100 hover:border-slate-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer flex-1 md:flex-none text-center"
          >
            Next Sub-Table &rarr;
          </button>
        </div>
      </div>

      {/* Board Brief & Quick Control Buttons */}
      <div className="bg-[#07080c]/90 border-b border-slate-800/85 px-5 py-3.5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
        <div>
          <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase flex items-center gap-2">
            {activeTable.title}
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">{activeTable.description}</p>
        </div>

        {/* Board Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {validationMode[activeTableId] && (
            <div className={`px-2.5 py-1 text-[10px] font-black rounded-lg border uppercase tracking-wider flex items-center gap-1.5 ${evalTag.color}`}>
              <Sparkles className="w-3 h-3" />
              <span>{evalTag.label} ({activeStats.correct}/{activeStats.totalSlots})</span>
            </div>
          )}

          <button
            onClick={handleToggleVerify}
            disabled={activeStats.placedCount === 0}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 border cursor-pointer ${
              activeStats.placedCount === 0
                ? "bg-slate-800/40 border-slate-800/60 text-slate-500 cursor-not-allowed"
                : validationMode[activeTableId]
                ? "bg-amber-600/95 text-amber-50 border-amber-500 hover:bg-amber-500"
                : "bg-sky-600/95 text-sky-50 border-sky-500 hover:bg-sky-500"
            }`}
          >
            {validationMode[activeTableId] ? (
              <>
                <Undo className="w-3.5 h-3.5" />
                <span>Edit Layout</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verify Placement</span>
              </>
            )}
          </button>

          <button
            onClick={handleAutoSolve}
            title="Auto-fill correct alignment"
            className="px-3 py-1.5 text-xs font-bold bg-[#131622] text-sky-300 border border-slate-800 hover:bg-[#191e32] hover:border-sky-500/30 rounded-xl transition-all cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Auto-Solve</span>
          </button>

          <button
            onClick={handleClearBoard}
            disabled={activeStats.placedCount === 0}
            title="Clear placements"
            className="p-1.5 px-2.5 text-xs font-bold bg-[#090b10] text-slate-400 hover:text-rose-450 border border-slate-850 rounded-xl transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Chessboard Play Table */}
      <div className="flex-1 overflow-auto p-4 md:p-5 bg-[#07080c] scrollbar-thin">
        {selectedCellId && (
          <div className="mb-4 p-2 bg-sky-950/20 border border-sky-800/60 rounded-xl text-xs text-sky-300 flex items-center gap-2 animate-pulse justify-between">
            <span className="flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
              Selected Item: "{activeTable.cells.find(c => c.id === selectedCellId)?.text}"
            </span>
            <button 
              onClick={() => setSelectedCellId(null)}
              className="px-2 py-0.5 bg-sky-900/40 hover:bg-sky-800/60 rounded text-[10px] text-sky-200 font-bold uppercase transition-all"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="min-w-[850px] border border-slate-800/60 rounded-xl overflow-hidden bg-[#0a0c11] shadow-2xl">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-[#090b10] border-b border-slate-800/80 text-slate-400">
                {activeTable.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-400 ${
                      i === 0 ? "w-1/5 border-r border-slate-800/80" : "w-[26%]"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850">
              {activeTable.rows.map((rowName, rIndex) => (
                <tr key={rowName} className="hover:bg-slate-900/10 transition-colors">
                  {/* Left Column Fixed Anchor */}
                  <td className="py-4 px-4 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-r border-slate-800/80 bg-[#07080c]/60 align-middle">
                    <span 
                      onClick={() => onItemClick([rowName])}
                      className="cursor-pointer hover:text-sky-400 transition-colors flex items-center justify-between group"
                    >
                      {rowName}
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 opacity-0 group-hover:opacity-100" />
                    </span>
                  </td>

                  {/* Rest of the column slots */}
                  {activeTable.columns.slice(1).map((colName, cOffset) => {
                    const cIndex = cOffset + 1;
                    const slotKey = `${rIndex}-${cIndex}`;
                    const placedId = activePlacements[slotKey];
                    const placedItem = activeTable.cells.find((cel) => cel.id === placedId);
                    const isSelected = selectedCellId === placedId && placedId !== null;

                    // Verify placement feedback details
                    let checkStyles = "border-[#1c223c]/40 bg-[#0e111a]/45 hover:bg-[#121522]/55";
                    let validationIcon = null;

                    if (dragOverSlot === slotKey) {
                      checkStyles = "border-sky-450 bg-sky-950/40 ring-1 ring-sky-500/60 scale-[1.02] shadow-lg shadow-sky-500/10";
                    } else if (validationMode[activeTableId] && placedId) {
                      // Retrieve what SHOULD go into this cell coordinate
                      const correctCellDef = activeTable.cells.find(
                        (cell) => cell.correctRow === rIndex && cell.correctCol === cIndex
                      );
                      const isCorrect = correctCellDef && placedItem && placedItem.text === correctCellDef.text;

                      if (isCorrect) {
                        checkStyles = "border-emerald-500 bg-emerald-950/20 ring-1 ring-emerald-500/20";
                        validationIcon = <Check className="w-3 h-3 text-emerald-400 shrink-0 font-bold" />;
                      } else {
                        checkStyles = "border-rose-500 bg-rose-950/20 ring-1 ring-rose-500/20 animate-shake";
                        validationIcon = <XCircle className="w-3 h-3 text-rose-400 shrink-0" />;
                      }
                    } else if (isSelected) {
                      checkStyles = "border-sky-500 bg-sky-950/30 ring-1 ring-sky-500/40";
                    }

                    return (
                      <td key={colName} className="p-2 align-middle">
                        <div
                          onClick={() => handleSlotClick(rIndex, cIndex)}
                          onDragOver={(e) => handleDragOver(e, slotKey)}
                          onDragEnter={(e) => handleDragEnter(e, slotKey)}
                          onDragLeave={(e) => handleDragLeave(e, slotKey)}
                          onDrop={(e) => handleDrop(e, rIndex, cIndex)}
                          className={`min-h-[76px] h-full rounded-xl border border-dashed p-3 transition-all flex flex-col justify-between cursor-pointer group relative ${checkStyles}`}
                        >
                          {placedItem ? (
                            <div 
                              draggable={!validationMode[activeTableId]}
                              onDragStart={(e) => handleDragStart(e, { type: "board", id: placedId, sourceSlot: slotKey })}
                              onDragEnd={handleDragEnd}
                              className="flex flex-col h-full justify-between gap-1.5 cursor-grab active:cursor-grabbing"
                            >
                              {/* Inner button card */}
                              <div className="text-xs font-semibold text-slate-100 leading-relaxed line-clamp-3 group-hover:line-clamp-none select-none">
                                {placedItem.text}
                              </div>
                              <div className="flex items-center justify-between mt-1 text-[9px] text-slate-500 shrink-0 pt-1.5 border-t border-slate-805">
                                <span className="flex items-center gap-1 font-mono tracking-wider uppercase text-[8px] text-slate-500">
                                  {validationIcon}
                                  {validationIcon ? "" : "Placed"}
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => handleRemoveFromSlot(slotKey, e)}
                                  className="p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors"
                                  title="Remove item back to bank"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full min-h-[50px] text-slate-600 hover:text-slate-405 text-[10px] font-mono transition-colors">
                              <span>Empty Slot</span>
                              <span className="text-[9px] text-slate-700 font-sans mt-0.5 group-hover:text-sky-500/65 transition-colors">
                                {selectedCellId ? "Place piece here" : "Drag / Click option"}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selectable Button Chess Bank / Vault */}
      <div 
        onDragOver={handleBankDragOver}
        onDragEnter={handleBankDragEnter}
        onDragLeave={handleBankDragLeave}
        onDrop={handleBankDrop}
        className={`bg-[#090b10] border-t border-slate-800/80 p-4 shrink-0 max-h-[300px] overflow-y-auto transition-all ${
          bankDragOver ? "bg-[#131b2d] border-dashed border-sky-500/30" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Selectable Button Bank ({bankItems.length} available)
            </span>
            <span className="text-[10px] bg-slate-900 border border-slate-800/80 text-sky-400 px-2 py-0.5 rounded font-mono font-bold">
              Table {activeTableId.replace("table", "").replace("_", ".")} Elements
            </span>
          </div>
          <span className="text-[10px] text-slate-500">
            {bankDragOver ? "Drop to deploy item back to bank" : "Drag elements to the slots above or click to select."}
          </span>
        </div>

        {bankItems.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-500 bg-[#07080c]/50 rounded-xl border border-dashed border-slate-800/80 flex flex-col items-center justify-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 animate-bounce" />
            <span className="font-semibold text-slate-300 uppercase tracking-widest text-[10px]">All key elements deployed</span>
            <span className="text-[11px] text-slate-500">Practice complete! Query "Verify Placement" above to review decision alignments.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {bankItems.map((cell) => {
              const matchesSelected = selectedCellId === cell.id;
              const isDragged = draggedItem?.id === cell.id;

              return (
                <button
                  key={cell.id}
                  draggable={!validationMode[activeTableId]}
                  onDragStart={(e) => handleDragStart(e, { type: "bank", id: cell.id })}
                  onDragEnd={handleDragEnd}
                  onClick={() => handleBankItemClick(cell)}
                  className={`p-3 text-left rounded-xl border text-xs font-semibold leading-relaxed transition-all duration-200 cursor-grab active:cursor-grabbing flex flex-col justify-between gap-2.5 shadow-md ${
                    matchesSelected
                      ? "bg-sky-500/15 border-sky-400 text-sky-200 shadow-lg ring-1 ring-sky-500/30 scale-[0.99]"
                      : isDragged
                      ? "opacity-40 border-dashed border-sky-500/30"
                      : "bg-[#0e111a] border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-[#121522]"
                  }`}
                >
                  <span className="line-clamp-3 hover:line-clamp-none transition-all duration-150 select-none">
                    {cell.text}
                  </span>
                  
                  <div className="flex items-center justify-between text-[8px] font-mono tracking-wider uppercase text-slate-500 border-t border-slate-800/40 pt-2 shrink-0 select-none">
                    <span className="text-slate-400">
                      {activeTable.columns[cell.correctCol]}
                    </span>
                    <span className="text-sky-500 hover:text-sky-400">
                      Trace text
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
