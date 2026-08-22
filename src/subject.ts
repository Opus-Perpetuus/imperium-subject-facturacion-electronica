import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { cfdi_module } from "./modules/cfdi/cfdi.routes.ts";
import { cfdi_catalog_module } from "./modules/cfdi-catalog/cfdi-catalog.routes.ts";
import { cfdi_document_module } from "./modules/cfdi-document/cfdi-document.routes.ts";
import { cfdi_issuer_profile_module } from "./modules/cfdi-issuer-profile/cfdi-issuer-profile.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-facturacion-electronica",
  name: "Facturación electrónica",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-facturacion-electronica:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "facturacion-electronica.root",
    label: "Facturación electrónica",
    order: 0,
  },
  modules: [cfdi_module, cfdi_catalog_module, cfdi_document_module, cfdi_issuer_profile_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
