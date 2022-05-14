"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversorMoedas = void 0;
const Validator_1 = require("../../Validator");
const fetch = (url, init) => Promise.resolve().then(() => __importStar(require("node-fetch"))).then(({ default: fetch }) => fetch(url, init));
function conversorMoedas(moeda) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, Validator_1.validatorConversorMoedas)(moeda);
        const API_URL = "https://economia.awesomeapi.com.br/last/GBP-BRL,NOK-BRL,BTC-BRL,NZD-BRL,CHF-BRL,ETH-BRL,DKK-BRL,COP-BRL,RUB-BRL,CNY-BRL,INR-BRL,MXN-BRL,PLN-BRL,EUR-BRL,SAR-BRL,TRY-BRL,PYG-BRL,AED-BRL,HKD-BRL,XRP-BRL,ZAR-BRL,CAD-BRL,JPY-BRL,ILS-BRL,USD-BRL,SEK-BRL,THB-BRL,PEN-BRL,SGD-BRL,DOGE-BRL,TWD-BRL,LTC-BRL,AUD-BRL,CLP-BRL,BOB-BRL,ARS-BRL,UYU-BRL";
        const result = yield fetch(API_URL);
        const data = (yield result.json());
        if (typeof moeda !== "string") {
            return null;
        }
        if (moeda == "dolar") {
            return data.USDBRL.ask;
        }
        else if (moeda == "libraEsterlina") {
            return data.GBPBRL.ask;
        }
        else if (moeda == "coroaNorueguesa") {
            return data.NOKBRL.ask;
        }
        else if (moeda == "bitcoin") {
            return data.BTCBRL.ask * 1000;
        }
        else if (moeda == "dolarNeozelandes") {
            return data.NZDBRL.ask;
        }
        else if (moeda == "francoSuico") {
            return data.CHFBRL.ask;
        }
        else if (moeda == "etherium") {
            return data.ETHBRL.ask;
        }
        else if (moeda == "coroaDinamarquesa") {
            return data.DKKBRL.ask;
        }
        else if (moeda == "pesoColombiano") {
            return data.COPBRL.ask;
        }
        else if (moeda == "rubloRusso") {
            return data.RUBBRL.ask;
        }
        else if (moeda == "yuanChines") {
            return data.CNYBRL.ask;
        }
        else if (moeda == "rupiaIndiana") {
            return data.INRBRL.ask;
        }
        else if (moeda == "pesoMexicano") {
            return data.MXNBRL.ask;
        }
        else if (moeda == "zlotiPolones") {
            return data.PLNBRL.ask;
        }
        else if (moeda == "euro") {
            return data.EURBRL.ask;
        }
        else if (moeda == "riyalSaudita") {
            return data.SARBRL.ask;
        }
        else if (moeda == "novaLiraTurca") {
            return data.TRYBRL.ask;
        }
        else if (moeda == "guaraniParaguaio") {
            return data.PYGBRL.ask;
        }
        else if (moeda == "dirhamDosEmirados") {
            return data.AEDBRL.ask;
        }
        else if (moeda == "dolarHongKong") {
            return data.HKDBRL.ask;
        }
        else if (moeda == "xrp") {
            return data.XRPBRL.ask;
        }
        else if (moeda == "randSulAfricano") {
            return data.ZARBRL.ask;
        }
        else if (moeda == "dolarCanadense") {
            return data.CADBRL.ask;
        }
        else if (moeda == "ieneJapones") {
            return data.JPYBRL.ask;
        }
        else if (moeda == "novoShekelIsraelense") {
            return data.ILSBRL.ask;
        }
        else if (moeda == "coroaSueca") {
            return data.SEKBRL.ask;
        }
        else if (moeda == "bahtTailandes") {
            return data.THBBRL.ask;
        }
        else if (moeda == "solDoPeru") {
            return data.PENBRL.ask;
        }
        else if (moeda == "dolarCingapura") {
            return data.SGDBRL.ask;
        }
        else if (moeda == "dogecoin") {
            return data.DOGEBRL.ask;
        }
        else if (moeda == "dolarTaiunes") {
            return data.TWDBRL.ask;
        }
        else if (moeda == "litecoin") {
            return data.LTCBRL.ask;
        }
        else if (moeda == "dolarAustraliano") {
            return data.AUDBRL.ask;
        }
        else if (moeda == "pesoChileno") {
            return data.CLPBRL.ask;
        }
        else if (moeda == "boliviano") {
            return data.BOBBRL.ask;
        }
        else if (moeda == "pesoArgentino") {
            return data.ARSBRL.ask;
        }
        else if (moeda == "pesoUruguaio") {
            return data.UYUBRL.ask;
        }
        else {
            throw "Informe uma moeda válida. Mais informações em https://github.com/wesleyara/mat-package";
        }
    });
}
exports.conversorMoedas = conversorMoedas;
