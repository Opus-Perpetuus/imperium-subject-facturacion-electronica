import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-facturacion-electronica";

export const cfdi_pages: KirletPageDecl[] = [
  {
    id: "facturacion-electronica.cfdi",
    path: "cfdi",
    permission: "subject.facturacion-electronica.cfdi.read",
    build: () =>
      build_feature_shell_page({
        id: "facturacion-electronica.cfdi",
        owner: "subject-facturacion-electronica",
        title: "Facturación electrónica",
        props: {
          basePath: "cfdi",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Facturación electrónica",
            subtitle: "Submenú de facturacion-electronica",
            pluralLabel: "facturación electrónica",
            singularLabel: "facturación electrónica",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/cfdi`,
            record: `${API}/cfdi/:id`,
            create: { method: "POST", action: `${API}/cfdi` },
            update: { method: "PATCH", action: `${API}/cfdi/:id` },
            delete: { method: "DELETE", action: `${API}/cfdi/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
            ],
          },
        },
      }),
  },
];
