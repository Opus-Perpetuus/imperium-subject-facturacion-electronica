import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { cfdi_issuer_profile_pages } from "./cfdi-issuer-profile.pages.ts";
import { cfdi_issuer_profile_tables } from "./cfdi-issuer-profile.tables.ts";

export const cfdi_issuer_profile_module = define_module({
  resource: "cfdi-issuer-profile",
  labels: {
    singular: "Cfdi Issuer Profile",
    plural: "Cfdi Issuer Profile",
    read: "Ver Cfdi Issuer Profile",
    write: "Editar Cfdi Issuer Profile",
  },
  routes: define_crud({
    resource: "cfdi-issuer-profile",
    table: "cfdi_issuer_profile",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "cfdi-iss",
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
      rfc: { type: "string", search: true },
      regimen_fiscal: { type: "string", search: true },
      lugar_expedicion: { type: "string", search: true },
      perfil_emision_default: { type: "string", search: true },
      nombre_fiscal: { type: "string", search: true },
      serie_default: { type: "string", search: true },
      folio_siguiente: { type: "number" },
      branchoffice: { type: "string", search: true },
      is_default: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: cfdi_issuer_profile_tables,
  pages: cfdi_issuer_profile_pages,
  menu: [],
});
