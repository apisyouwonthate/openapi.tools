import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './SharedColumns';
import {
  createLinksColumn,
  createNameColumn,
  createVersionBadgesColumn,
} from './SharedColumns';

export const CollectionToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createVersionBadgesColumn(),
  createLinksColumn('collection-tools-table'),
];
