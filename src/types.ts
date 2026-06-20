/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TableCell {
  id: string; // Unique ID for the cell/button item
  text: string; // Cell content text
  correctRow: number; // Correct row index (0-indexed)
  correctCol: number; // Correct column index (0-indexed)
  keywords: string[]; // Keywords to map to success story text
}

export interface TableConfig {
  id: string; // Unique table id (e.g. 'table3')
  title: string; // Table title (e.g. 'Table 3: Decision Criteria')
  description: string; // Explanatory text
  columns: string[]; // Column headers
  rows: string[]; // Leftmost anchor column elements (row header texts)
  cells: TableCell[]; // Draggable/placable cells (not including the row header itself if it's treated as anchor)
}

export interface Paragraph {
  id: string; // Unique paragraph ID for scrolling & highlighting
  sectionId: string; // E.g. '1', '2', '3.1'
  text: string; // Clean text for rendering
}

export interface StorySection {
  id: string;
  title: string;
  paragraphs: Paragraph[];
}

export interface BoardState {
  [tableId: string]: {
    // Maps "rowIndex-colIndex" (e.g. "0-1" for Row 0, Column 1) to placed Cell ID
    placements: { [slotId: string]: string | null };
    // List of cell IDs remaining in the bank
    bank: string[];
  };
}
