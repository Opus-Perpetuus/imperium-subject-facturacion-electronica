import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { cfdi_pages } from "./cfdi.pages.ts";
import { cfdi_tables } from "./cfdi.tables.ts";

export const cfdi_module = define_module({
  resource: "cfdi",
  labels: {
    singular: "Facturación electrónica",
    plural: "Facturación electrónica",
    read: "Ver Facturación electrónica",
    write: "Editar Facturación electrónica",
  },
  routes: define_crud({
    resource: "cfdi",
    table: "cfdi",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "cfdi",
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
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: cfdi_tables,
  pages: cfdi_pages,
  menu: [
    {
      id: "facturacion-electronica.cfdi-catalog",
      label: "Cfdi Catalog",
      order: 0,
      pageId: "facturacion-electronica.cfdi-catalog",
      path: "cfdi-catalog",
      permission: "subject.facturacion-electronica.cfdi-catalog.read",
      icon: "document",
    },
    {
      id: "facturacion-electronica.cfdi-document",
      label: "Cfdi Document",
      order: 0,
      pageId: "facturacion-electronica.cfdi-document",
      path: "cfdi-document",
      permission: "subject.facturacion-electronica.cfdi-document.read",
      icon: "document",
    },
    {
      id: "facturacion-electronica.cfdi-issuer-profile",
      label: "Cfdi Issuer Profile",
      order: 0,
      pageId: "facturacion-electronica.cfdi-issuer-profile",
      path: "cfdi-issuer-profile",
      permission: "subject.facturacion-electronica.cfdi-issuer-profile.read",
      icon: "document",
    }
    ],
});
