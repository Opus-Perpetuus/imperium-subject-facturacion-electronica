import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { cfdi_catalog_pages } from "./cfdi-catalog.pages.ts";
import { cfdi_catalog_tables } from "./cfdi-catalog.tables.ts";

export const cfdi_catalog_module = define_module({
  resource: "cfdi-catalog",
  labels: {
    singular: "Cfdi Catalog",
    plural: "Cfdi Catalog",
    read: "Ver Cfdi Catalog",
    write: "Editar Cfdi Catalog",
  },
  routes: define_crud({
    resource: "cfdi-catalog",
    table: "cfdi_catalog",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "cfdi-cat",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      catalog: { type: "string", search: true },
      code: { type: "string", search: true },
      vigencia_desde: { type: "string", search: true },
      vigencia_hasta: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: cfdi_catalog_tables,
  pages: cfdi_catalog_pages,
  menu: [],
});
