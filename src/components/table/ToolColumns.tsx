import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './Columns';
import {
  createLanguagesColumn,
  createLinksColumn,
  createNameColumn,
  createVersionBadgesColumn,
} from './Columns';

export const ToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createLanguagesColumn(),
  createVersionBadgesColumn(),
  createLinksColumn('category-landing-page-table'),
];
