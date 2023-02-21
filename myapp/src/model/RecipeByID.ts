export interface RecipeIdInfo {
    recipe: RecipeByID[]
}

export interface RecipeByID {
    vegetarian:               boolean;
    vegan:                    boolean;
    glutenFree:               boolean;
    dairyFree:                boolean;
    veryHealthy:              boolean;
    cheap:                    boolean;
    veryPopular:              boolean;
    sustainable:              boolean;
    lowFodmap:                boolean;
    weightWatcherSmartPoints: number;
    gaps:                     string;
    preparationMinutes:       number;
    cookingMinutes:           number;
    aggregateLikes:           number;
    healthScore:              number;
    creditsText:              string;
    license:                  string;
    sourceName:               string;
    pricePerServing:          number;
    extendedIngredients:      ExtendedIngredient[];
    id:                       number;
    title:                    string;
    readyInMinutes:           number;
    servings:                 number;
    sourceUrl:                string;
    image:                    string;
    imageType:                string;
    summary:                  string;
    cuisines:                 any[];
    dishTypes:                string[];
    diets:                    any[];
    occasions:                any[];
    winePairing:              WinePairing;
    instructions:             string;
    analyzedInstructions:     Analyzed[];
    originalId:               null;
    spoonacularSourceUrl:     string;
}

export interface ExtendedIngredient {
    id:           number;
    aisle:        string;
    image:        string;
    consistency:  Consistency;
    name:         string;
    nameClean:    string;
    original:     string;
    originalName: string;
    amount:       number;
    unit:         string;
    meta:         string[];
    measures:     Measures;
}

export enum Consistency {
    Liquid = "LIQUID",
    Solid = "SOLID",
}

export interface Measures {
    us:     Metric;
    metric: Metric;
}

export interface Metric {
    amount:    number;
    unitShort: string;
    unitLong:  string;
}

export interface WinePairing {
    pairedWines:    any[];
    pairingText:    string;
    productMatches: any[];
}

export interface Analyzed {
    name:  string;
    steps: Step[];
}

export interface Step {
    equipment:   Ent[];
    ingredients: Ent[];
    number:      number;
    step:        string;
    length?:     Length;
}

export interface Ent {
    id:           number;
    image:        string;
    name:         string;
    temperature?: Length;
}

export interface Length {
    number: number;
    unit:   string;
}