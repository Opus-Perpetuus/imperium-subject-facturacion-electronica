import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-facturacion-electronica";

export const cfdi_catalog_pages: KirletPageDecl[] = [
  {
    id: "facturacion-electronica.cfdi-catalog",
    path: "cfdi-catalog",
    permission: "subject.facturacion-electronica.cfdi-catalog.read",
    build: () =>
      build_feature_shell_page({
        id: "facturacion-electronica.cfdi-catalog",
        owner: "subject-facturacion-electronica",
        title: "Cfdi Catalog",
        props: {
          basePath: "cfdi-catalog",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Cfdi Catalog",
            subtitle: "Submenú de facturacion-electronica",
            pluralLabel: "cfdi catalog",
            singularLabel: "cfdi catalog",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/cfdi-catalog`,
            record: `${API}/cfdi-catalog/:id`,
            create: { method: "POST", action: `${API}/cfdi-catalog` },
            update: { method: "PATCH", action: `${API}/cfdi-catalog/:id` },
            delete: { method: "DELETE", action: `${API}/cfdi-catalog/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "catalog", label: "catalog", sortable: true, priority: 3 },
              { key: "code", label: "code", sortable: true, priority: 3 },
              { key: "vigencia_desde", label: "vigencia desde", sortable: true, priority: 3 },
              { key: "vigencia_hasta", label: "vigencia hasta", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "catalog", component: "input-text", label: "catalog" },
              { name: "code", component: "input-text", label: "code" },
              { name: "vigencia_desde", component: "input-text", label: "vigencia desde" },
              { name: "vigencia_hasta", component: "input-text", label: "vigencia hasta" },
            ],
          },
        },
      }),
  },
];
