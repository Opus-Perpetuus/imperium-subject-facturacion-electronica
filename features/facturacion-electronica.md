# Facturación electrónica

Quien usa la app abre el menú «Facturación electrónica» y consulta las
listas de catálogos CFDI, documentos CFDI y perfiles de emisor. Queda probado
que cada lista responde a su ruta con la sesión del rol que tiene el permiso
de lectura.

## Sub-features

La app lista registros de `cfdi-catalog`, `cfdi-document` y
`cfdi-issuer-profile`. Escribe: no en las recetas de esta ficha. Esta ficha
no lleva línea `Subject:` con imagen: el catálogo no da un tag para
rellenarla. El hueco está en `despliegue.md`.

- `cfdi-catalog` responde `GET /cfdi-catalog` con status 200.
- `cfdi-document` responde `GET /cfdi-document` con status 200.
- `cfdi-issuer-profile` responde `GET /cfdi-issuer-profile` con status 200.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-facturacion-electronica`
  con los módulos `cfdi`, `cfdi-catalog`, `cfdi-document` y
  `cfdi-issuer-profile`.
- `src/modules/<recurso>/<recurso>.routes.ts` — `define_crud` del kit:
  `GET /<recurso>` es la lectura que juzga la receta.
- `manifest.json` — menú `facturacion-electronica.root` y permisos
  `subject.facturacion-electronica.<recurso>.read`.

### Mapa

Base QA y rol semilla: sin definir en este repo. Hasta que se nombren, las
recetas salen `omitida`.

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-facturacion-electronica.cfdi-catalog` | `/cfdi-catalog` | sin definir | GET con sesión | HTTP 200 | no | `arnes cfdi-catalog` |
| `subject-facturacion-electronica.cfdi-document` | `/cfdi-document` | sin definir | GET con sesión | HTTP 200 | no | `arnes cfdi-document` |
| `subject-facturacion-electronica.cfdi-issuer-profile` | `/cfdi-issuer-profile` | sin definir | GET con sesión | HTTP 200 | no | `arnes cfdi-issuer-profile` |

## How to get to it (user POV)

- Menú «Facturación electrónica» → «Cfdi Catalog», «Cfdi Document» o
  «Cfdi Issuer Profile».

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-facturacion-electronica`, la receta sale
  `omitida`.
- Base QA y rol semilla nombrados en el mapa; si no, `omitida`.

- **Abrir.** `GET /<recurso>` responde 200 para cada sub-feature.
- **Proof.** `evidence/facturacion-electronica/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Mutar solo contra la base QA nombrada arriba.
- `omitida` no cuenta como probada.
