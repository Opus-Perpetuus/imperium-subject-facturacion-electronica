import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-facturacion-electronica";

export const cfdi_document_pages: KirletPageDecl[] = [
  {
    id: "facturacion-electronica.cfdi-document",
    path: "cfdi-document",
    permission: "subject.facturacion-electronica.cfdi-document.read",
    build: () =>
      build_feature_shell_page({
        id: "facturacion-electronica.cfdi-document",
        owner: "subject-facturacion-electronica",
        title: "Cfdi Document",
        props: {
          basePath: "cfdi-document",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Cfdi Document",
            subtitle: "Submenú de facturacion-electronica",
            pluralLabel: "cfdi document",
            singularLabel: "cfdi document",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/cfdi-document`,
            record: `${API}/cfdi-document/:id`,
            create: { method: "POST", action: `${API}/cfdi-document` },
            update: { method: "PATCH", action: `${API}/cfdi-document/:id` },
            delete: { method: "DELETE", action: `${API}/cfdi-document/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "status", label: "status", sortable: true, priority: 3 },
              { key: "perfil_emision", label: "perfil emision", sortable: true, priority: 3 },
              { key: "receptor_rfc", label: "receptor rfc", sortable: true, priority: 3 },
              { key: "receptor_nombre", label: "receptor nombre", sortable: true, priority: 3 },
              { key: "emisor_rfc", label: "emisor rfc", sortable: true, priority: 3 },
              { key: "emisor_nombre", label: "emisor nombre", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "status", component: "input-text", label: "status" },
              { name: "perfil_emision", component: "input-text", label: "perfil emision" },
              { name: "receptor_rfc", component: "input-text", label: "receptor rfc" },
              { name: "receptor_nombre", component: "input-text", label: "receptor nombre" },
              { name: "emisor_rfc", component: "input-text", label: "emisor rfc" },
              { name: "emisor_nombre", component: "input-text", label: "emisor nombre" },
              { name: "total", component: "input-number", label: "total" },
              { name: "uuid", component: "input-text", label: "uuid" },
              { name: "purchase_order_nombre", component: "input-text", label: "purchase order nombre" },
              { name: "purchase_order_id", component: "input-text", label: "purchase order id" },
              { name: "flow_direction", component: "input-text", label: "flow direction" },
              { name: "severity", component: "input-text", label: "severity" },
              { name: "canonical", component: "input-json", label: "canonical" },
              { name: "validation_issues", component: "input-json", label: "validation issues" },
              { name: "source_type", component: "input-text", label: "source type" },
              { name: "source_id", component: "input-text", label: "source id" },
              { name: "issuer_profile", component: "input-text", label: "issuer profile" },
              { name: "contacto", component: "input-text", label: "contacto" },
              { name: "json_revision", component: "input-number", label: "json revision" },
              { name: "purchase_order", component: "input-text", label: "purchase order" },
            ],
          },
        },
      }),
  },
];
