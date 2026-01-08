import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './SharedColumns';
import {
  createLanguagesColumn,
  createLinksColumn,
  createNameColumn,
  createVersionBadgesColumn,
} from './SharedColumns';

export const ToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createLanguagesColumn(),
  createVersionBadgesColumn(),
  createLinksColumn('category-landing-page-table'),
];
