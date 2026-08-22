import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-facturacion-electronica";

export const cfdi_issuer_profile_pages: KirletPageDecl[] = [
  {
    id: "facturacion-electronica.cfdi-issuer-profile",
    path: "cfdi-issuer-profile",
    permission: "subject.facturacion-electronica.cfdi-issuer-profile.read",
    build: () =>
      build_feature_shell_page({
        id: "facturacion-electronica.cfdi-issuer-profile",
        owner: "subject-facturacion-electronica",
        title: "Cfdi Issuer Profile",
        props: {
          basePath: "cfdi-issuer-profile",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Cfdi Issuer Profile",
            subtitle: "Submenú de facturacion-electronica",
            pluralLabel: "cfdi issuer profile",
            singularLabel: "cfdi issuer profile",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/cfdi-issuer-profile`,
            record: `${API}/cfdi-issuer-profile/:id`,
            create: { method: "POST", action: `${API}/cfdi-issuer-profile` },
            update: { method: "PATCH", action: `${API}/cfdi-issuer-profile/:id` },
            delete: { method: "DELETE", action: `${API}/cfdi-issuer-profile/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "rfc", label: "rfc", sortable: true, priority: 3 },
              { key: "regimen_fiscal", label: "regimen fiscal", sortable: true, priority: 3 },
              { key: "lugar_expedicion", label: "lugar expedicion", sortable: true, priority: 3 },
              { key: "perfil_emision_default", label: "perfil emision default", sortable: true, priority: 3 },
              { key: "nombre_fiscal", label: "nombre fiscal", sortable: true, priority: 3 },
              { key: "serie_default", label: "serie default", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "rfc", component: "input-text", label: "rfc" },
              { name: "regimen_fiscal", component: "input-text", label: "regimen fiscal" },
              { name: "lugar_expedicion", component: "input-text", label: "lugar expedicion" },
              { name: "perfil_emision_default", component: "input-text", label: "perfil emision default" },
              { name: "nombre_fiscal", component: "input-text", label: "nombre fiscal" },
              { name: "serie_default", component: "input-text", label: "serie default" },
              { name: "folio_siguiente", component: "input-number", label: "folio siguiente" },
              { name: "branchoffice", component: "input-text", label: "branchoffice" },
              { name: "is_default", component: "input-checkbox", label: "is default" },
            ],
          },
        },
      }),
  },
];
