export interface Welcome {
    page: Page;
}

export interface Page {
    items:       Noticia[];
    number:      number;
    size:        number;
    offset:      number;
    total:       number;
    totalPages:  number;
    numElements: number;
}
//por lo pronto puedo decir que a eclipse no le gusta typescript
export interface Noticia {
    uri:                      string;
    htmlUrl:                  string;
    htmlShortUrl:             string;
    id:                       string;
    language:                 string;
    shortTitle:               null;
    mainCategoryRef:          string;
    popularity:               string;
    popHistoric:              string;
    numVisits:                string;
    publicationDate:          string;
    expirationDate:           null;
    modificationDate:         string;
    publicationDateTimestamp: number;
    breadCrumbRef:            string;
    image:                    string;
    imageSEO:                 string;
    contentType:              string;
    statistics:               Statistics;
    contentInitDate:          null;
    contentEndDate:           null;
    anteTitle:                null | string;
    longTitle:                string;
    frontTitle:               null;
    tabTitle:                 null;
    ticker:                   Ticker;
    essentialInfo:            EssentialInfo;
    summary:                  string;
    frontSummary:             null;
    text:                     string;
    refreshSeconds:           number;
    sign:                     Sign;
    pubState:                 PubState;
    mainCategory:             string;
    mainCategoryLang:         string;
    otherTopicsName:          string[];
    otherTopicsRef:           string;
    newsRelatedRef:           string;
    newsEspecialesRef:        string;
    multimediaRelatedRef:     string;
    multimediaTotemRef:       string;
    multimediaDestacadoRef:   string;
    links:                    Links;
    commentOptions:           null;
    rightModule:              null;
    relatedByLangRef:         string;
    title:                    string;
    canonicalUrl:             null;
    anteTitlelUrl:            null;
}

export interface EssentialInfo {
    info:  null;
    photo: null;
}

export interface Links {
    galeriasRelacionadasRef:  string;
    galeriasTotemRef:         string;
    encuestaDestacadaRef:     string;
    encuestasRelacionadasRef: string;
    encuestasTotemRef:        string;
    comentariosRef:           string;
    tagsRef:                  string;
    estadisticasRef:          string;
}

export interface PubState {
    code:        string;
    description: string;
}

export interface Sign {
    ctvId:           null;
    name:            null;
    firma:           string;
    photo:           null;
    twitter:         null;
    facebook:        null;
    otras:           null;
    publicationDate: null;
    numPublications: null;
}

export interface Statistics {
    numComentarios: number;
    numCompartidas: number;
}

export interface Ticker {
    tickerSports: boolean;
    tickerNews:   boolean;
}