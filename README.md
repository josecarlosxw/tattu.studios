# Black Ink Studio

Site de portfólio para um estúdio de tatuagem fictício. É um MVP demonstrativo: front-end estático, sem backend, banco de dados ou painel administrativo.

> **Demo:** `https://SEU-USUARIO.github.io/black-ink-studio/` (após ativar o GitHub Pages, veja abaixo)

## Funcionalidades

- Home com destaques, estilos e chamada para agendamento
- Portfólio filtrável por estilo, parte do corpo e tamanho
- Página individual de cada trabalho, com lightbox para as imagens
- Página do estúdio e do tatuador
- Agendamento via WhatsApp
- Navegação por hash (sem recarregar a página) com transições suaves, respeitando `prefers-reduced-motion`

## Tecnologias

HTML, CSS e JavaScript puro (scripts clássicos, sem módulos e sem build). Fontes via Google Fonts (Alfa Slab One e Work Sans).

## Como rodar

Não precisa instalar nada. Clone o repositório e abra o `index.html` no navegador, mantendo a pasta `public/` ao lado dele:

```bash
git clone https://github.com/SEU-USUARIO/black-ink-studio.git
cd black-ink-studio
# abra o index.html, ou sirva a pasta com qualquer servidor estático:
python3 -m http.server 8000
```

## Estrutura

```
index.html            casca HTML: carrega CSS e scripts
public/
  favicon.png
  images/{artists,studio,works}/
src/
  data/               dados mockados: styles, studio, works
  styles/             base, components, layout, home, lightbox
  scripts/            utils, router, events
  components/         blocks (imagem, card, chip, artista), lightbox, header
  pages/              uma página por rota: home, portfolio, trabalho, estudio, agendar
```

## Rotas

| Rota | Página |
| --- | --- |
| `#/` | Home |
| `#/portfolio/<estilo>?part=&size=` | Portfólio com filtros |
| `#/trabalho/<id>` | Detalhe de um trabalho |
| `#/estudio` | Estúdio e tatuador |
| `#/agendar` | Agendamento |

## Convenções do código

Os scripts compartilham o escopo global, então **a ordem das tags `<script>` no `index.html` importa**: data, utils, components, pages, router, events.

Para adicionar uma página, crie `src/pages/<nome>.js` com `views.<nome> = ...` e inclua a tag antes de `scripts/router.js`.

## Personalização

- Dados do estúdio e do tatuador: `src/data/studio.js`. O campo `wa` usa um número fictício; troque pelo real (somente dígitos, com `55`).
- Estilos de tatuagem: `src/data/styles.js`
- Trabalhos do portfólio: `src/data/works.js` (as imagens ficam em `public/images/works/`). Portfólio e cards de estilo mostram apenas estilos que têm trabalho; o agendamento lista todos.

## Publicar no GitHub Pages

O repositório já inclui o workflow `.github/workflows/pages.yml`. Basta ir em **Settings → Pages → Build and deployment → Source** e escolher **GitHub Actions**. A cada push na branch `main` o site é publicado.

## Licença

Código sob licença [MIT](LICENSE). As imagens em `public/images/` e todos os dados (nomes, endereço, contatos) são demonstrativos e fictícios, e não estão licenciados para reutilização.
