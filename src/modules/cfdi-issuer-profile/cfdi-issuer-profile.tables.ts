import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const cfdi_issuer_profile_tables: KirletTableDecl[] = [
  {
    name: "cfdi_issuer_profile",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "rfc", type: "text" },
      { name: "regimen_fiscal", type: "text" },
      { name: "lugar_expedicion", type: "text" },
      { name: "perfil_emision_default", type: "text" },
      { name: "nombre_fiscal", type: "text" },
      { name: "serie_default", type: "text" },
      { name: "folio_siguiente", type: "real" },
      { name: "branchoffice", type: "text" },
      { name: "is_default", type: "boolean" },
    ],
    indexes: [
      { name: "idx_cfdi_issuer_profile_name", columns: ["name"] },
      { name: "idx_cfdi_issuer_profile_active", columns: ["is_active"] },
    ],
  },
];
