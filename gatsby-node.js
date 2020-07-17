exports.onCreatePage = ({ page, actions }) => {
  // TREBA USTVARI UGRADITI NESTO U PAGE
  // A TO JE INFORMACIJA ZA ROUTER, NA KOJIM, SVE ROUTE-OVIMA DA RENDER-UJE  dashboard  PAGE
  // ALI PRE SVEGA MORAM PRISTUPITI PAGE-U, A PRISTUPAM MU, ZNAJUCI NJEGOV PATH
  // ODNOSNO MORA MA MATCHOVATI TAJ PATH SA REGEXP-OM

  if (page.path.match(/^\/dashboard/)) {
    // OVO NECE BITI null AKO SE PRONADJE ODGOVARAJUCI PAGE
    // E SADA JA MOGU DA DEFINISEM NA KOJIM SVE ROUTE-OVIMA TREBA DA SE RENDER-UJE OVAJ PAGE
    // I ZA TO JA MOGU KORISTITI GLOB PATTERN
    // DA KAZEM                        'RENDER-UJ MOJU KOMPONENTU (page), NA ONIM ROUTE-IMA, KOJI POCINJU SA ONIM STA JA ZELIM, I IAMJU KAO OSTATAK BILO STA'

    page.matchPath = "/dashboard/*";
    // OVAJ matchPath JE POSEBAN KEY ODNONO OVO SU REKLI ZA NJEGA: "is a special key that's used for matching pages
    // with corresponding routes only on the client."

    // I SDA NASTAVLJAM I KREIRAM PAGE

    actions.createPage(page);
  }
};
