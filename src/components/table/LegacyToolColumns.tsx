import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './Columns';
import {
  createIndividualVersionColumn,
  createLanguagesColumn,
  createLinksColumn,
  createNameColumn,
} from './Columns';

export const LegacyToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createLanguagesColumn(),
  createIndividualVersionColumn('v3', 'v3.0'),
  createIndividualVersionColumn('v2', 'v2.0'),
  createLinksColumn('legacy-page-table'),
];
