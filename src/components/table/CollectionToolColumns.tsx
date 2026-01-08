import { type ColumnDef } from '@tanstack/react-table';

import type { ToolRowData } from './Columns';
import {
  createLinksColumn,
  createNameColumn,
  createVersionBadgesColumn,
} from './Columns';

export const CollectionToolColumns: ColumnDef<ToolRowData>[] = [
  createNameColumn(),
  createVersionBadgesColumn(),
  createLinksColumn('collection-tools-table'),
];
