import { CurrencyType } from "src/app/share/models/currency-type.enum";

export class Currency {
    private id: string;
    private attributes: {
        code: string;
        name: string;
        currency_type: Array<CurrencyType>;
        code_iso_numeric3: number;
        code_iso_alpha3: string;
        symbol: string;
        native_symbol: string;
        decimal_e: number;
        category: string;
    };

    constructor(){
        this.id = this.id;
        this.attributes = this.attributes;
    }
}