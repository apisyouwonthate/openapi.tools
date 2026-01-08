import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './SharedColumns';
import {
  createLanguagesColumn,
  createLinksColumn,
  createNameColumn,
  createVersionTextColumn,
} from './SharedColumns';

export const ToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createLanguagesColumn(),
  createVersionTextColumn(),
  createLinksColumn('category-landing-page-table'),
];
